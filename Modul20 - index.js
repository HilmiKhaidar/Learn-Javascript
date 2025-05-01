try {
    let result = 10 / 0;
    if (!isFinite(result)) {
      throw new Error("Tidak dapat membagi dengan nol");
    }
    console.log(result);
  } catch (error) {
    console.error("Terjadi kesalahan: " + error.message);
  }
  