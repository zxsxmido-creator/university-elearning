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
        studyMaterials: 'Study Materials'
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
      curriculum: {
        pageTitle: 'Curriculum - UniLearn',
        pageEyebrow: 'Academic Resources',
        pageHeading: 'Curriculum & Study Materials',
        searchPlaceholder: 'Search materials...',
        subjectsLabel: 'Subjects',
        breadcrumbRoot: 'Curriculum',
        allSubjects: 'All Subjects',
        materials: 'Materials',
        weeks: 'Weeks',
        complete: 'Complete',
        weekLabel: 'Week',
        emptyTitle: 'No materials found',
        emptySubtitle: 'Try a different search term or category.',
        previewUnavailable: 'Preview not available in demo mode.',
        previewHint: 'Connect your backend to serve files via <code>/uploads/pdfs/</code>',
        download: 'Download',
        prev: 'Prev',
        next: 'Next',
        closeModal: 'Close preview',
        gridViewTitle: 'Grid view',
        listViewTitle: 'List view',
        types: {
          pdf: 'PDF',
          slides: 'Slides',
          video: 'Video',
          quiz: 'Quiz',
          link: 'Link'
        }
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
        studyMaterials: 'المواد الدراسية'
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
      curriculum: {
        pageTitle: 'المنهج - يوني ليرن',
        pageEyebrow: 'الموارد الأكاديمية',
        pageHeading: 'المنهج والمواد الدراسية',
        searchPlaceholder: 'ابحث في المواد...',
        subjectsLabel: 'المواد',
        breadcrumbRoot: 'المنهج',
        allSubjects: 'كل المواد',
        materials: 'المواد',
        weeks: 'الأسابيع',
        complete: 'الاكتمال',
        weekLabel: 'الأسبوع',
        emptyTitle: 'لم يتم العثور على مواد',
        emptySubtitle: 'جرّب كلمة بحث أو تصنيفا مختلفا.',
        previewUnavailable: 'المعاينة غير متاحة في وضع العرض التجريبي.',
        previewHint: 'اربط الخادم الخلفي لديك لتقديم الملفات عبر <code>/uploads/pdfs/</code>',
        download: 'تنزيل',
        prev: 'السابق',
        next: 'التالي',
        closeModal: 'إغلاق المعاينة',
        gridViewTitle: 'عرض شبكي',
        listViewTitle: 'عرض قائمة',
        types: {
          pdf: 'PDF',
          slides: 'شرائح',
          video: 'فيديو',
          quiz: 'اختبار',
          link: 'رابط'
        }
      }
    }
  };

  const shell = window.UniLearnShell.init({
    translations: TRANSLATIONS,
    defaultProfile: { name: 'Student', role: 'student' },
    logoutPath: 'login.html'
  });

  const CATEGORIES = [
    {
      id: 'cs',
      name: { en: 'Computer Science', ar: 'علوم الحاسب' },
      code: 'CS301',
      color: '#4ab8ff',
      dot: '#4ab8ff',
      desc: {
        en: 'Core algorithms, data structures, and computational theory for advanced software engineering.',
        ar: 'خوارزميات أساسية وهياكل بيانات ونظرية حسابية متقدمة للهندسة البرمجية.'
      },
      materials: 34,
      weeks: 12
    },
    {
      id: 'math',
      name: { en: 'Mathematics', ar: 'الرياضيات' },
      code: 'MATH201',
      color: '#00e5a0',
      dot: '#00e5a0',
      desc: {
        en: 'Linear algebra, calculus, and discrete mathematics for engineering applications.',
        ar: 'الجبر الخطي والتفاضل والرياضيات المنفصلة لتطبيقات الهندسة.'
      },
      materials: 28,
      weeks: 10
    },
    {
      id: 'physics',
      name: { en: 'Physics', ar: 'الفيزياء' },
      code: 'PHYS301',
      color: '#f5a623',
      dot: '#f5a623',
      desc: {
        en: 'Classical mechanics, electromagnetism, and quantum phenomena.',
        ar: 'الميكانيكا الكلاسيكية والكهرومغناطيسية والظواهر الكمية.'
      },
      materials: 22,
      weeks: 10
    },
    {
      id: 'db',
      name: { en: 'Database Systems', ar: 'أنظمة قواعد البيانات' },
      code: 'DB401',
      color: '#c084fc',
      dot: '#c084fc',
      desc: {
        en: 'Relational and NoSQL databases, query optimization, and distributed systems.',
        ar: 'قواعد البيانات العلائقية وNoSQL وتحسين الاستعلامات والأنظمة الموزعة.'
      },
      materials: 19,
      weeks: 8
    },
    {
      id: 'networks',
      name: { en: 'Computer Networks', ar: 'شبكات الحاسب' },
      code: 'NET301',
      color: '#ff6b6b',
      dot: '#ff6b6b',
      desc: {
        en: 'TCP/IP, protocols, network security, and distributed architecture.',
        ar: 'TCP/IP والبروتوكولات وأمن الشبكات والبنية الموزعة.'
      },
      materials: 16,
      weeks: 8
    }
  ];

  const CURRICULUM = {
    cs: [
      {
        week: 1, title: 'Introduction to Complexity Theory', progress: 100,
        items: [
          { id: 'cs-1-1', type: 'pdf', title: 'Big-O Notation & Complexity Classes', size: '2.4 MB', pages: 18, done: true },
          { id: 'cs-1-2', type: 'slides', title: 'Week 1 Lecture Slides', size: '4.1 MB', pages: 42, done: true },
          { id: 'cs-1-3', type: 'quiz', title: 'Complexity Quiz - Chapter 1', size: null, pages: null, done: true },
          { id: 'cs-1-4', type: 'link', title: 'Supplementary: Coursera Big-O', size: null, pages: null, done: false }
        ]
      },
      {
        week: 2, title: 'Arrays, Linked Lists & Stacks', progress: 100,
        items: [
          { id: 'cs-2-1', type: 'pdf', title: 'Linear Data Structures - Theory', size: '3.1 MB', pages: 24, done: true },
          { id: 'cs-2-2', type: 'pdf', title: 'Memory Allocation & Pointers', size: '1.8 MB', pages: 14, done: true },
          { id: 'cs-2-3', type: 'slides', title: 'Week 2 Slides', size: '5.2 MB', pages: 55, done: true },
          { id: 'cs-2-4', type: 'video', title: 'Lab: Implementing a Stack in C', size: '245 MB', pages: null, done: true }
        ]
      },
      {
        week: 3, title: 'Trees - Binary, AVL & Red-Black', progress: 72,
        items: [
          { id: 'cs-3-1', type: 'pdf', title: 'Binary Search Trees - Full Reference', size: '4.6 MB', pages: 36, done: true },
          { id: 'cs-3-2', type: 'pdf', title: 'AVL Trees & Rotations', size: '2.9 MB', pages: 22, done: true },
          { id: 'cs-3-3', type: 'slides', title: 'Week 3 Lecture Slides', size: '6.3 MB', pages: 68, done: false },
          { id: 'cs-3-4', type: 'quiz', title: 'Trees Midterm Practice', size: null, pages: null, done: false },
          { id: 'cs-3-5', type: 'link', title: 'Visualizer: BST Animations', size: null, pages: null, done: false }
        ]
      },
      {
        week: 4, title: 'Graphs & Graph Algorithms', progress: 0,
        items: [
          { id: 'cs-4-1', type: 'pdf', title: 'Graph Theory Fundamentals', size: '5.2 MB', pages: 40, done: false },
          { id: 'cs-4-2', type: 'pdf', title: 'BFS, DFS & Shortest Paths', size: '3.4 MB', pages: 28, done: false },
          { id: 'cs-4-3', type: 'slides', title: 'Week 4 Slides', size: '4.8 MB', pages: 50, done: false },
          { id: 'cs-4-4', type: 'video', title: 'Lab: Dijkstra Implementation', size: '310 MB', pages: null, done: false }
        ]
      }
    ],
    math: [
      {
        week: 1, title: 'Vectors & Vector Spaces', progress: 100,
        items: [
          { id: 'math-1-1', type: 'pdf', title: 'Vector Spaces - Axiomatic Approach', size: '3.2 MB', pages: 26, done: true },
          { id: 'math-1-2', type: 'slides', title: 'Week 1 Slides', size: '3.8 MB', pages: 38, done: true },
          { id: 'math-1-3', type: 'quiz', title: 'Vectors Practice Problems', size: null, pages: null, done: true }
        ]
      },
      {
        week: 2, title: 'Matrices & Linear Transformations', progress: 60,
        items: [
          { id: 'math-2-1', type: 'pdf', title: 'Matrix Operations Reference', size: '2.7 MB', pages: 20, done: true },
          { id: 'math-2-2', type: 'pdf', title: 'Linear Transformations & Kernels', size: '3.5 MB', pages: 30, done: false },
          { id: 'math-2-3', type: 'slides', title: 'Week 2 Slides', size: '4.4 MB', pages: 46, done: false }
        ]
      },
      {
        week: 3, title: 'Eigenvalues & Eigenvectors', progress: 0,
        items: [
          { id: 'math-3-1', type: 'pdf', title: 'Eigenvalue Decomposition', size: '4.1 MB', pages: 32, done: false },
          { id: 'math-3-2', type: 'slides', title: 'Week 3 Slides', size: '5.0 MB', pages: 52, done: false },
          { id: 'math-3-3', type: 'link', title: '3Blue1Brown: Eigenvectors Visualized', size: null, pages: null, done: false }
        ]
      }
    ],
    physics: [
      {
        week: 1, title: 'Classical Mechanics Review', progress: 100,
        items: [
          { id: 'phys-1-1', type: 'pdf', title: "Newton's Laws - Advanced Treatment", size: '2.8 MB', pages: 22, done: true },
          { id: 'phys-1-2', type: 'slides', title: 'Week 1 Slides', size: '4.2 MB', pages: 44, done: true }
        ]
      },
      {
        week: 2, title: 'Wave Functions & Probability', progress: 30,
        items: [
          { id: 'phys-2-1', type: 'pdf', title: 'Schrodinger Equation - Derivation', size: '5.4 MB', pages: 42, done: true },
          { id: 'phys-2-2', type: 'pdf', title: 'Probability Densities & Normalization', size: '3.3 MB', pages: 26, done: false },
          { id: 'phys-2-3', type: 'slides', title: 'Week 2 Slides', size: '6.1 MB', pages: 62, done: false },
          { id: 'phys-2-4', type: 'quiz', title: 'Wave Function Problem Set', size: null, pages: null, done: false }
        ]
      }
    ],
    db: [
      {
        week: 1, title: 'Relational Model & SQL', progress: 100,
        items: [
          { id: 'db-1-1', type: 'pdf', title: 'Relational Algebra Reference', size: '3.0 MB', pages: 24, done: true },
          { id: 'db-1-2', type: 'slides', title: 'Week 1 Slides', size: '3.6 MB', pages: 38, done: true },
          { id: 'db-1-3', type: 'quiz', title: 'SQL Fundamentals Quiz', size: null, pages: null, done: true }
        ]
      },
      {
        week: 2, title: 'Indexing & Query Optimization', progress: 0,
        items: [
          { id: 'db-2-1', type: 'pdf', title: 'B-Tree Indexing Strategies', size: '4.5 MB', pages: 36, done: false },
          { id: 'db-2-2', type: 'pdf', title: 'Query Execution Plans', size: '2.9 MB', pages: 22, done: false },
          { id: 'db-2-3', type: 'slides', title: 'Week 2 Slides', size: '5.2 MB', pages: 54, done: false }
        ]
      }
    ],
    networks: [
      {
        week: 1, title: 'OSI Model & TCP/IP Stack', progress: 80,
        items: [
          { id: 'net-1-1', type: 'pdf', title: 'Network Layer Architecture', size: '3.8 MB', pages: 30, done: true },
          { id: 'net-1-2', type: 'slides', title: 'Week 1 Slides', size: '4.0 MB', pages: 42, done: true },
          { id: 'net-1-3', type: 'quiz', title: 'TCP/IP Protocol Quiz', size: null, pages: null, done: false }
        ]
      }
    ]
  };

  const TYPE_META = {
    pdf: { icon: 'P', cls: 'pdf' },
    slides: { icon: 'S', cls: 'slides' },
    video: { icon: 'V', cls: 'video' },
    quiz: { icon: 'Q', cls: 'quiz' },
    link: { icon: 'L', cls: 'link' }
  };

  let activeCatId = 'cs';
  let viewMode = 'grid';
  let searchQuery = '';
  let modalItems = [];
  let modalIndex = 0;
  const weekContainer = document.getElementById('weekContainer');

  function pick(value) {
    if (typeof value === 'string') return value;
    if (!value || typeof value !== 'object') return '';
    return value[shell.language] || value.en || '';
  }

  function escapeHtml(value) {
    return window.UniLearnShell.escapeHtml(value);
  }

  function getSourceWeeks() {
    if (activeCatId === 'all') return Object.values(CURRICULUM).flat();
    return CURRICULUM[activeCatId] || [];
  }

  function findItem(id) {
    for (const weeks of Object.values(CURRICULUM)) {
      for (const week of weeks) {
        const found = week.items.find((item) => item.id === id);
        if (found) return found;
      }
    }
    return null;
  }

  function renderCatList() {
    const catList = document.getElementById('catList');
    catList.innerHTML = '';

    const allItem = document.createElement('div');
    allItem.className = `cat-item ${activeCatId === 'all' ? 'active' : ''}`;
    allItem.innerHTML = `
      <div class="cat-dot" style="background:var(--text-muted)"></div>
      <span class="cat-name">${shell.t('curriculum.allSubjects')}</span>
      <span class="cat-count">${CATEGORIES.reduce((total, category) => total + category.materials, 0)}</span>
    `;
    allItem.addEventListener('click', () => {
      activeCatId = 'all';
      renderCatList();
      renderMaterials();
    });
    catList.appendChild(allItem);

    const divider = document.createElement('div');
    divider.className = 'cat-divider';
    catList.appendChild(divider);

    CATEGORIES.forEach((category) => {
      const totalMaterials = (CURRICULUM[category.id] || []).reduce((total, week) => total + week.items.length, 0);
      const row = document.createElement('div');
      row.className = `cat-item ${category.id === activeCatId ? 'active' : ''}`;
      row.innerHTML = `
        <div class="cat-dot" style="background:${category.dot}"></div>
        <span class="cat-name">${escapeHtml(pick(category.name))}</span>
        <span class="cat-count">${totalMaterials}</span>
      `;
      row.addEventListener('click', () => {
        activeCatId = category.id;
        renderCatList();
        renderMaterials();
      });
      catList.appendChild(row);
    });
  }

  function renderHero(category) {
    const heroEl = document.getElementById('catHero');
    if (!category) {
      heroEl.innerHTML = '';
      return;
    }

    const totalMaterials = (CURRICULUM[category.id] || []).reduce((total, week) => total + week.items.length, 0);
    const doneMaterials = (CURRICULUM[category.id] || []).reduce((total, week) => {
      return total + week.items.filter((item) => item.done).length;
    }, 0);

    heroEl.innerHTML = `
      <div class="cat-hero">
        <div class="cat-hero-left">
          <div class="cat-hero-tag" style="color:${category.color}">${category.code}</div>
          <h2 class="cat-hero-title">${escapeHtml(pick(category.name))}</h2>
          <p class="cat-hero-desc">${escapeHtml(pick(category.desc))}</p>
        </div>
        <div class="cat-hero-stats">
          <div>
            <div class="cat-stat-val">${totalMaterials}</div>
            <div class="cat-stat-label">${shell.t('curriculum.materials')}</div>
          </div>
          <div>
            <div class="cat-stat-val">${category.weeks}</div>
            <div class="cat-stat-label">${shell.t('curriculum.weeks')}</div>
          </div>
          <div>
            <div class="cat-stat-val">${Math.round((doneMaterials / totalMaterials) * 100) || 0}%</div>
            <div class="cat-stat-label">${shell.t('curriculum.complete')}</div>
          </div>
        </div>
      </div>
    `;
  }

  function buildMatCard(item) {
    const meta = TYPE_META[item.type] || TYPE_META.pdf;
    const typeLabel = shell.t(`curriculum.types.${item.type}`);
    const sizeLabel = item.size ? item.size : (item.pages ? `${item.pages} pages` : '');
    const canDownload = item.type === 'pdf' || item.type === 'slides';

    return `
      <div class="mat-card type-${item.type} ${item.done ? 'completed' : ''}" data-id="${item.id}" data-type="${item.type}" data-title="${escapeHtml(item.title)}">
        <div class="mat-icon ${meta.cls}">${meta.icon}</div>
        <div class="mat-info">
          <div class="mat-type">${typeLabel}${item.pages ? ` · ${item.pages}pp` : ''}</div>
          <div class="mat-title">${escapeHtml(item.title)}</div>
          <div class="mat-meta">
            ${sizeLabel ? `<span>${sizeLabel}</span>` : ''}
          </div>
        </div>
        <div class="mat-actions">
          ${canDownload ? `
            <button class="mat-download" type="button" title="${shell.t('curriculum.download')}" onclick="event.stopPropagation()">
              <svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </button>` : ''}
          <button class="mat-check ${item.done ? 'done' : ''}" type="button" data-id="${item.id}" title="Toggle complete" onclick="event.stopPropagation()">
            ${item.done ? `<svg width="10" height="10" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>` : ''}
          </button>
        </div>
      </div>
    `;
  }

  function attachCardEvents() {
    document.querySelectorAll('.mat-check').forEach((button) => {
      button.addEventListener('click', (event) => {
        event.stopPropagation();
        const item = findItem(button.dataset.id);
        if (!item) return;
        item.done = !item.done;
        renderMaterials();
      });
    });

    document.querySelectorAll('.mat-card').forEach((card) => {
      card.addEventListener('click', () => {
        const item = findItem(card.dataset.id);
        if (!item) return;
        if (item.type === 'link') {
          window.open('#', '_blank');
          return;
        }
        openModal(item);
      });
    });
  }

  function renderMaterials() {
    const area = weekContainer;
    area.innerHTML = '';

    const activeCategory = CATEGORIES.find((category) => category.id === activeCatId);
    document.getElementById('breadcrumbCat').textContent = activeCatId === 'all'
      ? shell.t('curriculum.allSubjects')
      : pick(activeCategory?.name);

    renderHero(activeCatId === 'all' ? null : activeCategory);

    const categoriesToRender = activeCatId === 'all'
      ? CATEGORIES.map((category) => ({ category, weeks: CURRICULUM[category.id] || [] }))
      : [{ category: activeCategory, weeks: CURRICULUM[activeCatId] || [] }];

    let hasAny = false;

    categoriesToRender.forEach(({ category, weeks }) => {
      weeks.forEach((week, index) => {
        const filteredItems = week.items.filter((item) => {
          return !searchQuery || item.title.toLowerCase().includes(searchQuery);
        });

        if (!filteredItems.length) return;
        hasAny = true;

        const section = document.createElement('div');
        section.className = 'week-section';
        section.style.animationDelay = `${index * 0.06}s`;
        section.innerHTML = `
          <div class="week-header">
            <span class="week-number" style="color:${category.color};background:${category.color}20">
              ${activeCatId === 'all' ? `${category.code} · ` : ''}${shell.t('curriculum.weekLabel')} ${week.week}
            </span>
            <span class="week-title">${escapeHtml(week.title)}</span>
            <div class="week-progress">
              <div class="week-prog-bar">
                <div class="week-prog-fill" data-width="${week.progress}" style="background:${category.color}"></div>
              </div>
              <span class="week-prog-label">${week.progress}%</span>
            </div>
            <svg class="week-chevron" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
          <div class="week-items">
            ${filteredItems.map((item) => buildMatCard(item)).join('')}
          </div>
        `;

        section.querySelector('.week-header').addEventListener('click', () => {
          section.classList.toggle('collapsed');
        });

        area.appendChild(section);
      });
    });

    if (!hasAny) {
      area.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">?</div>
          <div class="empty-title">${shell.t('curriculum.emptyTitle')}</div>
          <p class="empty-sub">${shell.t('curriculum.emptySubtitle')}</p>
        </div>
      `;
    }

    requestAnimationFrame(() => {
      setTimeout(() => {
        document.querySelectorAll('.week-prog-fill').forEach((bar) => {
          bar.style.width = `${bar.dataset.width}%`;
        });
      }, 100);
    });

    attachCardEvents();
    syncViewMode();
  }

  function syncViewMode() {
    weekContainer.classList.toggle('list-mode', viewMode === 'list');
    document.getElementById('viewGrid').classList.toggle('active', viewMode === 'grid');
    document.getElementById('viewList').classList.toggle('active', viewMode === 'list');
  }

  function openModal(item) {
    document.getElementById('modalEyebrow').textContent = shell.t(`curriculum.types.${item.type}`);
    document.getElementById('modalTitle').textContent = item.title;
    document.getElementById('modalDlBtn').href = `/uploads/pdfs/${item.id}.pdf`;

    modalItems = getSourceWeeks()
      .flatMap((week) => week.items)
      .filter((entry) => entry.type === item.type);
    modalIndex = modalItems.findIndex((entry) => entry.id === item.id);

    updateModalNav();
    document.getElementById('matModal').classList.add('open');
  }

  function updateModalNav() {
    document.getElementById('modalPrev').disabled = modalIndex <= 0;
    document.getElementById('modalNext').disabled = modalIndex >= modalItems.length - 1;

    const current = modalItems[modalIndex];
    if (!current) return;

    document.getElementById('modalEyebrow').textContent = shell.t(`curriculum.types.${current.type}`);
    document.getElementById('modalTitle').textContent = current.title;
    document.getElementById('modalDlBtn').href = `/uploads/pdfs/${current.id}.pdf`;
  }

  document.getElementById('modalClose').addEventListener('click', () => {
    document.getElementById('matModal').classList.remove('open');
  });

  document.getElementById('matModal').addEventListener('click', (event) => {
    if (event.target === document.getElementById('matModal')) {
      document.getElementById('matModal').classList.remove('open');
    }
  });

  document.getElementById('modalPrev').addEventListener('click', () => {
    if (modalIndex > 0) {
      modalIndex -= 1;
      updateModalNav();
    }
  });

  document.getElementById('modalNext').addEventListener('click', () => {
    if (modalIndex < modalItems.length - 1) {
      modalIndex += 1;
      updateModalNav();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (!document.getElementById('matModal').classList.contains('open')) return;
    if (event.key === 'Escape') document.getElementById('matModal').classList.remove('open');
    if (event.key === 'ArrowLeft' && modalIndex > 0) {
      modalIndex -= 1;
      updateModalNav();
    }
    if (event.key === 'ArrowRight' && modalIndex < modalItems.length - 1) {
      modalIndex += 1;
      updateModalNav();
    }
  });

  document.getElementById('viewGrid').addEventListener('click', () => {
    viewMode = 'grid';
    syncViewMode();
  });

  document.getElementById('viewList').addEventListener('click', () => {
    viewMode = 'list';
    syncViewMode();
  });

  document.getElementById('matSearch').addEventListener('input', (event) => {
    searchQuery = event.target.value.toLowerCase().trim();
    renderMaterials();
  });

  window.addEventListener('unilearn:language-changed', () => {
    renderCatList();
    renderMaterials();
  });

  renderCatList();
  renderMaterials();
  syncViewMode();
})();
