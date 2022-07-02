const LandingPage = {
  async render() {
    return `
      <style>
        .grid-1 {
          display: grid;
          grid-template-columns: 4fr 5fr;
          gap: 20px;
          margin-bottom: 60px;
        }
        img {
          width: 100%;
        }
        .text-1 h1 {
          font-size: 30px;
          margin-top: 100px;
        }

      </style>
      <div class="grid-1">
        <div class="text-1">
          <h1 tabindex="0">Tahukah kamu?</h1>
          <p>Melalui Aplikasi Peduli Bencana ini kamu bisa mengikuti kegitan relawan untuk membantu korban bencana langsung ke tempat terjadinya becana loh! Selain itu kamu bisa berdonasi untuk para korban bencana!</p>
          <p>Belum punya akun?</p>
          <a href="#/registrasi"class="btn">Registrasi Sekarang</a>
        </div>
        <picture>
          <source media="(max-width: 600px)" type="image/jpeg" srcset="./heros/people-think-small.jpg" class="hero-img" tabindex="0">
          <img data-src="./heros/people-think-large.jpg" class="lazyload hero-img" alt="Hero image landing page" tabindex="0">
        </picture>
      </div>
        
    `;
  },

  async afterRender() {
    // test
  },
};

export default LandingPage;
