import QRCode from 'qrcode';
import $ from 'zepto-webpack';

export const initQRCode = (mixinURL) => {
  QRCode.toCanvas(
    document.getElementById('qrcode'),
    mixinURL,
    {
      errorCorrectionLevel: "H",
      margin: 0,
      width: 140
    }
  );
  QRCode.toCanvas(
    document.getElementById('qrcode-modal'),
    mixinURL,
    {
      errorCorrectionLevel: "H",
      margin: 0,
      width: 188
    }
  );
  $('#qrcode-modal-btn').on('click', function() {
    $('.qrcode-modal').toggleClass('active', true);
  });
  $('.qrcode-modal').on('click', function() {
    $(this).toggleClass('active', false);
  });
}