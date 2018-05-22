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

$(window).on('load', function() {
  $(".half").twentytwenty();
});



// Our Countries

var typed = new Typed('.countries', {
  strings: ["Our Countries!", "Australia Austria Canada Cyprus Croatia Dubai The Netherlands Germany Hungary Bali, Indonesia Ireland Malaysia New Zealand Qatar, Doha Spain South Africa Thailand United Kingdom."],
  typeSpeed: 120
});






