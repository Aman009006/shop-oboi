const toggleFilter = () => {
    const closeBtn = document.querySelector('.filter__close');
    const openBtn = document.querySelector(".open-filter");

    const filter = document.querySelector('.filter');

    closeBtn?.addEventListener('click', () => {
        filter.classList.toggle("filter--active")
    });
    openBtn?.addEventListener('click', () => {
        filter.classList.toggle("filter--active")
    });

}

export default toggleFilter