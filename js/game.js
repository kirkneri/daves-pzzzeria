function updatePizzaName(name, description){
      document.getElementById('selected-pizza').textContent = name;
      document.getElementById('pizzaName').textContent = name;
      document.getElementById('updatePizzaDescription').textContent = description;
}

updatePizzaName('Random', 'Each of these pizzas offers a unique combination of flavors and ingredients, catering to different tastes and preferences. Whether you are a fan of meaty, cheesy, tropical, or classic pizza, there is something here for everyone to enjoy.');

const buttons = document.querySelectorAll('[data-image]');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
const imagePath = button.getAttribute('data-image');

const card = button.closest('.card');

const cardHeader = card.querySelector('.card-header img');

cardHeader.src = imagePath;

});
});
 
let totalPrice = 0;

const allSizes = document.querySelectorAll('input[name="pizzaSize"]');
const allAddons = document.querySelectorAll('input[name^="addOn"]');

allSizes.forEach((sizeInput) =>{
   sizeInput.addEventListener('change', updatePrice);
})

allAddons.forEach((addOnInput) => {
   addOnInput.addEventListener('change', updatePrice);
});

function updatePrice() {
   let pizzaSize = parseInt(document.querySelector('input[name="pizzaSize"]:checked').value);
   let addOn1 = document.querySelector('input[name="addOn1"]').checked ? parseInt(document.querySelector('input[name="addOn1"]').value) : 0;
   let addOn2 = document.querySelector('input[name="addOn2"]').checked ? parseInt(document.querySelector('input[name="addOn2"]').value) : 0;


   let totalPrice = pizzaSize + addOn1 + addOn2;

   if (pizzaSize === 15){
      document.getElementById('selectedSize').innerHTML = "Small Pizza (8'')";
   }
   else if (pizzaSize === 20){
      document.getElementById('selectedSize').innerHTML = "Medium Pizza (12'')";
   }
   else if (pizzaSize === 25){
      document.getElementById('selectedSize').innerHTML = "Large Pizza (16'')";
   }

   if(addOn2 === 2){
      document.getElementById('selectedPepperoni').innerHTML = "$2.00";
   }
   else {
      document.getElementById('selectedPepperoni').innerHTML = "N/A";
   }

   if(addOn1 === 1){
      document.getElementById('selectedCheese').innerHTML = "$1.00";
   }
   else {
      document.getElementById('selectedCheese').innerHTML = "N/A";
   }

   document.getElementById('priceOutput').innerHTML = `$${totalPrice.toFixed(2)}`;
   document.getElementById('taxBill').innerHTML = "N/A";
   document.getElementById('totalBill').innerHTML = "N/A";
}

updatePrice();


function placeOrder(){

   let pizzaSize = parseInt(document.querySelector('input[name="pizzaSize"]:checked').value);
   let addOn1 = document.querySelector('input[name="addOn1"]').checked ? parseInt(document.querySelector('input[name="addOn1"]').value) : 0;
   let addOn2 = document.querySelector('input[name="addOn2"]').checked ? parseInt(document.querySelector('input[name="addOn2"]').value) : 0;

   let totalPrice = pizzaSize + addOn1 + addOn2;
   const tax = 0.15;
   const totalTax = totalPrice * tax;
   const totalBill = totalTax + totalPrice;

   document.getElementById('taxBill').innerHTML = `$${totalTax.toFixed(2)}`;
   document.getElementById('totalBill').innerHTML = `$${totalBill.toFixed(2)}`;
}





// document.getElementById("place-order").addEventListener("click", function () {
//  const sizeInput = document.querySelector('input[name="pizza-size"]:checked');
//  const pepperoniInput = document.getElementById("pepperoniInput").value.toLowerCase();
//  const cheeseInput = document.getElementById("cheeseInput").value.toLowerCase();
 
//  let price = 0;
//  let pizzaSize = "NA";
//  let tax = 0.10;

//  if (sizeInput === "s"){
//     price += 15;
//     pizzaSize = "Small Pizza";
//  }
//  else if (sizeInput === "m"){
//     price += 20;
//     pizzaSize = "Medium Pizza";
//  }
//  else if (sizeInput === "l"){
//     price += 25;
//     pizzaSize = "Large Pizza";
//  }
//  else {
//     document.getElementById("priceOutput").innerHTML = "Invalid Input";
//     return;
// }

//  if (pepperoniInput === "y"){
//     price += 2;
//     document.getElementById("selectedPepperoni").innerHTML = "$2.00";
//  }
//  else {
//     document.getElementById("selectedPepperoni").innerHTML = "N/A";
//  }

//  if (cheeseInput === "y"){
//     price += 1;
//     document.getElementById("selectedCheese").innerHTML = "$1.00";
//  }
//  else {
//     document.getElementById("selectedCheese").innerHTML = "N/A";
//  }


//  const totalTax = price * tax;

//  document.getElementById("priceOutput").innerHTML = `$${(price + totalTax).toFixed(2)}`;
//  document.getElementById("selectedSize").innerHTML = pizzaSize;
//  document.getElementById("taxBill").innerHTML = `$${totalTax.toFixed(2)}`;
//  document.getElementById("totalBill").innerHTML = `$${(price + totalTax).toFixed(2)}`;


// })