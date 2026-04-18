(() => {
  // لو مسجل دخول قبل كده، هيدخلك على لوحة التحكم علطول
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

    // هنا ضفنا الذكاء الاصطناعي بتاعنا اللي بيفرق بين الدكتور والطالب 😉
    const lowerName = name.toLowerCase();
    
    // لو كتبت Admin أو Dr أو دكتور، هتاخد صلاحيات الإدارة
    if (lowerName === 'admin' || lowerName.startsWith('dr') || lowerName.startsWith('دكتور')) {
      localStorage.setItem('userRole', 'admin');
    } else {
      // أي اسم تاني هيفهم إنه طالب
      localStorage.setItem('userRole', 'student');
    }

    window.location.href = 'dashboard.html';
  });
})();