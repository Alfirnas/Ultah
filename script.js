document.addEventListener('DOMContentLoaded', () => {
    // Mengambil elemen-elemen dari HTML
    const submitBtn = document.getElementById('submitBtn');
    const wishInput = document.getElementById('wishInput');
    const messageDisplay = document.getElementById('message');

    // Menambahkan event listener pada tombol submit
    submitBtn.addEventListener('click', () => {
        // Mendapatkan nilai dari input teks dan menghapus spasi di awal/akhir
        const inputValue = wishInput.value.trim();

        // Memeriksa apakah input teks kosong atau tidak
        if (inputValue === '') {
            // Jika kosong, tampilkan pesan ini
            messageDisplay.textContent = 'isi dulu dong';
            messageDisplay.style.color = 'red'; // Mengubah warna pesan menjadi merah
        } else {
            // Jika terisi, tampilkan pesan ini
            messageDisplay.textContent = 'AAMIIN!!! SEMOGA SEMUA DOA DOA YANG KAMU TULIS TERKABUL DAN MENDAPAT YANG LEBIH BAIIK YAAAA AIIIII..!!!! SELAMAT ULANG TAHUN AIIIII!!!!';
            messageDisplay.style.color = 'green'; // Mengubah warna pesan menjadi hijau
        }
    });
});