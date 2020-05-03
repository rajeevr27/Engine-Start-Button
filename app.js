$(document).ready(function(){
  const $audio = $("audio")[0];

  $(".dash .button").on("click","p", function() {
    $audio.play();
  });
});
