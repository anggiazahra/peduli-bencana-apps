import DataPostinganRelawan from '../../web-server/request-postingan-relawan';

const RelawanTambah = {
  async render() {
    return `
    <div class="relawan-daftar" id="main-content">
        <h1>Tambah Data Pendaftaran Relawan</h1>
        <div class="card">
            <div class="card-body">
                <form enctype="multipart/form-data">
                    <table class="table table-borderless">
                        <tr>
                            <th>Judul Postingan</th>
                            <td>:</td>
                            <td><input type="text" class="form-control" id="judul-postingan" placeholder="Judul Postingan"></td>
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
                            <th>Tanggal Mulai</th>
                            <td>:</td>
                            <td><input type="date" class="form-control" id="tanggal-mulai" placeholder="Tanggal Mulai"></td>
                        </tr>
                        <tr>
                            <th>Tanggal Berakhir</th>
                            <td>:</td>
                            <td><input type="date" class="form-control" id="tanggal-berakhir" placeholder="Tanggal Berakhir"></td>
                        </tr>
                        <tr>
                            <th>Kota/Kabupaten</th>
                            <td>:</td>
                            <td><input type="text" class="form-control" id="kab-kota"placeholder="Kota/Kabupaten"></td>
                        </tr>
                        <tr>
                            <th>Provinsi</th>
                            <td>:</td>
                            <td><input type="text" class="form-control" id="provinsi" placeholder="Provinsi"></td>
                        </tr>
                        <tr>
                            <th>Alamat Lengkap</th>
                            <td>:</td>
                            <td><input type="text" class="form-control" id="alamat-lengkap" placeholder="Alamat Lengkap"></td>
                        </tr>
                        <tr>
                            <th>Jumlah relawan yang dibutuhkan</th>
                            <td>:</td>
                            <td><input type="text" class="form-control" id="jumlah-relawan" placeholder="Jumlah relawan (dalam angka)"></td>
                        </tr>
                        <tr>
                            <th>Kontak</th>
                            <td>:</td>
                            <td><input type="text" class="form-control" id="kontak" placeholder="Kontak"></td>
                        </tr>
                        <tr>
                            <th>Persyaratan</th>
                            <td>:</td>
                            <td><textarea class="form-control" id="persyaratan" rows="4" placeholder="Persyaratan"></textarea></td>
                        </tr>
                        <tr>
                            <td colspan="3">
                                <button class="btn" id="button-submit">Tambah Data</button>
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

    const id = Math.floor((Math.random() * 999999999999999) + 1);

    buttonSubmit.addEventListener('click', async (event) => {
      const file = inputPoster.files[0];
      event.preventDefault();
      if (inputJudulPostingan.value === '' || inputPoster.value === '' || inputTanggalMulai.value === '' || inputTanggalBerakhir.value === '' || inputKabKota.value === '' || inputProvinsi.value === '' || inputAlamatLengkap.value === '' || inputJumlahRelawan === '' || inputKontak.value === '' || inputPersyaratan.value === '') {
        alert('Input tidak boleh kosong');
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

        await DataPostinganRelawan.addPostinganRelawan(formdata);
      }
    });
  },
};

export default RelawanTambah;
