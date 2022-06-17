const Logout = {
  async render() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('hakAkses');
    sessionStorage.setItem('loginSession', 'false');
    window.location.replace('#/login');
    window.location.reload();
  },
};

export default Logout;
