const mobileSearch = document.querySelector(".mobile-menu__search-form");
const openSearchBtn = document.querySelector(".open__search");
const closeSearchBtn = document.querySelector(".close__search");

const toggleSearch = ()=>{
  mobileSearch.classList.toggle("d-none")
  openSearchBtn.classList.toggle("d-none")
  closeSearchBtn.classList.toggle("d-none")
} 
openSearchBtn.addEventListener("click", toggleSearch);
closeSearchBtn.addEventListener("click", toggleSearch);
