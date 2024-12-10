// Tinh dien tich

function tinhToan() {
  //   console.log("tinh toan");

  var chieuDaiTag = document.getElementById("chieudai");
  var chieuRongTag = document.getElementById("chieurong");

  // gan bien va tinh dien tich

  var dienTichTag = chieudai.value * chieurong.value;
  console.log(dienTichTag);
  var chuViTag = chieudai.value * 2 + chieurong.value * 2;
  console.log(chuViTag);

  // xuat ra so lieu ra man hinh

  document.getElementById(
    "result"
  ).innerHTML = `<h2 class="text-lg font-bold mt-3  p-3 
  "> Diện Tích HCN : ${dienTichTag} <br />  <br />   Chu Vi HCN : ${chuViTag} </h2> `;
}
