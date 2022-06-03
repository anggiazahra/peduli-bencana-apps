const RelawanDetail = {
  async render() {
    return `
    <div class="relawan-detail">
        <div class="img-detail">
            <img src="./picture.png" alt="">
        </div>
        <div>
            <h2>Judul</h2>
            <table class="table">
                <tr>
                    <th>Tanggal</th>
                    <td>:</td>
                    <td>25 Mei 2022 - 27 Mei 2022</td>
                </tr>
                <tr>
                    <th>Kab/Kota</th>
                    <td>:</td>
                    <td>Kab. Sukabumi</td>
                </tr>
                <tr>
                    <th>Provonsi</th>
                    <td>:</td>
                    <td>Java Barat</td>
                </tr>
                <tr>
                    <th>Alamat Lengkap</th>
                    <td>:</td>
                    <td>Kp. Pasir Kolotok Rt 05 Rw 12 Kel.Cibadak Kec.Cibadak Kab.Sukabumi Jawa Barat</td>
                </tr>
                <tr>
                    <th>Persyaratan</th>
                    <td>:</td>
                </tr>
                <tr>
                    <td colspan="3">
                        1. Usia minimal 17 tahun <br>
                        2. Mendapat persetujuan orang tua <br>
                        3. Jarak tempat tinggal ke lokasi maksimal 5 km <br>
                        4. Menyediakan peralatan keselamatan untuk individu <br>
                    </td>
                </tr>
            </table>
            <a class="btn" href="#/relawan-daftar">Daftar</a>
        </div>
    </div>
    `;
  },

  async afterRender() {
    // test
  },
};

export default RelawanDetail;
