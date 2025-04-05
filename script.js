// Change page content based on navigation
function changePage(pageId) {
    // Hide all sections
    document.querySelectorAll('section').forEach(function(section) {
        section.classList.remove('active');
        section.classList.add('hidden');
    });

    // Show the selected page
    document.getElementById(pageId).classList.remove('hidden');
    document.getElementById(pageId).classList.add('active');
}

// Auto-switch banners every 4 seconds (Home)
let bannerIndex = 0;
const banners = document.querySelectorAll('.banner img');
function changeBanner() {
    banners.forEach(function(banner, index) {
        banner.style.display = 'none';
    });
    bannerIndex = (bannerIndex + 1) % banners.length;
    banners[bannerIndex].style.display = 'block';
}

setInterval(changeBanner, 4000);
changeBanner();

// Show page content based on navigation
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }
}

document.addEventListener("DOMContentLoaded", function () {
    showPage('home'); // Show the home page initially

    const accessToken = "EAAS1TraTcEIBOwrZBE4OLdhFlXtZBupZCVazV04MgYN4T42Akm4ZBalODlvveAs2j5ueeIg8EoKp4LLUOFiJQImA4dKFjBVOkIzkuhLZBdCGZAwIZCrzfrs3eG7S9vgNapZCsC7A8Ex3INnkz3jSGKFY4iFS1MmTbrnJlyZAAXuHydY57mA9M2WspdxJa7nw4ULvzxVYZD";
    const pageId = "me"; // ใช้ "me" ถ้า token เป็นของเพจ
    const limit = 5;

    fetch(`https://graph.facebook.com/v18.0/${pageId}/posts?fields=message,created_time,full_picture,permalink_url&access_token=${accessToken}&limit=${limit}`)
        .then(res => res.json())
        .then(data => {
            const fbFeed = document.getElementById("fb-feed");
            data.data.forEach(post => {
                const postDiv = document.createElement("div");
                postDiv.className = "fb-post";
                postDiv.style.border = "1px solid #ddd";
                postDiv.style.padding = "10px";
                postDiv.style.marginBottom = "15px";
                postDiv.style.background = "#fff";
                postDiv.style.borderRadius = "10px";

                postDiv.innerHTML = `
                    <p>${post.message || "(ไม่มีข้อความ)"}</p>
                    ${post.full_picture ? `<img src="${post.full_picture}" style="max-width: 100%; border-radius: 5px;">` : ""}
                    <p><small>${new Date(post.created_time).toLocaleString()}</small></p>
                    <a href="${post.permalink_url}" target="_blank">ดูบน Facebook</a>
                `;
                fbFeed.appendChild(postDiv);
            });
        })
        .catch(err => {
            console.error("Error loading FB feed", err);
            document.getElementById("fb-feed").innerHTML = "<p>ไม่สามารถโหลดโพสต์ Facebook ได้ในขณะนี้</p>";
        });
});
