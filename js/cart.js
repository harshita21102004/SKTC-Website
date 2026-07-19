// =======================================
// S.K. Trading Company
// cart.js
// =======================================

document.addEventListener("DOMContentLoaded", () => {

    const rows = document.querySelectorAll(".cart-table tbody tr");
    const subtotalElement = document.getElementById("subtotalPrice");
    const totalElement = document.getElementById("totalPrice");

    const shipping = 199;
    const gstRate = 0.18;

    // ============================
    // Update Cart
    // ============================

    function updateCart() {

        let subtotal = 0;

        const allRows = document.querySelectorAll(".cart-table tbody tr");

        allRows.forEach(row => {

            const priceText = row.querySelector(".price").innerText;
            const price = parseInt(priceText.replace(/[₹,]/g, ""));

            const quantity = parseInt(row.querySelector("input").value);

            const itemTotal = price * quantity;

            row.querySelector(".subtotal").innerText =
                "₹" + itemTotal.toLocaleString();

            subtotal += itemTotal;

        });

        const gst = Math.round(subtotal * gstRate);

        const grandTotal = subtotal + shipping + gst;

        subtotalElement.innerText = "₹" + subtotal.toLocaleString();

        totalElement.innerText = "₹" + grandTotal.toLocaleString();

    }

    // ============================
    // Quantity Buttons
    // ============================

    rows.forEach(row => {

        const minus = row.querySelector(".minus");
        const plus = row.querySelector(".plus");
        const input = row.querySelector("input");

        plus.addEventListener("click", () => {

            input.value++;

            updateCart();

            showToast("Quantity Increased");

        });

        minus.addEventListener("click", () => {

            if (input.value > 1) {

                input.value--;

                updateCart();

                showToast("Quantity Decreased");

            }

        });

        input.addEventListener("change", () => {

            if (input.value < 1 || input.value === "") {

                input.value = 1;

            }

            updateCart();

        });

    });

    // ============================
    // Remove Item
    // ============================

    const removeButtons = document.querySelectorAll(".remove-btn");

    removeButtons.forEach(btn => {

        btn.addEventListener("click", () => {

            btn.closest("tr").remove();

            updateCart();

            checkEmptyCart();

            showToast("Product Removed");

        });

    });

    // ============================
    // Coupon
    // ============================

    const couponBtn = document.querySelector(".coupon-btn");

    if (couponBtn) {

        couponBtn.addEventListener("click", () => {

            const coupon =
                document.getElementById("coupon").value.trim().toUpperCase();

            if (coupon === "SKTC10") {

                showToast("Coupon Applied Successfully");

            } else {

                showToast("Invalid Coupon Code");

            }

        });

    }

    // ============================
    // Empty Cart
    // ============================

    function checkEmptyCart() {

        const tbody = document.querySelector(".cart-table tbody");

        if (tbody.children.length === 0) {

            document.querySelector(".cart-items").innerHTML = `

                <div class="empty-cart">

                    <i class="fa-solid fa-cart-shopping"></i>

                    <h2>Your Cart is Empty</h2>

                    <p>Add products to continue shopping.</p>

                    <a href="products.html"
                       class="continue-shopping">

                       Continue Shopping

                    </a>

                </div>

            `;

            subtotalElement.innerText = "₹0";
            totalElement.innerText = "₹0";

        }

    }

    // ============================
    // Checkout
    // ============================

    const checkoutBtn = document.querySelector(".checkout-btn");

    if (checkoutBtn) {

        checkoutBtn.addEventListener("click", () => {

            showToast("Checkout Feature Coming Soon");

            // Future Backend

            // window.location.href="checkout.html";

        });

    }

    // ============================
    // Toast
    // ============================

    function showToast(message) {

        const toast = document.getElementById("toast");

        if (!toast) return;

        toast.innerText = message;

        toast.classList.add("show");

        setTimeout(() => {

            toast.classList.remove("show");

        }, 2500);

    }

    updateCart();

});