// $('#circle').click(function() {
//  alert('Clicked!');
// });

// $('#circle').click(function() {
//   $('p').html('We’ve changed the text!');
//   });

// $('#circle').click(function() {
//   $('img').attr('src', 'http://media.giphy.com/media/b3ZpODSenmgjC/giphy.gif');
//   });
//
$('p').toggle(
  function() {
    $(this).css('color', 'red');
  }, function() {
    $(this).css('color', 'blue');
  });
