/* eslint-disable import/extensions */
/* eslint-disable no-use-before-define */
/* eslint-disable no-alert */
/* eslint-disable import/no-unresolved */
import DataPostinganArtikel from '../../web-server/request-postingan-artikel';
import UrlParser from '../../routes/url-parser';

const ArtikelEdit = {
  async render() {
    return `
    <style>
    .artikel-edit{
      margin: 40px auto;
      min-height: 70vh;
    }
    .artikel-edit h1{
      text-align: center;
      font-weight: 600;
      color: #1C4966;
      padding-bottom: 30px;
  }
    </style>

      <div class="artikel-edit" id="main-content">
      <h1>Edit Data Artikel</h1>
        <div class="card">
          <div class="card-body">
            <form>
                  <div class="mb-3">
                      <label for="judul" class="form-label">Judul Artikel</label>
                      <input type="email" class="form-control" id="judul-artikel">
                  </div>
                  <div class="mb-3">
                      <label for="judul" class="form-label">Sumber Artikel</label>
                      <input type="email" class="form-control" id="sumber">
                  </div>
                  <div class="mb-3">
                      <label for="formFileMultiple" class="form-label">Gambar Artikel</label>
                      <input class="form-control" type="file" id="gambarArtikel" multiple>
                      <p>Kosongkan file jika tidak ingin mengubah gambar artikel</p>
                  </div>
                  <div class="mb-3">
                      <label for="isiArtikel" class="form-label">Isi Artikel</label>
                      <textarea class="form-control" id="isiArtikel" rows="15"></textarea>
                  </div>
                <div>
                  <td colspan="3">
                    <a href="#/artikel" class="btn">Batal</a>
                    <button class="btn" id="button-submit">Edit Data</button>
                  </div>
            </form>
          </div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const idPostinganArtikel = url.id;

    const getPostinganArtikelById = () => {
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        redirect: 'follow',
      };

      fetch(`http://localhost:5000/artikel/postingan/${idPostinganArtikel}`, requestOptions)
        .then((response) => response.text())
        .then((result) => {
          tampilData(JSON.parse(result));
        })
        .catch((error) => console.log('error', error));
    };
    getPostinganArtikelById();

    const tampilData = (result) => {
      const data = result.data.artikel[0];

      const buttonSubmit = document.querySelector('#button-submit');
      const inputJudulPostingan = document.querySelector('#judul-artikel');
      const inputGambarArtikel = document.querySelector('#gambarArtikel');
      const inputSumber = document.querySelector('#sumber');
      const inputIsiArtikel = document.querySelector('#isiArtikel');

      inputJudulPostingan.setAttribute('value', data.judul);
      inputSumber.setAttribute('value', data.sumber);
      inputIsiArtikel.innerHTML = data.isiArtikel;

      const id = Math.floor((Math.random() * 999999999999999) + 1);

      buttonSubmit.addEventListener('click', async (event) => {
        const file = inputGambarArtikel.files[0];
        event.preventDefault();
        if (inputJudulPostingan.value === '' || inputSumber.value === '' || inputIsiArtikel.value === '') {
          alert('Input tidak boleh kosong');
        } else if (file === undefined) {
          const formdata = new FormData();

          formdata.append('judul', inputJudulPostingan.value);
          formdata.append('sumber', inputSumber.value);
          formdata.append('isiArtikel', inputIsiArtikel.value);

          await DataPostinganArtikel
            .editPostinganArtikelWithoutgambarArtikelById(formdata, idPostinganArtikel);
        } else {
          const nameFile = `${id}_${inputGambarArtikel.files[0].name}`;

          const formdata = new FormData();
          formdata.append('judul', inputJudulPostingan.value);
          formdata.append('gambarArtikel', file, nameFile);
          formdata.append('sumber', inputSumber.value);
          formdata.append('isiArtikel', inputIsiArtikel.value);

          await DataPostinganArtikel
            .editPostinganArtikelWithgambarArtikelById(formdata, idPostinganArtikel);
        }
      });
    };
  },
};

export default ArtikelEdit;
