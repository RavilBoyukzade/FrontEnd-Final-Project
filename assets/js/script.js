$(document).ready(function () {
    // close discount section
    $(".close").click(function () {
        $("#alert-box").addClass("d-none");
    });
// serch btn
    $(".search").click(function () {
        $(".search-panel").toggleClass("d-block")
    });
// scroll to nav bar fix
    $(window).on('scroll' ,function () {
        var scroll = $(window).scrollTop();
        if(scroll >= 100){
            $("nav").addClass("nav-fix");
        }
        else{
            $("nav").removeClass("nav-fix");
        }
    });

    if ($("#carusel-slide").length) {
        $("#carusel-slide").hover(function () {
            $(this).find(".carousel-control-prev-icon").addClass("d-block");
            $(this).find(".carousel-control-next-icon").addClass("d-block")

        }, function () {
            $(this).find(".carousel-control-prev-icon").removeClass("d-block");
            $(this).find(".carousel-control-next-icon").removeClass("d-block");
        });
    }

    if ($(".owl-carousel").length) {
        $('.owl-carousel').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
        });
    }
   
// carousel
    $('.cat-owl-carousel').slick({
        arrows:false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 4,
        autoplay:true
    });
// counter
    $(".counter").counterUp({
        delay: 10,
        time: 1000
    });
// Isotope
    $(".gallery-item").isotope({
        itemSelector:".item",
        layoutMode:"fitRows"
    });
    $(".buttons ul li a").click(function(){
        $(".buttons ul li a").removeClass("active");
        $(this).addClass("active");

        var selector =$(this).attr("data-filter");
        $(".gallery-item").isotope({
            filter: selector
        });
        return false;
    });
    // student say corusel
    $('.student-owl-carousel').slick({
        arrows: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true
    });
// our client corusel
    $('.client-owl-carousel').slick({
        arrows: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true
    });

    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 150) {
            $(".scrollup").removeClass("d-none");
        }
        else {
            $(".scrollup").addClass("d-none");
        }
    });



});

AOS.init({
    duration: 1200,
});    