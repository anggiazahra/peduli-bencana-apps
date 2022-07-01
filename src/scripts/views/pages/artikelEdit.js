import DataPostinganArtikel from '../../web-server/request-postingan-artikel';
import UrlParser from '../../routes/url-parser';

const ArtikelEdit = {
  async render() {
    return `
    <style>
      .hero-img {
        width: 100%;
        height: 400px;
        object-fit: cover;
        object-position: center;
      }
      .artikel-edit {
        padding: 20px 0;
      }
      .grid-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap : 20px;
      }
      .btn-max {
        width: 100%;
      }
      h1 {
        font-size: 24px;
        text-align: center;
        margin: 20px 0;
      }
      h2 {
        font-size: 18px;
      }
      .card {
        margin-bottom: 15px;
      }
      input {
        height: 44px;
      }
      .input-group-text{
        height: 44px;
      }
      .message {
        margin: 15px 0;
      }
      .img-page-not-found {
        width: 100%;
        height: auto;
        object-fit: cover;
        object-position: center;
      }
      @media screen and (max-width: 910px) {
        .hero-img {
          height: 350px;
        }
      }
      @media screen and (max-width: 600px) {
        .img-page-not-found {
          height: 300px;
        }
      }
      @media screen and (max-width: 540px) {
        .hero-img {
          height: 300px;
        }
        .grid-row {
          grid-template-columns: 1fr;
          gap: 0;
        }
        h2 {
          font-size: 16px;
        }
      }
      @media screen and (max-width: 480px) {
        .hero-img {
          height: 250px;
        }
      }
      @media screen and (max-width: 370px) {
        .hero-img {
          height: 200px;
        }
      }
    </style>

    <div class="artikel-edit" id="artikel-edit">
      <img data-src="./edit-postingan-artikel.png" class="lazyload hero-img" alt="Edit postingan artikel">
      <div class="card">
        <div class="card-body">
          <form enctype="multipart/form-data">
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
                <button class="btn btn-max" id="button-submit">Perbaharui Data</button>
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
    const loginSession = sessionStorage.getItem('loginSession');

    if (loginSession === 'false') {
      swal('Akses Ditolak', 'Maaf anda tidak bisa mengakses halaman ini sebelum melakukan login', 'error');
      window.location.replace('#/login');
    }

    // Cek Id Postingan
    const cekIdPostingan = async (idPostinganArtikel) => {
      const result = await DataPostinganArtikel.getPostinganArtikelById(idPostinganArtikel);
      return result;
    };
    const cekId = await cekIdPostingan(idPostinganArtikel);

    if (cekId.status === 'error') {
      const artikelEdit = document.querySelector('#artikel-edit');
      artikelEdit.classList.remove('grid-row');
      artikelEdit.innerHTML = '';
      artikelEdit.innerHTML = '<img src="./halaman-tidak-ditemukan.png" class="img-page-not-found">';
    }

    if (cekId.status === 'success') {
      const buttonSubmit = document.querySelector('#button-submit');
      const inputJudulPostingan = document.querySelector('#judul-artikel');
      const inputGambarArtikel = document.querySelector('#gambarArtikel');
      const inputSumber = document.querySelector('#sumber');
      const inputIsiArtikel = document.querySelector('#isiArtikel');

      const data = cekId.data.artikel[0];

      inputJudulPostingan.setAttribute('value', data.judul);
      inputSumber.setAttribute('value', data.sumber);
      inputIsiArtikel.innerHTML = data.isiArtikel;

      const id = Math.floor((Math.random() * 999999999999999) + 1);

      buttonSubmit.addEventListener('click', async (event) => {
        const file = inputGambarArtikel.files[0];
        event.preventDefault();
        if (inputJudulPostingan.value === '' || inputSumber.value === '' || inputIsiArtikel.value === '') {
          swal('Error', 'Tidak boleh ada inputan yang kosong', 'error');
        } else if (file === undefined) {
          const editPostingan = await swal({
            title: 'Memperbaharui Data',
            text: 'Apakah anda ingin memperbaharui data artikel?',
            icon: 'warning',
            buttons: true,
          });

          if (editPostingan) {
            const formdata = new FormData();

            formdata.append('judul', inputJudulPostingan.value);
            formdata.append('sumber', inputSumber.value);
            formdata.append('isiArtikel', inputIsiArtikel.value);

            await DataPostinganArtikel
              .editPostinganArtikelWithoutgambarArtikelById(formdata, idPostinganArtikel);
          }
        } else {
          const editPostingan = await swal({
            title: 'Memperbaharui Data',
            text: 'Apakah anda ingin memperbaharui data artikel?',
            icon: 'warning',
            buttons: true,
          });

          if (editPostingan) {
            const nameFile = `${id}_${inputGambarArtikel.files[0].name}`;

            const formdata = new FormData();
            formdata.append('judul', inputJudulPostingan.value);
            formdata.append('gambarArtikel', file, nameFile);
            formdata.append('sumber', inputSumber.value);
            formdata.append('isiArtikel', inputIsiArtikel.value);

            await DataPostinganArtikel
              .editPostinganArtikelWithgambarArtikelById(formdata, idPostinganArtikel);
          }
        }
      });
    }
  },
};

export default ArtikelEdit;
