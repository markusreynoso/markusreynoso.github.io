$(document).ready(function () {
    $("#coming-soon-effect").hover(
        function () {
            $(this).text("Research")
        },
        function () {
            $(this).text("Coming soon")
        }
    )
})