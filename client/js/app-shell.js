(() => {
  const STORAGE_KEYS = {
    name: 'userName',
    role: 'userRole',
    avatar: 'userAvatar',
    language: 'userLanguage'
  };

  const MODAL_ID = 'profileModal';
  const SHARED_STYLE_ID = 'unilearn-shell-inline-styles';

  function ensureSharedStyles() {
    if (document.getElementById(SHARED_STYLE_ID)) return;
    if (document.querySelector('link[href*="app-shell.css"]')) return;

    const style = document.createElement('style');
    style.id = SHARED_STYLE_ID;
    style.textContent = `
      .mobile-nav-backdrop {
        position: fixed;
        inset: 0;
        z-index: 45;
        display: none;
        background: rgba(15, 15, 15, 0.5);
        backdrop-filter: blur(6px);
      }

      .mobile-nav-backdrop.open {
        display: block;
      }

      .profile-modal-overlay {
        position: fixed;
        inset: 0;
        z-index: 300;
        display: none;
        align-items: center;
        justify-content: center;
        padding: 24px;
        background: rgba(15, 15, 15, 0.55);
        backdrop-filter: blur(10px);
      }

      .profile-modal-overlay.open {
        display: flex;
      }

      .profile-modal {
        width: min(100%, 520px);
        overflow: hidden;
        border: 1px solid rgba(255, 255, 255, 0.12);
        border-radius: 22px;
        background: rgba(255, 255, 255, 0.96);
        color: #18130e;
        box-shadow: 0 24px 80px rgba(0, 0, 0, 0.32);
      }

      .profile-modal-header,
      .profile-modal-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 22px 24px;
      }

      .profile-modal-header {
        align-items: flex-start;
        border-bottom: 1px solid rgba(24, 19, 14, 0.08);
      }

      .profile-modal-title {
        font-size: 24px;
        font-weight: 700;
        line-height: 1.1;
      }

      .profile-modal-subtitle {
        margin-top: 6px;
        color: rgba(24, 19, 14, 0.6);
        font-size: 12px;
        line-height: 1.5;
      }

      .profile-close {
        width: 38px;
        height: 38px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: 1px solid rgba(24, 19, 14, 0.12);
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.82);
        color: inherit;
        cursor: pointer;
      }

      .profile-modal-body {
        padding: 24px;
      }

      .profile-identity {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 18px;
        align-items: center;
      }

      .profile-avatar-stack {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
      }

      .profile-avatar-preview {
        width: 84px;
        height: 84px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: #c4441a;
        color: #fff;
        font-size: 30px;
        font-weight: 700;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      }

      .profile-avatar-preview.is-image {
        color: transparent;
      }

      .profile-avatar-hint {
        color: rgba(24, 19, 14, 0.55);
        font-size: 10px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }

      .profile-form-grid,
      .profile-field {
        display: grid;
        gap: 12px;
      }

      .profile-label {
        color: rgba(24, 19, 14, 0.6);
        font-size: 10px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }

      .profile-input {
        width: 100%;
        padding: 12px 14px;
        border: 1px solid rgba(24, 19, 14, 0.14);
        border-radius: 14px;
        background: rgba(255, 255, 255, 0.92);
        color: inherit;
        outline: none;
      }

      .profile-input:focus {
        border-color: #c4441a;
        box-shadow: 0 0 0 3px rgba(196, 68, 26, 0.12);
      }

      .profile-inline-actions,
      .profile-modal-footer-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
      }

      .profile-status {
        min-height: 16px;
        color: #1a6b5c;
        font-size: 11px;
      }

      .profile-modal-footer {
        border-top: 1px solid rgba(24, 19, 14, 0.08);
      }

      .primary-btn,
      .secondary-btn,
      .danger-btn {
        min-height: 42px;
        padding: 10px 16px;
        border: 1px solid rgba(24, 19, 14, 0.12);
        border-radius: 999px;
        cursor: pointer;
        font-size: 12px;
        font-weight: 600;
        transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease, background 0.18s ease, color 0.18s ease;
      }

      .primary-btn:hover,
      .secondary-btn:hover,
      .danger-btn:hover {
        transform: translateY(-1px);
        box-shadow: 0 8px 22px rgba(0, 0, 0, 0.08);
      }

      .primary-btn {
        background: #c4441a;
        border-color: #c4441a;
        color: #fff;
      }

      .secondary-btn {
        background: rgba(255, 255, 255, 0.9);
        color: inherit;
      }

      .danger-btn {
        background: transparent;
        color: #c4441a;
      }

      .visually-hidden {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }

      @media (max-width: 768px) {
        .profile-modal-overlay {
          padding: 16px;
        }

        .profile-modal-header,
        .profile-modal-body,
        .profile-modal-footer {
          padding-left: 18px;
          padding-right: 18px;
        }

        .profile-identity {
          grid-template-columns: 1fr;
        }

        .profile-modal-footer {
          flex-direction: column;
          align-items: stretch;
        }
      }
    `;

    document.head.appendChild(style);
  }

  function resolveKey(source, key) {
    return key.split('.').reduce((value, segment) => {
      if (!value || typeof value !== 'object') return undefined;
      return value[segment];
    }, source);
  }

  function interpolate(template, params = {}) {
    return String(template).replace(/\{\{(.*?)\}\}/g, (_, token) => {
      const key = token.trim();
      return params[key] ?? '';
    });
  }

  function capitalize(value) {
    if (!value) return '';
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  function escapeHtml(value = '') {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function getProfile(defaultProfile = {}) {
    return {
      name: localStorage.getItem(STORAGE_KEYS.name) || defaultProfile.name || 'Student',
      role: localStorage.getItem(STORAGE_KEYS.role) || defaultProfile.role || 'student',
      avatar: localStorage.getItem(STORAGE_KEYS.avatar) || ''
    };
  }

  function saveProfile(profile) {
    if (profile.name) localStorage.setItem(STORAGE_KEYS.name, profile.name);
    if (profile.role) localStorage.setItem(STORAGE_KEYS.role, profile.role);

    if (profile.avatar) localStorage.setItem(STORAGE_KEYS.avatar, profile.avatar);
    else localStorage.removeItem(STORAGE_KEYS.avatar);
  }

  function setAvatarContent(element, profile) {
    if (!element) return;

    const initial = (profile.name || '?').trim().charAt(0).toUpperCase() || '?';
    if (profile.avatar) {
      element.textContent = initial;
      element.style.backgroundImage = `url("${profile.avatar}")`;
      element.classList.add('is-image');
    } else {
      element.textContent = initial;
      element.style.backgroundImage = '';
      element.classList.remove('is-image');
    }
  }

  function ensureProfileModal() {
    if (document.getElementById(MODAL_ID)) return;

    const wrapper = document.createElement('div');
    wrapper.id = MODAL_ID;
    wrapper.className = 'profile-modal-overlay';
    wrapper.setAttribute('aria-hidden', 'true');
    wrapper.innerHTML = `
      <div class="profile-modal" role="dialog" aria-modal="true" aria-labelledby="profileModalTitle">
        <div class="profile-modal-header">
          <div>
            <div class="profile-modal-title" id="profileModalTitle" data-i18n="profile.title">Profile settings</div>
            <p class="profile-modal-subtitle" data-i18n="profile.subtitle">Update how your account appears across the platform.</p>
          </div>
          <button class="profile-close" type="button" id="profileCloseBtn" aria-label="Close profile settings">
            <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div class="profile-modal-body">
          <div class="profile-identity">
            <div class="profile-avatar-stack">
              <div class="profile-avatar-preview" id="profileAvatarPreview">S</div>
              <span class="profile-avatar-hint" data-i18n="profile.avatarHint">Visible in the sidebar</span>
            </div>
            <div class="profile-form-grid">
              <label class="profile-field">
                <span class="profile-label" data-i18n="profile.displayNameLabel">Display name</span>
                <input class="profile-input" id="profileDisplayName" type="text" maxlength="40" placeholder="Enter your display name" data-i18n-placeholder="profile.displayNamePlaceholder">
              </label>
              <div class="profile-field">
                <span class="profile-label" data-i18n="profile.avatarLabel">Profile picture</span>
                <div class="profile-inline-actions">
                  <label class="secondary-btn" for="profileAvatarInput" data-i18n="profile.uploadAvatar">Upload avatar</label>
                  <input class="visually-hidden" id="profileAvatarInput" type="file" accept="image/*">
                  <button class="secondary-btn" type="button" id="profileAvatarReset" data-i18n="profile.resetAvatar">Use initials</button>
                </div>
              </div>
              <div class="profile-status" id="profileStatus"></div>
            </div>
          </div>
        </div>
        <div class="profile-modal-footer">
          <button class="danger-btn" type="button" id="profileLogoutBtn" data-i18n="profile.logout">Logout</button>
          <div class="profile-modal-footer-actions">
            <button class="secondary-btn" type="button" id="profileCancelBtn" data-i18n="profile.cancel">Cancel</button>
            <button class="primary-btn" type="button" id="profileSaveBtn" data-i18n="profile.save">Save changes</button>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(wrapper);
  }

  function init({
    translations = {},
    defaultProfile = {},
    defaultLanguage = 'ar', // تم تغيير اللغة الافتراضية هنا للعربية
    logoutPath = 'login.html',
    sidebarSelector = '.sidenav',
    closeSidebarOnLinkClick = true,
    onLanguageChange,
    onProfileChange
  } = {}) {
    ensureSharedStyles();
    ensureProfileModal();

    const state = {
      // تعديل Claude لضمان اللغة العربية كافتراضي
      language: localStorage.getItem(STORAGE_KEYS.language) || defaultLanguage || 'ar',
      stagedAvatar: null
    };

    const modal = document.getElementById(MODAL_ID);
    const modalCloseBtn = document.getElementById('profileCloseBtn');
    const modalCancelBtn = document.getElementById('profileCancelBtn');
    const modalSaveBtn = document.getElementById('profileSaveBtn');
    const modalLogoutBtn = document.getElementById('profileLogoutBtn');
    const modalNameInput = document.getElementById('profileDisplayName');
    const modalAvatarInput = document.getElementById('profileAvatarInput');
    const modalAvatarReset = document.getElementById('profileAvatarReset');
    const modalAvatarPreview = document.getElementById('profileAvatarPreview');
    const profileStatus = document.getElementById('profileStatus');
    const userChip = document.getElementById('userChip');
    const languageToggle = document.getElementById('languageToggle'); // الزرار القديم
    const sidebar = document.querySelector(sidebarSelector);
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    let mobileBackdrop = document.getElementById('mobileNavBackdrop');

    if (!mobileBackdrop) {
      mobileBackdrop = document.createElement('button');
      mobileBackdrop.id = 'mobileNavBackdrop';
      mobileBackdrop.className = 'mobile-nav-backdrop';
      mobileBackdrop.type = 'button';
      mobileBackdrop.setAttribute('aria-label', 'Close sidebar');
      document.body.appendChild(mobileBackdrop);
    }

    // --- GLOBAL SIDEBAR LANG TOGGLE (تعديل Claude) ---
    function syncSidebarLangToggle() {
      const btn = document.getElementById('sidebarLangToggle');
      if (!btn) return;
      btn.querySelectorAll('[data-lang-option]').forEach(el => {
        el.classList.toggle('active', el.dataset.langOption === state.language);
      });
    }

    function injectSidebarLangToggle() {
      if (document.getElementById('sidebarLangToggle')) return;
      const navLinks = document.querySelector('.nav-links');
      if (!navLinks) return;
      const wrapper = document.createElement('div');
      wrapper.style.cssText = 'padding: 8px 12px 0; margin-bottom: auto;'; // margin-bottom لدفع القائمة للأسفل
      wrapper.innerHTML = `
        <button id="sidebarLangToggle" type="button" class="lang-toggle" style="width:100%; border-radius:10px; justify-content:center; display:flex; gap: 8px; border: 1px solid rgba(255,255,255,0.1); background: rgba(0,0,0,0.2); color: inherit; padding: 12px; cursor: pointer; font-weight: bold;">
          <span class="lang-option ${state.language === 'en' ? 'active' : ''}" data-lang-option="en" style="opacity: ${state.language === 'en' ? '1' : '0.5'}">EN</span>
          <span class="lang-separator" style="opacity: 0.3">/</span>
          <span class="lang-option ${state.language === 'ar' ? 'active' : ''}" data-lang-option="ar" style="opacity: ${state.language === 'ar' ? '1' : '0.5'}">AR</span>
        </button>
      `;
      navLinks.appendChild(wrapper);
      
      const newBtn = document.getElementById('sidebarLangToggle');
      newBtn.addEventListener('click', () => {
        setLanguage(state.language === 'en' ? 'ar' : 'en');
        // تحديث شفافية الأزرار بناءً على الاختيار
        newBtn.querySelector('[data-lang-option="en"]').style.opacity = state.language === 'en' ? '1' : '0.5';
        newBtn.querySelector('[data-lang-option="ar"]').style.opacity = state.language === 'ar' ? '1' : '0.5';
      });
    }
    
    // تشغيل الدالة لإضافة الزرار في الشريط الجانبي
    injectSidebarLangToggle();
    // ------------------------------------------------

    function closeSidebar() {
      if (!sidebar) return;
      sidebar.classList.remove('mobile-open');
      mobileBackdrop.classList.remove('open');
      document.body.classList.remove('nav-open');
      if (mobileMenuBtn) mobileMenuBtn.setAttribute('aria-expanded', 'false');
    }

    function openSidebar() {
      if (!sidebar) return;
      sidebar.classList.add('mobile-open');
      mobileBackdrop.classList.add('open');
      document.body.classList.add('nav-open');
      if (mobileMenuBtn) mobileMenuBtn.setAttribute('aria-expanded', 'true');
    }

    function toggleSidebar() {
      if (!sidebar) return;
      if (sidebar.classList.contains('mobile-open')) closeSidebar();
      else openSidebar();
    }

    function t(key, params = {}) {
      const langTable = translations[state.language] || translations.en || {};
      const fallbackTable = translations.en || {};
      const raw = resolveKey(langTable, key) ?? resolveKey(fallbackTable, key) ?? key;
      return interpolate(raw, params);
    }

    function formatRole(role) {
      return t(`roles.${role}`) === `roles.${role}` ? capitalize(role) : t(`roles.${role}`);
    }

    function applyProfile(triggerCallback = false) {
      const profile = getProfile(defaultProfile);

      document.querySelectorAll('[data-user-name]').forEach((element) => {
        element.textContent = profile.name;
      });

      document.querySelectorAll('[data-user-role]').forEach((element) => {
        element.textContent = formatRole(profile.role);
      });

      document.querySelectorAll('[data-user-avatar]').forEach((element) => {
        setAvatarContent(element, profile);
      });

      setAvatarContent(modalAvatarPreview, profile);

      if (triggerCallback && typeof onProfileChange === 'function') {
        onProfileChange({ profile, language: state.language, t });
      }

      return profile;
    }

    function syncLanguageToggle() {
      if (!languageToggle) return;

      languageToggle.setAttribute('aria-label', t('common.languageToggleLabel'));
      languageToggle.setAttribute('aria-pressed', String(state.language === 'ar'));
      languageToggle.querySelectorAll('[data-lang-option]').forEach((element) => {
        element.classList.toggle('active', element.dataset.langOption === state.language);
      });
    }

    function applyStaticTranslations() {
      document.documentElement.lang = state.language;
      document.documentElement.dir = state.language === 'ar' ? 'rtl' : 'ltr';
      document.body.dataset.language = state.language;
      document.body.classList.toggle('is-rtl', state.language === 'ar');
      document.body.classList.toggle('is-ltr', state.language !== 'ar');

      document.querySelectorAll('[data-i18n]').forEach((element) => {
        element.textContent = t(element.dataset.i18n);
      });

      document.querySelectorAll('[data-i18n-html]').forEach((element) => {
        element.innerHTML = t(element.dataset.i18nHtml);
      });

      document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
        element.setAttribute('placeholder', t(element.dataset.i18nPlaceholder));
      });

      document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
        element.setAttribute('aria-label', t(element.dataset.i18nAria));
      });

      document.querySelectorAll('[data-i18n-title]').forEach((element) => {
        element.setAttribute('title', t(element.dataset.i18nTitle));
      });

      const titleKey = document.body.dataset.titleKey;
      if (titleKey) document.title = t(titleKey);

      syncLanguageToggle();
      applyProfile(false);

      if (typeof onLanguageChange === 'function') {
        onLanguageChange({ language: state.language, t, profile: getProfile(defaultProfile) });
      }
    }

    function openProfileModal() {
      state.stagedAvatar = getProfile(defaultProfile).avatar || null;
      modalNameInput.value = getProfile(defaultProfile).name;
      setAvatarContent(modalAvatarPreview, {
        ...getProfile(defaultProfile),
        avatar: state.stagedAvatar || ''
      });
      profileStatus.textContent = '';
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      modalNameInput.focus();
    }

    function closeProfileModal() {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      profileStatus.textContent = '';
      modalAvatarInput.value = '';
      state.stagedAvatar = null;
    }

    function saveAndApplyProfile() {
      const current = getProfile(defaultProfile);
      const name = modalNameInput.value.trim() || current.name || defaultProfile.name || 'Student';
      const avatar = state.stagedAvatar !== null ? state.stagedAvatar : current.avatar;

      saveProfile({
        name,
        role: current.role,
        avatar
      });

      profileStatus.textContent = t('profile.saved');
      const profile = applyProfile(true);
      window.dispatchEvent(new CustomEvent('unilearn:profile-updated', { detail: profile }));
      setTimeout(closeProfileModal, 180);
    }

    // --- تعديل Claude لتحديث الشريط الجانبي عند تغيير اللغة ---
    function setLanguage(nextLanguage) {
      state.language = nextLanguage;
      localStorage.setItem(STORAGE_KEYS.language, nextLanguage);
      applyStaticTranslations();
      syncSidebarLangToggle(); // السطر المضاف هنا
      window.dispatchEvent(new CustomEvent('unilearn:language-changed', {
        detail: { language: nextLanguage }
      }));
    }

    if (userChip) {
      userChip.setAttribute('tabindex', '0');
      userChip.setAttribute('role', 'button');
      userChip.addEventListener('click', openProfileModal);
      userChip.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          openProfileModal();
        }
      });
    }

    // زرار اللغة القديم لو لسه موجود في بعض الصفحات هيفضل شغال
    if (languageToggle) {
      languageToggle.addEventListener('click', () => {
        setLanguage(state.language === 'en' ? 'ar' : 'en');
      });
    }

    if (mobileMenuBtn && sidebar) {
      mobileMenuBtn.addEventListener('click', toggleSidebar);
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
    }

    if (sidebar && closeSidebarOnLinkClick) {
      sidebar.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
          if (window.innerWidth <= 768) closeSidebar();
        });
      });
    }

    mobileBackdrop.addEventListener('click', closeSidebar);

    modalCloseBtn.addEventListener('click', closeProfileModal);
    modalCancelBtn.addEventListener('click', closeProfileModal);
    modalSaveBtn.addEventListener('click', saveAndApplyProfile);
    modalLogoutBtn.addEventListener('click', () => {
      localStorage.clear();
      window.location.href = logoutPath;
    });

    modal.addEventListener('click', (event) => {
      if (event.target === modal) closeProfileModal();
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && sidebar?.classList.contains('mobile-open')) {
        closeSidebar();
      }

      if (event.key === 'Escape' && modal.classList.contains('open')) {
        closeProfileModal();
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) closeSidebar();
    });

    modalAvatarReset.addEventListener('click', () => {
      state.stagedAvatar = '';
      const profile = getProfile(defaultProfile);
      setAvatarContent(modalAvatarPreview, { ...profile, avatar: '' });
      profileStatus.textContent = t('profile.avatarReset');
    });

    modalAvatarInput.addEventListener('change', () => {
      const [file] = modalAvatarInput.files || [];
      if (!file) return;

      if (!file.type.startsWith('image/')) {
        profileStatus.textContent = t('profile.avatarInvalid');
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        state.stagedAvatar = reader.result;
        const profile = getProfile(defaultProfile);
        setAvatarContent(modalAvatarPreview, {
          ...profile,
          avatar: state.stagedAvatar
        });
        profileStatus.textContent = t('profile.avatarReady');
      };
      reader.readAsDataURL(file);
    });

    applyStaticTranslations();
    applyProfile(true);

    return {
      t,
      get language() {
        return state.language;
      },
      setLanguage,
      toggleLanguage() {
        setLanguage(state.language === 'en' ? 'ar' : 'en');
      },
      getProfile() {
        return getProfile(defaultProfile);
      },
      applyProfile() {
        return applyProfile(false);
      },
      closeSidebar,
      toggleSidebar,
      openProfileModal,
      escapeHtml
    };
  }

  window.UniLearnShell = {
    init,
    getProfile,
    saveProfile,
    escapeHtml,
    setAvatarContent
  };
  // كود رفع الصورة الشخصية (يعمل مع العناصر الديناميكية)
document.addEventListener('change', async (event) => {
    // نتأكد إن الحدث حصل على زرار الصورة بتاعنا بالظبط
    if (event.target && event.target.id === 'profileAvatarInput') {
        const file = event.target.files[0];
        if (!file) return;

// تجهيز الصورة للإرسال
const formData = new FormData();
formData.append('profileImage', file);

// هنجيب بيانات المستخدم والتوكن من المتصفح عشان نثبت هويتنا للسيرفر
const token = localStorage.getItem('token'); 
const user = JSON.parse(localStorage.getItem('user') || '{}');

// بنضيف الـ ID بتاع المستخدم مع الصورة
if (user._id) {
    formData.append('userId', user._id);
}

try {
    // إرسال الصورة + بيانات المستخدم للسيرفر
    const response = await fetch('/api/auth/update-avatar', {
        method: 'POST',
        headers: {
            // السطر ده بيبعت التوكن لو السيرفر بتاعك محمي بـ JWT
            'Authorization': token ? `Bearer ${token}` : ''
        },
        body: formData
    });

            const data = await response.json();

            if (data.success) {
                // تحديث الصورة في الشاشة فوراً
                const avatars = document.querySelectorAll('.user-avatar, .profile-avatar-preview');
                avatars.forEach(avatar => {
                    avatar.style.backgroundImage = `url('${data.newImageUrl}')`;
                    avatar.classList.add('is-image');
                });
                // تحديث الصورة في ذاكرة المتصفح
        let currentUser = JSON.parse(localStorage.getItem('user'));
        if (currentUser) {
            currentUser.avatar = data.newImageUrl;
            localStorage.setItem('user', JSON.stringify(currentUser));
        }
                alert('عاش! تم تحديث الصورة بنجاح 🚀');
            } else {
                alert('حصلت مشكلة: ' + data.message);
            }
        } catch (error) {
            console.error('خطأ أثناء رفع الصورة:', error);
            alert('حدث خطأ في الاتصال بالسيرفر.');
        }
    }
});
})();