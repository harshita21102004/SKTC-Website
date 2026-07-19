// =======================================
// S.K. Trading Company
// return-policy.js
// =======================================

document.addEventListener("DOMContentLoaded", () => {

    // ===============================
    // Toast Element
    // ===============================

    const toast = document.getElementById("toast");

    // ===============================
    // Toast Function
    // ===============================

    function showToast(message, success = true) {

        if (!toast) return;

        toast.textContent = message;

        toast.style.background = success ?
            "#198754" :
            "#dc3545";

        toast.classList.add("show");

        setTimeout(() => {

            toast.classList.remove("show");

        }, 3000);

    }

    // ===============================
    // Welcome Message
    // ===============================

    setTimeout(() => {

        showToast("Return Policy Loaded Successfully.");

    }, 500);

    // ===============================
    // Card Hover Animation
    // ===============================

    const cards = document.querySelectorAll(".return-box");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-8px)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "translateY(0)";

        });

    });

    // ===============================
    // Smooth Scroll
    // ===============================

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function(e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        });

    });

    // ===============================
    // Future Backend Ready
    // ===============================

    /*
    fetch("/api/return-policy")
        .then(res => res.json())
        .then(data => {

            console.log(data);

            // Dynamic Return Policy Content

        })
        .catch(err => {

            console.error(err);

        });
    */

});