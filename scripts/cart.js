let cartNumber = controlCartCount();

function controlCartCount() {
    let minus = document.querySelector(".cart-counter--minus");
    let plus = document.querySelector(".cart-counter--plus");
    let number = parseInt(document.querySelector(".cart-counter__number").innerHTML);
    let button = document.querySelector(".button");
    let counterNotification = document.querySelector(".header__cart-count");

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

    button.addEventListener("click", () => {
        if (number < 1) {
            counterNotification.style.display = "none";
        } else {
            counterNotification.style.display = "block";
            document.querySelector(".header__cart-count").innerHTML = cartNumber;
        }
    })
}






