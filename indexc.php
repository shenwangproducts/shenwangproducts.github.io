<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Shenwang Media</title>
  <link rel="stylesheet" href="style.css">
  <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap" rel="stylesheet">
  <!-- Firebase SDK -->
  <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js"></script>
  <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js"></script>
  <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js"></script>
</head>
<body>
  <header>
    <div class="header-container">
      <div class="logo-center">
        <img src="assets/img/received.jpg" alt="Shenwang Media Logo" />
        <h1>Shenwang Media</h1>
      </div>
      <nav class="main-nav" id="mainNav">
        <a href="#" onclick="changePage('promo')">promote</a>
        <a href="#" onclick="changePage('news')">news</a>
        <a href="#" onclick="changePage('download')">install</a>
        <a href="#" onclick="changePage('contact')">responsible</a>
        <a href="#" id="signupButton" onclick="changePage('signup')">signup</a>
      </nav>
    </div>
  </header>

  <main>
    <div class="promo-box">
      <h2>เริ่มโปรโมทกับ Shenwang Media</h2>
      <p>ปลดล็อกพลังของแพลตฟอร์มของเรา และเข้าถึงผู้คนทั่วโลกอย่างมีสไตล์</p>
      <button onclick="startPromotion()">เริ่มโปรโมท</button>
    </div>
  </main>

  <!-- Popup Notification -->
  <div id="popup" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.9); display: flex; justify-content: center; align-items: center; z-index: 9999;">
    <div style="background: #1c1c1c; color: #fff; padding: 25px; border-radius: 12px; max-width: 95%; width: 400px; text-align: center; box-shadow: 0 0 15px rgba(255, 0, 0, 0.5); border: 2px solid #ff1a1a;">
      <h2 style="margin-top: 0; color: #ff4d4d;">แจ้งเตือนความปลอดภัย</h2>
      <p>ทีมงาน Shenwang Media จะไม่ติดต่อผู้เล่นเพื่อขอรหัสผ่านหรือข้อมูลส่วนตัว</p>
      <p>หากมีบุคคลแอบอ้างว่าเป็นทีมงาน โปรดอย่าหลงเชื่อเด็ดขาด</p>
      <p>เว็บไซต์ทางการของเราคือ <strong style="color: #ff4d4d;">www.shenwang.wuaze.com</strong> เท่านั้น</p>
      <hr style="margin: 15px 0; border-color: #444;">
      <p><strong>สงวนลิขสิทธิ์</strong> © 2025 Shenwang Media</p>
      <p>ห้ามคัดลอก ดัดแปลง หรือเผยแพร่เนื้อหาโดยไม่ได้รับอนุญาต</p>
      <label><input type="checkbox" id="dontShowAgain"> ไม่ต้องแสดงอีก</label>
      <br>
      <button onclick="closePopup()" style="margin-top: 15px; padding: 10px 20px; border: none; background: #ff1a1a; color: white; border-radius: 5px; cursor: pointer;">ปิด</button>
    </div>
  </div>

  <!-- Cookie Consent -->
  <div id="cookieConsent" style="position: fixed; bottom: 0; left: 0; width: 100%; background: #333; color: white; padding: 15px; text-align: center; z-index: 10000; display: none;">
    <p style="margin: 0 0 10px;">เราใช้คุกกี้เพื่อปรับปรุงประสบการณ์ของคุณบนเว็บไซต์</p>
    <button onclick="acceptCookies()" style="padding: 8px 15px; margin-right: 10px; background: #4CAF50; color: white; border: none; border-radius: 5px;">ยอมรับ</button>
    <button onclick="declineCookies()" style="padding: 8px 15px; background: #f44336; color: white; border: none; border-radius: 5px;">ปฏิเสธ</button>
  </div>

  <script type="module">
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
    import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";
  
    const firebaseConfig = {
      apiKey: "AIzaSyC-UwBguZRGdrIWLVkTsCRlt02vKOAlOlA",
      authDomain: "shenwang-auth-user.firebaseapp.com",
      projectId: "shenwang-auth-user",
      storageBucket: "shenwang-auth-user.firebasestorage.app",
      messagingSenderId: "273542969972",
      appId: "1:273542969972:web:4d6ce4edf5188b98dbef21"
    };
  
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
  
    // เรียกดู document
    const docRef = doc(db, "maintenance_status", "tbPcdWyBJTZrDDdRrTGA");
    getDoc(docRef)
      .then((docSnap) => {
        if (docSnap.exists()) {
          const data = docSnap.data();
          console.log(data);
        } else {
          console.log("Document does not exist");
        }
      })
      .catch((error) => {
        console.error("Error getting document:", error);
      });
  </script>

  <script src="js/script.js"></script>
</body>
</html>
