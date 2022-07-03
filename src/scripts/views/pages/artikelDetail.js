import DataPostinganArtikel from '../../web-server/request-postingan-artikel';
import UrlParser from '../../routes/url-parser';

const ArtikelDetail = {
  async render() {
    return `
      <style>
        .artikel-detail{
          margin: 20px 0 50px 0;
        }
        .artikel-detail h1{
          text-align: center;
          margin : 10px 0 20px 0;
          font-size: 28px;
        }
        .btn {
          margin: 0 5px;
        }
        #posterArtikel img {
          width: 100%;
          height: 400px;
          object-fit: cover;
          object-position: center;
        }
        @media screen and (max-width: 800px){
          #mainContent {
            max-width: 100%;
            padding: 0;
            margin: 0;
          }
          .artikel-detail{
            margin: 0 0 40px 0;
          }
          #posterArtikel img {
            min-height: 300px;
          }
          .card-body {
            padding: 20px 30px;
          }
          .artikel-detail h1{
            font-size: 22px;
          }
        }
        @media screen and (max-width: 540px){
          #posterArtikel img {
            min-height: 300px;
            height: 200px;
          }
          .artikel-detail h1{
            font-size: 18px;
          }
          .card-body {
            padding: 20px;
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
            <h1 id="judul-postingan" tabindex="0"></h1>
            <div id="card-text"></div>
            <div id="btn-grid">
              <a href="#/artikel" class="btn">Batal</a>
            </div>
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
        <img data-src="./upload/artikel/${data.gambarArtikel}" alt="Gambar artikel" class="lazyload img-detail" tabindex="0">
      `;

      const judulPostingan = document.querySelector('#judul-postingan');
      judulPostingan.innerHTML = `${data.judul}`;

      const table = document.querySelector('#card-text');
      table.innerHTML = `
        <p tabindex="0">${data.isiArtikel}</p>
        <p tabindex="0">Diposting tanggal ${data.insertedAt}</p>
        <p tabindex="0">Sumber: ${data.sumber}</p>
      `;

      const buttonGrid = document.querySelector('#btn-grid');
      const tombolEdit = document.createElement('a');
      tombolEdit.classList.add('btn', 'btn-edit');
      tombolEdit.innerHTML = 'Edit';
      tombolEdit.setAttribute('href', `#/artikel-edit/${idPostinganArtikel}`);

      const tombolHapus = document.createElement('button');
      tombolHapus.classList.add('btn');
      tombolHapus.innerHTML = 'Hapus';

      const hakAkses = sessionStorage.getItem('hakAkses');
      if (hakAkses === 'admin') {
        buttonGrid.appendChild(tombolEdit);
        buttonGrid.appendChild(tombolHapus);

        tombolHapus.addEventListener('click', async () => {
          console.log('acan');
          const hapusPostingan = await swal({
            title: 'Hapus Data',
            text: 'Apakah anda ingin menghapus postingan artikel ini?',
            icon: 'warning',
            buttons: true,
          });

          if (hapusPostingan) {
            await DataPostinganArtikel.deletePostinganArtikelById(idPostinganArtikel);
          }
        });
      }
    });
  },
};

export default ArtikelDetail;
