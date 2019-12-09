$(document).ready(function(){
    $(".close").click(function(){
        $("#alert-box").addClass("d-none");
    });

    $(".search").click(function(){
        $(".search-panel").toggleClass("d-block")
    });
});