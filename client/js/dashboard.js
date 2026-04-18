(() => {
  const TRANSLATIONS = {
    en: {
      common: {
        brand: 'UniLearn',
        brandSub: 'Academic Platform',
        searchPlaceholder: 'Search courses, lectures...',
        notifications: 'Notifications',
        markAllRead: 'Mark all read',
        inbox: 'INBOX',
        upcoming: 'Upcoming',
        live: 'LIVE',
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
      dashboard: {
        pageTitle: 'Dashboard - UniLearn',
        greetingMorning: 'Good morning',
        greetingAfternoon: 'Good afternoon',
        greetingEvening: 'Good evening',
        welcomeBack: 'Welcome back, {{name}}',
        stats: {
          enrolled: 'Enrolled Courses',
          enrolledDelta: '+1 this semester',
          watched: 'Lectures Watched',
          watchedDelta: '+8 this week',
          certificates: 'Certificates Earned',
          certificatesDelta: '+1 this month',
          studyHours: 'Study Hours',
          studyHoursDelta: 'This week'
        },
        scheduleTitle: "Today's Schedule",
        fullCalendar: 'Full calendar',
        activityTitle: 'Recent Activity',
        seeAll: 'See all',
        clearAll: 'Clear all',
        progressTitle: 'Course Progress',
        allCourses: 'All courses',
        quickAccessTitle: 'Quick Access',
        quickActions: {
          live: 'Join Live Session',
          recordings: 'Watch Recordings',
          materials: 'Study Materials',
          quizzes: 'Open Quizzes'
        },
        lectureProgress: '{{done}} of {{total}} lectures',
        nextLabel: 'Next: {{topic}}',
        studentsCount: '{{count}} students',
        studyHoursFormat: '{{hours}}h {{minutes}}m',
        scheduleEmpty: 'No schedule items match your search.',
        progressEmpty: 'No course cards match your search.',
        notificationsEmpty: 'You are all caught up. No new activity right now.'
      }
    },
    ar: {
      common: {
        brand: 'يوني ليرن',
        brandSub: 'منصة أكاديمية',
        searchPlaceholder: 'ابحث في المقررات والمحاضرات...',
        notifications: 'الإشعارات',
        markAllRead: 'تحديد الكل كمقروء',
        inbox: 'الوارد',
        upcoming: 'قادم',
        live: 'مباشر',
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
      dashboard: {
        pageTitle: 'لوحة التحكم - يوني ليرن',
        greetingMorning: 'صباح الخير',
        greetingAfternoon: 'مساء الخير',
        greetingEvening: 'مساء الخير',
        welcomeBack: 'أهلا بعودتك، {{name}}',
        stats: {
          enrolled: 'المقررات المسجلة',
          enrolledDelta: '+1 هذا الفصل',
          watched: 'المحاضرات التي تمت مشاهدتها',
          watchedDelta: '+8 هذا الأسبوع',
          certificates: 'الشهادات المكتسبة',
          certificatesDelta: '+1 هذا الشهر',
          studyHours: 'ساعات الدراسة',
          studyHoursDelta: 'هذا الأسبوع'
        },
        scheduleTitle: 'جدول اليوم',
        fullCalendar: 'التقويم الكامل',
        activityTitle: 'النشاط الأخير',
        seeAll: 'عرض الكل',
        clearAll: 'مسح الكل',
        progressTitle: 'تقدم المقررات',
        allCourses: 'جميع المقررات',
        quickAccessTitle: 'وصول سريع',
        quickActions: {
          live: 'الانضمام للجلسة المباشرة',
          recordings: 'مشاهدة التسجيلات',
          materials: 'المواد الدراسية',
          quizzes: 'فتح الاختبارات'
        },
        lectureProgress: '{{done}} من {{total}} محاضرة',
        nextLabel: 'التالي: {{topic}}',
        studentsCount: '{{count}} طالبا',
        studyHoursFormat: '{{hours}} س {{minutes}} د',
        scheduleEmpty: 'لا توجد عناصر في الجدول تطابق البحث.',
        progressEmpty: 'لا توجد بطاقات مقررات تطابق البحث.',
        notificationsEmpty: 'أنت متابع لكل شيء. لا يوجد نشاط جديد حاليا.'
      }
    }
  };

  const SCHEDULE = [
    {
      time: '09:00',
      ampm: { en: 'AM', ar: 'ص' },
      subject: { en: 'Computer Science', ar: 'علوم الحاسب' },
      title: { en: 'Binary Trees and Balanced BSTs', ar: 'الأشجار الثنائية و BST المتوازنة' },
      instructor: { en: 'Dr. Khalid Hassan', ar: 'د. خالد حسن' },
      duration: { en: '90 min', ar: '90 دقيقة' },
      students: 142,
      status: 'live',
      channel: 'cs-binary-trees'
    },
    {
      time: '11:30',
      ampm: { en: 'AM', ar: 'ص' },
      subject: { en: 'Mathematics', ar: 'الرياضيات' },
      title: { en: 'Linear Algebra - Eigenvalues', ar: 'الجبر الخطي - القيم الذاتية' },
      instructor: { en: 'Prof. Layla Ibrahim', ar: 'أ. ليلى إبراهيم' },
      duration: { en: '60 min', ar: '60 دقيقة' },
      students: 98,
      status: 'upcoming',
      channel: 'math-linear-algebra'
    },
    {
      time: '02:00',
      ampm: { en: 'PM', ar: 'م' },
      subject: { en: 'Physics', ar: 'الفيزياء' },
      title: { en: 'Quantum Mechanics: Wave Functions', ar: 'ميكانيكا الكم: الدوال الموجية' },
      instructor: { en: 'Dr. Omar Farouk', ar: 'د. عمر فاروق' },
      duration: { en: '90 min', ar: '90 دقيقة' },
      students: 75,
      status: 'upcoming',
      channel: 'physics-quantum'
    },
    {
      time: '04:30',
      ampm: { en: 'PM', ar: 'م' },
      subject: { en: 'Database Systems', ar: 'أنظمة قواعد البيانات' },
      title: { en: 'Indexing Strategies and Query Optimization', ar: 'استراتيجيات الفهرسة وتحسين الاستعلامات' },
      instructor: { en: 'Prof. Sara Nour', ar: 'أ. سارة نور' },
      duration: { en: '60 min', ar: '60 دقيقة' },
      students: 110,
      status: 'upcoming',
      channel: 'db-indexing'
    }
  ];

  const NOTIFICATIONS = [
    {
      html: {
        en: '<strong>Dr. Khalid</strong> uploaded new lecture notes for Binary Trees',
        ar: 'قام <strong>د. خالد</strong> برفع ملاحظات جديدة لمحاضرة الأشجار الثنائية'
      },
      time: { en: '5m ago', ar: 'منذ 5 د' },
      read: false,
      route: 'curriculum.html'
    },
    {
      html: {
        en: 'Assignment 3 deadline extended to <strong>Friday</strong>',
        ar: 'تم تمديد موعد تسليم الواجب 3 حتى <strong>الجمعة</strong>'
      },
      time: { en: '1h ago', ar: 'منذ ساعة' },
      read: false,
      route: 'quizzes.html'
    },
    {
      html: {
        en: '<strong>Prof. Layla</strong> replied to your question in Linear Algebra',
        ar: 'ردت <strong>أ. ليلى</strong> على سؤالك في الجبر الخطي'
      },
      time: { en: '2h ago', ar: 'منذ ساعتين' },
      read: false,
      route: 'curriculum.html'
    },
    {
      html: {
        en: 'You earned a <strong>certificate</strong> in Data Structures',
        ar: 'حصلت على <strong>شهادة</strong> في هياكل البيانات'
      },
      time: { en: '1d ago', ar: 'منذ يوم' },
      read: false,
      route: 'vod.html'
    },
    {
      html: {
        en: 'New study material added to <strong>Physics</strong> curriculum',
        ar: 'تمت إضافة مادة دراسية جديدة إلى منهج <strong>الفيزياء</strong>'
      },
      time: { en: '2d ago', ar: 'منذ يومين' },
      read: true,
      route: 'curriculum.html'
    },
    {
      html: {
        en: 'Office hours reminder: <strong>Dr. Omar</strong> tomorrow at 10:00',
        ar: 'تذكير بالساعات المكتبية: <strong>د. عمر</strong> غدا الساعة 10:00'
      },
      time: { en: '2d ago', ar: 'منذ يومين' },
      read: true,
      route: 'live-room.html'
    }
  ];

  const COURSES = [
    {
      tag: 'CS301',
      title: { en: 'Data Structures and Algorithms', ar: 'هياكل البيانات والخوارزميات' },
      pct: 72,
      lectures: 18,
      total: 25,
      next: { en: 'Graphs and BFS', ar: 'الرسوم البيانية و BFS' }
    },
    {
      tag: 'MATH201',
      title: { en: 'Linear Algebra', ar: 'الجبر الخطي' },
      pct: 45,
      lectures: 9,
      total: 20,
      next: { en: 'Eigenvalues', ar: 'القيم الذاتية' }
    },
    {
      tag: 'PHYS301',
      title: { en: 'Quantum Mechanics', ar: 'ميكانيكا الكم' },
      pct: 30,
      lectures: 6,
      total: 20,
      next: { en: 'Wave Functions', ar: 'الدوال الموجية' }
    }
  ];

  const state = {
    searchQuery: '',
    studyHours: {
      hours: Math.floor(Math.random() * 8) + 14,
      minutes: Math.floor(Math.random() * 60)
    },
    notifications: NOTIFICATIONS.map((item) => ({ ...item }))
  };

  const scheduleList = document.getElementById('scheduleList');
  const activityFeed = document.getElementById('activityFeed');
  const dropdownNotifs = document.getElementById('dropdownNotifs');
  const progressRow = document.getElementById('progressRow');
  const notifBadge = document.getElementById('notifBadge');
  const notifDropdown = document.getElementById('notifDropdown');
  const notifBellBtn = document.getElementById('notifBellBtn');

  const shell = window.UniLearnShell.init({
    translations: TRANSLATIONS,
    defaultProfile: { name: 'Ahmad', role: 'student' },
    logoutPath: 'login.html'
  });

  function pick(value) {
    if (typeof value === 'string') return value;
    if (!value || typeof value !== 'object') return '';
    return value[shell.language] || value.en || '';
  }

  function matchesQuery(values) {
    if (!state.searchQuery) return true;

    return values.some((value) => {
      if (!value) return false;
      if (typeof value === 'string') return value.toLowerCase().includes(state.searchQuery);
      return Object.values(value).some((entry) => String(entry).toLowerCase().includes(state.searchQuery));
    });
  }

  function greetingKey() {
    const hour = new Date().getHours();
    if (hour < 12) return 'dashboard.greetingMorning';
    if (hour < 17) return 'dashboard.greetingAfternoon';
    return 'dashboard.greetingEvening';
  }

  function updateGreeting() {
    document.getElementById('greetingLabel').textContent = shell.t(greetingKey());
    document.getElementById('greetingName').textContent = shell.t('dashboard.welcomeBack', {
      name: shell.getProfile().name
    });
  }

  function updateStudyHours() {
    document.getElementById('studyHoursVal').textContent = shell.t('dashboard.studyHoursFormat', {
      hours: state.studyHours.hours,
      minutes: String(state.studyHours.minutes).padStart(2, '0')
    });
  }

  function renderSchedule() {
    const filtered = SCHEDULE.filter((lecture) => matchesQuery([
      lecture.subject,
      lecture.title,
      lecture.instructor,
      lecture.channel
    ]));

    scheduleList.innerHTML = '';

    if (!filtered.length) {
      scheduleList.innerHTML = `<div class="empty-state">${shell.t('dashboard.scheduleEmpty')}</div>`;
      return;
    }

    filtered.forEach((lecture, index) => {
      const card = document.createElement('a');
      const isLive = lecture.status === 'live';
      card.href = `live-room.html?channel=${encodeURIComponent(lecture.channel)}`;
      card.className = `lecture-card ${isLive ? 'live-now' : ''}`;
      card.style.animationDelay = `${0.05 + index * 0.07}s`;
      card.innerHTML = `
        <div class="lc-time">
          <span class="lc-time-val">${lecture.time}</span>
          <span class="lc-time-ampm">${pick(lecture.ampm)}</span>
        </div>
        <div class="lc-divider"></div>
        <div class="lc-info">
          <div class="lc-subject">${window.UniLearnShell.escapeHtml(pick(lecture.subject))}</div>
          <div class="lc-title">${window.UniLearnShell.escapeHtml(pick(lecture.title))}</div>
          <div class="lc-meta">
            <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span>${window.UniLearnShell.escapeHtml(pick(lecture.instructor))}</span>
            <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span>${window.UniLearnShell.escapeHtml(pick(lecture.duration))}</span>
            <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
            </svg>
            <span>${shell.t('dashboard.studentsCount', { count: lecture.students })}</span>
          </div>
        </div>
        ${isLive
          ? `<div class="live-pill"><span class="live-dot"></span>${shell.t('common.live')}</div>`
          : `<div class="upcoming-pill">
              <svg width="10" height="10" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              ${shell.t('common.upcoming')}
            </div>`}
      `;
      scheduleList.appendChild(card);
    });
  }

  function renderNotificationItems(container, limit) {
    container.innerHTML = '';
    const items = typeof limit === 'number' ? state.notifications.slice(0, limit) : state.notifications;

    if (!items.length) {
      container.innerHTML = `<div class="empty-state">${shell.t('dashboard.notificationsEmpty')}</div>`;
      return;
    }

    items.forEach((notification) => {
      const row = document.createElement('div');
      row.className = `notif-item ${notification.read ? 'read' : 'unread'}`;
      row.tabIndex = 0;
      row.setAttribute('role', notification.route ? 'link' : 'button');
      row.innerHTML = `
        <div class="notif-dot"></div>
        <div class="notif-text">${pick(notification.html)}</div>
        <div class="notif-timestamp">${pick(notification.time)}</div>
      `;

      const activate = () => {
        notification.read = true;
        renderNotifications();
        if (notification.route) window.location.href = notification.route;
      };

      row.addEventListener('click', activate);
      row.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          activate();
        }
      });

      container.appendChild(row);
    });
  }

  function renderNotifications() {
    renderNotificationItems(activityFeed, 5);
    renderNotificationItems(dropdownNotifs, 6);

    const unreadCount = state.notifications.filter((notification) => !notification.read).length;
    notifBadge.textContent = unreadCount;
    notifBadge.style.display = unreadCount ? 'flex' : 'none';
  }

  function renderCourseProgress() {
    const filtered = COURSES.filter((course) => matchesQuery([
      course.tag,
      course.title,
      course.next
    ]));

    progressRow.innerHTML = '';

    if (!filtered.length) {
      progressRow.innerHTML = `<div class="empty-state">${shell.t('dashboard.progressEmpty')}</div>`;
      return;
    }

    filtered.forEach((course, index) => {
      const card = document.createElement('a');
      card.href = 'curriculum.html';
      card.className = 'course-progress-card';
      card.style.animationDelay = `${0.3 + index * 0.05}s`;
      card.innerHTML = `
        <div class="cp-top">
          <div>
            <div class="cp-course-tag">${course.tag}</div>
            <div class="cp-title">${window.UniLearnShell.escapeHtml(pick(course.title))}</div>
          </div>
          <div class="cp-pct">${course.pct}%</div>
        </div>
        <div class="cp-bar-track">
          <div class="cp-bar-fill" data-width="${course.pct}"></div>
        </div>
        <div class="cp-footer">
          <span>${shell.t('dashboard.lectureProgress', { done: course.lectures, total: course.total })}</span>
          <span class="cp-next">${shell.t('dashboard.nextLabel', { topic: pick(course.next) })}</span>
        </div>
      `;
      progressRow.appendChild(card);
    });

    requestAnimationFrame(() => {
      setTimeout(() => {
        progressRow.querySelectorAll('.cp-bar-fill').forEach((bar) => {
          bar.style.width = `${bar.dataset.width}%`;
        });
      }, 220);
    });
  }

  function renderDynamicContent() {
    updateGreeting();
    updateStudyHours();
    renderSchedule();
    renderNotifications();
    renderCourseProgress();
  }

  function animateCounters() {
    document.querySelectorAll('[data-count]').forEach((element) => {
      const target = Number.parseInt(element.dataset.count, 10);
      let current = 0;
      const step = Math.ceil(target / 40);
      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        element.textContent = String(current);
        if (current >= target) clearInterval(timer);
      }, 30);
    });
  }

  document.getElementById('globalSearch').addEventListener('input', (event) => {
    state.searchQuery = event.target.value.trim().toLowerCase();
    renderSchedule();
    renderCourseProgress();
  });

  notifBellBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    notifDropdown.classList.toggle('open');
  });

  document.addEventListener('click', () => {
    notifDropdown.classList.remove('open');
  });

  notifDropdown.addEventListener('click', (event) => {
    event.stopPropagation();
  });

  document.getElementById('markAllRead').addEventListener('click', () => {
    state.notifications = [];
    renderNotifications();
  });

  document.getElementById('markAllRead2').addEventListener('click', () => {
    state.notifications = [];
    renderNotifications();
  });

  document.querySelectorAll('.stat-card[data-route]').forEach((card) => {
    const openRoute = () => {
      window.location.href = card.dataset.route;
    };

    card.addEventListener('click', openRoute);
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openRoute();
      }
    });
  });

  window.addEventListener('unilearn:language-changed', renderDynamicContent);
  window.addEventListener('unilearn:profile-updated', renderDynamicContent);

  renderDynamicContent();
  animateCounters();
})();
