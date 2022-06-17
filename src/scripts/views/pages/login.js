import DataLogin from '../../web-server/request-login';

const Login = {
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
          margin: 30px auto;
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
            <h1>Login</h1>
            <div class="mb-3">
              <label class="form-label">Username</label>
              <input type="text" class="form-control" id="username" placeholder="Username">
            </div>
            <div class="mb-3">
              <label class="form-label">Password</label>
              <input type="password" class="form-control" id="password" placeholder="Passsword" autocomplete="on">
            </div>
            <div>
              <button class="btn btn-max" type="submit" id="button-submit">Login</button>
              <div class="text-center">Belum punya akun? Registrasi sekarang juga!</div>
              <a class="btn btn-max" href="#/registrasi" id="button-login">Registrasi</a>
            </div>
          </form>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const buttonSubmit = document.querySelector('#button-submit');
    const inputUsername = document.querySelector('#username');
    const inputPassword = document.querySelector('#password');

    buttonSubmit.addEventListener('click', async (event) => {
      event.preventDefault();
      if (inputUsername.value === '' || inputPassword.value === '') {
        alert('Input tidak boleh kosong');
      } else {
        const formdata = new FormData();
        formdata.append('username', inputUsername.value);
        formdata.append('password', inputPassword.value);

        const result = await DataLogin.checkLogin(formdata);
        sessionStorage.setItem('username', result.data.username);
        sessionStorage.setItem('hakAkses', result.data.hakAkses);
        sessionStorage.setItem('loginSession', 'true');
        window.location.reload();
      }
    });
  },
};

export default Login;
