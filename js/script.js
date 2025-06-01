// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-UwBguZRGdrIWLVkTsCRlt02vKOAlOlA",
  authDomain: "shenwang-auth-user.firebaseapp.com",
  projectId: "shenwang-auth-user",
  storageBucket: "shenwang-auth-user.firebasestorage.app",
  messagingSenderId: "273542969972",
  appId: "1:273542969972:web:4d6ce4edf5188b98dbef21"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// ฟังก์ชันพูดแนะนำตัว
let hasSpokenIntro = false;

function speakIntro() {
  if (hasSpokenIntro) return;
  const intro = new SpeechSynthesisUtterance("你好，我是零曦，网站的第二代AI。你可以问我任何你感兴趣的事情");
  intro.lang = 'zh-CN';
  intro.pitch = 1.2;
  intro.rate = 1.0;
  intro.onend = function () {
    const next = new SpeechSynthesisUtterance("Please select the menu you are interested in above.");
    next.lang = 'en-US';
    next.pitch = 1.0;
    next.rate = 1.0;
    speechSynthesis.speak(next);
  };
  speechSynthesis.cancel();
  speechSynthesis.speak(intro);
  hasSpokenIntro = true;
}

// ฟังก์ชันปิด Popup และพูดแนะนำตัวเมื่อปิด
function closePopup() {
  if (document.getElementById("dontShowAgain").checked) {
    localStorage.setItem("popupShown", "true");
  }
  document.getElementById("popup").style.display = "none";
  speakIntro();
}

// ฟังก์ชันเปลี่ยนหน้า
function changePage(page) {
  const message = new SpeechSynthesisUtterance("");
  message.lang = 'th-TH';
  message.pitch = 1.1;
  message.rate = 1.1;

  let pageMessage = "";

  switch (page) {
    case 'promo':
      pageMessage = "กำลังเข้าสู่หน้าหลัก โปรโมทแอปของเรา";
      break;
    case 'news':
      pageMessage = "กำลังเข้าสู่หน้าข่าวสาร";
      break;
    case 'dowload':
      pageMessage = "กำลังเข้าสู่หน้าดาวน์โหลด กรุณาอ่านข้อตกลงก่อนดาวน์โหลด";
      break;
    case 'contact':
      pageMessage = "กำลังเข้าสู่หน้าติดต่อเรา";
      break;
    case 'signup':
      pageMessage = "กำลังไปหน้าลงทะเบียน";
      break;
    default:
      pageMessage = "กำลังย้อนไปหน้าแรก";
  }

  message.text = pageMessage;
  speechSynthesis.cancel();
  speechSynthesis.speak(message);

  message.onend = function () {
    switch (page) {
      case 'promo':
        window.location.href = '';
        break;
      case 'news':
        window.location.href = 'news.html';
        break;
      case 'dowload':
        window.location.href = 'download.html';
        break;
      case 'contact':
        window.location.href = 'contact.html';
        break;
      case 'signup':
        window.location.href = 'signup.html';
        break;
      
        
    }
  };
}

// ฟังก์ชันเริ่มโปรโมท
function startPromotion() {
  window.location.href = "promo_submit.html";
}

// เช็คว่าจะแสดง popup ไหม
if (!localStorage.getItem("popupShown")) {
  document.getElementById("popup").style.display = "flex";
}

// ตรวจสอบสถานะล็อกอิน
document.addEventListener("DOMContentLoaded", function () {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const signupButton = document.getElementById("signupButton");
  if (isLoggedIn === "true") {
    signupButton.textContent = "dashboard";
    signupButton.onclick = function () {
      window.location.href = "dashboard.html";
    };
  }
});

// ฟังก์ชันคุกกี้
function acceptCookies() {
  localStorage.setItem("cookiesAccepted", "true");
  document.getElementById("cookieConsent").style.display = "none";
}

function declineCookies() {
  localStorage.setItem("cookiesAccepted", "false");
  document.getElementById("cookieConsent").style.display = "none";
}

// แสดงคุกกี้เมื่อโหลดหน้า
window.addEventListener('load', function () {
  if (!localStorage.getItem("cookiesAccepted")) {
    document.getElementById("cookieConsent").style.display = "block";
  }
}); 


// scripts.js

document.addEventListener("DOMContentLoaded", () => { const form = document.getElementById("registerForm");

if (form) { form.addEventListener("submit", (e) => { e.preventDefault();

const nickname = document.getElementById("nickname").value.trim();
  const facebook = document.getElementById("facebook").value.trim();
  const contact = document.getElementById("contact").value.trim();
  const roles = Array.from(document.getElementById("roles").selectedOptions).map(
    (o) => o.value
  );
  const collab = document.getElementById("collab").value;

  if (!nickname || !facebook || !contact || roles.length === 0) {
    alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    return;
  }

  // สร้าง object ผู้ใช้
  const userData = {
    nickname,
    facebook,
    contact,
    roles,
    collab,
    timestamp: new Date().toISOString()
  };

  // เก็บไว้ใน localStorage (สำหรับ demo)
  localStorage.setItem(`devtogether_${nickname}`, JSON.stringify(userData));

  // เข้ารหัสชื่อเล่นเป็น token
  const token = btoa(nickname);

  // redirect ไปหน้าบัตร
  window.location.href = `card.html?user=${token}`;
});

} });

                                           
