const Relawan = {
  async render() {
    return `
    <h1 class="main-title">Relawan</h1>

    <div class="d-flex flex-row-reverse">
        <a href="#/relawan-tambah" class="btn btn-add p-2">Tambah Data</a>
    </div>
        
    <div class="list-relawan grid-row">
        <div class="card">
            <img src="./picture.png" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Judul Postingan</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#/relawan-detail" class="btn btn-primary">Detail</a>
            </div>
        </div>
        <div class="card">
            <img src="./picture.png" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Judul Postingan</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#/relawan-detail" class="btn btn-primary">Detail</a>
            </div>
        </div>
        <div class="card">
            <img src="./picture.png" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Judul Postingan</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#/relawan-detail" class="btn btn-primary">Detail</a>
            </div>
        </div>
        <div class="card">
            <img src="./picture.png" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Judul Postingan</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#/relawan-detail" class="btn btn-primary">Detail</a>
            </div>
        </div>
    </div>
    `;
  },

  async afterRender() {
    // test
  },
};

export default Relawan;
