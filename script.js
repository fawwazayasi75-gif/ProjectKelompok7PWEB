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
        allPopups.forEach(popup => { popup.style.display = 'none'; });
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
        allPopups.forEach(popup => { popup.style.display = 'none'; });
    }
});

/* ==========================================================================
   AREA ANGGOTA 2 (FITUR: DETAIL LOWONGAN & LAMARAN)
   ========================================================================== */
// Tidak ada script yang dibutuhkan karena fitur melamar diarahkan langsung ke website eksternal.


/* ==========================================================================
   ANGGOTA 3: Nabila (PROFIL, FAVORIT, & TENTANG)
   ========================================================================== */

// 1. Fungsi Switch Mode Gelap / Terang
function toggleDarkMode() {
    const isDark = document.getElementById('darkModeToggle').checked;
    const appContainer = document.getElementById('app-container');
    
    if (isDark) {
        document.body.style.backgroundColor = "#121212";
        if (appContainer) {
            appContainer.style.backgroundColor = "#1e1e1e";
            appContainer.style.color = "#ffffff";
        }
        alert("Mode Gelap diaktifkan!");
    } else {
        document.body.style.backgroundColor = "#f5f5f5";
        if (appContainer) {
            appContainer.style.backgroundColor = "#ffffff";
            appContainer.style.color = "#333333";
        }
        alert("Mode Terang diaktifkan!");
    }
}

// 2. Fungsi Ubah Nama Profil Interaktif
function editProfil() {
    const displayElement = document.getElementById('userDisplayName');
    const avatarElement = document.getElementById('avatarIcon');
    
    const namaLama = displayElement ? displayElement.innerText : "";
    const namaBaru = prompt("Masukkan nama pengguna baru:", namaLama);
    
    if (namaBaru && namaBaru.trim() !== "") {
        if (displayElement) displayElement.innerText = namaBaru.trim();
        if (avatarElement) avatarElement.innerText = namaBaru.trim().charAt(0).toUpperCase();
        alert("Nama profil berhasil diperbarui!");
    }
}

// 3. Fungsi Keluar dari Akun (Logout)
function prosesLogout() {
    const konfirmasi = confirm("Apakah Anda yakin ingin keluar dari akun ini?");
    if (konfirmasi) {
        alert("Anda telah berhasil keluar.");
        window.location.href = "index.html"; // Navigasi kembali ke beranda
    }
}

// 4. Fungsi Hapus Item dari Favorit
document.addEventListener("DOMContentLoaded", function () {
    const hapusButtons = document.querySelectorAll(".bookmark-btn");
    hapusButtons.forEach(function (btn) {
        btn.addEventListener("click", function () {
            const card = this.closest(".job-card");
            if (card && confirm("Yakin ingin menghapus lowongan ini dari favorit?")) {
                card.remove();
                alert("Lowongan berhasil dihapus dari favorit!");
            }
        });
    });
});