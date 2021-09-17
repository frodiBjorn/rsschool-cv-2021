const burgerBtn = document.querySelector(".burger-btn");
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");

function toggleBurger(){
    burger.classList.toggle("active")
    nav.classList.toggle("active")
    

    burger.classList.contains("active") ? burgerBtn.src = "./svg/free-icon-cancel-130887.png" : burgerBtn.src = "./svg/free-icon-menu-55002.svg"
}


burgerBtn.addEventListener("click", toggleBurger)



