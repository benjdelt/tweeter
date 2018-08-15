$(document).ready(function(){
  // Select text area
  $(".new-tweet textarea").on("keyup", function(event){
    // Update counter base on text area inpout length
    const count = 140 - this.value.length;
    // Update counter display
    $(this).siblings(".counter").html(count);
    if (count < 0) {
      $(this).siblings(".counter").addClass("negative");
    } else {
      $(this).siblings(".counter").removeClass("negative");
    }
  });
});;