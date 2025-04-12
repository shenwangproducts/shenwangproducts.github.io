<script>
  // โหลดเสียงล่วงหน้า (สำคัญในบางเบราว์เซอร์)
  window.speechSynthesis.onvoiceschanged = () => {
    getFriendlyThaiVoice(); 
  };

  // ฟังก์ชันเลือกเสียงผู้หญิงที่นุ่มนวล
  function getFriendlyThaiVoice() {
    const voices = speechSynthesis.getVoices();
    // ค้นหาเสียงที่เหมาะสม
    let selectedVoice = voices.find(voice =>
      voice.lang === 'th-TH' &&
      (
        voice.name.toLowerCase().includes("female") ||      
        voice.name.includes("Pattara")
      )
    );
    
    // ถ้าไม่พบเสียงที่ต้องการ, ให้เลือกเสียงอื่นที่มีอยู่
    if (!selectedVoice) {
      selectedVoice = voices.find(voice => voice.lang === 'th-TH');
    }

    return selectedVoice;
  }

  // ฟังก์ชันพูดด้วยสไตล์นุ่มนวล
  function speakWithStyle(text, callback = null) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'th-TH';
    utterance.pitch = 1.4; // เสียงสูงเล็กน้อยเพื่อความนุ่มนวล
    utterance.rate = 0.92; // ความเร็วช้าหน่อย เข้าใจง่าย

    const selectedVoice = getFriendlyThaiVoice();
    if (selectedVoice) utterance.voice = selectedVoice;

    utterance.onend = function () {
      if (callback) callback();
    };

    speechSynthesis.cancel(); // ยกเลิกเสียงก่อนหน้า
    speechSynthesis.speak(utterance);
  }

  // ฟังก์ชันพูดแนะนำตัว
  function speakIntro() {
    speakWithStyle(
      "สวัสดีค่ะ ยินดีต้อนรับสู่เว็บไซต์เฉินหวังมีเดีย ฉันชื่อหลิงซี ฉันเป็นปัญญาประดิษฐ์ที่กำลังอยู่ระหว่างการพัฒนา กรุณารอติดตามการอัปเดตในอนาคตนะคะ ขอบคุณค่ะ"
    );
  }

  // ฟังก์ชันปิด popup แล้วพูดแนะนำตัว
  function closePopup() {
    const popup = document.getElementById("popup");
    if (popup) popup.style.display = "none";
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
      case 'download':
        message = "กำลังเข้าสู่หน้าดาวน์โหลด กรุณาอ่านข้อตกลงก่อนดาวน์โหลด";
        break;
      case 'contact':
        message = "กำลังเข้าสู่หน้าติดต่อเรา";
        break;
      default:
        message = "กลับสู่หน้าหลัก";
    }

    speakWithStyle(message, () => {
      switch (page) {
        case 'promo':
          window.location.replace('index.html');
          break;
        case 'news':
          window.location.replace('news.html');
          break;
        case 'download':
          window.location.replace('download.html');
          break;
        case 'contact':
          window.location.replace('contact.html');
          break;
        default:
          window.location.replace('index.html');
      }
    });
  }
</script>
