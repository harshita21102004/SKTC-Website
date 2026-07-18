// ===============================
// Categories Page JS
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    console.log("Categories Page Loaded");

    const cards = document.querySelectorAll(".category-card");

    cards.forEach((card) => {

        card.addEventListener("click", () => {

            const category =
                card.querySelector("h3").innerText;

            alert("Opening " + category + " Category");

            // Redirect to Products Page
            window.location.href = "products.html";

        });

    });

});