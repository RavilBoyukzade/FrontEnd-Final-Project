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
        console.log(scroll);
        if(scroll >= 100){
            $("nav").addClass("nav-fix");
        }
        else{
            $("nav").removeClass("nav-fix");
        }
    });
// carousel
    $('.owl-carousel').slick({
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

});