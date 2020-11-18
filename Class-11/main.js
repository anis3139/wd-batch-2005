// document.getElementById("paragraph").style.color="red";
// document.getElementById("paragraph").style.backgroundColor="blue";
// document.getElementById("paragraph").style.fontSize="20px";


// document.querySelector(".maindiv .para").innerHTML="Hello World";
// document.querySelectorAll(".maindiv .para").style.color="red";


// var button=document.querySelector("#btn");

// button.style.backgroundColor="blue";


var button = document.getElementById("btn");
var para= document.getElementById("para");


var isShow=false;

button.addEventListener('click', function() {
   if (isShow) {
    para.style.display="none" ;
    isShow=false;
    button.innerHTML="Show";
   }else{
      para.style.display="block" ;
      isShow=true;
      button.innerHTML="Hide";

   }
});



$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    autoplay:true,
    autoplayHoverPause:false,
    autoplaySpeed:1000,
    autoplayTimeout:1000,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:true,
            loop:true
        }
    }
    
})