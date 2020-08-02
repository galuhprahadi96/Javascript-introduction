const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let cek = dataDay.find((item) => {
        return item === day;
      });

      if (cek) {
        resolve(cek);
      } else {
        reject(new Error("Hari ini bukan hari kerja"));
      }
    }, 3000);
  });
};

// then catch
// cekHariKerja("minggu")
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// then dan catch digunakan untuk menangkap hasil dari promise dimana then akan menangkap nilai dari resolve dan catch digunakan untuk menangkap nilai reject

// try catch
async function cek(day) {
  try {
    const result = await cekHariKerja(day);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

cek("minggu");
