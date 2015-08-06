  function processUser()
  {
//image from webcam
var dataImage = localStorage.getItem('imgData');
bannerImg = document.getElementById('tableBanner');
bannerImg.src = "data:image/png;base64," + dataImage;

//......
    var parameters = window.location.search.substring(1).split("&");
    var temp = parameters[0].split("=");
    var str1 = unescape(temp[1]);
    var Name = str1.split('+').join(' ');
    var temp = parameters[1].split("=");
    var str2 = unescape(temp[1]);
    var Fname = str2.split('+').join(' ');
    var temp = parameters[2].split("=");
    var Email = unescape(temp[1]);
    var temp = parameters[3].split("=");
    var str3 = unescape(temp[1]);
    var Address=str3.split('+').join(' ');
    temp = parameters[4].split("=");
    var Gender = unescape(temp[1]);
    temp = parameters[5].split("=");
    var Age = unescape(temp[1]);
    temp = parameters[6].split("=");
    var Joining = unescape(temp[1]);
    

    document.getElementById("name").innerHTML = Name;
    document.getElementById("fname").innerHTML = Fname; 
    document.getElementById("address").innerHTML = Address;
    document.getElementById("age").innerHTML = Age;
    document.getElementById("email").innerHTML = Email;
    document.getElementById("joining").innerHTML = Joining;
}
