<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>รีเซ็ตรหัสผ่าน - Shenwang</title>
  <script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-auth-compat.js"></script>
</head>
<body>

<h1>รีเซ็ตรหัสผ่าน</h1>

<form id="reset-form">
  <input type="email" id="email" placeholder="กรอกอีเมลที่ใช้สมัคร" required><br>
  <button type="submit">ส่งลิงก์รีเซ็ตรหัสผ่าน</button>
</form>

<script>
  const firebaseConfig = {
    apiKey: "AIzaSyC-UwBguZRGdrIWLVkTsCRlt02vKOAlOlA",
    authDomain: "shenwang-auth-user.firebaseapp.com",
    projectId: "shenwang-auth-user",
    storageBucket: "shenwang-auth-user.firebasestorage.app",
    messagingSenderId: "273542969972",
    appId: "1:273542969972:web:4d6ce4edf5188b98dbef21"
  };

  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();

  document.getElementById('reset-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;

    auth.sendPasswordResetEmail(email).then(() => {
      alert('ส่งลิงก์รีเซ็ตรหัสผ่านไปยังอีเมลของคุณแล้ว');
    }).catch((error) => {
      console.error(error);
      alert('เกิดข้อผิดพลาด: ' + error.message);
    });
  });
</script>

</body>
</html>
