(() => {
  // لو الطالب معاه توكن (مسجل دخول قبل كده)، نوديه للداشبورد علطول
  if (localStorage.getItem('token')) {
    window.location.replace('/dashboard');
    return;
  }

  const form = document.getElementById('loginForm');

  form.addEventListener('submit', async (event) => {
    event.preventDefault(); // منع تحديث الصفحة

    // سحب البيانات من حقول الـ HTML
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    // تأمين لو الحقول مش موجودة في الـ HTML
    if (!emailInput || !passwordInput) {
      alert('تنبيه للمطور: يرجى التأكد من إضافة حقول email و password في ملف login.html');
      return;
    }

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    try {
      // إرسال البيانات للباك إند عشان يتأكد منها
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.ok) {
        // لو الدخول ناجح: نحفظ التوكن وبيانات المستخدم في المتصفح
        localStorage.setItem('token', data.token);
        localStorage.setItem('userName', data.user.name);
        localStorage.setItem('userRole', data.user.role);
        localStorage.setItem('user', JSON.stringify({
  _id:    data.user._id,
  name:   data.user.name,
  role:   data.user.role,
  avatar: data.user.avatar || ''
}));
if(data.user.avatar) {
    localStorage.setItem('userAvatar', data.user.avatar);
}
        // ضبط اللغة الافتراضية لو مش موجودة
        if (!localStorage.getItem('userLanguage')) {
          localStorage.setItem('userLanguage', 'ar');
        }

        // توجيه الطالب لصفحة المنصة الرئيسية
        window.location.href = '/dashboard'; 
      } else {
        // لو الإيميل أو الباسوورد غلط
        alert('خطأ في تسجيل الدخول: ' + (data.msg || 'بيانات غير صحيحة'));
      }
    } catch (err) {
      console.error('Error logging in:', err);
      alert('حدث خطأ في الاتصال بالسيرفر. تأكد أن السيرفر يعمل.');
    }
  });
})();