window.AGORA_APP_ID = "eff8bc824ac7413ea7d0c4ed684809e9";

(() => {
  // ─────────────────────────────────────────────────────────────
  // TRANSLATIONS
  // ─────────────────────────────────────────────────────────────
  const TRANSLATIONS = {
    en: {
      common: {
        openMenu: 'Open menu',
        languageToggleLabel: 'Switch language'
      },
      roles: {
        student:    'Student',
        instructor: 'Instructor',
        admin:      'Admin'
      },
      profile: {
        title:                'Profile settings',
        subtitle:             'Update how your account appears across the platform.',
        avatarHint:           'Visible in the sidebar',
        displayNameLabel:     'Display name',
        displayNamePlaceholder: 'Enter your display name',
        avatarLabel:          'Profile picture',
        uploadAvatar:         'Upload avatar',
        resetAvatar:          'Use initials',
        cancel:               'Cancel',
        save:                 'Save changes',
        logout:               'Logout',
        saved:                'Profile updated successfully.',
        avatarReady:          'Avatar preview ready. Save changes to apply it.',
        avatarInvalid:        'Please choose an image file.',
        avatarReset:          'Avatar reset to initials.'
      },
      liveRoom: {
        pageTitle:           'Live Room - UniLearn',
        liveBadge:           'Live',
        watching:            'watching',
        hostLabel:           'Host',
        cohostLabel:         'Co-host',
        chatTab:             'Chat',
        peopleTab:           'People',
        handsTab:            'Hands',
        requestsTab:         'Requests',
        messagePlaceholder:  'Send a message...',
        noRaisedHands:       'No raised hands',
        noSpeakRequests:     'No speak requests',
        dualViewTitle:       'Dual view',
        singleViewTitle:     'Single-speaker view',
        screenViewTitle:     'Screenshare layout',
        singleSpeakerHint:   'Tap the mini window to switch the focused speaker.',
        screenShareLabel:    'Screen share',
        mic:                 'Mic',
        camera:              'Camera',
        share:               'Share',
        hand:                'Hand',
        leave:               'Leave',
        waiting:             'Waiting...',
        youLabel:            'You',
        sessionStarted:      'Session started',
        connectionReady:     'Connected to the live room.',
        joinedToast:         '{{name}} joined',
        joinedMessage:       '{{name}} joined the session',
        leftMessage:         '{{name}} left the session',
        handRaisedToast:     '{{name}} raised their hand',
        lowerHand:           'Lower',
        leaveConfirm:        'Leave this session?',
        defaultSession:      'Live Session',
        requestToSpeak:      'Request to Speak',
        requestSent:         'Request sent. Waiting for approval...',
        requestApproved:     'Your request was approved. You can speak now.',
        requestDenied:       'Your request was denied.',
        approveBtn:          'Approve',
        denyBtn:             'Deny',
        forceMute:           'Mute',
        speakRequestToast:   '{{name}} requests to speak',
        studentMicLocked:    'Mic locked. Request to speak first.',
        qualityLabel:        'Quality',
        refreshing:          'Refreshing connection...'
      }
    },
    ar: {
      common: {
        openMenu: 'فتح القائمة',
        languageToggleLabel: 'تبديل اللغة'
      },
      roles: {
        student:    'طالب',
        instructor: 'مدرس',
        admin:      'مشرف'
      },
      profile: {
        title:                'إعدادات الملف الشخصي',
        subtitle:             'حدّث طريقة ظهور حسابك في جميع أنحاء المنصة.',
        avatarHint:           'يظهر في الشريط الجانبي',
        displayNameLabel:     'اسم العرض',
        displayNamePlaceholder: 'اكتب اسم العرض',
        avatarLabel:          'الصورة الشخصية',
        uploadAvatar:         'رفع صورة',
        resetAvatar:          'استخدام الأحرف الأولى',
        cancel:               'إلغاء',
        save:                 'حفظ التغييرات',
        logout:               'تسجيل الخروج',
        saved:                'تم تحديث الملف الشخصي بنجاح.',
        avatarReady:          'تم تجهيز معاينة الصورة. احفظ التغييرات لتطبيقها.',
        avatarInvalid:        'الرجاء اختيار ملف صورة.',
        avatarReset:          'تمت إعادة الصورة إلى الأحرف الأولى.'
      },
      liveRoom: {
        pageTitle:           'الغرفة المباشرة - يوني ليرن',
        liveBadge:           'مباشر',
        watching:            'مشاهد',
        hostLabel:           'المضيف',
        cohostLabel:         'المساعد',
        chatTab:             'الدردشة',
        peopleTab:           'الحضور',
        handsTab:            'الأيدي',
        requestsTab:         'طلبات الكلام',
        messagePlaceholder:  'أرسل رسالة...',
        noRaisedHands:       'لا توجد أيادٍ مرفوعة',
        noSpeakRequests:     'لا توجد طلبات كلام',
        dualViewTitle:       'عرض ثنائي',
        singleViewTitle:     'عرض متحدث واحد',
        screenViewTitle:     'تخطيط مشاركة الشاشة',
        singleSpeakerHint:   'اضغط على النافذة الصغيرة لتبديل المتحدث الرئيسي.',
        screenShareLabel:    'مشاركة الشاشة',
        mic:                 'الميكروفون',
        camera:              'الكاميرا',
        share:               'مشاركة',
        hand:                'رفع اليد',
        leave:               'مغادرة',
        waiting:             'بانتظار الانضمام...',
        youLabel:            'أنت',
        sessionStarted:      'بدأت الجلسة',
        connectionReady:     'تم الاتصال بالغرفة المباشرة.',
        joinedToast:         'انضم {{name}}',
        joinedMessage:       'انضم {{name}} إلى الجلسة',
        leftMessage:         'غادر {{name}} الجلسة',
        handRaisedToast:     'رفع {{name}} يده',
        lowerHand:           'خفض',
        leaveConfirm:        'هل تريد مغادرة هذه الجلسة؟',
        defaultSession:      'جلسة مباشرة',
        requestToSpeak:      'طلب الكلام',
        requestSent:         'تم إرسال الطلب. بانتظار الموافقة...',
        requestApproved:     'تمت الموافقة على طلبك. يمكنك الكلام الآن.',
        requestDenied:       'تم رفض طلبك.',
        approveBtn:          'موافقة',
        denyBtn:             'رفض',
        forceMute:           'كتم',
        speakRequestToast:   '{{name}} يطلب الكلام',
        studentMicLocked:    'الميكروفون مقفل. اطلب الكلام أولاً.',
        qualityLabel:        'الجودة',
        refreshing:          'جارٍ تحديث الاتصال...'
      }
    }
  };

  // ─────────────────────────────────────────────────────────────
  // VIDEO QUALITY PRESETS
  // Publisher → setVideoEncoderConfiguration
  // Subscriber → setRemoteVideoStreamType (0=high, 1=low)
  // ─────────────────────────────────────────────────────────────
  const VIDEO_QUALITY_CONFIGS = {
    '360p': { width: 640,  height: 360, frameRate: 15, bitrateMin: 400,  bitrateMax: 800  },
    '480p': { width: 640,  height: 480, frameRate: 15, bitrateMin: 500,  bitrateMax: 1000 },
    '720p': { width: 1280, height: 720, frameRate: 15, bitrateMin: 1130, bitrateMax: 2000 }
  };

  // ─────────────────────────────────────────────────────────────
  // SESSION TITLES (keyed by Agora channel name)
  // ─────────────────────────────────────────────────────────────
  const SESSION_TITLES = {
    'cs-binary-trees':   { en: 'Advanced Algorithms – Binary Trees Deep Dive',     ar: 'الخوارزميات المتقدمة – تعمق في الأشجار الثنائية' },
    'math-linear-algebra': { en: 'Linear Algebra – Eigenvalues Workshop',          ar: 'الجبر الخطي – ورشة القيم الذاتية' },
    'physics-quantum':   { en: 'Quantum Mechanics – Wave Functions Seminar',        ar: 'ميكانيكا الكم – ندوة الدوال الموجية' },
    'db-indexing':       { en: 'Database Systems – Indexing Strategies Review',     ar: 'أنظمة قواعد البيانات – مراجعة استراتيجيات الفهرسة' }
  };

  // ─────────────────────────────────────────────────────────────
  // SESSION CONTEXT
  // ─────────────────────────────────────────────────────────────
  const channel          = new URLSearchParams(window.location.search).get('channel') || 'demo-room';
  const userName         = localStorage.getItem('userName') || 'Student';
  const userRole         = localStorage.getItem('userRole') || 'student';
  const localParticipantId = 'local-self';
  const isInstructor     = userRole === 'instructor' || userRole === 'admin';

  // ─────────────────────────────────────────────────────────────
  // STATE
  // ─────────────────────────────────────────────────────────────
  const state = {
    participants:     new Map(),
    raisedHands:      [],
    speakRequests:    [],
    approvedSpeakers: new Set(),
    socket:           null,
    socketConnected:  false,
    agoraClient:      null,
    localAudioTrack:  null,
    localVideoTrack:  null,
    remoteVideoActive: false,   // true only when a remote user is publishing video
    screenTrack:      null,
    micOn:            false,    // hardware OFF by default
    camOn:            false,    // hardware OFF by default
    micApproved:      false,    // student: approved by admin
    micRequested:     false,    // student: pending request
    screenSharing:    false,
    handRaised:       false,
    timerSeconds:     0,
    timerInterval:    null,
    viewMode:         'single-speaker',
    focusedSlot:      'local',
    currentQuality:   '720p'
  };

  // ─────────────────────────────────────────────────────────────
  // SHELL INIT
  // ─────────────────────────────────────────────────────────────
  const shell = window.UniLearnShell.init({
    translations:            TRANSLATIONS,
    defaultProfile:          { name: userName, role: userRole },
    defaultLanguage:         'ar',
    logoutPath:              'login.html',
    sidebarSelector:         '#sidebar',
    closeSidebarOnLinkClick: false
  });

  // ─────────────────────────────────────────────────────────────
  // DOM REFERENCES
  // ─────────────────────────────────────────────────────────────
  const el = {
    videoStage:        document.getElementById('videoStage'),
    videoGrid:         document.getElementById('videoGrid'),
    screenShareLabel:  document.getElementById('screenShareLabel'),
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
    notifStack:        document.getElementById('notifStack'),
    viewerCount:       document.getElementById('viewerCount'),
    timer:             document.getElementById('sessionTimer'),
    sessionTitle:      document.getElementById('sessionTitle'),
    singleSpeakerHint: document.getElementById('singleSpeakerHint'),
    toggleMic:         document.getElementById('toggleMic'),
    toggleCam:         document.getElementById('toggleCam'),
    toggleScreen:      document.getElementById('toggleScreen'),
    raiseHand:         document.getElementById('raiseHandBtn'),
    endBtn:            document.getElementById('endBtn'),
    refreshBtn:        document.getElementById('refreshBtn'),
    slotLocal:         document.getElementById('slot-local'),
    slotRemote:        document.getElementById('slot-remote'),
    micBtnLabel:       document.getElementById('micBtnLabel'),
    qualityBtn:        document.getElementById('qualityBtn'),
    qualityWrap:       document.getElementById('qualityWrap'),
    qualityLabel:      document.getElementById('qualityLabel'),
    requestsTabBtn:    document.getElementById('requestsTabBtn')
  };

  // ─────────────────────────────────────────────────────────────
  // HELPERS
  // ─────────────────────────────────────────────────────────────
  function esc(v) { return window.UniLearnShell.escapeHtml(v); }

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

  // ─────────────────────────────────────────────────────────────
  // ROLE-BASED UI
  // ─────────────────────────────────────────────────────────────
  function applyRoleUI() {
    if (isInstructor) {
      // Admin: camera visible, share visible on desktop (CSS hides on mobile),
      //        raise-hand hidden, requests tab visible
      el.toggleCam.style.display         = 'inline-flex';
      el.toggleScreen.style.display      = 'inline-flex'; // CSS .hide-mobile still hides on mobile
      el.raiseHand.style.display         = 'none';
      el.requestsTabBtn.style.display    = 'inline-flex';
      el.micBtnLabel.textContent         = shell.t('liveRoom.mic');
    } else {
      // Student: camera hidden, share always hidden, raise-hand visible, requests tab hidden
      el.toggleCam.style.display         = 'none';
      el.toggleScreen.style.display      = 'none';
      el.raiseHand.style.display         = 'inline-flex';
      el.requestsTabBtn.style.display    = 'none';
      el.micBtnLabel.textContent         = state.micRequested
        ? shell.t('liveRoom.requestSent').split('.')[0]
        : shell.t('liveRoom.requestToSpeak');
    }
  }

  // ─────────────────────────────────────────────────────────────
  // SESSION COPY
  // ─────────────────────────────────────────────────────────────
  function updateSessionCopy() {
    el.sessionTitle.textContent =
      getSessionTitle()[shell.language] || getSessionTitle().en;
    el.localName.textContent = userName || shell.t('liveRoom.youLabel');
    applyRoleUI();
    syncRemoteSlot();
  }

  function syncRemoteSlot() {
    const remote = participantList().find((p) => !p.isLocal);
    el.remoteName.textContent  = remote ? remote.name : shell.t('liveRoom.waiting');
    el.remoteAvatar.textContent = remote ? remote.name.charAt(0).toUpperCase() : '?';

    // If nobody is in the remote slot and we're in single-speaker mode,
    // focus locally so there's no empty black stage.
    if (!remote && state.viewMode === 'single-speaker') {
      state.focusedSlot = 'local';
      applyViewMode();
    }
  }

  function updateViewerCount() {
    el.viewerCount.textContent = String(participantList().length);
  }

  // ─────────────────────────────────────────────────────────────
  // PARTICIPANTS
  // ─────────────────────────────────────────────────────────────
  function renderParticipants() {
    el.participantsList.innerHTML = participantList().map((p) => {
      const roleLabel    = shell.t(`roles.${p.role}`) || p.role;
      const hasHand      = state.raisedHands.some((h) => h.user.name === p.name);
      const isApproved   = state.approvedSpeakers.has(p.id);
      const showMuteBtn  = isInstructor && !p.isLocal && isApproved;

      return `
        <div class="participant-item" data-pid="${p.id}">
          <div class="p-avatar ${p.role !== 'student' ? 'instructor-avatar' : ''}">
            ${esc(p.name.charAt(0).toUpperCase())}
          </div>
          <div class="p-info">
            <div class="p-name">${esc(p.name)}</div>
            <div class="p-role">${esc(roleLabel)}</div>
          </div>
          <div class="p-status">
            ${hasHand ? '<span class="hand-mark">Hand</span>' : ''}
            ${showMuteBtn
              ? `<button class="mute-participant-btn" type="button"
                   data-mute-id="${p.id}"
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

  // ─────────────────────────────────────────────────────────────
  // RAISED HANDS
  // ─────────────────────────────────────────────────────────────
  function renderHands() {
    const count = state.raisedHands.length;
    el.handsCount.textContent = String(count);
    el.handsCount.classList.toggle('visible', count > 0);
    el.handsEmpty.style.display = count ? 'none' : 'flex';
    el.handsPanel.querySelectorAll('.hand-queue-item').forEach((n) => n.remove());

    state.raisedHands.forEach(({ id, user }) => {
      const row = document.createElement('div');
      row.className = 'hand-queue-item';
      row.innerHTML = `
        <span class="hand-queue-name">${esc(user.name)}</span>
        ${isInstructor
          ? `<button class="lower-btn" type="button" data-hand-id="${id}">
               ${shell.t('liveRoom.lowerHand')}
             </button>`
          : ''}`;

      if (isInstructor) {
        row.querySelector('[data-hand-id]')?.addEventListener('click', () => {
          removeRaisedHand(id);
          if (id === localParticipantId) {
            state.handRaised = false;
            el.raiseHand.classList.remove('raised');
          }
          if (state.socketConnected) {
            state.socket.emit('instructor-signal', {
              roomId: channel, type: 'lower-hand', targetId: id, data: {}
            });
          }
          renderHands();
          renderParticipants();
        });
      }

      el.handsPanel.appendChild(row);
    });
  }

  function addOrUpdateRaisedHand(id, user) {
    const idx = state.raisedHands.findIndex(
      (h) => h.id === id || h.user.name === user.name
    );
    if (idx >= 0) state.raisedHands[idx] = { id, user };
    else state.raisedHands.push({ id, user });
  }

  function removeRaisedHand(id) {
    state.raisedHands = state.raisedHands.filter((h) => h.id !== id);
  }

  // ─────────────────────────────────────────────────────────────
  // SPEAK REQUESTS (admin view)
  // ─────────────────────────────────────────────────────────────
  function renderSpeakRequests() {
    const count = state.speakRequests.length;
    el.requestsCount.textContent = String(count);
    el.requestsCount.classList.toggle('visible', count > 0);
    el.requestsEmpty.style.display = count ? 'none' : 'flex';
    el.requestsPanel.querySelectorAll('.request-item').forEach((n) => n.remove());

    if (!isInstructor) return;

    state.speakRequests.forEach(({ id, user }) => {
      const row = document.createElement('div');
      row.className = 'request-item';
      row.innerHTML = `
        <span class="request-name">${esc(user.name)}</span>
        <div class="request-actions">
          <button class="approve-btn" type="button" data-approve="${id}">
            ${shell.t('liveRoom.approveBtn')}
          </button>
          <button class="deny-btn" type="button" data-deny="${id}">
            ${shell.t('liveRoom.denyBtn')}
          </button>
        </div>`;
      row.querySelector('[data-approve]').addEventListener('click', () => approveSpeakRequest(id, user));
      row.querySelector('[data-deny]').addEventListener('click',   () => denySpeakRequest(id, user));
      el.requestsPanel.appendChild(row);
    });
  }

  function approveSpeakRequest(id, user) {
    state.speakRequests = state.speakRequests.filter((r) => r.id !== id);
    state.approvedSpeakers.add(id);
    if (state.socketConnected) {
      state.socket.emit('instructor-signal', {
        roomId: channel, type: 'speak-approved', targetId: id, data: { user }
      });
    }
    renderSpeakRequests();
    renderParticipants();
    pushNotification(`${esc(user.name)}: approved`, 'notif-user');
  }

  function denySpeakRequest(id, user) {
    state.speakRequests = state.speakRequests.filter((r) => r.id !== id);
    if (state.socketConnected) {
      state.socket.emit('instructor-signal', {
        roomId: channel, type: 'speak-denied', targetId: id, data: { user }
      });
    }
    renderSpeakRequests();
  }

  function forceMuteParticipant(id, user) {
    state.approvedSpeakers.delete(id);
    if (state.socketConnected) {
      state.socket.emit('instructor-signal', {
        roomId: channel, type: 'force-mute', targetId: id, data: { user }
      });
    }
    renderParticipants();
    pushNotification(`${esc(user.name)}: muted`, '');
  }

  // ─────────────────────────────────────────────────────────────
  // NOTIFICATIONS / CHAT
  // ─────────────────────────────────────────────────────────────
  function pushNotification(text, className) {
    const item = document.createElement('div');
    item.className = `notif ${className || ''}`.trim();
    item.textContent = text;
    el.notifStack.appendChild(item);
    setTimeout(() => {
      item.classList.add('fade-out');
      setTimeout(() => item.remove(), 300);
    }, 3200);
  }

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
        <span class="msg-author ${user.role !== 'student' ? 'instructor' : ''}">
          ${esc(user.name)}
        </span>
        <span class="msg-time">${esc(timestamp || '')}</span>
      </div>
      <div class="msg-text">${esc(message)}</div>`;
    el.chatMessages.appendChild(row);
    el.chatMessages.scrollTop = el.chatMessages.scrollHeight;
  }

  function sendMessage() {
    const message = el.chatInput.value.trim();
    if (!message) return;
    const locale = shell.language === 'ar' ? 'ar-EG' : 'en-US';
    const timestamp = new Date().toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' });
    if (state.socketConnected) {
      state.socket.emit('chat-message', {
        roomId: channel, message,
        user: { name: userName, role: userRole }, timestamp
      });
    } else {
      appendMessage({ name: userName, role: userRole }, message, timestamp);
    }
    el.chatInput.value = '';
    el.chatInput.style.height = 'auto';
  }

  // ─────────────────────────────────────────────────────────────
  // LOCAL MEDIA STATE
  // ─────────────────────────────────────────────────────────────
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

  // ─────────────────────────────────────────────────────────────
  // VIEW MODE
  // Only render PIP when a remote user is ACTUALLY publishing video.
  // Empty passive-listener slots are always hidden.
  // ─────────────────────────────────────────────────────────────
  function applyViewMode() {
    const hasRemote          = participantList().some((p) => !p.isLocal);
    const remoteIsPublishing = hasRemote && state.remoteVideoActive;

    el.videoGrid.classList.remove('dual', 'single-speaker', 'screenshare');
    el.slotLocal.classList.remove('focused', 'pip', 'hidden');
    el.slotRemote.classList.remove('focused', 'pip', 'hidden');

    if (state.viewMode === 'single-speaker') {
      el.videoGrid.classList.add('single-speaker');
      el.videoStage.classList.add('single-mode');

      const focusRemote   = state.focusedSlot === 'remote' && remoteIsPublishing;
      const mainSlot      = focusRemote ? el.slotRemote : el.slotLocal;
      const secondarySlot = focusRemote ? el.slotLocal  : el.slotRemote;

      mainSlot.classList.add('focused');

      if (remoteIsPublishing) {
        secondarySlot.classList.add('pip');
      } else {
        // No active broadcast — hide the empty slot entirely
        secondarySlot.classList.add('hidden');
      }
    } else {
      el.videoStage.classList.remove('single-mode');
      el.videoGrid.classList.add(state.viewMode);
      // In dual/screenshare: hide remote slot if nobody is publishing
      if (!remoteIsPublishing) {
        el.slotRemote.classList.add('hidden');
      }
    }

    document.getElementById('viewDual').classList.toggle('active',   state.viewMode === 'dual');
    document.getElementById('viewSingle').classList.toggle('active', state.viewMode === 'single-speaker');
    document.getElementById('viewScreen').classList.toggle('active', state.viewMode === 'screenshare');
  }

  function setViewMode(mode) {
    state.viewMode = mode;
    applyViewMode();
  }

  // ─────────────────────────────────────────────────────────────
  // TIMER
  // ─────────────────────────────────────────────────────────────
  function startTimer() {
    if (state.timerInterval) return;
    state.timerInterval = setInterval(() => {
      state.timerSeconds++;
      const h = String(Math.floor(state.timerSeconds / 3600)).padStart(2, '0');
      const m = String(Math.floor((state.timerSeconds % 3600) / 60)).padStart(2, '0');
      const s = String(state.timerSeconds % 60).padStart(2, '0');
      el.timer.textContent = `${h}:${m}:${s}`;
    }, 1000);
  }

  // ─────────────────────────────────────────────────────────────
  // RAISE HAND
  // ─────────────────────────────────────────────────────────────
  function toggleLocalHand() {
    state.handRaised = !state.handRaised;
    el.raiseHand.classList.toggle('raised', state.handRaised);

    if (state.handRaised) {
      addOrUpdateRaisedHand(localParticipantId, { name: userName, role: userRole });
      pushNotification(shell.t('liveRoom.handRaisedToast', { name: userName }), 'notif-hand');
    } else {
      removeRaisedHand(localParticipantId);
    }

    if (state.socketConnected) {
      state.socket.emit('raise-hand', { roomId: channel, user: { name: userName, role: userRole } });
    }

    renderHands();
    renderParticipants();
  }

  // ─────────────────────────────────────────────────────────────
  // VIDEO QUALITY
  // ─────────────────────────────────────────────────────────────
  async function applyQuality(quality) {
    state.currentQuality = quality;
    if (el.qualityLabel) el.qualityLabel.textContent = quality;

    document.querySelectorAll('.quality-opt').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.quality === quality);
    });

    const config = VIDEO_QUALITY_CONFIGS[quality];

    if (isInstructor && state.localVideoTrack) {
      // Publisher: update the encoder configuration live
      try {
        await state.localVideoTrack.setEncoderConfiguration(config);
      } catch (err) {
        console.warn('[Quality] setEncoderConfiguration failed:', err);
      }
    }

    if (!isInstructor && state.agoraClient) {
      // Subscriber: switch between high (0) and low (1) stream
      const streamType = quality === '360p' ? 1 : 0;
      try {
        state.agoraClient.remoteUsers.forEach((remoteUser) => {
          state.agoraClient.setRemoteVideoStreamType(remoteUser, streamType);
        });
      } catch (err) {
        console.warn('[Quality] setRemoteVideoStreamType failed:', err);
      }
    }
  }

  // ─────────────────────────────────────────────────────────────
  // AGORA INIT
  // ─────────────────────────────────────────────────────────────
  async function initAgora() {
    if (typeof AgoraRTC === 'undefined' || !window.AGORA_APP_ID) return;

    try {
      state.agoraClient = AgoraRTC.createClient({ mode: 'rtc', codec: 'vp8' });

      // Subscribers: enable dual stream so quality switching works
      if (!isInstructor) {
        try { await state.agoraClient.enableDualStream(); } catch (_) {}
      }

      // ── Remote user publishes ──────────────────────────────
      state.agoraClient.on('user-published', async (remoteUser, mediaType) => {
        await state.agoraClient.subscribe(remoteUser, mediaType);

        if (mediaType === 'video') {
          state.remoteVideoActive = true;
          updateRemoteMediaState();
          remoteUser.videoTrack.play('slot-remote-media');

          // Apply current quality preference for subscriber
          if (!isInstructor) {
            const streamType = state.currentQuality === '360p' ? 1 : 0;
            try { state.agoraClient.setRemoteVideoStreamType(remoteUser, streamType); } catch (_) {}
          }

          if (state.viewMode === 'single-speaker') { state.focusedSlot = 'remote'; }
          applyViewMode();
        }

        if (mediaType === 'audio') {
          remoteUser.audioTrack.play();
        }
      });

      // ── Remote user unpublishes ────────────────────────────
      state.agoraClient.on('user-unpublished', (remoteUser, mediaType) => {
        if (mediaType === 'video') {
          state.remoteVideoActive = false;
          updateRemoteMediaState();
          applyViewMode();       // hides empty PIP immediately
        }
      });

      // ── Token / join ──────────────────────────────────────
      const response = await fetch('/api/live/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer uni-learn-secure-123'
        },
        body: JSON.stringify({ channelName: channel, uid: 0, role: 'publisher' })
      });

      if (!response.ok) {
        console.warn('[Agora] Token fetch failed:', response.status);
        return;
      }

      const { token, appId } = await response.json();
      await state.agoraClient.join(appId, channel, token, null);

      // ── Create tracks with landscape (16:9) camera config ──
      state.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
      state.localVideoTrack = await AgoraRTC.createCameraVideoTrack({
        encoderConfig: VIDEO_QUALITY_CONFIGS[state.currentQuality]  // 1280×720 at 720p
      });

      // Hardware OFF by default for ALL users
      await state.localAudioTrack.setMuted(true);
      await state.localVideoTrack.setMuted(true);

      // Admin: show their own camera preview even though it's muted
      if (isInstructor) {
        try { state.localVideoTrack.play('slot-local-media'); } catch (_) {}
      }

      updateLocalMediaState();
      await state.agoraClient.publish([state.localAudioTrack, state.localVideoTrack]);

    } catch (err) {
      console.warn('[Agora] Initialization failed:', err);
    }
  }

  // ─────────────────────────────────────────────────────────────
  // SCREEN SHARE (desktop / admin only)
  // ─────────────────────────────────────────────────────────────
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
      const activeTrack = Array.isArray(state.screenTrack) ? state.screenTrack[0] : state.screenTrack;

      if (state.localVideoTrack) { await state.agoraClient.unpublish(state.localVideoTrack); }
      await state.agoraClient.publish(activeTrack);
      activeTrack.on?.('track-ended', stopScreenShare);
      state.screenSharing = true;
      setViewMode('screenshare');
    } catch (err) {
      console.warn('[ScreenShare] Failed:', err);
      state.screenSharing = false;
      el.screenShareLabel.hidden = true;
      el.toggleScreen.classList.remove('active');
    }
  }

  async function stopScreenShare() {
    if (!state.screenSharing) return;
    if (state.agoraClient && state.screenTrack) {
      const activeTrack = Array.isArray(state.screenTrack) ? state.screenTrack[0] : state.screenTrack;
      try {
        await state.agoraClient.unpublish(activeTrack);
        activeTrack.close();
        if (state.localVideoTrack) { await state.agoraClient.publish(state.localVideoTrack); }
      } catch (err) { console.warn('[ScreenShare] Stop failed:', err); }
    }
    state.screenTrack = null;
    state.screenSharing = false;
    el.screenShareLabel.hidden = true;
    el.toggleScreen.classList.remove('active');
    setViewMode('single-speaker');
  }

  // ─────────────────────────────────────────────────────────────
  // SOCKET
  // ─────────────────────────────────────────────────────────────
  function initSocket() {
    if (typeof io !== 'function') return;

    state.socket = io(window.location.origin);

    state.socket.on('connect', () => {
      state.socketConnected = true;
      state.socket.emit('join-room', { roomId: channel, user: { name: userName, role: userRole } });
      pushNotification(shell.t('liveRoom.connectionReady'), 'notif-user');
    });

    state.socket.on('disconnect', () => { state.socketConnected = false; });

    state.socket.on('room-users', (users) => {
      state.participants.clear();
      users.forEach((u) => {
        if (u.name !== userName || u.role !== userRole) {
          state.participants.set(u.id, u);
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
      pushNotification(shell.t('liveRoom.joinedToast', { name: user.name }), 'notif-user');
      appendSystemMessage(shell.t('liveRoom.joinedMessage', { name: user.name }));
    });

    state.socket.on('user-left', ({ id }) => {
      const user = state.participants.get(id);
      if (!user) return;
      state.participants.delete(id);
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
      pushNotification(shell.t('liveRoom.handRaisedToast', { name: user.name }), 'notif-hand');
    });

    state.socket.on('hand-lowered', ({ id }) => {
      removeRaisedHand(id);
      renderHands();
      renderParticipants();
    });

    state.socket.on('raised-hands', (hands) => {
      state.raisedHands = hands.map((h) => ({ id: h.id, user: h.user }));
      renderHands();
      renderParticipants();
    });

    // ── Student receives admin signals ─────────────────────────
    state.socket.on('instructor-signal', ({ type, targetId }) => {
      const isMe = state.socket && targetId === state.socket.id;

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

    // ── Admin receives speak requests from students ────────────
    state.socket.on('speak-request', ({ id, user }) => {
      if (!isInstructor) return;
      if (state.speakRequests.find((r) => r.id === id)) return;
      state.speakRequests.push({ id, user });
      renderSpeakRequests();
      pushNotification(shell.t('liveRoom.speakRequestToast', { name: user.name }), 'notif-hand');
    });
  }

  // ─────────────────────────────────────────────────────────────
  // CLEANUP
  // ─────────────────────────────────────────────────────────────
  async function cleanup() {
    if (state.timerInterval) { clearInterval(state.timerInterval); state.timerInterval = null; }
    try { await stopScreenShare(); } catch (_) {}
    state.localAudioTrack?.close();
    state.localVideoTrack?.close();
    state.socket?.disconnect();
    if (state.agoraClient) {
      try { await state.agoraClient.leave(); } catch (_) {}
    }
  }

  // ─────────────────────────────────────────────────────────────
  // EVENT LISTENERS
  // ─────────────────────────────────────────────────────────────

  // Sidebar tabs
  document.querySelectorAll('.tab-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach((b) => b.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach((p) => p.classList.remove('active'));
      btn.classList.add('active');
      const panel = document.getElementById(`tab-${btn.dataset.tab}`);
      if (panel) panel.classList.add('active');
    });
  });

  // Chat
  el.chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  });
  el.chatInput.addEventListener('input', () => {
    el.chatInput.style.height = 'auto';
    el.chatInput.style.height = `${Math.min(el.chatInput.scrollHeight, 96)}px`;
  });
  document.getElementById('sendBtn').addEventListener('click', sendMessage);

  // View mode
  document.getElementById('viewSingle').addEventListener('click', () => {
    if (state.focusedSlot !== 'local' && !participantList().some((p) => !p.isLocal)) {
      state.focusedSlot = 'local';
    }
    setViewMode('single-speaker');
  });
  document.getElementById('viewDual').addEventListener('click',   () => setViewMode('dual'));
  document.getElementById('viewScreen').addEventListener('click', () => setViewMode('screenshare'));

  // Slot focus switching (single-speaker mode)
  el.slotLocal.addEventListener('click', () => {
    if (state.viewMode === 'single-speaker') { state.focusedSlot = 'local'; applyViewMode(); }
  });
  el.slotRemote.addEventListener('click', () => {
    if (state.viewMode === 'single-speaker' && participantList().some((p) => !p.isLocal)) {
      state.focusedSlot = 'remote';
      applyViewMode();
    }
  });

  // Mic (role-aware)
  el.toggleMic.addEventListener('click', async () => {
    if (isInstructor) {
      state.micOn = !state.micOn;
      if (state.localAudioTrack) await state.localAudioTrack.setMuted(!state.micOn);
      updateLocalMediaState();
    } else {
      // Student: self-mute if already unmuted
      if (state.micOn) {
        state.micOn       = false;
        state.micApproved = false;
        if (state.localAudioTrack) await state.localAudioTrack.setMuted(true);
        updateLocalMediaState();
        applyRoleUI();
        return;
      }
      // Student: request or unmute if approved
      if (!state.micApproved) {
        if (state.micRequested) {
          pushNotification(shell.t('liveRoom.requestSent'), '');
          return;
        }
        state.micRequested = true;
        applyRoleUI();
        if (state.socketConnected) {
          state.socket.emit('speak-request', {
            roomId: channel, user: { name: userName, role: userRole }
          });
        }
        pushNotification(shell.t('liveRoom.requestSent'), '');
      } else {
        state.micOn = !state.micOn;
        if (state.localAudioTrack) await state.localAudioTrack.setMuted(!state.micOn);
        updateLocalMediaState();
      }
    }
  });

  // Camera (admin only — students' button is hidden, guard anyway)
  el.toggleCam.addEventListener('click', async () => {
    if (!isInstructor) return;
    state.camOn = !state.camOn;
    if (state.localVideoTrack) await state.localVideoTrack.setMuted(!state.camOn);
    updateLocalMediaState();
  });

  // Screen share (admin only on desktop; hidden on mobile via CSS)
  el.toggleScreen.addEventListener('click', async () => {
    if (!isInstructor) return;
    if (state.screenSharing) await stopScreenShare();
    else await startScreenShare();
  });

  // Raise hand (students only)
  el.raiseHand.addEventListener('click', toggleLocalHand);

  // Quality selector
  el.qualityBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    el.qualityWrap.classList.toggle('open');
  });
  document.querySelectorAll('.quality-opt').forEach((btn) => {
    btn.addEventListener('click', async () => {
      el.qualityWrap.classList.remove('open');
      await applyQuality(btn.dataset.quality);
    });
  });

  // Refresh button — reconnect socket / Agora if disconnected
  el.refreshBtn.addEventListener('click', () => {
    pushNotification(shell.t('liveRoom.refreshing'), 'notif-user');
    if (state.socket && !state.socketConnected) { state.socket.connect(); }
  });

  // Leave
  el.endBtn.addEventListener('click', async () => {
    if (!window.confirm(shell.t('liveRoom.leaveConfirm'))) return;
    await cleanup();
    window.location.href = 'dashboard.html';
  });

  // Close quality dropdown on outside click
  document.addEventListener('click', (e) => {
    if (!el.qualityWrap.contains(e.target)) {
      el.qualityWrap.classList.remove('open');
    }
  });

  // Keyboard
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      el.qualityWrap.classList.remove('open');
      if (window.innerWidth <= 768) shell.closeSidebar();
    }
  });

  // Language change
  window.addEventListener('unilearn:language-changed', () => {
    updateSessionCopy();   // also calls applyRoleUI
    renderParticipants();
    renderHands();
    renderSpeakRequests();
  });

  // Resize
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) shell.closeSidebar();
  });

  // Cleanup on unload
  window.addEventListener('beforeunload', () => { cleanup(); });

  // ─────────────────────────────────────────────────────────────
  // INIT
  // ─────────────────────────────────────────────────────────────
  el.localAvatar.textContent = (userName.charAt(0) || 'S').toUpperCase();

  // Set quality label and mark active option
  if (el.qualityLabel) el.qualityLabel.textContent = state.currentQuality;
  document.querySelectorAll('.quality-opt').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.quality === state.currentQuality);
  });

  appendSystemMessage(shell.t('liveRoom.sessionStarted'));
  updateSessionCopy();        // sets title, calls applyRoleUI(), syncRemoteSlot()
  updateViewerCount();
  renderParticipants();
  renderHands();
  renderSpeakRequests();
  updateLocalMediaState();
  updateRemoteMediaState();
  setViewMode('single-speaker');   // single-camera default, empty PIP hidden
  startTimer();
  initSocket();
  initAgora();

})();d