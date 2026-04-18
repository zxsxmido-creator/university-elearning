(() => {
  // ── DATA ─────────────────────────────────────────────────────
  let tasks = [
    { id: 1, type: 'quiz', course: 'CS301', title: 'Intro to Algorithms Quiz', due: 'Today, 11:59 PM', status: 'pending', icon: '📝', points: 50 },
    { id: 2, type: 'file', course: 'MATH201', title: 'Linear Algebra Research Paper', due: 'Tomorrow, 08:00 AM', status: 'pending', icon: '📄', points: 100 },
    { id: 3, type: 'quiz', course: 'PHYS301', title: 'Quantum Mechanics Midterm', due: 'Oct 15', status: 'done', icon: '📝', score: '92/100' }
  ];

  let leaderboard = [
    { name: 'Sarah Tarek', score: 1450, isMe: false },
    { name: 'Omar Khaled', score: 1320, isMe: false },
    { name: 'Youssef Ali', score: 1100, isMe: false },
    { name: 'Ahmad (You)', score: 950, isMe: true }
  ];

  let currentTab = 'pending';

  // ── DOM ELEMENTS ─────────────────────────────────────────────
  const tasksGrid = document.getElementById('tasksGrid');
  const lbList = document.getElementById('lbList');
  const tabPending = document.getElementById('tabPending');
  const tabCompleted = document.getElementById('tabCompleted');
  
  const quizModal = document.getElementById('quizModal');
  const uploadModal = document.getElementById('uploadModal');
  const uploadArea = document.getElementById('uploadArea');
  const btnSubmitFile = document.getElementById('btnSubmitFile');
  const btnSubmitQuiz = document.getElementById('btnSubmitQuiz');

  // ── RENDER FUNCTIONS ─────────────────────────────────────────
  function renderTasks() {
    tasksGrid.innerHTML = '';
    const filteredTasks = tasks.filter(t => currentTab === 'pending' ? t.status === 'pending' : t.status === 'done');
    
    if (filteredTasks.length === 0) {
      tasksGrid.innerHTML = `<div style="text-align:center; padding: 40px; color: var(--ink-ghost); font-family: var(--serif); font-style: italic;">No tasks here. Great job!</div>`;
      return;
    }

    filteredTasks.forEach(t => {
      const isDone = t.status === 'done';
      let badgeClass = isDone ? 'badge-done' : 'badge-pending';
      let badgeText = isDone ? 'Completed' : 'Pending';
      let actionText = isDone ? `Score: ${t.score}` : (t.type === 'quiz' ? 'Start Quiz' : 'Upload File');

      tasksGrid.innerHTML += `
        <div class="task-card">
          <div class="task-icon ${t.type}">${t.icon}</div>
          <div class="task-info">
            <div class="task-course">${t.course}</div>
            <div class="task-title">${t.title}</div>
            <div class="task-meta">
              <span class="task-badge ${badgeClass}">${badgeText}</span>
              <span>${isDone ? 'Submitted' : 'Due: ' + t.due}</span>
            </div>
          </div>
          <div class="task-action">
            <button class="btn-action" ${isDone ? 'disabled' : ''} onclick="handleAction(${t.id}, '${t.type}')">${actionText}</button>
          </div>
        </div>
      `;
    });
  }

  function renderLeaderboard() {
    lbList.innerHTML = '';
    // Sort by score descending
    leaderboard.sort((a, b) => b.score - a.score).forEach((user, index) => {
      const initial = user.name.charAt(0);
      lbList.innerHTML += `
        <div class="lb-item ${user.isMe ? 'me' : ''}">
          <div class="lb-rank">#${index + 1}</div>
          <div class="lb-avatar">${initial}</div>
          <div class="lb-name">${user.name}</div>
          <div class="lb-score">${user.score} pt</div>
        </div>
      `;
    });
  }

  // ── TABS LOGIC ───────────────────────────────────────────────
  tabPending.addEventListener('click', () => {
    currentTab = 'pending';
    tabPending.classList.add('active');
    tabCompleted.classList.remove('active');
    renderTasks();
  });

  tabCompleted.addEventListener('click', () => {
    currentTab = 'done';
    tabCompleted.classList.add('active');
    tabPending.classList.remove('active');
    renderTasks();
  });

  // ── ACTIONS LOGIC ────────────────────────────────────────────
  window.handleAction = (id, type) => {
    if (type === 'quiz') {
      quizModal.classList.add('open');
    } else {
      uploadModal.classList.add('open');
    }
  };

  window.closeModals = () => {
    quizModal.classList.remove('open');
    uploadModal.classList.remove('open');
    // Reset inputs
    document.querySelectorAll('input[type="radio"]').forEach(r => r.checked = false);
    btnSubmitFile.disabled = true;
    uploadArea.innerHTML = `<div class="upload-icon">📁</div><div class="upload-text">Drag & Drop your PDF here<br><span style="font-size:11px; font-weight:normal; color:var(--ink-soft);">or click to browse</span></div>`;
  };

  // Fake Quiz Submission
  btnSubmitQuiz.addEventListener('click', () => {
    const q1 = document.querySelector('input[name="q1"]:checked');
    if (!q1) return alert("Please answer the question first!");
    
    // Update Task
    let task = tasks.find(t => t.id === 1);
    task.status = 'done';
    task.score = q1.value === 'O(log n)' ? '50/50' : '0/50';
    
    // Update Leaderboard if correct
    if(q1.value === 'O(log n)') {
      let me = leaderboard.find(u => u.isMe);
      me.score += 50;
      renderLeaderboard();
    }

    closeModals();
    renderTasks();
    updateCounts();
  });

  // Fake File Upload
  uploadArea.addEventListener('click', () => {
    uploadArea.innerHTML = `<div class="upload-icon">✅</div><div class="upload-text">math_paper_ahmad.pdf</div>`;
    btnSubmitFile.disabled = false;
  });

  btnSubmitFile.addEventListener('click', () => {
    let task = tasks.find(t => t.id === 2);
    task.status = 'done';
    task.score = 'Pending Grade';
    
    closeModals();
    renderTasks();
    updateCounts();
  });

  function updateCounts() {
    let pCount = tasks.filter(t => t.status === 'pending').length;
    let dCount = tasks.filter(t => t.status === 'done').length;
    tabPending.textContent = `Pending (${pCount})`;
    tabCompleted.textContent = `Completed (${dCount})`;
    document.getElementById('navBadge').textContent = pCount;
  }

  // ── INITIALIZE ───────────────────────────────────────────────
  renderTasks();
  renderLeaderboard();

})();