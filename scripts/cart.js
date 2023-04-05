let minus = document.querySelector(".cart-counter--minus");

let plus = document.querySelector(".cart-counter--plus");

let number = parseInt(document.querySelector(".cart-counter__number").innerHTML);

let button = document.querySelector(".button");

let counterNotification = document.querySelector(".header__cart-count");

let cartNumber = buttonCart();

let newCartNumber;

saveCartNumber();

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
        } else {
            counterNotification.style.display = "block";
            document.querySelector(".header__cart-count").innerHTML = cartNumber;
            newCartNumber = parseInt(localStorage.setItem("cart", cartNumber));
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
    }
}