import DataPostinganRelawan from '../../web-server/request-postingan-relawan';
import UrlParser from '../../routes/url-parser';

const RelawanEdit = {
  async render() {
    return `
      <div class="relawan-edit" id="main-content">
      <h1>Edit Data Postingan Relawan</h1>
        <div class="card">
          <div class="card-body">
            <form>
              <table class="table table-borderless">
                <tr>
                  <th>Judul Postingan</th>
                  <td>:</td>
                  <td><input type="text" class="form-control" id="judul-postingan" placeholder="Judul Postingan" value=""></td>
                </tr>
                <tr>
                  <th>Poster</th>
                  <td>:</td>
                  <td>
                    <div class="input-group">
                      <input type="file" class="form-control" id="poster">
                    </div>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>Kosongkan file jika tidak ingin mengubah gambar poster</td>
                <tr>
                  <th>Tanggal Mulai</th>
                  <td>:</td>
                  <td><input type="date" class="form-control" id="tanggal-mulai" placeholder="Tanggal Mulai" value=""></td>
                </tr>
                <tr>
                  <th>Tanggal Berakhir</th>
                    <td>:</td>
                    <td><input type="date" class="form-control" id="tanggal-berakhir" placeholder="Tanggal Berakhir" value=""></td>
                </tr>
                <tr>
                  <th>Kabupaten/Kota</th>
                  <td>:</td>
                  <td><input type="text" class="form-control" id="kab-kota" placeholder="Kabupaten/Kota" value=""></td>
                </tr>
                <tr>
                  <th>Provinsi</th>
                  <td>:</td>
                  <td><input type="text" class="form-control" id="provinsi" placeholder="Provinsi" value=""></td>
                </tr>
                <tr>
                  <th>Alamat Lengkap</th>
                  <td>:</td>
                  <td><input type="text" class="form-control" id="alamat-lengkap" placeholder="Alamat Lengkap" value=""></td>
                </tr>
                <tr>
                  <th>Jumlah Relawan</th>
                  <td>:</td>
                  <td><input type="text" class="form-control" id="jumlah-relawan" placeholder="Kontak" value=""></td>
                </tr>
                <tr>
                  <th>Kontak</th>
                  <td>:</td>
                  <td><input type="text" class="form-control" id="kontak" placeholder="Kontak" value=""></td>
                </tr>
                <tr>
                  <th>Persyaratan</th>
                  <td>:</td>
                  <td><textarea class="form-control" id="persyaratan" rows="4" placeholder="Persyaratan"></textarea></td>
                </tr>
                <tr>
                  <td colspan="3">
                    <button class="btn" id="button-submit">Edit Data</button>
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
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const idPostinganRelawan = url.id;

    const getPostinganRelawanById = () => {
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        redirect: 'follow',
      };

      fetch(`http://localhost:5000/relawan/postingan/${idPostinganRelawan}`, requestOptions)
        .then((response) => response.text())
        .then((result) => {
          tampilData(JSON.parse(result));
        })
        .catch((error) => console.log('error', error));
    };
    getPostinganRelawanById();

    const tampilData = (result) => {
      const data = result.data.relawan[0];

      const buttonSubmit = document.querySelector('#button-submit');
      const inputJudulPostingan = document.querySelector('#judul-postingan');
      const inputPoster = document.querySelector('#poster');
      const inputTanggalMulai = document.querySelector('#tanggal-mulai');
      const inputTanggalBerakhir = document.querySelector('#tanggal-berakhir');
      const inputKabKota = document.querySelector('#kab-kota');
      const inputProvinsi = document.querySelector('#provinsi');
      const inputAlamatLengkap = document.querySelector('#alamat-lengkap');
      const inputJumlahRelawan = document.querySelector('#jumlah-relawan');
      const inputKontak = document.querySelector('#kontak');
      const inputPersyaratan = document.querySelector('#persyaratan');

      inputJudulPostingan.setAttribute('value', data.judulPostingan);
      inputTanggalMulai.setAttribute('value', data.tanggalMulai);
      inputTanggalBerakhir.setAttribute('value', data.tanggalBerakhir);
      inputKabKota.setAttribute('value', data.kabKota);
      inputProvinsi.setAttribute('value', data.provinsi);
      inputAlamatLengkap.setAttribute('value', data.alamatLengkap);
      inputJumlahRelawan.setAttribute('value', data.jumlahRelawan);
      inputKontak.setAttribute('value', data.kontak);
      inputPersyaratan.innerHTML = data.persyaratan;

      const id = Math.floor((Math.random() * 999999999999999) + 1);

      buttonSubmit.addEventListener('click', async (event) => {
        const file = inputPoster.files[0];
        event.preventDefault();
        if (inputJudulPostingan.value === '' || inputTanggalMulai.value === '' || inputTanggalBerakhir.value === '' || inputKabKota.value === '' || inputProvinsi.value === '' || inputAlamatLengkap.value === '' || inputJumlahRelawan.value === '' || inputKontak.value === '' || inputPersyaratan.value === '') {
          alert('Input tidak boleh kosong');
        } else if (file === undefined) {
          const formdata = new FormData();

          formdata.append('judulPostingan', inputJudulPostingan.value);
          formdata.append('tanggalMulai', inputTanggalMulai.value);
          formdata.append('tanggalBerakhir', inputTanggalBerakhir.value);
          formdata.append('kabKota', inputKabKota.value);
          formdata.append('provinsi', inputProvinsi.value);
          formdata.append('alamatLengkap', inputAlamatLengkap.value);
          formdata.append('jumlahRelawan', inputJumlahRelawan.value);
          formdata.append('kontak', inputKontak.value);
          formdata.append('persyaratan', inputPersyaratan.value);

          await DataPostinganRelawan
            .editPostinganRelawanWithoutPosterById(formdata, idPostinganRelawan);
        } else {
          const nameFile = `${id}_${inputPoster.files[0].name}`;

          const formdata = new FormData();
          formdata.append('judulPostingan', inputJudulPostingan.value);
          formdata.append('poster', file, nameFile);
          formdata.append('tanggalMulai', inputTanggalMulai.value);
          formdata.append('tanggalBerakhir', inputTanggalBerakhir.value);
          formdata.append('kabKota', inputKabKota.value);
          formdata.append('provinsi', inputProvinsi.value);
          formdata.append('alamatLengkap', inputAlamatLengkap.value);
          formdata.append('jumlahRelawan', inputJumlahRelawan.value);
          formdata.append('kontak', inputKontak.value);
          formdata.append('persyaratan', inputPersyaratan.value);

          await DataPostinganRelawan
            .editPostinganRelawanWithPosterById(formdata, idPostinganRelawan);
        }
      });
    };
  },
};

export default RelawanEdit;
