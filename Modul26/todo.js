// Ambil elemen
const inputTugas = document.getElementById("inputTugas");
const tambahBtn = document.getElementById("tambahBtn");
const daftarTugas = document.getElementById("daftarTugas");

// Load dari localStorage saat halaman dibuka
document.addEventListener("DOMContentLoaded", muatTugas);

// Event tombol tambah
tambahBtn.addEventListener("click", function () {
  const tugas = inputTugas.value.trim();
  if (tugas !== "") {
    tambahTugasKeDOM(tugas);
    simpanTugas(tugas);
    inputTugas.value = "";
  }
});

// Tambah ke DOM
function tambahTugasKeDOM(teks) {
  const li = document.createElement("li");
  li.textContent = teks;

  const hapusBtn = document.createElement("button");
  hapusBtn.textContent = "Hapus";
  hapusBtn.addEventListener("click", function () {
    daftarTugas.removeChild(li);
    hapusTugas(teks);
  });

  li.appendChild(hapusBtn);
  daftarTugas.appendChild(li);
}

// Simpan ke localStorage
function simpanTugas(tugas) {
  let semuaTugas = ambilTugas();
  semuaTugas.push(tugas);
  localStorage.setItem("todoList", JSON.stringify(semuaTugas));
}

// Ambil semua tugas dari localStorage
function ambilTugas() {
  let data = localStorage.getItem("todoList");
  return data ? JSON.parse(data) : [];
}

// Muat semua tugas saat reload
function muatTugas() {
  const semuaTugas = ambilTugas();
  semuaTugas.forEach(tambahTugasKeDOM);
}

// Hapus tugas dari localStorage
function hapusTugas(tugas) {
  let semuaTugas = ambilTugas();
  semuaTugas = semuaTugas.filter(item => item !== tugas);
  localStorage.setItem("todoList", JSON.stringify(semuaTugas));
}
