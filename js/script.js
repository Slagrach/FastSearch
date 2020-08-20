$(document).ready(function () {
    /** ************************* <SLICK-slider.pug-start> ************************* **/

    $('.slider-items').slick({
        slidesToShow: 4,
        infinite: false,
        arrows: false,
    });

    $(".slider-top__arrows-prev").on("click", function (event) {
        event.preventDefault();

        $('.slider-items').slick("slickPrev");
    });

    $(".slider-top__arrows-next").on("click", function (event) {
        event.preventDefault();

        $('.slider-items').slick("slickNext");
    });
    
    /** ************************* </SLICK-slider.pug-end> ************************* **/
    
    /** ************************* <SLICK-about-slider.pug-start> ************************* **/

    /*-------slid1--------*/

    $('.slid-items1').slick({
        infinite: false,
        arrows: false,
    });

    $(".slid-top__arrows-prev1").on("click", function (event) {
        event.preventDefault();

        $('.slid-items1').slick("slickPrev");
    });

    $(".slid-top__arrows-next1").on("click", function (event) {
        event.preventDefault();

        $('.slid-items1').slick("slickNext");
    });

    /*-------slid2--------*/

    $('.slid-items2').slick({
        infinite: false,
        arrows: false,
    });

    $(".slid-top__arrows-prev2").on("click", function (event) {
        event.preventDefault();

        $('.slid-items2').slick("slickPrev");
    });

    $(".slid-top__arrows-next2").on("click", function (event) {
        event.preventDefault();

        $('.slid-items2').slick("slickNext");
    });
    
    /** ************************* </SLICK-about-slider.pug-end> ************************* **/

    /** ************************* <SLICK-blog-slider.pug-start> ************************* **/

    $('.blog-slider').slick({
        infinite: false,
        arrows: false,
    });

    $(".blog-arrows__prev").on("click", function (event) {
        event.preventDefault();

        $('.blog-slider').slick("slickPrev");
    });

    $(".blog-arrows__next").on("click", function (event) {
        event.preventDefault();

        $('.blog-slider').slick("slickNext");
    });

    /** ************************* </SLICK-blog-slider-end> ************************* **/

    /** ************************* <YANDEXMAP-start> ************************* **/

    let map;

    function initMap() {
        map = new ymaps.Map("yandexmap", {
            center: [56.039017, 92.894853],
            zoom: 16
        });
    }

    ymaps.ready(initMap);

    /** ************************* </YANDEXMAP-end> ************************* **/
});