let iconMenu=document.querySelector(".icon-menu"),body=document.querySelector("body"),menuBody=document.querySelector(".main-row__menu");iconMenu&&iconMenu.addEventListener("click",(function(){iconMenu.classList.toggle("active"),body.classList.toggle("lock"),menuBody.classList.toggle("active")})),$(document).ready((function(){$(".accessories__items").slick({infinite:!0,slidesToShow:7,slidesToScroll:7,speed:500,adaptiveHeight:!0,arrows:!0,pauseOnFocus:!0,autoplay:!0,autoplaySpeed:5e3,responsive:[{breakpoint:1270,settings:{slidesToShow:5,slidesToScroll:5}},{breakpoint:900,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:560,settings:{slidesToShow:1,slidesToScroll:1}}]})}));const animItems=document.querySelectorAll("._anim-items");if(animItems.length>0){function animOnScroll(){for(let e=0;e<animItems.length;e++){const t=animItems[e],n=t.offsetHeight,o=offset(t).top,i=4;let s=window.innerHeight-n/i;n>window.innerHeight&&(s=window.innerHeight-window.innerHeight/i),pageYOffset>o-s&&pageYOffset<o+n?t.classList.add("active"):t.classList.contains("_no-anim")||t.classList.remove("active")}}function offset(e){const t=e.getBoundingClientRect(),n=window.pageXOffset||document.documentElement.scrollLeft,o=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+o,left:t.left+n}}window.addEventListener("scroll",animOnScroll),setTimeout((()=>{animOnScroll()}),100)}