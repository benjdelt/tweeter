$(function() {

  // Compose button slide new-tweet form up or down

  $('#compose').on('click', function() {
    $('.new-tweet').slideToggle();
    if($("textarea[name='text']").is(':visible')) {
      $("textarea[name='text']").focus();
    }  
  })
})