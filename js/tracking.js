function cariTracking() {
    const nomorDO = document.getElementById("nomorDO").value.trim();
    const hasil = document.getElementById("hasilTracking");

    const tracking = dataTracking[nomorDO];

    if (!tracking) {
        hasil.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-exclamation-circle"></i>
                <h3>Data tidak ditemukan</h3>
                <p>Nomor Delivery Order tidak tersedia</p>
            </div>
        `;
        return;
    }

    let badgeClass = "";

    if (tracking.status === "Dalam Perjalanan") {
        badgeClass = "status-perjalanan";
    } else if (tracking.status === "Dikirim") {
        badgeClass = "status-dikirim";
    } else {
        badgeClass = "status-selesai";
    }

    let timelineHTML = "";

    tracking.perjalanan.forEach(item => {
        timelineHTML += `
            <div class="timeline-item">
                <h4>${item.waktu}</h4>
                <p>${item.keterangan}</p>
            </div>
        `;
    });

    hasil.innerHTML = `
        <div class="tracking-card">
            <h2>${tracking.nama}</h2>

            <span class="status-badge ${badgeClass}">
                ${tracking.status}
            </span>

            <div class="tracking-info">
                <p><strong>No DO:</strong> ${tracking.nomorDO}</p>
                <p><strong>Ekspedisi:</strong> ${tracking.ekspedisi}</p>
                <p><strong>Tanggal Kirim:</strong> ${tracking.tanggalKirim}</p>
                <p><strong>Paket:</strong> ${tracking.paket}</p>
                <p><strong>Total:</strong> ${tracking.total}</p>
            </div>

            <hr>

            <h3>Riwayat Perjalanan</h3>
            ${timelineHTML}
        </div>
    `;
}

function logout() {
    localStorage.removeItem("loggedUser");
    window.location.href = "login.html";
}