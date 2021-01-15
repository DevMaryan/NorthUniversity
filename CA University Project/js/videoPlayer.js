const video = document.getElementById('video');
const playVideo = document.getElementById('playVideo');
const stop = document.getElementById('stopVideo');
const progressVideo = document.getElementById('progressVideo');
const timestamp = document.getElementById('timestamp');
const timestampStart = document.getElementById('timestampStart');
// Play & pause video
function toggleVideoStatus(){
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
}
// Update play/pause icon
function updatePlayIcon(){
    if(video.paused){
        playVideo.innerHTML = '<i class = "fa fa-play blue px fa-2x"></i>';
    }else{
        playVideo.innerHTML = '<i class = "fa fa-pause px fa-2x"></i>';
    }
}
// Update Progress & Timestamp
function updateProgress(){
    progressVideo.value = (video.currentTime / video.duration) * 100;

    // Get minutes
    let mins = Math.floor(video.currentTime / 60);
    if (mins < 10){
        mins = '0' + String(mins);
    }
    // Get seconds
    let secs = Math.floor(video.currentTime % 60);
    if (secs < 10){
        secs = '0' + String(secs);
    }
    
    timestamp.innerHTML = `${mins}:${secs}`;
    // Get Full-Length
    let Lmins = Math.floor(video.duration / 60);
    if (Lmins < 10){
        Lmins = '0' + String(Lmins);
    }
    // Get seconds
    let Lsecs = Math.floor(video.duration % 60);
    if (Lsecs < 10){
        Lsecs = '0' + String(Lsecs);
    }
    v = Math.floor(video.duration);
    timestampStart.innerHTML = `${Lmins}:${Lsecs}`;
}
// Set video time to progress
function setVideoProgress(){
    video.currentTime = (+progressVideo.value * video.duration) / 100;
}
// Stop video
function stopVideo(){
    video.currentTime = 0;
    video.pause();
}


// Event Listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

playVideo.addEventListener('click', toggleVideoStatus);
stop.addEventListener('click', stopVideo);
progressVideo.addEventListener('change', setVideoProgress);

























