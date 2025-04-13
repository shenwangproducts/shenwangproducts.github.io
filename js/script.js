// ฟังก์ชันแนะนำตัว AI
function speakIntro() {
  const intro = new SpeechSynthesisUtterance(
    "你好，我是零曦，网站的第二代AI。你可以问我任何你感兴趣的事情"
  );
  intro.lang = 'zh-CN';
  intro.pitch = 1.5;
  intro.rate = 1.1;

  intro.onend = function () {
    const next = new SpeechSynthesisUtterance("กรุณาเลือกเมนูที่คุณสนใจด้านบนได้เลย");
    next.lang = 'th-TH';
    next.pitch = 1.2;
    next.rate = 1.1;
    speechSynthesis.speak(next);
  };

  speechSynthesis.cancel();
  speechSynthesis.speak(intro);
}

// ปิด popup และพูดแนะนำตัว
function closePopup() {
  document.getElementById("popup").style.display = "none";
  speakIntro();
}

// ฟังก์ชันเปลี่ยนหน้า + พูดก่อนเปลี่ยน
function changePage(page) {
  const message = new SpeechSynthesisUtterance("");
  message.lang = 'th-TH';
  message.pitch = 1.2;
  message.rate = 1.1;

  switch (page) {
    case 'promo':
      message.text = "กำลังเข้าสู่หน้าหลัก โปรโมทแอปของเรา";
      break;
    case 'news':
      message.text = "กำลังเข้าสู่หน้าข่าวสาร";
      break;
    case 'dowload':
      message.text = "กำลังเข้าสู่หน้าดาวน์โหลด กรุณาอ่านข้อตกลงก่อนดาวน์โหลด";
      break;
    case 'contact':
      message.text = "กำลังเข้าสู่หน้าติดต่อเรา";
      break;
    default:
      message.text = "กำลังย้อนไปหน้าแรก";
  }

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
      case 'dowload':
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
