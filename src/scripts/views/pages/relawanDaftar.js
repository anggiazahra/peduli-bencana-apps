import DataPendaftaranRelawan from '../../web-server/request-pendaftaran-relawan';
import UrlParser from '../../routes/url-parser';

const RelawanDaftar = {
  async render() {
    return `
      <style>
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
        @media screen and (max-width: 540px) {
          .grid-row {
            grid-template-columns: 1fr;
            gap: 0;
          }
          h2 {
            font-size: 17px;
          }
        }
      </style>
      <div class="relawan-daftar" id="main-content">
        <h1>Pendaftaran Relawan</h1>
        <form enctype="multipart/form-data">
          <div class="card">
            <div class="card-body">
              <h2>Data Diri</h2>
              <div class="grid-row">
                <div class="box-1">
                  <div class="mb-3">
                    <input type="text" class="form-control" id="nama-lengkap" placeholder="Nama Lengkap">
                  </div>
                </div>
                <div class="box-2">
                  <div class="mb-3">
                    <input type="text" class="form-control" id="no-telepon" placeholder="No Telepon">
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
                    <input type="text" class="form-control" id="kab-kota" placeholder="Kabupaten/Kota">
                  </div>
                </div>
                <div class="box-2">
                  <div class="mb-3">
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
        alert('Inputan tidak boleh kosong');
      } else if (inputCheckbox.checked === false) {
        alert('Pastikan sudah memenuhi persyaratan dan centang box checkbox');
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
  },
};

export default RelawanDaftar;
