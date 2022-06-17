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
        window.location.replace('#/login');
        alert(data.message);
      })
      .catch((error) => console.log('error', error));

    return response;
  }
}

export default DataRegistrasi;
