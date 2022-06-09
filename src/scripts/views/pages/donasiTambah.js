import DataTambahDonasi from '../../web-server/request-tambah-donasi';
import UrlParser from '../../routes/url-parser';

const DonasiTambah = {
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
        <h1>Donasi Sekarang Juga</h1>
        <form enctype="multipart/form-data">
          <div class="card">
            <div class="card-body">
              <h2>Nama Donatur</h2>
              <div class="mb-3">
                <input type="text" class="form-control" id="nama-donatur" placeholder="Diperbolehkan memakai nama samaran">
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h2>Informasi Transfer Donasi</h2>
              <div class="grid-row">
                <div class="box-1">
                  <div class="mb-3">
                    <label class="form-label">Nama Bank</label>
                    <input type="text" class="form-control" id="nama-bank" placeholder="Nama Bank">
                  </div>
                  <div class="mb-3">
                    <label class="form-label">No Rekening</label>
                    <input type="text" class="form-control" id="no-rekening" placeholder="No Rekening">
                  </div>
                </div>
                <div class="box-2">
                  <div class="mb-3">
                  <label class="form-label">Atas Nama</label>
                  <input type="text" class="form-control" id="atas-nama" placeholder="Atas Nama">
                </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h2>Jumlah Donasi</h2>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="inputGroup-sizing-default">Rp</span>
                </div>
                <input type="number" class="form-control" id="jumlah-donasi" placeholder="Jumlah donasi (dalam angka)">
              </div>
            </div>
          </div>
          <button class="btn btn-max" id="button-submit">Tambah Donasi</button>
        </form>
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const idPostinganDonasi = url.id;

    const buttonSubmit = document.querySelector('#button-submit');
    const inputNamaDonatur = document.querySelector('#nama-donatur');
    const inputNamaBank = document.querySelector('#nama-bank');
    const inputNoRekening = document.querySelector('#no-rekening');
    const inputAtasNama = document.querySelector('#atas-nama');
    const inputJumlahDonasi = document.querySelector('#jumlah-donasi');

    buttonSubmit.addEventListener('click', async (event) => {
      event.preventDefault();
      if (inputNamaDonatur.value === '' || inputNamaBank.value === '' || inputNoRekening.value === '' || inputAtasNama.value === '' || inputJumlahDonasi.value === '') {
        alert('Input tidak boleh kosong');
      } else {
        const formdata = new FormData();

        formdata.append('idPostinganDonasi', idPostinganDonasi);
        formdata.append('namaDonatur', inputNamaDonatur.value);
        formdata.append('namaBank', inputNamaBank.value);
        formdata.append('noRekening', inputNoRekening.value);
        formdata.append('atasNama', inputAtasNama.value);
        formdata.append('jumlahDonasi', inputJumlahDonasi.value);

        await DataTambahDonasi.addTambahDonasi(formdata, idPostinganDonasi);
      }
    });
  },
};

export default DonasiTambah;
