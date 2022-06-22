import DataPostinganDonasi from '../../web-server/request-postingan-donasi';
import DataTambahDonasi from '../../web-server/request-tambah-donasi';

const DonasiRiwayat = {
  async render() {
    return `
      <style>
        .donasi-riwayat {
          padding-top: 30px;
        }
        .donasi-riwayat h1 {
          font-size: 24px !important;
          text-align: center;
        }
        .donasi-riwayat h2 {
          font-size: 20px !important;
        }
        .grid-btn {
          display: grid;
          grid-template-columns: auto auto;
          gap: 10px;
        }
        .btn {
          background-color: white;
          color: black;
        }
        .btn-konfirmasi, .btn-color {
          background-color: #1C4966;
          color: white;
        }
        .btn-max {
          width: 100%;
        }
        .btn:hover {
          font-weight: 600;
        }
        .btn-border {
          border-bottom-style: solid;
          border-bottom-width: 1px;
          margin-bottom: 15px;
          border-bottom-color: #959595;
        }
        .title {
          margin: 25px 0 10px 0;
        }
        .btn-detail, .btn-konfirmasi {
          background-color: #1C4966;;
          color: white;
        }
        .card {
          margin: 10px 0;
        }
        .confirm-title {
          font-size: 17px;
          font-weight: 500;
          margin-bottom: 15px;
        }
        .list-donasi {
          min-height: 300px;
        }
        .item-donasi-grid {
          display: grid;
          grid-template-columns: 1fr 6fr;
          gap: 15px;
        }
        .message {
          text-align: center;
        }
        .img-profile {
          width: 50px;
          border-radius: 50%;
          margin: 0 auto;
        }
        .text-bold {
          font-weight: bold;
        }
        .grid-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        @media screen and (max-width: 850px) {
          .grid-row {
            grid-template-columns: 1fr;
            gap: 0;
          }
        }
        @media screen and (max-width: 600px) {
          .container {
            width: 100% !important;
            padding: 0 !important;
          }
          .donasi-riwayat {
            padding-top: 10px;
          }
          .donasi-riwayat h1 {
            font-size: 17px !important;
          }
          .donasi-riwayat h2 {
            font-size: 15px !important;
          }
        }
        </style>

        <div class="donasi-riwayat">
          <div class="grid-btn btn-border">
            <button class="btn btn-max" id="btn-postingan">Postingan Donasi</button>
            <button class="btn btn-max" id="btn-donasiku">Donasiku</button>
          </div>
          <div id="detail-riwayat"></div>
        </div>
    `;
  },

  async afterRender() {
    const buttonPostingan = document.querySelector('#btn-postingan');
    const buttonDonasiku = document.querySelector('#btn-donasiku');
    const detailRiwayat = document.querySelector('#detail-riwayat');

    // Username pengguna saat login
    const sessionUsername = sessionStorage.getItem('username');

    // Data Postingan Donasi
    const resultPostingan = await DataPostinganDonasi.getAllPostinganDonasi();
    const dataPostingan = resultPostingan.data.donasi;

    // Filter data tambah donasi
    const postinganDonasiFilter = dataPostingan.filter((item) => item.usernamePembuat
    === sessionUsername);
    // Data Tambah Donasi
    const resultTambahDonasi = await DataTambahDonasi.getAllTambahDonasi();
    const listTambahDonasi = resultTambahDonasi.data.donasi;

    const formatToCurrency = (amount) => `Rp ${amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;

    const riwayatPostingan = async () => {
      detailRiwayat.innerHTML = '';
      detailRiwayat.innerHTML = '<h1 class="title">Riwayat Postingan Donasi</h1>';

      const listPostinganDonasi = document.createElement('div');
      listPostinganDonasi.setAttribute('class', 'grid-row');
      detailRiwayat.appendChild(listPostinganDonasi);

      if (postinganDonasiFilter.length > 0) {
        postinganDonasiFilter.forEach((data) => {
          const idPost = data.id;
          const itemPostinganDonasi = document.createElement('div');
          itemPostinganDonasi.classList.add('card');
          itemPostinganDonasi.innerHTML = `
            <div class="card-body">
              <h2>${data.judulPostingan}</h2>
              <div>Periode donasi : ${data.tanggalMulai} - ${data.tanggalBerakhir}</div>
              <div>Lokasi bencana :</div>
              <div>${data.alamatLengkap}, ${data.kabKota} - ${data.provinsi}</div>
              <div class="d-flex flex-row-reverse mt-4">
                <a href="#/donasi-postingan-detail/${data.id}" class="btn btn-detail p-2 ms-2">Detail</a>
                <button type="button" class="btn btn-konfirmasi p-2 ms-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop${data.id}" id="btn-konfirmasi-donasi-${idPost}">Konfirmasi Donasi</button>
                <a href="#/donasi-postingan-edit/${data.id}" class="btn btn-color p-2 ms-2">Edit</a>
                <button class="btn btn-color p-2 ms-2" id="btn-hapus-${data.id}">Hapus</button>
              </div>
            </div>
            
            <!-- Modal -->
            <div class="modal fade" id="staticBackdrop${data.id}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-scrollable">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Donasi Masuk</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body" id="modal-body">
                    <div class="grid-btn btn-border">
                      <button class="btn btn-max btn-confirm" id="btn-confirm-${data.id}">Sudah Dikonfirmasi</button>
                      <button class="btn btn-max btn-unconfirm" id="btn-unconfirm-${data.id}">Belum Dikonfirmasi</button>
                    </div>
                    <div id="list-donasi-${data.id}" class="list-donasi"></div>
                  </div>
                </div>
              </div>
            </div>
          `;

          listPostinganDonasi.appendChild(itemPostinganDonasi);

          const buttonHapus = document.querySelector(`#btn-hapus-${data.id}`);
          buttonHapus.addEventListener('click', async (event) => {
            event.preventDefault();
            await DataPostinganDonasi.deletePostinganDonasiById(data.id);
          });

          // Memfilter data donasi
          const postinganDonasiFilterById = listTambahDonasi.filter((item) => item.idPostinganDonasi
          === idPost.toLowerCase());

          // Memfilter donasi yang sudah terkonfirmasi
          const donasiConfirmed = postinganDonasiFilterById.filter((item) => item.status === 'Sudah Dikonfirmasi');

          // Memfilter donasi yang belum terkonfirmasi
          const donasiUnconfirmed = postinganDonasiFilterById.filter((item) => item.status === 'Belum Dikonfirmasi');

          const listDonasi = document.querySelector(`#list-donasi-${data.id}`);
          // HAPUS INI
          console.log(postinganDonasiFilterById);
          if (postinganDonasiFilterById.length > 0) {
          // Tampilan donasi yang sudah dikonfirmasi
            const listDonasiConfirmed = () => {
              listDonasi.innerHTML = '';
              listDonasi.innerHTML = '<div class="confirm-title">Sudah Dikonfirmasi</div>';
              if (donasiConfirmed.length > 0) {
                donasiConfirmed.forEach((data) => {
                  const itemDonasi = document.createElement('div');
                  itemDonasi.classList.add('card');
                  itemDonasi.innerHTML = `
                    <div class="card-body item-donasi-grid">
                      <img src="./img-profile.png" class="img-profile"></img>
                      <div>
                        <div>${data.tanggalDonasi}</div>
                        <div>Atas nama <span class="text-bold">${data.atasNama}</span></div>
                        <div>${data.namaBank} - ${data.noRekening}</div>
                        <div>Berdonasi sebesar ${formatToCurrency(parseInt(data.jumlahDonasi))}</div>
                      </div>
                    </div>
                  `;
                  listDonasi.appendChild(itemDonasi);
                });
              } else {
                listDonasi.innerHTML = '';
                listDonasi.innerHTML = `
                  <div class="confirm-title">Sudah Dikonfirmasi</div>
                  <div class="message">Belum ada donasi yang dikonfirmasi</div>
                `;
              }
            };
            listDonasiConfirmed();

            const listDonasiUnconfirmed = () => {
              listDonasi.innerHTML = '';
              listDonasi.innerHTML = '<div class="confirm-title">Belum Dikonfirmasi</div>';
              if (donasiUnconfirmed.length > 0) {
                donasiUnconfirmed.forEach((data) => {
                  const itemDonasi = document.createElement('div');
                  itemDonasi.classList.add('card');
                  itemDonasi.innerHTML = `
                    <div class="card-body item-donasi-grid">
                      <img src="./img-profile.png" class="img-profile"></img>
                      <div>
                        <div>${data.tanggalDonasi}</div>
                        <div>Atas nama <span class="text-bold">${data.atasNama}</span></div>
                        <div>${data.namaBank} - ${data.noRekening}</div>
                        <div>Berdonasi sebesar ${formatToCurrency(parseInt(data.jumlahDonasi))}</div>
                        <div class="d-flex flex-row-reverse">
                          <button class="btn btn-konfirmasi p-2" id="btn-konfirmasi-${data.id}">Konfirmasi</button>
                        </div>
                      </div>
                    </div>
                  `;
                  listDonasi.appendChild(itemDonasi);

                  const buttonKonfirmasi = document.querySelector(`#btn-konfirmasi-${data.id}`);
                  buttonKonfirmasi.addEventListener('click', async () => {
                    await DataTambahDonasi.putTambahDonasi(data.id);
                  });
                });
              } else {
                listDonasi.innerHTML = '';
                listDonasi.innerHTML = `
                  <div class="confirm-title">Belum Dikonfirmasi</div>
                  <div class="message">Semua donasi masuk sudah dikonfirmasi</div>
                `;
              }
            };

            // Tampilan saat tombol donasi sudah dikonfirmasi ditekan
            const buttonConfirm = document.querySelector(`#btn-confirm-${data.id}`);
            buttonConfirm.addEventListener('click', (event) => {
              event.preventDefault();
              listDonasiConfirmed();
            });

            // Tampilan saat tombol donasi belum dikonfirmasi ditekan
            const buttonUnconfirm = document.querySelector(`#btn-unconfirm-${data.id}`);
            buttonUnconfirm.addEventListener('click', (event) => {
              event.preventDefault();
              listDonasiUnconfirmed();
            });
          } else if (postinganDonasiFilterById.length < 1) {
            const tampilanBelumAdaDonasi = () => {
              listDonasi.innerHTML = '';
              listDonasi.innerHTML = '<div class="confirm-title">Sudah Dikonfirmasi</div>';

              const message = document.createElement('div');
              message.innerHTML = '<div class="message">Belum ada donasi yang masuk</div>';
              listDonasi.appendChild(message);
            };
            tampilanBelumAdaDonasi();

            // Tampilan saat tombol donasi sudah dikonfirmasi ditekan
            const buttonConfirm = document.querySelector(`#btn-confirm-${data.id}`);
            buttonConfirm.addEventListener('click', () => {
              tampilanBelumAdaDonasi();
            });

            // Tampilan saat tombol donasi belum dikonfirmasi ditekan
            const buttonUnconfirm = document.querySelector(`#btn-unconfirm-${data.id}`);
            buttonUnconfirm.addEventListener('click', () => {
              listDonasi.innerHTML = '';
              listDonasi.innerHTML = '<div class="confirm-title">Belum Dikonfirmasi</div>';

              const message = document.createElement('div');
              message.innerHTML = '<div class="message">Belum ada donasi yang masuk</div>';
              listDonasi.appendChild(message);
            });
          }
        });
      } else if (postinganDonasiFilter.length < 1) {
        console.log('acan');
        const message = document.createElement('div');
        message.innerHTML = '<div class="message">Anda belum pernah membuat postingan donasi</div>';
        detailRiwayat.appendChild(message);
      }
    };
    riwayatPostingan();

    const listDonasiFilter = listTambahDonasi.filter((item) => item.username
    === sessionUsername);

    const riwayatDonasi = async () => {
      detailRiwayat.innerHTML = '';
      detailRiwayat.innerHTML = '<h1 class="title">Riwayat Donasi</h1>';

      const listDonasi = document.createElement('div');
      listDonasi.setAttribute('class', 'grid-row');
      detailRiwayat.appendChild(listDonasi);

      if (listDonasiFilter.length > 0) {
        listDonasiFilter.forEach((data) => {
          // Filter data postingan donasi
          const postinganDonasiFilter = dataPostingan.filter((item) => item.id.toLowerCase()
          === data.idPostinganDonasi);
          const postinganDonasi = postinganDonasiFilter[0];

          if (postinganDonasiFilter.length > 0) {
            const itemDonasi = document.createElement('div');
            itemDonasi.classList.add('card');
            itemDonasi.innerHTML = `
              <div class="card-body item-donasi-grid">
                <img src="./img-profile.png" class="img-profile"></img>
                <div>
                  <h2>${postinganDonasi.judulPostingan}</h2>
                  <div>Atas nama <span class="text-bold">${data.atasNama}</span></div>
                  <div>${data.namaBank} - ${data.noRekening}</div>
                  <div>Berdonasi sebesar ${formatToCurrency(parseInt(data.jumlahDonasi))}</div>
                  <div>Status <span class="text-danger">${data.status}<span></div>
                  <div class="d-flex flex-row-reverse">
                    <a class="btn btn-color p-2 mt-2" href="#/donasi-postingan-detail/${data.idPostinganDonasi}">Detail Donasi</a>
                  </div>
                </div>
              </div>
            `;
            listDonasi.appendChild(itemDonasi);
          }
        });
      } else if (listDonasiFilter.length < 1) {
        const message = document.createElement('div');
        message.innerHTML = '<div class="message">Anda belum pernah melakukan donasi</div>';
        detailRiwayat.appendChild(message);
      }
    };

    buttonPostingan.addEventListener('click', async () => {
      riwayatPostingan();
    });
    buttonDonasiku.addEventListener('click', async () => {
      riwayatDonasi();
    });
  },
};

export default DonasiRiwayat;
