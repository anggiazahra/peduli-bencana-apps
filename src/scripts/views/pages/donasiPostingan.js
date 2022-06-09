import DataPostinganDonasi from '../../web-server/request-postingan-donasi';

const DonasiPostingan = {
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

    <h1 class="main-title">Donasi</h1>
    <div class="d-flex flex-row-reverse">
        <a href="#/donasi-postingan-tambah" class="btn btn-tambah p-2">Tambah Data</a>
    </div>
        
    <div class="list-donasi grid-row" id="list-donasi">

    </div>
    `;
  },

  async afterRender() {
    const result = await DataPostinganDonasi.getAllPostinganDonasi();
    const dataPostinganDonasi = result.data.donasi;

    dataPostinganDonasi.forEach((data) => {
      const listDonasi = document.querySelector('#list-donasi');
      const donasiItem = document.createElement('div');
      donasiItem.classList.add('card');

      donasiItem.innerHTML = `
        <img src="./upload/donasi/${data.namaPoster}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${data.judulPostingan}</h5>
          <p class="card-text">${data.kabKota}, ${data.provinsi}</p>
          <a href="#/donasi-postingan-detail/${data.id}" class="btn">Detail</a>
        </div>
      `;
      listDonasi.appendChild(donasiItem);
    });
  },
};

export default DonasiPostingan;
