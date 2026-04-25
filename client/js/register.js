(() => {
  // لو الطالب معاه توكن (مسجل دخول قبل كده)، نوديه للداشبورد علطول
  if (localStorage.getItem('token')) {
    window.location.replace('dashboard.html');
    return;
  }

  const form = document.getElementById('registerForm');

  form.addEventListener('submit', async (event) => {
    event.preventDefault(); // منع تحديث الصفحة

    // سحب البيانات من حقول الـ HTML
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;

    try {
      // إرسال البيانات للباك إند لإنشاء الحساب
      // (مفيش role بتتبعت هنا، الباك إند هيخليها student أوتوماتيك)
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
      });

      const data = await response.json();

      if (response.ok) {
        // لو الحساب اتعمل بنجاح: نحفظ التوكن وبيانات المستخدم في المتصفح
        localStorage.setItem('token', data.token);
        localStorage.setItem('userName', data.user.name);
        localStorage.setItem('userRole', data.user.role); // هترجع من السيرفر كـ student
        localStorage.setItem('user', JSON.stringify({
  _id:    data.user._id,
  name:   data.user.name,
  role:   data.user.role,
  avatar: data.user.avatar || ''
}));
        if(data.user.avatar) {
    localStorage.setItem('userAvatar', data.user.avatar);
}

        // ضبط اللغة الافتراضية
        if (!localStorage.getItem('userLanguage')) {
          localStorage.setItem('userLanguage', 'ar');
        }

        alert('تم إنشاء الحساب بنجاح! مرحباً بك في المنصة.');
        // توجيه الطالب لصفحة المنصة الرئيسية
        window.location.href = 'dashboard.html'; 
      } else {
        // لو الإيميل متسجل قبل كده أو في خطأ
        alert('خطأ في إنشاء الحساب: ' + (data.msg || 'يرجى المحاولة مرة أخرى'));
      }
    } catch (err) {
      console.error('Error registering:', err);
      alert('حدث خطأ في الاتصال بالسيرفر. تأكد أن السيرفر يعمل.');
    }
  });
})();