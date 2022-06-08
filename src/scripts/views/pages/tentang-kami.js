const TentangKami = {
  async render() {
    return `
      <h1 class="main-title">Tentang Kami</h1>
      <style>
        html {
            box-sizing: border-box;
        }
        .container {
            max-width: 90% !important;
            padding: 0;
            min-height: 500px;
            margin-right: 0;
            margin: auto;
        }
        .container h2 {
            text-align: center;
            margin: 30px 0;
        }
        .card {
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            border-radius: 5px;
            padding: 10px;
        }
        .card:hover{
            transform: translateY(-6px);
            scale: 1.1;
        }
        .card img {
            width: 100%;
            height: 170px;
            object-fit: contain;
            object-position: center;
        }

        .description-about {
            width: 100%;
            padding: 50px 5px;
            border: 2px solid;
            border-radius: 5px;
        }

        .about img {
            height: auto;
            width: 400px;
            margin-left: 10px;
            
        }

        .about-text {
            width: 550px;
            margin-left: 10px;
            
        }

        .about{
            width: 1130px;
            max-width: 95%;
            margin: 0 auto;
            grid-template-columns: 1fr 1fr;
            display: grid;
            align-items: center;
            justify-content: space-around;
        }

        .grid-row {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            gap: 20px;
            margin: 20px 0;
        }
        #main-content {
            padding: 20px 0;
        }

        #main-content h1 {
            font-size: 30px;
            text-align: center;
            padding: 5px;
            margin-bottom: 15px;
        }
        @media screen and (max-width: 1050px) {
            .about-text{
                width: 90%;
            }
            .about img{
                width: 90%;
            }
        }
        @media screen and (max-width: 790px){
            .about {
                grid-template-columns: 1fr;
                gap: 20px;
            }
            .about-text{
                width: 90%;
            }
            .about img{
                width: 90%;
            }
            .grid-row {
                grid-template-columns: 1fr 1fr;
                gap: 20px;
                margin: 20px 0;
            }
        }
        @media screen and (max-width: 540px) {
            * {
                font-size: 14px;
            }
            .about {
                grid-template-columns: 1fr;
                gap: 20px;
            }
            .about-text{
                width: 90%;
            }
            .about img{
                width: 90%;
            }
            .grid-row {
                grid-template-columns: 1fr 1fr;
                gap: 20px;
                margin: 20px 0;
            }
        }
        @media screen and (max-width: 430px) {
            .grid-row {
                grid-template-columns: 1fr;
            }
            .about {
                grid-template-columns: 1fr;
            }
            .about-text{
                width: 90%;
            }
            .about img{
                width: 90%;
            }
        }

    </style>

    <main>
        <div class="container">
            <div class="description-about">
                <div class="about">
                    <img src="./foto-tim/tentang-kami.png">
                    <div class="about-text">
                        <h3>Tentang Kami</h3>
                        <p>Website Peduli Bencana merupakan website yang memberikan informasi dan layanan yang berkaitan dengan bencana yang terjadi. Di website ini terdapat panduan-panduan ketika terjadi bencana, serta memberikan kemudahan bagi mereka yang ingin menyalurkan kontribusi. </p>
                    </div>
                </div>
            </div>
            <h2>Tim Kami</h2>
            <div class="list-biodata grid-row">
                <div class="card">
                    <img src="./foto-tim/misha.png" class="card-img-top" alt="foto misha">
                    <div class="card-body">
                        <h5>Biodata</h5>
                        <table>
                            <tr>
                                <th>Nama</th>
                                <td>Mishabatuz Zolam</td>
                            </tr>

                            <tr>
                                <th>Universitas</th>
                                <td>Sekolah Tinggi Teknik Pati</td>
                            </tr>

                            <tr>
                                <th>Selengkapnya</th>
                                <td><a href="https://www.linkedin.com/in/mishabatuz-zolam-879100232/" target="_blank">My Linkedin</a></td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="card">
                    <img src="./foto-tim/anggi.png" class="card-img-top" alt="foto anggi">
                    <div class="card-body">
                        <h5 class="card-title">Biodata</h5>
                        <table>
                            <tr>
                                <th>Nama</th>
                                <td>Anggi Nurul Fitriyani Az-zahra</td>
                            </tr>

                            <tr>
                                <th>Universitas</th>
                                <td>Universitas Singaperbangsa Karawang</td>
                            </tr>

                            <tr>
                                <th>Selengkapnya</th>
                                <td><a href="https://www.linkedin.com/in/anggi-nurul-fitriyani-az-zahra-6a8732230/" target="_blank">My Linkedin</a></td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="card">
                    <img src="./foto-tim/annisya.png" class="card-img-top" alt="foto annisya">
                    <div class="card-body">
                        <h5 class="card-title">Biodata</h5>
                        <table>
                            <tr>
                                <th>Nama</th>
                                <td>Annisya Rahmadhanti</td>
                            </tr>

                            <tr>
                                <th>Universitas</th>
                                <td>Universitas PGRI Kanjuruhan Malang</td>
                            </tr>

                            <tr>
                                <th>Selengkapnya</th>
                                <td><a href="https://www.linkedin.com/in/annisya-rahmadhanti-504902203" target="_blank">My Linkedin</a></td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="card">
                    <img src="./foto-tim/isti.png" class="card-img-top" alt="foto isti">
                    <div class="card-body">
                        <h5 class="card-title">Biodata</h5>
                        <table>
                            <tr>
                                <th>Nama</th>
                                <td>Isti Azzah Sofiah</td>
                            </tr>

                            <tr>
                                <th>Universitas</th>
                                <td>Universitas Yarsi</td>
                            </tr>

                            <tr>
                                <th>Selengkapnya</th>
                                <td><a href="https://www.linkedin.com/in/isti-azzah-sofiah-124a59231/" target="_blank">My Linkedin</a></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </main>
      `;
  },

  async afterRender() {
    // test
  },
};

export default TentangKami;
