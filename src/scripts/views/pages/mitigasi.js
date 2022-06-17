const Mitigasi = {
  async render() {
    return `
    <h1 class="main-title">Mitigasi</h1>
    <style>
        .container{
            display: block;
            grid-template-columns: 1fr 3fr;
            gap: 20px;
        }
        li{
            list-style: square;
        }
        .btn{
            width: 100%;
            text-align: left;
            margin: 0;
            color: black;
            background-color : white !important;
        }
        .side-bar{
            float: left;
            width: 25%;
            heigth: 100%;
            margin: 1%;
        }
        .side-bar ul{
            border: 3px solid #1C4966;
            border-radius: 5px;
            padding-left: 0;
        }
        .side-bar li{
            list-style: none;
        }
        #content{
            float: left;
            height: 100%;
            width: 70%;
            margin: 1%;
        }
        @media screen and (max-width: 790px){
            .container {
                grid-template-columns: 1fr;
                gap: 20px;
            }
            .side-bar {
                width: 90%;
            }
            .side-bar ul{
                grid-template-columns: 1fr;
                padding-left: 0;
            }
            #content {
                width: 90%;
            }
        }
        @media screen and (max-width: 540px){
            * {
                font-size: 14px;
            }
            .container {
                grid-template-columns: 1fr;
                gap: 20px;
            }
            .side-bar {
                width: 90%;
            }
            .side-bar ul{
                grid-template-columns: 1fr;
                padding-left: 0;
            }
            #content {
                width: 90%;
            }
        }
        @media screen and (max-width: 430px){
            .container {
                grid-template-columns: 1fr;
            }
            .side-bar {
                width: 90%;
            }
            .side-bar ul{
                grid-template-columns: 1fr;
                padding-left: 0;
            }
            #content {
                width: 90%;
            }
        }
    </style>

    <main class="container">
        <div class="side-bar">
            <ul>
                <li><button class="btn btn-white" id="mitigasi" value="banjir">Banjir</button></li>
                <li><button class="btn btn-white" id="mitigasi" value="tanah-longsor">Tanah Longsor</button></li>
                <li><button class="btn btn-white" id="mitigasi" value="gempa-bumi">Gempa Bumi</button></li>
                <li><button class="btn btn-white" id="mitigasi" value="tsunami">Tsunami</button></li>
                <li><button class="btn btn-white" id="mitigasi" value="gunung-meletus">Gunung Meletus</button></li>
                <li><button class="btn btn-white" id="mitigasi" value="abrasi-dan-gelombang-tinggi">Abrasi dan Gelombang Tinggi</button></li>
                <li><button class="btn btn-white" id="mitigasi" value="angin-ribut">Angin Ribut</button></li>
                <li><button class="btn btn-white" id="mitigasi" value="kekeringan">Kekeringan</button></li>
                <li><button class="btn btn-white" id="mitigasi" value="kebakaran">Kebakaran</button></li>
            </ul>
        </div>
        <div id="content">
            <h2>Banjir</h2>
            <p>Bencana alam banjir adalah bencana yang sering sekali terjadi di Indonesia. Curah hujan yang tinggi serta adanya pasang surut air laut menjadi penyebab utama terjadinya banjir. Selain itu, faktor perilaku manusia juga berpengaruh, seperti pengolahan lahan yang tidak tepat, membuang sampah sembarangan terutama pada saluran air seperti sungai, membangun pemukiman dilahan yang mudah banjir.</p>
            <p><strong>Adapun banjir terbagi menjadi 3 kategori, yaitu:</strong></p>
            <ul>
                <li>Banjir (Genangan), adalah banjir yang diakibatkan oleh genangan yang berasal dari hujan lokal atau hujan yang terjadi pada daerah itu sendiri.</li>
                <li>Banjir Bandang, merupakan banjir yang terjadi secara tiba-tiba akibat tersumbatnya aliran sungai maupun disebabkan oleh penebangan hutan di sepanjang sungai sehingga merusak pemukinan yang dapat menimbulkan korban jiwa.</li>
                <li>Banjir Rob, pada umumnya terjadi pada daerah pesisir pantai yang evakuasi / ketinggian lahannya lebih rendah dari muka air laut pasang, sehingga terjadi naiknya permukaan air laut.</li>
                </ul>
                <p><strong>Penyebab Banjir:</strong></p>
                <ul>
                <li>Permukaan tanah pemukiman lebih rendah dari pada permukaan air laut.</li>
                <li>Terletak pada struktur tanah yang cekung serta dikelilingi perbukitan dengan aliran air yang sempit.</li>
                <li>Kadar curah hujan yang tinggi.</li>
                <li>Banyak pemukiman yang dibangun pada dataran sepanjang sungai.</li>
                <li>Aliran sungai tidak lancar akibat banyaknya sampah yang menumpuk sehingga menghalangi aliran air.</li>
                <li>Kurangnya tutupan patahan di daerah hulu sungai.</li>
                </ul>
                <p><strong>Ketika Terjadi Banjir</strong></p>
                <ul>
                <li>Hindari berjalan di dekat saluran air agar tidak terseret arus banjir.</li>
                <li>Matikan aliran listrik di dalam rumah atau segera hubungi PLN untuk memutus aliran listrik pada daerah yang terjadi banjir.</li>
                <li>Segera amankan barang-barang berharga ke tempat yang lebih tinggi.</li>
                <li>Jika ketinggian air terus bertambah, hubungi pihak yang bersangkutan dengan penanggulangan bencana seperti Kantor Kepala Desa, Lurah ataupun Camat.</li>
                <li>Mengungsi ke daerah aman atau posko banjir segera mungkin ketika ketinggian air masih memungkinkan untuk dilewati.</li>
                </ul>
                <p><strong>Kegiatan Setelah Terjadi Banjir</strong></p>
                <ul>
                <li>Segera membersihkan rumah. Gunakan antiseptik untuk membunuh kuman penyakit.</li>
                <li>Cari dan siapkan air bersih untuk menghindari terjangkitnya penyakit diare.</li>
                <li>Waspada terhadap kemungkinan binatang berbisa, seperti ular dan lipan, atau binatang penyebab penyakit, seperti kecoa, lalat, dan nyamuk.</li>
                <li>Usahakan selalu waspada apabila kemungkinan terjadi banjir susulan.</li>
                </ul>
                <p><strong>Mitigasi dan Upaya Pengurangan Resiko Bencana</strong></p>
                <ul>
                <li>Penataan daerah aliran sungai secara teratur dan sesuai dengan fungsi lahan.</li>
                <li>Tidak membangun rumah dan pemukiman di sepanjang sungai serta di daerah banjir.</li>
                <li>Melakukan reboisasi terhadap hutan yang gundul, serta mengurangi aktifitas di bagian sungai yang rawan banjir.</li>
                </ul>
                <p><strong>Dampak Banjir</strong></p>
                <ul>
                <li>Merusak sarana dan prasarana termasuk perumahan, gedung, jalur transportasi putus, peralatan rumah tangga rusak / hilang.</li>
                <li>Menimbulkan penyakit diare, infeksi saluran pernafasan.</li>
                <li>Dapat menimbulkan korban jiwa</li>
                <li>Dapat menimbulkan erosi bahkan longsor.</li>
                <li>Pencemaran lingkungan.</li>
                </ul>
                <p><strong>Referensi:</strong></p>
                <ul>
                <li>http://www.mitigasi-bencana.com/</li>
                <li>https://bpbd.kedirikota.go.id/view/bencana-alam-gunung-meletus</li>
                </ul>
        </div>
        </main>
    `;
  },

  async afterRender() {
    const listMitigasi = document.querySelectorAll('#mitigasi');
    const content = document.getElementById('content');
    for (let i = 0; i < listMitigasi.length; i++) {
      const itemMitigasi = listMitigasi[i];
      itemMitigasi.addEventListener('click', (event) => {
        if (itemMitigasi.value === 'banjir') {
          content.innerHTML = `
                    <h2>Banjir</h2>
                <p>Bencana alam banjir adalah bencana yang sering sekali terjadi di Indonesia. Curah hujan yang tinggi serta adanya pasang surut air laut menjadi penyebab utama terjadinya banjir. Selain itu, faktor perilaku manusia juga berpengaruh, seperti pengolahan lahan yang tidak tepat, membuang sampah sembarangan terutama pada saluran air seperti sungai, membangun pemukiman dilahan yang mudah banjir.</p>
                <p><strong>Adapun banjir terbagi menjadi 3 kategori, yaitu:</strong></p>
                <ul>
                    <li>Banjir (Genangan), adalah banjir yang diakibatkan oleh genangan yang berasal dari hujan lokal atau hujan yang terjadi pada daerah itu sendiri.</li>
                    <li>Banjir Bandang, merupakan banjir yang terjadi secara tiba-tiba akibat tersumbatnya aliran sungai maupun disebabkan oleh penebangan hutan di sepanjang sungai sehingga merusak pemukinan yang dapat menimbulkan korban jiwa.</li>
                    <li>Banjir Rob, pada umumnya terjadi pada daerah pesisir pantai yang evakuasi / ketinggian lahannya lebih rendah dari muka air laut pasang, sehingga terjadi naiknya permukaan air laut.</li>
                </ul>
                <p><strong>Penyebab Banjir:</strong></p>
                <ul>
                    <li>Permukaan tanah pemukiman lebih rendah dari pada permukaan air laut.</li>
                    <li>Terletak pada struktur tanah yang cekung serta dikelilingi perbukitan dengan aliran air yang sempit.</li>
                    <li>Kadar curah hujan yang tinggi.</li>
                    <li>Banyak pemukiman yang dibangun pada dataran sepanjang sungai.</li>
                    <li>Aliran sungai tidak lancar akibat banyaknya sampah yang menumpuk sehingga menghalangi aliran air.</li>
                    <li>Kurangnya tutupan patahan di daerah hulu sungai.</li>
                </ul>
                <p><strong>Ketika Terjadi Banjir</strong></p>
                <ul>
                    <li>Hindari berjalan di dekat saluran air agar tidak terseret arus banjir.</li>
                    <li>Matikan aliran listrik di dalam rumah atau segera hubungi PLN untuk memutus aliran listrik pada daerah yang terjadi banjir.</li>
                    <li>Segera amankan barang-barang berharga ke tempat yang lebih tinggi.</li>
                    <li>Jika ketinggian air terus bertambah, hubungi pihak yang bersangkutan dengan penanggulangan bencana seperti Kantor Kepala Desa, Lurah ataupun Camat.</li>
                    <li>Mengungsi ke daerah aman atau posko banjir segera mungkin ketika ketinggian air masih memungkinkan untuk dilewati.</li>
                </ul>
                <p><strong>Kegiatan Setelah Terjadi Banjir</strong></p>
                <ul>
                    <li>Segera membersihkan rumah. Gunakan antiseptik untuk membunuh kuman penyakit.</li>
                    <li>Cari dan siapkan air bersih untuk menghindari terjangkitnya penyakit diare.</li>
                    <li>Waspada terhadap kemungkinan binatang berbisa, seperti ular dan lipan, atau binatang penyebab penyakit, seperti kecoa, lalat, dan nyamuk.</li>
                    <li>Usahakan selalu waspada apabila kemungkinan terjadi banjir susulan.</li>
                </ul>
                <p><strong>Mitigasi dan Upaya Pengurangan Resiko Bencana</strong></p>
                <ul>
                    <li>Penataan daerah aliran sungai secara teratur dan sesuai dengan fungsi lahan.</li>
                    <li>Tidak membangun rumah dan pemukiman di sepanjang sungai serta di daerah banjir.</li>
                    <li>Melakukan reboisasi terhadap hutan yang gundul, serta mengurangi aktifitas di bagian sungai yang rawan banjir.</li>
                </ul>
                <p><strong>Dampak Banjir</strong></p>
                <ul>
                    <li>Merusak sarana dan prasarana termasuk perumahan, gedung, jalur transportasi putus, peralatan rumah tangga rusak / hilang.</li>
                    <li>Menimbulkan penyakit diare, infeksi saluran pernafasan.</li>
                    <li>Dapat menimbulkan korban jiwa</li>
                    <li>Dapat menimbulkan erosi bahkan longsor.</li>
                    <li>Pencemaran lingkungan.</li>
                </ul>
                <p><strong>Referensi:</strong></p>
                <ul>
                <li>http://www.mitigasi-bencana.com/</li>
                <li>https://bpbd.kedirikota.go.id/view/bencana-alam-gunung-meletus</li>
                </ul>
                    `;
        } else if (itemMitigasi.value === 'tanah-longsor') {
          content.innerHTML = `
                        <h2>Tanah Longsor</h2>
                        <p>Tanah Longsor  merupakan salah satu bentuk gerakan tanah atau batuan, atau yang disebut pencampuran keduanya, menuruni atau keluar lereng akibat dari terganggunya kestabilan tanah atau batuan yang menjadi pondasi lereng tersebut. Tanah longsor terjadi akibat adanya gangguan kestabilan tanah / batuan penyusun lereng</p>
                        <p><strong>Tanah Alami Terjadinya Tanah Longsor</strong></p>
                        <ul>
                            <li>Munculnya retakan vertikal pada tebing</li>
                            <li>Munculnya air tanah secara tiba-tiba</li>
                            <li>Munculnya retakan lengkung memanjang pada lereng</li>
                            <li>Air sumur di sekitar tebing menjadi keruh</li>
                            <li>Retak pada lantai dan dinding/pagar rumah Longsoran kecil, batu rapuh dan kerikil mulai berjatuhan</li>
                            <li>Longsor-longsor kecil, tebing rapuh, dan kerikil mulai berjatuhan</li>
                            <li>Terdengar suara gemuruh disertai getaran dari atas lereng</li>
                            <li>Jendela dan pintu rumah yang berada di lereng sulit dibuka</li>
                            <li>Runtuhnya bagian-bagian tanah yang luas</li>
                        </ul>
                        <p><strong>Daerah Rawan Tanah Longsor</strong></p>
                        <ul>
                            <li>Daerah dengan sejarah longsor</li>
                            <li>Area di kaki bukit</li>
                            <li>Daerah dengan lereng yang terdiri dari tanah gembur dan padat penduduk</li>
                            <li>Tebing yang tidak ditumbuhi pohon (gersang)</li>
                            <li>Daerah tempat air hujan mengalir</li>
                            <li>Daerah dengan curah hujan yang tinggi sepanjang tahun</li>
                        </ul>
                        <p><strong>Penyebab Tanah Longsor</strong></p>
                        <p><strong>Faktor Pengontrol Gangguan Kestabilan Lereng</strong></p>
                        <p>Gangguan kestabilan lereng ini dikendalikan oleh kondisi morfologi (terutama lereng), kondisi batuan atau tanah yang membentuk lereng, dan sistem hidrologi atau perairan lereng. Lereng rawan terhadap longsor, tetapi karena sifat lereng, batuan dasar/tanah, dan tata air, lereng tidak licin atau tidak terjadi trip event dan stabilitasnya terganggu.</p>
                        <p><strong>Proses Pemicu Longsor dapat berupa:</strong></p>
                        <ul>
                            <li>Peningkatan kadar air dalam lereng</li>
                            <li>Getaran  lereng akibat gempa bumi, ledakan, galian, getaran alat/kendaraan</li>
                            <li>Gempa bumi di tanah berpasir hidrous sering menyebabkan &#8220;liqueafaction&#8221;</li>
                            <li>Peningkatan beban di atas daya dukung tanah atau geser tanah</li>
                        </ul>
                        <p><strong>Apa yang dilakukan saat terjadinya longsor</strong></p>
                        <ul>
                            <li>Sebagian besar penduduk di kaki lereng tidak memiliki kesempatan untuk melarikan diri karena massa bumi mulai meluncur menuruni bukit.</li>
                            <li>Jika tebing  menunjukkan gejala longsor, segera lakukan evakuasi warga.</li>
                        </ul>
                        <p><strong>Setelah Terjadi Tanah Longsor</strong></p>
                        <ul>
                            <li>Penggalian di tanggul dapat menyebabkan tanah longsor baru, jadi berhati-hatilah untuk mengevakuasi para korban.</li>
                            <li>Evakuasi orang-orang yang tinggal di daerah berbahaya ke tempat penampungan yang aman.</li>
                            <li>Temukan sumber air bersih yang dapat digunakan di tempat penyimpanan yang aman.</li>
                            <li>Segera hubungi instansi terkait seperti Kepala Desa/Lula dan Kamat agar kejadian bencana dapat segera ditangani  secara terkoordinasi.</li>
                        </ul>
                        <p><strong>Referensi:</strong></p>
                        <ul>
                        <li>http://www.mitigasi-bencana.com/</li>
                        <li>https://bpbd.kedirikota.go.id/view/bencana-alam-gunung-meletus</li>
                        </ul>
                    `;
        } else if (itemMitigasi.value === 'gempa-bumi') {
          content.innerHTML = `
                        <h2>Gempa Bumi</h2>
                        <p>Gempa Bumi adalah guncangan Bumi karena pelepasan energi Bumi secara tiba-tiba, yang ditandai dengan hancurnya lapisan batuan di dalam kerak bumi. Penyimpanan energi yang menyebabkan gempa bumi disebabkan oleh pergerakan lempeng tektonik. Energi yang dihasilkan terpancar ke segala arah dalam bentuk gelombang seismik, dan efeknya dapat dirasakan hingga ke permukaan bumi.</p>
                        <p><strong>Penyebab Terjadinya Gempa Bumi</strong></p>
                        <ul>
                            <li>Proses tektonik akibat pergerakan lempeng bumi</li>
                            <li>Patahan aktif</li>
                            <li>Aktivitas gunung api atau runtuhan batuan</li>
                            <li>Ledakan nuklir</li>
                        </ul>
                        <p><strong>Sebelum Terjadi Gempa Bumi</strong></p>
                        <ul>
                            <li>Mengetahui informasi mengenai gempa bumi.</li>
                            <li>Membangun rumah dengan konstruksi tahan gempa.</li>
                            <li>Selalu peka terhadap sistem peringatan dini dan membuat sistem peringatan dini mandiri seperti mengikat benda gantung..</li>
                            <li>Melaksanakan dan mengikuti simulasi.</li>
                            <li>Mengetahui dimana informasi gempa bisa di dapatkan, yaitu : BMKG, tv, radio, ORARI, dll.</li>
                        </ul>
                        <p><strong>Alat yang harus selalu ada disekitar Anda</strong></p>
                        <ul>
                            <li>Senter/Lampu baterai</li>
                            <li>Kotak P3K</li>
                            <li>Makanan suplemen dan air minum</li>
                            <li>Radio</li>
                        </ul>
                        <p><strong>Ketika Terjadi Gempa Bumi</strong></p>
                        <p><strong>Di dalam rumah</strong></p>
                        <p>Anda bisa merasakan getarannya untuk beberapa saat. Selama  waktu ini, lindungi diri Anda dan keluarga Anda. Pergi ke bawah meja untuk melindungi diri dari benda jatuh. Jika Anda tidak memiliki meja, tutupi kepala Anda dengan bantal. Matikan kompor segera setelah Anda menyalakannya.</p>
                        <p><strong>Di luar rumah</strong></p>
                        <p>Lindungi kepala Anda dan hindari bahan berbahaya. Di area perkantoran dan industri, kaca dan rambu yang jatuh dapat menimbulkan bahaya. Lindungi kepala Anda dengan sesuatu yang Anda bawa, seperti tangan atau tas.</p>
                        <p><strong> Di gedung, mall, bioskop dan lantai dasar mall</strong></p>
                        <p>Jangan menyebabkan  atau menjadi korban  kepanikan. Ikuti  petunjuk dari petugas atau satpam.</p>
                        <p><strong>Di kereta api</strong></p>
                        <p>Pegang tiang penopang agar tidak terbalik jika kereta berhenti tiba-tiba. Harap diam setelah penjelasan kondektur. Kesalahpahaman informasi dari staf kereta dan stasiun dapat menyebabkan kepanikan.</p>
                        <p><strong>Di gunung</strong><strong> /</strong><strong> pantai</strong></p>
                        <p>Tanah longsor dapat terjadi dari puncak gunung. Langsung ke tempat yang aman. Bahaya tsunami berawal dari pantai. Jika Anda merasakan getaran yang menunjukkan tanda-tanda tsunami, segera mengungsi ke bukit.</p>
                        <p><strong>Di dalam mobil</strong></p>
                        <p>Ketika gempa besar terjadi, Anda merasa roda mobil terbuka. Anda kehilangan kendali atas mobil Anda dan sulit dikendalikan. Tinggalkan persimpangan dan parkir mobil Anda di sisi kiri jalan. Ikuti petunjuk di radio mobil. Jika Anda perlu mengungsi, keluar dari mobil dan biarkan mobil tidak terkunci.</p>
                        <p><strong>Setelah Terjadi Gempa Bumi</strong></p>
                            <ul>
                                <li>Periksa kondisi keluarga dan sekitar.</li>
                                <li>Jauhi bangunan yang sudah retak-retak dan tidak aman.</li>
                                <li>Laporkan kejadian kerugian, korban orang hilang.</li>
                                <li>Membersihkan puing-puing serta kerusakan yang terjadi.</li>
                                <li>Membantu masyarakat dan aparat sekitar untuk memperbaiki rumah atau kerusakan sarana dan prasarana yang ada di sekitar wilayah bencana.</li>
                            </ul>
                        <p><strong>Referensi:</strong></p>
                        <ul>
                            <li>http://www.mitigasi-bencana.com/</li>
                            <li>https://bpbd.kedirikota.go.id/view/bencana-alam-gunung-meletus</li>
                        </ul>
                    `;
        } else if (itemMitigasi.value === 'tsunami') {
          content.innerHTML = `
                        <h2>Tsunami</h2>
                        <p>Kata <em>tsunami</em> berasal dari fakta bahwa <em>"tsu"</em> di Jepang  berarti pelabuhan dan <em>"nama"</em> berarti gelombang, sehingga secara umum diartikan sebagai <em>"gelombang besar di pelabuhan"</em>. Tsunami dapat diartikan sebagai gelombang laut yang disebabkan oleh gempa bumi yang berpusat di dasar laut, longsor bawah laut, dan/atau tumbukan meteorit di laut.</p>
                        <p><strong>Penyebab Terjadinya Tsunami</strong></p>
                        <ul>
                            <li>Gempa bumi yang berpusat di bumi diikuti oleh perpindahan atau pergeseran waktu dari area yang luas atau bebatuan (laut atau danau) di dalam air.</li>
                        </ul>
                        <p><strong>Ketika Terjadi Tsunami</strong></p>
                        <ul>
                            <li>Ketika Anda berada di dekat pantai, Anda akan merasakan guncangan gempa, dan air laut di dekat pantai akan tiba-tiba surut dan langsung mengalir ke tempat-tempat tinggi (perbukitan dan gedung pencakar langit).</li>
                            <li>Jika Anda berada di atas perahu/perahu di tengah lautan dan mendengar berita dari pantai bahwa telah terjadi tsunami,  arahkan perahu Anda ke laut alih-alih mendekati pantai. Ketika gelombang pertama  datang dan pergi, biasanya gelombang berikutnya datang, jadi jangan langsung masuk ke area yang lebih rendah.</li>
                        </ul>
                        <p><strong>Tiga Langkah Tanggap Tsunami</strong></p>
                        <ol>
                            <li><strong>Tanggap Gempa Bumi</strong></li>
                        </ol>
                            <ul>
                                <li>Perlu diingat bahwa gempa bumi yang kuat atau berlangsung lama dapat menyebabkan tsunami dalam waktu singkat.</li>
                                <li>Jauhi lokasi pantai dan tepi sungai, mencari informasi apa yang terjadi.</li>
                            </ul>
                        <ol start="2">
                            <li><strong>Tanggap Peringatan (Dini Tsunami)</strong></li>
                        </ol>
                            <ul>
                                <li>Dapatkan informasi Peringatan Dini Tsunami dari BMKG melalui radio, televisi, internet, pengumuman dari Pemda, dll.</li>
                                <li>Jika terdengar bunyi sirine, kentongan atau peralatan lain yang sudah disepakati, segera evakuasi diri ketempat yang lebih aman.</li>
                            </ul>
                        <ol start="3">
                            <li><strong>Tanggap Evakuasi</strong></li>
                        </ol>
                            <ul>
                                <li>Setelah merasakan gempa bumi atau menerima peringatan tsunami, segera evakuasi ke lokasi yang aman.</li>
                                <li>Ikuti jalur serta rambu evakuasi yang telah disediakan.</li>
                                <li>Jika lokasi aman namun tidak diketahui orang lain, larilah sejauh mungkin dari lokasi tersebut dan naik ke tempat yang lebih tinggi.</li>
                            </ul>
                        <p><strong>Referensi:</strong></p>
                        <ul>
                            <li>http://www.mitigasi-bencana.com/</li>
                            <li>https://bpbd.kedirikota.go.id/view/bencana-alam-gunung-meletus</li>
                        </ul>
                    `;
        } else if (itemMitigasi.value === 'gunung-meletus') {
          content.innerHTML = `
                        <h2>Gunung Meletus</h2>
                        <p>Letusan gunung dapat terjadi karena endapan magma di dalam  bumi didorong keluar oleh gas  bertekanan tinggi. Dalam proses letusan, gunung berapi terbentuk. Efek dari letusan gunung berapi dapat mengancam jiwa dan memakan harta benda manusia.</p>
                        <p><strong>Sebelum Terjadi Letusan</strong></p>
                        <ul>
                            <li>Observasi kegiatan pada gunung api yang aktif</li>
                            <li>Membuat prosedur tetap mengenai penanggulangan bencana gunung meletus</li>
                            <li>Mengadakan sosialisasi informasi terkait gunung api kepada masyarakat</li>
                            <li>Penyelidikan serta penelitian geologi, geofisika, dan geokimia di gunung api</li>
                        </ul>
                        <p><strong>Saat Terjadi Letusan</strong></p>
                        <ul>
                            <li>Membentuk tim siap sedia</li>
                            <li>Meningkatkan kegiatan pemantauan yang didukung dengan peralatan yang mumpuni</li>
                            <li>Meningkatkan sistem pelaporan sesuai prosedur yang ada</li>
                        </ul>
                        <p><strong>Setelah Terjadi Letusan</strong></p>
                        <ul>
                            <li>Pendataan yang mencakup sebaran serta volume hasil letusan</li>
                            <li>Mengevakuasi daerah yang terdampak dan terancam bencana</li>
                            <li>Memperbaiki sarana prasarana yang rusak</li>
                            <li>Pemantauan secara berkala, walaupun keadaan sudah mulai normal</li>
                        </ul>
                        <p><strong>Referensi:</strong></p>
                        <ul>
                            <li>http://www.mitigasi-bencana.com/</li>
                            <li>https://bpbd.kedirikota.go.id/view/bencana-alam-gunung-meletus</li>
                        </ul>
                        
                    `;
        } else if (itemMitigasi.value === 'abrasi-dan-gelombang-tinggi') {
          content.innerHTML = `
                        <h2>Abrasi dan Gelombang Tinggi</h2>
                        <p>Gelombang tinggi/pasang merupakan tinggi gelombang air laut yang melebihi batas standar umum yang dapat menyebabkan bencana di daerah laut itu sendiri ataupun di darat. Biasanya gelombang tinggi terjadi dikarenakan pengaruh angin kencang/putting beliung, pergantian cuaca dalam waktu yang singkat, serta dikarenakan adanya pengaruh gravitasi bulan maupun matahari. Kecepatan gelombang tinggi mencapai sekitar 10-100km/jam. Gelombang tinggi ini akan menghanyutkan daerah yang berada di pesisir pantai sehingga disebut dengan Abrasi.</p>
                        <p>Abrasi merupakan fenomena alam yang selalu menjadi masalah di lingkungan pesisir.</p>
                        <p><strong>Faktor Penyebab Terjadinya Abrasi Dan Gelombang Tinggi</strong></p>
                        <p><strong>Faktor dari Alam</strong></p>
                        <p>Saat angin yang melaju di laut menciptakan gelombang dan arus menuju pantai, arus dan angin memiliki kekuatan untuk mengikis pantai dari waktu ke waktu. Deburan ombak di sepanjang pantai menggoyahkan bebatuan dan akhirnya terpisah dari daratan. Kekuatan gelombang maksimum terjadi selama badai dan mempercepat proses abrasi.</p>
                        <p><strong>Faktor dari Manusia</strong></p>
                        <ul>
                            <li>Perusakan pada terumbu karang</li>
                            <li>Penggundulan hutan mangrove</li>
                            <li>Penambangan liar pasir pantai</li>
                        </ul>
                        <p><strong>Karakteristik Terjadinya Gelombang Tinggi</strong></p>
                        <ul>
                            <li>Angin kencang</li>
                            <li>Terjadinya badai di tengah laut dan menyebabkan terjadinya gelombang pasang di pinggir pantai.</li>
                            <li>Perubahan cuaca yang tiba-tiba menjadi gelap.</li>
                        </ul>
                        <p><strong>Dampak Abrasi Dan Gelombang Pasang</strong></p>
                        <ul>
                            <li>Penyempitan terhadap lebar pantai secara berkala sehingga semakin berkurangnya lahan untuk penduduk pesisir pantai.</li>
                            <li>Rusaknya sarana prasarana termasuk pemukiman, infrastruktur transportasi, serta Pelabuhan.</li>
                            <li>Berkurangnya pendapatan para nelayan karena tidak dapat melaut, kerusakan infrastruktur jalan yang mengakibatkan sulitnya akses ke daerah tersebut.</li>
                            <li>Hutan bakau yang terkikis mengakibatkan hilangnya tempat berlindungnya ikan-ikan.</li>
                            <li>Akibat terpaan ombak disertai angin yang kencang hutan bakau menjadi rusak.</li>
                        </ul>
                        <p><strong>Ketika Terjadi Gelombang Pasang</strong></p>
                        <ul>
                            <li>Sosialisasi awal kepada masyarakat dari hasil prediksi cuaca melalui radio serta alat komunikasi lainnya.</li>
                            <li>Ketika sedang pelayaran, usahakan menghindari daerah laut yang sedang mengalami cuaca buruk.</li>
                            <li>Membuat infrastruktur pemecah gelombang untuk meredam energi gelombang yang masuk, terutama di wilayah pesisir dengan gelombang besar.</li>
                            <li>Ketika terjadi gelombang pasang, hindarilah daerah pantai serta berlarilah ke dataran yang lebih tinggi.</li>
                        </ul>
                        <p><strong>Referensi:</strong></p>
                        <ul>
                            <li>http://www.mitigasi-bencana.com/</li>
                            <li>https://bpbd.kedirikota.go.id/view/bencana-alam-gunung-meletus</li>
                        </ul>         
                    `;
        } else if (itemMitigasi.value === 'angin-ribut') {
          content.innerHTML = `
                          <h2>Angin Ribut</h2>
                          <p>Angin ribut/puting beliung adalah angin kencang yang berputar sehingga pangkal awan cumulonimbus menyentuh daratan dengan kecepatan hingga 175 km/jam, namun intensitasnya lebih rendah dari tornado. Badai mengaduk lautan, menciptakan gelombang besar dan kuat.</p>
                          <p><strong>Tanda-Tanda Terjadinya Angin Puting Beliung</strong></p>
                          <ul>
                              <li>Terlihat gumpalan awan gelap, besar, dan tinggi.</li>
                              <li>Petir dan gemuruh terlihat dari kejauhan.</li>
                          </ul>
                          <p><strong>Penanganan Saat Terjadinya Angin Puting Beliung</strong></p>
                          <ul>
                              <li>Masukkan barang-barang ke dalam rumah supaya tidak terbawa oleh angin.</li>
                              <li>Masuklah kedalam bangunan yang kokoh, tutup pintu serta jendela lalu kunci.</li>
                              <li>Segeralah menuju tempat yang lebih aman untuk berlindung.</li>
                              <li>Matikan seluruh arus listrik serta peralatan elektronik.</li>
                              <li>Jangan tiarap di atas tanah.</li>
                              <li>Hindari tempat-tempat yang terdapat dinding kayu/bambu, jembatan, pohon, antenna, radio, tower, tiang listrik, serta Gedung yang tinggi.</li>
                          </ul>
                          <p><strong>Penanganan Setelah Terjadinya Angin Puting Beliung</strong></p>
                          <ul>
                              <li>Pastikan seluruh anggota keluarga aman dan tidak mengalami cedera.</li>
                              <li>Bila terdapat korban, segera berikan pertolongan pertama.</li>
                              <li>Laporkan kepada pihak yang bersangkutan bila terdapat kerusakan sehubungan dengan listrik, gas, dll.</li>
                          </ul>
                          <p><strong>Referensi:</strong></p>
                          <ul>
                              <li>http://www.mitigasi-bencana.com/</li>
                              <li>https://bpbd.kedirikota.go.id/view/bencana-alam-gunung-meletus</li>
                          </ul>        
                      `;
        } else if (itemMitigasi.value === 'kekeringan') {
          content.innerHTML = `
                            <h2>Kekeringan</h2>
                            <p>Kekeringan merupakan kapasitas air yang tersedia jauh di bawah kebutuhan air, baik untuk keberlangsungan hidup, pertanian, kegiatan ekonomi, serta lingkungan.</p>
                            <p><strong>Gejala Terjadinya Kekeringan</strong></p>
                            <ul>
                                <li>Berkurangnya kapasitas curah hujan yang berada dibawah batas normal dalam satu musim.</li>
                                <li>Berkurangnya pasokan air permukaan dan air tanah.</li>
                                <li>Berkurangnya kandungan air didalam tanah menyebabkan kekeringan pada lahan pertanian.</li>
                            </ul>
                            <p><strong>Dampak Kekeringan</strong></p>
                            <ul>
                                <li>Banjir bandang, pepohonan mati, hutan menjadi gundul, pada musim hujan akan menyebabkan erosi dan banjir.</li>
                                <li>Urbanisasi, akibat hilangnya bahan pangan karena tumbuhan pangan dan ternak mati, petani kehilangan mata pencaharian.</li>
                                <li>Kesehatan manusia, hewan, dan tumbuhan menjadi mudah terkena penyakit.</li>
                            </ul>
                            <p><strong>Mitigasi Serta Upaya Pengurangan Resiko Kekeringan</strong></p>
                            <ul>
                                <li>Penyusunan peraturan pemerintah tentang pengaturan sistem pengiriman data iklim dari daerah ke pusat pengolahan data.</li>
                                <li>Penyusunan PERDA untuk menetapkan skala prioritas penggunaan air dengan memperhatikan historical right dan asas keadilan.</li>
                                <li>Pembentukan pokja dan posko kekeringan pada tingkat pusat dan daerah.</li>
                                <li>Penyediaan anggaran khusus untuk pengembangan / pada daerah-daerah yang rawan kekeringan.</li>
                                <li>Memberikan sistem penghargaan dan hukuman bagi masyarakat yang melakukan upaya konservasi dan rehabilitasi sumber daya air dan hutan.</li>
                            </ul>
                            <p><strong>Referensi:</strong></p>
                            <ul>
                                <li>http://www.mitigasi-bencana.com/</li>
                                <li>https://bpbd.kedirikota.go.id/view/bencana-alam-gunung-meletus</li>
                            </ul>        
                        `;
        } else if (itemMitigasi.value === 'kebakaran') {
          content.innerHTML = `
                              <h2>Kebakaran</h2>
                              <p>Kebakara merupakan musibah yang tidak terduga datangnya bisa kapan saja dan dimana saja, sehingga dibutuhkan kegiatan mitigasi maupun pelatihan-pelatihan pemadaman kebakaran bagi siapa saja yang mempunyai wewenang atas terjadinya musibah tersebut.</p>
                              <p><strong>Sistem Pemadaman</strong></p>
                              <p><strong>Sistem Isolasi</strong></p>
                              <ul>
                                  <li>Cara pemadaman dengan tidak memberi oksigen pada benda yang terbakar.</li>
                                  <li>Menutup dengan karung basah.</li>
                                  <li>Menimbun dengan tanah, pasir, atau lumpur.</li>
                              </ul>
                              <p><strong>Sistem Pendinginan</strong></p>
                              <ul>
                                  <li>Cara pemadaman dengan menurunkan suhu pada benda yang terbakar.</li>
                                  <li>Menyiram dengan air.</li>
                                  <li>Menimbun dengan daun, batang pohon yang banyak mengandung air.</li>
                              </ul>
                              <p><strong>Sistem Urai</strong></p>
                              <ul>
                                  <li>Memadamkan api dengan cara memecah benda yang terbakar menjadi bagian kecil, sehingga api mudah dikendalikan.</li>
                                  <li>Bila sistem isolasi dan pendinginan tidak dapat dilakukan.</li>
                              </ul>
                              <p><strong>ALAT PEMADAM</strong></p>
                              <p><strong>Media pemadaman jenis padat:</strong></p>
                              <ul>
                                  <li>Pasir, tanah, lumpur</li>
                                  <li>Karung goni</li>
                                  <li>Selimut api</li>
                                  <li>Tepung kimia kering (Dry Chemical)</li>
                                  <li>Alat Pemadam Api Ringan (APAR)</li>
                              </ul>
                              <p><strong>Media pemadaman jenis cair:</strong></p>
                              <ul>
                                  <li>Air</li>
                                  <li>Busa (Foam)</li>
                                  <li>Soda</li>
                                  <li>Halon (BCF)</li>
                              </ul>
                              <p><strong>Media pemadaman jenis gas:</strong></p>
                              <ul>
                                  <li>Gas asam arang</li>
                                  <li>Gas zat lemas</li>
                                  <li>Zat argon</li>
                              </ul>
                              <p><strong>Dry Chemical</strong></p>
                              <p>Cara pemakaian:</p>
                              <p>Harus diperhatikan adanya arah angin. Jika angin bertiup terlalu kuat maka penggunakan dry chemical ini tidak efektif.</p>
                              <p>Arahkan pancaran pemotong nyala api dan usahakan dapat terbentuk semacam awan / asap untuk menutup nyala api tersebut.</p>
                              <p><strong>Pasir / Tanah</strong></p>
                              <ul>
                                  <li>Sangat baik untuk kebakaran lantai / tanah datar.</li>
                                  <li>Dipakai untuk membendung tumpahan minyak agar kebakaran tidak meluas.</li>
                                  <li>Dipakai untuk pemadaman awal semua jenis kebakaran.</li>
                              </ul>
                              <p>Cara pemakaian:</p>
                              <p>Pasir / tanah ditaburkan mulai dari tepi hingga seluruh permukaan yang terbakar tertutup rata.</p>
                              <p><strong>Selimut / Karung Goni</strong></p>
                              <ul>
                                  <li>Cocok untuk kebakaran kompor (minyak) dan semua jenis kebakaran, kecuali listrik.</li>
                                  <li>Bahan murah dan mudah didapat.</li>
                              </ul>
                              <p>Cara pemakaian:</p>
                              <p>Basahi karung goni dengan air kemudian tutupkan secara rata pada bagian yang terbakar. Jika dengan satu karung tidak cukup, tambah lagi.</p>
                              <p><strong>Referensi:</strong></p>
                              <ul>
                                  <li>http://www.mitigasi-bencana.com/</li>
                                  <li>https://bpbd.kedirikota.go.id/view/bencana-alam-gunung-meletus</li>
                              </ul>        
                          `;
        }
      });
    }
  },
};

export default Mitigasi;
