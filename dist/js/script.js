const burgerMenu = document.querySelector(".humberger-menu")
const menu = document.querySelector("ul")
const boxHeader = document.querySelector(".box-header")
const bgNavbar = document.querySelector(".bg-navbar");

burgerMenu.addEventListener("click",() => {
    menu.classList.toggle("active");
    bgNavbar.classList.toggle("bg-active")
})
bgNavbar.addEventListener("click",() => {
    menu.classList.remove("active");
    bgNavbar.classList.remove("bg-active")
})