const zonaWaktuSelector = document.getElementById("zonaWaktu");
const waktuElement = document.getElementById("waktu");

function updateWaktu() {
  const zonaWaktu = zonaWaktuSelector.value;
  const waktuSekarang = new Date().toLocaleString("en-US", { timeZone: zonaWaktu });
  const jam = new Date(waktuSekarang).toLocaleTimeString();

  waktuElement.textContent = jam;
}

zonaWaktuSelector.addEventListener("change", updateWaktu);

// Update waktu setiap detik
setInterval(updateWaktu, 1000);

// Inisialisasi waktu saat pertama kali dimuat
updateWaktu();
