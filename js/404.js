// =======================================
// S.K. Trading Company
// 404.js
// =======================================

document.addEventListener("DOMContentLoaded", () => {

    const toast = document.getElementById("toast");
    const homeBtn = document.querySelector(".home-btn");
    const contactBtn = document.querySelector(".contact-btn");

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
    // Welcome Message
    // ===================================

    setTimeout(() => {

        showToast("Page not found! Redirecting to Home...");

    }, 500);

    // ===================================
    // Auto Redirect (5 Seconds)
    // ===================================

    setTimeout(() => {

        window.location.href = "../index.html";

    }, 5000);

    // ===================================
    // Home Button
    // ===================================

    if (homeBtn) {

        homeBtn.addEventListener("click", () => {

            showToast("Redirecting to Home...");

        });

    }

    // ===================================
    // Contact Button
    // ===================================

    if (contactBtn) {

        contactBtn.addEventListener("click", () => {

            showToast("Opening Contact Page...");

        });

    }

});