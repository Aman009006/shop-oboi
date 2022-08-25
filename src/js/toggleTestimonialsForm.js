const openFormBtns = document.querySelectorAll(".testimonials__button");
const testimonialsForm = document.querySelector(".testimonials__inner");
const closeFormBtn = document.querySelector(".testimonials__close");

const toggleForm= ()=>{
  testimonialsForm.classList.toggle("d-none");
  openFormBtns[0].classList.toggle("d-none");
  openFormBtns[1].classList.toggle("d-none");
}
export const toggleTestimonialsForm = ()=>{
  openFormBtns[0]?.addEventListener("click", toggleForm);
  openFormBtns[1]?.addEventListener("click", toggleForm);
  closeFormBtn?.addEventListener("click", toggleForm);
}