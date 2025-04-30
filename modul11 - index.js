let angka = [1, 2, 3, 4, 5];

// forEach: tidak mengembalikan array baru
angka.forEach(function (nilai) {
  console.log(nilai * 2);
});

// map: menghasilkan array baru
let dikaliDua = angka.map(function (nilai) {
  return nilai * 2;
});
console.log(dikaliDua);

// filter: menyaring nilai tertentu
let ganjil = angka.filter(function (nilai) {
  return nilai % 2 !== 0;
});
console.log(ganjil); // [1, 3, 5]
