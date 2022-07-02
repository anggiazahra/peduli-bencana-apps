import DataPostinganDonasi from '../../web-server/request-postingan-donasi';

const DonasiPostinganTambah = {
  async render() {
    return `
      <style>
        .donasi-tambah {
          padding-bottom: 50px;
        }
        .hero-img {
          width: 100%;
          height: 400px;
          object-fit: cover;
          object-position: center;
        }
        .grid-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap : 20px;
        }
        .btn-max {
          width: 100%;
        }
        h1 {
          font-size: 24px;
          text-align: center;
          margin: 20px 0 40px 0;
        }
        h2 {
          font-size : 18px;
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
        @media screen and (max-width: 910px) {
          .hero-img {
            height: 350px;
          }
        }
        @media screen and (max-width: 540px) {
          .hero-img {
            height: 300px;
          }
          .grid-row {
            grid-template-columns: 1fr;
            gap: 0;
          }
          h1 {
            font-size: 20px !important;
            margin: 0 0 20px 0;
          }
          h2 {
            font-size: 14px;
          }
        }
        @media screen and (max-width: 480px) {
          .hero-img {
            height: 200px;
          }
        }
      </style>

      <div class="donasi-tambah">
        <picture>
          <source media="(max-width: 600px)" type="image/jpeg" srcset="./heros/tambah-postingan-donasi-small.jpg" class="hero-img" tabindex="0">
          <img data-src="./heros/tambah-postingan-donasi-large.jpg" class="lazyload hero-img" alt="Hero image tambah postingan donasi" tabindex="0">
        </picture>
        <form enctype="multipart/form-data">
          <div class="grid-row">
            <div class="card">
              <div class="card-body">
                <h2 tabindex="0">Judul Postingan</h2>
                <div class="mb-3">
                  <input type="text" class="form-control" id="judul-postingan" placeholder="Judul Postingan">
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <h2 tabindex="0">Gambar/Poster</h2>
                <div class="mb-3">
                  <input type="file" class="form-control" id="poster" placeholder="Gambar/Poster">
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h2 tabindex="0">Periode Donasi</h2>
              <div class="grid-row">
                <div class="box-1">
                  <div class="mb-3">
                    <label class="form-label" tabindex="0">Tanggal Mulai</label>
                    <input type="date" class="form-control" id="tanggal-mulai">
                  </div>
                </div>
                <div class="box-2">
                  <div class="mb-3">
                    <label class="form-label" tabindex="0">Tanggal Berakhir</label>
                    <input type="date" class="form-control" id="tanggal-berakhir">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h2 tabindex="0">Lokasi Bencana</h2>
              <div class="grid-row">
                <div class="box-1">
                  <div class="mb-3">
                    <label class="form-label" tabindex="0">Kabupaten/Kota</label>
                    <input type="text" class="form-control" id="kab-kota" placeholder="Kabupaten/Kota">
                  </div>
                  <div class="mb-3">
                    <label class="form-label" tabindex="0">Provinsi</label>
                    <input type="text" class="form-control" id="provinsi" placeholder="Provinsi">
                  </div>
                </div>
                <div class="box-2">
                  <div class="mb-3">
                    <label class="form-label" tabindex="0">Alamat Lengkap</label>
                    <textarea class="form-control" id="alamat-lengkap" rows="5" placeholder="Alamat Lengkap"></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h2 tabindex="0">Identitas Penanggung Jawab</h2>
              <div class="grid-row">
                <div class="box-1">
                  <div class="mb-3">
                      <label class="form-label" tabindex="0">Nama Penanggung Jawab</label>
                      <input type="text" class="form-control" id="penanggung-jawab" placeholder="Nama Penanggung Jawab">
                  </div>
                  <div class="mb-3">
                    <label class="form-label" tabindex="0">No Telepon</label>
                    <input type="text" class="form-control" id="no-telepon" placeholder="No Telepon">
                  </div>
                </div>
                <div class="box-2">
                  <div class="mb-3">
                    <label class="form-label" tabindex="0">Pekerjaan</label>
                    <input type="text" class="form-control" id="pekerjaan" placeholder="Pekerjaan">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h2 tabindex="0">Pembayaran</h2>
              <div class="grid-row">
                <div class="box-1">
                  <div class="mb-3">
                    <label class="form-label" tabindex="0">Nama Bank</label>
                    <input type="text" class="form-control" id="nama-bank" placeholder="Nama Bank">
                  </div>
                  <div class="mb-3">
                    <label class="form-label" tabindex="0">No Rekening</label>
                    <input type="text" class="form-control" id="no-rekening" placeholder="No Rekening">
                  </div>
                </div>
                <div class="box-2">
                  <div class="mb-3">
                    <label class="form-label" tabindex="0">Atas Nama</label>
                    <input type="text" class="form-control" id="atas-nama" placeholder="No Rekening">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h2 tabindex="0">Target Donasi</h2>
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
              <h2 tabindex="0">Deskripsi Donasi</h2>
              <div class="mb-3">
                <textarea class="form-control" id="deskripsi-donasi" rows="4" placeholder="Deskripsi Donasi"></textarea>
              </div>
            </div>
          </div>
          <button class="btn btn-max" id="button-submit">Tambah Data</button>
        </form>
      </div>
    `;
  },

  async afterRender() {
    const loginSession = sessionStorage.getItem('loginSession');

    if (loginSession === 'false') {
      swal('Akses Ditolak', 'Maaf anda tidak bisa mengakses halaman ini sebelum melakukan login', 'error');
      window.location.replace('#/login');
    }

    const buttonSubmit = document.querySelector('#button-submit');
    const inputJudulPostingan = document.querySelector('#judul-postingan');
    const inputPoster = document.querySelector('#poster');
    const inputTanggalMulai = document.querySelector('#tanggal-mulai');
    const inputTanggalBerakhir = document.querySelector('#tanggal-berakhir');
    const inputKabKota = document.querySelector('#kab-kota');
    const inputProvinsi = document.querySelector('#provinsi');
    const inputAlamatLengkap = document.querySelector('#alamat-lengkap');
    const inputPenanggungJawab = document.querySelector('#penanggung-jawab');
    const inputNoTelepon = document.querySelector('#no-telepon');
    const inputPekerjaan = document.querySelector('#pekerjaan');
    const inputNamaBank = document.querySelector('#nama-bank');
    const inputNoRekening = document.querySelector('#no-rekening');
    const inputAtasNama = document.querySelector('#atas-nama');
    const inputTargetDonasi = document.querySelector('#target-donasi');
    const inputDeskripsiDonasi = document.querySelector('#deskripsi-donasi');
    const sessionUsername = sessionStorage.getItem('username');

    const id = Math.floor((Math.random() * 999999999999999) + 1);

    buttonSubmit.addEventListener('click', async (event) => {
      const file = inputPoster.files[0];
      event.preventDefault();
      if (inputJudulPostingan.value === '' || inputPoster.value === '' || inputTanggalMulai.value === '' || inputTanggalBerakhir.value === '' || inputKabKota.value === '' || inputProvinsi.value === '' || inputAlamatLengkap.value === '' || inputPenanggungJawab === '' || inputNoTelepon.value === '' || inputPekerjaan.value === '' || inputNamaBank.value === '' || inputNoRekening.value === '' || inputAtasNama.value === '' || inputTargetDonasi.value === '' || inputDeskripsiDonasi.value === '') {
        swal('Error', 'Tidak boleh ada inputan yang kosong', 'error');
      } else {
        const tambahPostingan = await swal({
          title: 'Tambah Donasi',
          text: 'Apakah anda ingin menambahkan donasi?',
          icon: 'info',
          buttons: true,
        });

        if (tambahPostingan) {
          const nameFile = `${id}_${inputPoster.files[0].name}`;

          const formdata = new FormData();
          formdata.append('usernamePembuat', sessionUsername);
          formdata.append('judulPostingan', inputJudulPostingan.value);
          formdata.append('poster', file, nameFile);
          formdata.append('tanggalMulai', inputTanggalMulai.value);
          formdata.append('tanggalBerakhir', inputTanggalBerakhir.value);
          formdata.append('kabKota', inputKabKota.value);
          formdata.append('provinsi', inputProvinsi.value);
          formdata.append('alamatLengkap', inputAlamatLengkap.value);
          formdata.append('penanggungJawab', inputPenanggungJawab.value);
          formdata.append('noTelepon', inputNoTelepon.value);
          formdata.append('pekerjaan', inputPekerjaan.value);
          formdata.append('namaBank', inputNamaBank.value);
          formdata.append('noRekening', inputNoRekening.value);
          formdata.append('atasNama', inputAtasNama.value);
          formdata.append('targetDonasi', inputTargetDonasi.value);
          formdata.append('deskripsiDonasi', inputDeskripsiDonasi.value);

          await DataPostinganDonasi.addPostinganDonasi(formdata);
        }
      }
    });
  },
};

export default DonasiPostinganTambah;
