  function processUser()
  {
//iamge from webcam
var dataImage = localStorage.getItem('imgData');
bannerImg = document.getElementById('tableBanner');
bannerImg.src = "data:image/png;base64," + dataImage;
//......
    var parameters = window.location.search.substring(1).split("&");
   var temp = parameters[0].split("=");
    var F = unescape(temp[1]);
var temp = parameters[1].split("=");
    var L = unescape(temp[1]);
temp = parameters[2].split("=");
    var A = unescape(temp[1]);
temp = parameters[3].split("=");
    var R = unescape(temp[1]);
temp = parameters[4].split("=");
    var str = unescape(temp[1]);
    var AD=str.split('+').join(' ');
temp = parameters[5].split("=");
    var E = unescape(temp[1]);
temp = parameters[6].split("=");
    var M = unescape(temp[1]);
    document.getElementById("Fname").innerHTML = F;
    document.getElementById("Lname").innerHTML = L; 
    document.getElementById("Age").innerHTML = A;
    document.getElementById("Radio").innerHTML = R;
    document.getElementById("Address").innerHTML = AD;
    document.getElementById("Mobile").innerHTML = E;
document.getElementById("Mobile").innerHTML = M;
}
