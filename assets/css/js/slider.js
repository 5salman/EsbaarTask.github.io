$(document).ready(function() {
 
    $("#owl-demo").owlCarousel({
      navigation : true,
      //autoplay:true,
      items : 1, 
      loop:true,
      nav:true,
      //navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
      navText : ["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
      animateOut: 'fadeOut',
         animateIn: 'fadeIn',
    });
   
   });