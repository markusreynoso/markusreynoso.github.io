$(document).ready(function () {
    // Redirect icons in the landing div
    $("#linkedin-icon").click(function () {
        window.open("https://www.linkedin.com/in/markus-reynoso/", "_blank", "noopener");
    })

    $("#github-icon").click(function () {
        window.open("https://github.com/markusreynoso", "_blank", "noopener");
    })

    $("#behance-icon").click(function () {
        window.open("https://www.behance.net/markus_designs", "_blank", "noopener");
    })

    $(".thumbnail-container, .project-title").click(function () {
        const url = $(this).data("url")
        window.open(url, "_blank", "noopener");
    })


    // Redirects in other projects
    $('.others-row').click(function () {
        const url = $(this).data('url');
        window.open(url, "_blank", "noopener");
    })
})