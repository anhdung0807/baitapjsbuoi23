function tinhNgay() {
  //   console.log("tinh ngay");

  var soBatKyTag = document.getElementById("kyso");
  console.log(kyso.value);

  //   Tinh ky so hang don vi va hang chuc
  var hangDonvi = kyso.value % 10;
  var hangChuc = Math.floor(kyso.value / 10) % 10;

  // tinh tong 2 ky so
  var kySoTag = hangDonvi + hangChuc;
  console.log(kySoTag);

  // xuat gia tri ra man hinh

  document.getElementById(
    "result"
  ).innerHTML = `<h2 class="text-lg font-bold mt-3  p-3 "> Tổng 2 ký số: ${kySoTag}`;
}
