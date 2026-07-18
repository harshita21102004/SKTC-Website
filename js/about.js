// ===============================
// About Page JS
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    console.log("About Page Loaded");

    // Smooth Scroll

    document.querySelectorAll('a[href^="#"]').forEach((link) => {

        link.addEventListener("click", function(e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

});