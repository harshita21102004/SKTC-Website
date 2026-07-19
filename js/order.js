// =======================================
// S.K. Trading Company
// orders.js
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

        showToast("Welcome to Your Orders!");

    }, 500);

    // ===================================
    // Track Order Buttons
    // ===================================

    const trackButtons = document.querySelectorAll(".track-btn");

    trackButtons.forEach(button => {

        button.addEventListener("click", () => {

            const orderCard = button.closest(".order-card");

            const orderId =
                orderCard.querySelector(".order-header h3").innerText;

            showToast(`${orderId} is being tracked.`);

            console.log("Track Order:", orderId);

            // Future Backend
            // window.location.href = `track-order.html?id=${orderId}`;

        });

    });

    // ===================================
    // Invoice Buttons
    // ===================================

    const invoiceButtons = document.querySelectorAll(".invoice-btn");

    invoiceButtons.forEach(button => {

        button.addEventListener("click", () => {

            const orderCard = button.closest(".order-card");

            const orderId =
                orderCard.querySelector(".order-header h3").innerText;

            showToast(`Invoice download for ${orderId} will be available soon.`);

            console.log("Invoice:", orderId);

            // Future Backend
            // window.open(`/invoice/${orderId}.pdf`);

        });

    });

    // ===================================
    // Future API Example
    // ===================================

    /*
    fetch("http://localhost:5000/api/orders", {

        headers: {

            Authorization: "Bearer " + token

        }

    })
    .then(res => res.json())
    .then(data => {

        console.log(data);

    });
    */

});