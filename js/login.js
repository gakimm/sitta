function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const user = dataPengguna.find(
        item => item.email === email && item.password === password
    );
    // fitur login
    if(user){
        localStorage.setItem("loggedUser", JSON.stringify(user));
        alert("Login berhasil!");
        window.location.href = "dashboard.html";
    }else{
        alert("Email/password yang anda masukkan salah");
    }
}