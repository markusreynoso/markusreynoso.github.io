$(document).ready(function () {
    // Sound effect when hovering on the role cards
    const cardSound = new Audio("assets/audio/card-sound.mp3")
    $(".role-card").on("mouseenter", function () {
        cardSound.currentTime = 0;
        cardSound.play();
    })


    // Displaying images on the cursor when hovering on other projects
    $('.others-row').on('mouseenter', function () {
        if (window.innerWidth >= 768) {
            const imgSrc = $(this).data('image');
            $('#cursor-image').attr('src', `assets/images/${imgSrc}`).removeClass('hidden');
        }
    });

    $('.others-row').on('mousemove', function (e) {
        if (window.innerWidth >= 768) {
            $('#cursor-image').css({
                left: (e.clientX + 30) + 'px',
                top: (e.clientY - 50) + 'px'
            });
        }
    });

    $('.others-row').on('mouseleave', function () {
        if (window.innerWidth >= 768) {
            $('#cursor-image').addClass('hidden');
        }
    });


})