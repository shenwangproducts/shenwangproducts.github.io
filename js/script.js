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
        window.location.href = 'index.html';
        break;
      case 'news':
        window.location.href = 'news.html';
        break;
      case 'download':
        window.location.href = 'dowload.html';
        break;
      case 'contact':
        window.location.href = 'contact.html';
        break;
      case 'signup':
        window.location.href = 'signup.html';
        break;
      default:
        window.location.href = 'index.html';
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

// ตรวจสอบสถานะการบำรุงรักษาเมื่อโหลดหน้า
document.addEventListener("DOMContentLoaded", function() {
  checkMaintenanceMode();
});

// ฟังก์ชันตรวจสอบสถานะการบำรุงรักษา
function checkMaintenanceMode() {
  const isMaintenance = localStorage.getItem("maintenanceMode");
  
  // ถ้าอยู่ในสถานะ Maintenance ให้พาผู้ใช้ไปหน้า maintenance.html
  if (isMaintenance === "true") {
    window.location.href = "maintenance.html";
  }
}

// ฟังก์ชันเปลี่ยนสถานะการบำรุงรักษา (สามารถใช้สำหรับการทดสอบหรือจากแดชบอร์ด)
function setMaintenanceMode(isActive) {
  localStorage.setItem("maintenanceMode", isActive ? "true" : "false");
  if (isActive) {
    alert("เว็บไซต์อยู่ในสถานะการบำรุงรักษา");
    window.location.href = "maintenance.html";
  }
}
