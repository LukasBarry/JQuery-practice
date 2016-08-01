$('p').delay(5000).hide(200);

$('#butt').toggle(
  function() {
  $('div').fadeIn(600);
}, function() {
  $('div').fadeOut(600);
});
