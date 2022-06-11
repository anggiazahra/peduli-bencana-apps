class DataPendaftaranRelawan {
  static async getAllPendaftaranRelawan() {
    const response = await fetch('http://localhost:5000/relawan/pendaftaran', {
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

  static async addPendaftaranRelawan(formdata) {
    const response = await fetch('http://localhost:5000/relawan/pendaftaran', {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
    })
      .then((response) => response.text())
      .then((result) => {
        const data = JSON.parse(result);
        window.location.replace(`#/relawan-detail/${data.data.idPostinganRelawan}`);
        alert(data.message);
        window.location.reload();
      })
      .catch((error) => console.log('error', error));

    return response;
  }
}

export default DataPendaftaranRelawan;
