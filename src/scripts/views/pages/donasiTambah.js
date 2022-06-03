const DonasiTambah = {
  async render() {
    return `
    <main class="container">
      <div class="donasi-tambah" id="main-content">
        <h1>Tambah Data Pendaftaran Donasi</h1>
        <div class="card">
          <div class="card-body">
            <form method="GET" action="proses-tambah-donasi.js">
              <table class="table table-borderless">
                <tr>
                  <th>Judul Postingan</th>
                  <td>:</td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      id="judul-postingan"
                      placeholder="Judul Postingan"
                    />
                  </td>
                </tr>
                <tr>
                  <th>Poster</th>
                  <td>:</td>
                  <td>
                    <div class="input-group">
                      <input type="file" class="form-control" id="poster" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>Tanggal Mulai</th>
                  <td>:</td>
                  <td>
                    <input
                      type="date"
                      class="form-control"
                      id="tanggal-mulai"
                      placeholder="Tanggal Mulai"
                    />
                  </td>
                </tr>
                <tr>
                  <th>Tanggal Berakhir</th>
                  <td>:</td>
                  <td>
                    <input
                      type="date"
                      class="form-control"
                      id="tanggal-berakhir"
                      placeholder="Tanggal Berakhir"
                    />
                  </td>
                </tr>
                <tr>
                  <th>Kota/Kabupaten</th>
                  <td>:</td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      id="kota-kabupaten"
                      placeholder="Kota/Kabupaten"
                    />
                  </td>
                </tr>
                <tr>
                  <th>Provinsi</th>
                  <td>:</td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      id="provinsi"
                      placeholder="Provinsi"
                    />
                  </td>
                </tr>
                <tr>
                  <th>Alamat Lengkap</th>
                  <td>:</td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      id="alamat-lengkap"
                      placeholder="Alamat Lengkap"
                    />
                  </td>
                </tr>
                <tr>
                  <th>Kontak</th>
                  <td>:</td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      id="kontak"
                      placeholder="Kontak"
                    />
                  </td>
                </tr>
                <tr>
                  <th>Keterangan Donasi</th>
                  <td>:</td>
                  <td>
                    <textarea
                      class="form-control"
                      id="keterangan-donasi"
                      rows="4"
                      placeholder="Keterangan Doasi"
                    ></textarea>
                  </td>
                </tr>
                <tr>
                  <td colspan="3">
                    <button class="btn" id="submit">Tambah Data</button>
                  </td>
                </tr>
              </table>
            </form>
          </div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    // const restaurant = await DataRestaurant.listRestaurants();
    // const restaurantList = document.querySelector('restaurant-list');
    // restaurantList.classList.add('grid-row');
    // restaurantList.restaurant = restaurant;
  },
};

export default DonasiTambah;
