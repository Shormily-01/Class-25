//preloader js start
$(window).on('load' , function() {
    $('.preloader').fadeOut(1000);
 })
 //preloader js end
 //header animation js start
 $(window).on('scroll' , function(){
    var scrollSize = $(window).scrollTop()
 
    if(scrollSize > 75){
       $('.header').addClass('active_menu')
    }
    else {
       $('.header').removeClass('active_menu') 
    }
  })
//header animation js end
//banner slider js start
$('.banner_slider').slick({
    prevArrow:false,
    nextArrow:false,
    dots:true,
    dotsClass:'banner_slider_dot',
    speed:500,
  });
//banner slider js end
//typed js start 
var typed = new Typed('.type_plug', {
   strings: [
      'Orem ipsum dolor sit amet, consectetur', 
   ],
      typeSpeed: 30,
      loop: false
 });
//typed js section end
//back to top js arrow start
$(function () {

    $(window).on('scroll', function () {
 
       var scrollSize = $(window).scrollTop()
 
       if (scrollSize > 600) {
          $('#backToTop').css({
             bottom: '40px',
             opacity:1
          });
       } else {
          $('#backToTop').css({
             bottom: '500px',
             opacity:0
          });
       }
    })

    $('#backToTop').on('click', function () {
        $('html, body').animate({
           scrollTop:0,
        },1000)
     })
})
//back to top js arrow end
//venobox js start
new VenoBox({
   spinner:'swing',
   spinColor:'#02918c',
   titleattr:'title',
   titlePosition:	'top',
});
//venobox js end

