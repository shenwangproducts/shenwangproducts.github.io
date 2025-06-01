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


// js/scripts.js import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js"; import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-database.js";

const firebaseConfig = { apiKey: "AIzaSyDyCl7wI3sNfKo_LX7sAETNkX2J-5q5UDM", authDomain: "devtogether-10efd.firebaseapp.com", projectId: "devtogether-10efd", storageBucket: "devtogether-10efd.appspot.com", messagingSenderId: "891467432360", appId: "1:891467432360:web:2d328047ef0b916b489d9d", measurementId: "G-7ZWFHSS8RF", databaseURL: "https://devtogether-10efd-default-rtdb.firebaseio.com" };

const app = initializeApp(firebaseConfig); const db = getDatabase(app);

const urlParams = new URLSearchParams(window.location.search); const token = urlParams.get("user"); const card = document.getElementById("card");

if (!token) { card.innerHTML = "<h2>ไม่พบข้อมูลผู้ใช้</h2>"; } else { const userRef = ref(db, "members/" + token);

get(userRef) .then((snapshot) => { if (snapshot.exists()) { const data = snapshot.val(); const groupLink = https://facebook.com/groups/devtogether-group?join=${token}; const qrAPI = https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(groupLink)};

card.innerHTML = `
      <h2>${data.nickname}</h2>
      <div class="field"><span class="label">Facebook:</span><div class="value">${data.facebook}</div></div>
      <div class="field"><span class="label">ติดต่อ:</span><div class="value">${data.contact}</div></div>
      <div class="field"><span class="label">ตำแหน่ง:</span><div class="value">${data.roles.join(', ')}</div></div>
      <div class="field"><span class="label">เข้าร่วมทีมแบบ:</span><div class="value">${data.collab}</div></div>
      <div class="qr">
        <p style="margin-bottom: 8px; color: #aaa">สแกนเพื่อเข้ากลุ่ม</p>
        <img src="${qrAPI}" alt="QR Code" />
      </div>
    `;
  } else {
    card.innerHTML = "<h2>ไม่พบข้อมูลผู้ใช้</h2>";
  }
})
.catch((error) => {
  console.error(error);
  card.innerHTML = "<h2>เกิดข้อผิดพลาด</h2>";
});

}

