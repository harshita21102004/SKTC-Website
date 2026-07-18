// =====================================
// S.K. Trading Company
// contact.js (Version 2)
// =====================================

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contactForm");
    const submitBtn = document.getElementById("submitBtn");
    const messageBox = document.getElementById("message");
    const charCount = document.getElementById("charCount");
    const toast = document.getElementById("toast");

    if (!form) return;

    // Character Counter

    messageBox.addEventListener("input", () => {

        charCount.innerText = messageBox.value.length;

    });

    // Submit Form

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        const formData = {

            name: document.getElementById("name").value.trim(),
            email: document.getElementById("email").value.trim(),
            phone: document.getElementById("phone").value.trim(),
            subject: document.getElementById("subject").value.trim(),
            message: messageBox.value.trim()

        };

        // Validation

        if (!validate(formData))
            return;

        // Button Loading

        submitBtn.disabled = true;

        submitBtn.innerHTML =
            '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';

        // Future API Call

        setTimeout(() => {

            console.log(formData);

            showToast("Message Sent Successfully!");

            form.reset();

            charCount.innerText = "0";

            submitBtn.disabled = false;

            submitBtn.innerHTML =
                '<i class="fa-solid fa-paper-plane"></i> Send Message';

        }, 1500);

    });

});


// ============================
// Validation
// ============================

function validate(data) {

    if (!data.name ||
        !data.email ||
        !data.phone ||
        !data.subject ||
        !data.message
    ) {

        showToast("Please fill all fields.");

        return false;

    }

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(data.email)) {

        showToast("Invalid Email Address");

        return false;

    }

    const phonePattern =
        /^[6-9]\d{9}$/;

    if (!phonePattern.test(data.phone)) {

        showToast("Invalid Mobile Number");

        return false;

    }

    if (data.message.length < 10) {

        showToast("Message is too short.");

        return false;

    }

    return true;

}


// ============================
// Toast
// ============================

function showToast(message) {

    const toast = document.getElementById("toast");

    toast.innerText = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 3000);

}