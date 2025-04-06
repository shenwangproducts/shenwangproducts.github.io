function changePage(page) {
    let pageUrl = '';

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

// When the download button is clicked, hide it (simulate acceptance)
document.getElementById("download-btn").addEventListener("click", function() {
    var downloadBtn = document.getElementById("download-btn");
    
    // Change button appearance to show acceptance
    downloadBtn.classList.add("accepted");
});

