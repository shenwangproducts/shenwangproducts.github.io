<script>
  // ฟังก์ชันเลือกเสียงผู้หญิงที่นุ่มนวล
  function getFriendlyThaiVoice() {
    const voices = speechSynthesis.getVoices();
    return voices.find(voice =>
      voice.lang === 'th-TH' &&
      (
        voice.name.toLowerCase().includes("female") ||      
        voice.name.includes("Pattara")
      )
    );
  }

  // ฟังก์ชันพูดด้วยสไตล์นุ่มนวล
  function speakWithStyle(text, callback = null) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'th-TH';
    utterance.pitch = 1.4;
    utterance.rate = 0.92;

    const selectedVoice = getFriendlyThaiVoice();
    if (selectedVoice) utterance.voice = selectedVoice;

    utterance.onend = function () {
      if (callback) callback();
    };

    speechSynthesis.cancel(); // ยกเลิกคำสั่งก่อนหน้า ป้องกันพูดซ้อน
    speechSynthesis.speak(utterance);
  }

  // ฟังก์ชันพูดแนะนำตัว
  function speakIntro() {
    speakWithStyle("สวัสดีค่ะ ยินดีต้อนรับสู่เว็บไซต์เฉินหวังมีเดีย ฉันชื่อหลิงซี ฉันเป็นปัญญาประดิษฐ์ที่กำลังอยู่ระหว่างการพัฒนา กรุณารอติดตามการอัปเดตในอนาคตนะคะ ขอบคุณค่ะ");
  }

  // ปิด popup และให้ AI พูด
  function closePopup() {
    document.getElementById("popup").style.display = "none";
    speakIntro();
  }

  // โหลดเสียงล่วงหน้า (สำคัญในบางเบราว์เซอร์)
  window.speechSynthesis.onvoiceschanged = () => {
    // ให้มันโหลดเสียงก่อนถึงจะเรียกใช้
    getFriendlyThaiVoice(); 
  };
</script>
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
  
