(() => {
  if (localStorage.getItem('userName')) {
    window.location.replace('dashboard.html');
    return;
  }

  const form = document.getElementById('loginForm');
  const input = document.getElementById('displayName');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = input.value.trim() || 'Student';
    localStorage.setItem('userName', name);

    if (!localStorage.getItem('userLanguage')) {
      localStorage.setItem('userLanguage', 'ar');
    }

    const lowerName = name.toLowerCase();

    if (lowerName === 'admin' || lowerName.startsWith('dr') || lowerName.startsWith('دكتور')) {
      localStorage.setItem('userRole', 'admin');
    } else {
      localStorage.setItem('userRole', 'student');
    }

    window.location.href = 'dashboard.html';
  });
})();