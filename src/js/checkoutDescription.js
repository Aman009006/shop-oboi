const descriptionRadios = document.querySelectorAll(".description__radio");
const informItems = document.querySelectorAll(".inform-item");
const descriptionInforms = document.querySelectorAll(".description__inform");

const changeDescription=(id, index)=>{
  informItems.forEach(element=>{
    if(element.classList.value.includes(id)){
      element.classList.remove("d-none");
    }else{
      if(!element.classList.value.includes("d-none")){
      element.classList.add("d-none");
      }
    }
  })
}

function checkoutDescription() {
  descriptionRadios.forEach((element, index) => {
    element.addEventListener("click", ()=>{
      changeDescription(element.id, index);
    })
  });
}

export default checkoutDescription