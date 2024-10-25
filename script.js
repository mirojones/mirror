let mirror = document.getElementById("mirror");

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia( { video: true } )
    .then(function (stream) {
      mirror.srcObject = stream;
    })
    .catch (function (error) {
      alert("Please allow access to camera.");
    })
} else {
  alert("Sorry, Mirror isn't supported on this browser or device. Try updating to the latest version.");
}

function filters(sliderEl, filter) {
  document.documentElement.style.setProperty(`--${filter}`, sliderEl.value);
}
