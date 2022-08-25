const mobileSearch = document.querySelector(".mobile-menu__search-form");
const openSearchBtn = document.querySelector(".open__search");
const closeSearchBtn = document.querySelector(".close__search");

const toggleSearchMobile = ()=>{
  mobileSearch.classList.toggle("d-none")
  openSearchBtn.classList.toggle("d-none")
  closeSearchBtn.classList.toggle("d-none")
} 

export  const toggleSearch = ()=>{
  openSearchBtn?.addEventListener("click", toggleSearchMobile);
  closeSearchBtn?.addEventListener("click", toggleSearchMobile);
} 
