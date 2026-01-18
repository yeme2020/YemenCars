document.addEventListener("DOMContentLoaded", () => {

    const exitBtn = document.getElementById("exitBtn");
    const modal = document.getElementById("exitModal");
    const cancelBtn = document.getElementById("cancelExit");
    const confirmBtn = document.getElementById("confirmExit");
    const msg = document.getElementById("exitMessage");

    // Debug لو عنصر ناقص
    if (!exitBtn || !modal || !cancelBtn || !confirmBtn || !msg) {
        console.warn("Exit modal elements missing in page");
        return;
    }

    // عند الضغط على Exit
    exitBtn.addEventListener("click", () => {

        // جرّب Ajax أولاً
        fetch("/api/exit-check", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                page: window.location.pathname,
                time: new Date().toISOString()
            })
        })
        .then(res => {
            // لو السيرفر غير موجود
            if (!res.ok) throw new Error("Server not available");
            return res.json();
        })
        .then(data => {
            if (data.allowExit) {
                msg.textContent = data.message || "هل أنت متأكد أنك تريد الخروج؟";
                modal.classList.add("show");
            } else {
                alert("لا يمكنك الخروج الآن");
            }
        })
        .catch(() => {
            // fallback: اعرض الـ modal حتى بدون سيرفر
            msg.textContent = "هل أنت متأكد أنك تريد الخروج من الموقع؟";
            modal.classList.add("show");
        });
    });

    // زر لا
    cancelBtn.addEventListener("click", () => {
        modal.classList.remove("show");
    });

    // زر نعم
    confirmBtn.addEventListener("click", () => {
        window.location.href = "index.html";
    });

    // إغلاق عند الضغط خارج الصندوق
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("show");
        }
    });
});
