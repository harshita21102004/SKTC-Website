// =======================================
// S.K. Trading Company
// wishlist.js
// =======================================

document.addEventListener("DOMContentLoaded", () => {

    const toast = document.getElementById("toast");

    // ===================================
    // Toast Function
    // ===================================

    function showToast(message) {

        if (!toast) return;

        toast.innerText = message;

        toast.classList.add("show");

        setTimeout(() => {

            toast.classList.remove("show");

        }, 3000);

    }

    // Welcome Toast

    setTimeout(() => {

        showToast("❤️ Welcome to Your Wishlist!");

    }, 500);

    // ===================================
    // Add To Cart
    // ===================================

    const cartButtons = document.querySelectorAll(".cart-btn");

    cartButtons.forEach(button => {

        button.addEventListener("click", () => {

            const card = button.closest(".wishlist-card");

            const productName =
                card.querySelector("h3").innerText;

            showToast(`${productName} added to cart.`);

            console.log("Added To Cart:", productName);

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
    // Remove From Wishlist
    // ===================================

    const removeButtons = document.querySelectorAll(".remove-btn");

    removeButtons.forEach(button => {

        button.addEventListener("click", () => {

            const card = button.closest(".wishlist-card");

            const productName =
                card.querySelector("h3").innerText;

            card.remove();

            showToast(`${productName} removed from wishlist.`);

            checkEmptyWishlist();

        });

    });

    // ===================================
    // Empty Wishlist
    // ===================================

    function checkEmptyWishlist() {

        const container =
            document.querySelector(".wishlist-container");

        const cards =
            document.querySelectorAll(".wishlist-card");

        if (cards.length === 0) {

            container.innerHTML = `

                <div class="empty-wishlist">

                    <i class="fa-solid fa-heart-crack"></i>

                    <h2>Your Wishlist is Empty</h2>

                    <p>
                        Looks like you haven't added any products yet.
                    </p>

                    <a href="products.html"
                       class="shop-btn">

                        <i class="fa-solid fa-cart-shopping"></i>

                        Start Shopping

                    </a>

                </div>

            `;

        }

    }

});