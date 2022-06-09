import DataPostinganDonasi from '../../web-server/request-postingan-donasi';
import UrlParser from '../../routes/url-parser';

const DonasiPostinganEdit = {
  async render() {
    return `
      <style>
        .grid-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap : 20px;
        }
        .btn-max {
          width: 100%;
        }
        h2 {
          font-size : 20px;
        }
        .card {
          margin-bottom: 15px;
        }
        input {
          height: 44px;
        }
        .input-group-text{
          height: 44px;
        }
        @media screen and (max-width: 540px) {
          .grid-row {
            grid-template-columns: 1fr;
            gap: 0;
          }
        }
      </style>

      <div class="donasi-tambah" id="main-content">
        <h1>Edit Data Postingan Donasi</h1>
        <form enctype="multipart/form-data">
          <div class="card">
            <div class="card-body">
              <h2>Judul Postingan</h2>
              <div class="mb-3">
                <input type="text" class="form-control" id="judul-postingan">
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h2>Gambar/Poster</h2>
              <div class="mb-3">
                <input type="file" class="form-control" id="poster">
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h2>Periode Donasi</h2>
              <div class="grid-row">
                <div class="box-1">
                  <div class="mb-3">
                    <label class="form-label">Tanggal Mulai</label>
                    <input type="date" class="form-control" id="tanggal-mulai" date-format="mm/dd/yyyy">
                  </div>
                </div>
                <div class="box-2">
                  <div class="mb-3">
                    <label class="form-label">Tanggal Berakhir</label>
                    <input type="date" class="form-control" id="tanggal-berakhir" date-format="mm/dd/yyyy">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <div class="grid-row">
                <div class="box-1">
                  <div class="mb-3">
                    <label class="form-label">Kabupaten/Kota</label>
                    <input type="text" class="form-control" id="kab-kota">
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Provinsi</label>
                    <input type="text" class="form-control" id="provinsi">
                  </div>
                </div>
                <div class="box-2">
                  <div class="mb-3">
                    <label class="form-label">Alamat Lengkap</label>
                    <textarea class="form-control" id="alamat-lengkap" rows="5"></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h2>Identitas Penanggung Jawab</h2>
              <div class="grid-row">
                <div class="box-1">
                  <div class="mb-3">
                      <label class="form-label">Nama Penanggung Jawab</label>
                      <input type="text" class="form-control" id="penanggung-jawab">
                  </div>
                  <div class="mb-3">
                    <label class="form-label">No Telepon</label>
                    <input type="text" class="form-control" id="no-telepon">
                  </div>
                </div>
                <div class="box-2">
                  <div class="mb-3">
                    <label class="form-label">Pekerjaan</label>
                    <input type="text" class="form-control" id="pekerjaan">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h2>Pembayaran</h2>
              <div class="grid-row">
                <div class="box-1">
                  <div class="mb-3">
                    <label class="form-label">Nama Bank</label>
                    <input type="text" class="form-control" id="nama-bank">
                  </div>
                  <div class="mb-3">
                    <label class="form-label">No Rekening</label>
                    <input type="text" class="form-control" id="no-rekening">
                  </div>
                </div>
                <div class="box-2">
                  <div class="mb-3">
                    <label class="form-label">Atas Nama</label>
                    <input type="text" class="form-control" id="atas-nama">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h2>Target Donasi</h2>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="inputGroup-sizing-default">Rp</span>
                </div>
                <input type="number" class="form-control" id="target-donasi">
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h2>Deskripsi Donasi</h2>
              <div class="mb-3">
                <textarea class="form-control" id="deskripsi-donasi" rows="4"></textarea>
              </div>
            </div>
          </div>
          <button class="btn btn-max" id="button-submit">Edit Data</button>
        </form>
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const idPostinganDonasi = url.id;

    const buttonSubmit = document.querySelector('#button-submit');
    const inputJudulPostingan = document.querySelector('#judul-postingan');
    const inputPoster = document.querySelector('#poster');
    const inputTanggalMulai = document.querySelector('#tanggal-mulai');
    const inputTanggalBerakhir = document.querySelector('#tanggal-berakhir');
    const inputKabKota = document.querySelector('#kab-kota');
    const inputProvinsi = document.querySelector('#provinsi');
    const inputAlamatLengkap = document.querySelector('#alamat-lengkap');
    const inputPenanggungJawab = document.querySelector('#penanggung-jawab');
    const inputNoTelepon = document.querySelector('#no-telepon');
    const inputPekerjaan = document.querySelector('#pekerjaan');
    const inputNamaBank = document.querySelector('#nama-bank');
    const inputNoRekening = document.querySelector('#no-rekening');
    const inputAtasNama = document.querySelector('#atas-nama');
    const inputTargetDonasi = document.querySelector('#target-donasi');
    const inputDeskripsiDonasi = document.querySelector('#deskripsi-donasi');

    const result = await DataPostinganDonasi.getPostinganDonasiById(idPostinganDonasi);
    const data = result.data.donasi[0];

    inputJudulPostingan.setAttribute('value', data.judulPostingan);
    inputTanggalMulai.setAttribute('value', data.tanggalMulai);
    inputTanggalBerakhir.setAttribute('value', data.tanggalBerakhir);
    inputKabKota.setAttribute('value', data.kabKota);
    inputProvinsi.setAttribute('value', data.provinsi);
    inputAlamatLengkap.innerHTML = data.alamatLengkap;
    inputPenanggungJawab.setAttribute('value', data.penanggungJawab);
    inputNoTelepon.setAttribute('value', data.noTelepon);
    inputPekerjaan.setAttribute('value', data.pekerjaan);
    inputNamaBank.setAttribute('value', data.namaBank);
    inputNoRekening.setAttribute('value', data.noRekening);
    inputAtasNama.setAttribute('value', data.atasNama);
    inputTargetDonasi.setAttribute('value', data.targetDonasi);
    inputDeskripsiDonasi.innerHTML = data.deskripsiDonasi;

    const id = Math.floor((Math.random() * 999999999999999) + 1);

    buttonSubmit.addEventListener('click', async (event) => {
      const file = inputPoster.files[0];
      event.preventDefault();

      if (inputJudulPostingan.value === '' || inputTanggalMulai.value === '' || inputTanggalBerakhir.value === '' || inputKabKota.value === '' || inputProvinsi.value === '' || inputAlamatLengkap.value === '' || inputPenanggungJawab.value === '' || inputNoTelepon.value === '' || inputPekerjaan.value === '' || inputNamaBank.value === '' || inputNoRekening.value === '' || inputAtasNama.value === '' || inputTargetDonasi.value === '' || inputDeskripsiDonasi.value === '') {
        alert('Input tidak boleh kosong');
      } else if (file === undefined) {
        const formdata = new FormData();

        formdata.append('judulPostingan', inputJudulPostingan.value);
        formdata.append('tanggalMulai', inputTanggalMulai.value);
        formdata.append('tanggalBerakhir', inputTanggalBerakhir.value);
        formdata.append('kabKota', inputKabKota.value);
        formdata.append('provinsi', inputProvinsi.value);
        formdata.append('alamatLengkap', inputAlamatLengkap.value);
        formdata.append('penanggungJawab', inputPenanggungJawab.value);
        formdata.append('noTelepon', inputNoTelepon.value);
        formdata.append('pekerjaan', inputPekerjaan.value);
        formdata.append('namaBank', inputNamaBank.value);
        formdata.append('noRekening', inputNoRekening.value);
        formdata.append('atasNama', inputAtasNama.value);
        formdata.append('targetDonasi', inputTargetDonasi.value);
        formdata.append('deskripsiDonasi', inputDeskripsiDonasi.value);

        await DataPostinganDonasi
          .editPostinganDonasiWithoutPosterById(formdata, idPostinganDonasi);
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
        formdata.append('penanggungJawab', inputPenanggungJawab.value);
        formdata.append('noTelepon', inputNoTelepon.value);
        formdata.append('pekerjaan', inputPekerjaan.value);
        formdata.append('namaBank', inputNamaBank.value);
        formdata.append('noRekening', inputNoRekening.value);
        formdata.append('atasNama', inputAtasNama.value);
        formdata.append('targetDonasi', inputTargetDonasi.value);
        formdata.append('deskripsiDonasi', inputDeskripsiDonasi.value);

        await DataPostinganDonasi
          .editPostinganDonasiWithPosterById(formdata, idPostinganDonasi);
      }
    });
  },
};

export default DonasiPostinganEdit;
