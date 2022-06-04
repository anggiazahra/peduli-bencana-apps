const DonasiTambah = {
  async render() {
    return `
      <div class="donasi-tambah" id="main-content">
      <h1>Donasi Sekarang Juga</h1>
      <div class="card">
        <div class="card-body">
          <form>
            <table class="table table-borderless">
              <tr>
                <th>Nama Lengkap</th>
                <td>:</td>
                <td><input type="text" class="form-control" id="nama-lengkap" placeholder="Nama Lengkap"></td>
              </tr>
              <tr>
                <th>Jumlah Donasi</th>
                <td>:</td>
                <td><input type="number" class="form-control" id="jumlah-donasi" placeholder="Jumlah donasi (dalam angka)"></td>
              </tr>
              <tr>
                <td colspan="3">
                  <button class="btn" id="submit">Donasi Sekarang</button>
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
    // test
  },
};

export default DonasiTambah;
