function changePage(page) {
  const message = new SpeechSynthesisUtterance("");
  message.lang = 'th-TH';

  switch(page) {
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
      break;
  }

  // เมื่อพูดจบแล้วค่อยเปลี่ยนหน้า
  message.onend = function () {
    switch(page) {
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

  speechSynthesis.cancel(); // ล้างคิวเสียงก่อนหน้า (กันพูดซ้อน)
  speechSynthesis.speak(message);
}
