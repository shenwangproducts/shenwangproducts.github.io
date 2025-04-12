// ฟังก์ชันแนะนำตัว AI
function speakIntro() {
  const intro = new SpeechSynthesisUtterance(
    "你好，我是零曦，网站的第二代AI。你可以问我任何你感兴趣的事情"
  );
  intro.lang = 'zh-CN';  // เปลี่ยนให้เป็นภาษาจีน (ถ้าคุณต้องการเสียงที่เหมาะสม)
  intro.pitch = 1.5;     // ปรับเสียงให้มีความนุ่มนวลขึ้น (1.5 จะทำให้เสียงไม่สูงเกินไป)
  intro.rate = 1.1;      // ปรับความเร็วในการพูดให้ช้าลงเล็กน้อย

  intro.onend = function () {
    const next = new SpeechSynthesisUtterance("กรุณาเลือกเมนูที่คุณสนใจด้านบนได้เลย");
    next.lang = 'th-TH';   // ภาษาไทยสำหรับข้อความนี้
    next.pitch = 1.2;      // ปรับเสียงให้มีความละมุน
    next.rate = 1.1;       // ความเร็วการพูดที่ช้าลงเล็กน้อย
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
  message.pitch = 1.2;      // เสียงนุ่มนวล
  message.rate = 1.1;       // ความเร็วพูดที่ช้าลงเล็กน้อย

  switch (page) {
    case 'promo':
      message.text = "กำลังเข้าสู่หน้าหลัก โปรโมทแอปของเรา";
      break;
    case 'news':
      message.text = "กำลังเข้าสู่หน้าข่าวสาร";
      break;
    case 'download':
      message.text = "กำลังเข้าสู่หน้าดาวน์โหลด กรุณาอ่านข้อตกลงก่อนดาวน์โหลด";
      break;
    case 'contact':
      message.text = "กำลังเข้าสู่หน้าติดต่อเรา";
      break;
    default:
      message.text = "กลับสู่หน้าหลัก";
  }

  // พูดก่อน redirect
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
