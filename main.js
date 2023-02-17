const cardBtn1 = document.getElementById("btn-1");
const cardBtn2 = document.getElementById("btn-2");
const cardBtn3 = document.getElementById("btn-3");
const cardBtn4 = document.getElementById("btn-4");
const cartMsg = document.getElementById("cart-msg");
const indicatorItem = document.querySelector(".indicator-item");


let productQuantity = 1;

function getElement(btn) {
  const parentEle = btn.parentElement;
  const pTitle = parentEle.querySelector("h2").innerText;
  const pPrice = parentEle.querySelector(".price").innerText;
  const pQuantity = parentEle.querySelector(".quantity").innerText;
  const totalPriceSingle = parseInt(pPrice) * parseInt(pQuantity);
  return {
    parentEle,
    pTitle,
    pPrice,
    pQuantity,
    totalPriceSingle,
  };
}

cardBtn1.addEventListener("click", function (e) {
  const data = getElement(cardBtn1);
  displayData(data.pTitle, data.pPrice, data.pQuantity, data.totalPriceSingle);
  cardBtn1.setAttribute("disabled", true);
});

cardBtn2.addEventListener("click", function () {
  const data = getElement(cardBtn2);
  displayData(data.pTitle, data.pPrice, data.pQuantity, data.totalPriceSingle);
  cardBtn2.setAttribute("disabled", true);
});

cardBtn3.addEventListener("click", function () {
  const data = getElement(cardBtn3);
  displayData(data.pTitle, data.pPrice, data.pQuantity, data.totalPriceSingle);
  cardBtn3.setAttribute("disabled", true);
});

cardBtn4.addEventListener("click", function () {
  const data = getElement(cardBtn4);
  displayData(data.pTitle, data.pPrice, data.pQuantity, data.totalPriceSingle);
  cardBtn4.setAttribute("disabled", true);
});

function displayData(pTitle, pPrice, pQuantity, totalPriceSingle) {
  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");

  tr.innerHTML = `
             <td> ${productQuantity++}</td>
             <td>${pTitle}</td>
             <td>${pPrice}</td>
             <td>${pQuantity}</td>
             <td>${totalPriceSingle}</td> 
             
    `;
  container.appendChild(tr);
  indicatorItem.innerText = productQuantity - 1;
}
