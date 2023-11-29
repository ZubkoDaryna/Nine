function changeVideo() {
    var videoSelector = document.getElementById('videoSelector');
    var videoSource = document.getElementById('videoSource');
    var myVideo = document.getElementById('myVideo');
    videoSource.src = videoSelector.value;
    myVideo.load();
}
function changeAudio() {
    var audioSelector = document.getElementById('audioSelector');
    var audioSource = document.getElementById('audioSource');
    var myAudio = document.getElementById('myAudio');
    audioSource.src = audioSelector.value; //змінюєм  src елемента для source
    myAudio.load();
    myAudio.play();
}