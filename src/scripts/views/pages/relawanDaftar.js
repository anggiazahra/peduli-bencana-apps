import DataPostinganRelawan from '../../web-server/request-postingan-relawan';
import DataPendaftaranRelawan from '../../web-server/request-pendaftaran-relawan';
import UrlParser from '../../routes/url-parser';

const RelawanDaftar = {
  async render() {
    return `
      <style>
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
          h2 {
            font-size: 14px;
          }
          .hero-img {
            height: 300px;
          }
        }
        @media screen and (max-width: 480px) {
          .hero-img {
            height: 200px;
          }
        }
      </style>
      <div class="relawan-daftar" id="relawan-daftar">
        <img src="./daftar-relawan.png" class="hero-img">
        <form enctype="multipart/form-data">
          <div class="card">
            <div class="card-body">
              <h2>Data Diri</h2>
              <div class="grid-row">
                <div class="box-1">
                  <div class="mb-3">
                    <label class="form-label">Nama Lengkap</label>
                    <input type="text" class="form-control" id="nama-lengkap" placeholder="Nama Lengkap">
                  </div>
                </div>
                <div class="box-2">
                  <div class="mb-3">
                    <label class="form-label">No Telepon Whatsapp Aktif</label>
                    <input type="text" class="form-control" id="no-telepon" placeholder="No Telepon Whatsapp Aktif">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h2>Domisili</h2>
              <div class="grid-row">
                <div class="box-1">
                  <div class="mb-3">
                    <label class="form-label">Kabupaten/Kota</label>
                    <input type="text" class="form-control" id="kab-kota" placeholder="Kabupaten/Kota">
                  </div>
                </div>
                <div class="box-2">
                  <div class="mb-3">
                    <label class="form-label">Provinsi</label>
                    <input type="text" class="form-control" id="provinsi" placeholder="Provinsi">
                  </div>
                </div>
              </div>
              <div class="input-group mb-3">
                <div class="input-group-text">
                  <input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" id="checkbox">
                </div>
                <input type="text" class="form-control" placeholder="Sudah memenuhi seluruh persyaratan" disabled>
              </div>
            </div>
          </div>
          <button class="btn btn-max" id="button-submit">Daftar</button>
        </form>
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const idPostinganRelawan = url.id;
    const loginSession = sessionStorage.getItem('loginSession');

    if (loginSession === 'false') {
      swal('Akses Ditolak', 'Maaf anda tidak bisa mengakses halaman ini sebelum melakukan login', 'error');
      window.location.replace('#/login');
    }

    // Cek Id Postingan
    const cekIdPostingan = async (idPostinganRelawan) => {
      const result = await DataPostinganRelawan.getPostinganRelawanById(idPostinganRelawan);
      return result;
    };
    const cekId = await cekIdPostingan(idPostinganRelawan);

    if (cekId.status === 'error') {
      const relawanDaftar = document.querySelector('#relawan-daftar');
      relawanDaftar.innerHTML = '';
      relawanDaftar.innerHTML = '<img src="./halaman-tidak-ditemukan.png" class="img-page-not-found">';
    }

    if (cekId.status === 'success') {
      const buttonSubmit = document.querySelector('#button-submit');
      const inputNamaLengkap = document.querySelector('#nama-lengkap');
      const inputNoTelepon = document.querySelector('#no-telepon');
      const inputKabKota = document.querySelector('#kab-kota');
      const inputProvinsi = document.querySelector('#provinsi');
      const inputCheckbox = document.querySelector('#checkbox');
      const sessionUsername = sessionStorage.getItem('username');

      buttonSubmit.addEventListener('click', async (event) => {
        event.preventDefault();

        if (inputNamaLengkap.value === '' || inputNoTelepon.value === '' || inputKabKota.value === '' || inputProvinsi.value === '') {
          swal('Error', 'Tidak boleh ada inputan yang kosong', 'error');
        } else if (inputCheckbox.checked === false) {
          swal('Error', 'Pastikan sudah memenuhi persyaratan dan centang box checkbox', 'error');
        } else {
          const formdata = new FormData();

          formdata.append('idPostinganRelawan', idPostinganRelawan);
          formdata.append('username', sessionUsername);
          formdata.append('namaLengkap', inputNamaLengkap.value);
          formdata.append('noTelepon', inputNoTelepon.value);
          formdata.append('kabKota', inputKabKota.value);
          formdata.append('provinsi', inputProvinsi.value);

          await DataPendaftaranRelawan.addPendaftaranRelawan(formdata);
        }
      });
    }
  },
};

export default RelawanDaftar;
