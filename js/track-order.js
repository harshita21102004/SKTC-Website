// =======================================
// S.K. Trading Company
// track-order.js
// =======================================

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("trackForm");
    const orderIdInput = document.getElementById("orderId");
    const toast = document.getElementById("toast");
    const trackBtn = form.querySelector("button");

    // ===================================
    // Toast Function
    // ===================================

    function showToast(message, success = true) {

        if (!toast) return;

        toast.textContent = message;

        toast.style.background = success ? "#198754" : "#dc3545";

        toast.classList.add("show");

        setTimeout(() => {

            toast.classList.remove("show");

        }, 3000);

    }

    // ===================================
    // Order Validation
    // ===================================

    function isValidOrderId(id) {

        return /^SKTC\d{5}$/i.test(id);

    }

    // ===================================
    // Track Order
    // ===================================

    form.addEventListener("submit", function(e) {

        e.preventDefault();

        const orderId = orderIdInput.value.trim().toUpperCase();

        if (orderId === "") {

            showToast("Please enter your Order ID.", false);

            orderIdInput.focus();

            return;

        }

        if (!isValidOrderId(orderId)) {

            showToast("Invalid Order ID. Example: SKTC12345", false);

            orderIdInput.focus();

            return;

        }

        // Loading Button

        trackBtn.disabled = true;

        trackBtn.innerHTML = `
            <i class="fa-solid fa-spinner fa-spin"></i>
            Tracking...
        `;

        // Fake API Request

        setTimeout(() => {

            showToast(`Order ${orderId} found successfully.`);

            console.log("Tracking Order:", orderId);

            trackBtn.disabled = false;

            trackBtn.innerHTML = `
                <i class="fa-solid fa-magnifying-glass"></i>
                Track Order
            `;

            // Scroll to Order Details

            const details = document.querySelector(".order-details");

            if (details) {

                details.scrollIntoView({

                    behavior: "smooth"

                });

            }

            // ===================================
            // Future Backend
            // ===================================
            /*
            fetch(`http://localhost:5000/api/orders/${orderId}`)
                .then(res => res.json())
                .then(data => {

                    console.log(data);

                    // Update timeline dynamically

                })
                .catch(() => {

                    showToast("Order not found.", false);

                });
            */

        }, 1800);

    });

});