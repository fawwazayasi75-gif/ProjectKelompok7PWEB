/* ==========================================================================
   AREA ANGGOTA 1: FAWWAZ (FITUR: BERANDA & FILTER POP-UP)
   ========================================================================== */

// Fungsi untuk membuka dan menutup pop-up filter
function togglePopup(popupId, event) {
    event.stopPropagation(); // Mencegah klik bocor
    const targetPopup = document.getElementById(popupId);
    const allPopups = document.querySelectorAll('.filter-popup');

    if (targetPopup.style.display === 'block') {
        targetPopup.style.display = 'none';
    } else {
        // Tutup semua pop-up yang lain dulu
        allPopups.forEach(popup => {
            popup.style.display = 'none';
        });
        // Buka pop-up yang diminta
        targetPopup.style.display = 'block';
    }
}

// Fungsi untuk menutup pop-up jika mengklik sembarang tempat di luar kotak
document.addEventListener('click', function(event) {
    const allPopups = document.querySelectorAll('.filter-popup');
    let isClickInsidePopup = false;

    allPopups.forEach(popup => {
        if (popup.contains(event.target)) {
            isClickInsidePopup = true;
        }
    });

    if (!isClickInsidePopup && !event.target.classList.contains('filter-btn')) {
        allPopups.forEach(popup => {
            popup.style.display = 'none';
        });
    }
});


