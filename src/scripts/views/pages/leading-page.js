/* eslint-disable no-unused-vars */
const Leadingpage = {
  async render() {
    return `
      <div class="showcase-area">
      <div class="container">
        <div class="left">
          <div class="big-title">
            <h1>Langkah Mudah,</h1>
            <h1>Untuk Membantu Sesama.</h1>
          </div>
          <p class="text">
          Penggalangan dana merupakan kebaikan yang amat mulia, baik untuk korban bencana alam, 
          pembangunan fasilitas umum, maupun orang sakit.
          Hal ini dikarenakan dana yang terkumpul akan digunakan untuk membantu orang lain.
          Mari kita membantu sesama dengan berdonasi!
          </p>
          <div class="cta">
            <a href="#" class="btn">Donation Now</a>
          </div>
        </div>

        <div class="right">
          <img src="./img/person1.png" alt="Person Image" class="person" />
        </div>
      </div>
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

export default Leadingpage;
