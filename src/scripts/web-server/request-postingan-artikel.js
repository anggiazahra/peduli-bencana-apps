/* eslint-disable no-alert */
/* eslint-disable no-shadow */
class DataPostinganArtikel {
  static async addPostinganArtikel(formdata) {
    const response = await fetch('http://localhost:5000/artikel/postingan', {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
    })
      .then((response) => response.text())
      .then((result) => {
        const data = JSON.parse(result);
        window.location.replace('#/artikel');
        alert(data.message);
        window.location.reload();
      })
      .catch((error) => console.log('error', error));

    return response;
  }

  static async getAllPostinganArtikel() {
    const response = await fetch('http://localhost:5000/artikel/postingan', {
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

  static async getPostinganArtikelById(idPostinganArtikel) {
    const response = await fetch(`http://localhost:5000/artikel/postingan/${idPostinganArtikel}`, {
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

  static async editPostinganArtikelWithgambarArtikelById(formdata, idPostinganArtikel) {
    const response = await fetch(`http://localhost:5000/artikel/postingan/${idPostinganArtikel}`, {
      method: 'PUT',
      body: formdata,
      redirect: 'follow',
    })
      .then((response) => response.text())
      .then((result) => {
        const data = JSON.parse(result);
        window.location.replace(`#/artikel-detail/${idPostinganArtikel}`);
        alert(data.message);
        window.location.reload();
      })
      .catch((error) => console.log('error', error));

    return response;
  }

  static async editPostinganArtikelWithoutgambarArtikelById(formdata, idPostinganArtikel) {
    const response = await fetch(`http://localhost:5000/artikel/postingan-tanpa-gambarArtikel/${idPostinganArtikel}`, {
      method: 'PUT',
      body: formdata,
      redirect: 'follow',
    })
      .then((response) => response.text())
      .then((result) => {
        const data = JSON.parse(result);
        window.location.replace(`#/artikel-detail/${idPostinganArtikel}`);
        alert(data.message);
        window.location.reload();
      })
      .catch((error) => console.log('error', error));

    return response;
  }

  static async deletePostinganArtikelById(idPostinganArtikel) {
    const response = await fetch(`http://localhost:5000/artikel/postingan/${idPostinganArtikel}`, {
      method: 'DELETE',
      redirect: 'follow',
    })
      .then((response) => response.text())
      .then((result) => {
        const data = JSON.parse(result);
        window.location.replace('#/artikel');
        alert(data.message);
        window.location.reload();
      })
      .catch((error) => console.log('error', error));

    return response;
  }
}

export default DataPostinganArtikel;
