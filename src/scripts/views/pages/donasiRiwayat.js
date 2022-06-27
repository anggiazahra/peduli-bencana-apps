import DataPostinganDonasi from '../../web-server/request-postingan-donasi';
import DataTambahDonasi from '../../web-server/request-tambah-donasi';

const DonasiRiwayat = {
  async render() {
    return `
      <style>
        .donasi-riwayat {
          padding-top: 30px;
        }
        .hero-img {
          width: 100%;
          height: 400px;
          object-fit: cover;
          object-position: center;
        }
        .donasi-riwayat h1 {
          font-size: 24px !important;
          text-align: center;
        }
        .donasi-riwayat h2 {
          font-size: 20px !important;
        }
        .grid-btn {
          display: grid;
          grid-template-columns: auto auto;
          gap: 10px;
        }
        .btn {
          background-color: white;
          color: black;
        }
        .btn-max {
          width: 100%;
        }
        .btn:hover {
          font-weight: 600;
        }
        .btn-border {
          border-bottom-style: solid;
          border-bottom-width: 1px;
          margin-bottom: 15px;
          border-bottom-color: #959595;
        }
        .title {
          margin: 25px 0 10px 0;
        }
        .btn-detail, .btn-konfirmasi, .btn-color {
          background-color: #0353A0;;
          color: white;
        }
        .confirm-title {
          font-size: 17px;
          font-weight: 500;
          margin-bottom: 15px;
        }
        .list-donasi {
          min-height: 300px;
        }
        .item-donasi-grid {
          display: grid;
          grid-template-columns: 1fr 6fr;
          gap: 15px;
        }
        .message {
          text-align: center;
        }
        .img-profile {
          width: 50px;
          border-radius: 50%;
          margin: 0 auto;
        }
        .text-bold {
          font-weight: bold;
        }
        .grid-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .sub-title {
          font-size: 20px;
        }
        @media screen and (max-width: 910px) {
          .hero-img {
            height: 350px;
          }
        }
        @media screen and (max-width: 850px) {
          .grid-row {
            grid-template-columns: 1fr;
            gap: 10px;
          }
          .sub-title {
            font-size: 16px;
          }
        }
        @media screen and (max-width: 600px) {
          .container {
            width: 100% !important;
            padding: 0 !important;
          }
          .donasi-riwayat {
            padding-top: 10px;
          }
          .donasi-riwayat h1 {
            font-size: 17px !important;
          }
          .donasi-riwayat h2 {
            font-size: 14px !important;
          }
          .sub-title {
            font-size: 14px;
          }
        }
        @media screen and (max-width: 540px) {
          .hero-img {
            height: 300px;
          }
        }
        @media screen and (max-width: 480px) {
          .hero-img {
            height: 200px;
          }
        }
      </style>

      <div class="donasi-riwayat">
        <div class="grid-btn btn-border">
          <button class="btn btn-max sub-title" id="btn-postingan">Postingan Donasi</button>
          <button class="btn btn-max sub-title" id="btn-donasiku">Donasiku</button>
        </div>
        <div id="detail-riwayat"></div>
      </div>
    `;
  },

  async afterRender() {
    const loginSession = sessionStorage.getItem('loginSession');

    if (loginSession === 'false') {
      swal('Akses Ditolak', 'Maaf anda tidak bisa mengakses halaman ini sebelum melakukan login', 'error');
      window.location.replace('#/login');
    }

    const buttonPostingan = document.querySelector('#btn-postingan');
    const buttonDonasiku = document.querySelector('#btn-donasiku');
    const detailRiwayat = document.querySelector('#detail-riwayat');

    // Username pengguna saat login
    const sessionUsername = sessionStorage.getItem('username');

    // Data postingan donasi berdasarkan id
    const dataPostinganDonasiById = async (idPostinganDonasi) => {
      const result = await DataPostinganDonasi.getAllPostinganDonasi();
      const dataPostingan = result.data.donasi;
      const listPostingan = dataPostingan.filter((item) => item.id.toLowerCase()
      === idPostinganDonasi.toLowerCase());
      return listPostingan;
    };

    // Data postingan donasi berdasarkan session username
    const dataPostinganDonasiByUsername = async () => {
      const result = await DataPostinganDonasi.getAllPostinganDonasi();
      const dataPostingan = result.data.donasi;
      const listPostingan = dataPostingan.filter((item) => item.usernamePembuat
      === sessionUsername);
      return listPostingan;
    };

    // Data tambah donasi berdasarkan session username
    const dataDonasiByUsername = async () => {
      const resultTambahDonasi = await DataTambahDonasi.getAllTambahDonasi();
      const listTambahDonasi = resultTambahDonasi.data.donasi;
      const listDonasiFilter = listTambahDonasi.filter((item) => item.username
      === sessionUsername);
      return listDonasiFilter;
    };

    const formatToCurrency = (amount) => `Rp ${amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;

    const riwayatPostingan = async () => {
      detailRiwayat.innerHTML = '';
      detailRiwayat.innerHTML = '<img src="./riwayat-postingan-donasi.png" class="hero-img">';

      const listPostinganDonasi = document.createElement('div');
      listPostinganDonasi.setAttribute('class', 'grid-row');
      detailRiwayat.appendChild(listPostinganDonasi);

      const postinganDonasiByUsername = await dataPostinganDonasiByUsername();

      if (postinganDonasiByUsername.length > 0) {
        postinganDonasiByUsername.forEach(async (data) => {
          const itemPostinganDonasi = document.createElement('div');
          itemPostinganDonasi.classList.add('card');
          itemPostinganDonasi.innerHTML = `
            <div class="card-body">
              <h2>${data.judulPostingan}</h2>
              <div>Periode donasi : ${data.tanggalMulai} - ${data.tanggalBerakhir}</div>
              <div>Lokasi bencana :</div>
              <div>${data.alamatLengkap}, ${data.kabKota} - ${data.provinsi}</div>
              <div class="d-flex flex-row-reverse mt-4">
                <a href="#/donasi-postingan-detail/${data.id}" class="btn btn-detail p-2 ms-2">Detail</a>
                <a href="#/donasi-konfirmasi/${data.id}" class="btn btn-color p-2 ms-2">Konfirmasi Donasi</a>
                <a href="#/donasi-postingan-edit/${data.id}" class="btn btn-color p-2 ms-2">Edit</a>
                <button class="btn btn-color p-2 ms-2" id="btn-hapus-${data.id}">Hapus</button>
              </div>
            </div>
          `;
          listPostinganDonasi.appendChild(itemPostinganDonasi);

          const buttonHapus = document.querySelector(`#btn-hapus-${data.id}`);
          buttonHapus.addEventListener('click', async () => {
            const hapusPostingan = await swal({
              title: 'Hapus Data',
              text: 'Apakah anda ingin menghapus postingan donasi ini?',
              icon: 'warning',
              buttons: true,
            });

            if (hapusPostingan) {
              await DataPostinganDonasi.deletePostinganDonasiById(data.id);
              riwayatPostingan();
            }
          });
        });
      } else if (postinganDonasiByUsername.length < 1) {
        const message = document.createElement('div');
        message.innerHTML = '<div class="message">Anda belum pernah membuat postingan donasi</div>';
        detailRiwayat.appendChild(message);
      }
    };
    riwayatPostingan();

    const riwayatDonasi = async () => {
      detailRiwayat.innerHTML = '';
      detailRiwayat.innerHTML = '<img src="./riwayat-donasi.png" class="hero-img">';

      const listDonasi = document.createElement('div');
      listDonasi.setAttribute('class', 'grid-row');
      detailRiwayat.appendChild(listDonasi);

      const listDonasiByUsername = await dataDonasiByUsername();

      if (listDonasiByUsername.length > 0) {
        listDonasiByUsername.forEach(async (data) => {
          // Filter data postingan donasi
          const result = await dataPostinganDonasiById(data.idPostinganDonasi);
          const postinganDonasi = result[0];

          const itemDonasi = document.createElement('div');
          itemDonasi.classList.add('card');
          itemDonasi.innerHTML = `
              <div class="card-body item-donasi-grid">
                <img src="./img-profile.png" class="img-profile"></img>
                <div>
                  <h2>${postinganDonasi.judulPostingan}</h2>
                  <div>Atas nama <span class="text-bold">${data.atasNama}</span></div>
                  <div>${data.namaBank} - ${data.noRekening}</div>
                  <div>Berdonasi sebesar ${formatToCurrency(parseInt(data.jumlahDonasi))}</div>
                  <div>Status <span class="text-danger">${data.status}<span></div>
                  <div class="d-flex flex-row-reverse">
                    <a class="btn btn-color p-2 mt-2" href="#/donasi-postingan-detail/${data.idPostinganDonasi}">Detail Donasi</a>
                  </div>
                </div>
              </div>
            `;
          listDonasi.appendChild(itemDonasi);
        });
      } else if (listDonasiByUsername.length < 1) {
        const message = document.createElement('div');
        message.innerHTML = '<div class="message">Anda belum pernah melakukan donasi</div>';
        detailRiwayat.appendChild(message);
      }
    };

    buttonPostingan.addEventListener('click', async () => {
      riwayatPostingan();
    });
    buttonDonasiku.addEventListener('click', async () => {
      riwayatDonasi();
    });
  },
};

export default DonasiRiwayat;
