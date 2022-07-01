// eslint-disable-next-line no-unused-vars
const swal = require('sweetalert');

const Home = {
  async render() {
    return `
      <style>
        section {
          margin-bottom: 25px;
        }
        .home {
          min-height: 35vh;
        }
        .btn-fitur {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          gap: 20px;
        }
        .btn-fitur-main {
          background: #1C4966;
          color: white;
          padding: 30px;
          min-width: 44px;
          min-height: 44px;
          border-radius:4px;
          text-decoration: none;
          width: 100%
        }
        .btn-fitur img {
          width: 30px;
        }
        h1 {
          font-weight: 600;
          color: #1C4966;
          margin-top: 25px;
          margin-bottom: 20px;
          font-size: 28px;
        }
        .btn-fitur-main a {
          text-decoration: none;
        }
        .btn-fitur-main:hover {
          font-weight: bold;
          background: #1C4966;
          color: white;
          box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.2);
        }
        
        /* Section Fitur */
        .grid-row-1 {
          align-items: center;
          display: grid;
          grid-template-columns: 3fr 2fr;
          width: 100%;
        }
        .grid-row-2 {
          align-items: center;
          display: grid;
          grid-template-columns: 2fr 3fr;
          width: 100%;
        }
        .grid-row-1 p, .grid-row-2 p {
          margin-right: 30px;
        }
        .grid-row-1 img, .grid-row-2 img {
          width: 100%;
        }
        .fitur-fitur{
          min-height: 55vh;
          text-align: center;
        }

        /* Landing Page */
        .landing-page {
          min-height: 50vh;
        }
        .landing-main {
          display: grid;
          grid-template-columns: 2.5fr 2fr;
          padding: 20px 0;
        }
        .btn-start {
          background: #1C4966;
          color: white;
          padding: 15px;
        }
        .landing-left {
          margin: 10px;
          margin-top: 60px;
        }
        .landing-left h1 {
          font-size: 28px;
        }
        .image-landing img {
          margin-top: 15px;
          min-width: 40%;
        }

        @media screen and (max-width: 820px) {
          h1 {
            font-size: 24px;
          }
          .landing-page {
            min-height: 15vh;
          }
          .landing-left {
            margin-top: 10px;
          }
          .landing-left h1 {
            font-size: 24px;
          }
          .btn-fitur {
            gap: 20px;
          }
          .btn-fitur-main {
            padding: 20px;
            width: 100%;
          }
          #fitur-artikel img {
            width: 100%;
          }
          #fitur-relawan img {
            width: 80%;
          }
        }
        @media screen and (max-width: 540px) {
          .landing-main {
            grid-template-columns: 1fr;
            padding: 0;
          }
          .home {
            margin: 0 10px;
          }
          .btn-fitur {
            grid-template-columns: 1fr 1fr;
            gap: 15px;
          }
          .btn-fitur-main {
            padding: 20px;
            width: 100%;
          }
          .fitur {
            margin: 0;
          }
          .fitur-fitur {
            margin: 0 10px;
          }
          .landing-left {
            text-align: center;
          }
          .landing-left h1 {
            font-size: 20px;
          }
          .fitur-fitur h1 {
            font-size: 20px
          }
          .image-landing img {
            width: 80%;
            margin-left: 20%;
          }
          .grid-row-1, .grid-row-2 {
            grid-template-columns: 1fr;
          }
        }
      </style>

      <section class="landing-page">
        <div class="landing-main">
          <div class="landing-left">
            <h1>Peduli Bencana</h1>
            <p>Peduli Bencana merupakan website yang memberikan informasi dan layanan yang berkaitan dengan bencana yang terjadi di Indonesia</p>
            <a class="btn btn-add p-2" disabled>Get Started</a>
          </div>
          <div class="image-landing">
            <img src="./img/landingPage.svg" class="card-img-top" alt="">
          </div>
        </div>
      </section>
     
      <section class="home" id="home">
        <h1 style="text-align:center;">Our Service</h1>
        <div class="btn-fitur">
          <div class="fitur">
            <a href="#/mitigasi" class="btn btn-fitur-main">
            <img src="./img/solutions.png" class="card-img-top" alt="Gambar Berita">
            Mitigasi</a>
          </div>
          <div class="fitur">
            <a href="#/artikel" class="btn btn-fitur-main">
            <img src="./img/copywriting.png" class="card-img-top" alt="Gambar Berita">
            Artikel</a>
          </div>
          <div class="fitur">
            <a href="#/donasi-postingan" class="btn btn-fitur-main">
            <img src="./img/donate.png" class="card-img-top" alt="Gambar Berita">
            Donasi</a>
          </div>
          <div class="fitur">
            <a href="#/relawan" class="btn btn-fitur-main">
            <img src="./img/volunteer.png" class="card-img-top" alt="Gambar Berita">
            Relawan</a>
          </div>
        </div>
      </section>

      <!-- Section Fitur -->
      <section tabindex="0" id="fitur-mitigasi" class="fitur-fitur">
        <h1>Apa itu fitur Mitigasi?</h1>
        <hr class="mb-4">
        <div class="grid-row-1">
          <p>Fitur mitigasi berfungsi untuk memberikan informasi mengenai upaya yang dapat dilakukan untuk mengurangi risiko dan dampak yang diakibatkan oleh bencana yang terjadi. 
          </p>
          <img src="./img/mitigasi.svg">
        </div>
      </section>

      <section id="fitur-artikel" class="fitur-fitur">
        <h1>Apa itu fitur Artikel?</h1>
        <hr class="mb-4">
        <div class="grid-row-2">
          <img src="./img/artikel.svg"> 
          <p>Fitur artikel berfungsi untuk memberikan informasi terkini tentang bencana yang terjadi dan user bisa membuat artikel mengenai bencana yang terjadi.
          </p>
        </div>
      </section>

      <section id="fitur-donasi" class="fitur-fitur">
        <h1>Apa itu fitur Donasi?</h1>
        <hr class="mb-4">
        <div class="grid-row-1">
          <p>Fitur donasi berfungsi untuk menyediakan informasi seputar donasi yang memudahkan para donatur untuk memberikan bantuannya.
          </p>
          <img src="./img/donation.svg"> 
        </div>
      </section>

      <section id="fitur-relawan" class="fitur-fitur">
        <h1>Apa itu fitur Relawan?</h1>
        <hr class="mb-4">
        <div class="grid-row-2">
          <img src="./img/relawan.svg"> 
          <p>fitur relawan berfungsi untuk menyediakan informasi dan pendaftaran bagi yang ingin menjadi relawan di daerah yang terkena bencana.
          </p>
        </div>
      </section>
    `;
  },

  async afterRender() {
    // test
  },
};

export default Home;
