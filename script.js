const btnSelection = document.querySelector(".card-rated__buttons")
const ratedNumber = document.getElementById("num-selected")
const buttonSubmit = document.getElementById("submit")
const ratingState = document.querySelector(".card-rated")
const finalSelect = document.querySelector(".thankyou")

btnSelection.addEventListener('click', event => {
    const numberSelected = event.target.innerText;
    ratedNumber.innerText = numberSelected;
    if(numberSelected > 0 || numberSelected <= 5){       
        buttonSubmit.addEventListener('click', () => {
            ratingState.style.display = "none";
            finalSelect.style.display = "flex";  
        })  
    }
  
})




