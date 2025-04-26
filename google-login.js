<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Login with Google - Shenwang</title>
  <script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-auth-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore-compat.js"></script>
</head>
<body>

<h1>ล็อกอินด้วย Google</h1>

<button id="google-login-btn">ล็อกอินด้วย Google</button>

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
  const db = firebase.firestore();

  // ฟังก์ชันล็อกอินด้วย Google
  document.getElementById('google-login-btn').addEventListener('click', async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    
    try {
      const result = await auth.signInWithPopup(provider);
      const user = result.user;
      const userCredential = result.credential;

      // ดึงข้อมูลผู้ใช้และบันทึกลง Firestore
      await db.collection('users').doc(user.uid).set({
        uid: user.uid,
        email: user.email,
        emailVerified: user.emailVerified,
        displayName: user.displayName,
        photoURL: user.photoURL,
        provider: "google",
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        lastLoginAt: firebase.firestore.FieldValue.serverTimestamp(),
        signupIP: "", // เก็บ IP ในตอนสมัคร
        userAgent: navigator.userAgent,
        isBanned: false,
        role: "user"
      }, { merge: true });

      alert('ล็อกอินสำเร็จ!');
      window.location.href = '/dashboard.html'; // ไปที่หน้า Dashboard หลังล็อกอิน
    } catch (error) {
      console.error(error);
      alert('เกิดข้อผิดพลาด: ' + error.message);
    }
  });
</script>

</body>
</html>
