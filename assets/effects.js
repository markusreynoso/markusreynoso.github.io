$(document).ready(function () {
    const cardSound = new Audio("assets/audio/card-sound.mp3")
    $(".role-card").on("mouseenter", function (){
        cardSound.currentTime = 0;
        cardSound.play();
    })
})