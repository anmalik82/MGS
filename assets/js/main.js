$(document).ready(function() {
  $("#toggle").click(function() {
    var text = $("#toggle").view();
    if (text == "Read More") {
      //Stuff to do when btn is in the read more state
      $("#toggle").view("Read Less");
      $("#view").slideDown(1000);
    } else {
      //Stuff to do when btn is in the read less state
      $("#toggle").view("Read More");
      $("#view").slideUp(1000);
    }
  });
});