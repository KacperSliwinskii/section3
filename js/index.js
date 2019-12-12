
var destinationType; //used to set what should be returned (image date OR file path to image for example)

document.addEventListener("deviceready",onDeviceReady,false);


function onDeviceReady() {

    //setup camera button click listener (shutter)
    $("#phonegapcamera").click(capturePhoto);

}
                               
cordova-plugin-camera                            

function capturePhoto() {
    console.log("capturePhoto");
    destinationType=navigator.camera.DestinationType;
	navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50, destinationType: destinationType.DATA_URL });
}
	
function onPhotoDataSuccess(imageData) {
    console.log("onPhotoDataSuccess");
	var image = document.getElementById('image');
	image.style.display = 'block';
	image.src = "data:image/jpeg;base64," + imageData;
}

function onFail(message) {
      alert('Failed because: ' + message);
}