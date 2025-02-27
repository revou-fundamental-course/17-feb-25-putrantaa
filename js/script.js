/////////////////FUNGSI GAMBAR AUTOSLIDE/////////////////
function gambarSlide() {

    // mengambil semua elemen pada class gambar
    let slides = document.querySelectorAll(".gambar img");
    let currentIndex = 0;

    // fungsi untuk menampilkan slide berdasarkan indeks
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }

    // fungsi untuk menampilkan slide berikutnya
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    // menjalankan slide otomatis setiap 2 detik
    setInterval(nextSlide, 2000);

    // tampilkan slide pertama saat fungsi dipanggil
    showSlide(currentIndex);
}

// memanggil fungsi setelah halaman dimuat
document.addEventListener("DOMContentLoaded", function () {
    gambarSlide();
});


/////////////////FUNGSI FORM VALIDASI/////////////////
function formValidasi() {
    const form = document.querySelector("form"); // mengambil elemen form
    const inputs = document.querySelectorAll("input[required]");

    inputs.forEach(input => {
        // event ketika input tidak valid
        input.addEventListener("invalid", function () {
            this.setCustomValidity("Ini harus diisi!");
        });

        // event ketika input mulai diisi 
        input.addEventListener("input", function () {
            this.setCustomValidity("");
        });
    });

    // event ketika form dikirim
    form.addEventListener("submit", function (event) {
        let isValid = true;

        if (!isValid) {
            event.preventDefault(); // hentikan pengiriman form jika ada input kosong
        } else {
            alert("Form sudah terkirim!"); // tampilkan alert jika form valid
        }
    });
}

// panggil fungsi saat DOM telah dimuat
document.addEventListener("DOMContentLoaded", function () {
    formValidasi();
});

