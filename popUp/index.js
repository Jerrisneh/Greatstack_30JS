
let popup = document.getElementById("popup");
let submitBtn = document.getElementById("submit-btn");
let okBtn = document.getElementById("ok-btn");



submitBtn.addEventListener("click", ()=>{
    popup.classList.add("open-popup");
})


okBtn.addEventListener("click", ()=> { 
    popup.classList.remove("open-popup");
})