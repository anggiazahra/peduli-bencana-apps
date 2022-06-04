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
        
    <div class="list-relawan grid-row">
        <div class="card">
            <img src="./picture.png" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Judul Postingan</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#/donasi-postingan-detail" class="btn btn-primary">Detail</a>
            </div>
        </div>
        <div class="card">
            <img src="./picture.png" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Judul Postingan</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#/donasi-postingan-detail" class="btn btn-primary">Detail</a>
            </div>
        </div>
        <div class="card">
            <img src="./picture.png" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Judul Postingan</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#/donasi-postingan-detail" class="btn btn-primary">Detail</a>
            </div>
        </div>
        <div class="card">
            <img src="./picture.png" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Judul Postingan</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#/donasi-postingan-detail" class="btn btn-primary">Detail</a>
            </div>
        </div>
    </div>
    `;
  },

  async afterRender() {
    // test
  },
};

export default DonasiPostingan;
