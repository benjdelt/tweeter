$(document).ready(function(){
  $(".new-tweet textarea").on("keyup", function(event){
    let count = 140 - this.value.length;
    $(this).siblings(".counter").html(count);
    if (count < 0) {
      $(this).siblings(".counter").addClass("negative");
    }
    if (count > 0) {
      $(this).siblings(".counter").removeClass("negative");
    }
  });

});