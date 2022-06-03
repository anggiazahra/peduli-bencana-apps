const ArtikelTambah = {
  async render() {
    return `

    <style>

    /* input artikel */

        #tambah-artikel{
            width: 80%;
            margin: 50px auto;
            padding: 22px;
        }
        .content-tambah h1{
            font-weight: 600;
            text-align: center;
            color: #1C4966;
            padding-bottom: 30px;
        }
        .isi-input{
            display: flex;
            flex-direction: column;
            padding: 20px;
            border: 1px solid black;
        }
        .input-button{
            margin: 10px;
        }
        .input-button a{
            text-decoration: none;
            padding: 10px 60px;
            margin: 0;
            border: none;
            background: #1C4966;
            color: #fff;
        }
        .input-button button{
            min-width: 18%;
            padding: 10px;
            border: none;
            background: #1C4966;
            color: #fff;
        }

    </style>

    <section id="tambah-artikel" >
    <div class="content-tambah">
        <h1>TAMBAH ARTIKEL</h1>
        <div class="isi-input">
            <div class="mb-3">
                <label for="judulArtikel" class="form-label">Judul Artikel</label>
                <input type="email" class="form-control" id="judulArtikel">
            </div>
            <div class="mb-3">
                <label for="judulArtikel" class="form-label">Sumber Artikel</label>
                <input type="email" class="form-control" id="judulArtikel">
            </div>
            <div class="mb-3">
                <label for="formFileMultiple" class="form-label">Gambar Artikel</label>
                <input class="form-control" type="file" id="formFileMultiple" multiple>
            </div>
            <div class="mb-3">
                <label for="isiArtikel" class="form-label">Isi Artikel</label>
                <textarea class="form-control" id="isiArtikel" rows="10"></textarea>
            </div>
            <div class="input-button">
                <button>Tambah Artikel</button>
            </div>
        </div>
    </div>
</section>
      `;
  },

  async afterRender() {
    // test
  },
};

export default ArtikelTambah;
