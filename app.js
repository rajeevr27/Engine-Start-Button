const audio = document.getElementsByTagName("audio")[0];

const active = document.querySelector(".cta-button p");

active.addEventListener("click", function(){

  audio.play();

});
