const DonasiPostinganDetail = {
  async render() {
    return `
    <style>
      .box-1 {
        padding: 0 10px;
        margin: 0 5px;
      }
      .donasi-detail {
        display: grid;
        grid-template-columns: 2fr 3fr;
        margin: 30px 0;
        min-width: 250px;
      }
      .btn {
        margin-bottom: 15px;
      }
      .poster {
        width: 100%;
        margin-bottom: 15px;
        align-items: center;
      }
      .img-profile, .img-location {
        width: 50px;
        border-radius: 50%;
      }
      h2 {
        font-size: 20px;
        margin-bottom: 0;
      }
      .grid-row {
        display: grid;
        grid-template-columns: 1fr 7fr;
        gap : 10px;
      }
      @media screen and (max-width: 900px) {
        .donasi-detail {
            display: grid;
            grid-template-columns: 1fr;
            margin: 50px 0;
        }
        .box-1 {
          margin: 0;
          padding: 0;
        }
      }
      @media screen and (max-width: 540px) {
        #mainContent h1 {
            font-size: 24px;
        }
        .donasi-detail {
          margin: 20px 0;
        }
        .container {
          max-width : 100% !important;
          padding: 0 15px;
        }
      }
      @media screen and (max-width: 350px) {
        #mainContent h1 {
            font-size: 22px;
        }
      }
    </style>
    <div class="donasi-detail">
      <div class="box-1">
          <img src="./picture.png" alt="" class="poster">
          <div class="card mb-3">
            <div class="card-body">
              <span>Penanggung Jawab</span>
              <div class="grid-row mt-3">
                <img src="./img-profile.png" class="img-profile">
                <div>
                  <h2>Rinaldi Setiabudi</h2>
                  Pegawai Swasta - 089767571201
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-3">
            <div class="card-body">
              <span>Lokasi Bencana</span>
              <div class="grid-row mt-3">
                <img src="./img-location.png" class="img-location">
                <div>
                  <h2>Sukabumi, Jawa Barat</h2>
                  Kp. Baruasih RT 05 RW 11 Sukabumi, Jawa Barat
                </div>
              </div>
            </div>
          </div>
      </div>
      <div class="box-2">
        <div class="card">
        <div class="card-body">
          <h1>Donasi Korban Bencana Banjir</h1>
          <table class="table">
            <tr>
              <th>Target Donasi</th>
              <td>:</td>
              <td>Rp 5000000</td>
            </tr>
            <tr>
              <th>Periode Donasi</th>
              <td>:</td>
              <td>25 Mei 2022 - 27 Mei 2022</td>
            </tr>
            <tr>
              <th>No Rekening</th>
              <td>:</td>
              <td>BRI - 4321-9800-7654</td>
            </tr>
            <tr>
              <th>Detail Donasi</th>
              <td>:</td>
            </tr>
            <tr>
              <td colspan="3">
                Donasi ini merupakan donasi yang dibuat untuk menmabtu saudara kita yang sedang terkena musibah banjir di daerah Sukabumi Jawa Barat. Bantuan dari anda semua sangat kami hargai dan akan kami salurkan donasi yang terkumpul berupa kebutuhan pokok untuk keperluan sehari-hari di tempat pengungsian.
              </td>
            </tr>
          </table>
          <a class="btn" href="#/donasi-tambah">Donasi Sekarang Juga</a>
          <a class="btn" href="#/donasi-postingan-edit">Edit Data</a>
        </div>
        </div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    // test
  },
};

export default DonasiPostinganDetail;
