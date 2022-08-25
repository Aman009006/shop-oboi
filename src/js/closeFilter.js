const closeFilter = () => {
    const closeBtn = document.querySelector('.filter__close');
    const filter = document.querySelector('.filter');

    closeBtn?.addEventListener('click', () => {
        filter.style.right = '-100vh';
    });
}

export default closeFilter