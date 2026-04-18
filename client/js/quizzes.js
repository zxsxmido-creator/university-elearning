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

  const BASE_QUIZZES = [
    {
      id: 'quiz-trees',
      courseCode: 'CS301',
      course: { en: 'Data Structures and Algorithms', ar: 'هياكل البيانات والخوارزميات' },
      title: { en: 'Trees Mastery Check', ar: 'اختبار إتقان الأشجار' },
      description: {
        en: 'A focused check on binary trees, traversals, and balancing concepts.',
        ar: 'اختبار مركز على الأشجار الثنائية وطرق المرور ومفاهيم الموازنة.'
      },
      due: { en: 'Today, 7:00 PM', ar: 'اليوم، 7:00 مساء' },
      duration: 20,
      points: 100,
      status: 'pending',
      questions: [
        {
          prompt: {
            en: 'Which traversal visits the root node before its subtrees?',
            ar: 'أي نوع من المرور يزور العقدة الجذرية قبل الفروع التابعة؟'
          },
          options: [
            { en: 'In-order traversal', ar: 'المرور داخل الترتيب' },
            { en: 'Pre-order traversal', ar: 'المرور السابق للترتيب' },
            { en: 'Post-order traversal', ar: 'المرور اللاحق للترتيب' },
            { en: 'Level-order traversal', ar: 'المرور بالمستويات' }
          ],
          answer: 1
        },
        {
          prompt: {
            en: 'What is the worst-case height of an unbalanced binary search tree with n nodes?',
            ar: 'ما أسوأ ارتفاع لشجرة بحث ثنائية غير متوازنة تحتوي على n عقد؟'
          },
          options: [
            { en: 'log n', ar: 'لوغاريتم n' },
            { en: 'Square root of n', ar: 'الجذر التربيعي لـ n' },
            { en: 'n', ar: 'n' },
            { en: 'Constant', ar: 'ثابت' }
          ],
          answer: 2
        },
        {
          prompt: {
            en: 'AVL rotations are primarily used to improve which property?',
            ar: 'تُستخدم دورانات AVL أساسا لتحسين أي خاصية؟'
          },
          options: [
            { en: 'Node coloring', ar: 'تلوين العقد' },
            { en: 'Height balance', ar: 'توازن الارتفاع' },
            { en: 'Hash collisions', ar: 'تصادمات التجزئة' },
            { en: 'Disk compression', ar: 'ضغط القرص' }
          ],
          answer: 1
        }
      ]
    },
    {
      id: 'quiz-linear-algebra',
      courseCode: 'MATH201',
      course: { en: 'Linear Algebra', ar: 'الجبر الخطي' },
      title: { en: 'Eigenvalues Sprint Quiz', ar: 'اختبار سريع للقيم الذاتية' },
      description: {
        en: 'Review eigenvalues, eigenvectors, and diagonalization in a short timed quiz.',
        ar: 'راجع القيم الذاتية والمتجهات الذاتية والقطرية في اختبار قصير بزمن محدد.'
      },
      due: { en: 'Tomorrow, 10:30 AM', ar: 'غدا، 10:30 صباحا' },
      duration: 15,
      points: 80,
      status: 'pending',
      questions: [
        {
          prompt: {
            en: 'A non-zero vector v is an eigenvector of matrix A when:',
            ar: 'يكون المتجه غير الصفري v متجها ذاتيا للمصفوفة A عندما:'
          },
          options: [
            { en: 'Av = 0', ar: 'Av = 0' },
            { en: 'Av = lambda v', ar: 'Av = lambda v' },
            { en: 'A + v = 0', ar: 'A + v = 0' },
            { en: 'det(A) = v', ar: 'det(A) = v' }
          ],
          answer: 1
        },
        {
          prompt: {
            en: 'Diagonalization is most useful when a matrix has:',
            ar: 'يكون القطرية أكثر فائدة عندما تمتلك المصفوفة:'
          },
          options: [
            { en: 'Enough linearly independent eigenvectors', ar: 'عددا كافيا من المتجهات الذاتية المستقلة خطيا' },
            { en: 'Only zero entries', ar: 'قيما صفرية فقط' },
            { en: 'No determinant', ar: 'بلا محدد' },
            { en: 'A single row', ar: 'صفا واحدا' }
          ],
          answer: 0
        },
        {
          prompt: {
            en: 'The characteristic polynomial is used to find:',
            ar: 'يُستخدم كثير الحدود المميز لإيجاد:'
          },
          options: [
            { en: 'Matrix rank', ar: 'رتبة المصفوفة' },
            { en: 'Inverse directly', ar: 'المعكوس مباشرة' },
            { en: 'Eigenvalues', ar: 'القيم الذاتية' },
            { en: 'Trace only', ar: 'الأثر فقط' }
          ],
          answer: 2
        }
      ]
    },
    {
      id: 'quiz-indexing',
      courseCode: 'DB401',
      course: { en: 'Database Systems', ar: 'أنظمة قواعد البيانات' },
      title: { en: 'Indexing and Query Plans', ar: 'الفهرسة وخطط الاستعلام' },
      description: {
        en: 'Assess how indexes influence search paths, joins, and execution plans.',
        ar: 'اختبر تأثير الفهارس على مسارات البحث والربط وخطط التنفيذ.'
      },
      due: { en: 'Friday, 2:00 PM', ar: 'الجمعة، 2:00 مساء' },
      duration: 25,
      points: 120,
      status: 'pending',
      questions: [
        {
          prompt: {
            en: 'A B-tree index mainly improves performance for:',
            ar: 'يحسن فهرس B-tree الأداء أساسا في:'
          },
          options: [
            { en: 'Sequential full scans only', ar: 'المسح الكامل المتسلسل فقط' },
            { en: 'Sorted lookups and range queries', ar: 'عمليات البحث المرتبة واستعلامات النطاق' },
            { en: 'Image rendering', ar: 'عرض الصور' },
            { en: 'CSS layout', ar: 'تنسيق CSS' }
          ],
          answer: 1
        },
        {
          prompt: {
            en: 'An execution plan explains:',
            ar: 'توضح خطة التنفيذ:'
          },
          options: [
            { en: 'How the DBMS intends to run the query', ar: 'كيف ينوي نظام إدارة قاعدة البيانات تنفيذ الاستعلام' },
            { en: 'Only the query author', ar: 'كاتب الاستعلام فقط' },
            { en: 'The network cable path', ar: 'مسار كابل الشبكة' },
            { en: 'The UI color palette', ar: 'لوحة ألوان الواجهة' }
          ],
          answer: 0
        },
        {
          prompt: {
            en: 'A covering index can reduce:',
            ar: 'يمكن أن يقلل الفهرس الشامل من:'
          },
          options: [
            { en: 'Disk lookups to the base table', ar: 'عمليات الرجوع إلى الجدول الأساسي على القرص' },
            { en: 'The number of SQL keywords', ar: 'عدد كلمات SQL' },
            { en: 'Browser cache usage', ar: 'استخدام ذاكرة المتصفح' },
            { en: 'Font loading time', ar: 'وقت تحميل الخطوط' }
          ],
          answer: 0
        }
      ]
    },
    {
      id: 'quiz-quantum',
      courseCode: 'PHYS301',
      course: { en: 'Quantum Mechanics', ar: 'ميكانيكا الكم' },
      title: { en: 'Wave Function Review', ar: 'مراجعة الدالة الموجية' },
      description: {
        en: 'A recap on normalization, probability density, and operators.',
        ar: 'مراجعة للتطبيع وكثافة الاحتمال والعوامل.'
      },
      due: { en: 'Apr 11', ar: '11 أبريل' },
      duration: 18,
      points: 90,
      status: 'completed',
      savedResult: {
        score: 92,
        completedAt: '2026-04-11T16:00:00.000Z',
        answers: [0, 1, 0]
      },
      questions: [
        {
          prompt: {
            en: 'Normalization of a wave function ensures:',
            ar: 'يضمن تطبيع الدالة الموجية ما يلي:'
          },
          options: [
            { en: 'Total probability equals 1', ar: 'أن يكون مجموع الاحتمال مساويا لـ 1' },
            { en: 'Energy is always negative', ar: 'أن تكون الطاقة سالبة دائما' },
            { en: 'Momentum is zero', ar: 'أن يكون الزخم صفرا' },
            { en: 'Time stops', ar: 'أن يتوقف الزمن' }
          ],
          answer: 0
        },
        {
          prompt: {
            en: 'Probability density is represented by:',
            ar: 'تمثل كثافة الاحتمال بواسطة:'
          },
          options: [
            { en: 'psi', ar: 'psi' },
            { en: '|psi| squared', ar: '|psi| تربيع' },
            { en: 'Only the phase', ar: 'الطور فقط' },
            { en: 'The Hamiltonian alone', ar: 'الهاملتوني فقط' }
          ],
          answer: 1
        },
        {
          prompt: {
            en: 'Operators in quantum mechanics are used to:',
            ar: 'تستخدم العوامل في ميكانيكا الكم من أجل:'
          },
          options: [
            { en: 'Represent observables', ar: 'تمثيل الكميات القابلة للرصد' },
            { en: 'Design logos', ar: 'تصميم الشعارات' },
            { en: 'Compile JavaScript', ar: 'ترجمة JavaScript' },
            { en: 'Delete data', ar: 'حذف البيانات' }
          ],
          answer: 0
        }
      ]
    },
    {
      id: 'quiz-networks',
      courseCode: 'NET301',
      course: { en: 'Computer Networks', ar: 'شبكات الحاسب' },
      title: { en: 'TCP/IP Concepts Check', ar: 'اختبار مفاهيم TCP/IP' },
      description: {
        en: 'A quick review of layers, packets, routing, and reliability.',
        ar: 'مراجعة سريعة للطبقات والحزم والتوجيه والموثوقية.'
      },
      due: { en: 'Apr 09', ar: '09 أبريل' },
      duration: 12,
      points: 70,
      status: 'completed',
      savedResult: {
        score: 84,
        completedAt: '2026-04-09T11:30:00.000Z',
        answers: [1, 2, 0]
      },
      questions: [
        {
          prompt: {
            en: 'Which layer is responsible for routing packets across networks?',
            ar: 'أي طبقة مسؤولة عن توجيه الحزم عبر الشبكات؟'
          },
          options: [
            { en: 'Application layer', ar: 'طبقة التطبيق' },
            { en: 'Network layer', ar: 'طبقة الشبكة' },
            { en: 'Physical layer', ar: 'الطبقة الفيزيائية' },
            { en: 'Session layer', ar: 'طبقة الجلسة' }
          ],
          answer: 1
        },
        {
          prompt: {
            en: 'TCP focuses on which property?',
            ar: 'يركز TCP على أي خاصية؟'
          },
          options: [
            { en: 'Unreliable delivery', ar: 'التسليم غير الموثوق' },
            { en: 'Color rendering', ar: 'عرض الألوان' },
            { en: 'Reliable ordered delivery', ar: 'التسليم الموثوق والمرتب' },
            { en: 'Audio compression', ar: 'ضغط الصوت' }
          ],
          answer: 2
        },
        {
          prompt: {
            en: 'An IP address primarily identifies:',
            ar: 'يحدد عنوان IP بشكل أساسي:'
          },
          options: [
            { en: 'A network interface location', ar: 'موقع واجهة شبكة' },
            { en: 'A font family', ar: 'عائلة خط' },
            { en: 'A document title', ar: 'عنوان مستند' },
            { en: 'A database index', ar: 'فهرس قاعدة بيانات' }
          ],
          answer: 0
        }
      ]
    }
  ];

  const BASE_LEADERBOARD = [
    { name: 'Noor Khaled', points: 510, completed: 8 },
    { name: 'Mina Adel', points: 486, completed: 7 },
    { name: 'Yara Hany', points: 458, completed: 7 },
    { name: 'Salma Mostafa', points: 444, completed: 6 },
    { name: 'Omar Ahmed', points: 430, completed: 6 }
  ];

  const NOTIFICATIONS = [
    {
      html: {
        en: '<strong>CS301</strong> quiz opens today at 7:00 PM',
        ar: 'يفتح اختبار <strong>CS301</strong> اليوم الساعة 7:00 مساء'
      },
      time: { en: '8m ago', ar: 'منذ 8 د' },
      read: false
    },
    {
      html: {
        en: 'You moved up <strong>2 places</strong> in the leaderboard',
        ar: 'تقدمت <strong>مركزين</strong> في لوحة المتصدرين'
      },
      time: { en: '40m ago', ar: 'منذ 40 د' },
      read: false
    },
    {
      html: {
        en: 'Review material added for <strong>Indexing and Query Plans</strong>',
        ar: 'تمت إضافة مادة مراجعة لاختبار <strong>الفهرسة وخطط الاستعلام</strong>'
      },
      time: { en: '2h ago', ar: 'منذ ساعتين' },
      read: true
    }
  ];

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
    logoutPath: 'login.html'
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

  renderAll();
})();
