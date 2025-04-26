<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Verify Email - Shenwang</title>
  <script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-auth-compat.js"></script>
</head>
<body>

<h1>ยืนยันอีเมล</h1>

<p>กรุณายืนยันอีเมลของคุณ</p>

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

  // ส่งอีเมลยืนยัน
  auth.onAuthStateChanged(user => {
    if (user && !user.emailVerified) {
      user.sendEmailVerification().then(() => {
        alert('ส่งอีเมลยืนยันไปที่อีเมลของคุณแล้ว');
      }).catch((error) => {
        console.error(error);
        alert('เกิดข้อผิดพลาด: ' + error.message);
      });
    }
  });
</script>

</body>
</html>
