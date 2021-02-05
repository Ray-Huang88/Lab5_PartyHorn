// main.js

// TODO

//Input field that serves as the textual indicator of sound level
var volumeSlider = document.getElementById('volume-slider');
var volumeNumber = document.getElementById('volume-number');
var volumeImage = document.getElementById('volume-image');
var btn = document.getElementById("honk-btn");
btn.type = "button"; 

volumeSlider.addEventListener('input', function () {
    let volume = volumeSlider.value / 100;
    volumeNumber.value = volumeSlider.value; 
    document.getElementById("horn-sound").volume = volume; //Slider that serves visual controller for sound level
    btn.disabled = false;
    //Volume icon that change depending on the sound level
    if(volumeSlider.value > 66){
         volumeImage.src = "./assets/media/icons/volume-level-3.svg";
    }
    else if(volumeSlider.value > 33){
        volumeImage.src = "./assets/media/icons/volume-level-2.svg";
    }  
    else if(volumeSlider.value > 0){
        volumeImage.src = "./assets/media/icons/volume-level-1.svg";
    }
    else{
        volumeImage.src = "./assets/media/icons/volume-level-0.svg";
        btn.disabled = true;
    }
});

volumeNumber.addEventListener('input', function () {
    let volume = volumeNumber.value / 100;
    volumeSlider.value = volumeNumber.value;
    document.getElementById("horn-sound").volume = volume; //the sound level of the <audio> element should be changed when editing this input field
    btn.disabled = false;
    //Volume icon that change depending on the sound level
    if(volumeNumber > 66){
         volumeImage.src = "./assets/media/icons/volume-level-3.svg";
    }
    else if(volumeNumber > 33){
        volumeImage.src = "./assets/media/icons/volume-level-2.svg";
    }  
    else if(volumeNumber > 0){
        volumeImage.src = "./assets/media/icons/volume-level-1.svg";
    }
    else{
        volumeImage.src = "./assets/media/icons/volume-level-0.svg";
        btn.disabled = true;
    }
});

//Radio that switches between different horn sounds
var radioType = document.getElementById("audio-selection");
var radioSound = document.getElementsByName("radio-sound");    
var sound = document.getElementById("horn-sound")
var image = document.getElementById("sound-image")
radioType.addEventListener('input', function(){

    if(radioSound[0].checked){
        sound.src = "./assets/media/audio/air-horn.mp3";
        image.src = "./assets/media/images/air-horn.svg";
    }
    else if(radioSound[1].checked){
        sound.src = "./assets/media/audio/car-horn.mp3";
        image.src = "./assets/media/images/car.svg";
    }
    else{
        sound.src = "./assets/media/audio/party-horn.mp3";
        image.src = "./assets/media/images/party-horn.svg";
    }
});

//Button that plays the horn sound
btn.addEventListener("click", function(){
    sound.volume = volumeNumber.value / 100;
    sound.play();
});