const TentangKami = {
  async render() {
    return `
        <style>
            * {
                box-sizing: border-box;
            }
            .container {
                width: 100% !important;
                max-width: 100% !important;
                padding: 0;
                margin: 0 !important;
            }
            .grid-1 {
                display: grid;
                grid-template-columns: 1fr 2fr;
                gap: 20px;
                margin: 0 10%;
            }
            .grid-1 h1 {
                font-size: 30px;
                margin-top: 60%;
                text-align: center;
            }
            .grid-1 img {
                width: 100%;
            }
            .grid-2 {
                margin: 0 auto;
                grid-template-columns: 2fr 3fr;
                display: grid;
                align-items: center;
                justify-content: space-around;
                gap: 70px;
                width: 80%;
            }
            .grid-2 img {
                height: auto;
                width: 200px;
                border-radius: 50%;
                box-shadow : 5px 5px 5px #C1C1C1;
                margin: 0 auto;
            }
            .description {
                width: 100%;
                padding: 50px 5px;
                background-color: #DEEBF7;
            }
            .description p{
                font-size: 16px;
                line-height: 30px;
                text-align: center;
            }
            h2 {
                font-size: 26px;
                margin: 30px 0;
                text-align: center;
            }
            .grid-3 {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr 1fr;
                gap: 20px;
            }
            .list-biodata {
                margin: 20px 10% 50px 10%;
            }
            .card {
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                border-radius: 5px;
                padding: 10px;
                background-color: white;
            }
            .card-body {
                text-align: center;
            }
            .card:hover{
                transform: translateY(-6px);
                scale: 1.1;
            }
            .card img {
                width: 100%;
                height: 170px;
                object-fit: contain;
                object-position: center;
            }
            .btn-tim {
                border: 2px solid #1C4966;
                width: 100%;
            }
            .button {
                background-color: #1C4966;
                border: none;
                width: 100%
            }
            .button a {
                color: white;
                text-decoration: none;
            }
            .button:hover {
                background-color: grey;
            }
            @media screen and (max-width: 1000px) {
                .grid-3 {
                    grid-template-columns: 1fr 1fr;
                    gap: 20px;
                }
                .grid-2 {
                    gap: 50px;
                }
            }
            @media screen and (max-width: 800px) {
                .grid-1 h1 {
                    font-size: 27px;
                }
                .grid-2 img {
                    width: 180px;;
                }
                .description p{
                    font-size: 14px;
                    line-height: 24px;
                }
            }
            @media screen and (max-width: 700px) {
                .grid-2 {
                    gap: 30px;
                    width: 90%;
                }
                .grid-2 img {
                    width: 70%;
                }
                .description {
                    width: 100%;
                    padding: 40px 0;
                    background-color: #DEEBF7;
                }
                .description p{
                    font-size: 12px;
                    line-height: 18px;
                }
            }
            @media screen and (max-width: 540px) {
                * {
                    font-size: 14px;
                }
                .grid-1 {
                    grid-template-columns: 1fr;
                    gap: 0;
                    margin: 0 5% 20px 5%;
                }
                .grid-1 h1 {
                    font-size: 22px;
                    margin-top: 20px;
                }
                .list-biodata {
                    width: 80%;
                    margin: 20px auto;
                }
                h2 {
                    font-size: 20px;
                    margin: 30px 0;
                }
            }
            @media screen and (max-width: 430px) {
                * {
                    font-size: 12px;
                }
                .grid-1 h1 {
                    font-size: 18px;
                    margin-top: 20px;
                }
                .grid-2 {
                    grid-template-columns: 1fr;
                    gap: 30px;
                    width: 80%;
                }
                .grid-2 img {
                    width: 40%;
                }
                .description {
                    width: 100%;
                    padding: 40px 0;
                    background-color: #DEEBF7;
                }
                .description p {
                    font-size: 12px;
                    line-height: 18px;
                    text-align: center;
                }
                h2 {
                    font-size: 18px;
                    margin: 15px 0;
                }
                .list-biodata {
                    width: 80%;
                    margin: 10px auto;
                }
                .grid-3 {
                    grid-template-columns: 1fr;
                    gap: 20px;
                }
            }
        </style>
        <div class="grid-1">
            <div>
                <h1 tabindex="0">Tentang Kami</h1>
            </div>
            <picture>
                <source media="(max-width: 600px)" type="image/jpeg" srcset="./heros/tentang-kami-small.jpg" class="hero-img" tabindex="0">
                <img data-src="./heros/tentang-kami-large.jpg" class="lazyload hero-img" alt="image tentang kami" tabindex="0">
            </picture>
        </div>
        <div class="description">
            <div class="grid-2">
                <img data-src="./foto-tim/peduli-bencana.png" class="lazyload" alt="Logo Peduli Bencana" tabindex="0">
                <p tabindex="0">
                    Website Peduli Bencana merupakan website yang memberikan informasi dan layanan yang berkaitan dengan bencana yang terjadi di Indonesia. Dalam website ini dapat ditemukan panduan mitigasi bencana, berita terkini seputar bencana, dan juga layanan donasi dan relawan yang memberikan kemudahan bagi mereka yang ingin menyalurkan bantuan untuk korban bencana
                </p>
            </div>
        </div>
        <h2 tabindex="0">Tim Kami</h2>
        <div class="list-biodata grid-3">
            <div class="card">
                <picture>
                    <source type="image/webp" srcset="./foto-tim/anggi.webp">
                    <img data-src="./foto-tim/anggi.png" class="lazyload card-img-top" alt="foto anggi" tabindex="0">
                </picture>
                <div class="card-body">
                    <h5>Biodata</h5>
                    <p class="btn-tim" tabindex="0">Ketua</p>
                    <p tabindex="0">Anggi Nurul Fitriyani</p>
                    <p>Universitas Singaperbangsa Karawang</p>
                    <button class="button" tabindex="-1"><a href="https://www.linkedin.com/in/anggi-nurul-fitriyani-az-zahra-6a8732230/" target="_blank">More</a></button>
                </div>
            </div>
            <div class="card">
                <picture>
                    <source type="image/webp" srcset="./foto-tim/annisya.webp">
                    <img data-src="./foto-tim/annisya.png" class="lazyload card-img-top" alt="foto annisya" tabindex="0">
                </picture>
                <div class="card-body">
                    <h5>Biodata</h5>
                    <p class="btn-tim" tabindex="0">Anggota</p>
                    <p tabindex="0">Annisya Rahmadhanti</p>
                    <p>Universitas PGRI Kanjuruhan Malang</p>
                    <button class="button" tabindex="-1"><a href="https://www.linkedin.com/in/annisya-rahmadhanti-504902203" target="_blank">More</a></button>
                </div>
            </div>
            <div class="card">
                <picture>
                    <source type="image/webp" srcset="./foto-tim/misha.webp">
                    <img data-src="./foto-tim/misha.png" class="lazyload card-img-top" alt="foto misha" tabindex="0">
                </picture>
                <div class="card-body">
                    <h5>Biodata</h5>
                    <p class="btn-tim" tabindex="0">Anggota</p>
                    <p tabindex="0">Mishabatuz Zolam</p>
                    <p>Sekolah Tinggi Teknik Pati</p>
                    <button class="button" tabindex="-1"><a href="https://www.linkedin.com/in/mishabatuz-zolam-879100232/" target="_blank">More</a></button>
                </div>
            </div>
            <div class="card">
                <picture>
                    <source type="image/webp" srcset="./foto-tim/isti.webp">
                    <img data-src="./foto-tim/isti.png" class="lazyload card-img-top" alt="foto isti" tabindex="0">
                </picture>
                <div class="card-body">
                    <h5>Biodata</h5>
                    <p class="btn-tim" tabindex="0">Anggota</p>
                    <p tabindex="0">Isti Azzah Sofiah</p>
                    <p>Universitas Yarsi</p>
                    <button class="button" tabindex="-1"><a href="https://www.linkedin.com/in/isti-azzah-sofiah-124a59231/" target="_blank">More</a></button>
                </div>
            </div>
        </div>
    `;
  },

  async afterRender() {
    // test
  },
};

export default TentangKami;
