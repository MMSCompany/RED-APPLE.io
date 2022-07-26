$(function(){
    $('.menu-in-button').on('click', function(){
        $('.menu-in .menu-good').toggleClass('menu-post');
    });
})
$(function(){
    
    $('.top').click(function(){
        $('html, body').animate({scrollTop: 0});
    });
})
$(window).scroll(function(){
    if($(this).scrollTop() > 1000){
        $('.top').fadeIn(500);
    }
    else{
        $('.top').fadeOut(500);
    }
})