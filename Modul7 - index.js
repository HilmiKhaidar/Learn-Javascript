let nilai = 85;

if (nilai >= 90) {
  console.log("A");
} else if (nilai >= 75) {
  console.log("B");
} else {
  console.log("C");
}

switch (nilai) {
  case 100:
    console.log("Sempurna!");
    break;
  default:
    console.log("Nilai bukan 100");
}
