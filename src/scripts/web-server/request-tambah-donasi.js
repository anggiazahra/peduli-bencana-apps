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
        if (data.status === 'error') {
          swal('Gagal Ditambahkan', data.message, 'error');
        }
        if (data.status === 'success') {
          swal('Berhasil Ditambahkan', data.message, 'success');
          window.location.replace(`#/donasi-postingan-detail/${idPostinganDonasi}`);
        }
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

  static async putTambahDonasi(idTambahDonasi, idPostinganDonasi) {
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
        if (data.status === 'error') {
          swal('Gagal Konfirmasi', data.message, 'error');
        }
        if (data.status === 'success') {
          if (data.data.status === 'Sudah Dikonfirmasi') {
            swal('Berhasil Dikonfirmasi', data.message, 'success');
            window.location.replace(`#/donasi-konfirmasi/${idPostinganDonasi}`);
          }
          if (data.data.status === 'Belum Dikonfirmasi') {
            swal('Berhasil Dibatalkan', data.message, 'success');
            window.location.replace(`#/donasi-konfirmasi/${idPostinganDonasi}`);
          }
        }
      })
      .catch((error) => console.log('error', error));

    return response;
  }
}

export default DataTambahDonasi;
