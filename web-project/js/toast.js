document.addEventListener("DOMContentLoaded", () => {
    const toast = document.getElementById("toast");

    if (!toast) {
        console.warn("Toast element not found");
        return;
    }

    // اجعلها متاحة عالميًا
    window.showToast = function (message, type = "success") {
        toast.textContent = message;
        toast.className = `toast-inline show ${type}`;

        setTimeout(() => {
            toast.className = "toast-inline";
        }, 3000);
    };
});
