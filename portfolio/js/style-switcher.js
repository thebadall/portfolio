// toggle style 

const styleSwticherToggler = document.querySelector(".style-switcher-toggler");
const toggle = document.querySelector(".style-switcher");
const aside = document.querySelector(".aside");
const navToggle = document.querySelector(".nav-toggler")
styleSwticherToggler.addEventListener('click',()=>{
   toggle.classList.toggle("open");
});

// hide style swtich on scrool 
window.addEventListener("scroll",()=>{
   if(toggle.classList.contains("open")){
      toggle.classList.remove("open");
   }
})

// theme color 
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
   alternateStyles.forEach((style)=>{
      if(color === style.getAttribute("title")){
         style.removeAttribute("disabled");
      }else{
         style.setAttribute("disabled","true");
      }
   })
}

// theme light and dark mde 
const dayNight = document.querySelector(".day-night")
dayNight.addEventListener("click",()=>{
   dayNight.querySelector("i").classList.toggle("fa-sun");
   dayNight.querySelector("i").classList.toggle("fa-moon");
   document.body.classList.toggle("dark")
})
window.addEventListener("load",()=>{
   if(document.body.classList.contains("dark")){
      dayNight.querySelector("i").classList.add("fa-sun");
   }else{
      dayNight.querySelector("i").classList.add("fa-moon");
   }
})



navToggle.addEventListener("click",()=>{
    aside.classList.toggle("open-toggle")
})
