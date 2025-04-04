$(function(){
    $(".slide li").hide();
    $(".slide li:nth-child(1)").show();
    setInterval(function(){
        $(".slide li:nth-child(1)").fadeOut(1000).next().fadeIn(1000).end().appendTo(".slide")
    },3000);

});