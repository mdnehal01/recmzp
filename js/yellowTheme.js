function greenThemeOn(){
    navbar.style.backgroundColor="#3D550C";
    document.getElementById("logo-nav").style.backgroundColor="#3D550C";
    document.getElementById("logo-nav").style.border="none";
    document.getElementById("rajkiya").style.color="white";
    slider.style.backgroundColor="#D1E2C4";
    document.getElementById("col-notice").style.border="2px solid #3D550C";
    document.getElementById("col-buttons").style.border="2px solid #3D550C";


    
    // var btn = document.querySelectorAll(".btn-14");
    // btn.forEach(butt => {
    //     butt.style.background="#145DA0";
    // });


// dropdown

var linkNav = document.querySelectorAll(".nav-link");

    linkNav.forEach(element => {
              element.addEventListener('mouseover', () => {
    element.style.backgroundColor = '#95B250';
  });

  element.addEventListener('mouseout', () => {
    element.style.backgroundColor = '';
  });
    });

var link = document.querySelectorAll(".dropdown-item");

    link.forEach(element => {
              element.addEventListener('mouseover', () => {
    element.style.backgroundColor = '#95B250';
  });

  element.addEventListener('mouseout', () => {
    element.style.backgroundColor = '';
  });
    });


    for(var i=0; i<=9; i++){
        document.querySelectorAll('.dropdown-menu')[i].style.animation="dropdownAnimateGreen 0.5s ease forwards";
    }



// Marquee

    free.style.backgroundColor="#D1E2C4";
    document.getElementsByClassName("marquee")[0].style.border="2px dashed #95B250";

    var marq = document.querySelectorAll(".marq-a");
    marq.forEach(marqu => {
        marqu.style.color="#10564F";
    }); //marquee end 


document.getElementById("about-us-section").style.backgroundColor="#3D550C";
document.getElementsByClassName("about-us-info-a")[0].style.color="#3D550C";

var aboutUsInfoA = document.getElementsByClassName("about-us-info-a")[0];

aboutUsInfoA.addEventListener("mouseover", function(){
    document.getElementsByClassName("about-us-info-a")[0].style.color="#fff";
})

aboutUsInfoA.addEventListener("mouseout", function(){
    document.getElementsByClassName("about-us-info-a")[0].style.color="#3D550C";
})


document.querySelectorAll(".history-info h2")[0].style.color="#3D550C";
document.querySelectorAll(".history-info p")[0].style.color="#3D550C";
document.querySelectorAll(".history-info a")[0].style.backgroundColor="#3D550C";

profile.style.backgroundColor="#3D550C";

document.querySelectorAll(".testimonial-name")[0].style.background="#3D550C";
document.querySelectorAll(".testimonial-name")[1].style.background="#3D550C";

document.querySelectorAll(".testimonial-name")[2].style.background="#3D550C";
document.querySelectorAll(".testimonial-name")[3].style.background="#3D550C";

document.querySelectorAll(".testimonial-name")[4].style.background="#3D550C";
document.querySelectorAll(".testimonial-name")[5].style.background="#3D550C";
document.querySelectorAll(".testimonial-name")[6].style.background="#3D550C";
document.querySelectorAll(".testimonial-name")[7].style.background="#3D550C";

document.querySelectorAll(".testimonial-name")[8].style.background="#3D550C";
// document.querySelectorAll(".testimonial-name")[9].style.background="#3D550C";

// document.querySelectorAll(".testimonial-name")[10].style.background="#3D550C";
// document.querySelectorAll(".testimonial-name")[11].style.background="#3D550C";

document.getElementById("testi-h1").style.color="#3D550C";

sec3.style.backgroundColor="#3D550C";

const mediaQuery = window.matchMedia('(max-width: 1353px)');


  if (mediaQuery.matches) {
    document.getElementsByClassName("about-us-info")[0].style.backgroundColor = '#3D550C99';
  } else {
    document.getElementsByClassName("about-us-info")[0].style.backgroundColor = '#3D550C';
  }
document.getElementsByClassName("footer")[0].style.backgroundColor="#3d550c";
} //function closing




