// =======================================
// S.K. Trading Company
// profile.js
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

        showToast("👋 Welcome to Your Profile!");

    }, 500);

    // ===================================
    // Edit Profile
    // ===================================

    const editBtn = document.querySelector(".edit-btn");

    if (editBtn) {

        editBtn.addEventListener("click", () => {

            showToast("Edit Profile feature coming soon.");

            console.log("Edit Profile Clicked");

            // Future Backend
            // window.location.href = "edit-profile.html";

        });

    }

    // ===================================
    // Change Password
    // ===================================

    const passwordBtn = document.querySelector(".password-btn");

    if (passwordBtn) {

        passwordBtn.addEventListener("click", () => {

            showToast("Redirecting to Change Password...");

            console.log("Change Password");

            // Future Backend
            // window.location.href = "change-password.html";

        });

    }

    // ===================================
    // Logout
    // ===================================

    const logoutBtn = document.querySelector(".logout-btn");

    if (logoutBtn) {

        logoutBtn.addEventListener("click", () => {

            const confirmLogout = confirm("Are you sure you want to logout?");

            if (!confirmLogout) return;

            showToast("Logged out successfully.");

            console.log("User Logged Out");

            // Future Backend
            /*
            localStorage.removeItem("token");
            sessionStorage.clear();

            setTimeout(() => {
                window.location.href = "login.html";
            }, 1200);
            */

        });

    }

    // ===================================
    // Future API Example
    // ===================================

    /*
    fetch("http://localhost:5000/api/profile", {

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