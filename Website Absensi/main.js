// main.js - Efek Partikel Melayang Aesthetic

document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById('particle-container');
    if (!container) return;

    // Menentukan jumlah partikel
    const jumlahPartikel = 15;

    for (let i = 0; i < jumlahPartikel; i++) {
        let partikel = document.createElement('div');

        // CSS Partikel yang disisipkan via JS
        partikel.style.position = 'absolute';

        // Ukuran acak antara 20px sampai 80px
        let size = Math.floor(Math.random() * 60) + 20;
        partikel.style.width = size + 'px';
        partikel.style.height = size + 'px';

        // Warna warni gradient transparan
        partikel.style.background = 'linear-gradient(45deg, rgba(37, 99, 235, 0.3), rgba(225, 29, 72, 0.3))';
        partikel.style.borderRadius = '50%';
        partikel.style.backdropFilter = 'blur(5px)';

        // Posisi awal acak
        partikel.style.left = Math.random() * 100 + 'vw';
        partikel.style.top = Math.random() * 100 + 'vh';

        // Kecepatan & arah gerak animasi yang berbeda-beda
        let durasiAnimasi = Math.random() * 10 + 10; // 10 sampai 20 detik
        let delayAnimasi = Math.random() * 5;

        // Keyframes animasi dibuat di Javascript (Web Animations API)
        partikel.animate([
            { transform: 'translate(0, 0) scale(1)', opacity: 0.3 },
            { transform: `translate(${Math.random() * 200 - 100}px, -${Math.random() * 300 + 200}px) scale(1.5)`, opacity: 0.8 },
            { transform: `translate(${Math.random() * 200 - 100}px, -${Math.random() * 600 + 500}px) scale(0.5)`, opacity: 0 }
        ], {
            duration: durasiAnimasi * 1000,
            delay: delayAnimasi * 1000,
            iterations: Infinity,
            direction: 'alternate',
            easing: 'ease-in-out'
        });

        container.appendChild(partikel);
    }
});