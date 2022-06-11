import DataPendaftaranRelawan from '../../web-server/request-pendaftaran-relawan';
import UrlParser from '../../routes/url-parser';

const RelawanDaftar = {
  async render() {
    return `
      <div class="relawan-daftar" id="main-content">
        <h1>Pendaftaran Relawan</h1>
        <div class="card">
          <div class="card-body">
            <form enctype="multipart/form-data">
              <table class="table table-borderless">
                <tr>
                  <th>Nama Lengkap</th>
                  <td>:</td>
                  <td><input type="text" class="form-control" placeholder="Nama Lengkap" id="nama-lengkap"></td>
                </tr>
                <tr>
                  <th>No Telepon</th>
                  <td>:</td>
                  <td><input type="text" class="form-control" placeholder="No Telepon" id="no-telepon"></td>
                </tr>
                <tr>
                  <th>Kota/Kabupaten</th>
                  <td>:</td>
                  <td><input type="text" class="form-control" placeholder="Kota/Kabupaten" id="kab-kota"></td>
                </tr>
                <tr>
                  <th>Provinsi</th>
                  <td>:</td>
                  <td><input type="text" class="form-control" placeholder="Provinsi" id="provinsi"></td>
                </tr>
                <tr>
                  <td colspan="3">
                    <div class="input-group mb-3">
                      <div class="input-group-text">
                        <input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" id="checkbox">
                      </div>
                      <input type="text" class="form-control" placeholder="Sudah memenuhi seluruh persyaratan" disabled>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="3">
                    <button class="btn" id="button-submit">Submit</button>
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

    const buttonSubmit = document.querySelector('#button-submit');
    const inputNamaLengkap = document.querySelector('#nama-lengkap');
    const inputNoTelepon = document.querySelector('#no-telepon');
    const inputKabKota = document.querySelector('#kab-kota');
    const inputProvinsi = document.querySelector('#provinsi');
    const inputCheckbox = document.querySelector('#checkbox');

    buttonSubmit.addEventListener('click', async (event) => {
      event.preventDefault();

      if (inputNamaLengkap.value === '' || inputNoTelepon.value === '' || inputKabKota.value === '' || inputProvinsi.value === '') {
        alert('Inputan tidak boleh kosong');
      } else if (inputCheckbox.checked === false) {
        alert('Pastikan sudah memenuhi persyaratan dan centang box checkbox');
      } else {
        const formdata = new FormData();

        formdata.append('idPostinganRelawan', idPostinganRelawan);
        formdata.append('namaLengkap', inputNamaLengkap.value);
        formdata.append('noTelepon', inputNoTelepon.value);
        formdata.append('kabKota', inputKabKota.value);
        formdata.append('provinsi', inputProvinsi.value);

        await DataPendaftaranRelawan.addPendaftaranRelawan(formdata);
      }
    });
  },
};

export default RelawanDaftar;
