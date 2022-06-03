const DonaturDetail = {
  async render() {
    return `
    <main class="container">
    <div class="donatur-detail">
      <div class="back-banner box-shadow-bt">
        <div class="title-all">
            <h2 class="font-white">Pembayaran Donasi</h2>   
        </div>
    </div>
    <div class="container-fluid">
        <div class="section" style="margin-bottom: 8%;">
            <div class="mt-inner">
                <div>
                    <div class="alert alert-info" role="alert">
                        <a>Terima kasih atas donasinya <b>Peduli Bencana</b></a> 
                    </div>
                    <div class="row">
                        <div class="col-md-7">
                            <div class="alert alert-success">
                                <h4><b>Tata cara pembayaran :</b></h4>
                                <li>Mohon Melakukan pembayaran sesuai <b> Nominal Donasi </b> yang tercantum list disamping (transfer bank)</li>
                                <li>Setelah melakukan Transfer, konfirmasi segera setelah pembayaran dengan mencantumkan bukti <b> Foto & Kode Transaksi </b>melalui whatsapp</li>
                                <li>Whatsapp : 0822 3000 0909</li>
                                <br>
                                <h4><b>Daftar Rekening Bank :</b></h4>
                                <li>BSM       :  708 2604 191    (PEDULI BENCANA )</li>
                                <br>
                                <li>MUAMALAT  :  701 0055 055    (PEDULI BENCANA )</li>
                                <br>
                                <li>MANDIRI   :  142 000 6977 291 (PEDULI BENCANA )</li>
                                <br>
                                <li>back      :  5200 242 400    (PEDULI BENCANA )</li>
                            </div>
    </main>
    `;
  },

  async afterRender() {
    // test
  },
};

export default DonaturDetail;
