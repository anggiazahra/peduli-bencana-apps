class DataLogin {
  static async checkLogin(formdata) {
    const response = await fetch('http://localhost:5000/login', {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
    })
      .then((response) => response.text())
      .then(async (result) => {
        const data = JSON.parse(result);
        if (data.status === 'error') {
          swal('Login Gagal', data.message, 'error');
        }
        if (data.status === 'success') {
          swal('Login Berhasil', data.message, 'success');
          const login = await swal({
            title: 'Login Berhasil',
            text: data.message,
            icon: 'success',
          });

          if (login) {
            sessionStorage.setItem('loginSession', 'true');
            sessionStorage.setItem('username', data.data.username);
            sessionStorage.setItem('hakAkses', data.data.hakAkses);
            window.location.replace('#/home');
            window.location.reload();
          }
        }
      })
      .catch((error) => console.log('error', error));

    return response;
  }
}

export default DataLogin;
