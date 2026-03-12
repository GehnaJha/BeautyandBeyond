 let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price){

cart.push({name:name, price:price});

localStorage.setItem("cart", JSON.stringify(cart));

alert(name + " added to cart!");
}

/* DISPLAY CART */

function displayCart(){

let cartList = document.getElementById("cart-items");
let emptyMessage = document.getElementById("empty-cart");

if(!cartList) return;

cartList.innerHTML = "";

if(cart.length === 0){
emptyMessage.style.display = "block";
return;
}else{
emptyMessage.style.display = "none";
}

cart.forEach((item,index)=>{

let li = document.createElement("li");

li.classList.add("cart-item");

li.innerHTML = `
<span>${item.name} - ₹${item.price}</span>
<button class="remove-btn" onclick="removeItem(${index})">Remove</button>
`;

cartList.appendChild(li);

});

}

/* REMOVE ITEM */

function removeItem(index){

cart.splice(index,1);

localStorage.setItem("cart", JSON.stringify(cart));

displayCart();

}

displayCart();
function bookAppointment(){

let popup = document.getElementById("popup");

popup.style.display = "flex";

}

function closePopup(){

let popup = document.getElementById("popup");

popup.style.display = "none";

}