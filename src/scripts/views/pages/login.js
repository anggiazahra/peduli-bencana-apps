const Login = {
  async render() {
    return `
      <h1>LOGIN</h1>
      <div class="card">
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"
              >Email address</label
            >
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"
              >Password</label
            >
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
        </form>
        <button class="btn" type="button">Masuk</button>
        <a href="register.js">Belum punya akun? Daftar Akun</a>
      </div>
      `;
  },

  async afterRender() {
    // const restaurant = await DataRestaurant.listRestaurants();
    // const restaurantList = document.querySelector('restaurant-list');
    // restaurantList.classList.add('grid-row');
    // restaurantList.restaurant = restaurant;
  },
};

export default Login;
