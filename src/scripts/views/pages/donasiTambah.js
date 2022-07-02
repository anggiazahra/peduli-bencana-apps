import DataPostinganDonasi from '../../web-server/request-postingan-donasi';
import DataTambahDonasi from '../../web-server/request-tambah-donasi';
import UrlParser from '../../routes/url-parser';

const DonasiTambah = {
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
      .img-page-not-found {
        width: 100%;
        height: auto;
        object-fit: cover;
        object-position: center;
      }
      @media screen and (max-width: 910px) {
        .hero-img {
          height: 350px;
        }
      }
      @media screen and (max-width: 600px) {
        .img-page-not-found {
          height: 300px;
        }
      }
      @media screen and (max-width: 540px) {
        .grid-row {
          grid-template-columns: 1fr;
          gap: 0;
        }
        .hero-img {
          height: 300px;
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
      <div class="donasi-tambah" id="donasi-tambah">
        <picture>
          <source media="(max-width: 600px)" type="image/jpeg" srcset="./heros/tambah-donasi-small.jpg" class="hero-img" tabindex="0">
          <img data-src="./heros/tambah-donasi-large.jpg" class="lazyload hero-img" alt="Hero image tambah postingan donasi" tabindex="0">
        </picture>
        <form enctype="multipart/form-data">
          <div class="card">
            <div class="card-body">
              <h2 tabindex="0">Nama Donatur</h2>
              <div class="mb-3">
                <input type="text" class="form-control" id="nama-donatur" placeholder="Diperbolehkan memakai nama samaran">
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h2 tabindex="0">Informasi Transfer Donasi</h2>
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
                    <input type="text" class="form-control" id="atas-nama" placeholder="Atas Nama">
                  </div>
                  <div class="mb-3">
                    <label class="form-label" tabindex="0">Jumlah Donasi</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-default">Rp</span>
                      </div>
                      <input type="number" class="form-control" id="jumlah-donasi" placeholder="Jumlah donasi (dalam angka)">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h2 tabindex="0">Bukti Pembayaran</h2>
              <div class="mb-3">
                <input type="file" class="form-control" id="bukti-pembayaran" placeholder="Bukti Pembayaran">
              </div>
            </div>
          </div>
          <button class="btn btn-max" id="button-submit">Tambah Donasi</button>
        </form>
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const idPostinganDonasi = url.id;
    const loginSession = sessionStorage.getItem('loginSession');

    if (loginSession === 'false') {
      swal('Akses Ditolak', 'Maaf anda tidak bisa mengakses halaman ini sebelum melakukan login', 'error');
      window.location.replace('#/login');
    }

    // Cek Id Postingan
    const cekIdPostingan = async (idPostinganDonasi) => {
      const result = await DataPostinganDonasi.getPostinganDonasiById(idPostinganDonasi);
      return result;
    };
    const cekId = await cekIdPostingan(idPostinganDonasi);

    if (cekId.status === 'error') {
      const donasiTambah = document.querySelector('#donasi-tambah');
      donasiTambah.classList.remove('grid-row');
      donasiTambah.innerHTML = '';
      donasiTambah.innerHTML = '<img data-src="./halaman-tidak-ditemukan.png" class="lazyload  img-page-not-found" alt="Gambar halaman tidak ditemukan" tabindex="0">';
    }

    if (cekId.status === 'success') {
      const buttonSubmit = document.querySelector('#button-submit');
      const inputNamaDonatur = document.querySelector('#nama-donatur');
      const inputNamaBank = document.querySelector('#nama-bank');
      const inputNoRekening = document.querySelector('#no-rekening');
      const inputAtasNama = document.querySelector('#atas-nama');
      const inputJumlahDonasi = document.querySelector('#jumlah-donasi');
      const inputBuktiPembayaran = document.querySelector('#bukti-pembayaran');

      const id = Math.floor((Math.random() * 999999999999999) + 1);

      const sessionUsername = sessionStorage.getItem('username');

      buttonSubmit.addEventListener('click', async (event) => {
        event.preventDefault();
        if (inputNamaDonatur.value === '' || inputNamaBank.value === '' || inputNoRekening.value === '' || inputAtasNama.value === '' || inputJumlahDonasi.value === '' || inputBuktiPembayaran.value === '') {
          swal('Error', 'Tidak boleh ada inputan yang kosong', 'error');
        } else {
          const tambahDonasi = await swal({
            title: 'Tambah Donasi',
            text: 'Apakah anda ingin menambahkan donasi?',
            icon: 'info',
            buttons: true,
          });

          if (tambahDonasi) {
            const file = inputBuktiPembayaran.files[0];
            const nameFile = `${id}_${inputBuktiPembayaran.files[0].name}`;

            const formdata = new FormData();
            formdata.append('idPostinganDonasi', idPostinganDonasi);
            formdata.append('username', sessionUsername);
            formdata.append('namaDonatur', inputNamaDonatur.value);
            formdata.append('namaBank', inputNamaBank.value);
            formdata.append('noRekening', inputNoRekening.value);
            formdata.append('atasNama', inputAtasNama.value);
            formdata.append('jumlahDonasi', inputJumlahDonasi.value);
            formdata.append('buktiPembayaran', file, nameFile);

            await DataTambahDonasi.addTambahDonasi(formdata, idPostinganDonasi);
          }
        }
      });
    }
  },
};

export default DonasiTambah;
