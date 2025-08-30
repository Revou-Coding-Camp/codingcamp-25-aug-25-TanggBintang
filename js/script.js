// Login Form
document.addEventListener("DOMContentLoaded", () => {
    const formLogin = document.getElementById("formLogin");
    if (formLogin) {
        formLogin.addEventListener("submit", function (event) {
            event.preventDefault();

            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();
            const pesanError = document.getElementById("pesanError");

            // Validasi password (minimal 6, ada huruf besar & angka)
            const regexPassword = /^(?=.*[A-Z])(?=.*\d).{6,}$/;

            if (!regexPassword.test(password)) {
                pesanError.textContent = "Kata sandi harus minimal 6 karakter, mengandung huruf besar & angka.";
                return;
            }

            if (username === "" || password === "") {
                pesanError.textContent = "Nama pengguna dan kata sandi wajib diisi.";
                return;
            }

            // Jika valid
            window.location.href = "index.html";
        });
    }

    // Form Pesan
    const formPesan = document.getElementById("formPesan");
    if (formPesan) {
        formPesan.addEventListener("submit", function (event) {
            event.preventDefault();

            const nama = document.getElementById("nama").value;
            const isiPesan = document.getElementById("isiPesan").value;
            const hasilPesan = document.getElementById("hasilPesan");

            hasilPesan.textContent = `Terima kasih ${nama}, pesanmu: "${isiPesan}" sudah terkirim.`;
        });
    }
});
