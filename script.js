let mirror = document.getElementById("mirror");

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia( { video: true } )
    .then(function (stream) {
      mirror.srcObject = stream;
    })
    .catch (function (error) {
      console.log("Something went wrong");
    })
} else {
  alert("Sorry, Mirror isn't supported by your browser");
}
