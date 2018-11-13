$(document).ready(function(){
  var audio = $("audio")[0];

  $(".dash .bg").on("click","p", function() {
    audio.play();
  });
});
