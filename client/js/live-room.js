(() => {
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
        messagePlaceholder: 'Send a message...',
        noRaisedHands: 'No raised hands',
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
        messagePlaceholder: 'أرسل رسالة...',
        noRaisedHands: 'لا توجد أيادٍ مرفوعة',
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
        defaultSession: 'جلسة مباشرة'
      }
    }
  };

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

  const channel = new URLSearchParams(window.location.search).get('channel') || 'demo-room';
  const userName = localStorage.getItem('userName') || 'Student';
  const userRole = localStorage.getItem('userRole') || 'student';
  const localParticipantId = 'local-self';
  const isInstructor = userRole === 'instructor' || userRole === 'admin';

  const state = {
    participants: new Map(),
    raisedHands: [],
    socket: null,
    socketConnected: false,
    agoraClient: null,
    localAudioTrack: null,
    localVideoTrack: null,
    remoteVideoActive: false,
    screenTrack: null,
    micOn: true,
    camOn: true,
    screenSharing: false,
    handRaised: false,
    timerSeconds: 0,
    timerInterval: null,
    viewMode: 'dual',
    focusedSlot: 'remote'
  };

  const shell = window.UniLearnShell.init({
    translations: TRANSLATIONS,
    defaultProfile: { name: userName, role: userRole },
    logoutPath: 'login.html',
    sidebarSelector: '#sidebar',
    closeSidebarOnLinkClick: false
  });

  const elements = {
    videoStage: document.getElementById('videoStage'),
    videoGrid: document.getElementById('videoGrid'),
    screenShareLabel: document.getElementById('screenShareLabel'),
    localAvatar: document.getElementById('localAvatar'),
    remoteAvatar: document.getElementById('remoteAvatar'),
    localName: document.getElementById('localName'),
    remoteName: document.getElementById('remoteName'),
    localMicIcon: document.getElementById('localMicIcon'),
    remoteMicIcon: document.getElementById('remoteMicIcon'),
    chatMessages: document.getElementById('chatMessages'),
    chatInput: document.getElementById('chatInput'),
    participantsList: document.getElementById('participantsList'),
    handsPanel: document.getElementById('handsPanel'),
    handsEmpty: document.getElementById('handsEmpty'),
    handsCount: document.getElementById('handsCount'),
    notifStack: document.getElementById('notifStack'),
    viewerCount: document.getElementById('viewerCount'),
    timer: document.getElementById('sessionTimer'),
    sessionTitle: document.getElementById('sessionTitle'),
    singleSpeakerHint: document.getElementById('singleSpeakerHint'),
    toggleMic: document.getElementById('toggleMic'),
    toggleCam: document.getElementById('toggleCam'),
    toggleScreen: document.getElementById('toggleScreen'),
    raiseHand: document.getElementById('raiseHandBtn'),
    endBtn: document.getElementById('endBtn'),
    slotLocal: document.getElementById('slot-local'),
    slotRemote: document.getElementById('slot-remote')
  };

  function getSessionTitle() {
    return SESSION_TITLES[channel] || {
      en: 'Live Session',
      ar: 'جلسة مباشرة'
    };
  }

  function participantList() {
    const combined = [
      { id: localParticipantId, name: userName, role: userRole, isLocal: true },
      ...Array.from(state.participants.values())
    ];

    const seen = new Set();
    return combined.filter((participant) => {
      const key = `${participant.name}|${participant.role}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }

  function updateSessionCopy() {
    elements.sessionTitle.textContent = (getSessionTitle()[shell.language] || getSessionTitle().en);
    elements.localName.textContent = userName || shell.t('liveRoom.youLabel');
    syncRemoteSlot();
  }

  function syncRemoteSlot() {
    const remoteParticipant = participantList().find((participant) => !participant.isLocal);
    const remoteLabel = remoteParticipant ? remoteParticipant.name : shell.t('liveRoom.waiting');
    elements.remoteName.textContent = remoteLabel;
    elements.remoteAvatar.textContent = remoteParticipant ? remoteParticipant.name.charAt(0).toUpperCase() : '?';

    if (!remoteParticipant && state.viewMode === 'single-speaker') {
      state.focusedSlot = 'local';
      applyViewMode();
    }
  }

  function updateViewerCount() {
    elements.viewerCount.textContent = String(participantList().length);
  }

  function renderParticipants() {
    elements.participantsList.innerHTML = participantList().map((participant) => {
      const participantRole = shell.t(`roles.${participant.role}`) || participant.role;
      const hasRaisedHand = state.raisedHands.some((entry) => entry.user.name === participant.name);
      return `
        <div class="participant-item">
          <div class="p-avatar ${participant.role !== 'student' ? 'instructor-avatar' : ''}">${escape(participant.name.charAt(0).toUpperCase())}</div>
          <div class="p-info">
            <div class="p-name">${escape(participant.name)}</div>
            <div class="p-role">${escape(participantRole)}</div>
          </div>
          <div class="p-status">${hasRaisedHand ? '<span class="hand-mark">Hand</span>' : ''}</div>
        </div>
      `;
    }).join('');
  }

  function renderHands() {
    const count = state.raisedHands.length;
    elements.handsCount.textContent = String(count);
    elements.handsCount.classList.toggle('visible', count > 0);
    elements.handsEmpty.style.display = count ? 'none' : 'flex';
    elements.handsPanel.querySelectorAll('.hand-queue-item').forEach((item) => item.remove());

    state.raisedHands.forEach(({ id, user }) => {
      const row = document.createElement('div');
      row.className = 'hand-queue-item';
      row.innerHTML = `
        <span class="hand-queue-name">${escape(user.name)}</span>
        ${isInstructor ? `<button class="lower-btn" type="button" data-hand-id="${id}">${shell.t('liveRoom.lowerHand')}</button>` : ''}
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

  function escape(value) {
    return window.UniLearnShell.escapeHtml(value);
  }

  function pushNotification(text, className = '') {
    const item = document.createElement('div');
    item.className = `notif ${className}`.trim();
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
        <span class="msg-author ${user.role !== 'student' ? 'instructor' : ''}">${escape(user.name)}</span>
        <span class="msg-time">${escape(timestamp || '')}</span>
      </div>
      <div class="msg-text">${escape(message)}</div>
    `;
    elements.chatMessages.appendChild(row);
    elements.chatMessages.scrollTop = elements.chatMessages.scrollHeight;
  }

  function addOrUpdateRaisedHand(id, user) {
    const index = state.raisedHands.findIndex((entry) => entry.id === id || entry.user.name === user.name);
    const nextEntry = { id, user };

    if (index >= 0) state.raisedHands[index] = nextEntry;
    else state.raisedHands.push(nextEntry);
  }

  function removeRaisedHand(id) {
    state.raisedHands = state.raisedHands.filter((entry) => entry.id !== id);
  }

  function setControlState(button, className, enabled) {
    button.classList.toggle(className, enabled);
  }

  function updateLocalMediaState() {
    const showAvatar = !state.camOn || !state.localVideoTrack;
    elements.localAvatar.style.display = showAvatar ? 'flex' : 'none';
    elements.localMicIcon.classList.toggle('muted', !state.micOn);
    setControlState(elements.toggleMic, 'off', !state.micOn);
    setControlState(elements.toggleCam, 'off', !state.camOn);
  }

  function updateRemoteMediaState() {
    elements.remoteAvatar.style.display = state.remoteVideoActive ? 'none' : 'flex';
  }

  function applyViewMode() {
    const hasRemoteParticipant = participantList().some((participant) => !participant.isLocal);
    elements.videoGrid.classList.remove('dual', 'single-speaker', 'screenshare');
    elements.slotLocal.classList.remove('focused', 'pip', 'hidden');
    elements.slotRemote.classList.remove('focused', 'pip', 'hidden');

    if (state.viewMode === 'single-speaker') {
      elements.videoGrid.classList.add('single-speaker');
      elements.videoStage.classList.add('single-mode');

      const focusRemote = state.focusedSlot === 'remote' && hasRemoteParticipant;
      const mainSlot = focusRemote ? elements.slotRemote : elements.slotLocal;
      const secondarySlot = focusRemote ? elements.slotLocal : elements.slotRemote;
      mainSlot.classList.add('focused');

      if (hasRemoteParticipant) {
        secondarySlot.classList.add('pip');
      } else {
        secondarySlot.classList.add('hidden');
      }
    } else {
      elements.videoStage.classList.remove('single-mode');
      elements.videoGrid.classList.add(state.viewMode);
    }

    document.getElementById('viewDual').classList.toggle('active', state.viewMode === 'dual');
    document.getElementById('viewSingle').classList.toggle('active', state.viewMode === 'single-speaker');
    document.getElementById('viewScreen').classList.toggle('active', state.viewMode === 'screenshare');
  }

  function setViewMode(mode) {
    state.viewMode = mode;
    applyViewMode();
  }

  function startTimer() {
    if (state.timerInterval) return;
    state.timerInterval = setInterval(() => {
      state.timerSeconds += 1;
      const hours = String(Math.floor(state.timerSeconds / 3600)).padStart(2, '0');
      const minutes = String(Math.floor((state.timerSeconds % 3600) / 60)).padStart(2, '0');
      const seconds = String(state.timerSeconds % 60).padStart(2, '0');
      elements.timer.textContent = `${hours}:${minutes}:${seconds}`;
    }, 1000);
  }

  function sendMessage() {
    const message = elements.chatInput.value.trim();
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

    elements.chatInput.value = '';
    elements.chatInput.style.height = 'auto';
  }

  function toggleLocalHand() {
    state.handRaised = !state.handRaised;
    elements.raiseHand.classList.toggle('raised', state.handRaised);

    if (state.handRaised) {
      addOrUpdateRaisedHand(localParticipantId, { name: userName, role: userRole });
      pushNotification(shell.t('liveRoom.handRaisedToast', { name: userName }), 'notif-hand');
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
          if (state.viewMode === 'single-speaker') {
            state.focusedSlot = 'remote';
            applyViewMode();
          }
        }

        if (mediaType === 'audio') {
          user.audioTrack.play();
        }
      });

      state.agoraClient.on('user-unpublished', (user, mediaType) => {
        if (mediaType === 'video') {
          state.remoteVideoActive = false;
          updateRemoteMediaState();
        }
      });

      const response = await fetch('/api/live/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token') || ''}`
        },
        body: JSON.stringify({ channelName: channel, uid: 0, role: 'publisher' })
      });

      if (!response.ok) return;

      const { token, appId } = await response.json();
      await state.agoraClient.join(appId, channel, token, null);

      state.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
      state.localVideoTrack = await AgoraRTC.createCameraVideoTrack();

      state.localVideoTrack.play('slot-local-media');
      updateLocalMediaState();
      await state.agoraClient.publish([state.localAudioTrack, state.localVideoTrack]);
    } catch (error) {
      console.warn('Agora initialization failed:', error);
    }
  }

  async function startScreenShare() {
    elements.screenShareLabel.hidden = false;
    setControlState(elements.toggleScreen, 'active', true);

    if (!state.agoraClient || typeof AgoraRTC === 'undefined') {
      state.screenSharing = true;
      setViewMode('screenshare');
      return;
    }

    try {
      state.screenTrack = await AgoraRTC.createScreenVideoTrack({}, 'auto');
      const activeScreenTrack = Array.isArray(state.screenTrack) ? state.screenTrack[0] : state.screenTrack;

      if (state.localVideoTrack) {
        await state.agoraClient.unpublish(state.localVideoTrack);
      }

      await state.agoraClient.publish(activeScreenTrack);
      activeScreenTrack.on?.('track-ended', stopScreenShare);
      state.screenSharing = true;
      setViewMode('screenshare');
    } catch (error) {
      console.warn('Screen share failed:', error);
      state.screenSharing = false;
      elements.screenShareLabel.hidden = true;
      setControlState(elements.toggleScreen, 'active', false);
    }
  }

  async function stopScreenShare() {
    if (!state.screenSharing) return;

    if (state.agoraClient && state.screenTrack) {
      const activeScreenTrack = Array.isArray(state.screenTrack) ? state.screenTrack[0] : state.screenTrack;

      try {
        await state.agoraClient.unpublish(activeScreenTrack);
        activeScreenTrack.close();
        if (state.localVideoTrack) {
          await state.agoraClient.publish(state.localVideoTrack);
        }
      } catch (error) {
        console.warn('Failed to stop screen share cleanly:', error);
      }
    }

    state.screenTrack = null;
    state.screenSharing = false;
    elements.screenShareLabel.hidden = true;
    setControlState(elements.toggleScreen, 'active', false);
    setViewMode('dual');
  }

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
      state.raisedHands = hands.map((entry) => ({
        id: entry.id,
        user: entry.user
      }));
      renderHands();
      renderParticipants();
    });
  }

  async function cleanup() {
    if (state.timerInterval) {
      clearInterval(state.timerInterval);
      state.timerInterval = null;
    }

    try {
      await stopScreenShare();
    } catch (error) {
      console.warn('Cleanup screen share stop failed:', error);
    }

    state.localAudioTrack?.close();
    state.localVideoTrack?.close();
    state.socket?.disconnect();

    if (state.agoraClient) {
      try {
        await state.agoraClient.leave();
      } catch (error) {
        console.warn('Agora leave failed:', error);
      }
    }
  }

  document.querySelectorAll('.tab-btn').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach((item) => item.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach((panel) => panel.classList.remove('active'));
      button.classList.add('active');
      document.getElementById(`tab-${button.dataset.tab}`).classList.add('active');
    });
  });

  elements.chatInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  });

  elements.chatInput.addEventListener('input', () => {
    elements.chatInput.style.height = 'auto';
    elements.chatInput.style.height = `${Math.min(elements.chatInput.scrollHeight, 96)}px`;
  });

  document.getElementById('sendBtn').addEventListener('click', sendMessage);

  document.getElementById('viewDual').addEventListener('click', () => setViewMode('dual'));
  document.getElementById('viewSingle').addEventListener('click', () => {
    if (state.focusedSlot !== 'local' && !participantList().some((participant) => !participant.isLocal)) {
      state.focusedSlot = 'local';
    }
    setViewMode('single-speaker');
  });
  document.getElementById('viewScreen').addEventListener('click', () => setViewMode('screenshare'));

  elements.slotLocal.addEventListener('click', () => {
    if (state.viewMode === 'single-speaker') {
      state.focusedSlot = 'local';
      applyViewMode();
    }
  });

  elements.slotRemote.addEventListener('click', () => {
    if (state.viewMode === 'single-speaker' && participantList().some((participant) => !participant.isLocal)) {
      state.focusedSlot = 'remote';
      applyViewMode();
    }
  });

  elements.toggleMic.addEventListener('click', async () => {
    state.micOn = !state.micOn;
    if (state.localAudioTrack) await state.localAudioTrack.setMuted(!state.micOn);
    updateLocalMediaState();
  });

  elements.toggleCam.addEventListener('click', async () => {
    state.camOn = !state.camOn;
    if (state.localVideoTrack) await state.localVideoTrack.setMuted(!state.camOn);
    updateLocalMediaState();
  });

  elements.toggleScreen.addEventListener('click', async () => {
    if (state.screenSharing) await stopScreenShare();
    else await startScreenShare();
  });

  elements.raiseHand.addEventListener('click', toggleLocalHand);

  elements.endBtn.addEventListener('click', async () => {
    if (!window.confirm(shell.t('liveRoom.leaveConfirm'))) return;
    await cleanup();
    window.location.href = 'dashboard.html';
  });

  window.addEventListener('unilearn:language-changed', () => {
    updateSessionCopy();
    renderParticipants();
    renderHands();
  });

  window.addEventListener('beforeunload', () => {
    cleanup();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && window.innerWidth <= 768) {
      shell.closeSidebar();
    }
  });

  elements.localAvatar.textContent = userName.charAt(0).toUpperCase() || 'S';
  appendSystemMessage(shell.t('liveRoom.sessionStarted'));
  updateSessionCopy();
  updateViewerCount();
  renderParticipants();
  renderHands();
  updateLocalMediaState();
  updateRemoteMediaState();
  setViewMode('dual');
  startTimer();
  initSocket();
  initAgora();
})();
