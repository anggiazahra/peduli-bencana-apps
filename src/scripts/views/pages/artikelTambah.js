/* eslint-disable no-undef */
/* eslint-disable no-alert */
import DataPostinganArtikel from '../../web-server/request-postingan-artikel';

const ArtikelTambah = {
  async render() {
    return `

    <style>

    /* input artikel */

        #tambah-artikel{
            width: 80%;
            margin: 50px auto;
            padding: 22px;
        }
        .content-tambah h1{
            font-weight: 600;
            text-align: center;
            color: #1C4966;
            padding-bottom: 30px;
        }
        .isi-input{
            display: flex;
            flex-direction: column;
            padding: 20px;
            border: 1px solid black;
        }
        .input-button{
            margin: 10px;
        }
        .input-button a{
            text-decoration: none;
            padding: 7px 38px;
            margin: 0;
            border: none;
            border-radius: 5px;
            background: #1C4966;
            color: #fff;
        }
        .input-button button{
            min-width: 18%;
            padding: 10px;
            border: none;
            background: #1C4966;
            color: #fff;
        }

    </style>

    <section id="tambah-artikel" >
    <div class="content-tambah">
        <h1>TAMBAH ARTIKEL</h1>
        <form class="isi-input">
            <div class="mb-3">
                <label for="judul" class="form-label">Judul Artikel</label>
                <input type="email" class="form-control" id="judul">
            </div>
            <div class="mb-3">
                <label for="judul" class="form-label">Sumber Artikel</label>
                <input type="email" class="form-control" id="sumber">
            </div>
            <div class="mb-3">
                <label for="formFileMultiple" class="form-label">Gambar Artikel</label>
                <input class="form-control" type="file" id="gambarArtikel" multiple>
            </div>
            <div class="mb-3">
                <label for="isiArtikel" class="form-label">Isi Artikel</label>
                <textarea class="form-control" id="isiArtikel" rows="10"></textarea>
            </div>
            <td colspan="3">
                <button class="btn" id="button-submit">Tambah Data</button>
            </td>
        </form>
    </div>
</section>
      `;
  },

  async afterRender() {
    const buttonSubmit = document.querySelector('#button-submit');
    const inputJudulPostingan = document.querySelector('#judul');
    const inputgambar = document.querySelector('#gambarArtikel');
    const inputSumber = document.querySelector('#sumber');
    const inputIsiArtikel = document.querySelector('#isiArtikel');

    const id = Math.floor((Math.random() * 999999999999999) + 1);

    buttonSubmit.addEventListener('click', async (event) => {
      const file = inputgambar.files[0];
      event.preventDefault();
      if (inputJudulPostingan.value === '' || inputgambar.value === '' || inputSumber.value === '' || inputIsiArtikel.value === '') {
        alert('Input tidak boleh kosong');
      } else {
        const nameFile = `${id}_${inputgambar.files[0].name}`;

        const formdata = new FormData();
        formdata.append('judul', inputJudulPostingan.value);
        formdata.append('gambarArtikel', file, nameFile);
        formdata.append('sumber', inputSumber.value);
        formdata.append('isiArtikel', inputIsiArtikel.value);

        await DataPostinganArtikel.addPostinganArtikel(formdata);
      }
    });
  },
};

export default ArtikelTambah;
