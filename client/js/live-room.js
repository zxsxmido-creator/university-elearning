window.AGORA_APP_ID = "eff8bc824ac7413ea7d0c4ed684809e9";

(() => {
  // ── TRANSLATIONS ──────────────────────────────────────────────
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
        dualViewTitle: 'Dual view',
        singleViewTitle: 'Single-speaker view',
        screenViewTitle: 'Screenshare layout',
        singleSpeakerHint: 'Tap the mini window to switch the focused speaker.',
        screenShareLabel: 'Screen share',
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
        defaultSession: 'Live Session',
        requestToSpeak: 'Request to Speak',
        requestSent: 'Request sent. Waiting for approval...',
        requestApproved: 'Your request was approved. You can speak now.',
        requestDenied: 'Your request was denied.',
        approveBtn: 'Approve',
        denyBtn: 'Deny',
        forceMute: 'Mute',
        speakRequestToast: '{{name}} requests to speak',
        studentMicLocked: 'Mic is locked. Request to speak first.',
        qualityLabel: 'Quality'
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
        requestsTab: 'طلبات الكلام',
        messagePlaceholder: 'أرسل رسالة...',
        noRaisedHands: 'لا توجد أيادٍ مرفوعة',
        noSpeakRequests: 'لا توجد طلبات كلام',
        dualViewTitle: 'عرض ثنائي',
        singleViewTitle: 'عرض متحدث واحد',
        screenViewTitle: 'تخطيط مشاركة الشاشة',
        singleSpeakerHint: 'اضغط على النافذة الصغيرة لتبديل المتحدث الرئيسي.',
        screenShareLabel: 'مشاركة الشاشة',
        mic: 'الميكروفون',
        camera: 'الكاميرا',
        share: 'مشاركة',
        hand: 'رفع اليد',
        leave: 'مغادرة',
        waiting: 'بانتظار الانضمام...',
        youLabel: 'أنت',
        sessionStarted: 'بدأت الجلسة',
        connectionReady: 'تم الاتصال بالغرفة المباشرة.',
        joinedToast: 'انضم {{name}}',
        joinedMessage: 'انضم {{name}} إلى الجلسة',
        leftMessage: 'غادر {{name}} الجلسة',
        handRaisedToast: 'رفع {{name}} يده',
        lowerHand: 'خفض',
        leaveConfirm: 'هل تريد مغادرة هذه الجلسة؟',
        defaultSession: 'جلسة مباشرة',
        requestToSpeak: 'طلب الكلام',
        requestSent: 'تم إرسال الطلب. بانتظار الموافقة...',
        requestApproved: 'تمت الموافقة على طلبك. يمكنك الكلام الآن.',
        requestDenied: 'تم رفض طلبك.',
        approveBtn: 'موافقة',
        denyBtn: 'رفض',
        forceMute: 'كتم',
        speakRequestToast: '{{name}} يطلب الكلام',
        studentMicLocked: 'الميكروفون مقفل. اطلب الكلام أولاً.',
        qualityLabel: 'الجودة'
      }
    }
  };

  // ── VIDEO QUALITY CONFIGS ─────────────────────────────────────
  const VIDEO_QUALITY_CONFIGS = {
    '360p': { width: 640,  height: 360, frameRate: 15, bitrateMin: 400,  bitrateMax: 800  },
    '480p': { width: 640,  height: 480, frameRate: 15, bitrateMin: 500,  bitrateMax: 1000 },
    '720p': { width: 1280, height: 720, frameRate: 15, bitrateMin: 1130, bitrateMax: 2000 }
  };

  // ── SESSION TITLES ────────────────────────────────────────────
  const SESSION_TITLES = {
    'cs-binary-trees': {
      en: 'Advanced Algorithms - Binary Trees Deep Dive',
      ar: 'الخوارزميات المتقدمة - تعمق في الأشجار الثنائية'
    },
    'math-linear-algebra': {
      en: 'Linear Algebra - Eigenvalues Workshop',
      ar: 'الجبر الخطي - ورشة القيم الذاتية'
    },
    'physics-quantum': {
      en: 'Quantum Mechanics - Wave Functions Seminar',
      ar: 'ميكانيكا الكم - ندوة الدوال الموجية'
    },
    'db-indexing': {
      en: 'Database Systems - Indexing Strategies Review',
      ar: 'أنظمة قواعد البيانات - مراجعة استراتيجيات الفهرسة'
    }
  };

  // ── SESSION CONTEXT ───────────────────────────────────────────
  const channel  = new URLSearchParams(window.location.search).get('channel') || 'demo-room';
  const userName = localStorage.getItem('userName') || 'Student';
  const userRole = localStorage.getItem('userRole') || 'student';
  const localParticipantId = 'local-self';
  const isInstructor = userRole === 'instructor' || userRole === 'admin';

  // ── STATE ─────────────────────────────────────────────────────
  const state = {
    participants:     new Map(),
    raisedHands:      [],
    speakRequests:    [],
    approvedSpeakers: new Set(),
    videoPublishers:  new Set(),   // remote UIDs actually publishing video
    socket:           null,
    socketConnected:  false,
    agoraClient:      null,
    localAudioTrack:  null,
    localVideoTrack:  null,
    remoteVideoActive: false,
    screenTrack:      null,
    micOn:            false,       // OFF by default
    camOn:            false,       // OFF by default
    micApproved:      false,
    micRequested:     false,
    screenSharing:    false,
    handRaised:       false,
    timerSeconds:     0,
    timerInterval:    null,
    viewMode:         'single-speaker',
    focusedSlot:      'local',
    currentQuality:   '720p'
  };

  // ── SHELL INIT ────────────────────────────────────────────────
  const shell = window.UniLearnShell.init({
    translations:   TRANSLATIONS,
    defaultProfile: { name: userName, role: userRole },
    defaultLanguage: 'ar',
    logoutPath:     'login.html',
    sidebarSelector: '#sidebar',
    closeSidebarOnLinkClick: false
  });

  // ── DOM REFERENCES ────────────────────────────────────────────
  const elements = {
    videoStage:       document.getElementById('videoStage'),
    videoGrid:        document.getElementById('videoGrid'),
    screenShareLabel: document.getElementById('screenShareLabel'),
    localAvatar:      document.getElementById('localAvatar'),
    remoteAvatar:     document.getElementById('remoteAvatar'),
    localName:        document.getElementById('localName'),
    remoteName:       document.getElementById('remoteName'),
    localMicIcon:     document.getElementById('localMicIcon'),
    remoteMicIcon:    document.getElementById('remoteMicIcon'),
    chatMessages:     document.getElementById('chatMessages'),
    chatInput:        document.getElementById('chatInput'),
    participantsList: document.getElementById('participantsList'),
    handsPanel:       document.getElementById('handsPanel'),
    handsEmpty:       document.getElementById('handsEmpty'),
    handsCount:       document.getElementById('handsCount'),
    requestsPanel:    document.getElementById('requestsPanel'),
    requestsEmpty:    document.getElementById('requestsEmpty'),
    requestsCount:    document.getElementById('requestsCount'),
    notifStack:       document.getElementById('notifStack'),
    viewerCount:      document.getElementById('viewerCount'),
    timer:            document.getElementById('sessionTimer'),
    sessionTitle:     document.getElementById('sessionTitle'),
    singleSpeakerHint: document.getElementById('singleSpeakerHint'),
    toggleMic:        document.getElementById('toggleMic'),
    toggleCam:        document.getElementById('toggleCam'),
    toggleScreen:     document.getElementById('toggleScreen'),
    raiseHand:        document.getElementById('raiseHandBtn'),
    endBtn:           document.getElementById('endBtn'),
    slotLocal:        document.getElementById('slot-local'),
    slotRemote:       document.getElementById('slot-remote'),
    micBtnLabel:      document.getElementById('micBtnLabel'),
    qualityBtn:       document.getElementById('qualityBtn'),
    qualityWrap:      document.getElementById('qualityWrap'),
    qualityLabel:     document.getElementById('qualityLabel')
  };

  // ── HELPERS ───────────────────────────────────────────────────
  function escape(value) {
    return window.UniLearnShell.escapeHtml(value);
  }

  function getSessionTitle() {
    return SESSION_TITLES[channel] || { en: 'Live Session', ar: 'جلسة مباشرة' };
  }

  function participantList() {
    const combined = [
      { id: localParticipantId, name: userName, role: userRole, isLocal: true },
      ...Array.from(state.participants.values())
    ];
    const seen = new Set();
    return combined.filter((p) => {
      const key = `${p.name}|${p.role}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }

  // ── ROLE-BASED UI ─────────────────────────────────────────────
  function applyRoleUI() {
    const camBtn         = elements.toggleCam;
    const raiseHandBtn   = elements.raiseHand;
    const requestsTabBtn = document.getElementById('requestsTabBtn');

    if (isInstructor) {
      if (camBtn)         camBtn.style.display         = 'inline-flex';
      if (raiseHandBtn)   raiseHandBtn.style.display   = 'none';
      if (requestsTabBtn) requestsTabBtn.style.display = 'inline-flex';
      if (elements.micBtnLabel) {
        elements.micBtnLabel.textContent = shell.t('liveRoom.mic');
      }
    } else {
      if (camBtn)         camBtn.style.display         = 'none';
      if (raiseHandBtn)   raiseHandBtn.style.display   = 'inline-flex';
      if (requestsTabBtn) requestsTabBtn.style.display = 'none';
      if (elements.micBtnLabel) {
        elements.micBtnLabel.textContent = state.micRequested
          ? shell.t('liveRoom.requestSent').split('.')[0]
          : shell.t('liveRoom.requestToSpeak');
      }
    }
  }

  // ── SESSION COPY ──────────────────────────────────────────────
  function updateSessionCopy() {
    elements.sessionTitle.textContent =
      getSessionTitle()[shell.language] || getSessionTitle().en;
    elements.localName.textContent = userName || shell.t('liveRoom.youLabel');
    applyRoleUI();
    syncRemoteSlot();
  }

  function syncRemoteSlot() {
    const remoteParticipant = participantList().find((p) => !p.isLocal);
    const remoteLabel = remoteParticipant
      ? remoteParticipant.name
      : shell.t('liveRoom.waiting');
    elements.remoteName.textContent = remoteLabel;
    elements.remoteAvatar.textContent = remoteParticipant
      ? remoteParticipant.name.charAt(0).toUpperCase()
      : '?';

    if (!remoteParticipant && state.viewMode === 'single-speaker') {
      state.focusedSlot = 'local';
      applyViewMode();
    }
  }

  function updateViewerCount() {
    elements.viewerCount.textContent = String(participantList().length);
  }

  // ── PARTICIPANTS ──────────────────────────────────────────────
  function renderParticipants() {
    elements.participantsList.innerHTML = participantList().map((participant) => {
      const participantRole = shell.t(`roles.${participant.role}`) || participant.role;
      const hasRaisedHand   = state.raisedHands.some((e) => e.user.name === participant.name);
      const isApproved      = state.approvedSpeakers.has(participant.id);
      const showMuteBtn     = isInstructor && !participant.isLocal && isApproved;

      return `
        <div class="participant-item" data-participant-id="${participant.id}">
          <div class="p-avatar ${participant.role !== 'student' ? 'instructor-avatar' : ''}">
            ${escape(participant.name.charAt(0).toUpperCase())}
          </div>
          <div class="p-info">
            <div class="p-name">${escape(participant.name)}</div>
            <div class="p-role">${escape(participantRole)}</div>
          </div>
          <div class="p-status">
            ${hasRaisedHand ? '<span class="hand-mark">Hand</span>' : ''}
            ${showMuteBtn ? `
              <button class="mute-participant-btn" type="button"
                data-mute-id="${participant.id}"
                data-mute-name="${escape(participant.name)}">
                ${shell.t('liveRoom.forceMute')}
              </button>` : ''}
          </div>
        </div>
      `;
    }).join('');

    elements.participantsList.querySelectorAll('[data-mute-id]').forEach((btn) => {
      btn.addEventListener('click', () => {
        forceMuteParticipant(btn.dataset.muteId, { name: btn.dataset.muteName });
      });
    });
  }

  // ── RAISED HANDS ─────────────────────────────────────────────
  function renderHands() {
    const count = state.raisedHands.length;
    elements.handsCount.textContent = String(count);
    elements.handsCount.classList.toggle('visible', count > 0);
    elements.handsEmpty.style.display = count ? 'none' : 'flex';
    elements.handsPanel.querySelectorAll('.hand-queue-item').forEach((el) => el.remove());

    state.raisedHands.forEach(({ id, user }) => {
      const row = document.createElement('div');
      row.className = 'hand-queue-item';
      row.innerHTML = `
        <span class="hand-queue-name">${escape(user.name)}</span>
        ${isInstructor ? `
          <button class="lower-btn" type="button" data-hand-id="${id}">
            ${shell.t('liveRoom.lowerHand')}
          </button>` : ''}
      `;

      if (isInstructor) {
        row.querySelector('[data-hand-id]')?.addEventListener('click', () => {
          removeRaisedHand(id);
          if (id === localParticipantId) {
            state.handRaised = false;
            elements.raiseHand.classList.remove('raised');
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

      elements.handsPanel.appendChild(row);
    });
  }

  // ── SPEAK REQUESTS ────────────────────────────────────────────
  function renderSpeakRequests() {
    const count = state.speakRequests.length;
    if (elements.requestsCount) {
      elements.requestsCount.textContent = String(count);
      elements.requestsCount.classList.toggle('visible', count > 0);
    }
    if (elements.requestsEmpty) {
      elements.requestsEmpty.style.display = count ? 'none' : 'flex';
    }
    elements.requestsPanel.querySelectorAll('.request-item').forEach((el) => el.remove());

    if (!isInstructor) return;

    state.speakRequests.forEach(({ id, user }) => {
      const row = document.createElement('div');
      row.className = 'request-item';
      row.innerHTML = `
        <span class="request-name">${escape(user.name)}</span>
        <div class="request-actions">
          <button class="approve-btn" type="button" data-approve-id="${id}">
            ${shell.t('liveRoom.approveBtn')}
          </button>
          <button class="deny-btn" type="button" data-deny-id="${id}">
            ${shell.t('liveRoom.denyBtn')}
          </button>
        </div>
      `;

      row.querySelector('[data-approve-id]').addEventListener('click', () => {
        approveSpeakRequest(id, user);
      });
      row.querySelector('[data-deny-id]').addEventListener('click', () => {
        denySpeakRequest(id, user);
      });

      elements.requestsPanel.appendChild(row);
    });
  }

  function approveSpeakRequest(id, user) {
    state.speakRequests = state.speakRequests.filter((r) => r.id !== id);
    state.approvedSpeakers.add(id);
    if (state.socketConnected) {
      state.socket.emit('instructor-signal', {
        roomId: channel,
        type: 'speak-approved',
        targetId: id,
        data: { user }
      });
    }
    renderSpeakRequests();
    renderParticipants();
    pushNotification(`${escape(user.name)}: approved`, 'notif-user');
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
    renderParticipants();
    pushNotification(`${escape(user.name)}: muted`, '');
  }

  // ── NOTIFICATIONS / CHAT ──────────────────────────────────────
  function pushNotification(text, className) {
    const item = document.createElement('div');
    item.className = `notif ${className || ''}`.trim();
    item.textContent = text;
    elements.notifStack.appendChild(item);
    setTimeout(() => {
      item.classList.add('fade-out');
      setTimeout(() => item.remove(), 280);
    }, 3200);
  }

  function appendSystemMessage(text) {
    const row = document.createElement('div');
    row.className = 'msg-system';
    row.textContent = text;
    elements.chatMessages.appendChild(row);
    elements.chatMessages.scrollTop = elements.chatMessages.scrollHeight;
  }

  function appendMessage(user, message, timestamp) {
    const row = document.createElement('div');
    row.className = 'chat-msg';
    row.innerHTML = `
      <div class="msg-meta">
        <span class="msg-author ${user.role !== 'student' ? 'instructor' : ''}">
          ${escape(user.name)}
        </span>
        <span class="msg-time">${escape(timestamp || '')}</span>
      </div>
      <div class="msg-text">${escape(message)}</div>
    `;
    elements.chatMessages.appendChild(row);
    elements.chatMessages.scrollTop = elements.chatMessages.scrollHeight;
  }

  // ── HANDS HELPERS ─────────────────────────────────────────────
  function addOrUpdateRaisedHand(id, user) {
    const index = state.raisedHands.findIndex(
      (e) => e.id === id || e.user.name === user.name
    );
    const next = { id, user };
    if (index >= 0) state.raisedHands[index] = next;
    else state.raisedHands.push(next);
  }

  function removeRaisedHand(id) {
    state.raisedHands = state.raisedHands.filter((e) => e.id !== id);
  }

  // ── LOCAL MEDIA STATE ─────────────────────────────────────────
  function updateLocalMediaState() {
    const showAvatar = !state.camOn || !state.localVideoTrack;
    elements.localAvatar.style.display = showAvatar ? 'flex' : 'none';
    elements.localMicIcon.classList.toggle('muted', !state.micOn);
    elements.toggleMic.classList.toggle('off', !state.micOn);
    elements.toggleCam.classList.toggle('off', !state.camOn);
  }

  function updateRemoteMediaState() {
    elements.remoteAvatar.style.display = state.remoteVideoActive ? 'none' : 'flex';
  }

  // ── VIEW MODE ─────────────────────────────────────────────────
  function applyViewMode() {
    const hasRemote = participantList().some((p) => !p.isLocal);
    // A remote slot is worth showing ONLY if they're actually publishing video
    const remoteIsPublishing = hasRemote && (() => {
      const remoteParticipant = participantList().find((p) => !p.isLocal);
      return remoteParticipant
        ? state.videoPublishers.has(remoteParticipant.id) || state.remoteVideoActive
        : false;
    })();

    elements.videoGrid.classList.remove('dual', 'single-speaker', 'screenshare');
    elements.slotLocal.classList.remove('focused', 'pip', 'hidden');
    elements.slotRemote.classList.remove('focused', 'pip', 'hidden');

    if (state.viewMode === 'single-speaker') {
      elements.videoGrid.classList.add('single-speaker');
      elements.videoStage.classList.add('single-mode');

      const focusRemote = state.focusedSlot === 'remote' && remoteIsPublishing;
      const mainSlot      = focusRemote ? elements.slotRemote : elements.slotLocal;
      const secondarySlot = focusRemote ? elements.slotLocal  : elements.slotRemote;

      mainSlot.classList.add('focused');

      if (remoteIsPublishing) {
        secondarySlot.classList.add('pip');
      } else {
        // Hide the PIP entirely — no empty black slot
        secondarySlot.classList.add('hidden');
      }
    } else {
      elements.videoStage.classList.remove('single-mode');
      elements.videoGrid.classList.add(state.viewMode);

      // In dual/screenshare: hide remote slot if nobody is broadcasting
      if (!remoteIsPublishing) {
        elements.slotRemote.classList.add('hidden');
      }
    }

    document.getElementById('viewDual')
      .classList.toggle('active', state.viewMode === 'dual');
    document.getElementById('viewSingle')
      .classList.toggle('active', state.viewMode === 'single-speaker');
    document.getElementById('viewScreen')
      .classList.toggle('active', state.viewMode === 'screenshare');
  }

  function setViewMode(mode) {
    state.viewMode = mode;
    applyViewMode();
  }

  // ── TIMER ─────────────────────────────────────────────────────
  function startTimer() {
    if (state.timerInterval) return;
    state.timerInterval = setInterval(() => {
      state.timerSeconds += 1;
      const h = String(Math.floor(state.timerSeconds / 3600)).padStart(2, '0');
      const m = String(Math.floor((state.timerSeconds % 3600) / 60)).padStart(2, '0');
      const s = String(state.timerSeconds % 60).padStart(2, '0');
      elements.timer.textContent = `${h}:${m}:${s}`;
    }, 1000);
  }

  // ── CHAT ──────────────────────────────────────────────────────
  function sendMessage() {
    const message = elements.chatInput.value.trim();
    if (!message) return;

    const locale = shell.language === 'ar' ? 'ar-EG' : 'en-US';
    const timestamp = new Date().toLocaleTimeString(locale, {
      hour: '2-digit', minute: '2-digit'
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

    elements.chatInput.value = '';
    elements.chatInput.style.height = 'auto';
  }

  // ── RAISE HAND ────────────────────────────────────────────────
  function toggleLocalHand() {
    state.handRaised = !state.handRaised;
    elements.raiseHand.classList.toggle('raised', state.handRaised);

    if (state.handRaised) {
      addOrUpdateRaisedHand(localParticipantId, { name: userName, role: userRole });
      pushNotification(
        shell.t('liveRoom.handRaisedToast', { name: userName }),
        'notif-hand'
      );
    } else {
      removeRaisedHand(localParticipantId);
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

  // ── VIDEO QUALITY ─────────────────────────────────────────────
  async function applyQuality(quality) {
    state.currentQuality = quality;
    if (elements.qualityLabel) elements.qualityLabel.textContent = quality;

    document.querySelectorAll('.quality-opt').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.quality === quality);
    });

    if (isInstructor && state.agoraClient && state.localVideoTrack) {
      try {
        await state.localVideoTrack.setEncoderConfiguration(VIDEO_QUALITY_CONFIGS[quality]);
      } catch (err) {
        console.warn('setEncoderConfiguration failed:', err);
      }
    }

    if (!isInstructor && state.agoraClient) {
      try {
        // Enable dual stream if not already
        await state.agoraClient.enableDualStream();
        // 0 = high stream, 1 = low stream
        const streamType = quality === '360p' ? 1 : 0;
        state.agoraClient.remoteUsers.forEach((remoteUser) => {
          state.agoraClient.setRemoteVideoStreamType(remoteUser, streamType);
        });
      } catch (err) {
        console.warn('Dual stream quality change failed:', err);
      }
    }
  }

  // ── AGORA ─────────────────────────────────────────────────────
  async function initAgora() {
    if (typeof AgoraRTC === 'undefined' || !window.AGORA_APP_ID) return;

    try {
      state.agoraClient = AgoraRTC.createClient({ mode: 'rtc', codec: 'vp8' });

      // Enable dual stream for subscribers
      if (!isInstructor) {
        await state.agoraClient.enableDualStream().catch(() => {});
      }

      state.agoraClient.on('user-published', async (user, mediaType) => {
        await state.agoraClient.subscribe(user, mediaType);

        if (mediaType === 'video') {
          // Track this user as an active video publisher
          state.videoPublishers.add(String(user.uid));
          state.remoteVideoActive = true;
          updateRemoteMediaState();
          user.videoTrack.play('slot-remote-media');

          // Apply current quality preference
          const streamType = state.currentQuality === '360p' ? 1 : 0;
          state.agoraClient.setRemoteVideoStreamType(user, streamType);

          if (state.viewMode === 'single-speaker') {
            state.focusedSlot = 'remote';
          }
          applyViewMode();
        }

        if (mediaType === 'audio') {
          user.audioTrack.play();
        }
      });

      state.agoraClient.on('user-unpublished', (user, mediaType) => {
        if (mediaType === 'video') {
          state.videoPublishers.delete(String(user.uid));
          state.remoteVideoActive = false;
          updateRemoteMediaState();
          applyViewMode();
        }
      });

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

      // Both OFF by default
      await state.localAudioTrack.setMuted(true);
      await state.localVideoTrack.setMuted(true);

      // Apply initial quality for publisher
      if (isInstructor) {
        try {
          await state.localVideoTrack.setEncoderConfiguration(
            VIDEO_QUALITY_CONFIGS[state.currentQuality]
          );
          state.localVideoTrack.play('slot-local-media');
        } catch (err) {
          console.warn('Initial quality config failed:', err);
        }
      }

      updateLocalMediaState();
      await state.agoraClient.publish([state.localAudioTrack, state.localVideoTrack]);

    } catch (error) {
      console.warn('Agora initialization failed:', error);
    }
  }

  // ── SCREEN SHARE ──────────────────────────────────────────────
  async function startScreenShare() {
    elements.screenShareLabel.hidden = false;
    elements.toggleScreen.classList.add('active');

    if (!state.agoraClient || typeof AgoraRTC === 'undefined') {
      state.screenSharing = true;
      setViewMode('screenshare');
      return;
    }

    try {
      state.screenTrack = await AgoraRTC.createScreenVideoTrack({}, 'auto');
      const activeTrack = Array.isArray(state.screenTrack)
        ? state.screenTrack[0]
        : state.screenTrack;

      if (state.localVideoTrack) {
        await state.agoraClient.unpublish(state.localVideoTrack);
      }

      await state.agoraClient.publish(activeTrack);
      activeTrack.on?.('track-ended', stopScreenShare);
      state.screenSharing = true;
      setViewMode('screenshare');
    } catch (error) {
      console.warn('Screen share failed:', error);
      state.screenSharing = false;
      elements.screenShareLabel.hidden = true;
      elements.toggleScreen.classList.remove('active');
    }
  }

  async function stopScreenShare() {
    if (!state.screenSharing) return;

    if (state.agoraClient && state.screenTrack) {
      const activeTrack = Array.isArray(state.screenTrack)
        ? state.screenTrack[0]
        : state.screenTrack;
      try {
        await state.agoraClient.unpublish(activeTrack);
        activeTrack.close();
        if (state.localVideoTrack) {
          await state.agoraClient.publish(state.localVideoTrack);
        }
      } catch (err) {
        console.warn('Stop screen share error:', err);
      }
    }

    state.screenTrack = null;
    state.screenSharing = false;
    elements.screenShareLabel.hidden = true;
    elements.toggleScreen.classList.remove('active');
    setViewMode('single-speaker');
  }

  // ── SOCKET ────────────────────────────────────────────────────
  function initSocket() {
    if (typeof io !== 'function') return;

    state.socket = io(window.location.origin);

    state.socket.on('connect', () => {
      state.socketConnected = true;
      state.socket.emit('join-room', {
        roomId: channel,
        user: { name: userName, role: userRole }
      });
      pushNotification(shell.t('liveRoom.connectionReady'), 'notif-user');
    });

    state.socket.on('disconnect', () => {
      state.socketConnected = false;
    });

    state.socket.on('room-users', (users) => {
      state.participants.clear();
      users.forEach((user) => {
        if (user.name !== userName || user.role !== userRole) {
          state.participants.set(user.id, user);
        }
      });
      syncRemoteSlot();
      updateViewerCount();
      renderParticipants();
      renderHands();
    });

    state.socket.on('user-joined', (user) => {
      state.participants.set(user.id, user);
      syncRemoteSlot();
      updateViewerCount();
      renderParticipants();
      pushNotification(
        shell.t('liveRoom.joinedToast', { name: user.name }),
        'notif-user'
      );
      appendSystemMessage(shell.t('liveRoom.joinedMessage', { name: user.name }));
    });

    state.socket.on('user-left', ({ id }) => {
      const user = state.participants.get(id);
      if (!user) return;
      state.participants.delete(id);
      state.videoPublishers.delete(id);
      syncRemoteSlot();
      updateViewerCount();
      renderParticipants();
      applyViewMode();
      appendSystemMessage(shell.t('liveRoom.leftMessage', { name: user.name }));
    });

    state.socket.on('chat-message', ({ user, message, timestamp }) => {
      appendMessage(user, message, timestamp);
    });

    state.socket.on('hand-raised', ({ id, user }) => {
      addOrUpdateRaisedHand(id, user);
      renderHands();
      renderParticipants();
      pushNotification(
        shell.t('liveRoom.handRaisedToast', { name: user.name }),
        'notif-hand'
      );
    });

    state.socket.on('hand-lowered', ({ id }) => {
      removeRaisedHand(id);
      renderHands();
      renderParticipants();
    });

    state.socket.on('raised-hands', (hands) => {
      state.raisedHands = hands.map((e) => ({ id: e.id, user: e.user }));
      renderHands();
      renderParticipants();
    });

    // Speak request signals (student receives approval/denial/force-mute)
    state.socket.on('instructor-signal', ({ type, targetId, data }) => {
      const isMe = targetId === state.socket.id;

      if (type === 'speak-approved' && isMe) {
        state.micRequested = false;
        state.micApproved  = true;
        pushNotification(shell.t('liveRoom.requestApproved'), 'notif-user');
        applyRoleUI();
      }

      if (type === 'speak-denied' && isMe) {
        state.micRequested = false;
        state.micApproved  = false;
        pushNotification(shell.t('liveRoom.requestDenied'), '');
        applyRoleUI();
      }

      if (type === 'force-mute' && isMe) {
        state.micOn        = false;
        state.micApproved  = false;
        state.micRequested = false;
        if (state.localAudioTrack) state.localAudioTrack.setMuted(true);
        updateLocalMediaState();
        applyRoleUI();
        pushNotification(shell.t('liveRoom.studentMicLocked'), '');
      }
    });

    // Admin receives speak requests from students
    state.socket.on('speak-request', ({ id, user }) => {
      if (!isInstructor) return;
      const already = state.speakRequests.find((r) => r.id === id);
      if (already) return;
      state.speakRequests.push({ id, user });
      renderSpeakRequests();
      pushNotification(
        shell.t('liveRoom.speakRequestToast', { name: user.name }),
        'notif-hand'
      );
    });
  }

  // ── CLEANUP ───────────────────────────────────────────────────
  async function cleanup() {
    if (state.timerInterval) {
      clearInterval(state.timerInterval);
      state.timerInterval = null;
    }
    try { await stopScreenShare(); } catch (e) { /* ignore */ }
    state.localAudioTrack?.close();
    state.localVideoTrack?.close();
    state.socket?.disconnect();
    if (state.agoraClient) {
      try { await state.agoraClient.leave(); } catch (e) { /* ignore */ }
    }
  }

  // ── EVENT LISTENERS ───────────────────────────────────────────

  // Sidebar tabs
  document.querySelectorAll('.tab-btn').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach((b) => b.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach((p) => p.classList.remove('active'));
      button.classList.add('active');
      const panel = document.getElementById(`tab-${button.dataset.tab}`);
      if (panel) panel.classList.add('active');
    });
  });

  // Chat
  elements.chatInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  });

  elements.chatInput.addEventListener('input', () => {
    elements.chatInput.style.height = 'auto';
    elements.chatInput.style.height =
      `${Math.min(elements.chatInput.scrollHeight, 96)}px`;
  });

  document.getElementById('sendBtn').addEventListener('click', sendMessage);

  // View mode buttons
  document.getElementById('viewDual').addEventListener('click', () => setViewMode('dual'));
  document.getElementById('viewSingle').addEventListener('click', () => {
    if (state.focusedSlot !== 'local' &&
        !participantList().some((p) => !p.isLocal)) {
      state.focusedSlot = 'local';
    }
    setViewMode('single-speaker');
  });
  document.getElementById('viewScreen').addEventListener('click', () =>
    setViewMode('screenshare')
  );

  // Slot click to switch focus
  elements.slotLocal.addEventListener('click', () => {
    if (state.viewMode === 'single-speaker') {
      state.focusedSlot = 'local';
      applyViewMode();
    }
  });

  elements.slotRemote.addEventListener('click', () => {
    if (state.viewMode === 'single-speaker' &&
        participantList().some((p) => !p.isLocal)) {
      state.focusedSlot = 'remote';
      applyViewMode();
    }
  });

  // Mic toggle (role-aware)
  elements.toggleMic.addEventListener('click', async () => {
    if (isInstructor) {
      state.micOn = !state.micOn;
      if (state.localAudioTrack) {
        await state.localAudioTrack.setMuted(!state.micOn);
      }
      updateLocalMediaState();
    } else {
      // Student self-mute if already speaking
      if (state.micOn) {
        state.micOn       = false;
        state.micApproved = false;
        if (state.localAudioTrack) await state.localAudioTrack.setMuted(true);
        updateLocalMediaState();
        applyRoleUI();
        return;
      }

      if (!state.micApproved) {
        if (state.micRequested) {
          pushNotification(shell.t('liveRoom.requestSent'), '');
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
        pushNotification(shell.t('liveRoom.requestSent'), '');
      } else {
        state.micOn = !state.micOn;
        if (state.localAudioTrack) {
          await state.localAudioTrack.setMuted(!state.micOn);
        }
        updateLocalMediaState();
      }
    }
  });

  // Cam toggle (admin only)
  elements.toggleCam.addEventListener('click', async () => {
    if (!isInstructor) return;
    state.camOn = !state.camOn;
    if (state.localVideoTrack) {
      await state.localVideoTrack.setMuted(!state.camOn);
    }
    updateLocalMediaState();
  });

  // Screen share
  elements.toggleScreen.addEventListener('click', async () => {
    if (state.screenSharing) await stopScreenShare();
    else await startScreenShare();
  });

  // Raise hand
  elements.raiseHand.addEventListener('click', toggleLocalHand);

  // Quality selector
  elements.qualityBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    elements.qualityWrap.classList.toggle('open');
  });

  document.querySelectorAll('.quality-opt').forEach((btn) => {
    btn.addEventListener('click', async () => {
      elements.qualityWrap.classList.remove('open');
      await applyQuality(btn.dataset.quality);
    });
  });

  // Close quality dropdown on outside click
  document.addEventListener('click', (event) => {
    if (!elements.qualityWrap.contains(event.target)) {
      elements.qualityWrap.classList.remove('open');
    }
  });

  // Leave button
  elements.endBtn.addEventListener('click', async () => {
    if (!window.confirm(shell.t('liveRoom.leaveConfirm'))) return;
    await cleanup();
    window.location.href = 'dashboard.html';
  });

  // Language change
  window.addEventListener('unilearn:language-changed', () => {
    updateSessionCopy();
    renderParticipants();
    renderHands();
    renderSpeakRequests();
  });

  // Keyboard shortcuts
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      if (window.innerWidth <= 768) shell.closeSidebar();
      elements.qualityWrap.classList.remove('open');
    }
  });

  // Cleanup on page unload
  window.addEventListener('beforeunload', () => { cleanup(); });

  // Window resize
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) shell.closeSidebar();
  });

  // ── INIT ──────────────────────────────────────────────────────
  elements.localAvatar.textContent = userName.charAt(0).toUpperCase() || 'S';
  appendSystemMessage(shell.t('liveRoom.sessionStarted'));

  // Set initial quality label
  if (elements.qualityLabel) elements.qualityLabel.textContent = state.currentQuality;
  document.querySelectorAll('.quality-opt').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.quality === state.currentQuality);
  });

  updateSessionCopy();      // also calls applyRoleUI()
  updateViewerCount();
  renderParticipants();
  renderHands();
  renderSpeakRequests();
  updateLocalMediaState();
  updateRemoteMediaState();
  setViewMode('single-speaker');
  startTimer();
  initSocket();
  initAgora();
})();