let currentLang = 'th-TH'; // กำหนดค่าเริ่มต้นเป็นภาษาไทย

// ฟังก์ชันแนะนำตัว AI
function speakIntro() {
  const intro = new SpeechSynthesisUtterance(
    currentLang === 'zh' ? "你好，我是零曦，网站的第二代AI。你可以问我任何你感兴趣的事情" : 
    currentLang === 'en' ? "Hello, I am Lingxi, the second generation AI of the website. You can ask me anything you're interested in." :
    "สวัสดีครับ/ค่ะ, ผม/ฉันคือ ZeroXi, AI รุ่นที่สองของเว็บไซต์นี้ คุณสามารถถามผม/ฉันเกี่ยวกับสิ่งที่คุณสนใจได้"
  );
  intro.lang = currentLang;

  intro.onend = function () {
    const next = new SpeechSynthesisUtterance(currentLang === 'zh' ? "请选择您感兴趣的菜单。" :
      currentLang === 'en' ? "Please choose the menu you are interested in." : "กรุณาเลือกเมนูที่คุณสนใจด้านบนได้เลย");
    next.lang = currentLang;
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

// ฟังก์ชันเปลี่ยนภาษา
function changeLanguage(language) {
  currentLang = language; // อัพเดทภาษา

  // เปลี่ยนภาษาของหน้าเว็บไซต์
  switch (language) {
    case 'th':
      // เปลี่ยนข้อความต่าง ๆ ให้เป็นภาษาไทย
      document.querySelector('header nav a:nth-child(1)').textContent = 'โปรโมท';
      document.querySelector('header nav a:nth-child(2)').textContent = 'ข่าวสาร';
      document.querySelector('header nav a:nth-child(3)').textContent = 'ดาวน์โหลด';
      document.querySelector('header nav a:nth-child(4)').textContent = 'ติดต่อ';
      break;
    case 'en':
      // เปลี่ยนข้อความต่าง ๆ ให้เป็นภาษาอังกฤษ
      document.querySelector('header nav a:nth-child(1)').textContent = 'Promote';
      document.querySelector('header nav a:nth-child(2)').textContent = 'News';
      document.querySelector('header nav a:nth-child(3)').textContent = 'Download';
      document.querySelector('header nav a:nth-child(4)').textContent = 'Contact';
      break;
    case 'zh':
      // เปลี่ยนข้อความต่าง ๆ ให้เป็นภาษาจีน
      document.querySelector('header nav a:nth-child(1)').textContent = '推广';
      document.querySelector('header nav a:nth-child(2)').textContent = '新闻';
      document.querySelector('header nav a:nth-child(3)').textContent = '下载';
      document.querySelector('header nav a:nth-child(4)').textContent = '联系我们';
      break;
    default:
      break;
  }
}

// ฟังก์ชันเปลี่ยนหน้า + พูดก่อนเปลี่ยน
function changePage(page) {
  const message = new SpeechSynthesisUtterance("");
  message.lang = currentLang;

  switch (page) {
    case 'promo':
      message.text = currentLang === 'zh' ? "正在进入主页，推广我们的应用" :
        currentLang === 'en' ? "Entering the main page, promoting our app" :
        "กำลังเข้าสู่หน้าหลัก โปรโมทแอปของเรา";
      break;
    case 'news':
      message.text = currentLang === 'zh' ? "正在进入新闻页面" :
        currentLang === 'en' ? "Entering the news page" : "กำลังเข้าสู่หน้าข่าวสาร";
      break;
    case 'dowload':
      message.text = currentLang === 'zh' ? "正在进入下载页面，请阅读下载协议" :
        currentLang === 'en' ? "Entering the download page, please read the agreement before downloading" :
        "กำลังเข้าสู่หน้าดาวน์โหลด กรุณาอ่านข้อตกลงก่อนดาวน์โหลด";
      break;
    case 'contact':
      message.text = currentLang === 'zh' ? "正在进入联系我们页面" :
        currentLang === 'en' ? "Entering the contact page" : "กำลังเข้าสู่หน้าติดต่อเรา";
      break;
    default:
      message.text = currentLang === 'zh' ? "返回主页" :
        currentLang === 'en' ? "Back to the main page" : "กลับสู่หน้าหลัก";
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
