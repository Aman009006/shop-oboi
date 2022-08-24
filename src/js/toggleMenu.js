const burgerBtn = document.querySelector(".burger");
const menu = document.querySelector(".mobile-menu");
const closeBtn = document.querySelector(".mobile-menu__close");

const toggleMenu = ()=>{
  menu.classList.toggle("mobile-menu--active");
  document.body.classList.toggle("remove-scroll")
}

burgerBtn.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", toggleMenu)
