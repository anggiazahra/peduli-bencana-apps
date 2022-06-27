import DataPostinganRelawan from '../../web-server/request-postingan-relawan';
import DataPendaftaranRelawan from '../../web-server/request-pendaftaran-relawan';

const RelawanRiwayat = {
  async render() {
    return `
      <style>
        .relawan-riwayat {
          padding-top: 30px;
        }
        .relawan-riwayat h1 {
          font-size: 24px !important;
          text-align: center;
        }
        .relawan-riwayat h2 {
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
        .btn-detail {
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
        .list-relawan {
          min-height: 300px;
        }
        .item-relawan-grid {
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
          .relawan-riwayat {
            padding-top: 10px;
          }
          .relawan-riwayat h1 {
            font-size: 17px !important;
          }
          .relawan-riwayat h2 {
            font-size: 15px !important;
          }
        }
      </style>

        <div class="relawan-riwayat">
          <div class="grid-btn btn-border">
            <button class="btn btn-max" id="btn-postingan">Postingan Relawan</button>
            <button class="btn btn-max" id="btn-relawan">Relawan</button>
          </div>
          <div id="detail-riwayat"></div>
        </div>
    `;
  },

  async afterRender() {
    const loginSession = sessionStorage.getItem('loginSession');

    if (loginSession === 'false') {
      swal('Akses Ditolak', 'Maaf anda tidak bisa mengakses halaman ini sebelum melakukan login', 'error');
      window.location.replace('#/login');
    }

    const buttonPostingan = document.querySelector('#btn-postingan');
    const buttonRelawan = document.querySelector('#btn-relawan');
    const detailRiwayat = document.querySelector('#detail-riwayat');

    // Username pengguna saat login
    const sessionUsername = sessionStorage.getItem('username');

    // Data Postingan Relawan
    const resultPostingan = await DataPostinganRelawan.getAllPostinganRelawan();
    const dataPostingan = resultPostingan.data.relawan;

    // Filter data postingan relawan berdasarkan username
    const postinganRelawanFilter = dataPostingan.filter((item) => item.usernamePembuat
    === sessionUsername);

    // Data Pendaftaran Relawan
    const resultPendaftaranRelawan = await DataPendaftaranRelawan.getAllPendaftaranRelawan();
    const listPendaftaranRelawan = resultPendaftaranRelawan.data.relawan;

    const riwayatPostingan = async () => {
      detailRiwayat.innerHTML = '';
      detailRiwayat.innerHTML = '<h1 class="title">Riwayat Postingan Relawan</h1>';

      const listPostinganRelawan = document.createElement('div');
      listPostinganRelawan.setAttribute('class', 'grid-row');
      detailRiwayat.appendChild(listPostinganRelawan);

      if (postinganRelawanFilter.length > 0) {
        postinganRelawanFilter.forEach((data) => {
          const itemPostinganRelawan = document.createElement('div');
          itemPostinganRelawan.classList.add('card');
          itemPostinganRelawan.innerHTML = `
            <div class="card-body">
              <h2>${data.judulPostingan}</h2>
              <div>Periode relawan : ${data.tanggalMulai} - ${data.tanggalBerakhir}</div>
              <div>Lokasi bencana :</div>
              <div>${data.alamatLengkap}, ${data.kabKota} - ${data.provinsi}</div>
              <div class="d-flex flex-row-reverse mt-4">
                <a href="#/relawan-detail/${data.id}" class="btn btn-detail p-2 ms-2">Detail</a>
                <button type="button" class="btn btn-konfirmasi p-2 ms-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop${data.id}" id="btn-list-relawan-${data.id}">Lihat Relawan</button>
                <a href="#/relawan-edit/${data.id}" class="btn btn-color p-2 ms-2">Edit</a>
                <button class="btn btn-color p-2 ms-2" id="btn-hapus-${data.id}">Hapus</button>
              </div>
            </div>
            
            <!-- Modal -->
            <div class="modal fade" id="staticBackdrop${data.id}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-scrollable">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Daftar Relawan</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body" id="modal-body">
                    <div id="list-relawan-${data.id}" class="list-relawan"></div>
                  </div>
                </div>
              </div>
            </div>
          `;

          listPostinganRelawan.appendChild(itemPostinganRelawan);

          const buttonHapus = document.querySelector(`#btn-hapus-${data.id}`);
          buttonHapus.addEventListener('click', async (event) => {
            event.preventDefault();
            await DataPostinganRelawan.deletePostinganRelawanById(data.id);
          });

          // Memfilter data relawan
          const postinganRelawanFilterById = listPendaftaranRelawan
            .filter((item) => item.idPostinganRelawan === data.id.toLowerCase());

          const listRelawan = document.querySelector(`#list-relawan-${data.id}`);
          const jumlahRelawan = postinganRelawanFilterById.length;

          if (postinganRelawanFilterById.length > 0) {
            const listPendaftaranRelawan = () => {
              postinganRelawanFilterById.forEach((data) => {
                listRelawan.innerHTML = '';
                listRelawan.innerHTML = `
                  <div class="confirm-title">Jumlah relawan yang mendaftar : ${jumlahRelawan}</div>
                `;

                const itemRelawan = document.createElement('div');
                itemRelawan.classList.add('card');
                itemRelawan.innerHTML = `
                <div class="card-body item-relawan-grid">
                  <img src="./img-profile.png" class="img-profile"></img>
                  <div>
                    <div><span class="text-bold">${data.namaLengkap}</span></div>
                    <div>No telepon : ${data.noTelepon}</div>
                    <div>Domisili : ${data.kabKota}, ${data.provinsi}</div>
                    <div>Tanggal daftar : ${data.tanggalDaftar}</div>
                  </div>
                </div>
              `;
                listRelawan.appendChild(itemRelawan);
              });
            };
            listPendaftaranRelawan();
          } else if (postinganRelawanFilterById.length < 1) {
            listRelawan.innerHTML = '';
            listRelawan.innerHTML = `
              <div class="confirm-title">Jumlah relawan yang mendaftar : ${jumlahRelawan}</div>
            `;

            const message = document.createElement('div');
            message.innerHTML = '<div class="message">Belum ada relawan yang mendaftar</div>';
            listRelawan.appendChild(message);
          }
        });
      } else if (postinganRelawanFilter.length < 1) {
        const message = document.createElement('div');
        message.innerHTML = '<div class="message">Anda belum pernah membuat postingan relawan</div>';
        detailRiwayat.appendChild(message);
      }
    };
    riwayatPostingan();

    const listRelawanFilter = listPendaftaranRelawan.filter((item) => item.username
    === sessionUsername);

    const riwayatRelawan = async () => {
      detailRiwayat.innerHTML = '';
      detailRiwayat.innerHTML = '<h1 class="title">Riwayat Relawan</h1>';

      const listRelawan = document.createElement('div');
      listRelawan.setAttribute('class', 'grid-row');
      detailRiwayat.appendChild(listRelawan);

      if (listRelawanFilter.length > 0) {
        listRelawanFilter.forEach((data) => {
          // Filter data postingan relawan
          const postinganRelawanFilter = dataPostingan.filter((item) => item.id.toLowerCase()
          === data.idPostinganRelawan.toLowerCase());
          const postinganRelawan = postinganRelawanFilter[0];

          if (postinganRelawanFilter.length > 0) {
            const itemRelawan = document.createElement('div');
            itemRelawan.classList.add('card');
            itemRelawan.innerHTML = `
              <div class="card-body item-relawan-grid">
                <img src="./img-profile.png" class="img-profile"></img>
                <div>
                  <div>Menjadi relawan pada kegiatan :<div>
                  <div class="text-bold">${postinganRelawan.judulPostingan}</div>
                  <div>Atas nama ${data.namaLengkap}</div>
                  <div>Tanggal daftar : ${data.tanggalDaftar}</div>
                  <div class="d-flex flex-row-reverse">
                    <a class="btn btn-color p-2 mt-2" href="#/relawan-detail/${postinganRelawan.id}">Detail Relawan</a>
                  </div>
                </div>
              </div>
            `;
            listRelawan.appendChild(itemRelawan);
          }
        });
      } else if (listRelawanFilter.length < 1) {
        const message = document.createElement('div');
        message.innerHTML = '<div class="message">Anda belum pernah mengikuti kegiatan relawan</div>';
        detailRiwayat.appendChild(message);
      }
    };

    buttonPostingan.addEventListener('click', () => {
      riwayatPostingan();
    });

    buttonRelawan.addEventListener('click', () => {
      riwayatRelawan();
    });
  },
};

export default RelawanRiwayat;
