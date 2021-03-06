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
        h1 {
          font-size: 24px;
        }
        .btn-max {
          width: 100%;
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
          padding: 20px 0 50px 0;
        }
        .grid-row {
          display: grid;
          grid-template-columns: 3fr 4fr;
        }
        .grid-btn {
          display: grid;
          grid-template-columns: auto auto;
          gap: 10px;
        }
        .relawan-detail .img-detail {
          width: 100%;
          margin-bottom: 15px;
          align-items: center;
        }
        .grid-item-row {
          display: grid;
          grid-template-columns: 1fr 7fr;
          gap : 10px;
        }
        .img-location, .img-profile {
          width: 50px;
          border-radius: 50%;
          margin: 0 auto;
        }
        h2 {
          font-size: 18px;
          margin-bottom: 0;
        }
        p {
          text-indent: 20px;
          margin-bottom: 0;
        }
        .img-page-not-found {
          width: 100%;
          height: auto;
          object-fit: cover;
          object-position: center;
        }
        @media screen and (max-width: 600px) {
          .relawan-detail {
            padding-top: 0;
          }
          .grid-row {
            grid-template-columns: 1fr;
          }
          .box-1{
            padding: 0;
            margin: 0;
          }
          .sub-box {
            padding: 0 20px;
          }
          .box-2 {
            padding: 0 20px;
          }
          .container {
            width: 100%;
            max-width: 100% !important;
            padding: 0 !important;
          }
          h2 {
            font-size: 14px;
          }
          .img-page-not-found {
            height: 300px;
          }
        }
      </style>
      <div class="relawan-detail grid-row" id="relawan-detail">
        <div class="box-1">
          <span id="posterRelawan"></span>
          <div class="sub-box">
            <h1 class="mb-4" id="judul-postingan" tabindex="0"></h1>
            <div class="grid-btn">
              <a class="btn btn-max" id="btn-daftar">Daftar Jadi Relawan</a>
              <button type="button" class="btn btn-max" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Lihat Partisipan</button>
            </div>
          </div>
          
          <!-- Modal -->
          <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="staticBackdropLabel" tabindex="0">Partisipan</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <h6 id="message" class="message" tabindex="0"></h6>
                  <div id="list-relawan"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="box-2">
          <div class="card mb-3">
            <div class="card-body">
              <span tabindex="0">Lokasi Bencana</span>
              <div class="grid-item-row mt-3">
                <img data-src="./img-location.png" class="lazyload img-location" alt="Icon lokasi">
                <div id="lokasi-bencana"></div>
              </div>
            </div>
          </div>
          <div class="card mb-3">
            <div class="card-body">
              <span tabindex="0">Penanggung Jawab</span>
              <div class="grid-item-row mt-3">
                <img data-src="./img-profile.png" class="lazyload img-profile" alt="Icon profile">
                <div id="penanggung-jawab"></div>
              </div>
            </div>
          </div>
          <div class="card mb-3">
            <div class="card-body">
              <h2 class="desc mb-2" tabindex="0">Detail Relawan</h2>
              <table class="table table-borderless">
                <tr>
                  <td tabindex="0">Pelaksanaan</td>
                  <td>:</td>
                  <td><span id="tanggal-pelaksanaan" tabindex="0"></span></td>
                </tr>
                <tr>
                  <td tabindex="0">Relawan yang Dibutuhkan</td>
                  <td>:</td>
                  <td><span id="jumlah-relawan" tabindex="0"></span></td>
                </tr>
                <tr>
                  <td tabindex="0">Link Grup WA/Telegram</td>
                  <td>:</td>
                  <td><span id="link-grup"></span></td>
                </tr>
                <tr>
                  <td colspan="3">
                    <p id="persyaratan" tabindex="0"></p>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const idPostinganRelawan = url.id;

    // Cek Id Postingan
    const cekIdPostingan = async (idPostinganRelawan) => {
      const result = await DataPostinganRelawan.getPostinganRelawanById(idPostinganRelawan);
      return result;
    };
    const cekId = await cekIdPostingan(idPostinganRelawan);

    if (cekId.status === 'error') {
      const relawanDetail = document.querySelector('#relawan-detail');
      relawanDetail.classList.remove('grid-row');
      relawanDetail.innerHTML = '';
      relawanDetail.innerHTML = '<img data-src="./halaman-tidak-ditemukan.png" class="lazyload img-page-not-found" alt="Halaman tidak ditemukan" tabindex="0">';
    }

    if (cekId.status === 'success') {
      const result = await DataPostinganRelawan.getPostinganRelawanById(idPostinganRelawan);
      const dataPostingan = result.data.relawan[0];

      const posterRelawan = document.querySelector('#posterRelawan');
      posterRelawan.innerHTML = `
      <img src="./upload/relawan/${dataPostingan.poster}" alt="Poster postingan relawan" class="img-detail" tabindex="0">
    `;

      const tombolDaftar = document.querySelector('#btn-daftar');
      const loginSession = sessionStorage.getItem('loginSession');

      if (loginSession === 'true') {
        tombolDaftar.setAttribute('href', `#/relawan-daftar/${dataPostingan.id}`);
      } else if (loginSession === 'false') {
        tombolDaftar.setAttribute('href', '#/login');
        tombolDaftar.innerHTML = 'Login untuk Mendaftar';
      }

      const lokasiBencana = document.querySelector('#lokasi-bencana');
      lokasiBencana.innerHTML = `
      <h2 tabindex="0">${dataPostingan.kabKota} - ${dataPostingan.provinsi}</h2>
      <span tabindex="0">${dataPostingan.alamatLengkap}</span>
    `;

      const penanggungJawab = document.querySelector('#penanggung-jawab');
      penanggungJawab.innerHTML = `
      <h2 tabindex="0">${dataPostingan.penanggungJawab}</h2>
      <span tabindex="0">${dataPostingan.pekerjaan} - ${dataPostingan.noTelepon}</span>
    `;

      const judulPostingan = document.querySelector('#judul-postingan');
      judulPostingan.innerHTML = `${dataPostingan.judulPostingan}`;

      const tanggalPelaksanaan = document.querySelector('#tanggal-pelaksanaan');
      tanggalPelaksanaan.innerHTML = `${dataPostingan.tanggalMulai} - ${dataPostingan.tanggalBerakhir}`;

      const jumlahRelawan = document.querySelector('#jumlah-relawan');
      jumlahRelawan.innerHTML = `${dataPostingan.jumlahRelawan} orang`;

      const linkGrup = document.querySelector('#link-grup');
      linkGrup.innerHTML = `<a href='${dataPostingan.linkGrup}'>${dataPostingan.linkGrup}</a>`;

      const persyaratan = document.querySelector('#persyaratan');
      persyaratan.innerHTML = `${dataPostingan.persyaratan}`;

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
          <img data-src="./img-profile.png" class="lazyload img-profile" alt="Icon profile"></img>
            <ul>
              <li tabindex="0"><h6>${data.namaLengkap}</h6></li>
              <li tabindex="0">${data.kabKota} - ${data.provinsi}</li>
              <li tabindex="0">Tanggal daftar : ${data.tanggalDaftar}</li>
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
    }
  },
};

export default RelawanDetail;
