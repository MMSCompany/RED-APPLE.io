$(function(){
    $('.menu-in-button').on('click', function(){
        $('.menu-in .menu-good').toggleClass('menu-post');
    });
})
$(function(){
    $('.main-middle-h2-1').on('click', function(){
        $('.main-middle-h2').removeClass('main-middle-black');
        $('.main-middle-h2-1').addClass('main-middle-black');
        $('.main-middle-in-2').addClass('main-middle-display-none');
        $('.main-middle-in-2-1').removeClass('main-middle-display-none');
    });
})
$(function(){
    $('.main-middle-h2-2').on('click', function(){
        $('.main-middle-h2').removeClass('main-middle-black');
        $(".main-middle-h2-2").addClass('main-middle-black');
        $(".main-middle-in-2").addClass('main-middle-display-none');
        $(".main-middle-in-2-2").removeClass('main-middle-display-none');
    });
})
$(function(){
    $('.main-middle-h2-0').on('click', function(){
        $('.main-middle-h2').removeClass('main-middle-black');
        $('.main-middle-h2-0').addClass('main-middle-black');
        $('.main-middle-in-2').addClass('main-middle-display-none');
        $('.main-middle-in-2-0').removeClass('main-middle-display-none');
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