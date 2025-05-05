const mulai = document.getElementById("mulai");
const selesai = document.getElementById("selesai");
const hasil = document.getElementById("hasil");
const total = document.getElementById("total");
const hitungBtn = document.getElementById("hitungBtn");
const resetBtn = document.getElementById("resetBtn");

let totalBelajar = 0;

hitungBtn.addEventListener("click", () => {
  const jamMulai = mulai.value;
  const jamSelesai = selesai.value;

  if (!jamMulai || !jamSelesai) {
    alert("Isi dulu jam mulai dan selesai!");
    return;
  }

  const [jam1, menit1] = jamMulai.split(":").map(Number);
  const [jam2, menit2] = jamSelesai.split(":").map(Number);

  const awal = new Date();
  awal.setHours(jam1, menit1);

  const akhir = new Date();
  akhir.setHours(jam2, menit2);

  let selisih = (akhir - awal) / 1000 / 60; // dalam menit

  if (selisih < 0) {
    alert("Jam selesai tidak boleh lebih awal dari jam mulai.");
    return;
  }

  const jam = Math.floor(selisih / 60);
  const menit = selisih % 60;

  hasil.textContent = `${jam} jam ${menit} menit`;

  totalBelajar += selisih;
  total.textContent = `${totalBelajar} menit`;
});

resetBtn.addEventListener("click", () => {
  hasil.textContent = "Belum dihitung";
  total.textContent = "0 menit";
  totalBelajar = 0;
  mulai.value = "";
  selesai.value = "";
});
