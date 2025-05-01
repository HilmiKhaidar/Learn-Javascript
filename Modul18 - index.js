function ambilData() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("Data berhasil diambil!");
      }, 2000);
    });
  }
  
  async function prosesData() {
    let result = await ambilData();
    console.log(result); // Data berhasil diambil!
  }
  
  prosesData();
  