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
        title:                  'Profile settings',
        subtitle:               'Update how your account appears across the platform.',
        avatarHint:             'Visible in the sidebar',
        displayNameLabel:       'Display name',
        displayNamePlaceholder: 'Enter your display name',
        avatarLabel:            'Profile picture',
        uploadAvatar:           'Upload avatar',
        resetAvatar:            'Use initials',
        cancel:                 'Cancel',
        save:                   'Save changes',
        logout:                 'Logout',
        saved:                  'Profile updated successfully.',
        avatarReady:            'Avatar preview ready. Save changes to apply it.',
        avatarInvalid:          'Please choose an image file.',
        avatarReset:            'Avatar reset to initials.'
      },
      liveRoom: {
        pageTitle:          'Live Room - UniLearn',
        liveBadge:          'Live',
        watching:           'watching',
        hostLabel:          'Host',
        cohostLabel:        'Co-host',
        chatTab:            'Chat',
        peopleTab:          'People',
        handsTab:           'Hands',
        requestsTab:        'Requests',
        messagePlaceholder: 'Send a message...',
        noRaisedHands:      'No raised hands',
        noSpeakRequests:    'No speak requests',
        screenShareLabel:   'Screen share',
        mic:                'Mic',
        camera:             'Camera',
        share:              'Share',
        hand:               'Hand',
        leave:              'Leave',
        waiting:            'Waiting...',
        youLabel:           'You',
        sessionStarted:     'Session started',
        connectionReady:    'Connected to the live room.',
        joinedToast:        '{{name}} joined',
        joinedMessage:      '{{name}} joined the session',
        leftMessage:        '{{name}} left the session',
        handRaisedToast:    '{{name}} raised their hand',
        lowerHand:          'Lower',
        leaveConfirm:       'Leave this session?',
        defaultSession:     'Live Session',
        requestToSpeak:     'Request to Speak',
        requestSent:        'Request sent. Waiting for approval...',
        requestApproved:    'Your request was approved. You can speak now.',
        requestDenied:      'Your request was denied.',
        approveBtn:         'Approve',
        denyBtn:            'Deny',
        forceMute:          'Mute',
        speakRequestToast:  '{{name}} requests to speak',
        studentMicLocked:   'Mic locked. Request to speak first.',
        qualityLabel:       'Quality',
        refreshing:         'Refreshing connection...',
        singleSpeakerHint:  'Admin is broadcasting live.'
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
        title:                  'إعدادات الملف الشخصي',
        subtitle:               'حدّث طريقة ظهور حسابك في جميع أنحاء المنصة.',
        avatarHint:             'يظهر في الشريط الجانبي',
        displayNameLabel:       'اسم العرض',
        displayNamePlaceholder: 'اكتب اسم العرض',
        avatarLabel:            'الصورة الشخصية',
        uploadAvatar:           'رفع صورة',
        resetAvatar:            'استخدام الأحرف الأولى',
        cancel:                 'إلغاء',
        save:                   'حفظ التغييرات',
        logout:                 'تسجيل الخروج',
        saved:                  'تم تحديث الملف الشخصي بنجاح.',
        avatarReady:            'تم تجهيز معاينة الصورة. احفظ التغييرات لتطبيقها.',
        avatarInvalid:          'الرجاء اختيار ملف صورة.',
        avatarReset:            'تمت إعادة الصورة إلى الأحرف الأولى.'
      },
      liveRoom: {
        pageTitle:          'الغرفة المباشرة - يوني ليرن',
        liveBadge:          'مباشر',
        watching:           'مشاهد',
        hostLabel:          'المضيف',
        cohostLabel:        'المساعد',
        chatTab:            'الدردشة',
        peopleTab:          'الحضور',
        handsTab:           'الأيدي',
        requestsTab:        'طلبات الكلام',
        messagePlaceholder: 'أرسل رسالة...',
        noRaisedHands:      'لا توجد أيادٍ مرفوعة',
        noSpeakRequests:    'لا توجد طلبات كلام',
        screenShareLabel:   'مشاركة الشاشة',
        mic:                'الميكروفون',
        camera:             'الكاميرا',
        share:              'مشاركة',
        hand:               'رفع اليد',
        leave:              'مغادرة',
        waiting:            'بانتظار الانضمام...',
        youLabel:           'أنت',
        sessionStarted:     'بدأت الجلسة',
        connectionReady:    'تم الاتصال بالغرفة المباشرة.',
        joinedToast:        'انضم {{name}}',
        joinedMessage:      'انضم {{name}} إلى الجلسة',
        leftMessage:        'غادر {{name}} الجلسة',
        handRaisedToast:    'رفع {{name}} يده',
        lowerHand:          'خفض',
        leaveConfirm:       'هل تريد مغادرة هذه الجلسة؟',
        defaultSession:     'جلسة مباشرة',
        requestToSpeak:     'طلب الكلام',
        requestSent:        'تم إرسال الطلب. بانتظار الموافقة...',
        requestApproved:    'تمت الموافقة على طلبك. يمكنك الكلام الآن.',
        requestDenied:      'تم رفض طلبك.',
        approveBtn:         'موافقة',
        denyBtn:            'رفض',
        forceMute:          'كتم',
        speakRequestToast:  '{{name}} يطلب الكلام',
        studentMicLocked:   'الميكروفون مقفل. اطلب الكلام أولاً.',
        qualityLabel:       'الجودة',
        refreshing:         'جارٍ تحديث الاتصال...',
        singleSpeakerHint:  'المضيف يبث الآن مباشرة.'
      }
    }
  };

  // ─────────────────────────────────────────────────────────────
  // VIDEO QUALITY PRESETS
  // ─────────────────────────────────────────────────────────────
  const VIDEO_QUALITY_CONFIGS = {
    '360p': { width: 640,  height: 360, frameRate: 15, bitrateMin: 400,  bitrateMax: 800  },
    '480p': { width: 640,  height: 480, frameRate: 15, bitrateMin: 500,  bitrateMax: 1000 },
    '720p': { width: 1280, height: 720, frameRate: 15, bitrateMin: 1130, bitrateMax: 2000 }
  };

  // ─────────────────────────────────────────────────────────────
  // SESSION TITLES
  // ─────────────────────────────────────────────────────────────
  const SESSION_TITLES = {
    'cs-binary-trees':     { en: 'Advanced Algorithms – Binary Trees Deep Dive',  ar: 'الخوارزميات المتقدمة – تعمق في الأشجار الثنائية' },
    'math-linear-algebra': { en: 'Linear Algebra – Eigenvalues Workshop',         ar: 'الجبر الخطي – ورشة القيم الذاتية' },
    'physics-quantum':     { en: 'Quantum Mechanics – Wave Functions Seminar',    ar: 'ميكانيكا الكم – ندوة الدوال الموجية' },
    'db-indexing':         { en: 'Database Systems – Indexing Strategies Review', ar: 'أنظمة قواعد البيانات – مراجعة استراتيجيات الفهرسة' }
  };

  // ─────────────────────────────────────────────────────────────
  // SESSION CONTEXT
  // ─────────────────────────────────────────────────────────────
  const channel            = new URLSearchParams(window.location.search).get('channel') || 'demo-room';
  const userName           = localStorage.getItem('userName') || 'Student';
  const userRole           = localStorage.getItem('userRole') || 'student';
  const localParticipantId = 'local-self';
  const isInstructor       = userRole === 'instructor' || userRole === 'admin';

  // ─────────────────────────────────────────────────────────────
  // STATE
  // ─────────────────────────────────────────────────────────────
  const state = {
    participants:      new Map(),
    raisedHands:       [],
    speakRequests:     [],
    approvedSpeakers:  new Set(),
    socket:            null,
    socketConnected:   false,
    agoraClient:       null,
    localAudioTrack:   null,
    localVideoTrack:   null,
    screenTrack:       null,
    micOn:             false,
    camOn:             false,
    micApproved:       false,
    micRequested:      false,
    screenSharing:     false,
    handRaised:        false,
    timerSeconds:      0,
    timerInterval:     null,
    currentQuality:    '720p',
    remoteVideoActive: false
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
    // Local slot (admin's own camera)
    slotLocal:         document.getElementById('slot-local'),
    slotLocalMedia:    document.getElementById('slot-local-media'),
    localAvatar:       document.getElementById('localAvatar'),
    localName:         document.getElementById('localName'),
    localMicIcon:      document.getElementById('localMicIcon'),
    // Remote slot (admin's broadcast as seen by viewers)
    slotRemote:        document.getElementById('slot-remote'),
    slotRemoteMedia:   document.getElementById('slot-remote-media'),
    remoteAvatar:      document.getElementById('remoteAvatar'),
    remoteName:        document.getElementById('remoteName'),
    remoteMicIcon:     document.getElementById('remoteMicIcon'),
    // UI
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
  // SLOT VISIBILITY HELPERS
  // ─────────────────────────────────────────────────────────────
  function showLocalSlotOnly() {
    el.slotLocal.style.display  = '';       // visible
    el.slotRemote.style.display = 'none';   // hidden
  }

  function showRemoteSlotOnly() {
    el.slotLocal.style.display  = 'none';   // hidden
    el.slotRemote.style.display = '';       // visible
  }

  // ─────────────────────────────────────────────────────────────
  // ROLE-BASED UI
  // ─────────────────────────────────────────────────────────────
  function applyRoleUI() {
    if (isInstructor) {
      showLocalSlotOnly();
      el.toggleCam.style.display      = 'inline-flex';
      el.toggleScreen.style.display   = 'inline-flex';
      el.raiseHand.style.display      = 'none';
      el.requestsTabBtn.style.display = 'inline-flex';
      el.micBtnLabel.textContent      = shell.t('liveRoom.mic');
    } else {
      el.toggleCam.style.display      = 'none';
      el.toggleScreen.style.display   = 'none';
      el.raiseHand.style.display      = 'inline-flex';
      el.requestsTabBtn.style.display = 'none';
      el.micBtnLabel.textContent      = state.micRequested
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
  }

  function updateViewerCount() {
    el.viewerCount.textContent = String(participantList().length);
  }

  // ─────────────────────────────────────────────────────────────
  // PARTICIPANTS
  // ─────────────────────────────────────────────────────────────
  function renderParticipants() {
    el.participantsList.innerHTML = participantList().map((p) => {
      const roleLabel   = shell.t(`roles.${p.role}`) || p.role;
      const hasHand     = state.raisedHands.some((h) => h.user.name === p.name);
      const isApproved  = state.approvedSpeakers.has(p.id);
      const showMuteBtn = isInstructor && !p.isLocal && isApproved;

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
                   data-mute-id="${p.id}" data-mute-name="${esc(p.name)}">
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
  // RAISED HANDS & REQUESTS
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
    const idx = state.raisedHands.findIndex((h) => h.id === id || h.user.name === user.name);
    if (idx >= 0) state.raisedHands[idx] = { id, user };
    else state.raisedHands.push({ id, user });
  }

  function removeRaisedHand(id) {
    state.raisedHands = state.raisedHands.filter((h) => h.id !== id);
  }

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
    const locale    = shell.language === 'ar' ? 'ar-EG' : 'en-US';
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
  // FIX: Explicitly hide the avatar if Camera OR ScreenShare is active
  // ─────────────────────────────────────────────────────────────
  function updateLocalMediaState() {
    // If either camera or screen share is on, DO NOT show the avatar placeholder
    const showAvatar = !(state.camOn || state.screenSharing);
    el.localAvatar.style.display = showAvatar ? 'flex' : 'none';
    
    el.localMicIcon.classList.toggle('muted', !state.micOn);
    el.toggleMic.classList.toggle('off', !state.micOn);
    el.toggleCam.classList.toggle('off', !state.camOn);
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
  function positionQualityDropdown() {
    const btn = el.qualityBtn.getBoundingClientRect();
    const dd  = el.qualityWrap.querySelector('.quality-dropdown');
    dd.style.left   = `${btn.left}px`;
    dd.style.bottom = `${window.innerHeight - btn.top + 8}px`;
    dd.style.top    = 'auto';
  }

  async function applyQuality(quality) {
    state.currentQuality = quality;
    if (el.qualityLabel) el.qualityLabel.textContent = quality;

    document.querySelectorAll('.quality-opt').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.quality === quality);
    });

    const config = VIDEO_QUALITY_CONFIGS[quality];

    if (isInstructor && state.localVideoTrack) {
      try {
        await state.localVideoTrack.setEncoderConfiguration(config);
      } catch (err) {
        console.warn('[Quality] setEncoderConfiguration failed:', err);
      }
    }

    if (!isInstructor && state.agoraClient) {
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
      state.agoraClient = AgoraRTC.createClient({ mode: 'live', codec: 'vp8' });
      await state.agoraClient.setClientRole(isInstructor ? 'host' : 'audience');

      if (!isInstructor) {
        try { await state.agoraClient.enableDualStream(); } catch (_) {}
      }

      state.agoraClient.on('user-published', async (remoteUser, mediaType) => {
        await state.agoraClient.subscribe(remoteUser, mediaType);

        if (mediaType === 'video') {
          state.remoteVideoActive = true;
          // FIX: Hide the remote avatar placeholder since video is now active
          el.remoteAvatar.style.display = 'none'; 
          
          remoteUser.videoTrack.play('slot-remote-media');

          if (!isInstructor) {
            showRemoteSlotOnly();
            const streamType = state.currentQuality === '360p' ? 1 : 0;
            try { state.agoraClient.setRemoteVideoStreamType(remoteUser, streamType); } catch (_) {}
          }
        }

        if (mediaType === 'audio') {
          remoteUser.audioTrack.play();
        }
      });

      state.agoraClient.on('user-unpublished', (remoteUser, mediaType) => {
        if (mediaType === 'video') {
          state.remoteVideoActive = false;
          // FIX: Show the remote avatar again when the video stops
          el.remoteAvatar.style.display = 'flex'; 
          
          if (!isInstructor) {
            showLocalSlotOnly();
          }
        }
      });

const response = await fetch('/api/live/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // هنا السطر اللي اتغير: بيسحب التوكن الحقيقي بتاع الطالب
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          channelName: channel,
          uid:         0,
          role:        isInstructor ? 'publisher' : 'subscriber'
        })
      });

      if (!response.ok) {
        console.warn('[Agora] Token fetch failed:', response.status);
        return;
      }

      const { token, appId } = await response.json();
      await state.agoraClient.join(appId, channel, token, null);

      state.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack({
        AEC: true, ANS: true, AGC: true
      });
      await state.localAudioTrack.setMuted(true);

      if (isInstructor) {
        state.localVideoTrack = await AgoraRTC.createCameraVideoTrack({
          encoderConfig: VIDEO_QUALITY_CONFIGS[state.currentQuality]
        });
        await state.localVideoTrack.setMuted(true);
        try { state.localVideoTrack.play('slot-local-media'); } catch (_) {}

        updateLocalMediaState();
        await state.agoraClient.publish([state.localAudioTrack, state.localVideoTrack]);
      } else {
        updateLocalMediaState();
        await state.agoraClient.publish([state.localAudioTrack]);
      }

    } catch (err) {
      console.warn('[Agora] Initialization failed:', err);
    }
  }

  // ─────────────────────────────────────────────────────────────
  // SCREEN SHARE
  // ─────────────────────────────────────────────────────────────
  async function startScreenShare() {
    el.screenShareLabel.hidden = false;
    el.toggleScreen.classList.add('active');

    if (!state.agoraClient || typeof AgoraRTC === 'undefined') {
      state.screenSharing = true;
      updateLocalMediaState(); // Ensure avatar hides immediately
      return;
    }

    try {
      state.screenTrack = await AgoraRTC.createScreenVideoTrack({}, 'auto');
      const activeTrack = Array.isArray(state.screenTrack) ? state.screenTrack[0] : state.screenTrack;
      if (state.localVideoTrack) { await state.agoraClient.unpublish(state.localVideoTrack); }
      await state.agoraClient.publish(activeTrack);
      activeTrack.on?.('track-ended', stopScreenShare);
      state.screenSharing = true;
      updateLocalMediaState(); // Hide avatar
    } catch (err) {
      console.warn('[ScreenShare] Failed:', err);
      state.screenSharing = false;
      updateLocalMediaState(); // Reset state
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
    state.screenTrack      = null;
    state.screenSharing    = false;
    updateLocalMediaState(); // Show avatar if camera is off
    el.screenShareLabel.hidden = true;
    el.toggleScreen.classList.remove('active');
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
      updateViewerCount();
      renderParticipants();
      renderHands();
    });

    state.socket.on('user-joined', (user) => {
      state.participants.set(user.id, user);
      updateViewerCount();
      renderParticipants();
      pushNotification(shell.t('liveRoom.joinedToast', { name: user.name }), 'notif-user');
      appendSystemMessage(shell.t('liveRoom.joinedMessage', { name: user.name }));
    });

    state.socket.on('user-left', ({ id }) => {
      const user = state.participants.get(id);
      if (!user) return;
      state.participants.delete(id);
      updateViewerCount();
      renderParticipants();
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
  document.querySelectorAll('.tab-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach((b) => b.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach((p) => p.classList.remove('active'));
      btn.classList.add('active');
      const panel = document.getElementById(`tab-${btn.dataset.tab}`);
      if (panel) panel.classList.add('active');
    });
  });

  el.chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  });
  el.chatInput.addEventListener('input', () => {
    el.chatInput.style.height = 'auto';
    el.chatInput.style.height = `${Math.min(el.chatInput.scrollHeight, 96)}px`;
  });
  document.getElementById('sendBtn').addEventListener('click', sendMessage);

  el.toggleMic.addEventListener('click', async () => {
    if (isInstructor) {
      state.micOn = !state.micOn;
      if (state.localAudioTrack) await state.localAudioTrack.setMuted(!state.micOn);
      updateLocalMediaState();
    } else {
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

  el.toggleCam.addEventListener('click', async () => {
    if (!isInstructor) return;
    state.camOn = !state.camOn;
    if (state.localVideoTrack) await state.localVideoTrack.setMuted(!state.camOn);
    updateLocalMediaState();
  });

  el.toggleScreen.addEventListener('click', async () => {
    if (!isInstructor) return;
    if (state.screenSharing) await stopScreenShare();
    else await startScreenShare();
  });

  el.raiseHand.addEventListener('click', toggleLocalHand);

  el.qualityBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const willOpen = !el.qualityWrap.classList.contains('open');
    el.qualityWrap.classList.toggle('open');
    if (willOpen) positionQualityDropdown();
  });

  document.querySelectorAll('.quality-opt').forEach((btn) => {
    btn.addEventListener('click', async () => {
      el.qualityWrap.classList.remove('open');
      await applyQuality(btn.dataset.quality);
    });
  });

  el.refreshBtn.addEventListener('click', () => {
    pushNotification(shell.t('liveRoom.refreshing'), 'notif-user');
    if (state.socket && !state.socketConnected) { state.socket.connect(); }
  });

  el.endBtn.addEventListener('click', async () => {
    if (!window.confirm(shell.t('liveRoom.leaveConfirm'))) return;
    await cleanup();
    window.location.href = 'dashboard.html';
  });

  document.addEventListener('click', (e) => {
    if (!el.qualityWrap.contains(e.target)) {
      el.qualityWrap.classList.remove('open');
    }
  });

  window.addEventListener('resize', () => {
    if (el.qualityWrap.classList.contains('open')) positionQualityDropdown();
    if (window.innerWidth > 768) shell.closeSidebar();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      el.qualityWrap.classList.remove('open');
      if (window.innerWidth <= 768) shell.closeSidebar();
    }
  });

  window.addEventListener('unilearn:language-changed', () => {
    updateSessionCopy();
    renderParticipants();
    renderHands();
    renderSpeakRequests();
  });

  window.addEventListener('beforeunload', () => { cleanup(); });

  // ─────────────────────────────────────────────────────────────
  // INIT
  // ─────────────────────────────────────────────────────────────
  el.localAvatar.textContent = (userName.charAt(0) || 'S').toUpperCase();

  if (el.qualityLabel) el.qualityLabel.textContent = state.currentQuality;
  document.querySelectorAll('.quality-opt').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.quality === state.currentQuality);
  });

  appendSystemMessage(shell.t('liveRoom.sessionStarted'));
  updateSessionCopy();
  updateViewerCount();
  renderParticipants();
  renderHands();
  renderSpeakRequests();
  updateLocalMediaState();
  startTimer();
  initSocket();
  initAgora();

})();