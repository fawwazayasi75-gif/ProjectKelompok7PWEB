/* ==========================================================================
   AREA ANGGOTA 1: FAWWAZ (FITUR: BERANDA & FILTER POP-UP)
   ========================================================================== */

function togglePopup(popupId, event) {
    event.stopPropagation(); 
    const targetPopup = document.getElementById(popupId);
    const allPopups = document.querySelectorAll('.filter-popup');

    if (targetPopup.style.display === 'block') {
        targetPopup.style.display = 'none';
    } else {
       
        allPopups.forEach(popup => {
            popup.style.display = 'none';
        });
        
        targetPopup.style.display = 'block';
    }
}


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


