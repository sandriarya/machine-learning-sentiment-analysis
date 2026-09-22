const sidebar = document.querySelector(".sidebar");
const btn = document.getElementById("toggleSidebar");
const mobileBtn = document.getElementById("mobileMenuBtn");
const backdrop = document.getElementById("sidebarBackdrop");

const MOBILE_BREAKPOINT = 768;

// ======================================================
// TOGGLE UTAMA
// Class yang sama ("collapsed" pada .sidebar,
// "sidebar-collapsed" pada body) dipakai untuk 2 arti
// berbeda tergantung ukuran layar (diatur lewat CSS):
//   - Desktop (>768px): collapsed = sidebar menyempit jadi rel ikon
//   - Mobile  (<=768px): collapsed = sidebar terbuka (slide-in)
// ======================================================
function toggleSidebar() {
    sidebar.classList.toggle("collapsed");
    document.body.classList.toggle("sidebar-collapsed");

    const isOpenOnMobile =
        window.innerWidth <= MOBILE_BREAKPOINT &&
        sidebar.classList.contains("collapsed");

    if (mobileBtn) {
        mobileBtn.setAttribute("aria-expanded", isOpenOnMobile ? "true" : "false");
    }
}

function closeMobileSidebar() {
    if (window.innerWidth <= MOBILE_BREAKPOINT) {
        sidebar.classList.remove("collapsed");
        document.body.classList.remove("sidebar-collapsed");
        if (mobileBtn) mobileBtn.setAttribute("aria-expanded", "false");
    }
}

if (btn) btn.addEventListener("click", toggleSidebar);
if (mobileBtn) mobileBtn.addEventListener("click", toggleSidebar);

// Tap di area gelap (backdrop) menutup menu mobile
if (backdrop) backdrop.addEventListener("click", closeMobileSidebar);

// Pilih salah satu menu -> otomatis tutup sidebar mobile
// (di desktop tidak berpengaruh karena fungsi ini no-op saat lebar > 768px)
document.querySelectorAll(".menu-item").forEach(function (item) {
    item.addEventListener("click", closeMobileSidebar);
});

// Tombol Escape menutup menu mobile
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMobileSidebar();
});

// Saat layar di-resize melewati breakpoint (mis. putar tablet/HP),
// reset state supaya tidak "nyangkut" di kondisi yang salah.
window.addEventListener("resize", function () {
    if (window.innerWidth > MOBILE_BREAKPOINT) {
        sidebar.classList.remove("collapsed");
        document.body.classList.remove("sidebar-collapsed");
    }
});
