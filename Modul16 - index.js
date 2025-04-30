function halo(nama, callback) {
    console.log("Halo, " + nama);
    callback();
  }
  
  function ucapanSelamat() {
    console.log("Selamat datang!");
  }
  
  halo("Mikhaii", ucapanSelamat);
  