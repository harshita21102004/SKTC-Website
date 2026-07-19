// =======================================
// S.K. Trading Company
// register.js
// =======================================

document.addEventListener("DOMContentLoaded", () => {

    const registerForm = document.getElementById("registerForm");
    const registerBtn = document.getElementById("registerBtn");

    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");

    const togglePassword = document.getElementById("togglePassword");
    const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");

    const toast = document.getElementById("toast");

    if (!registerForm) return;

    // ===================================
    // Show / Hide Password
    // ===================================

    togglePassword.addEventListener("click", () => {

        if (password.type === "password") {

            password.type = "text";
            togglePassword.classList.replace("fa-eye", "fa-eye-slash");

        } else {

            password.type = "password";
            togglePassword.classList.replace("fa-eye-slash", "fa-eye");

        }

    });

    // ===================================
    // Show / Hide Confirm Password
    // ===================================

    toggleConfirmPassword.addEventListener("click", () => {

        if (confirmPassword.type === "password") {

            confirmPassword.type = "text";
            toggleConfirmPassword.classList.replace("fa-eye", "fa-eye-slash");

        } else {

            confirmPassword.type = "password";
            toggleConfirmPassword.classList.replace("fa-eye-slash", "fa-eye");

        }

    });

    // ===================================
    // Register Form
    // ===================================

    registerForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const fullName = document.getElementById("fullName").value.trim();
        const email = document.getElementById("email").value.trim();
        const mobile = document.getElementById("mobile").value.trim();

        const pass = password.value.trim();
        const confirmPass = confirmPassword.value.trim();

        const terms = document.getElementById("terms").checked;

        // ==========================
        // Validation
        // ==========================

        if (
            fullName === "" ||
            email === "" ||
            mobile === "" ||
            pass === "" ||
            confirmPass === ""
        ) {

            showToast("Please fill all fields.");
            return;

        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            showToast("Invalid Email Address.");
            return;

        }

        const mobilePattern = /^[6-9]\d{9}$/;

        if (!mobilePattern.test(mobile)) {

            showToast("Enter a valid 10-digit mobile number.");
            return;

        }

        if (pass.length < 6) {

            showToast("Password must be at least 6 characters.");
            return;

        }

        if (pass !== confirmPass) {

            showToast("Passwords do not match.");
            return;

        }

        if (!terms) {

            showToast("Please accept Terms & Conditions.");
            return;

        }

        // ==========================
        // User Object
        // ==========================

        const userData = {

            fullName,
            email,
            mobile,
            password: pass

        };

        console.log(userData);

        // ==========================
        // Loading Button
        // ==========================

        registerBtn.disabled = true;

        registerBtn.innerHTML =
            '<i class="fa-solid fa-spinner fa-spin"></i> Creating Account...';

        // ===================================
        // Future Backend API
        // ===================================

        /*
        fetch("http://localhost:5000/api/auth/register", {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify(userData)

        });

        */

        // Demo Success

        setTimeout(() => {

            showToast("Registration Successful!");

            registerBtn.disabled = false;

            registerBtn.innerHTML =
                '<i class="fa-solid fa-user-plus"></i> Create Account';

            registerForm.reset();

            // Future Redirect

            // window.location.href = "login.html";

        }, 1800);

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