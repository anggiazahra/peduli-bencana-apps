/* eslint-disable indent */
const Home = {
    async render() {
      return `
      <style>
      section{
        margin-bottom: 25px;
      }
      .home{
        min-height: 35vh;
      }
      .btn-fitur{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 20px;
      }
      .btn-fitur-main{
        background: #1C4966;
        color: white;
        padding: 35px;
        min-width: 44px;
        min-height: 44px;
        border-radius:4px;
        text-decoration: none;
      }
      .btn-fitur img{
        width: 30px;
      }
      .fitur{
        margin: 25px auto;
      }
      h1{
        font-weight: 600;
        color: #1C4966;
        margin-top: 25px;
        margin-bottom: 40px;
      }
      .btn-fitur-main a{
        text-decoration: none;
      }
      .btn-fitur-main:hover{
        font-weight: bold;
        background: #1C4966;
        color: white;
        box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.2);
      }
        
      /* Section Fitur */

        #fitur-mitigasi{
         min-heigth: 55vh;
        }
        .fitur-penjelasan{
          align-items: center;
          display: grid;
          grid-template-columns: 2.5fr 1.5fr;
          width: 100%;
        }
        .fitur-penjelasan p{
          margin-right: 30px;
        }
        .fitur-penjelasan img{
          width: 100%;
          padding: 10px;
        }
        .fitur-fitur{
          min-heigth: 75vh;
          text-align: center;
        }
        #fitur-artikel img{
          width: 70%;
        }
        #fitur-relawan img{
          width: 70%;
        }

      /* Landing Page */
      .landing-page{
        min-height: 65vh;
      }
      .landing-main{
        display: grid;
        grid-template-columns: 2.5fr 2fr;
        padding: auto 15px;
      }
      .btn-start{
        background: #1C4966;
        color: white;
        padding: 15px;
      }
      .landing-left{
        margin: 10px;
       margin-top: 60px;
      }
      .landing-left h1{
        font-size: 40px;
      }
      .image-landing img{
        margin-top: 15px;
        min-width: 40%;
      }

      @media screen and (max-width: 820px) {
        .landing-page{
          min-height: 15vh;
        }
        .landing-main{
          display: grid;
          grid-template-columns: 2fr;
        }
        .landing-left{
          margin-top: 10px;
          text-align:center;
        }
        .landing-left h1{
          font-size: 30px;
        }
        .btn-fitur{
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 35px;
        }
        #fitur-artikel img{
          width: 100%;
        }
        #fitur-relawan img{
          width: 100%;
        }
      }
      @media screen and (max-width: 540px) {
        .fitur-penjelasan{
          display: grid;
          grid-template-columns: 2.5fr;
          
        .btn-fitur{
          display: grid;
          grid-template-columns: 1fr;
          gap: 30px;
        }
        .landing-left h1{
          font-size: 20px;
        }
        .fitur-fitur h1{
          font-size: 20px
        }
      }

      </style>

      <section class="landing-page">
        <div class="landing-main">
          <div class="landing-left">
          <h1>PEDULI BENCANA</h1>
          <p>Peduli Bencana merupakan website yang memberikan informasi dan layanan yang berkaitan dengan bencana yang terjadi di Indonesia</p>
          <a href="#home" class="btn btn-add p-2">Get Started</a>
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
            <a href="#fitur-mitigasi" class="btn-fitur-main">
            <img src="./img/solutions.png" class="card-img-top" alt="Gambar Berita">
            Mitigasi</a>
          </div>
          <div class="fitur">
            <a href="#fitur-artikel" class="btn-fitur-main">
            <img src="./img/copywriting.png" class="card-img-top" alt="Gambar Berita">
            Artikel</a>
          </div>
          <div class="fitur">
            <a href="#fitur-donasi" class="btn-fitur-main">
            <img src="./img/donate.png" class="card-img-top" alt="Gambar Berita">
            Donasi</a>
          </div>
          <div class="fitur">
            <a href="#fitur-relawan" class="btn-fitur-main">
            <img src="./img/volunteer.png" class="card-img-top" alt="Gambar Berita">
            Relawan</a>
          </div>
        </div>
      </section>

      <!-- Section Fitur -->
      <section tabindex="0" id="fitur-mitigasi" class="fitur-fitur" min-heigth: 75vh;>
      <h1>Apa itu fitur Mitigasi?</h1>
      <hr class="mb-4">
        <div class="fitur-penjelasan">
          <p>Fitur mitigasi berfungsi untuk memberikan informasi mengenai upaya yang dapat dilakukan untuk mengurangi risiko dan dampak yang diakibatkan oleh bencana yang terjadi. 
          </p>
        <img src="./img/mitigasi.svg">
        </div>
      </section>

    <section id="fitur-artikel" class="fitur-fitur" min-height: 75vh;>
        <h1>Apa itu fitur Artikel?</h1>
        <hr class="mb-4">
        <div class="fitur-penjelasan">
        <img src="./img/artikel.svg"> 
          <p>Fitur artikel berfungsi untuk memberikan informasi terkini tentang bencana yang terjadi dan user bisa membuat artikel mengenai bencana yang terjadi.
          </p>
        </div>
      </section>

      <section id="fitur-donasi" class="fitur-fitur" min-height: 75vh;>
        <h1>Apa itu fitur Donasi?</h1>
        <hr class="mb-4">
        <div class="fitur-penjelasan">
          <p>Fitur donasi berfungsi untuk menyediakan informasi seputar donasi yang memudahkan para donatur untuk memberikan bantuannya.
          </p>
          <img src="./img/donation.svg"> 
        </div>
      </section>

     <section id="fitur-relawan" class="fitur-fitur" min-height: 75vh;>
      <h1>Apa itu fitur Relawan?</h1>
      <hr class="mb-4">
        <div class="fitur-penjelasan">
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
