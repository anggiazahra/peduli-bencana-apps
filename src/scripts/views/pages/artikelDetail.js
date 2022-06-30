/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import DataPostinganArtikel from '../../web-server/request-postingan-artikel';
import UrlParser from '../../routes/url-parser';

const ArtikelDetail = {
  async render() {
    return `
      <style>
        .artikel-detail{
          margin: 15px auto 40px;
          min-height: 80vh;
        }
        .artikel-detail h1{
          text-align: center;
          font-weight: 600;
          color: #1C4966;
          margin : 10px 0 20px 0;
        }
        #btn-edit{
          text-decoration: none;
          padding: 7px 38px;
          margin: 0;
          border: none;
          border-radius: 5px;
          background: #1C4966;
          color: #fff;
        }
        #posterArtikel img {
          min-height: 450px;
        }
        @media screen and (max-width: 800px){
          #mainContent {
            max-width: 100%;
            padding: 0;
            margin: 0;
          }
          #posterArtikel img {
            min-height: 300px;
          }
          .card-body {
            padding: 10px 30px;
          }
          .artikel-detail h1{
            font-size: 24px;
          }
        }
        @media screen and (max-width: 540px){
          #posterArtikel img {
            min-height: 300px;
          }
          .card-body {
            padding: 10px 20px;
          }
          .artikel-detail h1{
            font-size: 22px;
          }
        }
        @media screen and (max-width: 380px){
          #posterArtikel img {
            min-height: 200px;
          }
        }
      </style>

      <section class="artikel-detail">
        <div class="card mb-3">
          <span id="posterArtikel"></span>
          <div class="card-body">
            <h1 id="judul-postingan"></h1>
            <div id="card-text"></div>
            <a href="#/artikel" class="btn">Batal</a>
            <a class="btn" id="btn-edit">Edit</a>
            <button class="btn" id="btn-hapus">Hapus</button>
          </div>
        </div>      
      </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const idPostinganArtikel = url.id;

    const result = await DataPostinganArtikel.getPostinganArtikelById(idPostinganArtikel);
    const dataPostinganArtikel = result.data.artikel;

    dataPostinganArtikel.forEach((data) => {
      const posterArtikel = document.querySelector('#posterArtikel');
      posterArtikel.innerHTML = `
        <img src="./upload/artikel/${data.gambarArtikel}" alt="" class="img-detail">
      `;

      const judulPostingan = document.querySelector('#judul-postingan');
      judulPostingan.innerHTML = `${data.judul}`;

      const table = document.querySelector('#card-text');
      table.innerHTML = `
        <p>${data.isiArtikel}</p>
        <p>Sumber: ${data.sumber}</p>
      `;

      const tombolEdit = document.querySelector('#btn-edit');
      tombolEdit.setAttribute('href', `#/artikel-edit/${data.id}`);

      const tombolHapus = document.querySelector('#btn-hapus');
      tombolHapus.addEventListener('click', async () => {
        await DataPostinganArtikel.deletePostinganArtikelById(idPostinganArtikel);
        window.location.replace('#/artikel');
      });
    });
  },
};

export default ArtikelDetail;
