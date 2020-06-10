const audio = document.getElementsByTagName("audio")[0];

const active = document.querySelector(".dash p");

active.addEventListener("click", function(){

  audio.play();

});
