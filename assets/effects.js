$(document).ready(function () {
    $("#research-title").hover(
        function () {
            $(this).text("Research")
        },
        function () {
            $(this).text("Coming soon")
        }
    )

    const cardSound = new Audio("assets/audio/card-sound.mp3")
    $(".role-card").on("mouseenter", function (){
        cardSound.currentTime = 0;
        cardSound.play();
    })
})