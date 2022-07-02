import DataRegistrasi from '../../web-server/request-registrasi';

const Registrasi = {
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
        .btn {
          margin: 15px 0;
        }
        h1 {
          font-size : 23px;
          text-align: center;
          margin-bottom: 20px;
        }
        .card {
          width: 50%;
          margin: 40px auto;
        }
        input {
          height: 44px;
        }
        .input-group-text{
          height: 44px;
        }
        @media screen and (max-width: 850px) {
          .card {
            width: 70%;
          }
        }
        @media screen and (max-width: 600px) {
          .card {
            width: 90%;
          }
        }
        @media screen and (max-width: 540px) {
          .grid-row {
            grid-template-columns: 1fr;
            gap: 0;
          }
        }
      </style>
      <div class="card">
        <div class="card-body">
          <form enctype="multipart/form-data">
            <h1 tabindex="0">Registrasi</h1>
            <div class="grid-row">
              <div class="box-1">
                <div class="mb-3">
                  <label class="form-label" tabindex="0">Nama Depan</label>
                  <input type="text" class="form-control" id="nama-depan" placeholder="Nama Depan">
                </div>
              </div>
              <div class="box-2">
                <div class="mb-3">
                  <label class="form-label" tabindex="0">Nama Belakang</label>
                  <input type="text" class="form-control" id="nama-belakang" placeholder="Nama Belakang">
                </div>
              </div>
            </div>
            <div class="mb-3">
              <label class="form-label" tabindex="0">Username</label>
              <input type="text" class="form-control" id="username" placeholder="Username">
            </div>
            <div class="grid-row">
              <div class="box-1">
                <div class="mb-3">
                  <label class="form-label" tabindex="0">Password</label>
                  <input type="password" class="form-control" id="password" placeholder="Password" autocomplete="on">
                </div>
              </div>
              <div class="box-2">
                <div class="mb-3">
                  <label class="form-label" tabindex="0">Konfirmasi Password</label>
                  <input type="password" class="form-control" id="password-konfirmasi" placeholder="Konfirmasi Password" autocomplete="on">
                </div>
              </div>
            </div>
            <div>
              <button class="btn btn-max" type="submit" id="button-submit">Registrasi</button>
              <div class="text-center" tabindex="0">Sudah punya akun? Login sekarang juga!</div>
              <a class="btn btn-max" href="#/login" id="button-login">Login</a>
            </div>
          </form>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const buttonSubmit = document.querySelector('#button-submit');
    const inputNamaDepan = document.querySelector('#nama-depan');
    const inputNamaBelakang = document.querySelector('#nama-belakang');
    const inputUsername = document.querySelector('#username');
    const inputPassword = document.querySelector('#password');
    const inputPasswordKonfirmasi = document.querySelector('#password-konfirmasi');

    buttonSubmit.addEventListener('click', async (event) => {
      event.preventDefault();
      if (inputNamaDepan.value === '' || inputNamaBelakang.value === '' || inputUsername.value === '' || inputPassword.value === '' || inputPasswordKonfirmasi.value === '') {
        swal('Input Kosong', 'Tidak boleh ada inputan yang kosong', 'error');
      } else if (inputPassword.value !== inputPasswordKonfirmasi.value) {
        swal('Password Tidak Sama', 'Password dan password konfirmasi tidak sama, silahkan masukkan password yang sama', 'error');
      } else {
        const formdata = new FormData();
        formdata.append('namaDepan', inputNamaDepan.value);
        formdata.append('namaBelakang', inputNamaBelakang.value);
        formdata.append('username', inputUsername.value);
        formdata.append('password', inputPassword.value);
        formdata.append('passwordKonfirmasi', inputPasswordKonfirmasi.value);

        await DataRegistrasi.addRegistrasi(formdata);
      }
    });
  },
};

export default Registrasi;
