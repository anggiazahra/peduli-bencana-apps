const Donasi = {
  async render() {
    return `
    <h1 class="main-title">Donasi</h1>

      <div class="d-flex flex-row-reverse">
        <a href="#/donasi-tambah" class="btn btn-add p-2">Tambah Donasi</a>
      </div>

      <div class="list-donasi grid-row">
        <div class="card">
          <img src="./picture.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#/donasi-detail" class="btn btn-primary"
              >Go somewhere</a
            >
          </div>
        </div>
        <div class="card">
          <img src="./picture.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#/donasi-detail" class="btn btn-primary"
              >Go somewhere</a
            >
          </div>
        </div>
        <div class="card">
          <img src="./picture.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#/donasi-detail" class="btn btn-primary"
              >Go somewhere</a
            >
          </div>
        </div>
        <div class="card">
          <img src="./picture.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#/donasi-detail" class="btn btn-primary"
              >Go somewhere</a
            >
          </div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    // test
  },
};

export default Donasi;
