// ===============================
// S.K. Trading Company
// index.js
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    // Welcome Message
    console.log("Welcome to S.K. Trading Company");

    // Shop Now Button
    const shopBtn = document.querySelector(".shop-btn");

    if (shopBtn) {

        shopBtn.addEventListener("click", function(e) {

            e.preventDefault();

            window.location.href = "pages/products.html";

        });

    }

    // Add To Cart Buttons
    const buttons = document.querySelectorAll(".product-card button");

    buttons.forEach((button) => {

        button.addEventListener("click", () => {

            const productName =
                button.parentElement.querySelector("h3").innerText;

            alert(productName + " added to cart successfully!");

        });

    });

});