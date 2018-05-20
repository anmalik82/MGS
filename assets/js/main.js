// below code is taken from typed.js *****Home Page*****

var typed = new Typed('.move', {
  strings: ["Hello World!", "Are you ready to explore World?"],
  typeSpeed: 100
});

var typed = new Typed('.speed', {
  strings: ["Hello World!", "Are you ready to explore World?"],
  typeSpeed: 100
});

var typed = new Typed('.action', {
  strings: ["Hello World!", "Are you ready to explore World?"],
  typeSpeed: 100
});


//active class

// (function($) {
//     "use strict"; // Start of use strict

//     // jQuery for page scrolling feature - requires jQuery Easing plugin
//     $(document).on('click', 'a.page-scroll', function(event) {
//         var $anchor = $(this);
//         $('html, body').stop().animate({
//             scrollTop: ($($anchor.attr('href')).offset().top - 30)
//         }, 800, 'easeInOutExpo');
//         event.preventDefault();
//     });

//     // Highlight the top nav as scrolling occurs
//     $('body').scrollspy({
//         target: '.navbar-fixed-top',
//         offset: 100
//     });

//     // Closes the Responsive Menu on Menu Item Click
//     $('.navbar-collapse ul li a').click(function() {
//         $('.navbar-toggler:visible').click();
//     });

//     // Offset for Main Navigation
//     $('#navbar_mgs').affix({
//         offset: {
//             top: 50
//         }
//     })

// })(jQuery); // End of use strict



//Slidetoggle *****Home Page******

$(document).ready(function(){

  $("#button_this1").click(function(){ 
            $('#span1').slideToggle('1000');      
  });
  
  $("#button_this2").click(function(){ 
            $('#span2').slideToggle('1000');      
  });
  
  $("#button_this3").click(function(){ 
            $('#span3').slideToggle('1000');      
  });
  
});



// pictures slide

$(window).load(function() {
  $(".half").twentytwenty();
});










