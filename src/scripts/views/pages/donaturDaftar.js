/* eslint-disable no-unused-vars */
const DonaturDaftar = {
  async render() {
    return `
    <main class="container">
      <div class="donatur-daftar" id="main-content">
        <h1>Pendaftaran Donatur</h1>
        <div class="card">
          <div class="card-body">
            <form action="">
              <table class="table table-borderless">
                <tr>
                  <th>Donasi</th>
                  <td>:</td>
                  <td>
                    <input type="text" class="form-control" placeholder="Rp" />
                  </td>
                </tr>
                <tr>
                  <th>Nama Lengkap</th>
                  <td>:</td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Nama Lengkap"
                    />
                  </td>
                </tr>
                <tr>
                  <th>No Telepon</th>
                  <td>:</td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="No Telepon"
                    />
                  </td>
                </tr>
                <tr>
                  <th>Kota/Kabupaten</th>
                  <td>:</td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Kota/Kabupaten"
                    />
                  </td>
                </tr>
                <tr>
                  <th>Provinsi</th>
                  <td>:</td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Provinsi"
                    />
                  </td>
                </tr>
                <tr>
                  <td colspan="3">
                    <div class="input-group mb-3">
                      <div class="input-group-text">
                        <input
                          class="form-check-input mt-0"
                          type="checkbox"
                          value=""
                          aria-label="Checkbox for following text input"
                        />
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Sudah memenuhi seluruh persyaratan"
                        disabled
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="3">
                  <a href="#/donatur-detail" class="btn btn-primary">Lanjut Pembayaran</a>
                  </td>
                </tr>
              </table>
            </form>
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

export default DonaturDaftar;
