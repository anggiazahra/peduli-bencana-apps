import DataPostinganArtikel from '../../web-server/request-postingan-artikel';

const ArtikelTambah = {
  async render() {
    return `
        <style>
            .hero-img {
                width: 100%;
                height: 400px;
                object-fit: cover;
                object-position: center;
            }
            .grid-row {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap : 20px;
            }
            .btn-max {
                width: 100%;
            }
            h1 {
                font-size: 24px;
                text-align: center;
                margin: 20px 0 40px 0;
            }
            h2 {
                font-size : 18px;
            }
            .card {
                margin-bottom: 50px;
            }
            input {
                height: 44px;
            }
            .input-group-text{
                height: 44px;
            }
            @media screen and (max-width: 910px) {
                .hero-img {
                    height: 350px;
                }
            }
            @media screen and (max-width: 540px) {
                .hero-img {
                    height: 300px;
                }
                .grid-row {
                    grid-template-columns: 1fr;
                    gap: 0;
                }
                h1 {
                    font-size: 20px !important;
                    margin: 0 0 20px 0;
                }
                h2 {
                    font-size: 14px;
                }
            }
            @media screen and (max-width: 480px) {
                .hero-img {
                    height: 200px;
                }
            }
        </style>

        <div class="artikel-tambah">
            <img data-src="./tambah-postingan-artikel.png" class="lazyload hero-img" alt="Tambah postingan artikel">
            <div class="card">
                <div class="card-body">
                <form enctype="multipart/form-data">
                    <div class="mb-3">
                        <label for="judul" class="form-label">Judul Artikel</label>
                        <input type="email" class="form-control" id="judul">
                    </div>
                    <div class="mb-3">
                        <label for="judul" class="form-label">Sumber Artikel</label>
                        <input type="email" class="form-control" id="sumber">
                    </div>
                    <div class="mb-3">
                        <label for="formFileMultiple" class="form-label">Gambar Artikel</label>
                        <input class="form-control" type="file" id="gambarArtikel" multiple>
                    </div>
                    <div class="mb-3">
                        <label for="isiArtikel" class="form-label">Isi Artikel</label>
                        <textarea class="form-control" id="isiArtikel" rows="8"></textarea>
                    </div>
                    <td colspan="3">
                        <button class="btn btn-max" id="button-submit">Tambah Data</button>
                    </td>
                </form>
            </div>
        </div>
    `;
  },

  async afterRender() {
    const loginSession = sessionStorage.getItem('loginSession');

    if (loginSession === 'false') {
      swal('Akses Ditolak', 'Maaf anda tidak bisa mengakses halaman ini sebelum melakukan login', 'error');
      window.location.replace('#/login');
    }

    const buttonSubmit = document.querySelector('#button-submit');
    const inputJudulPostingan = document.querySelector('#judul');
    const inputgambar = document.querySelector('#gambarArtikel');
    const inputSumber = document.querySelector('#sumber');
    const inputIsiArtikel = document.querySelector('#isiArtikel');

    const id = Math.floor((Math.random() * 999999999999999) + 1);

    buttonSubmit.addEventListener('click', async (event) => {
      const file = inputgambar.files[0];
      event.preventDefault();
      if (inputJudulPostingan.value === '' || inputgambar.value === '' || inputSumber.value === '' || inputIsiArtikel.value === '') {
        swal('Error', 'Tidak boleh ada inputan yang kosong', 'error');
      } else {
        const tambahPostingan = await swal({
          title: 'Tambah Artikel',
          text: 'Apakah anda ingin menambahkan postingan artikel?',
          icon: 'info',
          buttons: true,
        });

        if (tambahPostingan) {
          const nameFile = `${id}_${inputgambar.files[0].name}`;

          const formdata = new FormData();
          formdata.append('judul', inputJudulPostingan.value);
          formdata.append('gambarArtikel', file, nameFile);
          formdata.append('sumber', inputSumber.value);
          formdata.append('isiArtikel', inputIsiArtikel.value);

          await DataPostinganArtikel.addPostinganArtikel(formdata);
        }
      }
    });
  },
};

export default ArtikelTambah;
