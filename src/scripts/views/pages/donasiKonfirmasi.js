import DataPostinganDonasi from '../../web-server/request-postingan-donasi';
import DataTambahDonasi from '../../web-server/request-tambah-donasi';
import UrlParser from '../../routes/url-parser';

const DonasiKonfirmasi = {
  async render() {
    return `
      <style>
        .hero-img {
          width: 100%;
          height: auto;
          object-fit: cover;
          object-position: center;
        }
        .donasi-konfirmasi {
          min-height: 300px;
        }
        .grid-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .item-grid {
          display: grid;
          grid-template-columns: 1fr 6fr;
          gap: 15px;
        }
        .img-profile {
          width: 50px;
          border-radius: 50%;
          margin: 0 auto;
        }
        .bukti-pembayaran {
          max-height: 300px;
          width: auto;
          margin: 10px 0;
        }
        .card {
          margin: 20px 0;
        }
        h2 {
          font-size: 22px;
          text-align: center;
        }
        .message {
          text-align: center;
          margin: 30px 0;
        }
        .img-page-not-found {
          width: 100%;
          height: auto;
          object-fit: cover;
          object-position: center;
        }
        @media screen and (max-width: 600px) {
          .hero-img {
            height: 200px;
          }
          .grid-row {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          h2 {
            font-size: 16px;
          }
          .bukti-pembayaran {
            max-width: 210px;
          }
          .img-page-not-found {
            height: 300px;
          }
        }
        @media screen and (max-width: 400px) {
          .hero-img {
            height: 180px;
          }
        }
      </style>
      <div id="donasi-konfirmasi" class="donasi-konfirmasi">
        <picture>
          <source media="(max-width: 600px)" type="image/jpeg" srcset="./heros/konfirmasi-donasi2-small.jpg" class="hero-img" tabindex="0">
          <img data-src="./heros/konfirmasi-donasi2-large.jpg" class="lazyload hero-img" alt="Hero image konfirmasi donasi" tabindex="0">
        </picture>
        <div class="grid-row">
          <div id="belum-dikonfirmasi">
            <h2 tabindex="0">Belum Dikonfirmasi</h2>
          </div>
          <div id="sudah-dikonfirmasi">
            <h2 tabindex="0">Sudah Dikonfirmasi</h2>
          </div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const idPostinganDonasi = url.id;

    // Cek Id Postingan
    const cekIdPostingan = async (idPostinganDonasi) => {
      const result = await DataPostinganDonasi.getPostinganDonasiById(idPostinganDonasi);
      return result;
    };
    const cekId = await cekIdPostingan(idPostinganDonasi);

    if (cekId.status === 'error') {
      const donasiKonfirmasi = document.querySelector('#donasi-konfirmasi');
      donasiKonfirmasi.classList.remove('grid-row');
      donasiKonfirmasi.innerHTML = '';
      donasiKonfirmasi.innerHTML = '<img data-src="./halaman-tidak-ditemukan.png" class="lazyload img-page-not-found" alt="Gambar halaman tidak ditemukan" tabindex="0">';
    }

    if (cekId.status === 'success') {
    // Data postingan donasi berdasarkan id
      const dataTambahDonasi = async (idPostinganDonasi) => {
        const result = await DataTambahDonasi.getAllTambahDonasi();
        const dataDonasi = result.data.donasi;
        const listDonasi = dataDonasi.filter((item) => item.idPostinganDonasi.toLowerCase()
        === idPostinganDonasi.toLowerCase());
        return listDonasi;
      };

      // Data tambah donasi yang sudah dikonfirmasi
      const donasiSudahDikonfirmasi = async (idPostinganDonasi) => {
        const result = await dataTambahDonasi(idPostinganDonasi);
        const donasiConfirmed = result.filter((item) => item.status === 'Sudah Dikonfirmasi');
        return donasiConfirmed;
      };

      // Data tambah donasi yang belum dikonfirmasi
      const donasiBelumDikonfirmasi = async (idPostinganDonasi) => {
        const result = await dataTambahDonasi(idPostinganDonasi);
        const donasiUnconfirmed = result.filter((item) => item.status === 'Belum Dikonfirmasi');
        return donasiUnconfirmed;
      };

      const formatToCurrency = (amount) => `Rp ${amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;

      const konfirmasiDonasi = async (idTambahDonasi, idPostinganDonasi) => {
        await DataTambahDonasi.putTambahDonasi(idTambahDonasi, idPostinganDonasi);
        tampilBelumDikonfirmasi();
        tampilSudahDikonfirmasi();
      };

      const tampilBelumDikonfirmasi = async () => {
        const dataBelumDikonfirmasi = await donasiBelumDikonfirmasi(idPostinganDonasi);
        const listBelumDikonfirmasi = document.querySelector('#belum-dikonfirmasi');
        listBelumDikonfirmasi.innerHTML = '';
        listBelumDikonfirmasi.innerHTML = '<h2 tabindex="0">Belum Dikonfirmasi</h2>';

        if (dataBelumDikonfirmasi.length > 0) {
          dataBelumDikonfirmasi.forEach((data) => {
            const itemList = document.createElement('div');
            itemList.classList.add('card');
            itemList.innerHTML = `
              <div class="card-body item-grid">
                <img data-src="./img-profile.png" class="lazyload img-profile" alt="Icon profile">
                <div>
                  <div tabindex="0">${data.tanggalDonasi}</div>
                  <div tabindex="0">Atas nama <span class="text-bold">${data.atasNama}</span></div>
                  <div tabindex="0">${data.namaBank} - ${data.noRekening}</div>
                  <div tabindex="0">Berdonasi sebesar ${formatToCurrency(parseInt(data.jumlahDonasi))}</div>
                  <div tabindex="0">Status <span class="text-danger">${data.status}</span></div>
                  <div tabindex="0">Bukti pembayaran:</div>
                  <img class="bukti-pembayaran" src="./upload/bukti-pembayaran/${data.buktiPembayaran}" alt="Bukti pembayaran" tabindex="0">
                  <div class="d-flex flex-row-reverse">
                    <button class="btn mt-2 p-2" id="btn-konfirmasi-${data.id}">Konfirmasi</button>
                  </div>
                </div>
              </div>
            `;
            listBelumDikonfirmasi.appendChild(itemList);

            const buttonKonfirmasi = document.querySelector(`#btn-konfirmasi-${data.id}`);
            buttonKonfirmasi.addEventListener('click', async () => {
              const tambahDonasi = await swal({
                title: 'Konfirmasi',
                text: 'Apakah anda ingin melakukan konfirmasi donasi yang masuk?',
                icon: 'warning',
                buttons: true,
              });

              if (tambahDonasi) {
                konfirmasiDonasi(data.id, data.idPostinganDonasi);
              }
            });
          });
        } else if (dataBelumDikonfirmasi.length < 1) {
          listBelumDikonfirmasi.innerHTML = `
            <h2 tabindex="0">Belum Dikonfirmasi</h2>
            <div class="message" tabindex="0">Semua donasi telah dikonfirmasi</div>
          `;
        }
      };
      tampilBelumDikonfirmasi();

      const tampilSudahDikonfirmasi = async () => {
        const dataSudahDikonfirmasi = await donasiSudahDikonfirmasi(idPostinganDonasi);
        const listSudahDikonfirmasi = document.querySelector('#sudah-dikonfirmasi');
        listSudahDikonfirmasi.innerHTML = '';
        listSudahDikonfirmasi.innerHTML = '<h2 tabindex="0">Sudah Dikonfirmasi</h2>';
        if (dataSudahDikonfirmasi.length > 0) {
          dataSudahDikonfirmasi.forEach((data) => {
            const itemList = document.createElement('div');
            itemList.classList.add('card');
            itemList.innerHTML = `
              <div class="card-body item-grid">
                <img data-src="./img-profile.png" class="lazyload img-profile" alt="Icon profile">
                <div>
                  <div tabindex="0">${data.tanggalDonasi}</div>
                  <div tabindex="0">Atas nama <span class="text-bold">${data.atasNama}</span></div>
                  <div tabindex="0">${data.namaBank} - ${data.noRekening}</div>
                  <div tabindex="0">Berdonasi sebesar ${formatToCurrency(parseInt(data.jumlahDonasi))}</div>
                  <div tabindex="0">Status <span class="text-danger">${data.status}</span></div>
                  <div class="d-flex flex-row-reverse">
                    <button class="btn mt-2 p-2" id="btn-batal-konfirmasi-${data.id}">Batal Konfirmasi</button>
                  </div>
                </div>
              </div>
            `;
            listSudahDikonfirmasi.appendChild(itemList);

            const buttonBatalKonfirmasi = document.querySelector(`#btn-batal-konfirmasi-${data.id}`);
            buttonBatalKonfirmasi.addEventListener('click', async () => {
              const tambahDonasi = await swal({
                title: 'Batal Konfirmasi',
                text: 'Apakah anda ingin membatalkan konfirmasi donasi yang masuk?',
                icon: 'warning',
                buttons: true,
              });

              if (tambahDonasi) {
                konfirmasiDonasi(data.id, data.idPostinganDonasi);
              }
            });
          });
        } else if (dataSudahDikonfirmasi.length < 1) {
          listSudahDikonfirmasi.innerHTML = `
            <h2 tabindex="0">Sudah Dikonfirmasi</h2>
            <div class="message" tabindex="0">Belum ada donasi yang dikonfirmasi</div>
          `;
        }
      };
      tampilSudahDikonfirmasi();

      const listDonasi = await dataTambahDonasi(idPostinganDonasi);
      if (listDonasi.length < 1) {
        const listBelumDikonfirmasi = document.querySelector('#belum-dikonfirmasi');
        listBelumDikonfirmasi.innerHTML = '';
        listBelumDikonfirmasi.innerHTML = `
          <h2 tabindex="0">Belum Dikonfirmasi</h2>
          <div class="message" tabindex="0">Belum ada donasi yang masuk</div>
        `;

        const listSudahDikonfirmasi = document.querySelector('#sudah-dikonfirmasi');
        listSudahDikonfirmasi.innerHTML = '';
        listSudahDikonfirmasi.innerHTML = `
          <h2 tabindex="0">Sudah Dikonfirmasi</h2>
          <div class="message" tabindex="0">Belum ada donasi yang masuk</div>
        `;
      }
    }
  },
};

export default DonasiKonfirmasi;
