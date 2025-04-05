// เปลี่ยนหน้าเว็บตามปุ่มนำทาง
function changePage(pageId) {
    document.querySelectorAll('section').forEach(function(section) {
        section.classList.remove('active');
        section.classList.add('hidden');
    });

    document.getElementById(pageId).classList.remove('hidden');
    document.getElementById(pageId).classList.add('active');
}

// แสดงหน้าเว็บที่กำหนด
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

// เปลี่ยนแบนเนอร์อัตโนมัติทุก 4 วินาที
let bannerIndex = 0;
const banners = document.querySelectorAll('.banner img');
function changeBanner() {
    banners.forEach((banner) => {
        banner.style.display = 'none';
    });
    bannerIndex = (bannerIndex + 1) % banners.length;
    banners[bannerIndex].style.display = 'block';
}
setInterval(changeBanner, 4000);
changeBanner();

// ข้อมูลแอป (สามารถเพิ่มได้)
const apps = [
    {
        id: 'app1',
        name: 'Hunter Killer of Krampus',
        description: 'รายละเอียดเกี่ยวกับเกม Hunter Killer of Krampus...',
        image: 'assets/img/app1.jpg',
        downloadLink: 'https://yourdownloadlink1.com'
    },
    {
        id: 'app2',
        name: 'ชีวิตที่สมบูรณ์แบบ',
        description: 'รายละเอียดเกี่ยวกับเกม ชีวิตที่สมบูรณ์แบบ...',
        image: 'assets/img/app2.jpg',
        downloadLink: 'https://yourdownloadlink2.com'
    },
    {
        id: 'shenwangHub',
        name: 'Shenwang Hub',
        description: 'รายละเอียดเกี่ยวกับ Shenwang Hub...',
        image: 'assets/img/shenwang-hub.jpg',
        downloadLink: 'https://yourdownloadlink3.com'
    },
    {
        id: 'shenwangMobile',
        name: 'Shenwang Mobile',
        description: 'รายละเอียดเกี่ยวกับ Shenwang Mobile...',
        image: 'assets/img/shenwang-mobile.jpg',
        downloadLink: 'https://yourdownloadlink4.com'
    }
];

// แสดงรายละเอียดแอป
function showAppDetail(appId) {
    const app = apps.find(a => a.id === appId);
    if (!app) return;

    const contentDiv = document.getElementById('app-detail-content');
    contentDiv.innerHTML = `
        <h3>${app.name}</h3>
        <img src="${app.image}" alt="${app.name}" style="width: 100%; border-radius: 10px;">
        <p>${app.description}</p>
        <a href="${app.downloadLink}" target="_blank">ดาวน์โหลด</a>
    `;

    showPage('app-detail');
}

// โหลดโพสต์ Facebook
document.addEventListener("DOMContentLoaded", function () {
    showPage('home'); // เริ่มที่หน้า Home

    const accessToken = "YOUR_FACEBOOK_ACCESS_TOKEN";
    const pageId = "me"; // หรือใส่ Page ID
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

    // ถ้าคุณใช้ปุ่มแบบ data attribute
    document.querySelectorAll('.detail-btn').forEach(button => {
        button.addEventListener('click', function () {
            const appId = this.dataset.appId;
            showAppDetail(appId);
        });
    });
});
