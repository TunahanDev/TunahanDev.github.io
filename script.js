$(window).scroll(function(){
    $('nav').toggleClass('scrolled',$(this).scrollTop()>150)
    $('li').toggleClass('scrolled',$(this).scrollTop()>150)
    $('span').toggleClass('scrolled',$(this).scrollTop()>150)
});
