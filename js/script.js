// ฟังก์ชันสำหรับเปลี่ยนหน้า
function changePage(page) {
    let pageUrl = '';

    // กำหนด URL ของแต่ละหน้า
    switch(page) {
        case 'promo':
            pageUrl = 'index.html';  // หน้าแรก
            break;
        case 'news':
            pageUrl = 'news.html';
            break;
        case 'download':
            pageUrl = 'download.html';
            break;
        case 'contact':
            pageUrl = 'contact.html';
            break;
        default:
            pageUrl = 'index.html';  // ถ้าไม่มีหน้าอื่นจะใช้หน้าแรก
    }

    // ใช้ window.location.href เพื่อเปลี่ยนหน้าไปที่ URL ใหม่
    window.location.href = pageUrl;

    // เรียกฟังก์ชันให้เสียงยินดีต้อนรับแสดงผล
    playWelcomeMessage(page);
}

// ฟังก์ชันการเล่นเสียงยินดีต้อนรับ
function playWelcomeMessage(page) {
    var message = "";

    // กำหนดข้อความที่จะพูดตามหน้าเว็บที่เลือก
    switch(page) {
        case 'promo':
            message = "ยินดีต้อนรับสู่หน้าโปรโมท! คุณสามารถดูข้อมูลเกี่ยวกับเว็บไซต์ของเราได้ที่นี่.";
            break;
        case 'news':
            message = "ยินดีต้อนรับสู่หน้าข่าวสาร! คุณสามารถดูข่าวสารล่าสุดของเราได้ที่นี่.";
            break;
        case 'download':
            message = "ยินดีต้อนรับสู่หน้าดาวน์โหลด! คุณสามารถดาวน์โหลดไฟล์ต่างๆ ที่นี่.";
            break;
        case 'contact':
            message = "ยินดีต้อนรับสู่หน้าติดต่อ! คุณสามารถติดต่อเราผ่านช่องทางต่างๆ ได้ที่นี่.";
            break;
        default:
            message = "ยินดีต้อนรับสู่เว็บไซต์ของเรา!";
            break;
    }

    // สั่งให้บราวเซอร์พูดข้อความที่กำหนด
    var speech = new SpeechSynthesisUtterance(message);
    window.speechSynthesis.speak(speech);
}

// JavaScript to handle checkbox and button behavior
document.getElementById("accept-terms").addEventListener("change", function() {
    var downloadBtn = document.getElementById("download-btn");
    
    // Check if the checkbox is ticked
    if (this.checked) {
        downloadBtn.disabled = false; // Enable button
        downloadBtn.classList.add("enabled"); // Add enabled class for styling
    } else {
        downloadBtn.disabled = true; // Disable button
        downloadBtn.classList.remove("enabled"); // Remove enabled class
    }
});

// เมื่อคลิกปุ่มดาวน์โหลด จะซ่อนไป (แสดงการยอมรับ)
document.getElementById("download-btn").addEventListener("click", function() {
    var downloadBtn = document.getElementById("download-btn");
    
    // เปลี่ยนรูปลักษณ์ของปุ่มเพื่อแสดงการยอมรับ
    downloadBtn.classList.add("accepted");
});
