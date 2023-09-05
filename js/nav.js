window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sec2 = document.getElementById("sec2");
var margin = document.getElementById("free");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    margin.classList.add("margin");
  } 
  else {
    navbar.classList.remove("sticky");
    margin.classList.remove("margin");
  }
}



// NOTICE

