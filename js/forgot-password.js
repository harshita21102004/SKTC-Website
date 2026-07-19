// =======================================
// S.K. Trading Company
// forgot-password.js
// =======================================

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("forgotForm");
    const email = document.getElementById("email");
    const toast = document.getElementById("toast");
    const resetBtn = document.querySelector(".reset-btn");

    // ===============================
    // Toast Function
    // ===============================

    function showToast(message, success = true) {

        if (!toast) return;

        toast.textContent = message;

        toast.style.background = success ? "#198754" : "#dc3545";

        toast.classList.add("show");

        setTimeout(() => {

            toast.classList.remove("show");

        }, 3000);

    }

    // ===============================
    // Email Validation
    // ===============================

    function isValidEmail(value) {

        const pattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        return pattern.test(value);

    }

    // ===============================
    // Form Submit
    // ===============================

    form.addEventListener("submit", function(e) {

        e.preventDefault();

        const emailValue = email.value.trim();

        if (emailValue === "") {

            showToast("Please enter your email address.", false);

            email.focus();

            return;

        }

        if (!isValidEmail(emailValue)) {

            showToast("Please enter a valid email address.", false);

            email.focus();

            return;

        }

        // Loading Effect

        resetBtn.disabled = true;

        resetBtn.innerHTML = `
            <i class="fa-solid fa-spinner fa-spin"></i>
            Sending...
        `;

        // Fake API Delay

        setTimeout(() => {

            showToast("Password reset link sent successfully.");

            console.log("Reset Email:", emailValue);

            form.reset();

            resetBtn.disabled = false;

            resetBtn.innerHTML = `
                <i class="fa-solid fa-paper-plane"></i>
                Send Reset Link
            `;

            // ===========================
            // Future Backend
            // ===========================
            /*
            fetch("http://localhost:5000/api/auth/forgot-password", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({

                    email: emailValue

                })

            })
            .then(res => res.json())
            .then(data => {

                showToast(data.message);

            })
            .catch(() => {

                showToast("Something went wrong.", false);

            });
            */

        }, 2000);

    });

});