//--------------------
// GET USER MEDIA CODE
//--------------------
    navigator.getUserMedia = ( navigator.getUserMedia ||
                       navigator.webkitGetUserMedia ||
                       navigator.mozGetUserMedia ||
                       navigator.msGetUserMedia);

var video;
var webcamStream;
var canvas, ctx;
     
function init() {
  // Get the canvas and obtain a context for
  // drawing in it
  canvas = document.getElementById("myCanvas");
  ctx = canvas.getContext('2d');
mirror = document.getElementById('mirror');
}

function startWebcam() {
if (navigator.getUserMedia) {
   navigator.getUserMedia (

      // constraints
      {
         video: true,
         audio: false
      },

      // successCallback
      function(localMediaStream) {
          video = document.querySelector('video');
         video.src = window.URL.createObjectURL(localMediaStream);
         webcamStream = localMediaStream;
      },

      // errorCallback
      function(err) {
         console.log("The following error occured: " + err);
      }
   );
} else {
   console.log("getUserMedia not supported");
}  
}
      
      function stopWebcam() {
      webcamStream.stop();
      }
//---------------------
// TAKE A SNAPSHOT CODE
//---------------------

function snapshot() {
   // Draws current image from the video element into the canvas
 var image=ctx.drawImage(video, 0,0, canvas.width, canvas.height);
dataURL = canvas.toDataURL("image/png");
imgData = dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
 
localStorage.setItem("imgData", imgData);
}
