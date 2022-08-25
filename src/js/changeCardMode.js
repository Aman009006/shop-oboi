const productsList = document.querySelector(".products__list");
const changeCardView = (index)=>{
  const modes=["default", "column", "row"];
  modes.forEach((elem, pos)=>{
    if(pos===index){
      productsList.classList.add(elem);
    }else{
      if(productsList.classList.value.includes(elem)){
        productsList.classList.remove(elem);
      }
    }
})
}

function changeCardMode() {
  const cardModeBtns = document.querySelectorAll(".mode__item-btn");

  cardModeBtns.forEach((element, index)=>{
    element.addEventListener("click", ()=>changeCardView(index))
  })
}

export default changeCardMode;