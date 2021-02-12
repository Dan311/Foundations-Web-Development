$(document).ready(function() {
    $("a").hover(function() {
        $(this).animate({top: '1em'},2);
        $(".paw").toggleClass("show");
        var position = $(this).position();
        $("#paw").animate({left: position.left}6);
        $("#paw").animate({bottom: position.top-3}6);
    });
    $("a").mouseout(function() {
        $(this).animate({top: '0px'},3);
    });
})
