let iconMenu=document.querySelector(".icon-menu"),body=document.querySelector("body"),menuBody=document.querySelector(".main-row__menu");function ibg(){let e=document.querySelectorAll(".ibg");for(var t=0;t<e.length;t++)e[t].querySelector("img")&&(e[t].style.backgroundImage="url("+e[t].querySelector("img").getAttribute("src")+")")}iconMenu&&iconMenu.addEventListener("click",(function(){iconMenu.classList.toggle("active"),body.classList.toggle("lock"),menuBody.classList.toggle("active")})),ibg(),$(document).ready((function(){$(".accessories__items").slick({infinite:!0,slidesToShow:7,slidesToScroll:7,speed:500,adaptiveHeight:!0,arrows:!0,pauseOnFocus:!0,autoplay:!0,autoplaySpeed:5e3,responsive:[{breakpoint:1270,settings:{slidesToShow:5,slidesToScroll:5}},{breakpoint:900,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:560,settings:{slidesToShow:1,slidesToScroll:1}}]})}));const animItems=document.querySelectorAll("._anim-items");if(animItems.length>0){function animOnScroll(){for(let e=0;e<animItems.length;e++){const t=animItems[e],o=t.offsetHeight,n=offset(t).top,i=4;let s=window.innerHeight-o/i;o>window.innerHeight&&(s=window.innerHeight-window.innerHeight/i),pageYOffset>n-s&&pageYOffset<n+o?t.classList.add("active"):t.classList.contains("_no-anim")||t.classList.remove("active")}}function offset(e){const t=e.getBoundingClientRect(),o=window.pageXOffset||document.documentElement.scrollLeft,n=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+n,left:t.left+o}}window.addEventListener("scroll",animOnScroll),setTimeout((()=>{animOnScroll()}),100)}