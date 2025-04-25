let hasSpokenIntro = false;  // สถานะการพูดแนะนำตัว

// ฟังก์ชันพูดแนะนำตัว
function speakIntro() {
  if (hasSpokenIntro) return; // ถ้าพูดไปแล้วไม่ให้พูดซ้ำ

  const intro = new SpeechSynthesisUtterance(
    "你好，我是零曦，网站的第二代AI。你可以问我任何你感兴趣的事情"
  );
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
  
  hasSpokenIntro = true; // ตั้งค่าสถานะว่าได้พูดแนะนำตัวแล้ว
}

// ฟังก์ชันปิด Popup และพูดแนะนำตัวเมื่อปิด
function closePopup() {
  // Check if the "Don't show again" checkbox is checked
  if (document.getElementById("dontShowAgain").checked) {
    // Store the status to localStorage to prevent showing popup again
    localStorage.setItem("popupShown", "true");
  }
  // Hide the popup
  document.getElementById("popup").style.display = "none";
  speakIntro(); // เมื่อปิด popup จะพูดแนะนำตัว
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
    case 'download':
      pageMessage = "กำลังเข้าสู่หน้าดาวน์โหลด กรุณาอ่านข้อตกลงก่อนดาวน์โหลด";
      break;
    case 'contact':
      pageMessage = "กำลังเข้าสู่หน้าติดต่อเรา";
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
        window.location.href = 'download.html';
        break;
      case 'contact':
        window.location.href = 'contact.html';
        break;
      default:
        window.location.href = 'index.html';
    }
  };
}

// ฟังก์ชันเริ่มโปรโมท
function startPromotion() {
  alert("ระบบจะเปิดให้เริ่มโปรโมทเร็ว ๆ นี้!");
}

// เช็คว่า popup แสดงไปแล้วหรือยัง
if (!localStorage.getItem("popupShown")) {
  // แสดง popup เท่านั้นถ้ายังไม่เคยแสดง
  document.getElementById("popup").style.display = "flex";
}
