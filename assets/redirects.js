$(document).ready(function () {
    $("#linkedin-icon").click(function () {
        window.open("https://www.linkedin.com/in/markus-reynoso/", "_blank", "noopener");
    })

    $("#github-icon").click(function () {
        window.open("https://github.com/markusreynoso", "_blank", "noopener");
    })

    $("#behance-icon").click(function () {
        window.open("https://www.behance.net/markus_designs", "_blank", "noopener");
    })

    $(".thumbnail-container, .project-title").click(function(){
        const url = $(this).data("url")
        console.log(url)
        window.open(url, "_blank", "noopener");
    })
})