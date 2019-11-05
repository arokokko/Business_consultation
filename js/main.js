$(function(){
    $('.slider_wrapper, .news_slider').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        infinite: false
    });

    $('#header_menu-bar').on('click', function(){
        $('ul.menu').slideToggle();
    })

    

});