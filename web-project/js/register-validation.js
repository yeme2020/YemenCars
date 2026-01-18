document.addEventListener("DOMContentLoaded", () => {
  
    /* =====================
       REGISTER VALIDATION
    ===================== */
    const form = document.getElementById("registerForm");
    const fullname = document.getElementById("fullname");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const togglePassword = document.getElementById("togglePassword");
    const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");
    const terms = document.getElementById("terms");

    if (togglePassword) {
        togglePassword.addEventListener("click", () => {
            const type = password.getAttribute("type") === "password" ? "text" : "password";
            password.setAttribute("type", type);
            togglePassword.classList.toggle("fa-eye");
            togglePassword.classList.toggle("fa-eye-slash");
        });
    }

    if (toggleConfirmPassword) {
        toggleConfirmPassword.addEventListener("click", () => {
            const type = confirmPassword.getAttribute("type") === "password" ? "text" : "password";
            confirmPassword.setAttribute("type", type);
            toggleConfirmPassword.classList.toggle("fa-eye");
            toggleConfirmPassword.classList.toggle("fa-eye-slash");
        });
    }

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            let valid = true;
            clearErrors();

            if (!fullname.value || fullname.value.length < 3) {
                showError(fullname, "يرجى إدخال اسم كامل صحيح");
                showToast("الاسم غير صالح", "error");
                valid = false;
            }

            if (!email.value || !email.value.includes("@")) {
                showError(email, "يرجى إدخال بريد إلكتروني صحيح");
                showToast("بريد إلكتروني غير صالح", "error");
                valid = false;
            }

            if (phone.value && phone.value.length < 8) {
                showError(phone, "رقم الهاتف غير صحيح");
                showToast("رقم الهاتف قصير", "error");
                valid = false;
            }

            if (!password.value || password.value.length < 6) {
                showError(password, "كلمة المرور يجب أن تكون 6 أحرف على الأقل");
                showToast("كلمة المرور ضعيفة", "error");
                valid = false;
            }

            if (password.value !== confirmPassword.value) {
                showError(confirmPassword, "كلمتا المرور غير متطابقتين");
                showToast("كلمات المرور غير متطابقة", "error");
                valid = false;
            }

            if (!terms.checked) {
                showToast("يجب الموافقة على الشروط والأحكام", "error");
                valid = false;
            }

            if (valid) {
                showToast("تم إنشاء الحساب بنجاح ✔", "success");
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