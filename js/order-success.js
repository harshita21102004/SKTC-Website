// =======================================
// S.K. Trading Company
// order-success.js
// =======================================

document.addEventListener("DOMContentLoaded", () => {

    const toast = document.getElementById("toast");
    const orderId = document.getElementById("orderId");

    // ===================================
    // Generate Random Order ID
    // ===================================

    function generateOrderId() {

        const random = Math.floor(100000 + Math.random() * 900000);

        return "#SKTC" + random;

    }

    if (orderId) {

        orderId.innerText = generateOrderId();

    }

    // ===================================
    // Show Toast
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

        showToast("🎉 Thank you for your order!");

    }, 500);

    // ===================================
    // Continue Shopping
    // ===================================

    const continueBtn = document.querySelector(".continue-btn");

    if (continueBtn) {

        continueBtn.addEventListener("click", () => {

            console.log("Continue Shopping");

            // Future Analytics
            // window.location.href = "products.html";

        });

    }

    // ===================================
    // View Orders
    // ===================================

    const ordersBtn = document.querySelector(".orders-btn");

    if (ordersBtn) {

        ordersBtn.addEventListener("click", () => {

            console.log("View Orders");

            // Future
            // window.location.href = "orders.html";

        });

    }

    // ===================================
    // Future Backend Ready
    // ===================================

    /*
    fetch("http://localhost:5000/api/orders/latest")
    .then(res => res.json())
    .then(data => {

        orderId.innerText = data.orderId;

    });
    */

});