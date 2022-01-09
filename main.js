




let btn = document.querySelector(".language-btn");
let language = document.querySelector(".language");
let search = document.querySelector('.search');
let searchArea = document.querySelector('.search-area.shadow-lg');
let searchRm = document.querySelector('.search-none');
let login = document.querySelectorAll('.btn-login');
let loginAre = document.querySelector('.login-area');
let body = document.getElementsByTagName('html');
search.addEventListener("click",()=>{searchArea.classList.add("block")})
searchRm.addEventListener("click",()=>{searchArea.classList.remove("block")});

for(let i = 0;i<login.length;i++){
  login[i].addEventListener('click',()=>{
    loginAre.classList.toggle('block')
  })
}

//login.addEventListener("click",()=>{loginAre.classList.add("block")});
// body.addEventListener("click",()=>{loginAre.classList.remove("block")});
btn.addEventListener("click",()=>{language.classList.toggle("open")})

let dropDown = document.querySelector('.dropdown');
let acc = document.querySelectorAll('lebel');


var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
let toggle = document.querySelector('.toggle');
let item = document.querySelector('.item-wraper');
let login1 = document.querySelector('.login-li');
let show = false;


toggle.addEventListener('click',()=>{
    toggle.classList.toggle('open')
})


toggle.addEventListener('click',()=>{
   if(!show){
      item.classList.add('active')
        show = true;
    }
   else{
    item.classList.remove('active');
        show = false ;
    }
   });
// swiper slider
var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  loop:true,
  autoplaySpeed:3000,
  // centeredSlides:true,
  slidesPerView: "auto",
  autoplay:{
      delay:10000,
      disableOnInteraction:false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  paginationClickable:true,
});





// // hide navbar 
// let navLink = document.querySelectorAll(".nav-link");
// let navbar = document.querySelector(".navbar-collapse.collapse");
// navLink.forEach((a)=>{
//     a.addEventListener("click",()=>{
//         a.classList.add("bg");
//         navbar.classList.remove("show");
//     });
// });

// // on scroll function

// let nav = document.querySelector(".navbr-sticky");
// let link = document.querySelectorAll(".navbar-nav.nav-item.nav-link");
// window.onscroll = function(){
//     if(document.documentElement.scrollTop > 120){
//         nav.classList.add("navbar-sticky-moved-up");
//         document.querySelector(".brand-regular").style.display="none";
//         // document.querySelector(".brand-sticky").style.display="block";
//     }
//     else{
//         nav.classList.remove("navbar-sticky-moved-up");
//         document.querySelector(".brand-regular").style.display="block";
//         // document.querySelector(".brand-sticky").style.display="none";
//     }
//     if(document.documentElement.scrollTop > 150){
//         nav.classList.add("navbar-sticky-transitioned");
//     }
//     else{
//         nav.classList.remove("navbar-sticky-transitioned");
//     }
//     if(document.documentElement.scrollTop > 200){
//         nav.classList.add("navbar-sticky-on");
//     }
//     else{
//         nav.classList.remove("navbar-sticky-on");
//     }
// }