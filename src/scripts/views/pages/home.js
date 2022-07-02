// eslint-disable-next-line no-unused-vars
const swal = require('sweetalert');

const Home = {
  async render() {
    return `
      <style>
        section {
          margin-bottom: 25px;
        }
        .btn-fitur {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          gap: 20px;
        }
        .btn-fitur-main {
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
        p {
          font-size: 19px;
        }
        
        /* Section Fitur */
        .grid-row {
          text-align: center;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
        }
        .grid-row img {
          height: 200px;
          width: auto;
          margin-bottom: 30px;
        }
        #fitur-relawan {
          margin-bottom: 50px;
        }

        /* Landing Page */
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
          .grid-row {
            grid-template-columns: 1fr;
          }
          .grid-row img {
            width: 60%;
            height: auto;
          }
          p {
            font-size: 14px;
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
          .grid-row img {
            width: 100%;
          }
        }
      </style>

      <section class="landing-page">
        <div class="landing-main">
          <div class="landing-left">
            <h1 tabindex="0">Peduli Bencana</h1>
            <p tabindex="0">Peduli Bencana merupakan website yang memberikan informasi dan layanan yang berkaitan dengan bencana yang terjadi di Indonesia</p>
            <a class="btn btn-add p-2" disabled>Get Started</a>
          </div>
          <div class="image-landing">
            <img data-src="./img/landingPage.svg" class="lazyload card-img-top" alt="Gambar landing page" tabindex="0">
          </div>
        </div>
      </section>
     
      <section class="home" id="home">
        <h1 style="text-align:center;" tabindex="0">Our Service</h1>
        <div class="btn-fitur">
          <div class="fitur">
            <a href="#/mitigasi" class="btn btn-fitur-main">
            <img data-src="./img/solutions.png" class="lazyload card-img-top" alt="Gambar fitur mitigasi" tabindex="0">
            Mitigasi</a>
          </div>
          <div class="fitur">
            <a href="#/artikel" class="btn btn-fitur-main">
            <img data-src="./img/copywriting.png" class="lazyload card-img-top" alt="Gambar fitur artikel" tabindex="0">
            Artikel</a>
          </div>
          <div class="fitur">
            <a href="#/donasi-postingan" class="btn btn-fitur-main">
            <img data-src="./img/donate.png" class="lazyload card-img-top" alt="Gambar fitur donasi" tabindex="0">
            Donasi</a>
          </div>
          <div class="fitur">
            <a href="#/relawan" class="btn btn-fitur-main">
            <img data-src="./img/volunteer.png" class="lazyload card-img-top" alt="Gambar fitur relawan" tabindex="0">
            Relawan</a>
          </div>
        </div>
      </section>

      <!-- Section Fitur -->
      <div class="grid-row">
        <section id="fitur-mitigasi" class="fitur-fitur">
          <h1 tabindex="0">Apa itu fitur Mitigasi?</h1>
          <div>
            <img data-src="./img/mitigasi.svg" class="lazyload" alt="Gambar mitigasi" tabindex="0">
            <p tabindex="0">Fitur mitigasi memberikan informasi seputar mitigasi bencana. Diantaranya yaitu mengenai upaya yang dapat dilakukan untuk mengurangi risiko dan dampak yang diakibatkan oleh bencana yang terjadi. 
            </p>
          </div>
        </section>

        <section id="fitur-artikel" class="fitur-fitur">
          <h1 tabindex="0">Apa itu fitur Artikel?</h1>
          <div>
            <img data-src="./img/artikel.svg" class="lazyload" alt="Gambar artikel" tabindex="0"> 
            <p tabindex="0">Fitur artikel memberikan informasi terkini tentang bencana yang terjadi di Indonesia.
            </p>
          </div>
        </section>
      </div>

      <div class="grid-row">
        <section id="fitur-donasi" class="fitur-fitur">
          <h1 tabindex="0">Apa itu fitur Donasi?</h1>
          <div>
            <img data-src="./img/donation.svg" class="lazyload" alt="Gambar donasi" tabindex="0"> 
            <p tabindex="0">Fitur donasi menyediakan informasi dan layanan seputar donasi guna memberikan kemudahan bagi mereka yang ingin memberikan donasi bagi para korban bencana.
            </p>
          </div>
        </section>

        <section id="fitur-relawan" class="fitur-fitur">
          <h1 tabindex="0">Apa itu fitur Relawan?</h1>
          <div>
            <img data-src="./img/relawan.svg" class="lazyload" alt="Gambar relawan" tabindex="0"> 
            <p tabindex="0">Fitur relawan menyediakan informasi dan layanan seputar relawan guna memberikan kemudahan bagi mereka yang ingin terjun langsung untuk menjadi relawan di tempat terjadinya bencana.
            </p>
          </div>
        </section>
      </div>
    `;
  },

  async afterRender() {
    // test
  },
};

export default Home;
