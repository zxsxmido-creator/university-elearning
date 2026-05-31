const fs = require('node:fs/promises');
const path = require('node:path');

const { quizData } = require('./seed-quiz');

function toMarkdown(data) {
  const lines = [];

  lines.push(`# ${data.title}`);
  lines.push('');
  lines.push(`- المادة: ${data.courseName}`);
  lines.push(`- الوصف: ${data.description}`);
  lines.push(`- عدد الأسئلة: ${data.questions.length}`);
  lines.push(`- المدة: ${data.duration} دقيقة`);
  lines.push(`- الدرجة: ${data.points} نقطة`);
  lines.push('');
  lines.push('انسخ هذا الملف إلى Gemini واطلب منه حل كل سؤال وشرح السبب خطوة بخطوة.');
  lines.push('');

  data.questions.forEach((question, index) => {
    lines.push(`## السؤال ${index + 1}`);
    lines.push(question.prompt);
    lines.push('');

    question.options.forEach((option, optionIndex) => {
      const letter = String.fromCharCode(65 + optionIndex);
      lines.push(`${letter}. ${option}`);
    });

    lines.push('');
  });

  return `${lines.join('\n')}\n`;
}

async function main() {
  const outputDir = path.join(__dirname, '..', 'exports');
  await fs.mkdir(outputDir, { recursive: true });

  const markdownPath = path.join(outputDir, 'cost-accounting-practical-75.md');
  const jsonPath = path.join(outputDir, 'cost-accounting-practical-75.json');

  const exportPayload = {
    title: quizData.title,
    courseCode: quizData.courseCode,
    courseName: quizData.courseName,
    description: quizData.description,
    duration: quizData.duration,
    points: quizData.points,
    questionCount: quizData.questions.length,
    questions: quizData.questions.map((question, index) => ({
      number: index + 1,
      prompt: question.prompt,
      options: question.options
    }))
  };

  await fs.writeFile(markdownPath, toMarkdown(quizData), 'utf8');
  await fs.writeFile(jsonPath, `${JSON.stringify(exportPayload, null, 2)}\n`, 'utf8');

  console.log(markdownPath);
  console.log(jsonPath);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
