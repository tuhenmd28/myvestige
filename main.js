var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});



let btn = document.querySelector(".btn.btn-primary");
let search = document.querySelector('.search');
let searchArea = document.querySelector('.search-area.shadow-lg');
let searchRm = document.querySelector('.search-none');
let login = document.querySelector('#login');
let loginAre = document.querySelector('.login-area');
let body = document.getElementsByTagName('html');
search.addEventListener("click",()=>{searchArea.classList.add("block")})
searchRm.addEventListener("click",()=>{searchArea.classList.remove("block")});
login.addEventListener("click",()=>{loginAre.classList.add("block")});
body.addEventListener("click",()=>{loginAre.classList.remove("block")});




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
