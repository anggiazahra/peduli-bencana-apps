import DataPostinganDonasi from '../../web-server/request-postingan-donasi';
import DataTambahDonasi from '../../web-server/request-tambah-donasi';
import UrlParser from '../../routes/url-parser';

const DonasiPostinganDetail = {
  async render() {
    return `
    <style>
      main {
        background-color: white;
      }
      .btn-max {
        width: 100%;
      }
      .box-1 {
        padding: 0 10px;
        margin: 0 5px;
      }
      h1 {
        font-size: 24px;
      }
      .donasi-detail {
        padding: 20px 0 50px 0;
      }
      .grid-row {
        display: grid;
        grid-template-columns: 3fr 4fr;
      }
      .poster-donasi {
        width: 100%;
        margin-bottom: 15px;
        align-items: center;
        border-radius: 4px;
      }
      .img-profile, .img-location {
        width: 50px;
        border-radius: 50%;
        margin: 0 auto;
      }
      h2 {
        font-size: 18px;
        margin-bottom: 0;
      }
      #target-donasi {
        font-size: 20px;
        font-weight: 500;
        color: #1C4966;
      }
      #donasi-terkumpul {
        font-size: 20px;
        font-weight: 500;
        color: #686868;
      }
      .progress {
        margin: 15px 0 20px 0;
      }
      .grid-item-row {
        display: grid;
        grid-template-columns: 1fr 7fr;
        gap : 10px;
      }
      p {
        text-indent: 20px;
        margin: 10px 0 0 0;
      }
      .progress-value {
        position: absolute;
        font-size: 15px;
        margin: 2px 0 0 45%;
        color: white;
      }
      .progress {
        height: 25px;
        position:relative;
        background-color: #b3b3b3;
      }
      .grid-btn {
        display: grid;
        grid-template-columns: auto auto;
        gap: 10px;
      }
      .btn-border {
        border-bottom-style: solid;
        border-bottom-width: 1px;
        margin-bottom: 15px;
        border-bottom-color: #959595;
      }
      .btn-confirm, .btn-unconfirm {
        background-color: white;
        color: black;
        margin-bottom: 5px;
      }
      .btn-confirm:hover, .btn-unconfirm:hover {
        font-weight: 600;
      }
      .item-donasi-grid {
        display: grid;
        grid-template-columns: 1fr 6fr;
        gap: 10px;
        margin-bottom: 10px;
      }
      .confirm-title {
        font-size: 17px;
        font-weight: 500;
        margin-bottom: 15px;
      }
      .list-donasi {
        min-height: 300px;
      }
      .message {
        text-align: center;
      }
      .img-page-not-found {
        width: 100%;
        height: auto;
        object-fit: cover;
        object-position: center;
      }
      @media screen and (max-width: 900px) {
        h1 {
          font-size: 20px;
        }
        h2 {
          font-size: 17px;
        }
        #target-donasi {
          font-size: 17px;
          font-weight: 500;
          color: #1C4966;
        }
        #donasi-terkumpul {
          font-size: 17px;
          font-weight: 500;
          color: #686868;
        }
      }
      @media screen and (max-width: 840px) {
        footer .container {
          width: 90% !important;
        }
        .img-page-not-found {
          height: 300px;
        }
        .grid-row {
          grid-template-columns: 1fr;
        }
        .box-1{
          padding: 0;
          margin: 0;
        }
        .container {
          width: 100% !important;
          padding: 0 !important;
        }
        .content {
          margin: 0 15px;
        }
        #mainContent h1 {
          font-size: 20px;
          padding: 0;
        }
        .poster-donasi {
          margin-bottom: 20px;
        }
        .progress {
          margin: 15px 0 20px 0;
        }
        .donasi-detail {
          padding-top: 0;
        }

        #target-donasi {
          font-size: 17px;
          font-weight: 500;
          color: #1C4966;
        }
        #donasi-terkumpul {
          font-size: 17px;
          font-weight: 500;
          color: #686868;
        }
        td {
          padding: 4px !important;
        }
        .desc {
          margin-left: 4px;
        }
        
        .table {
          margin-bottom: 0;
        }
        .sub-box {
          padding: 0 20px;
        }
        .box-2 {
          margin: 0 20px;
        }
      }
    </style>
    <div class="donasi-detail grid-row" id="donasi-detail">
      <div class="box-1">
        <img src="" class="poster-donasi" id="poster-donasi" alt="poster donasi"  tabindex="0">
        <div class="sub-box">
          <h1 id="judul-postingan" tabindex="0"></h1>
          <span id="donasi-terkumpul" tabindex="0"></span> / 
          <span id="target-donasi" tabindex="0"></span>
          <div class="progress">
            <span class="progress-value" id="progress-value" tabindex="0"></span>
            <div class="progress-bar" id="progress-bar" role="progressbar" aria-valuenow="" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div class="grid-btn">
            <a class="btn btn-max" id="donasi-tambah">Donasi Sekarang Juga</a>
            <button type="button" class="btn btn-max" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Lihat Donasi Masuk</button>
          </div>
          
          <!-- Modal -->
          <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="staticBackdropLabel" tabindex="0">Donasi Masuk</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div class="grid-btn btn-border">
                    <button class="btn btn-max btn-confirm" id="btn-confirm">Sudah Dikonfirmasi</button>
                    <button class="btn btn-max btn-unconfirm" id="btn-unconfirm">Belum Dikonfirmasi</button>
                  </div>
                  <div id="list-donasi" class="list-donasi"></div>
                </div>
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
            <h2 class="desc mb-2" tabindex="0">Detail Donasi</h2>
            <table class="table table-borderless">
              <tr>
                <td tabindex="0">Periode Donasi</td>
                <td>:</td>
                <td><span id="periode-donasi" tabindex="0"></span></td>
              </tr>
              <tr>
                <td tabindex="0">Nama Bank</td>
                <td>:</td>
                <td><span id="nama-bank" tabindex="0"></span></td>
              </tr>
              <tr>
                <td tabindex="0">No Rekening</td>
                <td>:</td>
                <td><span id="no-rekening" tabindex="0"></span></td>
              </tr>
              <tr>
                <td tabindex="0">Atas Nama</td>
                <td>:</td>
                <td><span id="atas-nama" tabindex="0"></span></td>
              </tr>
              <tr>
                <td colspan="3">
                  <p id="deskripsi-donasi" tabindex="0"></p>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const idPostinganDonasi = url.id;

    const formatToCurrency = (amount) => `Rp ${amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;

    // Cek Id Postingan
    const cekIdPostingan = async (idPostinganDonasi) => {
      const result = await DataPostinganDonasi.getPostinganDonasiById(idPostinganDonasi);
      return result;
    };
    const cekId = await cekIdPostingan(idPostinganDonasi);

    if (cekId.status === 'error') {
      const donasiDetail = document.querySelector('#donasi-detail');
      donasiDetail.classList.remove('grid-row');
      donasiDetail.innerHTML = '';
      donasiDetail.innerHTML = '<img data-src="./halaman-tidak-ditemukan.png" class="lazyload img-page-not-found" alt="Gambar halaman tidak ditemukan" tabindex="0">';
    }

    if (cekId.status === 'success') {
      // Data
      const dataPostinganDonasi = async (idPostinganDonasi) => {
        const result = await DataPostinganDonasi.getPostinganDonasiById(idPostinganDonasi);
        const dataPostingan = result.data.donasi;
        return dataPostingan;
      };
      const dataTambahDonasiByIdPostingan = async (idPostinganDonasi) => {
        const result = await DataTambahDonasi.getAllTambahDonasi();
        const listTambahDonasi = result.data.donasi;
        const dataTambahDonasi = listTambahDonasi.filter((item) => item.idPostinganDonasi
          .toLowerCase() === idPostinganDonasi.toLowerCase());
        return dataTambahDonasi;
      };
      const dataDonasiSudahDikonfirmasi = async (idPostinganDonasi) => {
        const result = await dataTambahDonasiByIdPostingan(idPostinganDonasi);
        const donasiSudahDikonfirmasi = result.filter((item) => item.status === 'Sudah Dikonfirmasi');
        return donasiSudahDikonfirmasi;
      };
      const dataDonasiBelumDikonfirmasi = async (idPostinganDonasi) => {
        const result = await dataTambahDonasiByIdPostingan(idPostinganDonasi);
        const donasiBelumDikonfirmasi = result.filter((item) => item.status === 'Belum Dikonfirmasi');
        return donasiBelumDikonfirmasi;
      };

      // Tampilan
      const tampilPostingan = (dataPostingan) => {
        const posterDonasi = document.querySelector('#poster-donasi');
        posterDonasi.setAttribute('src', `./upload/donasi/${dataPostingan.namaPoster}`);

        const judulPostingan = document.querySelector('#judul-postingan');
        judulPostingan.innerHTML = `${dataPostingan.judulPostingan}`;

        const targetDonasi = document.querySelector('#target-donasi');
        targetDonasi.innerHTML = `Rp ${dataPostingan.targetDonasi}`;

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

        const periodeDonasi = document.querySelector('#periode-donasi');
        periodeDonasi.innerHTML = `${dataPostingan.tanggalMulai} - ${dataPostingan.tanggalBerakhir}`;

        const namaBank = document.querySelector('#nama-bank');
        namaBank.innerHTML = `${dataPostingan.namaBank}`;

        const noRekening = document.querySelector('#no-rekening');
        noRekening.innerHTML = `${dataPostingan.noRekening}`;

        const atasNama = document.querySelector('#atas-nama');
        atasNama.innerHTML = `${dataPostingan.atasNama}`;

        const deskripsiDonasi = document.querySelector('#deskripsi-donasi');
        deskripsiDonasi.innerHTML = `${dataPostingan.deskripsiDonasi}`;

        const buttonTambahDonasi = document.querySelector('#donasi-tambah');
        const loginSession = sessionStorage.getItem('loginSession');

        if (loginSession === 'false') {
          buttonTambahDonasi.innerHTML = 'Login Untuk Berdonasi';
          buttonTambahDonasi.setAttribute('href', '#/login');
        } else {
          buttonTambahDonasi.setAttribute('href', `#/donasi-tambah/${dataPostingan.id}`);
        }
      };
      const tampilDonasi = async (dataPostingan) => {
        const arrayDonasi = [];
        const listDonasiSudahDikonfirmasi = await dataDonasiSudahDikonfirmasi(idPostinganDonasi);
        listDonasiSudahDikonfirmasi.forEach((item) => {
          arrayDonasi.push(parseInt(item.jumlahDonasi));
        });

        // Menghitung total donasi yang terkumpul
        const totalDonasi = arrayDonasi.reduce((total, num) => total + num);

        const donasiTerkumpul = document.querySelector('#donasi-terkumpul');
        donasiTerkumpul.innerHTML = `${formatToCurrency(totalDonasi)}`;

        const progressBar = document.querySelector('#progress-bar');
        const presentase = (totalDonasi / dataPostingan.targetDonasi) * 100;
        progressBar.setAttribute('aria-valuenow', presentase.toFixed(1));

        const progressValue = document.querySelector('#progress-value');

        if (presentase < 100) {
          progressBar.style.width = `${presentase.toFixed(1)}%`;
          progressValue.innerHTML = `${presentase.toFixed(1)}%`;
        } else if (presentase >= 100) {
          progressBar.style.width = '100%';
          progressValue.innerHTML = '100%';
        }
      };
      const tampilDonasiSudahDikonfirmasi = (listDonasiSudahDikonfirmasi) => {
        const listDonasi = document.querySelector('#list-donasi');
        listDonasi.innerHTML = '';
        listDonasi.innerHTML = '<div class="confirm-title">Sudah Dikonfirmasi</div>';
        listDonasiSudahDikonfirmasi.forEach((data) => {
          const itemDonasi = document.createElement('div');
          itemDonasi.classList.add('item-donasi-grid');
          itemDonasi.innerHTML = `
          <img data-src="./img-profile.png" class="lazyload img-profile" alt="Icon profile">
          <div>
            <div tabindex="0">${data.namaDonatur}</div>
            <div tabindex="0">Berdonasi sebesar Rp ${data.jumlahDonasi}</div>
            <div tabindex="0">${data.tanggalDonasi}</div>
          </div>
        `;
          listDonasi.appendChild(itemDonasi);
        });
      };
      const tampilDonasiBelumDikonfirmasi = async (donasiBelumDikonfirmasi) => {
        const listDonasi = document.querySelector('#list-donasi');
        listDonasi.innerHTML = '';
        listDonasi.innerHTML = '<div class="confirm-title">Belum Dikonfirmasi</div>';
        donasiBelumDikonfirmasi.forEach((data) => {
          const itemDonasi = document.createElement('div');
          itemDonasi.classList.add('item-donasi-grid');
          itemDonasi.innerHTML = `
          <img data-src="./img-profile.png" class="lazyload img-profile" alt="Icon profile">
          <div>
            <div tabindex="0">${data.namaDonatur}</div>
            <div tabindex="0">Berdonasi sebesar Rp ${data.jumlahDonasi}</div>
            <div tabindex="0">${data.tanggalDonasi}</div>
          </div>
        `;
          listDonasi.appendChild(itemDonasi);
        });
      };
      const tampilBelumAdaDonasi = () => {
        const donasiTerkumpul = document.querySelector('#donasi-terkumpul');
        donasiTerkumpul.innerHTML = 'Rp 0';
        const progressValue = document.querySelector('#progress-value');
        progressValue.innerHTML = '0%';

        const listDonasi = document.querySelector('#list-donasi');

        const tampilanSudahDikonfirmasi = () => {
          listDonasi.innerHTML = '';
          listDonasi.innerHTML = `
          <div class="confirm-title" tabindex="0">Sudah Dikonfirmasi</div>
          <div class="message" tabindex="0">Belum ada donasi yang masuk</div>
        `;
        };
        const tampilanBelumDikonfirmasi = () => {
          listDonasi.innerHTML = '';
          listDonasi.innerHTML = `
          <div class="confirm-title" tabindex="0">Belum Dikonfirmasi</div>
          <div class="message" tabindex="0">Belum ada donasi yang masuk</div>
        `;
        };

        // Tampilan default
        tampilanSudahDikonfirmasi();

        // Tampilan saat tombol donasi sudah dikonfirmasi ditekan
        const tombolSudahDikonfirmasi = document.querySelector('#btn-confirm');
        tombolSudahDikonfirmasi.addEventListener('click', () => {
          tampilanSudahDikonfirmasi();
        });

        // Tampilan saat tombol donasi belum dikonfirmasi ditekan
        const tombolBelumDikonfirmasi = document.querySelector('#btn-unconfirm');
        tombolBelumDikonfirmasi.addEventListener('click', () => {
          tampilanBelumDikonfirmasi();
        });
      };

      const dataPostingan = await dataPostinganDonasi(idPostinganDonasi);
      const dataTambahDonasi = await dataTambahDonasiByIdPostingan(idPostinganDonasi);
      if (dataPostingan) {
        tampilPostingan(dataPostingan[0]);
      } else {
        const donasiDetail = document.querySelector('#donasi-detail');
        donasiDetail.innerHTML = '';
        donasiDetail.innerHTML = '<div class="message" tabindex="0">Id tidak ditemukan</div>';
      }

      if (dataTambahDonasi.length > 0) {
        tampilDonasi(dataPostingan[0]);
        const listDonasiSudahDikonfirmasi = await dataDonasiSudahDikonfirmasi(idPostinganDonasi);
        if (listDonasiSudahDikonfirmasi.length > 0) {
          tampilDonasiSudahDikonfirmasi(listDonasiSudahDikonfirmasi);
        } else {
          const listDonasi = document.querySelector('#list-donasi');
          listDonasi.innerHTML = '';
          listDonasi.innerHTML = `
          <div class="confirm-title" tabindex="0">Sudah Dikonfirmasi</div>
          <div class="message" tabindex="0">Belum ada donasi yang dikonfirmasi</div>
        `;
        }

        const tombolSudahDikonfirmasi = document.querySelector('#btn-confirm');
        tombolSudahDikonfirmasi.addEventListener('click', () => {
          if (listDonasiSudahDikonfirmasi.length > 0) {
            tampilDonasiSudahDikonfirmasi(listDonasiSudahDikonfirmasi);
          } else {
            const listDonasi = document.querySelector('#list-donasi');
            listDonasi.innerHTML = '';
            listDonasi.innerHTML = `
            <div class="confirm-title" tabindex="0">Sudah Dikonfirmasi</div>
            <div class="message" tabindex="0">Belum ada donasi yang dikonfirmasi</div>
          `;
          }
        });

        // Tampilan saat tombol donasi belum dikonfirmasi ditekan
        const tombolBelumDikonfirmasi = document.querySelector('#btn-unconfirm');
        tombolBelumDikonfirmasi.addEventListener('click', async () => {
          const listDonasiBelumDikonfirmasi = await
          dataDonasiBelumDikonfirmasi(idPostinganDonasi);
          if (listDonasiBelumDikonfirmasi.length > 0) {
            tampilDonasiBelumDikonfirmasi(listDonasiBelumDikonfirmasi);
          } else {
            const listDonasi = document.querySelector('#list-donasi');
            listDonasi.innerHTML = '';
            listDonasi.innerHTML = `
            <div class="confirm-title" tabindex="0">Belum Dikonfirmasi</div>
            <div class="message" tabindex="0">Semua donasi sudah dikonfirmasi</div>
          `;
          }
        });
      } else {
        tampilBelumAdaDonasi();
      }
    }
  },
};

export default DonasiPostinganDetail;
