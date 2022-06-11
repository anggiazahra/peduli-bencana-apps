import DataPostinganRelawan from '../../web-server/request-postingan-relawan';
import DataPendaftaranRelawan from '../../web-server/request-pendaftaran-relawan';
import UrlParser from '../../routes/url-parser';

const RelawanDetail = {
  async render() {
    return `
      <style>
        .box-1 {
          padding: 0 10px;
          margin: 0 5px;
        }
        .img-profile {
          width: 70px;
          border-radius: 50%;
        }
        .item-relawan {
          display: grid;
          grid-template-columns: 1fr 6fr;
          margin-bottom: 10px;
        }
        .item-relawan ul {
          list-style-type: none;
        }
        .modal-body {
          min-height: 200px;
        }
        .modal-body .message{
          text-align: center;
        }
        .relawan-detail {
          display: grid;
          grid-template-columns: 2fr 3fr;
          margin: 50px 0;
          min-width: 250px;
        }
        .btn {
          margin-bottom: 15px;
        }
        .relawan-detail .img-detail {
          width: 100%;
          margin-bottom: 15px;
          align-items: center;
        }
        @media screen and (max-width: 900px) {
          .relawan-detail {
              display: grid;
              grid-template-columns: 1fr;
              margin: 50px 0;
          }
          .box-1 {
            margin: 0;
            padding: 0;
          }
        }
        @media screen and (max-width: 540px) {
          #mainContent h1 {
              font-size: 24px;
          }
          .relawan-detail {
            margin: 30px 0;
          }
        }
        @media screen and (max-width: 350px) {
          #mainContent h1 {
              font-size: 22px;
          }
        }
      </style>

      <div class="relawan-detail">
        <div class="box-1">
          <span id="posterRelawan"></span>
          <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Lihat Partisipan</button>
          
          <!-- Modal -->
          <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="staticBackdropLabel">Partisipan</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <h6 id="message" class="message"></h6>
                  <div id="list-relawan"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="box-2">
          <h2 id="judul-postingan"></h2>
          <table class="table" id="table">
          </table>
          <a class="btn" id="btn-daftar">Daftar</a>
          <a class="btn" id="btn-edit">Edit</a>
          <button class="btn" id="btn-hapus">Hapus</button>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const idPostinganRelawan = url.id;

    const result = await DataPostinganRelawan.getPostinganRelawanById(idPostinganRelawan);
    const dataPostinganRelawan = result.data.relawan;

    dataPostinganRelawan.forEach((data) => {
      const posterRelawan = document.querySelector('#posterRelawan');
      posterRelawan.innerHTML = `
        <img src="./upload/relawan/${data.poster}" alt="" class="img-detail">
      `;

      const judulPostingan = document.querySelector('#judul-postingan');
      judulPostingan.innerHTML = `${data.judulPostingan}`;

      const table = document.querySelector('#table');
      table.innerHTML = `
        <tr>
          <th>Tanggal Pelaksanaan</th>
          <td>:</td>
          <td>${data.tanggalMulai} - ${data.tanggalBerakhir}</td>
        </tr>
        <tr>
          <th>Kab/Kota</th>
          <td>:</td>
          <td>${data.kabKota}</td>
        </tr>
        <tr>
          <th>Provonsi</th>
          <td>:</td>
          <td>${data.provinsi}</td>
        </tr>
        <tr>
          <th>Alamat Lengkap</th>
          <td>:</td>
          <td>${data.alamatLengkap}</td>
        </tr>
        <tr>
          <th>Jumlah Relawan</th>
          <td>:</td>
          <td>${data.jumlahRelawan}</td>
        </tr>
        <tr>
          <th>Kontak</th>
          <td>:</td>
          <td>${data.kontak}</td>
        </tr>
        <tr>
          <th>Persyaratan</th>
          <td>:</td>
        </tr>
        <tr>
          <td colspan="3">${data.persyaratan}</td>
        </tr>
      `;

      const tombolDaftar = document.querySelector('#btn-daftar');
      tombolDaftar.setAttribute('href', `#/relawan-daftar/${data.id}`);

      const tombolEdit = document.querySelector('#btn-edit');
      tombolEdit.setAttribute('href', `#/relawan-edit/${data.id}`);

      const tombolHapus = document.querySelector('#btn-hapus');
      tombolHapus.addEventListener('click', async () => {
        await DataPostinganRelawan.deletePostinganRelawanById(idPostinganRelawan);
        window.location.replace('#/relawan');
      });
    });

    const dataPendaftaranRelawan = await DataPendaftaranRelawan.getAllPendaftaranRelawan();
    const listRelawan = dataPendaftaranRelawan.data.relawan;

    const relawanFilter = listRelawan.filter((relawan) => relawan.idPostinganRelawan
      .toLowerCase() === idPostinganRelawan.toLowerCase());

    if (relawanFilter.length > 0) {
      listRelawan.forEach((data) => {
        const idPostinganRelawanFormDatabase = `${data.idPostinganRelawan}`.toLowerCase();
        if (idPostinganRelawanFormDatabase === idPostinganRelawan.toLowerCase()) {
          const daftarRelawan = document.querySelector('#list-relawan');
          const itemRelawan = document.createElement('div');
          itemRelawan.classList.add('item-relawan');
          itemRelawan.innerHTML = `
          <img src="./img-profile.png" class="img-profile"></img>
            <ul>
              <li><h6>${data.namaLengkap}</h6></li>
              <li>${data.kabKota} - ${data.provinsi}</li>
              <li>Tanggal daftar : ${data.tanggalDaftar}</li>
            <ul>
          `;
          daftarRelawan.appendChild(itemRelawan);
        }
      });
    } else if (relawanFilter.length < 1) {
      const message = document.querySelector('#message');
      message.innerHTML = `
        Belum ada partisipan yang mendaftar
      `;
    }
  },
};

export default RelawanDetail;
