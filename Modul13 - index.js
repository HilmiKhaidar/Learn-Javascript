// Spread
let angka1 = [1, 2, 3];
let angka2 = [...angka1, 4, 5];
console.log(angka2); // [1, 2, 3, 4, 5]

// Rest
function total(...nilai) {
  return nilai.reduce((a, b) => a + b);
}
console.log(total(1, 2, 3)); // 6
