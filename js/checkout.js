// =======================================
// S.K. Trading Company
// checkout.js
// =======================================

document.addEventListener("DOMContentLoaded", () => {

    const checkoutForm = document.getElementById("checkoutForm");
    const placeOrderBtn = document.getElementById("placeOrderBtn");
    const toast = document.getElementById("toast");

    if (!checkoutForm) return;

    // ===================================
    // Form Submit
    // ===================================

    checkoutForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const firstName = document.getElementById("firstName").value.trim();
        const lastName = document.getElementById("lastName").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const address = document.getElementById("address").value.trim();
        const city = document.getElementById("city").value.trim();
        const state = document.getElementById("state").value.trim();
        const pincode = document.getElementById("pincode").value.trim();

        const paymentMethod =
            document.querySelector('input[name="payment"]:checked');

        // ==========================
        // Validation
        // ==========================

        if (
            firstName === "" ||
            lastName === "" ||
            email === "" ||
            phone === "" ||
            address === "" ||
            city === "" ||
            state === "" ||
            pincode === ""
        ) {

            showToast("Please fill all required fields.");
            return;

        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            showToast("Invalid Email Address.");
            return;

        }

        const phonePattern = /^[6-9]\d{9}$/;

        if (!phonePattern.test(phone)) {

            showToast("Enter a valid mobile number.");
            return;

        }

        const pinPattern = /^\d{6}$/;

        if (!pinPattern.test(pincode)) {

            showToast("Invalid PIN Code.");
            return;

        }

        if (!paymentMethod) {

            showToast("Select a payment method.");
            return;

        }

        // ==========================
        // Order Data
        // ==========================

        const orderData = {

            firstName,
            lastName,
            email,
            phone,
            address,
            city,
            state,
            pincode,
            paymentMethod: paymentMethod.parentElement.innerText.trim()

        };

        console.log(orderData);

        // ==========================
        // Loading Button
        // ==========================

        placeOrderBtn.disabled = true;

        placeOrderBtn.innerHTML =
            '<i class="fa-solid fa-spinner fa-spin"></i> Placing Order...';

        // ===================================
        // Future Backend API
        // ===================================

        /*
        fetch("http://localhost:5000/api/orders", {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify(orderData)

        });

        */

        // Demo Success

        setTimeout(() => {

            showToast("Order Placed Successfully!");

            placeOrderBtn.disabled = false;

            placeOrderBtn.innerHTML =
                '<i class="fa-solid fa-bag-shopping"></i> Place Order';

            checkoutForm.reset();

            // Future Redirect

            // window.location.href = "order-success.html";

        }, 2000);

    });

    // ===================================
    // Toast Function
    // ===================================

    function showToast(message) {

        toast.innerText = message;

        toast.classList.add("show");

        setTimeout(() => {

            toast.classList.remove("show");

        }, 3000);

    }

});