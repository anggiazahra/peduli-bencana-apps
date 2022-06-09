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
      .container {
        max-width: 100% !important;
        padding: 30px 5%;
        margin: 0;
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
        display: grid;
        grid-template-columns: 3fr 4fr;
        margin: 0;
        min-width: 250px;
      }
      .btn {
        margin-bottom: 15px;
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
      .grid-row {
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
      @media screen and (max-width: 600px) {
        .donasi-detail {
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
          margin: 0;
        }
        .container {
          max-width : 100% !important;
          padding: 0 15px;
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
    <div class="donasi-detail">
      <div class="box-1">
        <img src="" alt="poster donasi" class="poster-donasi" id="poster-donasi">
        <div class="sub-box">
          <h1 id="judul-postingan">Donasi Korban Bencana Banjir</h1>
          <span id="donasi-terkumpul"></span> / 
          <span id="target-donasi"></span>
          <div class="progress">
            <span class="progress-value" id="progress-value"></span>
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
                  <h5 class="modal-title" id="staticBackdropLabel">Donasi Masuk</h5>
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
            <span>Lokasi Bencana</span>
            <div class="grid-row mt-3">
              <img src="./img-location.png" class="img-location">
              <div id="lokasi-bencana"></div>
            </div>
          </div>
        </div>
        <div class="card mb-3">
          <div class="card-body">
            <span>Penanggung Jawab</span>
            <div class="grid-row mt-3">
              <img src="./img-profile.png" class="img-profile">
              <div id="penanggung-jawab"></div>
            </div>
          </div>
        </div>
        <div class="card mb-3">
          <div class="card-body">
            <h2 class="desc mb-2">Detail Donasi</h2>
            <table class="table table-borderless">
              <tr>
                <td>Periode Donasi</td>
                <td>:</td>
                <td><span id="periode-donasi"></span></td>
              </tr>
              <tr>
                <td>Nama Bank</td>
                <td>:</td>
                <td><span id="nama-bank"></span></td>
              </tr>
              <tr>
                <td>No Rekening</td>
                <td>:</td>
                <td><span id="no-rekening"></span></td>
              </tr>
              <tr>
                <td>Atas Nama</td>
                <td>:</td>
                <td><span id="atas-nama"></span></td>
              </tr>
              <tr>
                <td colspan="3">
                  <p id="deskripsi-donasi"></p>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div class="grid-btn">
          <a class="btn btn-max" id="btn-edit" href="">Edit Data</a>
          <a class="btn btn-max" id="btn-hapus" href="">Hapus Data</a>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const idPostinganDonasi = url.id;

    // Data Postingan Donasi
    const resultPostingan = await DataPostinganDonasi.getPostinganDonasiById(idPostinganDonasi);
    const dataPostingan = resultPostingan.data.donasi[0];

    const posterDonasi = document.querySelector('#poster-donasi');
    posterDonasi.setAttribute('src', `./upload/donasi/${dataPostingan.namaPoster}`);

    const targetDonasi = document.querySelector('#target-donasi');
    targetDonasi.innerHTML = `Rp ${dataPostingan.targetDonasi}`;

    const lokasiBencana = document.querySelector('#lokasi-bencana');
    lokasiBencana.innerHTML = `
      <h2>${dataPostingan.kabKota} - ${dataPostingan.provinsi}</h2>
      <span>${dataPostingan.alamatLengkap}</span>
    `;

    const penanggungJawab = document.querySelector('#penanggung-jawab');
    penanggungJawab.innerHTML = `
      <h2>${dataPostingan.penanggungJawab}</h2>
      <span>${dataPostingan.pekerjaan} - ${dataPostingan.noTelepon}</span>
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

    const buttonEdit = document.querySelector('#btn-edit');
    buttonEdit.setAttribute('href', `#/donasi-postingan-edit/${dataPostingan.id}`);

    const buttonHapus = document.querySelector('#btn-hapus');
    buttonHapus.addEventListener('click', async (event) => {
      event.preventDefault();
      await DataPostinganDonasi.deletePostinganDonasiById(dataPostingan.id);
    });

    const buttonTambahDonasi = document.querySelector('#donasi-tambah');
    buttonTambahDonasi.setAttribute('href', `#/donasi-tambah/${dataPostingan.id}`);

    // Data Tambah Donasi
    const resultTambahDonasi = await DataTambahDonasi.getAllPostinganDonasi();
    const listTambahDonasi = resultTambahDonasi.data.donasi;

    // Filter data tambah donasi
    const donasiTambahFilter = listTambahDonasi.filter((item) => item.idPostinganDonasi
      .toLowerCase() === idPostinganDonasi.toLowerCase());

    if (donasiTambahFilter.length > 0) {
      const arrayDonasi = [];
      donasiTambahFilter.forEach((item) => {
        arrayDonasi.push(item.jumlahDonasi);
      });

      // Menghitung total donasi yang terkumpul
      const totalDonasi = arrayDonasi.reduce((total, num) => total + num);

      const donasiTerkumpul = document.querySelector('#donasi-terkumpul');
      donasiTerkumpul.innerHTML = `Rp ${totalDonasi}`;

      const progressBar = document.querySelector('#progress-bar');
      const presentase = (totalDonasi / dataPostingan.targetDonasi) * 100;
      progressBar.setAttribute('aria-valuenow', presentase.toFixed(1));
      progressBar.style.width = `${presentase.toFixed(1)}%`;

      const progressValue = document.querySelector('#progress-value');
      progressValue.innerHTML = `${presentase.toFixed(1)}%`;

      // Memfilter donasi yang sudah terkonfirmasi
      const donasiConfirmed = donasiTambahFilter.filter((item) => item.status === 'Sudah Dikonfirmasi');

      const listDonasi = document.querySelector('#list-donasi');

      // Tampilan Default Modal Donasi Masuk
      if (donasiConfirmed.length > 0) {
        listDonasi.innerHTML = '';
        listDonasi.innerHTML = '<div class="confirm-title">Sudah Dikonfirmasi</div>';
        donasiConfirmed.forEach((data) => {
          const itemDonasi = document.createElement('div');
          itemDonasi.classList.add('item-donasi-grid');
          itemDonasi.innerHTML = `
          <img src="./img-profile.png" class="img-profile"></img>
          <div>
            <div>${data.namaDonatur}</div>
            <div>Berdonasi sebesar Rp ${data.jumlahDonasi}</div>
            <div>${data.tanggalDonasi}</div>
          </div>
        `;
          listDonasi.appendChild(itemDonasi);
        });
      } else {
        listDonasi.innerHTML = '';
        listDonasi.innerHTML = `
          <div class="confirm-title">Sudah Dikonfirmasi</div>
          <div class="message">Belum ada donasi yang dikonfirmasi</div>
        `;
      }

      // Tampilan saat tombol donasi sudah dikonfirmasi ditekan
      const buttonConfirm = document.querySelector('#btn-confirm');
      buttonConfirm.addEventListener('click', (event) => {
        event.preventDefault();
        listDonasi.innerHTML = '';
        listDonasi.innerHTML = '<div class="confirm-title">Sudah Dikonfirmasi</div>';
        if (donasiConfirmed.length > 0) {
          donasiConfirmed.forEach((data) => {
            const itemDonasi = document.createElement('div');
            itemDonasi.classList.add('item-donasi-grid');
            itemDonasi.innerHTML = `
          <img src="./img-profile.png" class="img-profile"></img>
          <div>
            <div>${data.namaDonatur}</div>
            <div>Berdonasi sebesar Rp ${data.jumlahDonasi}</div>
            <div>${data.tanggalDonasi}</div>
          </div>
        `;
            listDonasi.appendChild(itemDonasi);
          });
        } else {
          listDonasi.innerHTML = '';
          listDonasi.innerHTML = `
            <div class="confirm-title">Sudah Dikonfirmasi</div>
            <div class="message">Belum ada donasi yang dikonfirmasi</div>
          `;
        }
      });

      // Memfilter donasi yang belum terkonfirmasi
      const donasiUnconfirmed = donasiTambahFilter.filter((item) => item.status === 'Belum Dikonfirmasi');

      // Tampilan saat tombol donasi belum dikonfirmasi ditekan
      const buttonUnonfirm = document.querySelector('#btn-unconfirm');
      buttonUnonfirm.addEventListener('click', (event) => {
        event.preventDefault();
        listDonasi.innerHTML = '';
        listDonasi.innerHTML = '<div class="confirm-title">Belum Dikonfirmasi</div>';
        donasiUnconfirmed.forEach((data) => {
          const itemDonasi = document.createElement('div');
          itemDonasi.classList.add('item-donasi-grid');
          itemDonasi.innerHTML = `
          <img src="./img-profile.png" class="img-profile"></img>
          <div>
            <div>${data.namaDonatur}</div>
            <div>Berdonasi sebesar Rp ${data.jumlahDonasi}</div>
            <div>${data.tanggalDonasi}</div>
          </div>
        `;
          listDonasi.appendChild(itemDonasi);
        });
      });
    } else {
      const donasiTerkumpul = document.querySelector('#donasi-terkumpul');
      donasiTerkumpul.innerHTML = 'Rp 0';

      const progressValue = document.querySelector('#progress-value');
      progressValue.innerHTML = '0%';

      // Modal Donasi Masuk

      const listDonasi = document.querySelector('#list-donasi');

      // Tampilan Default Modal Donasi Masuk
      listDonasi.innerHTML = '';
      listDonasi.innerHTML = `
        <div class="confirm-title">Sudah Dikonfirmasi</div>
        <div class="message">Belum ada donasi yang masuk</div>
      `;

      // Tampilan saat tombol donasi sudah dikonfirmasi ditekan
      const buttonConfirm = document.querySelector('#btn-confirm');
      buttonConfirm.addEventListener('click', (event) => {
        event.preventDefault();
        listDonasi.innerHTML = '';
        listDonasi.innerHTML = `
          <div class="confirm-title">Sudah Dikonfirmasi</div>
          <div class="message">Belum ada donasi yang masuk</div>
        `;
      });

      // Tampilan saat tombol donasi belum dikonfirmasi ditekan
      const buttonUnonfirm = document.querySelector('#btn-unconfirm');
      buttonUnonfirm.addEventListener('click', (event) => {
        event.preventDefault();
        listDonasi.innerHTML = '';
        listDonasi.innerHTML = `
          <div class="confirm-title">Belum Dikonfirmasi</div>
          <div class="message">Belum ada donasi yang masuk</div>
        `;
      });
    }
  },
};

export default DonasiPostinganDetail;
