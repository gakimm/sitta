const user = JSON.parse(localStorage.getItem("loggedUser"));

if (!user) {
    window.location.href = "login.html";
}

// greeting user
document.getElementById("username").innerText = user.nama;
document.getElementById("role").innerText = user.role;

function getGreeting() {
    const hour = new Date().getHours();

    if (hour < 12) {
        return "Selamat Pagi";
    } else if (hour < 18) {
        return "Selamat Siang";
    } else {
        return "Selamat Malam";
    }
}

document.getElementById("greeting").innerText = getGreeting();

// total stok buku
let totalStok = dataBahanAjar.reduce((total, item) => {
    return total + item.stok;
}, 0);

// total pengguna
let totalUser = dataPengguna.length;

// total tracking aktif
let totalTracking = Object.keys(dataTracking).length;


// render ke dashboard
document.getElementById("totalStok").innerText = totalStok;
document.getElementById("totalUser").innerText = totalUser;
document.getElementById("totalTracking").innerText = totalTracking;


// logout
function logout() {
    localStorage.removeItem("loggedUser");
    window.location.href = "login.html";
}