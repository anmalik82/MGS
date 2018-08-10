  // carousel library code typed.js

for (let selector of ['.move', '.speed', '.action']) { 
    var typed = new Typed(selector,  { 
  strings: ["Hello World!", "Are you ready to explore the World?"], 
  typeSpeed: 100
});
}


$(document).ready(function(){
  
  //Slidetoggle on Home page

  $("#button_this1").click(function(){ 
            $('#span1').slideToggle('1000');      
  });
  
  $("#button_this2").click(function(){ 
            $('#span2').slideToggle('1000');      
  });
  
  $("#button_this3").click(function(){ 
            $('#span3').slideToggle('1000');      
  });
  
  // active class for navbar

  function makeActive(elem) {
    $(elem).addClass('active');
    $(elem).siblings().removeClass('active');
  }
  
  
  // Animations on scroll waypoints library code 
  
  $('.scroll').waypoint(function(direction) {
    $('.scroll').addClass('animated fadeIn');
  }, {
    offset: '80%'
  });
  
  
});


  // Library code for Google Maps

function initMap() {
    var myLatLng = {lat: 53.213548, lng: 5.800738};

    var map = new google.maps.Map(document.getElementById('map'), {
          center: myLatLng,
          zoom: 4
        });

        
    var marker = new google.maps.Marker({
          map: map,
          position: myLatLng,
          title: 'Hello World!'
        });
      }


