// Nullish Coalescing
let username = null;
let tampilNama = username ?? "Guest";
console.log(tampilNama); // Guest

// Optional Chaining
let user = {
  profil: {
    nama: "Mikhaii"
  }
};
console.log(user?.profil?.nama); // Mikhaii
console.log(user?.alamat?.kota); // undefined (tidak error)
