import DataPostinganArtikel from '../../web-server/request-postingan-artikel';

const Artikel = {
  async render() {
    return `
      <style>
        .hero-img {
          width: 100%;
          height: 400px;
          object-fit: cover;
          object-position: center;
        }
        h1 {
          text-align: center;
          margin: 30px 0;
          padding: 0;
          font-size: 30px;
        }
        h2 {
          font-size: 20px;
        }
        .grid-row {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          gap: 20px;
        }
        .card img {
          width: 100%;
          height: 180px;
          object-fit: cover;
          object-position: center;
        }
        .content{
          margin: 20px 0 50px 0;
        }
        .content h1{
          margin-top: 30px;
        }
        .btn {
          padding: 9px 12px;
        }
        .btn-max {
          width: 100%;
        }
        .btn-add {
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
          .hero-img {
            height: 300px;
          }
          h1 {
            font-size: 24px;
          }
          h2 {
            font-size: 18px;
          }
          p {
            font-size: 14px;
          }
        }
        @media screen and (max-width: 650px) {
          .grid-row {
            grid-template-columns: 1fr 1fr;
            margin: 20px 0;
          }
        }
        @media screen and (max-width: 540px) {
          .hero-img {
            height: 280px;
          }
          h1 {
            font-size: 22px;
            margin: 0 0 30px 0;
          }
          h2 {
            font-size: 18px;
          }
        }
        @media screen and (max-width: 480px) {
          .hero-img {
            height: 200px;
          }
          h1 {
            font-size: 18px;
          }
        }
        @media screen and (max-width: 430px) {
          .grid-row {
            grid-template-columns: 1fr;
          }
          h2 {
            font-size: 16px;
          }
        }
      </style>

      <section id="berita">
        <img data-src="./artikel-utama.png" class="lazyload hero-img" alt="Hero image artikel">
        <h1 tabindex="0">Berita Terkini</h1>
        <div class="grid-row">
          <div class="card">
            <img data-src="./images/gambar-1.jpeg" class="lazyload card-img-top" alt="Gambar banjir rob" tabindex="0">
            <div class="card-body">
              <h2 class="card-title" tabindex="0">Banjir Rob</h2>
              <p class="card-text" tabindex="0">Sejumlah warga terdampak rob di Desa Sriwulan, Kecamatan Sayung, Demak, saat ini ...</p>
              <a href="https://www.detik.com/jateng/berita/d-6094839/banjir-rob-di-sayung-demak-4-penderita-stroke-diungsikan-ke-masjid" class="btn btn-primary btn-max">Lihat Detail</a>
            </div>
          </div>
          <div class="card">
            <img data-src="./images/gambar-2.jpg" class="lazyload card-img-top" alt="Gambar gempa" tabindex="0">
            <div class="card-body">
              <h2 class="card-title" tabindex="0">Gempa</h2>
              <p class="card-text" tabindex="0">mengguncang Pangandaran dan beberapa daerah di sekitarnya di pesisir selatan Jawa Barat...</p>
              <a href="https://tekno.tempo.co/read/1595583/info-gempa-terkini-bmkg-pangandaran-dulu-lalu-timor-leste" class="btn btn-primary btn-max">Lihat Detail</a>
            </div>
          </div>
          <div class="card">
            <img data-src="./images/gambar-3.jpg" class="lazyload card-img-top" alt="Gambar hujan deras" tabindex="0">
            <div class="card-body">
              <h2 class="card-title" tabindex="0">Hujan Deras</h2>
              <p class="card-text" tabindex="0">Hujan deras yang melanda sejak pagi mengakibatkan banjir kembali melanda dua...</p>
              <a href="https://www.liputan6.com/regional/read/4856231/hujan-deras-banjir-kembali-melanda-galugua-limapuluh-kota" class="btn btn-primary btn-max">Lihat Detail</a>
            </div>
          </div>
          <div class="card">
            <img data-src="./images/gambar-6.jpg" class="lazyload card-img-top" alt="Gambar puting beliung" tabindex="0">
            <div class="card-body">
              <h2 class="card-title" tabindex="0">Puting Beliung</h2>
              <p class="card-text" tabindex="0">Warga mencari harta benda di dalam rumahnya yang roboh akibat...</p>
              <a href="https://foto.tempo.co/read/86882/dampak-puting-beliung-demak-ratusan-rumah-warga-rusak#foto-1" class="btn btn-primary btn-max">Lihat Detail</a>
            </div>
          </div>
        </div>
      </section>
    
      <section id="artikel">
        <div class="content">
          <h1 tabindex="0">Artikel</h1>
          <div class="d-flex flex-row-reverse" id="flex-row"></div>
          <div class="grid-row" id="list-artikel"></div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const hakAkses = sessionStorage.getItem('hakAkses');

    if (hakAkses === 'admin') {
      const flexRow = document.querySelector('#flex-row');
      const buttonTambah = document.createElement('a');
      buttonTambah.classList.add('btn', 'btn-add');
      buttonTambah.setAttribute('href', '#/artikel-tambah');
      buttonTambah.setAttribute('tabindex', '0');
      buttonTambah.innerHTML = 'Tambah Artikel';
      flexRow.appendChild(buttonTambah);
    }

    // Data Postingan Artikel
    const DataPostingan = async () => {
      const result = await DataPostinganArtikel.getAllPostinganArtikel();
      const listPostingan = result.data.artikel;
      return listPostingan;
    };

    const listPostinganArtikel = await DataPostingan();
    listPostinganArtikel.forEach((data) => {
      const listArtikel = document.querySelector('#list-artikel');
      const artikelItem = document.createElement('div');
      artikelItem.classList.add('card');

      artikelItem.innerHTML = `
        <img data-src="./upload/artikel/${data.gambarArtikel}" class="lazyload card-img-top" alt="Gambar postingan artikel" tabindex="0">
        <div class="card-body">
          <h2 class="card-title" tabindex="0">${data.judul}</h2>
          <p class="card-text" tabindex="0">Sumber: ${data.sumber}</p>
          <a href="#/artikel-detail/${data.id}" class="btn btn-max">Detail</a>
        </div>
      `;
      listArtikel.appendChild(artikelItem);
    });
  },
};

export default Artikel;
