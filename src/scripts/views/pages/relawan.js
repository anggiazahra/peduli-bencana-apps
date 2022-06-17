import DataPostinganRelawan from '../../web-server/request-postingan-relawan';

const Relawan = {
  async render() {
    return `
      <style>
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
        @media screen and (max-width: 1000px) {
          .grid-row {
              grid-template-columns: 1fr 1fr 1fr;
          }
        }
        @media screen and (max-width: 790px) {
          .grid-row {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media screen and (max-width: 540px) {
          .grid-row {
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin: 20px 0;
          }
        }
        @media screen and (max-width: 430px) {
          .grid-row {
              grid-template-columns: 1fr;
          }
        }
      </style>
      
      <h1 class="main-title">Relawan</h1>
      <div class="d-flex flex-row-reverse">
          <a href="#/relawan-tambah" class="btn btn-tambah p-2" id="btn-tambah">Tambah Data</a>
      </div>
      <div class="list-relawan grid-row">
    `;
  },

  async afterRender() {
    const result = await DataPostinganRelawan.getAllPostinganRelawan();
    const dataPostinganRelawan = result.data.relawan;

    const buttonTambah = document.querySelector('#btn-tambah');
    const loginSession = sessionStorage.getItem('loginSession');

    if (loginSession === 'false') {
      buttonTambah.innerHTML = 'Login Untuk Tambah Data';
      buttonTambah.setAttribute('href', '#/login');
    }

    dataPostinganRelawan.forEach((data) => {
      const listRelawan = document.querySelector('.list-relawan');
      const relawanItem = document.createElement('div');
      relawanItem.classList.add('card');

      relawanItem.innerHTML = `
        <img src="./upload/relawan/${data.poster}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${data.judulPostingan}</h5>
          <p class="card-text">${data.kabKota}, ${data.provinsi}</p>
          <a href="#/relawan-detail/${data.id}" class="btn btn-max">Detail</a>
        </div>
      `;
      listRelawan.appendChild(relawanItem);
    });
  },
};

export default Relawan;
