$(document).ready(function() {
    $growDiv = $('.grow');
    $growButton = $('.growbutton')
    $growDiv.hide();

    $('.growbutton').click(function() {
        $('.grow').slideToggle(500, "linear");
        $growButton.toggleClass('rotated');
    });
});