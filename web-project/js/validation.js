document.addEventListener("DOMContentLoaded", () => {

     
    /* =====================
       LOGIN VALIDATION
    ===================== */
    const form = document.getElementById("loginForm");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const togglePassword = document.getElementById("togglePassword");

    if (togglePassword) {
        togglePassword.addEventListener("click", () => {
            const type = password.getAttribute("type") === "password" ? "text" : "password";
            password.setAttribute("type", type);
            togglePassword.classList.toggle("fa-eye");
            togglePassword.classList.toggle("fa-eye-slash");
        });
    }

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            let valid = true;

            clearErrors();

            if (!email.value || !email.value.includes("@")) {
                showError(email, "يرجى إدخال بريد إلكتروني صحيح");
                showToast("بريد إلكتروني غير صالح", "error");
                valid = false;
            }

            if (!password.value || password.value.length < 6) {
                showError(password, "كلمة المرور يجب أن تكون 6 أحرف على الأقل");
                showToast("كلمة المرور قصيرة جدًا", "error");
                valid = false;
            }

            if (valid) {
                showToast("تم تسجيل الدخول بنجاح ✔", "success");
                setTimeout(() => {
                    form.reset();
                }, 500);
            }
        });
    }

    function showError(input, message) {
        const formGroup = input.closest(".form-group");
        const errorMsg = formGroup.querySelector(".error-msg");
        errorMsg.textContent = message;
        errorMsg.style.display = "block";
        input.style.borderColor = "#e63946";
    }

    function clearErrors() {
        document.querySelectorAll(".error-msg").forEach(msg => {
            msg.textContent = "";
            msg.style.display = "none";
        });

        document.querySelectorAll(".form-group input").forEach(input => {
            input.style.borderColor = "#ccc";
        });
    }
});