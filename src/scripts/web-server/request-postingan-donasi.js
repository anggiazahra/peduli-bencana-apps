class DataPostinganDonasi {
  static async addPostinganDonasi(formdata) {
    const response = await fetch('http://localhost:5000/donasi/postingan', {
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
          window.location.replace(`#/donasi-postingan-detail/${data.data.idPostinganDonasi}`);
        }
      })
      .catch((error) => console.log('error', error));

    return response;
  }

  static async getAllPostinganDonasi() {
    const response = await fetch('http://localhost:5000/donasi/postingan', {
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

  static async getPostinganDonasiById(idPostinganDonasi) {
    const response = await fetch(`http://localhost:5000/donasi/postingan/${idPostinganDonasi}`, {
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

  static async editPostinganDonasiWithPosterById(formdata, idPostinganDonasi) {
    const response = await fetch(`http://localhost:5000/donasi/postingan/${idPostinganDonasi}`, {
      method: 'PUT',
      body: formdata,
      redirect: 'follow',
    })
      .then((response) => response.text())
      .then((result) => {
        const data = JSON.parse(result);
        if (data.status === 'error') {
          swal('Gagal Diperbaharui', data.message, 'error');
        }
        if (data.status === 'success') {
          swal('Berhasil Diperbaharui', data.message, 'success');
          window.location.replace('#/donasi-riwayat');
        }
      })
      .catch((error) => console.log('error', error));

    return response;
  }

  static async editPostinganDonasiWithoutPosterById(formdata, idPostinganDonasi) {
    const response = await fetch(`http://localhost:5000/donasi/postingan-tanpa-poster/${idPostinganDonasi}`, {
      method: 'PUT',
      body: formdata,
      redirect: 'follow',
    })
      .then((response) => response.text())
      .then((result) => {
        const data = JSON.parse(result);
        if (data.status === 'error') {
          swal('Gagal Diperbaharui', data.message, 'error');
        }
        if (data.status === 'success') {
          swal('Berhasil Diperbaharui', data.message, 'success');
          window.location.replace('#/donasi-riwayat');
        }
      })
      .catch((error) => console.log('error', error));

    return response;
  }

  static async deletePostinganDonasiById(idPostinganDonasi) {
    const response = await fetch(`http://localhost:5000/donasi/postingan/${idPostinganDonasi}`, {
      method: 'DELETE',
      redirect: 'follow',
    })
      .then((response) => response.text())
      .then((result) => {
        const data = JSON.parse(result);
        if (data.status === 'error') {
          swal('Gagal', data.message, 'error');
        }
        if (data.status === 'success') {
          swal('Berhasil', data.message, 'success');
          window.location.replace('#/donasi-riwayat');
        }
      })
      .catch((error) => console.log('error', error));

    return response;
  }
}

export default DataPostinganDonasi;
