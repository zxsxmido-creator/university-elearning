const fs = require('node:fs/promises');
const path = require('node:path');

const DEFAULT_MARKDOWN_PATH = 'D:/اختبار تصميم مواقع الويب/Web_Design_Hard_Exam_75Q.md';
const DEFAULT_API_BASE_URL = 'https://university-elearning-production-61bf.up.railway.app';
const DEFAULT_OUTPUT_PATH = path.join(__dirname, '..', 'exports', 'web-design-hard-exam-75.cleaned.json');

const ANSWER_INDEX = new Map([
  ['أ', 0],
  ['ا', 0],
  ['ب', 1],
  ['ج', 2],
  ['د', 3]
]);

const FORBIDDEN_PATTERNS = [
  /مستو[ىي]\s+متقدم/g,
  /أصعب\s+سؤال/g,
  /اصعب\s+سؤال/g
];

function cleanSourceText(sourceText) {
  return sourceText
    .replace(/^\uFEFF/, '')
    .replace(/\r\n/g, '\n')
    .replace(/\s*\(?\s*مستو[ىي]\s+متقدم\s*\)?/g, '')
    .replace(
      /يتضمن هذا الاختبار 75 سؤالاً صعباً تغطي الفصول الأول، الثاني، الثالث، والجانب العملي \(HTML, CSS, PHP\) بناءً على المصادر المرفقة\.?/g,
      ''
    )
    .replace(/\s*\(?\s*أصعب\s+سؤال\s*\)?/g, '')
    .replace(/\s*\(?\s*اصعب\s+سؤال\s*\)?/g, '');
}

function cleanInlineText(value) {
  return value
    .replace(/\s+/g, ' ')
    .replace(/\s+([؟،.:])/g, '$1')
    .trim();
}

function getTitle(cleanedText) {
  const titleMatch = cleanedText.match(/^#\s+(.+)$/m);

  if (!titleMatch) {
    throw new Error('Could not find a Markdown title line that starts with "#".');
  }

  return cleanInlineText(titleMatch[1]).replace(/\(\s*\)$/, '').trim();
}

function parseOptions(blockLines, firstOptionIndex, answerLineIndex) {
  const options = [];
  const optionStarts = [];

  for (let index = firstOptionIndex; index < answerLineIndex; index += 1) {
    if (/^[أابجد]\)\s*/.test(blockLines[index])) {
      optionStarts.push(index);
    }
  }

  optionStarts.forEach((startIndex, optionIndex) => {
    const endIndex = optionStarts[optionIndex + 1] ?? answerLineIndex;
    const optionText = blockLines
      .slice(startIndex, endIndex)
      .join(' ')
      .replace(/^[أابجد]\)\s*/, '');

    options.push(cleanInlineText(optionText));
  });

  return options;
}

function parseQuestions(cleanedText) {
  const withoutHeadings = cleanedText
    .replace(/^# .+$/gm, '')
    .replace(/^## .+$/gm, '')
    .trim();
  const blocks = [...withoutHeadings.matchAll(/(?:^|\n)(\d{1,2})\.\s+([\s\S]*?)(?=\n\d{1,2}\.\s+|$)/g)];

  return blocks.map((match) => {
    const questionNumber = Number(match[1]);
    const blockLines = match[2]
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean);
    const answerLineIndex = blockLines.findIndex((line) => /^الإجابة:\s*/.test(line));

    if (answerLineIndex === -1) {
      throw new Error(`Question ${questionNumber} is missing an answer line.`);
    }

    const answerLetter = blockLines[answerLineIndex].replace(/^الإجابة:\s*/, '').trim()[0];
    const firstOptionIndex = blockLines.findIndex((line) => /^[أابجد]\)\s*/.test(line));

    if (firstOptionIndex === -1) {
      throw new Error(`Question ${questionNumber} is missing options.`);
    }

    const prompt = cleanInlineText(blockLines.slice(0, firstOptionIndex).join(' '));
    const options = parseOptions(blockLines, firstOptionIndex, answerLineIndex);
    const answer = ANSWER_INDEX.get(answerLetter);

    if (options.length !== 4) {
      throw new Error(`Question ${questionNumber} must have exactly 4 options. Found ${options.length}.`);
    }

    if (!Number.isInteger(answer) || answer < 0 || answer >= options.length) {
      throw new Error(`Question ${questionNumber} has an invalid answer "${answerLetter}".`);
    }

    return {
      number: questionNumber,
      prompt,
      options,
      answer
    };
  });
}

function validateParsedQuiz(parsedQuiz) {
  if (parsedQuiz.questions.length !== 75) {
    throw new Error(`Expected 75 questions, found ${parsedQuiz.questions.length}.`);
  }

  const allText = JSON.stringify(parsedQuiz);
  const forbiddenMatch = FORBIDDEN_PATTERNS.find((pattern) => pattern.test(allText));

  if (forbiddenMatch) {
    throw new Error(`Cleaned quiz still contains forbidden text matching ${forbiddenMatch}.`);
  }

  parsedQuiz.questions.forEach((question, index) => {
    if (question.number !== index + 1) {
      throw new Error(`Question numbering is not sequential at item ${index + 1}.`);
    }
  });
}

function buildQuizPayload(parsedQuiz) {
  return {
    courseCode: process.env.QUIZ_COURSE_CODE || 'WEB-DESIGN',
    courseName: process.env.QUIZ_COURSE_NAME || 'تصميم مواقع الويب',
    title: process.env.QUIZ_TITLE || parsedQuiz.title,
    description: process.env.QUIZ_DESCRIPTION || '',
    dueDate: process.env.QUIZ_DUE_DATE || '2026-12-31',
    duration: Number(process.env.QUIZ_DURATION || 180),
    points: Number(process.env.QUIZ_POINTS || parsedQuiz.questions.length),
    questions: parsedQuiz.questions.map((question) => ({
      prompt: question.prompt,
      options: question.options,
      answer: question.answer
    }))
  };
}

async function getAdminToken(apiBaseUrl) {
  if (process.env.ADMIN_TOKEN) {
    return process.env.ADMIN_TOKEN;
  }

  if (!process.env.ADMIN_EMAIL || !process.env.ADMIN_PASSWORD) {
    throw new Error('Set ADMIN_TOKEN, or set ADMIN_EMAIL and ADMIN_PASSWORD to authenticate as admin.');
  }

  const response = await fetch(`${apiBaseUrl}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: process.env.ADMIN_EMAIL,
      password: process.env.ADMIN_PASSWORD
    })
  });
  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.msg || `Admin login failed with status ${response.status}.`);
  }

  if (data.user?.role !== 'admin') {
    throw new Error('The authenticated account is not an admin.');
  }

  return data.token;
}

async function uploadQuiz(apiBaseUrl, token, payload) {
  const existingResponse = await fetch(`${apiBaseUrl}/api/quizzes`);
  const existingData = await existingResponse.json().catch(() => ({}));

  if (!existingResponse.ok) {
    throw new Error(`Could not check existing quizzes. Status ${existingResponse.status}.`);
  }

  const duplicate = (existingData.quizzes || []).find((quiz) => {
    const title = quiz.title?.ar || quiz.title?.en || quiz.title;
    return title === payload.title;
  });

  if (duplicate && process.env.ALLOW_DUPLICATE !== 'true') {
    return {
      skipped: true,
      reason: `Quiz "${payload.title}" already exists.`,
      quiz: duplicate
    };
  }

  const response = await fetch(`${apiBaseUrl}/api/quizzes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(payload)
  });
  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.msg || `Quiz upload failed with status ${response.status}.`);
  }

  return {
    skipped: false,
    quiz: data.quiz
  };
}

async function main() {
  const markdownPath = process.argv[2] || process.env.MARKDOWN_PATH || DEFAULT_MARKDOWN_PATH;
  const apiBaseUrl = (process.env.API_BASE_URL || DEFAULT_API_BASE_URL).replace(/\/$/, '');
  const outputPath = process.env.OUTPUT_JSON || DEFAULT_OUTPUT_PATH;
  const rawText = await fs.readFile(markdownPath, 'utf8');
  const cleanedText = cleanSourceText(rawText);
  const parsedQuiz = {
    title: getTitle(cleanedText),
    sourcePath: markdownPath,
    questionCount: 75,
    questions: parseQuestions(cleanedText)
  };

  validateParsedQuiz(parsedQuiz);
  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, `${JSON.stringify(parsedQuiz, null, 2)}\n`, 'utf8');

  if (process.env.DRY_RUN === 'true') {
    console.log(JSON.stringify({
      dryRun: true,
      outputPath,
      title: parsedQuiz.title,
      questionCount: parsedQuiz.questions.length
    }, null, 2));
    return;
  }

  const token = await getAdminToken(apiBaseUrl);
  const result = await uploadQuiz(apiBaseUrl, token, buildQuizPayload(parsedQuiz));

  console.log(JSON.stringify({
    outputPath,
    title: parsedQuiz.title,
    questionCount: parsedQuiz.questions.length,
    upload: result
  }, null, 2));
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
