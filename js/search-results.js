// =======================================
// S.K. Trading Company
// search-results.js
// =======================================

document.addEventListener("DOMContentLoaded", () => {

    const toast = document.getElementById("toast");

    // ===================================
    // Toast Function
    // ===================================

    function showToast(message) {

        if (!toast) return;

        toast.textContent = message;

        toast.classList.add("show");

        setTimeout(() => {

            toast.classList.remove("show");

        }, 3000);

    }

    // Welcome Message

    setTimeout(() => {

        showToast("Search Results Loaded Successfully.");

    }, 500);

    // ===================================
    // Add To Cart
    // ===================================

    const cartButtons = document.querySelectorAll(".cart-btn");

    cartButtons.forEach(button => {

        button.addEventListener("click", () => {

            const card = button.closest(".product-card");

            const productName = card.querySelector("h3").textContent;

            showToast(`${productName} added to cart.`);

            console.log("Cart:", productName);

            // Future Backend
            /*
            fetch("/api/cart", {
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    product: productName
                })
            });
            */

        });

    });

    // ===================================
    // Wishlist
    // ===================================

    const wishButtons = document.querySelectorAll(".wish-btn");

    wishButtons.forEach(button => {

        button.addEventListener("click", () => {

            const card = button.closest(".product-card");

            const productName = card.querySelector("h3").textContent;

            button.classList.toggle("active");

            if (button.classList.contains("active")) {

                showToast(`${productName} added to wishlist ❤️`);

                button.innerHTML =
                    '<i class="fa-solid fa-heart"></i>';

            } else {

                showToast(`${productName} removed from wishlist`);

                button.innerHTML =
                    '<i class="fa-solid fa-heart"></i>';

            }

        });

    });

    // ===================================
    // Search Box
    // ===================================

    const searchInput = document.querySelector(".nav-search input");
    const searchButton = document.querySelector(".nav-search button");

    function performSearch() {

        if (!searchInput) return;

        const keyword = searchInput.value.trim();

        if (keyword === "") {

            showToast("Please enter a search keyword.");

            return;

        }

        showToast(`Searching for "${keyword}"...`);

        console.log("Search:", keyword);

        // Future Backend
        // window.location.href =
        // `search-results.html?q=${encodeURIComponent(keyword)}`;

    }

    if (searchButton) {

        searchButton.addEventListener("click", performSearch);

    }

    if (searchInput) {

        searchInput.addEventListener("keypress", (e) => {

            if (e.key === "Enter") {

                performSearch();

            }

        });

    }

});