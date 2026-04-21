/**
 * live-room.js
 * UniLearn — Live Room Logic
 *
 * Key design decisions
 * ────────────────────
 * • Host detection happens server-side (room-users event).
 *   A brief grace period on reconnect prevents the race condition where
 *   the server still has the old socket session and incorrectly reports
 *   a second instructor, stripping the rejoining user of host status.
 * • applyRoleUI() is the single source of truth for which buttons are
 *   visible. It is called immediately after host-detection and after
 *   every state mutation that affects the UI.
 * • Only the Host (isHost === true) receives speak/broadcast requests
 *   in the UI. Secondary instructors' speak-request socket event is
 *   filtered on the client so stale broadcasts never appear.
 * • Dead layout-toggle code (viewDual / viewSingle / viewScreen buttons)
 *   has been removed. Layout is managed automatically.
 * • All CSS :disabled states are applied via the `disabled` attribute
 *   (not just opacity hacks) so keyboard navigation respects them.
 */

window.AGORA_APP_ID = "eff8bc824ac7413ea7d0c4ed684809e9";

(() => {
  /* ═══════════════════════════════════════════════════════════════════════
     TRANSLATIONS
  ═══════════════════════════════════════════════════════════════════════ */
  const TRANSLATIONS = {
    en: {
      common: {
        openMenu: 'Open menu',
        languageToggleLabel: 'Switch language'
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
      liveRoom: {
        pageTitle: 'Live Room - UniLearn',
        liveBadge: 'Live',
        watching: 'watching',
        hostLabel: 'Host',
        cohostLabel: 'Co-host',
        chatTab: 'Chat',
        peopleTab: 'People',
        handsTab: 'Hands',
        requestsTab: 'Requests',
        messagePlaceholder: 'Send a message...',
        noRaisedHands: 'No raised hands',
        noSpeakRequests: 'No speak requests',
        requestToSpeak: 'Request to Speak',
        reqBroadcast: 'Request Broadcast',
        requestSent: 'Request sent. Waiting for approval...',
        requestApproved: 'Your request was approved. You can speak now.',
        requestDenied: 'Your request was denied.',
        approveBtn: 'Approve',
        denyBtn: 'Deny',
        forceMute: 'Mute',
        speakRequestToast: '{{name}} requests to speak',
        broadcastRequestToast: '{{name}} requests to broadcast',
        studentMicLocked: 'Mic is locked. Request to speak first.',
        singleSpeakerHint: 'Tap the mini window to switch the focused speaker.',
        screenShareLabel: 'Screen Share',
        mic: 'Mic',
        camera: 'Camera',
        share: 'Share',
        hand: 'Hand',
        leave: 'Leave',
        waiting: 'Waiting...',
        youLabel: 'You',
        sessionStarted: 'Session started',
        connectionReady: 'Connected to the live room.',
        joinedToast: '{{name}} joined',
        joinedMessage: '{{name}} joined the session',
        leftMessage: '{{name}} left the session',
        handRaisedToast: '{{name}} raised their hand',
        lowerHand: 'Lower',
        leaveConfirm: 'Leave this session?',
        defaultSession: 'Live Session'
      }
    },

    ar: {
      common: {
        openMenu: 'فتح القائمة',
        languageToggleLabel: 'تبديل اللغة'
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
      liveRoom: {
        pageTitle: 'الغرفة المباشرة - يوني ليرن',
        liveBadge: 'مباشر',
        watching: 'مشاهد',
        hostLabel: 'المضيف',
        cohostLabel: 'المساعد',
        chatTab: 'الدردشة',
        peopleTab: 'الحضور',
        handsTab: 'الأيدي',
        requestsTab: 'الطلبات',
        messagePlaceholder: 'أرسل رسالة...',
        noRaisedHands: 'لا توجد أيادٍ مرفوعة',
        noSpeakRequests: 'لا توجد طلبات كلام',
        requestToSpeak: 'طلب الكلام',
        reqBroadcast: 'طلب البث',
        requestSent: 'تم إرسال الطلب. بانتظار الموافقة...',
        requestApproved: 'تمت الموافقة على طلبك. يمكنك الكلام الآن.',
        requestDenied: 'تم رفض طلبك.',
        approveBtn: 'موافقة',
        denyBtn: 'رفض',
        forceMute: 'كتم',
        speakRequestToast: '{{name}} يطلب الكلام',
        broadcastRequestToast: '{{name}} يطلب البث',
        studentMicLocked: 'الميكروفون مقفل. اطلب الكلام أولاً.',
        singleSpeakerHint: 'اضغط على النافذة الصغيرة لتبديل المتحدث الرئيسي.',
        screenShareLabel: 'مشاركة الشاشة',
        mic: 'الميكروفون',
        camera: 'الكاميرا',
        share: 'مشاركة',
        hand: 'رفع اليد',
        leave: 'مغادرة',
        waiting: 'بانتظار...',
        youLabel: 'أنت',
        sessionStarted: 'بدأت الجلسة',
        connectionReady: 'تم الاتصال بالغرفة المباشرة.',
        joinedToast: 'انضم {{name}}',
        joinedMessage: 'انضم {{name}} إلى الجلسة',
        leftMessage: 'غادر {{name}} الجلسة',
        handRaisedToast: 'رفع {{name}} يده',
        lowerHand: 'خفض',
        leaveConfirm: 'هل تريد مغادرة هذه الجلسة؟',
        defaultSession: 'جلسة مباشرة'
      }
    }
  };

  /* ═══════════════════════════════════════════════════════════════════════
     SESSION TITLES  (keyed by channel name)
  ═══════════════════════════════════════════════════════════════════════ */
  const SESSION_TITLES = {
    'cs-binary-trees': {
      en: 'Advanced Algorithms – Binary Trees Deep Dive',
      ar: 'الخوارزميات المتقدمة – تعمق في الأشجار الثنائية'
    },
    'math-linear-algebra': {
      en: 'Linear Algebra – Eigenvalues Workshop',
      ar: 'الجبر الخطي – ورشة القيم الذاتية'
    },
    'physics-quantum': {
      en: 'Quantum Mechanics – Wave Functions Seminar',
      ar: 'ميكانيكا الكم – ندوة الدوال الموجية'
    },
    'db-indexing': {
      en: 'Database Systems – Indexing Strategies Review',
      ar: 'أنظمة قواعد البيانات – مراجعة استراتيجيات الفهرسة'
    }
  };

  /* ═══════════════════════════════════════════════════════════════════════
     INIT — read URL / localStorage
  ═══════════════════════════════════════════════════════════════════════ */
  const channel      = new URLSearchParams(window.location.search).get('channel') || 'demo-room';
  const userName     = localStorage.getItem('userName')  || 'Student';
  const userRole     = localStorage.getItem('userRole')  || 'student';
  const isInstructor = userRole === 'instructor' || userRole === 'admin';

  /** Stable local participant ID used for hand / request tracking */
  const LOCAL_ID = 'local-self';

  /* ═══════════════════════════════════════════════════════════════════════
     STATE
  ═══════════════════════════════════════════════════════════════════════ */
  const state = {
    /* participants */
    participants:     new Map(),   // id → user object (remote participants only)
    raisedHands:      [],          // [{ id, user }]
    speakRequests:    [],          // [{ id, user }]  — host-only inbox
    approvedSpeakers: new Set(),   // socket ids of approved students

    /* connection handles */
    socket:          null,
    socketConnected: false,
    agoraClient:     null,

    /* local media tracks */
    localAudioTrack: null,
    localVideoTrack: null,
    screenTrack:     null,

    /* local media state */
    micOn:        false,  // default OFF
    camOn:        false,  // default OFF
    screenSharing:false,

    /* student request flow */
    micApproved:  false,
    micRequested: false,

    /* hand */
    handRaised: false,

    /* remote video */
    remoteVideoActive: false,

    /* layout */
    viewMode:    'single-speaker',
    focusedSlot: 'local',

    /* timer */
    timerSeconds:  0,
    timerInterval: null,

    /* ── Host / broadcast roles ── */
    isHost:        false,  // true = first instructor who joined
    isBroadcasting:false   // true = this instructor's cam/mic is live
  };

  /* ═══════════════════════════════════════════════════════════════════════
     APP-SHELL  (i18n + profile)
  ═══════════════════════════════════════════════════════════════════════ */
  const shell = window.UniLearnShell.init({
    translations:         TRANSLATIONS,
    defaultProfile:       { name: userName, role: userRole },
    logoutPath:           'login.html',
    sidebarSelector:      '#sidebar',
    closeSidebarOnLinkClick: false
  });

  /* ═══════════════════════════════════════════════════════════════════════
     DOM ELEMENT CACHE
  ═══════════════════════════════════════════════════════════════════════ */
  const el = {
    videoStage:        document.getElementById('videoStage'),
    videoGrid:         document.getElementById('videoGrid'),
    screenShareLabel:  document.getElementById('screenShareLabel'),
    slotLocal:         document.getElementById('slot-local'),
    slotRemote:        document.getElementById('slot-remote'),
    localAvatar:       document.getElementById('localAvatar'),
    remoteAvatar:      document.getElementById('remoteAvatar'),
    localName:         document.getElementById('localName'),
    remoteName:        document.getElementById('remoteName'),
    localMicIcon:      document.getElementById('localMicIcon'),
    remoteMicIcon:     document.getElementById('remoteMicIcon'),
    chatMessages:      document.getElementById('chatMessages'),
    chatInput:         document.getElementById('chatInput'),
    participantsList:  document.getElementById('participantsList'),
    handsPanel:        document.getElementById('handsPanel'),
    handsEmpty:        document.getElementById('handsEmpty'),
    handsCount:        document.getElementById('handsCount'),
    requestsPanel:     document.getElementById('requestsPanel'),
    requestsEmpty:     document.getElementById('requestsEmpty'),
    requestsCount:     document.getElementById('requestsCount'),
    requestsTabBtn:    document.getElementById('requestsTabBtn'),
    notifStack:        document.getElementById('notifStack'),
    viewerCount:       document.getElementById('viewerCount'),
    timer:             document.getElementById('sessionTimer'),
    sessionTitle:      document.getElementById('sessionTitle'),
    singleSpeakerHint: document.getElementById('singleSpeakerHint'),
    /* controls */
    toggleMic:         document.getElementById('toggleMic'),
    micBtnLabel:       document.getElementById('micBtnLabel'),
    toggleCam:         document.getElementById('toggleCam'),
    toggleScreen:      document.getElementById('toggleScreen'),
    reqBroadcastBtn:   document.getElementById('reqBroadcastBtn'),
    reqBroadcastLabel: document.getElementById('reqBroadcastLabel'),
    raiseHandBtn:      document.getElementById('raiseHandBtn'),
    endBtn:            document.getElementById('endBtn'),
    refreshBtn:        document.getElementById('refreshBtn'),
    mobileMenuBtn:     document.getElementById('mobileMenuBtn'),
    sidebar:           document.getElementById('sidebar')
  };
  // كود فتح وقفل القائمة الجانبية (الشات) على الموبايل
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const sidebar = document.getElementById('sidebar');
  
  if (mobileMenuBtn && sidebar) {
    mobileMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      sidebar.classList.toggle('mobile-open'); // 👈 غيرنا الكلمة هنا
    });

    // يقفل القائمة لو دوست في أي مكان فاضي
    document.addEventListener('click', (e) => {
      if (window.innerWidth <= 768 && sidebar.classList.contains('mobile-open')) {
        if (!sidebar.contains(e.target) && e.target !== mobileMenuBtn) {
          sidebar.classList.remove('mobile-open');
        }
      }
    });
  }

  /* ═══════════════════════════════════════════════════════════════════════
     HELPERS
  ═══════════════════════════════════════════════════════════════════════ */

  /** Safe HTML escaping — delegates to the shell utility if available. */
  function esc(str) {
    if (window.UniLearnShell && typeof window.UniLearnShell.escapeHtml === 'function') {
      return window.UniLearnShell.escapeHtml(String(str));
    }
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  /** Get session title for the current channel + language. */
  function getSessionTitle() {
    const titles = SESSION_TITLES[channel];
    if (!titles) return shell.t('liveRoom.defaultSession');
    return titles[shell.language] || titles.en;
  }

  /**
   * Build the combined participant list (local + remotes) with deduplication
   * by name+role. This prevents ghost entries when the server briefly keeps
   * both old and new socket sessions during a refresh/reconnect.
   */
  function participantList() {
    const combined = [
      { id: LOCAL_ID, name: userName, role: userRole, isLocal: true },
      ...Array.from(state.participants.values())
    ];
    const seen = new Set();
    return combined.filter(({ name, role }) => {
      const key = `${name}|${role}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }

  /* ═══════════════════════════════════════════════════════════════════════
     ROLE UI  — single source of truth for button visibility
  ═══════════════════════════════════════════════════════════════════════ */
  function applyRoleUI() {
    const {
      toggleMic, micBtnLabel,
      toggleCam, toggleScreen,
      reqBroadcastBtn, reqBroadcastLabel,
      raiseHandBtn, requestsTabBtn
    } = el;

    if (isInstructor) {
      if (state.isHost || state.isBroadcasting) {
        /* ── Host / approved broadcaster: full controls ── */
        show(toggleCam);
        show(toggleScreen);
        hide(raiseHandBtn);
        hide(reqBroadcastBtn);
        reqBroadcastBtn.disabled = false;

        if (micBtnLabel) micBtnLabel.textContent = shell.t('liveRoom.mic');

      } else {
        /* ── Secondary instructor awaiting broadcast approval ── */
        hide(toggleCam);
        hide(toggleScreen);
        hide(raiseHandBtn);
        show(reqBroadcastBtn);

        if (state.micRequested) {
          reqBroadcastBtn.disabled = true;
          reqBroadcastBtn.classList.add('pending');
          if (reqBroadcastLabel) reqBroadcastLabel.textContent = shell.t('liveRoom.requestSent').split('.')[0] + '…';
        } else {
          reqBroadcastBtn.disabled = false;
          reqBroadcastBtn.classList.remove('pending');
          if (reqBroadcastLabel) reqBroadcastLabel.textContent = shell.t('liveRoom.reqBroadcast');
        }

        if (micBtnLabel) micBtnLabel.textContent = shell.t('liveRoom.mic');
      }

    } else {
      /* ── Student ── */
      hide(toggleCam);
      hide(toggleScreen);
      hide(reqBroadcastBtn);
      show(raiseHandBtn);

      if (micBtnLabel) {
        micBtnLabel.textContent = state.micRequested
          ? shell.t('liveRoom.requestSent').split('.')[0] + '…'
          : shell.t('liveRoom.requestToSpeak');
      }
    }

    /* Requests tab: visible only to the Host */
    if (requestsTabBtn) {
      requestsTabBtn.style.display = state.isHost ? 'inline-flex' : 'none';
    }
  }

  function show(el) { if (el) el.style.display = 'inline-flex'; }
  function hide(el) { if (el) el.style.display = 'none'; }

  /* ═══════════════════════════════════════════════════════════════════════
     NOTIFICATIONS
  ═══════════════════════════════════════════════════════════════════════ */
  function pushNotification(text, className = '') {
    const item = document.createElement('div');
    item.className = `notif ${className}`.trim();
    item.textContent = text;
    el.notifStack.appendChild(item);
    setTimeout(() => {
      item.classList.add('fade-out');
      setTimeout(() => item.remove(), 300);
    }, 3500);
  }

  /* ═══════════════════════════════════════════════════════════════════════
     CHAT MESSAGES
  ═══════════════════════════════════════════════════════════════════════ */
  function appendSystemMessage(text) {
    const row = document.createElement('div');
    row.className = 'msg-system';
    row.textContent = text;
    el.chatMessages.appendChild(row);
    el.chatMessages.scrollTop = el.chatMessages.scrollHeight;
  }

  function appendMessage(user, message, timestamp) {
    const row = document.createElement('div');
    row.className = 'chat-msg';
    row.innerHTML = `
      <div class="msg-meta">
        <span class="msg-author ${user.role !== 'student' ? 'instructor' : ''}">${esc(user.name)}</span>
        <span class="msg-time">${esc(timestamp || '')}</span>
      </div>
      <div class="msg-text">${esc(message)}</div>
    `;
    el.chatMessages.appendChild(row);
    el.chatMessages.scrollTop = el.chatMessages.scrollHeight;
  }

  /* ═══════════════════════════════════════════════════════════════════════
     PARTICIPANTS PANEL
  ═══════════════════════════════════════════════════════════════════════ */
  function renderParticipants() {
    el.participantsList.innerHTML = participantList().map((p) => {
      const roleLabel     = shell.t(`roles.${p.role}`) || p.role;
      const hasHand       = state.raisedHands.some((h) => h.user.name === p.name);
      const isApproved    = state.approvedSpeakers.has(p.id);
      const showMuteBtn   = isInstructor && !p.isLocal && isApproved;

      return `
        <div class="participant-item" data-participant-id="${esc(p.id)}">
          <div class="p-avatar ${p.role !== 'student' ? 'instructor-avatar' : ''}">
            ${esc(p.name.charAt(0).toUpperCase())}
          </div>
          <div class="p-info">
            <div class="p-name">${esc(p.name)}</div>
            <div class="p-role">${esc(roleLabel)}</div>
          </div>
          <div class="p-status">
            ${hasHand ? '<span class="hand-mark">✋</span>' : ''}
            ${showMuteBtn
              ? `<button class="mute-participant-btn" type="button"
                   data-mute-id="${esc(p.id)}"
                   data-mute-name="${esc(p.name)}">
                   ${shell.t('liveRoom.forceMute')}
                 </button>`
              : ''}
          </div>
        </div>`;
    }).join('');

    el.participantsList.querySelectorAll('[data-mute-id]').forEach((btn) => {
      btn.addEventListener('click', () => {
        forceMuteParticipant(btn.dataset.muteId, { name: btn.dataset.muteName });
      });
    });
  }

  function forceMuteParticipant(id, user) {
    state.approvedSpeakers.delete(id);
    if (state.socketConnected) {
      state.socket.emit('instructor-signal', {
        roomId: channel,
        type: 'force-mute',
        targetId: id,
        data: { user }
      });
    }
    pushNotification(`${esc(user.name)}: muted`);
  }

  /* ═══════════════════════════════════════════════════════════════════════
     RAISED-HANDS PANEL
  ═══════════════════════════════════════════════════════════════════════ */
  function addOrUpdateRaisedHand(id, user) {
    const idx = state.raisedHands.findIndex(
      (h) => h.id === id || h.user.name === user.name
    );
    const entry = { id, user };
    if (idx >= 0) state.raisedHands[idx] = entry;
    else state.raisedHands.push(entry);
  }

  function removeRaisedHand(id) {
    state.raisedHands = state.raisedHands.filter((h) => h.id !== id);
  }

  function renderHands() {
    const count = state.raisedHands.length;
    el.handsCount.textContent = String(count);
    el.handsCount.classList.toggle('visible', count > 0);
    el.handsEmpty.style.display = count ? 'none' : 'flex';

    // Remove old items before re-rendering
    el.handsPanel.querySelectorAll('.hand-queue-item').forEach((n) => n.remove());

    state.raisedHands.forEach(({ id, user }) => {
      const row = document.createElement('div');
      row.className = 'hand-queue-item';
      row.innerHTML = `
        <span class="hand-queue-name">${esc(user.name)}</span>
        ${isInstructor
          ? `<button class="lower-btn" type="button" data-hand-id="${esc(id)}">
               ${shell.t('liveRoom.lowerHand')}
             </button>`
          : ''}
      `;

      if (isInstructor) {
        row.querySelector('[data-hand-id]')?.addEventListener('click', () => {
          removeRaisedHand(id);
          if (id === LOCAL_ID) {
            state.handRaised = false;
            el.raiseHandBtn.classList.remove('raised');
          }
          if (state.socketConnected) {
            state.socket.emit('instructor-signal', {
              roomId: channel,
              type: 'lower-hand',
              targetId: id,
              data: {}
            });
          }
          renderHands();
          renderParticipants();
        });
      }

      el.handsPanel.appendChild(row);
    });
  }

  /* ═══════════════════════════════════════════════════════════════════════
     SPEAK / BROADCAST REQUESTS PANEL  (Host only)
  ═══════════════════════════════════════════════════════════════════════ */
  function addSpeakRequest(id, user) {
    if (!state.isHost) return; // only the Host holds the inbox
    if (state.speakRequests.find((r) => r.id === id)) return; // deduplicate
    state.speakRequests.push({ id, user });
    renderSpeakRequests();

    const toastKey = user.reqType === 'broadcast'
      ? 'liveRoom.broadcastRequestToast'
      : 'liveRoom.speakRequestToast';
    pushNotification(shell.t(toastKey, { name: user.name }), 'notif-hand');
  }

  function approveSpeakRequest(id, user) {
    state.speakRequests = state.speakRequests.filter((r) => r.id !== id);
    state.approvedSpeakers.add(id);

    const signalType = user.reqType === 'broadcast' ? 'broadcast-approved' : 'speak-approved';

    if (state.socketConnected) {
      state.socket.emit('instructor-signal', {
        roomId: channel,
        type: signalType,
        targetId: id,
        data: { user }
      });
    }

    renderSpeakRequests();
    pushNotification(`${esc(user.name)}: approved`, 'notif-user');
  }

  function denySpeakRequest(id, user) {
    state.speakRequests = state.speakRequests.filter((r) => r.id !== id);

    if (state.socketConnected) {
      state.socket.emit('instructor-signal', {
        roomId: channel,
        type: 'speak-denied',
        targetId: id,
        data: { user }
      });
    }

    renderSpeakRequests();
  }

  function renderSpeakRequests() {
    if (!el.requestsCount || !el.requestsEmpty || !el.requestsPanel) return;

    const count = state.speakRequests.length;
    el.requestsCount.textContent = String(count);
    el.requestsCount.classList.toggle('visible', count > 0);
    el.requestsEmpty.style.display = count ? 'none' : 'flex';

    el.requestsPanel.querySelectorAll('.request-item').forEach((n) => n.remove());

    /* Only the Host renders action buttons */
    if (!state.isHost) return;

    state.speakRequests.forEach(({ id, user }) => {
      const row = document.createElement('div');
      row.className = 'request-item';
      row.dataset.requestId = id;
      row.innerHTML = `
        <span class="request-name">${esc(user.name)}</span>
        <div class="request-actions">
          <button class="approve-btn" type="button" data-approve-id="${esc(id)}">
            ${shell.t('liveRoom.approveBtn')}
          </button>
          <button class="deny-btn" type="button" data-deny-id="${esc(id)}">
            ${shell.t('liveRoom.denyBtn')}
          </button>
        </div>
      `;
      row.querySelector('[data-approve-id]').addEventListener('click', () => approveSpeakRequest(id, user));
      row.querySelector('[data-deny-id]').addEventListener('click', () => denySpeakRequest(id, user));
      el.requestsPanel.appendChild(row);
    });
  }

  /* ═══════════════════════════════════════════════════════════════════════
     VIEWER COUNT
  ═══════════════════════════════════════════════════════════════════════ */
  function updateViewerCount() {
    el.viewerCount.textContent = String(participantList().length);
  }

  /* ═══════════════════════════════════════════════════════════════════════
     REMOTE SLOT SYNC
  ═══════════════════════════════════════════════════════════════════════ */
  function syncRemoteSlot() {
    const remote = participantList().find((p) => !p.isLocal);
    el.remoteName.textContent  = remote ? remote.name : shell.t('liveRoom.waiting');
    el.remoteAvatar.textContent = remote ? remote.name.charAt(0).toUpperCase() : '?';

    /* If no remote participant, force focus back to local */
    if (!remote && state.viewMode === 'single-speaker') {
      state.focusedSlot = 'local';
    }
    applyViewMode();
  }

  /* ═══════════════════════════════════════════════════════════════════════
     LOCAL MEDIA STATE
  ═══════════════════════════════════════════════════════════════════════ */
  function updateLocalMediaState() {
    const showAvatar = !state.camOn || !state.localVideoTrack;
    el.localAvatar.style.display = showAvatar ? 'flex' : 'none';
    el.localMicIcon.classList.toggle('muted', !state.micOn);
    el.toggleMic.classList.toggle('off', !state.micOn);
    el.toggleCam.classList.toggle('off', !state.camOn);
  }

  function updateRemoteMediaState() {
    el.remoteAvatar.style.display = state.remoteVideoActive ? 'none' : 'flex';
  }

  /* ═══════════════════════════════════════════════════════════════════════
     VIEW MODE  — automatic, driven by state changes
  ═══════════════════════════════════════════════════════════════════════ */
  function applyViewMode() {
    const hasRemote = participantList().some((p) => !p.isLocal);

    el.videoGrid.classList.remove('dual', 'single-speaker', 'screenshare');
    el.slotLocal.classList.remove('focused', 'pip', 'hidden');
    el.slotRemote.classList.remove('focused', 'pip', 'hidden');

    if (state.viewMode === 'single-speaker') {
      el.videoGrid.classList.add('single-speaker');
      el.videoStage.classList.add('single-mode');

      const focusRemote = state.focusedSlot === 'remote' && hasRemote;
      const main  = focusRemote ? el.slotRemote : el.slotLocal;
      const pip   = focusRemote ? el.slotLocal  : el.slotRemote;

      main.classList.add('focused');
      pip.classList.add(hasRemote ? 'pip' : 'hidden');

    } else if (state.viewMode === 'screenshare') {
      el.videoStage.classList.remove('single-mode');
      el.videoGrid.classList.add('screenshare');
      el.slotLocal.classList.add('focused');
      el.slotRemote.classList.add(hasRemote ? 'focused' : 'hidden');

    } else {
      /* dual */
      el.videoStage.classList.remove('single-mode');
      el.videoGrid.classList.add('dual');
      el.slotLocal.classList.add('focused');
      el.slotRemote.classList.add(hasRemote ? 'focused' : 'hidden');
    }
  }

  function setViewMode(mode) {
    state.viewMode = mode;
    applyViewMode();
  }

  /* ═══════════════════════════════════════════════════════════════════════
     SESSION COPY  (title, labels — re-run on language change)
  ═══════════════════════════════════════════════════════════════════════ */
  function updateSessionCopy() {
    el.sessionTitle.textContent = getSessionTitle();
    el.localName.textContent    = userName || shell.t('liveRoom.youLabel');
    applyRoleUI();
    syncRemoteSlot();
  }

  /* ═══════════════════════════════════════════════════════════════════════
     TIMER
  ═══════════════════════════════════════════════════════════════════════ */
  function startTimer() {
    if (state.timerInterval) return;
    state.timerInterval = setInterval(() => {
      state.timerSeconds += 1;
      const h = String(Math.floor(state.timerSeconds / 3600)).padStart(2, '0');
      const m = String(Math.floor((state.timerSeconds % 3600) / 60)).padStart(2, '0');
      const s = String(state.timerSeconds % 60).padStart(2, '0');
      el.timer.textContent = `${h}:${m}:${s}`;
    }, 1000);
  }

  /* ═══════════════════════════════════════════════════════════════════════
     CHAT — send message
  ═══════════════════════════════════════════════════════════════════════ */
  function sendMessage() {
    const message = el.chatInput.value.trim();
    if (!message) return;

    const locale = shell.language === 'ar' ? 'ar-EG' : 'en-US';
    const timestamp = new Date().toLocaleTimeString(locale, {
      hour: '2-digit',
      minute: '2-digit'
    });

    if (state.socketConnected) {
      state.socket.emit('chat-message', {
        roomId: channel,
        message,
        user: { name: userName, role: userRole },
        timestamp
      });
    } else {
      appendMessage({ name: userName, role: userRole }, message, timestamp);
    }

    el.chatInput.value = '';
    el.chatInput.style.height = 'auto';
  }

  /* ═══════════════════════════════════════════════════════════════════════
     HAND RAISE
  ═══════════════════════════════════════════════════════════════════════ */
  function toggleLocalHand() {
    state.handRaised = !state.handRaised;
    el.raiseHandBtn.classList.toggle('raised', state.handRaised);

    if (state.handRaised) {
      addOrUpdateRaisedHand(LOCAL_ID, { name: userName, role: userRole });
      pushNotification(shell.t('liveRoom.handRaisedToast', { name: userName }), 'notif-hand');
    } else {
      removeRaisedHand(LOCAL_ID);
    }

    if (state.socketConnected) {
      state.socket.emit('raise-hand', {
        roomId: channel,
        user: { name: userName, role: userRole }
      });
    }

    renderHands();
    renderParticipants();
  }

  /* ═══════════════════════════════════════════════════════════════════════
     AGORA RTC
  ═══════════════════════════════════════════════════════════════════════ */
  async function initAgora() {
    if (typeof AgoraRTC === 'undefined' || !window.AGORA_APP_ID) return;

    try {
      state.agoraClient = AgoraRTC.createClient({ mode: 'rtc', codec: 'vp8' });

      state.agoraClient.on('user-published', async (user, mediaType) => {
        await state.agoraClient.subscribe(user, mediaType);

        if (mediaType === 'video') {
          state.remoteVideoActive = true;
          updateRemoteMediaState();
          user.videoTrack.play('slot-remote-media');
          /* Auto-focus the remote slot when they start broadcasting */
          if (state.viewMode === 'single-speaker') {
            state.focusedSlot = 'remote';
            applyViewMode();
          }
        }

        if (mediaType === 'audio') {
          user.audioTrack.play();
        }
      });

      state.agoraClient.on('user-unpublished', (_user, mediaType) => {
        if (mediaType === 'video') {
          state.remoteVideoActive = false;
          updateRemoteMediaState();
          if (state.viewMode === 'single-speaker') {
            state.focusedSlot = 'local';
            applyViewMode();
          }
        }
      });

      /* Fetch a short-lived Agora token from the backend */
      const response = await fetch('/api/live/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer uni-learn-secure-123'
        },
        body: JSON.stringify({ channelName: channel, uid: 0, role: 'publisher' })
      });

      if (!response.ok) return;

      const { token, appId } = await response.json();
      await state.agoraClient.join(appId, channel, token, null);

      state.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
      state.localVideoTrack = await AgoraRTC.createCameraVideoTrack();

      /* Both tracks start muted (OFF) */
      await state.localAudioTrack.setMuted(true);
      await state.localVideoTrack.setMuted(true);

      /* Only instructors get a local camera preview */
      if (isInstructor) {
        state.localVideoTrack.play('slot-local-media');
      }

      updateLocalMediaState();
      await state.agoraClient.publish([state.localAudioTrack, state.localVideoTrack]);

    } catch (error) {
      console.warn('Agora initialization failed:', error);
    }
  }

  /* ── Screen share ── */
  async function startScreenShare() {
    el.screenShareLabel.hidden = false;
    el.toggleScreen.classList.add('active');

    if (!state.agoraClient || typeof AgoraRTC === 'undefined') {
      state.screenSharing = true;
      setViewMode('screenshare');
      return;
    }

    try {
      state.screenTrack = await AgoraRTC.createScreenVideoTrack({}, 'auto');
      const track = Array.isArray(state.screenTrack) ? state.screenTrack[0] : state.screenTrack;

      if (state.localVideoTrack) {
        await state.agoraClient.unpublish(state.localVideoTrack);
      }
      await state.agoraClient.publish(track);
      track.on?.('track-ended', stopScreenShare);

      state.screenSharing = true;
      setViewMode('screenshare');
    } catch (error) {
      console.warn('Screen share failed:', error);
      state.screenSharing = false;
      el.screenShareLabel.hidden = true;
      el.toggleScreen.classList.remove('active');
    }
  }

  async function stopScreenShare() {
    if (!state.screenSharing) return;

    if (state.agoraClient && state.screenTrack) {
      const track = Array.isArray(state.screenTrack) ? state.screenTrack[0] : state.screenTrack;
      try {
        await state.agoraClient.unpublish(track);
        track.close();
        if (state.localVideoTrack) {
          await state.agoraClient.publish(state.localVideoTrack);
        }
      } catch (err) {
        console.warn('stopScreenShare cleanup error:', err);
      }
    }

    state.screenTrack    = null;
    state.screenSharing  = false;
    el.screenShareLabel.hidden = true;
    el.toggleScreen.classList.remove('active');
    setViewMode('dual');
  }

  /* ═══════════════════════════════════════════════════════════════════════
     SOCKET.IO
  ═══════════════════════════════════════════════════════════════════════ */
  function initSocket() {
    if (typeof io !== 'function') return;

    state.socket = io(window.location.origin);

    /* ── Connect ── */
    state.socket.on('connect', () => {
      state.socketConnected = true;
      state.socket.emit('join-room', {
        roomId: channel,
        user: { name: userName, role: userRole }
      });
      pushNotification(shell.t('liveRoom.connectionReady'), 'notif-user');
    });

    /* ── Disconnect ── */
    state.socket.on('disconnect', () => {
      state.socketConnected = false;
    });

    /* ── Room users snapshot (sent on join + on reconnect) ──
     *
     * Race-condition fix:
     *   When a user hard-refreshes, the server may still hold their old
     *   socket session for a brief moment. This can make the reconnecting
     *   instructor appear as "second" and strip them of host status.
     *
     *   Solution: we filter the room-users list by excluding any entry
     *   that matches BOTH our name AND role (i.e. ourselves, old or new).
     *   Only if at least one OTHER instructor remains in the room do we
     *   treat ourselves as a secondary instructor.
     */
    state.socket.on('room-users', (users) => {
      /* Detect host / secondary status */
      if (isInstructor) {
        const otherInstructors = users.filter(
          (u) =>
            (u.role === 'instructor' || u.role === 'admin') &&
            !(u.name === userName && u.role === userRole)  // exclude self (any socket id)
        );

        if (otherInstructors.length === 0) {
          /* First (or only) instructor in the room → Host */
          state.isHost        = true;
          state.isBroadcasting = true;
        } else if (!state.isBroadcasting) {
          /* Another instructor already present → Secondary */
          state.isHost = false;
        }
        /* If isBroadcasting is already true (approved earlier), keep it. */
      }

      /* Populate remote participants (exclude self) */
      state.participants.clear();
      users.forEach((u) => {
        if (!(u.name === userName && u.role === userRole)) {
          state.participants.set(u.id, u);
        }
      });

      syncRemoteSlot();
      updateViewerCount();
      renderParticipants();
      renderHands();
      applyRoleUI(); // ← called AFTER host detection so buttons update immediately
    });

    /* ── User joined ── */
    state.socket.on('user-joined', (user) => {
      state.participants.set(user.id, user);
      syncRemoteSlot();
      updateViewerCount();
      renderParticipants();
      pushNotification(shell.t('liveRoom.joinedToast', { name: user.name }), 'notif-user');
      appendSystemMessage(shell.t('liveRoom.joinedMessage', { name: user.name }));
    });

    /* ── User left ── */
    state.socket.on('user-left', ({ id }) => {
      const user = state.participants.get(id);
      if (!user) return;
      state.participants.delete(id);
      syncRemoteSlot();
      updateViewerCount();
      renderParticipants();
      appendSystemMessage(shell.t('liveRoom.leftMessage', { name: user.name }));
    });

    /* ── Chat ── */
    state.socket.on('chat-message', ({ user, message, timestamp }) => {
      appendMessage(user, message, timestamp);
    });

    /* ── Hand events ── */
    state.socket.on('hand-raised', ({ id, user }) => {
      addOrUpdateRaisedHand(id, user);
      renderHands();
      renderParticipants();
      pushNotification(shell.t('liveRoom.handRaisedToast', { name: user.name }), 'notif-hand');
    });

    state.socket.on('hand-lowered', ({ id }) => {
      removeRaisedHand(id);
      renderHands();
      renderParticipants();
    });

    state.socket.on('raised-hands', (hands) => {
      state.raisedHands = hands.map(({ id, user }) => ({ id, user }));
      renderHands();
      renderParticipants();
    });

    /* ── Speak request (from student or secondary instructor → Host) ──
     *
     * Guard: only the Host processes these. Secondary instructors ignore
     * this event even if the server broadcasts it to the whole room.
     */
    state.socket.on('speak-request', ({ id, user }) => {
      if (!state.isHost) return; // ← critical guard — secondary instructors bail out here
      addSpeakRequest(id, user);
    });

    /* ── Instructor signals (targeted) ── */
    state.socket.on('instructor-signal', ({ type, targetId, data }) => {
      const isMe = state.socket && targetId === state.socket.id;

      /* speak-approved → student can now unmute */
      if (type === 'speak-approved' && isMe) {
        state.micRequested = false;
        state.micApproved  = true;
        pushNotification(shell.t('liveRoom.requestApproved'), 'notif-user');
        applyRoleUI();
      }

      /* speak-denied → reset student state */
      if (type === 'speak-denied' && isMe) {
        state.micRequested = false;
        state.micApproved  = false;
        pushNotification(shell.t('liveRoom.requestDenied'));
        applyRoleUI();
      }

      /* force-mute → silence student */
      if (type === 'force-mute' && isMe) {
        state.micOn        = false;
        state.micApproved  = false;
        state.micRequested = false;
        if (state.localAudioTrack) state.localAudioTrack.setMuted(true);
        updateLocalMediaState();
        applyRoleUI();
        pushNotification(shell.t('liveRoom.studentMicLocked'));
      }

      /* broadcast-approved → secondary instructor becomes a broadcaster */
      if (type === 'broadcast-approved' && isMe) {
        state.isBroadcasting = true;
        state.micRequested   = false;

        /* Start local video preview */
        if (state.localVideoTrack) {
          state.localVideoTrack.play('slot-local-media');
        }

        /* Publish local tracks to Agora if not already published */
        if (state.agoraClient && state.localAudioTrack && state.localVideoTrack) {
          state.agoraClient
            .publish([state.localAudioTrack, state.localVideoTrack])
            .catch((err) => console.warn('broadcast-approved publish error:', err));
        }

        applyRoleUI();
        setViewMode('dual');
        pushNotification(shell.t('liveRoom.requestApproved'), 'notif-user');
      }
    });
  }

  /* ═══════════════════════════════════════════════════════════════════════
     CLEANUP
  ═══════════════════════════════════════════════════════════════════════ */
  async function cleanup() {
    if (state.timerInterval) {
      clearInterval(state.timerInterval);
      state.timerInterval = null;
    }
    try { await stopScreenShare(); } catch (_) { /* ignore */ }

    state.localAudioTrack?.close();
    state.localVideoTrack?.close();
    state.socket?.disconnect();

    if (state.agoraClient) {
      try { await state.agoraClient.leave(); } catch (_) { /* ignore */ }
    }
  }

  /* ═══════════════════════════════════════════════════════════════════════
     EVENT LISTENERS
  ═══════════════════════════════════════════════════════════════════════ */

  /* ── Sidebar tabs ── */
  document.querySelectorAll('.tab-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      document.querySelectorAll('.tab-panel').forEach((p) => p.classList.remove('active'));
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      const panel = document.getElementById(`tab-${btn.dataset.tab}`);
      if (panel) panel.classList.add('active');
    });
  });

  /* ── Chat ── */
  el.chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });

  el.chatInput.addEventListener('input', () => {
    el.chatInput.style.height = 'auto';
    el.chatInput.style.height = `${Math.min(el.chatInput.scrollHeight, 96)}px`;
  });

  document.getElementById('sendBtn').addEventListener('click', sendMessage);

  /* ── PIP click — swap focused slot ── */
  el.slotLocal.addEventListener('click', () => {
    if (state.viewMode === 'single-speaker' && el.slotLocal.classList.contains('pip')) {
      state.focusedSlot = 'local';
      applyViewMode();
    }
  });

  el.slotRemote.addEventListener('click', () => {
    if (
      state.viewMode === 'single-speaker' &&
      el.slotRemote.classList.contains('pip') &&
      participantList().some((p) => !p.isLocal)
    ) {
      state.focusedSlot = 'remote';
      applyViewMode();
    }
  });

  /* ── Mic button ── */
  el.toggleMic.addEventListener('click', async () => {
    if (isInstructor) {
      /* Instructors (host or approved broadcaster) directly toggle mic */
      if (!state.isHost && !state.isBroadcasting) return; // secondary still waiting
      state.micOn = !state.micOn;
      if (state.localAudioTrack) await state.localAudioTrack.setMuted(!state.micOn);
      updateLocalMediaState();

    } else {
      /* Student flow */
      if (state.micOn) {
        /* Mute self */
        state.micOn       = false;
        state.micApproved = false;
        if (state.localAudioTrack) await state.localAudioTrack.setMuted(true);
        updateLocalMediaState();
        applyRoleUI();
        return;
      }

      if (state.micApproved) {
        /* Approved — toggle mic */
        state.micOn = !state.micOn;
        if (state.localAudioTrack) await state.localAudioTrack.setMuted(!state.micOn);
        updateLocalMediaState();

      } else {
        /* Not yet approved — send speak request */
        if (state.micRequested) {
          pushNotification(shell.t('liveRoom.requestSent'));
          return;
        }
        state.micRequested = true;
        applyRoleUI();
        if (state.socketConnected) {
          state.socket.emit('speak-request', {
            roomId: channel,
            user: { name: userName, role: userRole }
          });
        }
        pushNotification(shell.t('liveRoom.requestSent'));
      }
    }
  });

  /* ── Camera button ── */
  el.toggleCam.addEventListener('click', async () => {
    if (!isInstructor) return;
    if (!state.isHost && !state.isBroadcasting) return;
    state.camOn = !state.camOn;
    if (state.localVideoTrack) await state.localVideoTrack.setMuted(!state.camOn);
    updateLocalMediaState();
  });

  /* ── Screen share button ── */
  el.toggleScreen.addEventListener('click', async () => {
    if (!isInstructor) return;
    if (!state.isHost && !state.isBroadcasting) return;
    if (state.screenSharing) await stopScreenShare();
    else await startScreenShare();
  });

  /* ── Request Broadcast button (secondary instructor only) ── */
  el.reqBroadcastBtn.addEventListener('click', () => {
    if (state.micRequested) return; // debounce — ignore if already pending
    state.micRequested = true;
    applyRoleUI();
    if (state.socketConnected) {
      state.socket.emit('speak-request', {
        roomId: channel,
        user: { name: userName, role: userRole, reqType: 'broadcast' }
      });
    }
    pushNotification(shell.t('liveRoom.requestSent'));
  });

  /* ── Raise hand ── */
  el.raiseHandBtn.addEventListener('click', toggleLocalHand);

  /* ── Leave / End ── */
  el.endBtn.addEventListener('click', async () => {
    if (!window.confirm(shell.t('liveRoom.leaveConfirm'))) return;
    await cleanup();
    window.location.href = 'dashboard.html';
  });

  /* ── Reconnect / Refresh button ── */
  el.refreshBtn.addEventListener('click', () => {
    if (window.confirm('Reconnect to the live room?')) {
      window.location.reload();
    }
  });

  /* ── Mobile sidebar toggle ── */
  el.mobileMenuBtn?.addEventListener('click', () => {
    el.sidebar?.classList.toggle('mobile-open');
  });

  /* ── Language change ── */
  window.addEventListener('unilearn:language-changed', () => {
    updateSessionCopy();
    renderParticipants();
    renderHands();
    renderSpeakRequests();
  });

  /* ── Cleanup on page unload ── */
  window.addEventListener('beforeunload', () => { cleanup(); });

  /* ═══════════════════════════════════════════════════════════════════════
     BOOT SEQUENCE
  ═══════════════════════════════════════════════════════════════════════ */

  /* Set local avatar initial */
  el.localAvatar.textContent = (userName.charAt(0) || 'S').toUpperCase();

  /* System message */
  appendSystemMessage(shell.t('liveRoom.sessionStarted'));

  /* Populate copy + run initial role UI
   * applyRoleUI() is intentionally called inside updateSessionCopy()
   * so it always fires AFTER the host state is known. On first boot,
   * isHost is false for everyone; it gets set correctly in room-users.
   * We still call it here so the DOM is in a valid initial state.
   */
  updateSessionCopy();
  updateViewerCount();
  renderParticipants();
  renderHands();
  renderSpeakRequests();
  updateLocalMediaState();
  updateRemoteMediaState();
  setViewMode('single-speaker');
  startTimer();

  /* Start networking LAST so all UI is ready before events arrive */
  initSocket();
  initAgora();

})();
