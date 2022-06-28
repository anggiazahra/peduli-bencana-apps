class DataPostinganRelawan {
  static async addPostinganRelawan(formdata) {
    const response = await fetch('http://localhost:5000/relawan/postingan', {
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
          window.location.replace(`#/relawan-detail/${data.data.idPostinganRelawan}`);
        }
      })
      .catch((error) => console.log('error', error));

    return response;
  }

  static async getAllPostinganRelawan() {
    const response = await fetch('http://localhost:5000/relawan/postingan', {
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

  static async getPostinganRelawanById(idPostinganRelawan) {
    const response = await fetch(`http://localhost:5000/relawan/postingan/${idPostinganRelawan}`, {
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

  static async editPostinganRelawanWithPosterById(formdata, idPostinganRelawan) {
    const response = await fetch(`http://localhost:5000/relawan/postingan/${idPostinganRelawan}`, {
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
          window.location.replace('#/relawan-riwayat');
        }
      })
      .catch((error) => console.log('error', error));

    return response;
  }

  static async editPostinganRelawanWithoutPosterById(formdata, idPostinganRelawan) {
    const response = await fetch(`http://localhost:5000/relawan/postingan-tanpa-poster/${idPostinganRelawan}`, {
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
          window.location.replace('#/relawan-riwayat');
        }
      })
      .catch((error) => console.log('error', error));

    return response;
  }

  static async deletePostinganRelawanById(idPostinganRelawan) {
    const response = await fetch(`http://localhost:5000/relawan/postingan/${idPostinganRelawan}`, {
      method: 'DELETE',
      redirect: 'follow',
    })
      .then((response) => response.text())
      .then((result) => {
        const data = JSON.parse(result);
        if (data.status === 'error') {
          swal('Gagal Dihapus', data.message, 'error');
        }
        if (data.status === 'success') {
          swal('Berhasil Dihapus', data.message, 'success');
          window.location.replace('#/relawan-riwayat');
        }
      })
      .catch((error) => console.log('error', error));

    return response;
  }
}

export default DataPostinganRelawan;
