const toggleFilter = () => {
  const closeBtn = document.querySelector(".filter__close");
  const openBtn = document.querySelector(".open-filter");

  const filter = document.querySelector(".filter");

  closeBtn?.addEventListener("click", () => {
    filter.classList.toggle("filter--active");
    document.body.classList.toggle("remove-scroll");
  });
  openBtn?.addEventListener("click", () => {
    document.body.classList.toggle("remove-scroll");
    filter.classList.toggle("filter--active");
  });
};

export default toggleFilter;
