import DataPostinganRelawan from '../../web-server/request-postingan-relawan';
import DataPendaftaranRelawan from '../../web-server/request-pendaftaran-relawan';

const RelawanRiwayat = {
  async render() {
    return `
      <style>
        .relawan-riwayat {
          padding: 30px 0 50px 0;
        }
        .hero-img {
          width: 100%;
          height: 400px;
          object-fit: cover;
          object-position: center;
        }
        .relawan-riwayat h1 {
          font-size: 24px !important;
          text-align: center;
        }
        .relawan-riwayat h2 {
          font-size: 18px !important;
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
        .btn-color {
          background-color: #0353A0;
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
        .sub-title {
          font-size: 20px;
        }
        @media screen and (max-width: 910px) {
          .hero-img {
            height: 350px;
          }
        }
        @media screen and (max-width: 850px) {
          .grid-row {
            grid-template-columns: 1fr;
            gap: 0;
          }
          .sub-title {
            font-size: 16px;
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
            font-size: 14px !important;
          }
          .sub-title {
            font-size: 14px;
          }
        }
        @media screen and (max-width: 540px) {
          .hero-img {
            height: 300px;
          }
        }
        @media screen and (max-width: 480px) {
          .hero-img {
            height: 200px;
          }
        }
      </style>

      <div class="relawan-riwayat">
        <div class="grid-btn btn-border">
          <button class="btn btn-max sub-title" id="btn-postingan">Postingan Relawan</button>
          <button class="btn btn-max sub-title" id="btn-relawan">Relawan</button>
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

    // Data postingan relawan berdasarkan id
    const dataPostinganRelawanById = async (idPostinganRelawan) => {
      const result = await DataPostinganRelawan.getAllPostinganRelawan();
      const dataPostingan = result.data.relawan;
      const listPostingan = dataPostingan.filter((item) => item.id.toLowerCase()
      === idPostinganRelawan.toLowerCase());
      return listPostingan;
    };

    // Data postingan relawan berdasarkan session username
    const dataPostinganRelawanByUsername = async () => {
      const result = await DataPostinganRelawan.getAllPostinganRelawan();
      const dataPostingan = result.data.relawan;
      const listPostingan = dataPostingan.filter((item) => item.usernamePembuat
      === sessionUsername);
      return listPostingan;
    };

    // Data pendaftaran berdasarkan session username
    const dataRelawanByUsername = async () => {
      const resultTambahDonasi = await DataPendaftaranRelawan.getAllPendaftaranRelawan();
      const listTambahDonasi = resultTambahDonasi.data.relawan;
      const listRelawan = listTambahDonasi.filter((item) => item.username
      === sessionUsername);
      return listRelawan;
    };

    const riwayatPostingan = async () => {
      detailRiwayat.innerHTML = '';
      detailRiwayat.innerHTML = `
        <picture>
          <source media="(max-width: 600px)" type="image/jpeg" srcset="./heros/riwayat-postingan-relawan-small.jpg" class="hero-img" tabindex="0">
          <img data-src="./heros/riwayat-postingan-relawan-large.jpg" class="lazyload hero-img" alt="Hero image riwayat postingan relawan" tabindex="0">
        </picture>
      `;

      const listPostinganRelawan = document.createElement('div');
      listPostinganRelawan.setAttribute('class', 'grid-row');
      detailRiwayat.appendChild(listPostinganRelawan);

      const postinganRelawanByUsername = await dataPostinganRelawanByUsername();
      if (postinganRelawanByUsername.length > 0) {
        postinganRelawanByUsername.forEach(async (data) => {
          const itemPostinganRelawan = document.createElement('div');
          itemPostinganRelawan.classList.add('card');
          itemPostinganRelawan.innerHTML = `
            <div class="card-body">
              <h2 tabindex="0">${data.judulPostingan}</h2>
              <div tabindex="0">Periode relawan : ${data.tanggalMulai} - ${data.tanggalBerakhir}</div>
              <div tabindex="0">Lokasi bencana :</div>
              <div tabindex="0">${data.alamatLengkap}, ${data.kabKota} - ${data.provinsi}</div>
              <div class="d-flex flex-row-reverse mt-4">
                <a href="#/relawan-detail/${data.id}" class="btn btn-color p-2 ms-2">Detail</a>
                <button type="button" class="btn btn-color p-2 ms-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop${data.id}" id="btn-list-relawan-${data.id}">Lihat Relawan</button>
                <a href="#/relawan-edit/${data.id}" class="btn btn-color p-2 ms-2">Edit</a>
                <button class="btn btn-color p-2 ms-2" id="btn-hapus-${data.id}">Hapus</button>
              </div>
            </div>
            
            <!-- Modal -->
            <div class="modal fade" id="staticBackdrop${data.id}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-scrollable">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel" tabindex="0">Daftar Relawan</h5>
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
          buttonHapus.addEventListener('click', async () => {
            const hapusPostingan = await swal({
              title: 'Hapus Data',
              text: 'Apakah anda ingin menghapus postingan donasi ini?',
              icon: 'warning',
              buttons: true,
            });

            if (hapusPostingan) {
              await DataPostinganRelawan.deletePostinganRelawanById(data.id);
            }
          });

          // Memfilter data relawan
          const postinganRelawanFilterById = await dataPostinganRelawanById(data.id);

          const listRelawan = document.querySelector(`#list-relawan-${data.id}`);
          const jumlahRelawan = postinganRelawanFilterById.length;

          if (postinganRelawanFilterById.length > 0) {
            const listPendaftaranRelawan = () => {
              postinganRelawanFilterById.forEach((data) => {
                listRelawan.innerHTML = '';
                listRelawan.innerHTML = `
                  <div class="confirm-title" tabindex="0">Jumlah relawan yang mendaftar : ${jumlahRelawan}</div>
                `;

                const itemRelawan = document.createElement('div');
                itemRelawan.classList.add('card');
                itemRelawan.innerHTML = `
                <div class="card-body item-relawan-grid">
                  <img data-src="./img-profile.png" class="lazyload img-profile" alt="Icon profile">
                  <div>
                    <div tabindex="0"><span class="text-bold">${data.namaLengkap}</span></div>
                    <div tabindex="0">No telepon : ${data.noTelepon}</div>
                    <div tabindex="0">Domisili : ${data.kabKota}, ${data.provinsi}</div>
                    <div tabindex="0">Tanggal daftar : ${data.tanggalDaftar}</div>
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
              <div class="confirm-title" tabindex="0">Jumlah relawan yang mendaftar : ${jumlahRelawan}</div>
            `;

            const message = document.createElement('div');
            message.innerHTML = '<div class="message">Belum ada relawan yang mendaftar</div>';
            listRelawan.appendChild(message);
          }
        });
      } else if (postinganRelawanByUsername.length < 1) {
        const message = document.createElement('div');
        message.innerHTML = '<div class="message" tabindex="0">Anda belum pernah membuat postingan relawan</div>';
        detailRiwayat.appendChild(message);
      }
    };
    riwayatPostingan();

    const riwayatRelawan = async () => {
      detailRiwayat.innerHTML = '';
      detailRiwayat.innerHTML = '<img data-src="./riwayat-kegiatan-relawan.png" class="lazyload hero-img" alt="Gambar riwayat kegiatan relawan" tabindex="0">';

      const listRelawan = document.createElement('div');
      listRelawan.setAttribute('class', 'grid-row');
      detailRiwayat.appendChild(listRelawan);

      const listRelawanByUsername = await dataRelawanByUsername();
      if (listRelawanByUsername.length > 0) {
        listRelawanByUsername.forEach(async (data) => {
          // Filter data postingan relawan
          const dataPostinganById = await dataPostinganRelawanById(data.idPostinganRelawan);
          const postinganRelawan = dataPostinganById[0];

          if (dataPostinganById.length > 0) {
            const itemRelawan = document.createElement('div');
            itemRelawan.classList.add('card');
            itemRelawan.innerHTML = `
              <div class="card-body item-relawan-grid">
                <img data-src="./img-profile.png" class="lazyload img-profile" alt="Icon profile"></img>
                <div>
                  <div tabindex="0">Menjadi relawan pada kegiatan :</div>
                  <div class="text-bold" tabindex="0">${postinganRelawan.judulPostingan}</div>
                  <div tabindex="0">Atas nama ${data.namaLengkap}</div>
                  <div tabindex="0">Tanggal daftar : ${data.tanggalDaftar}</div>
                  <div class="d-flex flex-row-reverse">
                    <a class="btn btn-color p-2 mt-2" href="#/relawan-detail/${postinganRelawan.id}">Detail Kegiatan</a>
                  </div>
                </div>
              </div>
            `;
            listRelawan.appendChild(itemRelawan);
          }
        });
      } else if (listRelawanByUsername.length < 1) {
        const message = document.createElement('div');
        message.innerHTML = '<div class="message" tabindex="0">Anda belum pernah mengikuti kegiatan relawan</div>';
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
