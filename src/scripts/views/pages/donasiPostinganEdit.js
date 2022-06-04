const DonasiPostinganEdit = {
  async render() {
    return `
      <style>
        .grid-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap : 20px;
        }
        h2 {
          font-size : 20px;
        }
        .card {
          margin-bottom: 15px;
        }
        input {
          height: 44px;
        }
        .input-group-text{
          height: 44px;
        }
        @media screen and (max-width: 540px) {
          .grid-row {
            grid-template-columns: 1fr;
            gap: 0;
          }
        }
      </style>

      <div class="donasi-tambah" id="main-content">
        <h1>Edit Data Postingan Donasi</h1>
        <form>
          <div class="card">
            <div class="card-body">
              <h2>Identitas Penanggung Jawab</h2>
              <div class="grid-row">
                <div class="box-1">
                  <div class="mb-3">
                      <label class="form-label">Nama Penanggung Jawab</label>
                      <input type="text" class="form-control" id="penanggung-jawab" placeholder="Nama Penanggung Jawab">
                  </div>
                  <div class="mb-3">
                    <label class="form-label">No Telepon</label>
                    <input type="text" class="form-control" id="no-telepon" placeholder="No Telepon">
                  </div>
                </div>
                <div class="box-2">
                  <div class="mb-3">
                    <label class="form-label">Pekerjaan</label>
                    <input type="text" class="form-control" id="pekerjaan" placeholder="Pekerjaan">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h2>Lokasi Terjadinya Bencana</h2>
              <div class="grid-row">
                <div class="box-1">
                  <div class="mb-3">
                    <label class="form-label">Kabupaten/Kota</label>
                    <input type="text" class="form-control" id="kab-kota" placeholder="Kabupaten/Kota">
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Provinsi</label>
                    <input type="text" class="form-control" id="provinsi" placeholder="Provinsi">
                  </div>
                </div>
                <div class="box-2">
                  <div class="mb-3">
                    <label class="form-label">Alamat Lengkap</label>
                    <textarea class="form-control" id="alamat-lengkap" rows="5" placeholder="Alamat Lengkap"></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h2>Gambar/Poster</h2>
              <div class="mb-3">
                <input type="file" class="form-control" id="poster" placeholder="Gambar/Poster">
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h2>Periode Donasi</h2>
              <div class="grid-row">
                <div class="box-1">
                  <div class="mb-3">
                    <label class="form-label">Tanggal Mulai</label>
                    <input type="date" class="form-control" id="tanggal-muali">
                  </div>
                </div>
                <div class="box-2">
                  <div class="mb-3">
                    <label class="form-label">Tanggal Berakhir</label>
                    <input type="date" class="form-control" id="tanggal-berakhir">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h2>Pembayaran</h2>
              <div class="grid-row">
                <div class="box-1">
                  <div class="mb-3">
                    <label class="form-label">Nama Bank</label>
                    <input type="text" class="form-control" id="nama-bank" placeholder="Nama Bank">
                  </div>
                </div>
                <div class="box-2">
                  <div class="mb-3">
                    <label class="form-label">No Rekening</label>
                    <input type="text" class="form-control" id="no-rekening" placeholder="No Rekening">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h2>Target Donasi</h2>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="inputGroup-sizing-default">Rp</span>
                </div>
                <input type="number" class="form-control" id="target-donasi" placeholder="Target Donasi (dalam angka)">
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h2>Deskripsi Donasi</h2>
              <div class="mb-3">
                <textarea class="form-control" id="deskripsi-donasi" rows="4" placeholder="Deskripsi Donasi"></textarea>
              </div>
            </div>
          </div>
          <button class="btn" id="submit">Edit Data</button>
        </form>
      </div>
    `;
  },

  async afterRender() {
    // test
  },
};

export default DonasiPostinganEdit;
