// eslint-disable-next-line no-unused-vars
const swal = require('sweetalert');

const Home = {
  async render() {
    return `
    <style>
      .grid-row {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap : 15px;
      }
      .grid-row-2 {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap : 15px;
      }
      p {
        font-size: 20px;
        text-align: left;
      }
      img {
        border-radius: 20px;
        width: 100%;
      }
      h1 {
        font-size: 25px;
        text-align: center;
        margin: 30px 0;
      }
      .fitur-title {
        background-color: #C9CEE5;
        padding: 20px;
        line-height: 50%;
      }
      @media screen and (max-width: 700px) {
        .grid-row {
          grid-template-columns: 1fr 1fr;
        }
        img {
          border-radius: 15px;
          width: 100%;
        }
        p {
          font-size: 15px;
          text-align: left;
        }
        .grid-row-2 {
          grid-template-columns: 1fr 2fr;
        }
      }
    </style>
    <div style="height:150px"></div>
    <h1>Fitur yang tersedia</h1>
    <div class="grid-row">
      <div>
        <img src="./img-mitigasi.png">
      </div>
      <div>
        <img src="./img-artikel.png">
      </div>
      <div>
        <img src="./img-donasi.png">
      </div>
      <div>
        <img src="./img-relawan.png">
      </div>
    </div>
    `;
  },

  async afterRender() {
    // test
  },
};

export default Home;
