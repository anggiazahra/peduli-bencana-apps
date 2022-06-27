class DataRegistrasi {
  static async addRegistrasi(formdata) {
    const response = await fetch('http://localhost:5000/registrasi', {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
    })
      .then((response) => response.text())
      .then((result) => {
        const data = JSON.parse(result);
        if (data.status === 'error') {
          swal('Registrasi Gagal', data.message, 'error');
        }
        if (data.status === 'success') {
          swal('Registrasi Berhasil', data.message, 'success');
          window.location.replace('#/login');
        }
      })
      .catch((error) => console.log('error', error));

    return response;
  }
}

export default DataRegistrasi;
