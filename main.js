const cardBtn = document.getElementById("btn");



cardBtn.addEventListener("click" , function(e){
    const parentEle = cardBtn.parentElement;
    const pTitle = document.querySelector("h2")
    console.log(pTitle.innerText);
})