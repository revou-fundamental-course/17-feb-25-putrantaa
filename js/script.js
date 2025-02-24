//Gambar Autoslide
document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".gambar img");
    let currentIndex = 0;
    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }
    
    // Menjalankan slide otomatis setiap 2 detik
    setInterval(nextSlide, 2000);
    
    // Tampilkan slide pertama saat halaman dimuat
    showSlide(currentIndex);
});

//Form validasi
document.addEventListener("DOMContentLoaded", function () {
    const inputs = document.querySelectorAll("input[required]");

    inputs.forEach(input => {
        input.addEventListener("invalid", function () {
            this.setCustomValidity("Ini harus diisi!");
        });

        input.addEventListener("input", function () {
            this.setCustomValidity("");
        });
    });
});