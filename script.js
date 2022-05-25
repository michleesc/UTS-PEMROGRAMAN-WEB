function login () {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    if (user =="user" && pass =="123") {
        alert("Selamat Datang di website kami");
    }
    else {
        alert("username atau password Anda salah!");
    }
}