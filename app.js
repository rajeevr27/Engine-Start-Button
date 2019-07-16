$(document).ready(function(){
  var audio = $("audio")[0];

  $(".dash .button").on("click","p", function() {
    audio.play();
  });
});
