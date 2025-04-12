function changePage(page) {
  // พูดก่อนเปลี่ยนหน้า
  playWelcomeMessage(page);

  // รอให้เสียงเริ่มพูดก่อนค่อยเปลี่ยนหน้า (ประมาณ 0.5 วินาที)
  setTimeout(function () {
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
  }, 500); // รอครึ่งวินาที
}

function playWelcomeMessage(page) {
  let message = '';

  switch (page) {
    case 'promo':
      message = 'ยินดีต้อนรับสู่หน้าโปรโมท';
      break;
    case 'news':
      message = 'ยินดีต้อนรับสู่หน้าข่าวสาร';
      break;
    case 'download':
      message = 'ยินดีต้อนรับสู่หน้าดาวน์โหลด';
      break;
    case 'contact':
      message = 'ยินดีต้อนรับสู่หน้าติดต่อ';
      break;
    default:
      message = 'ยินดีต้อนรับสู่เว็บไซต์ของเรา';
  }

  const utterance = new SpeechSynthesisUtterance(message);
  utterance.lang = 'th-TH';
  window.speechSynthesis.speak(utterance);
}
