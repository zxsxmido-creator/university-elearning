(() => {
  const TRANSLATIONS = {
    en: {
      common: {
        brand: 'UniLearn',
        brandSub: 'Academic Platform',
        openMenu: 'Open menu',
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
      vod: {
        pageTitle: 'Recorded Lectures - UniLearn',
        pageEyebrow: 'Lecture Library',
        pageHeading: 'Recorded Lectures',
        searchPlaceholder: 'Search lectures, topics...',
        sortLabel: 'Sort lectures',
        sort: {
          newest: 'Newest first',
          oldest: 'Oldest first',
          popular: 'Most watched',
          shortest: 'Shortest',
          longest: 'Longest',
          az: 'A to Z'
        },
        filters: {
          subject: 'Subject',
          instructor: 'Instructor',
          duration: 'Duration',
          status: 'Status',
          showWatched: 'Show watched',
          showNewOnly: 'Show new only'
        },
        subjects: {
          all: 'All subjects'
        },
        instructors: {
          all: 'All instructors'
        },
        countSummary: '{{total}} lectures - {{newCount}} new',
        durationAny: 'Any',
        durationLimit: '<= {{value}} min',
        featuredTitle: 'Featured',
        featuredSub: 'Most-watched lectures this week',
        allLectures: 'All lectures',
        shownCount: '{{count}} shown',
        browseAll: 'Browse all ->',
        newBadge: 'New',
        doneBadge: 'Done',
        viewsLabel: '{{count}} views',
        gridViewTitle: 'Grid view',
        listViewTitle: 'List view',
        emptyTitle: 'No lectures match your filters',
        emptySubtitle: 'Try adjusting your search, sort, or filter choices.',
        demoPlayerTitle: 'Demo player',
        demoPlayerHint: 'Connect your video backend to stream the selected lecture.',
        speedLabel: '{{value}}x'
      }
    },
    ar: {
      common: {
        brand: 'يوني ليرن',
        brandSub: 'منصة أكاديمية',
        openMenu: 'فتح القائمة',
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
      vod: {
        pageTitle: 'المحاضرات المسجلة - يوني ليرن',
        pageEyebrow: 'مكتبة المحاضرات',
        pageHeading: 'المحاضرات المسجلة',
        searchPlaceholder: 'ابحث في المحاضرات والموضوعات...',
        sortLabel: 'ترتيب المحاضرات',
        sort: {
          newest: 'الأحدث أولاً',
          oldest: 'الأقدم أولاً',
          popular: 'الأكثر مشاهدة',
          shortest: 'الأقصر',
          longest: 'الأطول',
          az: 'أ إلى ي'
        },
        filters: {
          subject: 'المادة',
          instructor: 'المحاضر',
          duration: 'المدة',
          status: 'الحالة',
          showWatched: 'إظهار ما تمّت مشاهدته',
          showNewOnly: 'إظهار الجديد فقط'
        },
        subjects: {
          all: 'كل المواد'
        },
        instructors: {
          all: 'كل المحاضرين'
        },
        countSummary: '{{total}} محاضرات - {{newCount}} جديدة',
        durationAny: 'أي مدة',
        durationLimit: '<= {{value}} دقيقة',
        featuredTitle: 'مختارة لك',
        featuredSub: 'الأكثر مشاهدة هذا الأسبوع',
        allLectures: 'كل المحاضرات',
        shownCount: '{{count}} معروضة',
        browseAll: 'تصفح الكل ->',
        newBadge: 'جديد',
        doneBadge: 'مكتمل',
        viewsLabel: '{{count}} مشاهدة',
        gridViewTitle: 'عرض شبكي',
        listViewTitle: 'عرض قائمة',
        emptyTitle: 'لا توجد محاضرات تطابق عوامل التصفية',
        emptySubtitle: 'جرّب تعديل البحث أو الترتيب أو خيارات التصفية.',
        demoPlayerTitle: 'مشغل تجريبي',
        demoPlayerHint: 'اربط خادم الفيديو لديك لبث المحاضرة المختارة.',
        speedLabel: '{{value}}x'
      }
    }
  };

  const SUBJECTS = [
    { id: 'all', translationKey: 'vod.subjects.all' }
  ];

  const INSTRUCTORS = [
    { id: 'all', translationKey: 'vod.instructors.all' }
  ];

  const LECTURES = [];

  const PLAYBACK_SPEEDS = [0.75, 1, 1.25, 1.5, 2];

  const state = {
    layout: 'grid',
    searchQuery: '',
    sortMode: 'newest',
    filterSubject: 'all',
    filterInstructor: 'all',
    filterMaxDuration: 180,
    filterShowWatched: true,
    filterNewOnly: false,
    currentPage: 1,
    perPage: 6,
    currentLectureId: null,
    playbackRateIndex: 1,
    playbackTimer: null,
    playbackRunning: false,
    playbackSeconds: 0
  };

  const shell = window.UniLearnShell.init({
    translations: TRANSLATIONS,
    defaultProfile: { name: 'Student', role: 'student' },
    defaultLanguage: 'ar',
    logoutPath: 'login.html'
  });

  const subjectChips = document.getElementById('subjectChips');
  const instructorChips = document.getElementById('instructorChips');
  const durationRange = document.getElementById('durationRange');
  const durationLabel = document.getElementById('durationLabel');
  const featuredStrip = document.getElementById('featuredStrip');
  const vodSections = document.getElementById('vodSections');
  const pagination = document.getElementById('pagination');
  const vodCount = document.getElementById('vodCount');
  const navLectureCount = document.getElementById('navLectureCount');
  const playerOverlay = document.getElementById('playerOverlay');
  const playerScreen = document.getElementById('playerScreen');
  const playerTitle = document.getElementById('playerTitle');
  const playerCurrent = document.getElementById('playerCurrent');
  const playerTotal = document.getElementById('playerTotal');
  const playerSeek = document.getElementById('playerSeek');
  const speedBtn = document.getElementById('speedBtn');

  function pick(value) {
    if (typeof value === 'string') return value;
    if (!value || typeof value !== 'object') return '';
    return value[shell.language] || value.en || '';
  }

  function escape(value) {
    return window.UniLearnShell.escapeHtml(value);
  }

  function getLecture(id) {
    return LECTURES.find((lecture) => lecture.id === id) || null;
  }

  function getSubjectLabel(subjectId) {
    return shell.t(`vod.subjects.${subjectId}`);
  }

  function getInstructorLabel(instructorId) {
    return shell.t(`vod.instructors.${instructorId}`);
  }

  function formatViews(count) {
    const locale = shell.language === 'ar' ? 'ar-EG' : 'en-US';
    return shell.t('vod.viewsLabel', {
      count: new Intl.NumberFormat(locale).format(count)
    });
  }

  function formatDuration(seconds) {
    const totalMinutes = Math.round(seconds / 60);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    if (!hours) {
      return shell.language === 'ar' ? `${minutes} د` : `${minutes}m`;
    }

    return shell.language === 'ar'
      ? `${hours} س ${minutes} د`
      : `${hours}h ${minutes}m`;
  }

  function formatPlayerTime(seconds) {
    const safeSeconds = Math.max(0, Math.floor(seconds));
    const hours = Math.floor(safeSeconds / 3600);
    const minutes = Math.floor((safeSeconds % 3600) / 60);
    const remainder = safeSeconds % 60;

    if (hours) {
      return `${hours}:${String(minutes).padStart(2, '0')}:${String(remainder).padStart(2, '0')}`;
    }

    return `${minutes}:${String(remainder).padStart(2, '0')}`;
  }

  function lectureMatchesQuery(lecture) {
    if (!state.searchQuery) return true;

    const terms = [
      lecture.code,
      pick(lecture.title),
      pick(lecture.description),
      lecture.title.en || '',
      lecture.title.ar || '',
      lecture.description.en || '',
      lecture.description.ar || '',
      getSubjectLabel(lecture.subject),
      getInstructorLabel(lecture.instructor)
    ].join(' ').toLowerCase();

    return terms.includes(state.searchQuery);
  }

  function getFilteredLectures() {
    return LECTURES.filter((lecture) => {
      if (state.filterSubject !== 'all' && lecture.subject !== state.filterSubject) return false;
      if (state.filterInstructor !== 'all' && lecture.instructor !== state.filterInstructor) return false;
      if (Math.ceil(lecture.durationSeconds / 60) > state.filterMaxDuration) return false;
      if (!state.filterShowWatched && lecture.watched) return false;
      if (state.filterNewOnly && !lecture.isNew) return false;
      return lectureMatchesQuery(lecture);
    });
  }

  function sortLectures(lectures) {
    const copy = [...lectures];

    switch (state.sortMode) {
      case 'oldest':
        return copy.sort((left, right) => left.date.localeCompare(right.date));
      case 'popular':
        return copy.sort((left, right) => right.views - left.views);
      case 'duration-asc':
        return copy.sort((left, right) => left.durationSeconds - right.durationSeconds);
      case 'duration-desc':
        return copy.sort((left, right) => right.durationSeconds - left.durationSeconds);
      case 'az':
        return copy.sort((left, right) => pick(left.title).localeCompare(pick(right.title), shell.language));
      case 'newest':
      default:
        return copy.sort((left, right) => right.date.localeCompare(left.date));
    }
  }

  function renderFilterChips() {
    subjectChips.innerHTML = SUBJECTS.map((subject) => `
      <button
        class="filter-chip ${state.filterSubject === subject.id ? 'active' : ''}"
        type="button"
        data-subject="${subject.id}"
      >
        ${escape(shell.t(subject.translationKey))}
      </button>
    `).join('');

    instructorChips.innerHTML = INSTRUCTORS.map((instructor) => `
      <button
        class="filter-chip ${state.filterInstructor === instructor.id ? 'active' : ''}"
        type="button"
        data-instructor="${instructor.id}"
      >
        ${escape(shell.t(instructor.translationKey))}
      </button>
    `).join('');
  }

  function updateDurationLabel() {
    durationLabel.textContent = state.filterMaxDuration >= 180
      ? shell.t('vod.durationAny')
      : shell.t('vod.durationLimit', { value: state.filterMaxDuration });
  }

  function updateCountSummary(filteredLectures) {
    vodCount.textContent = shell.t('vod.countSummary', {
      total: filteredLectures.length,
      newCount: filteredLectures.filter((lecture) => lecture.isNew).length
    });
    navLectureCount.textContent = String(LECTURES.length);
  }

  function renderFeatured(filteredLectures) {
    const shouldShowFeatured = !state.searchQuery
      && state.filterSubject === 'all'
      && state.filterInstructor === 'all'
      && state.filterMaxDuration >= 180
      && state.filterShowWatched
      && !state.filterNewOnly;

    if (!shouldShowFeatured || !filteredLectures.length) {
      featuredStrip.innerHTML = '';
      return;
    }

    const featuredLectures = [...LECTURES]
      .sort((left, right) => right.views - left.views)
      .slice(0, 2);

    if (!featuredLectures.length) {
      featuredStrip.innerHTML = '';
      return;
    }

    featuredStrip.innerHTML = `
      <div class="section-hd">
        <div>
          <span class="section-hd-title">${shell.t('vod.featuredTitle')}</span>
          <span class="section-hd-sub">${shell.t('vod.featuredSub')}</span>
        </div>
      </div>
      <div class="featured-strip">
        ${featuredLectures.map((lecture) => `
          <article class="featured-card" tabindex="0" role="button" data-lecture-id="${lecture.id}">
            <div class="featured-thumb">
              <span>${escape(lecture.code)}</span>
            </div>
            <div class="featured-gradient"></div>
            ${lecture.isNew ? `<div class="featured-badge">${shell.t('vod.newBadge')}</div>` : ''}
            <div class="featured-duration">${formatDuration(lecture.durationSeconds)}</div>
            <div class="featured-info">
              <div class="featured-subject">${escape(getSubjectLabel(lecture.subject))} - ${escape(getInstructorLabel(lecture.instructor))}</div>
              <div class="featured-title">${escape(pick(lecture.title))}</div>
              <div class="featured-meta">
                <span>${formatDuration(lecture.durationSeconds)}</span>
                <span>${escape(formatViews(lecture.views))}</span>
              </div>
            </div>
          </article>
        `).join('')}
      </div>
    `;
  }

  function buildLectureCard(lecture) {
    const statusBadge = lecture.watched
      ? `<span class="status-badge done">${shell.t('vod.doneBadge')}</span>`
      : lecture.isNew
        ? `<span class="status-badge new">${shell.t('vod.newBadge')}</span>`
        : '';

    return `
      <article
        class="vod-card ${state.layout === 'list' ? 'list-mode' : ''}"
        tabindex="0"
        role="button"
        data-lecture-id="${lecture.id}"
      >
        <div class="vod-thumb-wrap">
          <div class="vod-thumb">
            <span>${escape(lecture.code)}</span>
          </div>
          <div class="vod-overlay">
            <div class="play-icon">
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </div>
          </div>
          <span class="vod-duration">${formatDuration(lecture.durationSeconds)}</span>
          ${statusBadge}
          ${lecture.progress > 0 && lecture.progress < 100 ? `<div class="vod-progress-bar" style="width:${lecture.progress}%"></div>` : ''}
        </div>

        <div class="vod-body-card">
          <div class="vod-subject">${escape(getSubjectLabel(lecture.subject))}</div>
          <h3 class="vod-title">${escape(pick(lecture.title))}</h3>
          <p class="vod-description">${escape(pick(lecture.description))}</p>
          <div class="vod-meta-row">
            <span class="vod-instructor">${escape(getInstructorLabel(lecture.instructor))}</span>
            <span class="vod-views">${escape(formatViews(lecture.views))}</span>
          </div>
        </div>
      </article>
    `;
  }

  function renderLectureGrid(sortedLectures) {
    vodSections.innerHTML = '';

    if (!sortedLectures.length) {
      vodSections.innerHTML = `
        <div class="empty-vod">
          <div class="empty-vod-icon">TV</div>
          <div class="empty-vod-title">${shell.t('vod.emptyTitle')}</div>
          <p>${shell.t('vod.emptySubtitle')}</p>
        </div>
      `;
      pagination.innerHTML = '';
      return;
    }

    const totalPages = Math.max(1, Math.ceil(sortedLectures.length / state.perPage));
    state.currentPage = Math.min(state.currentPage, totalPages);
    const startIndex = (state.currentPage - 1) * state.perPage;
    const pageItems = sortedLectures.slice(startIndex, startIndex + state.perPage);

    vodSections.innerHTML = `
      <div class="section-hd">
        <div>
          <span class="section-hd-title">${shell.t('vod.allLectures')}</span>
          <span class="section-hd-sub">${shell.t('vod.shownCount', { count: pageItems.length })}</span>
        </div>
        <span class="section-more">${shell.t('vod.browseAll')}</span>
      </div>
      <div class="vod-grid ${state.layout === 'list' ? 'list-mode' : ''}">
        ${pageItems.map((lecture) => buildLectureCard(lecture)).join('')}
      </div>
    `;

    renderPagination(totalPages);
  }

  function renderPagination(totalPages) {
    pagination.innerHTML = '';

    if (totalPages <= 1) return;

    const previousButton = document.createElement('button');
    previousButton.className = 'pg-btn';
    previousButton.type = 'button';
    previousButton.textContent = '<';
    previousButton.disabled = state.currentPage === 1;
    previousButton.addEventListener('click', () => {
      state.currentPage -= 1;
      renderAll();
      scrollListToTop();
    });
    pagination.appendChild(previousButton);

    for (let page = 1; page <= totalPages; page += 1) {
      const pageButton = document.createElement('button');
      pageButton.className = `pg-btn ${page === state.currentPage ? 'active' : ''}`;
      pageButton.type = 'button';
      pageButton.textContent = String(page);
      pageButton.addEventListener('click', () => {
        state.currentPage = page;
        renderAll();
        scrollListToTop();
      });
      pagination.appendChild(pageButton);
    }

    const nextButton = document.createElement('button');
    nextButton.className = 'pg-btn';
    nextButton.type = 'button';
    nextButton.textContent = '>';
    nextButton.disabled = state.currentPage === totalPages;
    nextButton.addEventListener('click', () => {
      state.currentPage += 1;
      renderAll();
      scrollListToTop();
    });
    pagination.appendChild(nextButton);
  }

  function scrollListToTop() {
    document.getElementById('vodArea').scrollTo({ top: 0, behavior: 'smooth' });
  }

  function renderAll() {
    const filteredLectures = getFilteredLectures();
    const sortedLectures = sortLectures(filteredLectures);

    renderFilterChips();
    updateDurationLabel();
    updateCountSummary(filteredLectures);
    renderFeatured(filteredLectures);
    renderLectureGrid(sortedLectures);
    syncLayoutButtons();

    if (state.currentLectureId) {
      updatePlayerScreen();
      updatePlayerProgress();
    }
  }

  function syncLayoutButtons() {
    document.getElementById('gridBtn').classList.toggle('active', state.layout === 'grid');
    document.getElementById('listBtn').classList.toggle('active', state.layout === 'list');
  }

  function updatePlayerScreen() {
    const lecture = getLecture(state.currentLectureId);
    if (!lecture) return;

    playerTitle.textContent = pick(lecture.title);
    playerTotal.textContent = formatPlayerTime(lecture.durationSeconds);
    speedBtn.textContent = shell.t('vod.speedLabel', { value: PLAYBACK_SPEEDS[state.playbackRateIndex] });
    playerScreen.innerHTML = `
      <div class="player-poster">
        <span class="player-code">${escape(lecture.code)}</span>
        <h2 class="player-poster-title">${escape(pick(lecture.title))}</h2>
        <p class="player-poster-desc">${escape(pick(lecture.description))}</p>
        <div class="player-poster-meta">
          <span>${escape(getSubjectLabel(lecture.subject))}</span>
          <span>${escape(getInstructorLabel(lecture.instructor))}</span>
          <span>${formatDuration(lecture.durationSeconds)}</span>
        </div>
        <div class="player-demo-copy">
          <strong>${shell.t('vod.demoPlayerTitle')}</strong>
          <span>${shell.t('vod.demoPlayerHint')}</span>
        </div>
      </div>
    `;
  }

  function updatePlayerProgress() {
    const lecture = getLecture(state.currentLectureId);
    if (!lecture) return;

    playerSeek.max = String(lecture.durationSeconds);
    playerSeek.value = String(Math.floor(state.playbackSeconds));
    playerCurrent.textContent = formatPlayerTime(state.playbackSeconds);
    playerTotal.textContent = formatPlayerTime(lecture.durationSeconds);
  }

  function updatePlayIcon() {
    const playPause = document.getElementById('playPause');
    playPause.innerHTML = state.playbackRunning
      ? `<svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>`
      : `<svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`;
  }

  function stopPlayback() {
    if (state.playbackTimer) {
      clearInterval(state.playbackTimer);
      state.playbackTimer = null;
    }
    state.playbackRunning = false;
    updatePlayIcon();
  }

  function togglePlayback() {
    const lecture = getLecture(state.currentLectureId);
    if (!lecture) return;

    if (state.playbackRunning) {
      stopPlayback();
      return;
    }

    state.playbackRunning = true;
    updatePlayIcon();
    state.playbackTimer = setInterval(() => {
      state.playbackSeconds = Math.min(
        lecture.durationSeconds,
        state.playbackSeconds + PLAYBACK_SPEEDS[state.playbackRateIndex]
      );
      updatePlayerProgress();

      if (state.playbackSeconds >= lecture.durationSeconds) {
        stopPlayback();
      }
    }, 1000);
  }

  function openPlayer(lectureId) {
    const lecture = getLecture(lectureId);
    if (!lecture) return;

    stopPlayback();
    state.currentLectureId = lecture.id;
    state.playbackRateIndex = 1;
    state.playbackSeconds = Math.floor(lecture.durationSeconds * (lecture.progress / 100));
    playerOverlay.classList.add('open');
    playerOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    updatePlayerScreen();
    updatePlayerProgress();
    updatePlayIcon();
  }

  function closePlayer() {
    stopPlayback();
    state.currentLectureId = null;
    playerOverlay.classList.remove('open');
    playerOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  subjectChips.addEventListener('click', (event) => {
    const button = event.target.closest('[data-subject]');
    if (!button) return;
    state.filterSubject = button.dataset.subject;
    state.currentPage = 1;
    renderAll();
  });

  instructorChips.addEventListener('click', (event) => {
    const button = event.target.closest('[data-instructor]');
    if (!button) return;
    state.filterInstructor = button.dataset.instructor;
    state.currentPage = 1;
    renderAll();
  });

  document.getElementById('vodSearch').addEventListener('input', (event) => {
    state.searchQuery = event.target.value.trim().toLowerCase();
    state.currentPage = 1;
    renderAll();
  });

  document.getElementById('sortSelect').addEventListener('change', (event) => {
    state.sortMode = event.target.value;
    state.currentPage = 1;
    renderAll();
  });

  durationRange.addEventListener('input', () => {
    state.filterMaxDuration = Number(durationRange.value);
    state.currentPage = 1;
    updateDurationLabel();
    renderAll();
  });

  document.getElementById('filterWatched').addEventListener('change', (event) => {
    state.filterShowWatched = event.target.checked;
    state.currentPage = 1;
    renderAll();
  });

  document.getElementById('filterNew').addEventListener('change', (event) => {
    state.filterNewOnly = event.target.checked;
    state.currentPage = 1;
    renderAll();
  });

  document.getElementById('gridBtn').addEventListener('click', () => {
    state.layout = 'grid';
    syncLayoutButtons();
    renderAll();
  });

  document.getElementById('listBtn').addEventListener('click', () => {
    state.layout = 'list';
    syncLayoutButtons();
    renderAll();
  });

  function activateLectureCard(target) {
    const card = target.closest('[data-lecture-id]');
    if (!card) return;
    openPlayer(card.dataset.lectureId);
  }

  featuredStrip.addEventListener('click', (event) => activateLectureCard(event.target));
  featuredStrip.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      activateLectureCard(event.target);
    }
  });

  vodSections.addEventListener('click', (event) => activateLectureCard(event.target));
  vodSections.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      activateLectureCard(event.target);
    }
  });

  document.getElementById('playPause').addEventListener('click', togglePlayback);

  document.getElementById('skipBack').addEventListener('click', () => {
    state.playbackSeconds = Math.max(0, state.playbackSeconds - 10);
    updatePlayerProgress();
  });

  document.getElementById('skipFwd').addEventListener('click', () => {
    const lecture = getLecture(state.currentLectureId);
    if (!lecture) return;
    state.playbackSeconds = Math.min(lecture.durationSeconds, state.playbackSeconds + 10);
    updatePlayerProgress();
  });

  speedBtn.addEventListener('click', () => {
    state.playbackRateIndex = (state.playbackRateIndex + 1) % PLAYBACK_SPEEDS.length;
    speedBtn.textContent = shell.t('vod.speedLabel', { value: PLAYBACK_SPEEDS[state.playbackRateIndex] });
  });

  playerSeek.addEventListener('input', () => {
    state.playbackSeconds = Number(playerSeek.value);
    updatePlayerProgress();
  });

  document.getElementById('playerClose').addEventListener('click', closePlayer);
  playerOverlay.addEventListener('click', (event) => {
    if (event.target === playerOverlay) closePlayer();
  });

  document.addEventListener('keydown', (event) => {
    if (!playerOverlay.classList.contains('open')) return;
    if (event.key === 'Escape') closePlayer();
    if (event.key === ' ') {
      event.preventDefault();
      togglePlayback();
    }
  });

  window.addEventListener('unilearn:language-changed', renderAll);
  window.addEventListener('unilearn:profile-updated', renderAll);

  document.getElementById('filterWatched').checked = state.filterShowWatched;
  document.getElementById('filterNew').checked = state.filterNewOnly;
  durationRange.value = String(state.filterMaxDuration);
  renderAll();
})();