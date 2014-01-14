// jQuery
$(document).ready(function() {
  setColor();
  $(".item").click(function() {
    // this vs. $(this)
    // $(this).css("background", "green");
    // $(".item").css("background", "green");
    // this.style.background = "green";
    $(this).toggleClass("isGreen");
    setColor();
  });
 
});
 
function setColor() {
  $(".item").css("background", "yellow");
  $(".item.isGreen").css("background", "gray");
}


 
// Pure JS
document.body.onload = function() {
  document.querySelector("#one").style.background = "yellow";
}

