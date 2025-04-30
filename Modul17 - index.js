let promise = new Promise(function(resolve, reject) {
    let sukses = true;
    if (sukses) {
      resolve("Operasi berhasil!");
    } else {
      reject("Operasi gagal!");
    }
  });
  
  promise
    .then(function(result) {
      console.log(result); // Operasi berhasil!
    })
    .catch(function(error) {
      console.log(error); // Operasi gagal!
    });
  