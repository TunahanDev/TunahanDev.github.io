$(window).scroll(function(){
    $('nav').toggleClass('scrolled',$(this).scrollTop()>30)
    
    
});
var typed = new Typed(".typing",{
    strings :["Web Developer.","IT Student.","Photographer.","Bike Addict.",],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
});
var typed = new Typed(".typing-2",{
    strings :["Web Developer.","IT Student.","Photographer.","Bike Addict.",],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
});