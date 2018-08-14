$(document).ready(function(){
  $(".new-tweet textarea").on("keypress", function(event){
    console.log(140 - this.value.length);
  });
});