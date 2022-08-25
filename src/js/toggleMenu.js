const burgerBtn = document.querySelector(".burger");
const menu = document.querySelector(".mobile-menu");
const closeBtn = document.querySelector(".mobile-menu__close");

const toggleMenuFunc=()=>{
  menu.classList.toggle("mobile-menu--active");
  document.body.classList.toggle("remove-scroll");
}

export const toggleMenu = () => {
  burgerBtn.addEventListener("click", toggleMenuFunc);
  closeBtn.addEventListener("click", toggleMenuFunc);
};
