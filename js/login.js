// =====================================
// S.K. Trading Company
// login.js
// =====================================

document.addEventListener("DOMContentLoaded", () => {

    const loginForm = document.getElementById("loginForm");
    const loginBtn = document.getElementById("loginBtn");
    const togglePassword = document.getElementById("togglePassword");
    const passwordInput = document.getElementById("password");
    const toast = document.getElementById("toast");

    if (!loginForm) return;

    // ==========================
    // Show / Hide Password
    // ==========================

    togglePassword.addEventListener("click", () => {

        if (passwordInput.type === "password") {

            passwordInput.type = "text";
            togglePassword.classList.remove("fa-eye");
            togglePassword.classList.add("fa-eye-slash");

        } else {

            passwordInput.type = "password";
            togglePassword.classList.remove("fa-eye-slash");
            togglePassword.classList.add("fa-eye");

        }

    });

    // ==========================
    // Login Form Submit
    // ==========================

    loginForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = passwordInput.value.trim();
        const remember = document.getElementById("remember").checked;

        // ==========================
        // Validation
        // ==========================

        if (email === "" || password === "") {

            showToast("Please fill all fields.");
            return;

        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            showToast("Invalid Email Address.");
            return;

        }

        if (password.length < 6) {

            showToast("Password must be at least 6 characters.");
            return;

        }

        // ==========================
        // Login Data
        // ==========================

        const loginData = {

            email,
            password,
            remember

        };

        console.log(loginData);

        // ==========================
        // Loading Button
        // ==========================

        loginBtn.disabled = true;

        loginBtn.innerHTML =
            '<i class="fa-solid fa-spinner fa-spin"></i> Logging in...';

        // ==========================
        // Future Backend API
        // ==========================

        /*
        fetch("http://localhost:5000/api/auth/login", {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify(loginData)

        });
        */

        // Demo Success

        setTimeout(() => {

            showToast("Login Successful!");

            loginBtn.disabled = false;

            loginBtn.innerHTML =
                '<i class="fa-solid fa-right-to-bracket"></i> Login';

            loginForm.reset();

            // Future Redirect

            // window.location.href = "../index.html";

        }, 1500);

    });

    // ==========================
    // Toast Function
    // ==========================

    function showToast(message) {

        toast.innerText = message;

        toast.classList.add("show");

        setTimeout(() => {

            toast.classList.remove("show");

        }, 3000);

    }

});