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
    logoutPath: 'login.html'
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

  function renderCatList() {
    const catList = document.getElementById('catList');
    catList.innerHTML = '';

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

  renderCatList();
  renderMaterials();
  syncViewMode();
})();
