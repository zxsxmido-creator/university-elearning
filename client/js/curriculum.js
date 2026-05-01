// client/js/curriculum.js
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
    defaultLanguage: 'ar',
    logoutPath: '/login'
  });

  const CATEGORIES = [];
  const CURRICULUM = {};

  const TYPE_META = {
    pdf: { icon: 'P', cls: 'pdf' },
    slides: { icon: 'S', cls: 'slides' },
    video: { icon: 'V', cls: 'video' },
    quiz: { icon: 'Q', cls: 'quiz' },
    link: { icon: 'L', cls: 'link' }
  };

  let activeCatId = 'all';
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

  // FIX: Instead of wiping catList.innerHTML (which could affect shell-managed
  // sibling/parent nodes if references shift), surgically remove only the
  // dynamically generated category rows, leaving any other injected nodes intact.
  function renderCatList() {
    const catList = document.getElementById('catList');

    // Surgical removal: only touch elements this function owns.
    catList.querySelectorAll('.cat-item, .cat-divider').forEach(el => el.remove());

    const allItem = document.createElement('div');
    allItem.className = `cat-item ${activeCatId === 'all' ? 'active' : ''}`;
    allItem.innerHTML = `
      <div class="cat-dot" style="background:var(--text-muted)"></div>
      <span class="cat-name">${shell.t('curriculum.allSubjects')}</span>
      <span class="cat-count">${CATEGORIES.reduce((total, category) => total + (category.materials || 0), 0)}</span>
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
            <div class="cat-stat-val">${category.weeks || 0}</div>
            <div class="cat-stat-label">${shell.t('curriculum.weeks')}</div>
          </div>
          <div>
            <div class="cat-stat-val">${totalMaterials ? Math.round((doneMaterials / totalMaterials) * 100) : 0}%</div>
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
      if (!category) return;
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

  const curriculumBaseOpenModal = openModal;
  const curriculumBaseUpdateModalNav = updateModalNav;

  function ensureCmsStyles() {
    if (document.getElementById('unilearnCmsInlineStyles')) return;

    const style = document.createElement('style');
    style.id = 'unilearnCmsInlineStyles';
    style.textContent = `
      .cms-admin-panel {
        margin-bottom: 24px;
        padding: 18px;
        border: 1px solid var(--border-hi);
        border-radius: var(--radius-lg);
        background: var(--panel);
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
        margin-bottom: 14px;
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
        color: var(--text-muted);
        font-family: var(--mono);
        font-size: 9px;
        letter-spacing: 0.1em;
        text-transform: uppercase;
      }

      .cms-admin-title {
        color: var(--text-primary);
        font-family: var(--serif);
        font-size: 20px;
        font-style: italic;
      }

      .cms-admin-note {
        color: var(--text-secondary);
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
        color: var(--text-secondary);
        font-size: 11px;
        font-weight: 600;
      }

      .cms-field input,
      .cms-field textarea,
      .cms-field select {
        width: 100%;
        min-height: 42px;
        padding: 10px 12px;
        border: 1px solid var(--border-mid);
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.04);
        color: var(--text-primary);
        outline: none;
      }

      .cms-field textarea {
        min-height: 88px;
        resize: vertical;
      }

      .cms-field input:focus,
      .cms-field textarea:focus,
      .cms-field select:focus {
        border-color: var(--mint);
        box-shadow: 0 0 0 3px var(--mint-pale);
      }

      .cms-admin-status {
        min-height: 18px;
        color: var(--text-secondary);
        font-size: 11px;
      }

      @media (max-width: 768px) {
        .cms-admin-head,
        .cms-admin-actions {
          flex-direction: column;
          align-items: stretch;
        }

        .cms-admin-grid-two {
          grid-template-columns: 1fr;
        }
      }
    `;

    document.head.appendChild(style);
  }

  function isAdminUser() {
    return localStorage.getItem('userRole') === 'admin';
  }

  function resetCurriculumCollections() {
    CATEGORIES.splice(0, CATEGORIES.length);
    Object.keys(CURRICULUM).forEach((key) => delete CURRICULUM[key]);
  }

  function normalizeCurriculumWeek(week) {
    const items = Array.isArray(week?.items) ? week.items : [];
    const normalizedItems = items.map((item) => ({
      id: String(item.id || item._id || `${Date.now()}-${Math.random()}`),
      title: item.title || 'Untitled PDF',
      type: 'pdf',
      pages: Number(item.pages) || 0,
      size: item.size || item.sizeLabel || '',
      done: Boolean(item.done),
      fileUrl: item.fileUrl || item.downloadUrl || '',
      fileName: item.fileName || ''
    }));

    const completedCount = normalizedItems.filter((item) => item.done).length;
    const progress = normalizedItems.length ? Math.round((completedCount / normalizedItems.length) * 100) : 0;

    return {
      week: Number(week?.week) || 1,
      title: week?.title || `Week ${Number(week?.week) || 1}`,
      progress: Number.isFinite(Number(week?.progress)) ? Number(week.progress) : progress,
      items: normalizedItems
    };
  }

  function mergeCurriculumPayload(payload) {
    resetCurriculumCollections();

    const safeCategories = Array.isArray(payload?.categories) ? payload.categories : [];
    safeCategories.forEach((category) => {
      CATEGORIES.push({
        id: category.id,
        code: category.code || 'GEN',
        dot: category.dot || '#00e5a0',
        color: category.color || '#00e5a0',
        name: category.name || { en: category.id, ar: category.id },
        desc: category.desc || { en: '', ar: '' },
        weeks: Number(category.weeks) || 0,
        materials: Number(category.materials) || 0
      });
    });

    if (payload?.curriculum && typeof payload.curriculum === 'object') {
      Object.entries(payload.curriculum).forEach(([categoryId, weeks]) => {
        CURRICULUM[categoryId] = Array.isArray(weeks) ? weeks.map(normalizeCurriculumWeek) : [];
      });
    }

    if (activeCatId !== 'all' && !CURRICULUM[activeCatId]) {
      activeCatId = 'all';
    }
  }

  function syncCurriculumModal(item) {
    const modalBody = document.getElementById('modalBody');
    const modalDlBtn = document.getElementById('modalDlBtn');

    if (item?.fileUrl) {
      modalDlBtn.href = item.fileUrl;
      modalDlBtn.setAttribute('target', '_blank');
      modalDlBtn.setAttribute('rel', 'noopener');
      modalBody.innerHTML = `
        <div class="modal-placeholder">
          <div class="icon">P</div>
          <p>PDF uploaded and ready.</p>
          <p style="font-size:11px">Use the download button below to open the current file in a new tab.</p>
        </div>
      `;
      return;
    }

    modalDlBtn.href = '#';
    modalDlBtn.removeAttribute('target');
    modalDlBtn.removeAttribute('rel');
    modalBody.innerHTML = `
      <div class="modal-placeholder">
        <div class="icon">P</div>
        <p data-i18n="curriculum.previewUnavailable">${shell.t('curriculum.previewUnavailable')}</p>
        <p style="font-size:11px" data-i18n-html="curriculum.previewHint">${shell.t('curriculum.previewHint')}</p>
      </div>
    `;
  }

  openModal = function patchedOpenModal(item) {
    curriculumBaseOpenModal(item);
    syncCurriculumModal(item);
  };

  updateModalNav = function patchedUpdateModalNav() {
    curriculumBaseUpdateModalNav();
    syncCurriculumModal(modalItems[modalIndex]);
  };

  function renderCurriculumAdminPanel() {
    if (!isAdminUser() || document.getElementById('curriculumCmsPanel')) return;

    ensureCmsStyles();

    const panel = document.createElement('section');
    panel.id = 'curriculumCmsPanel';
    panel.className = 'cms-admin-panel';
    panel.innerHTML = `
      <div class="cms-admin-head">
        <div class="cms-admin-copy">
          <span class="cms-admin-kicker">Admin CMS</span>
          <h2 class="cms-admin-title">Upload Curriculum PDF</h2>
          <p class="cms-admin-note">Add a PDF directly into the curriculum view without disturbing the existing page layout.</p>
        </div>
        <div class="cms-admin-actions">
          <button class="secondary-btn" id="curriculumCmsToggle" type="button">Add PDF</button>
        </div>
      </div>
      <form class="cms-admin-form" id="curriculumCmsForm" hidden>
        <div class="cms-admin-grid">
          <div class="cms-field">
            <label for="curriculumSubject">Subject Name</label>
            <input id="curriculumSubject" name="subject" type="text" required>
          </div>
          <div class="cms-field">
            <label for="curriculumSubjectCode">Subject Code</label>
            <input id="curriculumSubjectCode" name="subjectCode" type="text" placeholder="CS101" required>
          </div>
          <div class="cms-field">
            <label for="curriculumWeekNumber">Week Number</label>
            <input id="curriculumWeekNumber" name="weekNumber" type="number" min="1" value="1" required>
          </div>
          <div class="cms-field">
            <label for="curriculumPages">Pages</label>
            <input id="curriculumPages" name="pages" type="number" min="0" value="0">
          </div>
        </div>
        <div class="cms-admin-grid-two">
          <div class="cms-field">
            <label for="curriculumWeekTitle">Week Title</label>
            <input id="curriculumWeekTitle" name="weekTitle" type="text" placeholder="Week 1 Materials" required>
          </div>
          <div class="cms-field">
            <label for="curriculumSizeLabel">File Size Label</label>
            <input id="curriculumSizeLabel" name="sizeLabel" type="text" placeholder="2.3 MB">
          </div>
        </div>
        <div class="cms-field">
          <label for="curriculumSubjectDescription">Subject Description</label>
          <textarea id="curriculumSubjectDescription" name="subjectDescription" placeholder="Short summary for the subject hero card."></textarea>
        </div>
        <div class="cms-field">
          <label for="curriculumTitle">Material Title</label>
          <input id="curriculumTitle" name="title" type="text" required>
        </div>
        <div class="cms-field">
          <label for="curriculumPdfFile">PDF File</label>
          <input id="curriculumPdfFile" name="pdfFile" type="file" accept="application/pdf" required>
        </div>
        <div class="cms-admin-actions">
          <button class="primary-btn" id="curriculumCmsSubmit" type="submit">Upload PDF</button>
        </div>
        <div class="cms-admin-status" id="curriculumCmsStatus"></div>
      </form>
    `;

    const anchor = document.getElementById('catHero');
    document.querySelector('.materials-area').insertBefore(panel, anchor);

    const toggleButton = document.getElementById('curriculumCmsToggle');
    const form = document.getElementById('curriculumCmsForm');
    const status = document.getElementById('curriculumCmsStatus');
    const submitButton = document.getElementById('curriculumCmsSubmit');

    toggleButton.addEventListener('click', () => {
      form.hidden = !form.hidden;
      toggleButton.textContent = form.hidden ? 'Add PDF' : 'Hide Form';
    });

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const token = localStorage.getItem('token');
      if (!token) {
        status.textContent = 'Missing auth token.';
        return;
      }

      submitButton.disabled = true;
      status.textContent = 'Uploading PDF...';

      try {
        const response = await fetch('/api/courses/curriculum', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`
          },
          body: new FormData(form)
        });

        const data = await response.json().catch(() => ({}));

        if (!response.ok) {
          throw new Error(data.msg || 'Upload failed');
        }

        form.reset();
        form.hidden = true;
        toggleButton.textContent = 'Add PDF';
        status.textContent = 'PDF uploaded successfully.';
        await loadCurriculumCms();
      } catch (error) {
        status.textContent = error.message || 'Upload failed.';
      } finally {
        submitButton.disabled = false;
      }
    });
  }

  async function loadCurriculumCms() {
    try {
      const response = await fetch('/api/courses/curriculum');

      if (!response.ok) {
        throw new Error('Failed to load curriculum');
      }

      const payload = await response.json();
      mergeCurriculumPayload(payload);
      renderCatList();
      renderMaterials();
    } catch (error) {
      console.error('Curriculum CMS load failed:', error);
    }
  }

  renderCurriculumAdminPanel();
  renderCatList();
  renderMaterials();
  syncViewMode();
  loadCurriculumCms();
})();