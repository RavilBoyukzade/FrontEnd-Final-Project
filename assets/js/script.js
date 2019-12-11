$(document).ready(function () {
    $(".close").click(function () {
        $("#alert-box").addClass("d-none");
    });

    $(".search").click(function () {
        $(".search-panel").toggleClass("d-block")
    });

    $(window).on('scroll' ,function () {
        var scroll = $(window).scrollTop();
        console.log(scroll);
        if(scroll >= 100){
            $("nav").addClass("nav-fix");
        }
        else{
            $("nav").removeClass("nav-fix");
        }
    });

    $('.owl-carousel').slick({
        arrows:false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 4
    });
});