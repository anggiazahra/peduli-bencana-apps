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
        window.location.replace('#/relawan');
        alert(data.message);
        window.location.reload();
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
        window.location.replace(`#/relawan-detail/${idPostinganRelawan}`);
        alert(data.message);
        window.location.reload();
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
        window.location.replace(`#/relawan-detail/${idPostinganRelawan}`);
        alert(data.message);
        window.location.reload();
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
        window.location.replace('#/relawan');
        alert(data.message);
        window.location.reload();
      })
      .catch((error) => console.log('error', error));

    return response;
  }
}

export default DataPostinganRelawan;
