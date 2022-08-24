const changeNumberOfProducts = () => {
    const plus = document.querySelector('.detail__plus');
    const minus = document.querySelector('.detail__minus');
    const num = document.querySelector('.detail__number-inp');

    plus.addEventListener('click', () => {
        num.value = Number(num.value) + 1;
    })

    minus.addEventListener('click', () => {
        if (num.value > 1) num.value = Number(num.value) - 1;
    })
}

export default changeNumberOfProducts;