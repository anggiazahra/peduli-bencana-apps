import DataPostinganDonasi from '../../web-server/request-postingan-donasi';

const DonasiPostingan = {
  async render() {
    return `
    <style>
      .container {
        padding-top: 20px;
      }
      .hero-img {
        width: 100%;
        height: 400px;
        object-fit: cover;
        object-position: center;
      }
      .main-title {
        margin-bottom: 20px;
      }
      .btn-tambah {
        margin-left: auto; 
        margin-right: 10px;
      }
      .btn-riwayat {
        background-color: #DFDFDF;
        color: black;
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
      h2 {
        font-size: 20px;
      }
      .message {
        text-align : center;
        margin-top: 40px;
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

    <img src="./donasi-utama.png" class="hero-img">
    <div class="d-flex flex-row-reverse" id="btn-list">
      <a href="#/donasi-postingan-tambah" class="btn btn-tambah p-2" id="btn-tambah">Tambah Data</a>
    </div>
        
    <div class="list-donasi grid-row" id="list-donasi">

    </div>
    `;
  },

  async afterRender() {
    const dataPostinganDonasi = async () => {
      const result = await DataPostinganDonasi.getAllPostinganDonasi();
      const dataPostingan = result.data.donasi;
      return dataPostingan;
    };
    const dataPostingan = await dataPostinganDonasi();

    const buttonTambah = document.querySelector('#btn-tambah');
    const loginSession = sessionStorage.getItem('loginSession');

    if (loginSession === 'false') {
      buttonTambah.innerHTML = 'Login Untuk Tambah Data';
      buttonTambah.setAttribute('href', '#/login');
    }

    if (loginSession === 'true') {
      const buttonList = document.querySelector('#btn-list');

      const buttonRiwayat = document.createElement('a');
      buttonRiwayat.setAttribute('href', '#/donasi-riwayat');
      buttonRiwayat.setAttribute('class', 'btn btn-riwayat p-2');
      buttonRiwayat.innerHTML = 'Riwayat Donasi';

      buttonList.appendChild(buttonRiwayat);
    }

    if (dataPostingan.length > 0) {
      dataPostingan.forEach((data) => {
        const listDonasi = document.querySelector('#list-donasi');
        const donasiItem = document.createElement('div');
        donasiItem.classList.add('card');

        donasiItem.innerHTML = `
        <img src="./upload/donasi/${data.namaPoster}" class="card-img-top" alt="...">
        <div class="card-body">
          <h2 class="card-title">${data.judulPostingan}</h2>
          <p class="card-text">${data.kabKota}, ${data.provinsi}</p>
          <a href="#/donasi-postingan-detail/${data.id}" class="btn btn-max">Detail</a>
        </div>
      `;
        listDonasi.appendChild(donasiItem);
      });
    }

    if (dataPostingan.length < 1) {
      const listDonasi = document.querySelector('#list-donasi');
      const message = document.createElement('div');
      message.classList.add('message');
      message.innerHTML = 'Belum ada postingan donasi';
      listDonasi.appendChild(message);
    }
  },
};

export default DonasiPostingan;
