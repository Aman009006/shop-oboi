const range = () => {
    const rangeInput = document.querySelectorAll(".range-input input"),
        priceInput = document.querySelectorAll(".price-input input"),
        werttttt = document.querySelector(".slider .progress");
    let priceGap = 1;
    priceInput?.forEach(input => {
        input.addEventListener("input", e => {
            let minPrice = parseInt(priceInput[0].value),
                maxPrice = parseInt(priceInput[1].value);

            let percent = (rangeInput[0].max - rangeInput[0].min) / 100;
            let leftNumber = 100 - ((rangeInput[0].max - priceInput[0].value) / percent);
            let rightNumber = (rangeInput[0].max - priceInput[1].value) / percent;
            console.log(rightNumber)
            if ((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max) {
                if (e.target.className === "input-min") {
                    rangeInput[0].value = minPrice;
                    werttttt.style.left = leftNumber + "%";
                } else {
                    rangeInput[1].value = maxPrice;
                    werttttt.style.right = rightNumber + "%";
                }
            }
        });
    });
    rangeInput?.forEach(input => {
        input.addEventListener("input", e => {
            let minVal = parseInt(rangeInput[0].value),
                maxVal = parseInt(rangeInput[1].value);

            let percent = (rangeInput[0].max - rangeInput[0].min) / 100;
            let leftNumber = 100 - ((rangeInput[0].max - minVal) / percent);
            let rightNumber = (rangeInput[0].max - maxVal) / percent;

            if ((maxVal - minVal) < priceGap) {
                if (e.target.className === "range-min") {
                    rangeInput[0].value = maxVal - priceGap
                } else {
                    rangeInput[1].value = minVal + priceGap;
                }
            } else {
                priceInput[0].value = minVal;
                priceInput[1].value = maxVal;
                werttttt.style.left = leftNumber + "%";
                werttttt.style.right = rightNumber + "%";
            }
        });
    });
}

export default range