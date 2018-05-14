// below code is taken from typed.js

var typed = new Typed('.move', {
  strings: ["Hello World!", "Are you ready to explore the world?"],
  typeSpeed: 100
});

var typed = new Typed('.speed', {
  strings: ["Hello World!", "Are you ready to explore the world?"],
  typeSpeed: 100
});

var typed = new Typed('.action', {
  strings: ["Hello World!", "Are you ready to explore the world?"],
  typeSpeed: 100
});




  



// Readmore and readless

$(document).ready(function() {
  $("#toggleThis").click(function() {
    var elem = $("#toggle").span();
    if (elem == "Read More") {
      
      //Stuff to do when btn is in the read more state
      $("#toggleThis").span("Read Less");
      $("span").slideDown();
    } else {
      
      //Stuff to do when btn is in the read less state
      $("#toggleThis").span("Read More");
      $("span").slideUp();
    }
  });
});

