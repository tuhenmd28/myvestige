var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});



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

// var swiper = new Swiper(".mySwiper", {
//     direction: "vertical",
//     loop:true,
//     autoplaySpeed:3000,
//     // centeredSlides:true,
//     slidesPerView: "auto",
//     autoplay:{
//         delay:500,
//         disableOnInteraction:false
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     paginationClickable:true,
//   });
  
// var swiper = new Swiper('.swiper-container.app-screen', {
//     effect: "coverflow",
//     loop:true,
//     autoplaySpeed:3000,
//     centeredSlides:true,
//     slidesPerView: "auto",
//     autoplay:{
//         delay:5000,
//         disableOnInteraction:false
//     },
//     pagination: {
//         el: ".swiper-pagination",
//         clickable:true,
//       },
//       paginationClickable:true,
//     coverflow: {
//       rotate: 0,
//       stretch:100,
//       depth: 150,
//       modifier: 1.5,
//       slideShadows:false,
//     },
  
//   });
