/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import DataPostinganArtikel from '../../web-server/request-postingan-artikel';
import UrlParser from '../../routes/url-parser';

const ArtikelDetail = {
  async render() {
    return `
    <style>

    .artikel-detail{
        margin: 40px auto;
        min-height: 80vh;
    }
    .artikel-detail h1{
      text-align: center;
      font-weight: 600;
      color: #1C4966;
      padding-bottom: 30px;
  }
  .card{
    padding: 17px;
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

    </style>

    <section class="artikel-detail">
    <h1>Detail Artikel</h1>
          <div class="card mb-3">
            <span id="posterArtikel"></span>
                <div class="card-body">
                    <h5  id="judul-postingan"></h5>
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
        <img src="src/public/upload/artikel/${data.gambarArtikel}" alt="" class="img-detail">
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
