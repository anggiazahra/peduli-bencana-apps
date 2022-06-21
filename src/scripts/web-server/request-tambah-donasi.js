class DataTambahDonasi {
  static async addTambahDonasi(formdata, idPostinganDonasi) {
    const response = await fetch('http://localhost:5000/donasi/tambah', {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
    })
      .then((response) => response.text())
      .then((result) => {
        const data = JSON.parse(result);
        window.location.replace(`#/donasi-postingan-detail/${idPostinganDonasi}`);
        alert(data.message);
        window.location.reload();
      })
      .catch((error) => console.log('error', error));

    return response;
  }

  static async getAllTambahDonasi() {
    const response = await fetch('http://localhost:5000/donasi/tambah', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
    })
      .then((response) => response.text())
      .then((result) => (JSON.parse(result)))
      .catch((error) => console.log('error', error));

    return response;
  }

  static async putTambahDonasi(idTambahDonasi) {
    const response = await fetch(`http://localhost:5000/donasi/tambah/${idTambahDonasi}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
    })
      .then((response) => response.text())
      .then((result) => {
        const data = JSON.parse(result);
        alert(data.message);
        window.location.reload();
      })
      .catch((error) => console.log('error', error));

    return response;
  }
}

export default DataTambahDonasi;
