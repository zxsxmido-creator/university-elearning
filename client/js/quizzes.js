(() => {
  const STORAGE_KEY = 'unilearnQuizProgress';

  const TRANSLATIONS = {
    en: {
      common: {
        brand: 'UniLearn',
        brandSub: 'Academic Platform',
        notifications: 'Notifications',
        markAllRead: 'Mark all read',
        openMenu: 'Open menu',
        openNotifications: 'Open notifications',
        languageToggleLabel: 'Switch language'
      },
      nav: {
        mainSection: 'Main',
        librarySection: 'Library',
        dashboard: 'Dashboard',
        curriculum: 'Curriculum',
        recordedLectures: 'Recorded Lectures',
        liveRoom: 'Live Room',
        quizzes: 'Quizzes',
        studyMaterials: 'Study Materials',
        assignments: 'Assignments',
        officeHours: 'Office Hours'
      },
      roles: {
        student: 'Student',
        instructor: 'Instructor',
        admin: 'Admin'
      },
      profile: {
        title: 'Profile settings',
        subtitle: 'Update how your account appears across the platform.',
        avatarHint: 'Visible in the sidebar',
        displayNameLabel: 'Display name',
        displayNamePlaceholder: 'Enter your display name',
        avatarLabel: 'Profile picture',
        uploadAvatar: 'Upload avatar',
        resetAvatar: 'Use initials',
        cancel: 'Cancel',
        save: 'Save changes',
        logout: 'Logout',
        saved: 'Profile updated successfully.',
        avatarReady: 'Avatar preview ready. Save changes to apply it.',
        avatarInvalid: 'Please choose an image file.',
        avatarReset: 'Avatar reset to initials.'
      },
      quizzes: {
        pageTitle: 'Quizzes - UniLearn',
        topbarEyebrow: 'Assessment Center',
        topbarHeading: 'Ready for your next quiz, {{name}}?',
        searchPlaceholder: 'Search quizzes...',
        sectionTitle: 'Quizzes',
        sectionNote: 'Practice, submit, and review your latest checks.',
        leaderboardTitle: 'Leaderboard',
        leaderboardPeriod: 'Weekly ranking',
        tabs: {
          pending: 'Pending Quizzes',
          completed: 'Completed Quizzes'
        },
        overview: {
          pendingLabel: 'Pending',
          pendingNote: '{{count}} quizzes waiting for you',
          completedLabel: 'Completed',
          completedNote: '{{count}} quizzes submitted',
          bestScoreLabel: 'Best Score',
          bestScoreNote: '{{value}}'
        },
        status: {
          pending: 'Due soon',
          completed: 'Completed'
        },
        meta: {
          questions: 'Questions',
          duration: 'Duration',
          points: 'Points'
        },
        deadlineLabel: 'Due: {{value}}',
        completedLabel: 'Completed: {{value}}',
        startQuiz: 'Start Quiz',
        reviewQuiz: 'View Summary',
        emptyState: 'No quizzes match this tab or search.',
        modalEyebrow: 'Quiz attempt',
        modalReviewEyebrow: 'Quiz summary',
        questionCounter: 'Question {{current}} of {{total}}',
        helper: 'Choose the best answer. This mock flow is interactive and updates your completed tab.',
        previous: 'Previous',
        next: 'Next',
        submit: 'Submit Quiz',
        done: 'Done',
        resultTitle: 'Attempt complete',
        resultNote: 'Your latest mock result has been saved locally for this browser session.',
        correct: 'Correct',
        incorrect: 'Needs review',
        scoreValue: '{{score}}%',
        scorePending: '--',
        notAttempted: 'No attempts yet',
        leaderboardDetail: '{{count}} completed',
        pointsSuffix: '{{value}} pts',
        correctAnswers: '{{count}} / {{total}} correct',
        answerLabel: 'Your answer: {{answer}}',
        unanswered: 'No answer selected'
      }
    },
    ar: {
      common: {
        brand: 'يوني ليرن',
        brandSub: 'منصة أكاديمية',
        notifications: 'الإشعارات',
        markAllRead: 'تحديد الكل كمقروء',
        openMenu: 'فتح القائمة',
        openNotifications: 'فتح الإشعارات',
        languageToggleLabel: 'تبديل اللغة'
      },
      nav: {
        mainSection: 'الرئيسية',
        librarySection: 'المكتبة',
        dashboard: 'لوحة التحكم',
        curriculum: 'المنهج',
        recordedLectures: 'المحاضرات المسجلة',
        liveRoom: 'الغرفة المباشرة',
        quizzes: 'الاختبارات',
        studyMaterials: 'المواد الدراسية',
        assignments: 'الواجبات',
        officeHours: 'الساعات المكتبية'
      },
      roles: {
        student: 'طالب',
        instructor: 'مدرس',
        admin: 'مشرف'
      },
      profile: {
        title: 'إعدادات الملف الشخصي',
        subtitle: 'حدّث طريقة ظهور حسابك في جميع أنحاء المنصة.',
        avatarHint: 'يظهر في الشريط الجانبي',
        displayNameLabel: 'اسم العرض',
        displayNamePlaceholder: 'اكتب اسم العرض',
        avatarLabel: 'الصورة الشخصية',
        uploadAvatar: 'رفع صورة',
        resetAvatar: 'استخدام الأحرف الأولى',
        cancel: 'إلغاء',
        save: 'حفظ التغييرات',
        logout: 'تسجيل الخروج',
        saved: 'تم تحديث الملف الشخصي بنجاح.',
        avatarReady: 'تم تجهيز معاينة الصورة. احفظ التغييرات لتطبيقها.',
        avatarInvalid: 'الرجاء اختيار ملف صورة.',
        avatarReset: 'تمت إعادة الصورة إلى الأحرف الأولى.'
      },
      quizzes: {
        pageTitle: 'الاختبارات - يوني ليرن',
        topbarEyebrow: 'مركز التقييم',
        topbarHeading: 'هل أنت مستعد للاختبار التالي يا {{name}}؟',
        searchPlaceholder: 'ابحث في الاختبارات...',
        sectionTitle: 'الاختبارات',
        sectionNote: 'تدرّب وقدّم وراجع آخر الاختبارات بسهولة.',
        leaderboardTitle: 'لوحة المتصدرين',
        leaderboardPeriod: 'الترتيب الأسبوعي',
        tabs: {
          pending: 'اختبارات معلقة',
          completed: 'اختبارات مكتملة'
        },
        overview: {
          pendingLabel: 'المعلقة',
          pendingNote: '{{count}} اختبارات بانتظارك',
          completedLabel: 'المكتملة',
          completedNote: '{{count}} اختبارات تم تسليمها',
          bestScoreLabel: 'أفضل درجة',
          bestScoreNote: '{{value}}'
        },
        status: {
          pending: 'قريب الاستحقاق',
          completed: 'مكتمل'
        },
        meta: {
          questions: 'الأسئلة',
          duration: 'المدة',
          points: 'النقاط'
        },
        deadlineLabel: 'الموعد: {{value}}',
        completedLabel: 'اكتمل في: {{value}}',
        startQuiz: 'ابدأ الاختبار',
        reviewQuiz: 'عرض الملخص',
        emptyState: 'لا توجد اختبارات مطابقة لهذا التبويب أو البحث.',
        modalEyebrow: 'محاولة اختبار',
        modalReviewEyebrow: 'ملخص الاختبار',
        questionCounter: 'السؤال {{current}} من {{total}}',
        helper: 'اختر أفضل إجابة. هذا تدفق تجريبي تفاعلي وينقل النتيجة إلى تبويب المكتملة.',
        previous: 'السابق',
        next: 'التالي',
        submit: 'تسليم الاختبار',
        done: 'إنهاء',
        resultTitle: 'اكتملت المحاولة',
        resultNote: 'تم حفظ نتيجتك التجريبية محليا لهذا المتصفح.',
        correct: 'صحيح',
        incorrect: 'يحتاج مراجعة',
        scoreValue: '{{score}}%',
        scorePending: '--',
        notAttempted: 'لا توجد محاولات بعد',
        leaderboardDetail: '{{count}} اختبارات مكتملة',
        pointsSuffix: '{{value}} نقطة',
        correctAnswers: '{{count}} / {{total}} صحيح',
        answerLabel: 'إجابتك: {{answer}}',
        unanswered: 'لم يتم اختيار إجابة'
      }
    }
  };

  const BASE_QUIZZES = [];
  const BASE_LEADERBOARD = [];
  const NOTIFICATIONS = [];

  const state = {
    activeTab: 'pending',
    searchQuery: '',
    notifications: NOTIFICATIONS.map((item) => ({ ...item })),
    modal: {
      open: false,
      quizId: null,
      reviewOnly: false,
      questionIndex: 0,
      answers: [],
      result: null
    }
  };

  const shell = window.UniLearnShell.init({
    translations: TRANSLATIONS,
    defaultProfile: { name: 'Student', role: 'student' },
    defaultLanguage: 'ar',
    logoutPath: '/login'
  });

  const quizGrid = document.getElementById('quizGrid');
  const leaderboardList = document.getElementById('leaderboardList');
  const overviewRow = document.getElementById('quizOverviewRow');
  const quizPanelNote = document.getElementById('quizPanelNote');
  const quizNavCount = document.getElementById('quizNavCount');
  const notifBadge = document.getElementById('notifBadge');
  const notifDropdown = document.getElementById('notifDropdown');
  const quizModal = document.getElementById('quizModal');
  const quizModalBody = document.getElementById('quizModalBody');
  const quizModalEyebrow = document.getElementById('quizModalEyebrow');
  const quizModalTitle = document.getElementById('quizModalTitle');
  const quizProgressFill = document.getElementById('quizProgressFill');
  const quizPrevBtn = document.getElementById('quizPrevBtn');
  const quizNextBtn = document.getElementById('quizNextBtn');
  const quizSubmitBtn = document.getElementById('quizSubmitBtn');
  const quizDoneBtn = document.getElementById('quizDoneBtn');
  const pendingTabLabel = document.getElementById('pendingTabLabel');
  const completedTabLabel = document.getElementById('completedTabLabel');
  const pendingTabCount = document.getElementById('pendingTabCount');
  const completedTabCount = document.getElementById('completedTabCount');
  const leaderboardPeriod = document.getElementById('leaderboardPeriod');
  const quizzesEyebrow = document.getElementById('quizzesEyebrow');
  const quizzesHeading = document.getElementById('quizzesHeading');

  function pick(value) {
    if (typeof value === 'string') return value;
    if (!value || typeof value !== 'object') return '';
    return value[shell.language] || value.en || '';
  }

  function loadProgress() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    } catch {
      return {};
    }
  }

  function saveProgress(progress) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }

  function getQuizzes() {
    const progress = loadProgress();
    return BASE_QUIZZES.map((quiz) => {
      const saved = progress[quiz.id];
      if (!saved) return { ...quiz };
      return {
        ...quiz,
        status: 'completed',
        savedResult: saved
      };
    });
  }

  function formatDate(dateString) {
    const locale = shell.language === 'ar' ? 'ar-EG' : 'en-US';
    return new Intl.DateTimeFormat(locale, { month: 'short', day: 'numeric' }).format(new Date(dateString));
  }

  function getFilteredQuizzes() {
    return getQuizzes().filter((quiz) => {
      if (quiz.status !== state.activeTab) return false;
      if (!state.searchQuery) return true;

      const tokens = [
        quiz.courseCode,
        pick(quiz.course),
        pick(quiz.title),
        pick(quiz.description),
        ...Object.values(quiz.course || {}),
        ...Object.values(quiz.title || {}),
        ...Object.values(quiz.description || {})
      ].map((entry) => String(entry).toLowerCase());

      return tokens.some((entry) => entry.includes(state.searchQuery));
    });
  }

  function getPendingCount() {
    return getQuizzes().filter((quiz) => quiz.status === 'pending').length;
  }

  function getCompletedCount() {
    return getQuizzes().filter((quiz) => quiz.status === 'completed').length;
  }

  function getBestScore() {
    const scores = getQuizzes()
      .filter((quiz) => quiz.status === 'completed' && quiz.savedResult)
      .map((quiz) => quiz.savedResult.score);
    return scores.length ? Math.max(...scores) : null;
  }

  function updateTopbarCopy() {
    quizzesEyebrow.textContent = shell.t('quizzes.topbarEyebrow');
    quizzesHeading.textContent = shell.t('quizzes.topbarHeading', {
      name: shell.getProfile().name
    });
    leaderboardPeriod.textContent = shell.t('quizzes.leaderboardPeriod');
    pendingTabLabel.textContent = shell.t('quizzes.tabs.pending');
    completedTabLabel.textContent = shell.t('quizzes.tabs.completed');
    quizPanelNote.textContent = shell.t('quizzes.sectionNote');
    quizPrevBtn.textContent = shell.t('quizzes.previous');
    quizNextBtn.textContent = shell.t('quizzes.next');
    quizSubmitBtn.textContent = shell.t('quizzes.submit');
    quizDoneBtn.textContent = shell.t('quizzes.done');
  }

  function renderOverview() {
    const pendingCount = getPendingCount();
    const completedCount = getCompletedCount();
    const bestScore = getBestScore();
    const bestScoreText = bestScore === null
      ? shell.t('quizzes.notAttempted')
      : shell.t('quizzes.scoreValue', { score: bestScore });

    overviewRow.innerHTML = `
      <article class="overview-card">
        <span class="overview-card-label">${shell.t('quizzes.overview.pendingLabel')}</span>
        <span class="overview-card-value">${pendingCount}</span>
        <p class="overview-card-note">${shell.t('quizzes.overview.pendingNote', { count: pendingCount })}</p>
      </article>
      <article class="overview-card">
        <span class="overview-card-label">${shell.t('quizzes.overview.completedLabel')}</span>
        <span class="overview-card-value">${completedCount}</span>
        <p class="overview-card-note">${shell.t('quizzes.overview.completedNote', { count: completedCount })}</p>
      </article>
      <article class="overview-card">
        <span class="overview-card-label">${shell.t('quizzes.overview.bestScoreLabel')}</span>
        <span class="overview-card-value">${bestScore === null ? shell.t('quizzes.scorePending') : `${bestScore}%`}</span>
        <p class="overview-card-note">${bestScoreText}</p>
      </article>
    `;
  }

  function renderTabs() {
    const pendingCount = getPendingCount();
    const completedCount = getCompletedCount();

    pendingTabCount.textContent = pendingCount;
    completedTabCount.textContent = completedCount;
    quizNavCount.textContent = pendingCount;

    document.querySelectorAll('.quiz-tab').forEach((button) => {
      button.classList.toggle('active', button.dataset.tab === state.activeTab);
    });
  }

  function renderQuizGrid() {
    const quizzes = getFilteredQuizzes();
    quizGrid.innerHTML = '';

    if (!quizzes.length) {
      quizGrid.innerHTML = `<div class="empty-state">${shell.t('quizzes.emptyState')}</div>`;
      return;
    }

    quizzes.forEach((quiz) => {
      const isCompleted = quiz.status === 'completed';
      const result = quiz.savedResult;
      const footerLabel = isCompleted
        ? shell.t('quizzes.completedLabel', { value: formatDate(result.completedAt) })
        : shell.t('quizzes.deadlineLabel', { value: pick(quiz.due) });

      const card = document.createElement('article');
      card.className = 'quiz-card';
      card.innerHTML = `
        <div class="quiz-card-top">
          <div>
            <div class="quiz-course">${quiz.courseCode} - ${window.UniLearnShell.escapeHtml(pick(quiz.course))}</div>
            <h3 class="quiz-title">${window.UniLearnShell.escapeHtml(pick(quiz.title))}</h3>
          </div>
          <span class="quiz-status-pill ${isCompleted ? 'completed' : 'pending'}">
            ${shell.t(`quizzes.status.${quiz.status}`)}
          </span>
        </div>
        <p class="quiz-description">${window.UniLearnShell.escapeHtml(pick(quiz.description))}</p>
        <div class="quiz-meta-grid">
          <div class="quiz-meta">
            <span class="quiz-meta-label">${shell.t('quizzes.meta.questions')}</span>
            <span class="quiz-meta-value">${quiz.questions.length}</span>
          </div>
          <div class="quiz-meta">
            <span class="quiz-meta-label">${shell.t('quizzes.meta.duration')}</span>
            <span class="quiz-meta-value">${quiz.duration}${shell.language === 'ar' ? ' د' : ' min'}</span>
          </div>
          <div class="quiz-meta">
            <span class="quiz-meta-label">${shell.t('quizzes.meta.points')}</span>
            <span class="quiz-meta-value">${quiz.points}</span>
          </div>
        </div>
        <div class="quiz-card-footer">
          <div>
            <div class="quiz-deadline">${footerLabel}</div>
            ${isCompleted ? `<div class="quiz-score">${shell.t('quizzes.scoreValue', { score: result.score })}</div>` : ''}
          </div>
          <div class="quiz-footer-actions">
            <button class="${isCompleted ? 'secondary-btn' : 'primary-btn'}" type="button" data-quiz-action="${isCompleted ? 'review' : 'start'}" data-quiz-id="${quiz.id}">
              ${isCompleted ? shell.t('quizzes.reviewQuiz') : shell.t('quizzes.startQuiz')}
            </button>
          </div>
        </div>
      `;
      quizGrid.appendChild(card);
    });
  }

  function buildLeaderboardEntries() {
    const entries = [...BASE_LEADERBOARD];
    const completedQuizzes = getQuizzes().filter((quiz) => quiz.status === 'completed' && quiz.savedResult);
    const userScores = completedQuizzes
      .filter((quiz) => !BASE_QUIZZES.find((baseQuiz) => baseQuiz.id === quiz.id && baseQuiz.status === 'completed'))
      .map((quiz) => quiz.savedResult.score);

    if (userScores.length) {
      entries.push({
        name: shell.getProfile().name,
        points: userScores.reduce((total, score) => total + score, 0),
        completed: userScores.length
      });
    }

    return entries
      .sort((left, right) => right.points - left.points)
      .slice(0, 6);
  }

  function renderLeaderboard() {
    leaderboardList.innerHTML = '';
    buildLeaderboardEntries().forEach((entry, index) => {
      const row = document.createElement('div');
      row.className = 'leaderboard-item';
      row.innerHTML = `
        <div class="quiz-footer-actions">
          <span class="leaderboard-rank">#${index + 1}</span>
          <div>
            <div class="leaderboard-name">${window.UniLearnShell.escapeHtml(entry.name)}</div>
            <div class="leaderboard-detail">${shell.t('quizzes.leaderboardDetail', { count: entry.completed })}</div>
          </div>
        </div>
        <div class="leaderboard-points">${shell.t('quizzes.pointsSuffix', { value: entry.points })}</div>
      `;
      leaderboardList.appendChild(row);
    });
  }

  function renderNotifications() {
    const dropdownNotifs = document.getElementById('dropdownNotifs');
    dropdownNotifs.innerHTML = '';

    state.notifications.forEach((notification) => {
      const row = document.createElement('div');
      row.className = `notif-item ${notification.read ? 'read' : 'unread'}`;
      row.innerHTML = `
        <div class="notif-dot"></div>
        <div class="notif-text">${pick(notification.html)}</div>
        <div class="notif-timestamp">${pick(notification.time)}</div>
      `;
      row.addEventListener('click', () => {
        notification.read = true;
        renderNotifications();
      });
      dropdownNotifs.appendChild(row);
    });

    const unreadCount = state.notifications.filter((item) => !item.read).length;
    notifBadge.textContent = unreadCount;
    notifBadge.style.display = unreadCount ? 'flex' : 'none';
  }

  function openQuizModal(quizId, reviewOnly) {
    const quiz = getQuizzes().find((item) => item.id === quizId);
    if (!quiz) return;

    state.modal.open = true;
    state.modal.quizId = quizId;
    state.modal.reviewOnly = reviewOnly;
    state.modal.questionIndex = 0;
    state.modal.answers = [...(quiz.savedResult?.answers || [])];
    state.modal.result = quiz.savedResult || null;

    quizModal.classList.add('open');
    quizModal.setAttribute('aria-hidden', 'false');
    renderQuizModal();
  }

  function closeQuizModal() {
    state.modal.open = false;
    state.modal.quizId = null;
    state.modal.reviewOnly = false;
    state.modal.questionIndex = 0;
    state.modal.answers = [];
    state.modal.result = null;

    quizModal.classList.remove('open');
    quizModal.setAttribute('aria-hidden', 'true');
  }

  function currentQuiz() {
    return getQuizzes().find((quiz) => quiz.id === state.modal.quizId);
  }

  function renderQuizSummary(quiz, result) {
    const correctCount = quiz.questions.reduce((total, question, index) => {
      return total + (result.answers[index] === question.answer ? 1 : 0);
    }, 0);

    const items = quiz.questions.map((question, index) => {
      const selectedAnswer = result.answers[index];
      const isCorrect = selectedAnswer === question.answer;
      const selectedText = Number.isInteger(selectedAnswer)
        ? pick(question.options[selectedAnswer])
        : shell.t('quizzes.unanswered');

      return `
        <div class="quiz-summary-item">
          <div>
            <div class="quiz-summary-item-title">${window.UniLearnShell.escapeHtml(pick(question.prompt))}</div>
            <div class="quiz-summary-item-answer">${shell.t('quizzes.answerLabel', {
              answer: window.UniLearnShell.escapeHtml(selectedText)
            })}</div>
          </div>
          <span class="quiz-summary-item-status ${isCorrect ? 'correct' : 'incorrect'}">
            ${isCorrect ? shell.t('quizzes.correct') : shell.t('quizzes.incorrect')}
          </span>
        </div>
      `;
    }).join('');

    quizModalEyebrow.textContent = shell.t('quizzes.modalReviewEyebrow');
    quizProgressFill.style.width = '100%';
    quizModalBody.innerHTML = `
      <div class="quiz-summary">
        <div class="quiz-summary-card">
          <div class="quiz-modal-eyebrow">${shell.t('quizzes.resultTitle')}</div>
          <div class="quiz-summary-score">${shell.t('quizzes.scoreValue', { score: result.score })}</div>
          <div class="quiz-summary-note">${shell.t('quizzes.correctAnswers', {
            count: correctCount,
            total: quiz.questions.length
          })}</div>
          <div class="quiz-summary-note">${shell.t('quizzes.resultNote')}</div>
        </div>
        <div class="quiz-summary-list">${items}</div>
      </div>
    `;

    quizPrevBtn.style.display = 'none';
    quizNextBtn.style.display = 'none';
    quizSubmitBtn.style.display = 'none';
    quizDoneBtn.style.display = 'inline-flex';
  }

  function renderQuizQuestion(quiz) {
    const question = quiz.questions[state.modal.questionIndex];
    const answer = state.modal.answers[state.modal.questionIndex];
    const progress = ((state.modal.questionIndex + 1) / quiz.questions.length) * 100;

    quizModalEyebrow.textContent = shell.t('quizzes.modalEyebrow');
    quizProgressFill.style.width = `${progress}%`;
    quizModalBody.innerHTML = `
      <div class="quiz-step-count">${shell.t('quizzes.questionCounter', {
        current: state.modal.questionIndex + 1,
        total: quiz.questions.length
      })}</div>
      <div class="quiz-question">${window.UniLearnShell.escapeHtml(pick(question.prompt))}</div>
      <div class="quiz-helper">${shell.t('quizzes.helper')}</div>
      <div class="quiz-options">
        ${question.options.map((option, optionIndex) => `
          <button class="quiz-option ${answer === optionIndex ? 'selected' : ''}" type="button" data-option-index="${optionIndex}">
            <span class="quiz-option-letter">${String.fromCharCode(65 + optionIndex)}</span>
            <span class="quiz-option-text">${window.UniLearnShell.escapeHtml(pick(option))}</span>
          </button>
        `).join('')}
      </div>
    `;

    quizPrevBtn.style.display = state.modal.questionIndex === 0 ? 'none' : 'inline-flex';
    quizNextBtn.style.display = state.modal.questionIndex === quiz.questions.length - 1 ? 'none' : 'inline-flex';
    quizSubmitBtn.style.display = state.modal.questionIndex === quiz.questions.length - 1 ? 'inline-flex' : 'none';
    quizDoneBtn.style.display = 'none';

    quizModalBody.querySelectorAll('[data-option-index]').forEach((button) => {
      button.addEventListener('click', () => {
        state.modal.answers[state.modal.questionIndex] = Number(button.dataset.optionIndex);
        renderQuizModal();
      });
    });
  }

  function renderQuizModal() {
    const quiz = currentQuiz();
    if (!quiz) return;

    quizModalTitle.textContent = pick(quiz.title);

    if (state.modal.reviewOnly || state.modal.result) {
      renderQuizSummary(quiz, state.modal.result || quiz.savedResult);
      return;
    }

    renderQuizQuestion(quiz);
  }

  function submitQuiz() {
    const quiz = currentQuiz();
    if (!quiz) return;

    const correctCount = quiz.questions.reduce((total, question, index) => {
      return total + (state.modal.answers[index] === question.answer ? 1 : 0);
    }, 0);

    const score = Math.round((correctCount / quiz.questions.length) * 100);
    const result = {
      score,
      completedAt: new Date().toISOString(),
      answers: [...state.modal.answers]
    };

    const progress = loadProgress();
    progress[quiz.id] = result;
    saveProgress(progress);

    state.modal.result = result;
    state.modal.reviewOnly = true;
    state.activeTab = 'completed';

    renderAll();
    renderQuizModal();
  }

  function renderAll() {
    updateTopbarCopy();
    renderOverview();
    renderTabs();
    renderQuizGrid();
    renderLeaderboard();
    renderNotifications();
    if (state.modal.open) renderQuizModal();
  }

  document.getElementById('quizSearch').addEventListener('input', (event) => {
    state.searchQuery = event.target.value.trim().toLowerCase();
    renderQuizGrid();
  });

  document.getElementById('quizTabs').addEventListener('click', (event) => {
    const button = event.target.closest('[data-tab]');
    if (!button) return;
    state.activeTab = button.dataset.tab;
    renderTabs();
    renderQuizGrid();
  });

  quizGrid.addEventListener('click', (event) => {
    const button = event.target.closest('[data-quiz-action]');
    if (!button) return;
    const reviewOnly = button.dataset.quizAction === 'review';
    openQuizModal(button.dataset.quizId, reviewOnly);
  });

  document.getElementById('notifBellBtn').addEventListener('click', (event) => {
    event.stopPropagation();
    notifDropdown.classList.toggle('open');
  });

  notifDropdown.addEventListener('click', (event) => {
    event.stopPropagation();
  });

  document.addEventListener('click', () => {
    notifDropdown.classList.remove('open');
  });

  document.getElementById('markAllRead').addEventListener('click', () => {
    state.notifications.forEach((item) => {
      item.read = true;
    });
    renderNotifications();
  });

  document.getElementById('quizCloseBtn').addEventListener('click', closeQuizModal);

  quizModal.addEventListener('click', (event) => {
    if (event.target === quizModal) closeQuizModal();
  });

  quizPrevBtn.addEventListener('click', () => {
    state.modal.questionIndex = Math.max(0, state.modal.questionIndex - 1);
    renderQuizModal();
  });

  quizNextBtn.addEventListener('click', () => {
    const quiz = currentQuiz();
    if (!quiz) return;
    state.modal.questionIndex = Math.min(quiz.questions.length - 1, state.modal.questionIndex + 1);
    renderQuizModal();
  });

  quizSubmitBtn.addEventListener('click', submitQuiz);
  quizDoneBtn.addEventListener('click', closeQuizModal);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && state.modal.open) closeQuizModal();
  });

  window.addEventListener('unilearn:language-changed', renderAll);
  window.addEventListener('unilearn:profile-updated', renderAll);

  function ensureCmsStyles() {
    if (document.getElementById('unilearnCmsInlineStyles')) return;

    const style = document.createElement('style');
    style.id = 'unilearnCmsInlineStyles';
    style.textContent = `
      .cms-admin-panel {
        display: grid;
        gap: 14px;
        margin-bottom: 18px;
        padding: 18px;
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        background: #fff;
        box-shadow: var(--shadow-sm);
      }

      .cms-admin-head,
      .cms-admin-actions,
      .cms-admin-grid,
      .cms-admin-grid-two {
        display: flex;
        gap: 12px;
      }

      .cms-admin-head {
        align-items: flex-start;
        justify-content: space-between;
      }

      .cms-admin-grid {
        flex-wrap: wrap;
      }

      .cms-admin-grid-two {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .cms-admin-copy {
        display: grid;
        gap: 6px;
      }

      .cms-admin-kicker {
        color: var(--ink-faint);
        font-family: var(--mono);
        font-size: 10px;
        letter-spacing: 0.1em;
        text-transform: uppercase;
      }

      .cms-admin-title {
        color: var(--ink);
        font-family: var(--serif);
        font-size: 24px;
        font-style: italic;
      }

      .cms-admin-note {
        color: var(--ink-light);
        font-size: 12px;
        line-height: 1.6;
      }

      .cms-admin-form {
        display: grid;
        gap: 12px;
      }

      .cms-admin-form[hidden] {
        display: none;
      }

      .cms-field {
        display: grid;
        gap: 6px;
        flex: 1 1 180px;
      }

      .cms-field label {
        color: var(--ink-light);
        font-size: 11px;
        font-weight: 700;
      }

      .cms-field input,
      .cms-field textarea,
      .cms-field select {
        width: 100%;
        min-height: 42px;
        padding: 10px 12px;
        border: 1px solid var(--border-strong);
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.86);
        color: var(--ink);
        outline: none;
      }

      .cms-field textarea {
        min-height: 88px;
        resize: vertical;
      }

      .cms-field input:focus,
      .cms-field textarea:focus,
      .cms-field select:focus {
        border-color: var(--red);
        box-shadow: var(--shadow-sm);
      }

      .cms-question-card {
        display: grid;
        gap: 10px;
        padding: 14px;
        border: 1px solid var(--border);
        border-radius: 16px;
        background: rgba(245, 240, 232, 0.42);
      }

      .cms-question-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
      }

      .cms-question-title {
        color: var(--ink);
        font-size: 13px;
        font-weight: 700;
      }

      .cms-question-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 10px;
      }

      .cms-admin-status {
        min-height: 18px;
        color: var(--ink-light);
        font-size: 11px;
      }

      @media (max-width: 768px) {
        .cms-admin-head,
        .cms-admin-actions {
          flex-direction: column;
          align-items: stretch;
        }

        .cms-admin-grid-two,
        .cms-question-grid {
          grid-template-columns: 1fr;
        }
      }
    `;

    document.head.appendChild(style);
  }

  function isAdminUser() {
    return localStorage.getItem('userRole') === 'admin';
  }

  function createEmptyQuestion() {
    return {
      prompt: '',
      options: ['', '', '', ''],
      answer: 0
    };
  }

  function normalizeQuizRecord(quiz) {
    const dueText = typeof quiz.dueDate === 'string'
      ? quiz.dueDate.slice(0, 10)
      : (typeof quiz.due === 'string' ? quiz.due : '');

    return {
      id: String(quiz.id || quiz._id || `${Date.now()}-${Math.random()}`),
      courseCode: quiz.courseCode || 'COURSE',
      course: quiz.course || { en: quiz.courseName || 'Course', ar: quiz.courseName || 'Course' },
      title: quiz.title || { en: quiz.name || 'Quiz', ar: quiz.name || 'Quiz' },
      description: quiz.description || { en: '', ar: '' },
      due: quiz.due || { en: dueText, ar: dueText },
      duration: Number(quiz.duration) || 10,
      points: Number(quiz.points) || 100,
      status: quiz.status || 'pending',
      questions: Array.isArray(quiz.questions) ? quiz.questions.map((question) => ({
        prompt: question.prompt || { en: '', ar: '' },
        options: Array.isArray(question.options) ? question.options.map((option) => (
          typeof option === 'string' ? { en: option, ar: option } : option
        )) : [],
        answer: Number(question.answer) || 0
      })) : []
    };
  }

  function resetQuizCollection() {
    BASE_QUIZZES.splice(0, BASE_QUIZZES.length);
  }

  function mergeQuizzesPayload(payload) {
    resetQuizCollection();

    const safeQuizzes = Array.isArray(payload?.quizzes) ? payload.quizzes : [];
    safeQuizzes.forEach((quiz) => {
      BASE_QUIZZES.push(normalizeQuizRecord(quiz));
    });
  }

  function collectQuestionDrafts(container) {
    return Array.from(container.querySelectorAll('.cms-question-card')).map((card) => ({
      prompt: card.querySelector('[data-question-prompt]')?.value || '',
      options: Array.from(card.querySelectorAll('[data-question-option]')).map((input) => input.value || ''),
      answer: Number(card.querySelector('[data-question-answer]')?.value || 0)
    }));
  }

  function renderQuestionDrafts(container, drafts) {
    container.innerHTML = drafts.map((draft, index) => `
      <div class="cms-question-card" data-question-card>
        <div class="cms-question-head">
          <div class="cms-question-title">Question ${index + 1}</div>
          <button class="secondary-btn" type="button" data-remove-question="${index}">Remove</button>
        </div>
        <div class="cms-field">
          <label>Prompt</label>
          <textarea data-question-prompt placeholder="Write the quiz question.">${window.UniLearnShell.escapeHtml(draft.prompt)}</textarea>
        </div>
        <div class="cms-question-grid">
          ${draft.options.map((option, optionIndex) => `
            <div class="cms-field">
              <label>Option ${String.fromCharCode(65 + optionIndex)}</label>
              <input data-question-option type="text" value="${window.UniLearnShell.escapeHtml(option)}">
            </div>
          `).join('')}
        </div>
        <div class="cms-field">
          <label>Correct Answer</label>
          <select data-question-answer>
            ${draft.options.map((option, optionIndex) => `
              <option value="${optionIndex}" ${Number(draft.answer) === optionIndex ? 'selected' : ''}>Option ${String.fromCharCode(65 + optionIndex)}</option>
            `).join('')}
          </select>
        </div>
      </div>
    `).join('');
  }

  function renderQuizAdminPanel() {
    if (!isAdminUser() || document.getElementById('quizCmsPanel')) return;

    ensureCmsStyles();

    const panel = document.createElement('section');
    panel.id = 'quizCmsPanel';
    panel.className = 'cms-admin-panel';
    panel.innerHTML = `
      <div class="cms-admin-head">
        <div class="cms-admin-copy">
          <span class="cms-admin-kicker">Admin CMS</span>
          <h2 class="cms-admin-title">Create Quiz</h2>
          <p class="cms-admin-note">Build quizzes and attach questions directly from the current quizzes page. Students do not see this panel.</p>
        </div>
        <div class="cms-admin-actions">
          <button class="secondary-btn" id="quizCmsToggle" type="button">New Quiz</button>
        </div>
      </div>
      <form class="cms-admin-form" id="quizCmsForm" hidden>
        <div class="cms-admin-grid">
          <div class="cms-field">
            <label for="quizCmsCourseCode">Course Code</label>
            <input id="quizCmsCourseCode" name="courseCode" type="text" placeholder="CS101" required>
          </div>
          <div class="cms-field">
            <label for="quizCmsCourseName">Course Name</label>
            <input id="quizCmsCourseName" name="courseName" type="text" required>
          </div>
          <div class="cms-field">
            <label for="quizCmsDueDate">Due Date</label>
            <input id="quizCmsDueDate" name="dueDate" type="date" required>
          </div>
        </div>
        <div class="cms-admin-grid-two">
          <div class="cms-field">
            <label for="quizCmsDuration">Duration (minutes)</label>
            <input id="quizCmsDuration" name="duration" type="number" min="1" value="15" required>
          </div>
          <div class="cms-field">
            <label for="quizCmsPoints">Points</label>
            <input id="quizCmsPoints" name="points" type="number" min="1" value="100" required>
          </div>
        </div>
        <div class="cms-field">
          <label for="quizCmsTitle">Quiz Title</label>
          <input id="quizCmsTitle" name="title" type="text" required>
        </div>
        <div class="cms-field">
          <label for="quizCmsDescription">Description</label>
          <textarea id="quizCmsDescription" name="description" placeholder="What students should expect."></textarea>
        </div>
        <div class="cms-admin-copy">
          <span class="cms-admin-kicker">Questions</span>
        </div>
        <div id="quizCmsQuestions"></div>
        <div class="cms-admin-actions">
          <button class="secondary-btn" id="quizCmsAddQuestion" type="button">Add Question</button>
          <button class="primary-btn" id="quizCmsSubmit" type="submit">Publish Quiz</button>
        </div>
        <div class="cms-admin-status" id="quizCmsStatus"></div>
      </form>
    `;

    const quizzesMain = document.querySelector('.quizzes-main');
    quizzesMain.insertBefore(panel, quizzesMain.firstChild);

    const form = document.getElementById('quizCmsForm');
    const toggleButton = document.getElementById('quizCmsToggle');
    const addQuestionButton = document.getElementById('quizCmsAddQuestion');
    const submitButton = document.getElementById('quizCmsSubmit');
    const status = document.getElementById('quizCmsStatus');
    const questionContainer = document.getElementById('quizCmsQuestions');

    renderQuestionDrafts(questionContainer, [createEmptyQuestion()]);

    toggleButton.addEventListener('click', () => {
      form.hidden = !form.hidden;
      toggleButton.textContent = form.hidden ? 'New Quiz' : 'Hide Form';
    });

    addQuestionButton.addEventListener('click', () => {
      const drafts = collectQuestionDrafts(questionContainer);
      drafts.push(createEmptyQuestion());
      renderQuestionDrafts(questionContainer, drafts);
    });

    questionContainer.addEventListener('click', (event) => {
      const removeButton = event.target.closest('[data-remove-question]');
      if (!removeButton) return;

      const drafts = collectQuestionDrafts(questionContainer);
      drafts.splice(Number(removeButton.dataset.removeQuestion), 1);
      renderQuestionDrafts(questionContainer, drafts.length ? drafts : [createEmptyQuestion()]);
    });

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const token = localStorage.getItem('token');
      if (!token) {
        status.textContent = 'Missing auth token.';
        return;
      }

      const questionDrafts = collectQuestionDrafts(questionContainer).map((draft) => ({
        prompt: draft.prompt.trim(),
        options: draft.options.map((option) => option.trim()).filter(Boolean),
        answer: Number(draft.answer)
      }));

      const hasInvalidQuestion = questionDrafts.some((draft) => !draft.prompt || draft.options.length < 2 || draft.answer >= draft.options.length);
      if (hasInvalidQuestion) {
        status.textContent = 'Every question needs a prompt, at least two options, and a valid correct answer.';
        return;
      }

      submitButton.disabled = true;
      status.textContent = 'Publishing quiz...';

      try {
        const response = await fetch('/api/quizzes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({
            courseCode: document.getElementById('quizCmsCourseCode').value.trim(),
            courseName: document.getElementById('quizCmsCourseName').value.trim(),
            dueDate: document.getElementById('quizCmsDueDate').value,
            duration: Number(document.getElementById('quizCmsDuration').value || 0),
            points: Number(document.getElementById('quizCmsPoints').value || 0),
            title: document.getElementById('quizCmsTitle').value.trim(),
            description: document.getElementById('quizCmsDescription').value.trim(),
            questions: questionDrafts
          })
        });

        const data = await response.json().catch(() => ({}));

        if (!response.ok) {
          throw new Error(data.msg || 'Quiz publish failed');
        }

        form.reset();
        renderQuestionDrafts(questionContainer, [createEmptyQuestion()]);
        form.hidden = true;
        toggleButton.textContent = 'New Quiz';
        status.textContent = 'Quiz published successfully.';
        state.activeTab = 'pending';
        await loadQuizzesCms();
      } catch (error) {
        status.textContent = error.message || 'Quiz publish failed.';
      } finally {
        submitButton.disabled = false;
      }
    });
  }

  async function loadQuizzesCms() {
    try {
      const response = await fetch('/api/quizzes');

      if (!response.ok) {
        throw new Error('Failed to load quizzes');
      }

      const payload = await response.json();
      mergeQuizzesPayload(payload);
      renderAll();
    } catch (error) {
      console.error('Quiz CMS load failed:', error);
    }
  }

  renderQuizAdminPanel();
  renderAll();
  loadQuizzesCms();
})();
