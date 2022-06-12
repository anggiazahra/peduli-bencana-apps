const Register = {
  async render() {
    return `
      <h1>REGISTRASI</h1>
      <div class="card">
       <form>
           <div class="mb-3">
               <label for="formGroupExampleInput" class="form-label">Nama Depan</label>
               <input type="text" class="form-control" id="formGroupExampleInput" placeholder="First name">
           </div>
           <div class="mb-3">
               <label for="formGroupExampleInput2" class="form-label">Nama Belakang</label>
               <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Last name">
           </div>
           <div class="mb-3">
             <label for="exampleInputEmail1" class="form-label">Email</label>
             <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
             <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
           </div>
           <div class="mb-3">
             <label for="exampleInputPassword1" class="form-label">Password</label>
             <input type="password" class="form-control" id="exampleInputPassword1">
           </div>
           <div class="mb-3">
               <label for="exampleInputPassword1" class="form-label">Konfirmasi Password</label>
               <input type="password" class="form-control" id="exampleInputPassword1">
           </div>
           <a href="login.js">Kembali</a>
           <button class="btn" type="button">Daftar</button>
         </form>
        `;
  },

  async afterRender() {
    // const restaurant = await DataRestaurant.listRestaurants();
    // const restaurantList = document.querySelector('restaurant-list');
    // restaurantList.classList.add('grid-row');
    // restaurantList.restaurant = restaurant;
  },
};

export default Register;
