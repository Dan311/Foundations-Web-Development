$(function() {
    $("img").hover(function() {
        $(this).attr("style", "width:150px; height:150px")
    },function() {
        $(this).attr("style", "width:125px; height:125px")
    });
});

$(function() {
    $("table").hover(function() {
        $(this).attr("style", "color:red")
    },function() {
        $(this).attr("style", "color:black")
    });
});



