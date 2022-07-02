import DataPostinganRelawan from '../../web-server/request-postingan-relawan';

const Relawan = {
  async render() {
    return `
      <style>
        .list-relawan {
          padding-bottom: 50px;
        }
        .hero-img {
          width: 100%;
          height: 400px;
          object-fit: cover;
          object-position: center;
        }
        .btn-tambah {
          width:auto;
          align-content: flex-end;
          align-items: flex-end;
          margin-left: auto; 
          margin-right: 0;
        }
        .btn-max {
          width: 100%;
        }
        .grid-row {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          gap: 20px;
          margin: 20px 0;
        }
        .card img {
          width: 100%;
          height: 150px;
          object-fit: cover;
          object-position: center;
        }
        .flex-row-reverse {
          flex-direction: row !important;
        }
        .btn-riwayat {
          background-color: #DFDFDF;
          color: black;
        }
        .message {
          text-align : center;
          margin-top: 40px;
        }
        .grid-icon {
          display: grid;
          grid-template-columns: 1fr 9fr;
          gap: 5px;
          margin: 10px 0;
        }
        @media screen and (max-width: 1000px) {
          .grid-row {
              grid-template-columns: 1fr 1fr 1fr;
          }
        }
        @media screen and (max-width: 910px) {
          .hero-img {
            height: 350px;
          }
        }
        @media screen and (max-width: 790px) {
          .grid-row {
            grid-template-columns: 1fr 1fr;
          }
          .hero-img {
            height: 300px;
          }
        }
        @media screen and (max-width: 540px) {
          .grid-row {
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin: 20px 0;
          }
          .hero-img {
            height: 280px;
          }
        }
        @media screen and (max-width: 480px) {
          .hero-img {
            height: 200px;
          }
        }
        @media screen and (max-width: 430px) {
          .grid-row {
              grid-template-columns: 1fr;
          }
        }
      </style>
      
      <img data-src="./relawan-utama.png" class="lazyload hero-img" alt="Gambar relawan utama"  tabindex="0">
      <div class="d-flex flex-row-reverse" id="btn-list">
          <a href="#/relawan-tambah" class="btn btn-tambah p-2 me-2" id="btn-tambah">Tambah Data</a>
      </div>
      <div class="list-relawan" id="list-relawan">
    `;
  },

  async afterRender() {
    const dataPostinganRelawan = async () => {
      const result = await DataPostinganRelawan.getAllPostinganRelawan();
      const dataPostingan = result.data.relawan;
      return dataPostingan;
    };
    const dataPostingan = await dataPostinganRelawan();

    const buttonTambah = document.querySelector('#btn-tambah');
    const loginSession = sessionStorage.getItem('loginSession');

    if (loginSession === 'false') {
      buttonTambah.innerHTML = 'Login Untuk Tambah Data';
      buttonTambah.setAttribute('href', '#/login');
    }

    if (loginSession === 'true') {
      const buttonList = document.querySelector('#btn-list');

      const buttonRiwayat = document.createElement('a');
      buttonRiwayat.setAttribute('href', '#/relawan-riwayat');
      buttonRiwayat.setAttribute('class', 'btn btn-riwayat p-2');
      buttonRiwayat.innerHTML = 'Riwayat Relawan';

      buttonList.appendChild(buttonRiwayat);
    }

    if (dataPostingan.length > 0) {
      dataPostingan.forEach((data) => {
        const listRelawan = document.querySelector('#list-relawan');
        listRelawan.classList.add('grid-row');
        const relawanItem = document.createElement('div');
        relawanItem.classList.add('card');

        relawanItem.innerHTML = `
        <img src="./upload/relawan/${data.poster}" class="card-img-top" alt="Poster relawan" tabindex="0">
        <div class="card-body">
          <h5 class="card-title" tabindex="0">${data.judulPostingan}</h5>
          <div class="grid-icon">
            <i class="bi bi-geo-alt-fill"></i>
            <span tabindex="0">${data.kabKota}, ${data.provinsi}</span>
          </div>
          <div class="grid-icon">
            <i class="bi bi-calendar-date-fill"></i>
            <span tabindex="0">${data.tanggalMulai} - ${data.tanggalBerakhir}</span>
          </div>
          <a href="#/relawan-detail/${data.id}" class="btn btn-max">Detail</a>
        </div>
      `;
        listRelawan.appendChild(relawanItem);
      });
    }

    if (dataPostingan.length < 1) {
      const listRelawan = document.querySelector('#list-relawan');
      const message = document.createElement('div');
      message.classList.add('message');
      message.setAttribute('tabindex', '0');
      message.innerHTML = 'Belum ada postingan relawan';
      listRelawan.appendChild(message);
    }
  },
};

export default Relawan;
