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
