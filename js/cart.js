const productName = document.querySelector(".product-name").innerHTML;

const productPrice = document.querySelector(".product-price").innerHTML;

let minus = document.querySelector(".cart-counter--minus");

let plus = document.querySelector(".cart-counter--plus");

let number = parseInt(document.querySelector(".cart-counter__number").innerHTML);

let button = document.querySelector(".button");

let counterNotification = document.querySelector(".header__cart-count");

const cartButton = document.querySelector("#cartbutton");

const cartMenu = document.querySelector(".header__cart-items");

const cartEmpty = document.querySelector(".header__cart-empty");

const cartProductlist = document.querySelector(".header__cart-product");

const trashBin = document.querySelector(".header__cart-product--delete");

const cartOverview = document.querySelector(".cart__overview");

let totalSum = document.querySelector(".cart__total--sum").innerHTML;

let cartNumber = buttonCart();

let newCartNumber;

saveCartNumber();

showCartMenu();

deleteCart();

function controlCartCount() {

    minus.addEventListener("click", () => {
        if (number <= 0) {
            document.querySelector(".cart-counter__number").innerHTML = 0;
        } else {
            number += -1;
            cartNumber = document.querySelector(".cart-counter__number").innerHTML = number;
        }
    });

    plus.addEventListener("click", () => {
        number += 1;
        cartNumber = document.querySelector(".cart-counter__number").innerHTML = number;
    });
}

function buttonCart() {
    controlCartCount();

    button.addEventListener("click", () => {
        if (number < 1) {
            counterNotification.style.display = "none";
            cartProductlist.style.display = "none";
            cartOverview.style.display = "none"
            cartEmpty.style.display = "grid";
        } else {
            counterNotification.style.display = "block";
            document.querySelector(".header__cart-count").innerHTML = cartNumber;
            newCartNumber = parseInt(localStorage.setItem("cart", cartNumber));
            showCartItem();
        }
    })
}

function showCartNotification() {
    counterNotification.style.display = "block";

    document.querySelector(".header__cart-count").innerHTML = localStorage.getItem("cart", cartNumber);

    number = document.querySelector(".cart-counter__number").innerHTML = parseInt(localStorage.getItem("cart", cartNumber));

    if (number == parseInt(localStorage.getItem("cart", cartNumber))) {
        button.addEventListener("click", () => {
            localStorage.setItem("cart", number);
            document.querySelector(".header__cart-count").innerHTML = number;
        })
    }
}

function saveCartNumber() {
    window.onload = () => {
        if (localStorage.getItem("cart", cartNumber) < 1) {
            counterNotification.style.display = "none";
        } else {
            showCartNotification();
        }
        showCartItem();
    }
}

function showCartMenu() {
    document.addEventListener("click", (e) => {
        if (e.target.matches('#cartbutton')) {
            cartMenu.classList.toggle("show");
        } else if (e.target.closest('#cartmenu')) {
            cartMenu.classList.add("show");
        } else {
            cartMenu.classList.remove("show");
        }
    })
}

function showCartItem() {

    document.querySelector(".item__name").innerHTML = productName;
    document.querySelector(".item__price").innerHTML = `$${productPrice}`;
    document.querySelector(".item__quantity").innerHTML = number;

    if (number > 0) {
        cartEmpty.style.display = "none";
        cartProductlist.style.display = "flex";
        cartOverview.style.display = "block";
        totalSum = document.querySelector(".cart__total--sum").innerHTML = `$${parseFloat(productPrice * number).toFixed(2)}`;
        console.log(totalSum);
    } else {
        cartProductlist.style.display = "none";
        cartOverview.style.display = "none";
    }
}

function deleteCart() {
    trashBin.addEventListener("click", () => {
        localStorage.clear("cart");
        cartProductlist.style.display = "none";
        counterNotification.style.display = "none";
        cartOverview.style.display = "none";
        cartEmpty.style.display = "grid";
    })
}

const preventDefault = [cartButton, minus, plus, button];
for (const event of preventDefault) {
    event.addEventListener("contextmenu", (e) => {
        e.preventDefault();
    })
}

