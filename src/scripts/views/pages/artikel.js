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
  
  
  /* Hero Section */
  
  .content{
      margin: 40px 20px;
  }
  .content h1{
      text-align: center;
      font-weight: 600;
      color: #1C4966;
      padding-bottom: 30px;
  }
  .tambah-button{
      display: flex;
      align-items: center;
      justify-content: center;
  }
  .tambah-button button{
      padding: 10px;
      border: none;
      background: #233D8C;
      color: #fff;
      border-radius: 6px;
  }
  .tambah-button button:hover{
      background: #8F9AD9;
  }
  
  @media screen and (max-width: 1100px){
    .artikel-search{
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin: 20px 0;
    }
  }

  @media screen and (max-width: 630px) {
    .artikel-search{
      grid-template-columns: 1fr;
      gap: 20px;
      margin: 20px 0;
    }

  }
  
    </style>


    <section id="berita">
    <h1>BERITA TERKINI</h1>
    <div class="artikel-search">
        <div class="card" style="width: 18rem;  height:50vh;">
            <img src="images/gambar-2.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Banjir Rob</h5>
              <p class="card-text">Sejumlah warga terdampak rob di Desa Sriwulan, Kecamatan Sayung, Demak...</p>
              <a href="https://www.detik.com/jateng/berita/d-6094839/banjir-rob-di-sayung-demak-4-penderita-stroke-diungsikan-ke-masjid" class="btn btn-primary">Lihat Detail</a>
            </div>
        </div>
        <div class="card" style="width: 18rem; height:50vh;">
            <img src="images/1.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Gempa</h5>
              <p class="card-text">mengguncang Pangandaran dan beberapa daerah di sekitarnya di pesisir selatan Jawa Barat...</p>
              <a href="https://tekno.tempo.co/read/1595583/info-gempa-terkini-bmkg-pangandaran-dulu-lalu-timor-leste" class="btn btn-primary">Lihat Detail</a>
            </div>
        </div>
        <div class="card" style="width: 18rem; height:50vh;">
            <img src="images/1.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Hujan Deras</h5>
              <p class="card-text">Hujan deras yang melanda sejak pagi mengakibatkan banjir kembali melanda dua jorong (dusun) di Nagari...</p>
              <a href="https://www.liputan6.com/regional/read/4856231/hujan-deras-banjir-kembali-melanda-galugua-limapuluh-kota" class="btn btn-primary">Lihat Detail</a>
            </div>
        </div>
        <div class="card" style="width: 18rem; height:50vh;">
            <img src="images/1.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Tanah Longsor</h5>
              <p class="card-text">Tanah longsor menyebabkan tiga rumah rusak di Desa Jolontoro...</p>
              <a href="https://nasional.tempo.co/read/1581141/tiga-rumah-rusak-akibat-tanah-longsor-di-wonosobo" class="btn btn-primary">Lihat Detail</a>
            </div>
        </div>
        <div class="card" style="width: 18rem; height:50vh;">
            <img src="images/1.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Banjir Bandang</h5>
              <p class="card-text">Banjir bandang melanda Kalurahan Kalirejo, Kapanewon...</p>
              <a href="https://www.detik.com/jateng/jogja/d-6086035/banjir-bandang-di-kulon-progo-warga-mengungsi-jalan-tertutup-material" class="btn btn-primary">Lihat Detail</a>
            </div>
        </div>
        <div class="card" style="width: 18rem; height:50vh;">
            <img src="images/1.jpg" class="card-img-top" alt="...">
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
        <div class="card text-center">
            <div class="card-header">
              <h3>Judul</h3>
            </div>
            <div class="card-body">
              <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam vel, consequatur qui eos eum ipsa dolor, ad labore possimus illum nesciunt res dignissimos rem et quis!</p>
            </div>
            <div class="card-footer text-muted">
              sumber://***//
            </div>
        </div>
        <div class="card text-center">
            <div class="card-header">
              <h3>Judul</h3>
            </div>
            <div class="card-body">
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea quia perferendis asperiores blanditiis voluptas. Quidem dolorem eaque quas reprehenderit, minima quia quod laudantium eius ex sequi rem maiores officiis commodi odit enim eos saepe a nemo cupiditate impedit deleniti odio error nisi aut? Quasi, eveniet! Dolore totam, nam facere doloribus.</p>
            </div>
            <div class="card-footer text-muted">
              sumber://***//
            </div>
        </div>
        
    </div>
</section>
    `;
  },

  async afterRender() {
    // test
  },
};

export default Artikel;
