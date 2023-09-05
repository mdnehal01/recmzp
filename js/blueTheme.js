function blueThemeOn(){
    navbar.style.backgroundColor="#04345C";
    document.getElementById("logo-nav").style.backgroundColor="#04345C";
    document.getElementById("logo-nav").style.border="none";
    document.getElementById("rajkiya").style.color="white";
    slider.style.backgroundColor="aliceblue";
    document.getElementById("col-notice").style.border="2px solid #04345C";
    document.getElementById("col-buttons").style.border="2px solid #04345C";


    
    // var btn = document.querySelectorAll(".btn-14");
    // btn.forEach(butt => {
    //     butt.style.background="#145DA0";
    // });


// dropdown

var linkNav = document.querySelectorAll(".nav-link");

    linkNav.forEach(element => {
              element.addEventListener('mouseover', () => {
    element.style.backgroundColor = '#1e77bd';
  });

  element.addEventListener('mouseout', () => {
    element.style.backgroundColor = '';
  });
    });

var link = document.querySelectorAll(".dropdown-item");

    link.forEach(element => {
              element.addEventListener('mouseover', () => {
    element.style.backgroundColor = '#1e77bd';
  });

  element.addEventListener('mouseout', () => {
    element.style.backgroundColor = '';
  });
    });


    for(var i=0; i<=9; i++){
        document.querySelectorAll('.dropdown-menu')[i].style.animation="dropdownAnimateBlue 0.5s ease forwards";
    }



// Marquee

    free.style.backgroundColor="aliceblue";
    document.getElementsByClassName("marquee")[0].style.border="2px dashed #1E77BD";

    var marq = document.querySelectorAll(".marq-a");
    marq.forEach(marqu => {
        marqu.style.color="#10564F";
    }); //marquee end 


document.getElementById("about-us-section").style.backgroundColor="#04345C";
document.getElementsByClassName("about-us-info-a")[0].style.color="#04345C";

var aboutUsInfoA = document.getElementsByClassName("about-us-info-a")[0];

aboutUsInfoA.addEventListener("mouseover", function(){
    document.getElementsByClassName("about-us-info-a")[0].style.color="#fff";
})

aboutUsInfoA.addEventListener("mouseout", function(){
    document.getElementsByClassName("about-us-info-a")[0].style.color="#04345C";
})


document.querySelectorAll(".history-info h2")[0].style.color="#04345C";
document.querySelectorAll(".history-info p")[0].style.color="#04345C";
document.querySelectorAll(".history-info a")[0].style.backgroundColor="#04345C";

profile.style.backgroundColor="#04345c";

document.querySelectorAll(".testimonial-name")[0].style.background="#04345C";
document.querySelectorAll(".testimonial-name")[1].style.background="#04345C";

document.querySelectorAll(".testimonial-name")[2].style.background="#04345C";
document.querySelectorAll(".testimonial-name")[3].style.background="#04345C";

document.querySelectorAll(".testimonial-name")[4].style.background="#04345C";
document.querySelectorAll(".testimonial-name")[5].style.background="#04345C";
document.querySelectorAll(".testimonial-name")[6].style.background="#04345C";
document.querySelectorAll(".testimonial-name")[7].style.background="#04345C";

document.querySelectorAll(".testimonial-name")[8].style.background="#04345C";
// document.querySelectorAll(".testimonial-name")[9].style.background="#04345C";

// document.querySelectorAll(".testimonial-name")[10].style.background="#04345C";
// document.querySelectorAll(".testimonial-name")[11].style.background="#04345C";

document.getElementById("testi-h1").style.color="#04345c";

sec3.style.backgroundColor="#04345C";

const mediaQuery = window.matchMedia('(max-width: 1353px)');


  if (mediaQuery.matches) {
    document.getElementsByClassName("about-us-info")[0].style.backgroundColor = '#04345c99';
  } else {
    document.getElementsByClassName("about-us-info")[0].style.backgroundColor = '#04345c';
  }

document.getElementsByClassName("footer")[0].style.backgroundColor="#04345c";

} //function closing







// ////////////////////////////////////


function defaultTheme(){
        navbar.style.backgroundColor="";
    document.getElementById("logo-nav").style.backgroundColor="";
    document.getElementById("logo-nav").style.border="";
    document.getElementById("rajkiya").style.color="";
    slider.style.backgroundColor="";
    document.getElementById("col-notice").style.border="";
    document.getElementById("col-buttons").style.border="";


    
    // var btn = document.querySelectorAll(".btn-14");
    // btn.forEach(butt => {
    //     butt.style.background="#145DA0";
    // });


// dropdown

var linkNav = document.querySelectorAll(".nav-link");

    linkNav.forEach(element => {
              element.addEventListener('mouseover', () => {
    element.style.backgroundColor = '';
  });

  element.addEventListener('mouseout', () => {
    element.style.backgroundColor = '';
  });
    });

var link = document.querySelectorAll(".dropdown-item");

    link.forEach(element => {
              element.addEventListener('mouseover', () => {
    element.style.backgroundColor = '';
  });

  element.addEventListener('mouseout', () => {
    element.style.backgroundColor = '';
  });
    });


    for(var i=0; i<=9; i++){
        document.querySelectorAll('.dropdown-menu')[i].style.animation="";
    }



// Marquee

    free.style.backgroundColor="";
    document.getElementsByClassName("marquee")[0].style.border="";

    var marq = document.querySelectorAll(".marq-a");
    marq.forEach(marqu => {
        marqu.style.color="";
    }); //marquee end 


document.getElementById("about-us-section").style.backgroundColor="";
document.getElementsByClassName("about-us-info-a")[0].style.color="";

var aboutUsInfoA = document.getElementsByClassName("about-us-info-a")[0];

aboutUsInfoA.addEventListener("mouseover", function(){
    document.getElementsByClassName("about-us-info-a")[0].style.color="";
})

aboutUsInfoA.addEventListener("mouseout", function(){
    document.getElementsByClassName("about-us-info-a")[0].style.color="";
})


document.querySelectorAll(".history-info h2")[0].style.color="";
document.querySelectorAll(".history-info p")[0].style.color="";
document.querySelectorAll(".history-info a")[0].style.backgroundColor="";

profile.style.backgroundColor="";

document.querySelectorAll(".testimonial-name")[0].style.background="";
document.querySelectorAll(".testimonial-name")[1].style.background="";

document.querySelectorAll(".testimonial-name")[2].style.background="";
document.querySelectorAll(".testimonial-name")[3].style.background="";

document.querySelectorAll(".testimonial-name")[4].style.background="";
document.querySelectorAll(".testimonial-name")[5].style.background="";
document.querySelectorAll(".testimonial-name")[6].style.background="";
document.querySelectorAll(".testimonial-name")[7].style.background="";

document.querySelectorAll(".testimonial-name")[8].style.background="";
// document.querySelectorAll(".testimonial-name")[9].style.background="";

// document.querySelectorAll(".testimonial-name")[10].style.background="";
// document.querySelectorAll(".testimonial-name")[11].style.background="";

document.getElementById("testi-h1").style.color="";

sec3.style.backgroundColor="";

const mediaQuery = window.matchMedia('(max-width: 1353px)');


  if (mediaQuery.matches) {
    document.getElementsByClassName("about-us-info")[0].style.backgroundColor = '';
  } else {
    document.getElementsByClassName("about-us-info")[0].style.backgroundColor = '';
  }

  document.getElementsByClassName("footer")[0].style.backgroundColor="";
}



