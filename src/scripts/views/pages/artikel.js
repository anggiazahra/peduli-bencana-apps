/* eslint-disable no-undef */
import DataPostinganArtikel from '../../web-server/request-postingan-artikel';

const Artikel = {
  async render() {
    return `
    <style>

    #berita h1{
      text-align: center;
      font-weight: 600;
      color: #1C4966;
      margin-top: 50px;
  }
  #artikel{
    min-height: 30vh;
  }
  .artikel-search{
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 20px;
      margin: 20px 0;
  }
  .card{
      width: 100%;
      margin: 50px auto;
      padding: 22px;
      padding-bottom: 35px;
  }
  .content{
    margin: auto 20px;
    min-height: 75vh;
}
  .content h1{
    text-align: center;
    font-weight: 600;
    color: #1C4966;
    padding-bottom: 30px;
}
.card-artikel{
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.card-artikel .card{
  margin: 20px auto;
  width: 18rem;
  height:60vh;
}

  @media screen and (max-width: 1100px){
    .artikel-search{
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin: 20px 0;
    }
    .card-artikel{
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin: 20px 0;
    }
    .card-artikel .card{
      margin: 20px auto;
    }
  }

  @media screen and (max-width: 630px) {
    .artikel-search{
      grid-template-columns: 1fr;
      gap: 20px;
      margin: 20px 0;
    }
    .card-artikel{
      display: grid;
      grid-template-columns: 1fr;
      gap: 20px;
      margin: 20px 0;
    }
    .card-artikel .card{
      margin: 20px auto;
    }

  }
  
    </style>


    <section id="berita">
    <h1>BERITA TERKINI</h1>
    <div class="artikel-search">
        <div class="card" style="width: 18rem;  height:50vh;">
            <img src="./public/images/gambar-2.jpg" class="card-img-top" alt="Gambar Berita">
            <div class="card-body">
              <h5 class="card-title">Banjir Rob</h5>
              <p class="card-text">Sejumlah warga terdampak rob di Desa Sriwulan, Kecamatan Sayung, Demak...</p>
              <a href="https://www.detik.com/jateng/berita/d-6094839/banjir-rob-di-sayung-demak-4-penderita-stroke-diungsikan-ke-masjid" class="btn btn-primary">Lihat Detail</a>
            </div>
        </div>
        <div class="card" style="width: 18rem; height:50vh;">
            <img src="./public/images/gambar-2.jpg" class="card-img-top" alt="Gambar Berita">
            <div class="card-body">
              <h5 class="card-title">Gempa</h5>
              <p class="card-text">mengguncang Pangandaran dan beberapa daerah di sekitarnya di pesisir selatan Jawa Barat...</p>
              <a href="https://tekno.tempo.co/read/1595583/info-gempa-terkini-bmkg-pangandaran-dulu-lalu-timor-leste" class="btn btn-primary">Lihat Detail</a>
            </div>
        </div>
        <div class="card" style="width: 18rem; height:50vh;">
            <img src="./public/images/gambar-2.jpg" class="card-img-top" alt="Gambar Berita">
            <div class="card-body">
              <h5 class="card-title">Hujan Deras</h5>
              <p class="card-text">Hujan deras yang melanda sejak pagi mengakibatkan banjir kembali melanda dua jorong (dusun) di Nagari...</p>
              <a href="https://www.liputan6.com/regional/read/4856231/hujan-deras-banjir-kembali-melanda-galugua-limapuluh-kota" class="btn btn-primary">Lihat Detail</a>
            </div>
        </div>
        <div class="card" style="width: 18rem; height:50vh;">
            <img src="./public/images/gambar-2.jpg" class="card-img-top" alt="Gambar Berita">
            <div class="card-body">
              <h5 class="card-title">Tanah Longsor</h5>
              <p class="card-text">Tanah longsor menyebabkan tiga rumah rusak di Desa Jolontoro...</p>
              <a href="https://nasional.tempo.co/read/1581141/tiga-rumah-rusak-akibat-tanah-longsor-di-wonosobo" class="btn btn-primary">Lihat Detail</a>
            </div>
        </div>
        <div class="card" style="width: 18rem; height:50vh;">
            <img src="./public/images/gambar-2.jpg" class="card-img-top" alt="Gambar Berita">
            <div class="card-body">
              <h5 class="card-title">Banjir Bandang</h5>
              <p class="card-text">Banjir bandang melanda Kalurahan Kalirejo, Kapanewon...</p>
              <a href="https://www.detik.com/jateng/jogja/d-6086035/banjir-bandang-di-kulon-progo-warga-mengungsi-jalan-tertutup-material" class="btn btn-primary">Lihat Detail</a>
            </div>
        </div>
        <div class="card" style="width: 18rem; height:50vh;">
            <img src="./public/images/gambar-2.jpg" class="card-img-top" alt="Gambar Berita">
            <div class="card-body">
              <h5 class="card-title">Puting Beliung</h5>
              <p class="card-text">Warga mencari harta benda di dalam rumahnya yang roboh akibat...</p>
              <a href="https://foto.tempo.co/read/86882/dampak-puting-beliung-demak-ratusan-rumah-warga-rusak#foto-1" class="btn btn-primary">Lihat Detail</a>
            </div>
        </div>
    </div>
</section>
    
<section id="artikel">
    <div class="content">
        <h1>ARTIKEL</h1>
        <div class="d-flex flex-row-reverse">
          <a href="#/artikel-tambah" class="btn btn-add p-2">Tambah Data</a>
        </div>
        <div class="card-artikel">
        
        </div>
    </div>
</section>
    `;
  },

  async afterRender() {
    const result = await DataPostinganArtikel.getAllPostinganArtikel();
    const dataPostinganArtikel = result.data.artikel;

    dataPostinganArtikel.forEach((data) => {
      const listArtikel = document.querySelector('.card-artikel');
      const artikelItem = document.createElement('div');
      artikelItem.classList.add('card');

      artikelItem.innerHTML = `
      <img src="./upload/artikel/${data.gambarArtikel}" class="card-img-top" alt="...">
           <div class="card-body">
              <h5 class="card-title">${data.judul}</h5>
                <p class="card-text">Sumber: ${data.sumber}</p>
                <a href="#/artikel-detail/${data.id}" class="btn">Detail</a>
            </div>
      `;
      listArtikel.appendChild(artikelItem);
    });
  },
};

export default Artikel;
