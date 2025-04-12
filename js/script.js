// ฟังก์ชันเลือกเสียงผู้หญิงที่เป็นมิตร
function getFriendlyFemaleVoice(langPrefix) {
  const voices = speechSynthesis.getVoices();
  return voices.find(voice =>
    voice.lang.startsWith(langPrefix) &&
    (voice.name.toLowerCase().includes("female") ||
     voice.name.includes("Google") ||
     voice.name.includes("Microsoft Huihui") ||
     voice.name.includes("Pattara") ||
     voice.name.includes("Premwadee"))
  );
}

// ฟังก์ชันพูดด้วยน้ำเสียงนุ่มนวล
function speakWithStyle(text, lang = 'th-TH', callback = null) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.pitch = 1.4; // นุ่มนวล
  utterance.rate = 0.92; // ช้าเข้าใจง่าย

  const selectedVoice = getFriendlyFemaleVoice(lang);
  if (selectedVoice) utterance.voice = selectedVoice;

  utterance.onend = function () {
    if (callback) callback();
  };

  speechSynthesis.cancel();
  speechSynthesis.speak(utterance);
}

// ฟังก์ชันแนะนำตัว AI
function speakIntro() {
  speakWithStyle(
    " สวัสดีค่ะ ยินดีต้อนรับสู่เว็บไซต์เฉินหวังมีเดีย ฉันชื่อ Lingxi ฉันเป็นปัญญาประดิษฐ์รุ่นทดลองของเว็บไซต์นี้ตัวฉันกำลังถูกพัฒนาเพื่อให้ตอบสนองต่อความต้องการของผู้ใช้โปรดรอฉันอัพเดทให้เสร็จสมบูรณ์ฉันจึงจะสามารถช่วยเหลือทุกท่านได้ทุกอย่างในเฉพาะเว็บไซต์นี้นะคะ",
    'zh-CN', // ถ้าอยากพูดเป็นจีนแบบเนียน
    () => {
      speakWithStyle("กรุณาเลือกเมนูที่คุณสนใจด้านบนได้เลย", 'th-TH');
    }
  );
}

// ปิด popup และพูดแนะนำตัว
function closePopup() {
  document.getElementById("popup").style.display = "none";
  speakIntro();
}

// ฟังก์ชันเปลี่ยนหน้า + พูดก่อนเปลี่ยน
function changePage(page) {
  let message = "";
  switch (page) {
    case 'promo':
      message = "กำลังเข้าสู่หน้าหลัก โปรโมทแอปของเรา";
      break;
    case 'news':
      message = "กำลังเข้าสู่หน้าข่าวสาร";
      break;
    case 'dowload':
      message = "กำลังเข้าสู่หน้าดาวน์โหลด กรุณาอ่านข้อตกลงก่อนดาวน์โหลด";
      break;
    case 'contact':
      message = "กำลังเข้าสู่หน้าติดต่อเรา";
      break;
    default:
      message = "กลับสู่หน้าหลัก";
  }

  speakWithStyle(message, 'th-TH', () => {
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
  });
}

// โหลดเสียงให้พร้อมก่อนใช้งาน (แก้ปัญหาเสียงไม่มาในบางเบราว์เซอร์)
window.speechSynthesis.onvoiceschanged = () => {};
