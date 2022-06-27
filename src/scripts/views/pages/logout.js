const Logout = {
  async render() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('hakAkses');
    sessionStorage.setItem('loginSession', 'false');
    const logout = await swal({
      title: 'Berhasil Logout',
      text: 'Berhasil keluar dari aplikasi',
      icon: 'success',
    });

    if (logout) {
      window.location.replace('#/login');
      window.location.reload();
    }
  },
};

export default Logout;
