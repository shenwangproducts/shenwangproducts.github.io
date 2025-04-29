import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";
import { db } from "../firebase-app.js";

// เช็ค maintenance
async function checkMaintenance() {
  const ref = doc(db, "maintenance_status", "tbPcdWyBJTZrDDdRrTGA");
  try {
    const snapshot = await getDoc(ref);
    if (snapshot.exists() && snapshot.data().istMaintenance === true) {
      window.location.href = "maintenance.html";
    }
  } catch (e) {
    console.error("Maintenance check error:", e);
  }
}
checkMaintenance();

// Intro + Popup
window.addEventListener("load", () => {
  if (!localStorage.getItem("popupShown")) {
    document.getElementById("popup").style.display = "flex";
  }
  if (!localStorage.getItem("cookiesAccepted")) {
    document.getElementById("cookieConsent").style.display = "block";
  }

  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const signupButton = document.getElementById("signupButton");
  if (isLoggedIn === "true") {
    signupButton.textContent = "dashboard";
    signupButton.onclick = () => window.location.href = "dashboard.html";
  }
});

window.closePopup = () => {
  if (document.getElementById("dontShowAgain").checked) {
    localStorage.setItem("popupShown", "true");
  }
  document.getElementById("popup").style.display = "none";
  speakIntro();
};

function speakIntro() {
  if (window.hasSpokenIntro) return;
  const intro = new SpeechSynthesisUtterance("你好，我是零曦，网站的第二代AI。你可以问我任何你感兴趣的事情");
  intro.lang = "zh-CN";
  intro.pitch = 1.2;
  intro.onend = () => {
    const next = new SpeechSynthesisUtterance("Please select the menu you are interested in above.");
    next.lang = "en-US";
    speechSynthesis.speak(next);
  };
  speechSynthesis.cancel();
  speechSynthesis.speak(intro);
  window.hasSpokenIntro = true;
}

// คุกกี้
window.acceptCookies = () => {
  localStorage.setItem("cookiesAccepted", "true");
  document.getElementById("cookieConsent").style.display = "none";
};
window.declineCookies = () => {
  localStorage.setItem("cookiesAccepted", "false");
  document.getElementById("cookieConsent").style.display = "none";
};

// เปลี่ยนหน้า
window.changePage = (page) => {
  const message = new SpeechSynthesisUtterance();
  message.lang = "th-TH";
  message.pitch = 1.1;

  switch (page) {
    case 'promo': message.text = "กำลังเข้าสู่หน้าหลัก โปรโมทแอปของเรา"; break;
    case 'news': message.text = "กำลังเข้าสู่หน้าข่าวสาร"; break;
    case 'dowload': message.text = "กำลังเข้าสู่หน้าดาวน์โหลด"; break;
    case 'contact': message.text = "กำลังเข้าสู่หน้าติดต่อเรา"; break;
    case 'signup': message.text = "กำลังไปหน้าลงทะเบียน"; break;
    default: message.text = "กำลังย้อนไปหน้าแรก";
  }

  speechSynthesis.cancel();
  speechSynthesis.speak(message);
  message.onend = () => {
    const pages = {
      promo: 'index.html',
      news: 'news.html',
      dowload: 'dowload.html',
      contact: 'contact.html',
      signup: 'signup.html'
    };
    window.location.href = pages[page] || 'index.html';
  };
};

window.startPromotion = () => window.location.href = "promo_submit.html";
