// ==============================
// S.K. Trading Company
// products.js
// ==============================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // Product Search
    // ==========================

    const searchInput = document.getElementById("productSearch");
    const productCards = document.querySelectorAll(".product-card");

    if (searchInput) {

        searchInput.addEventListener("keyup", function() {

            const searchValue = this.value.toLowerCase();

            productCards.forEach((card) => {

                const productName = card.dataset.name.toLowerCase();

                if (productName.includes(searchValue)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }

            });

        });

    }

    // ==========================
    // Category Filter
    // ==========================

    const categoryFilter = document.getElementById("categoryFilter");

    if (categoryFilter) {

        categoryFilter.addEventListener("change", function() {

            const selected = this.value.toLowerCase();

            productCards.forEach((card) => {

                const productName = card.dataset.name.toLowerCase();

                if (selected === "all") {

                    card.style.display = "block";

                } else if (productName.includes(selected)) {

                    card.style.display = "block";

                } else {

                    card.style.display = "none";

                }

            });

        });

    }

    // ==========================
    // Add To Cart
    // ==========================

    const buttons = document.querySelectorAll(".product-card button");

    buttons.forEach((button) => {

        button.addEventListener("click", () => {

            const product =
                button.parentElement.querySelector("h3").innerText;

            alert(product + " added to cart successfully!");

        });

    });

    // ==========================
    // Product Counter
    // ==========================

    console.log("Total Products :", productCards.length);

});