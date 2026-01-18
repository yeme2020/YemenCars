document.addEventListener("DOMContentLoaded", () => {
    try {
        /* =====================
           SIDEBAR
        ===================== */
        const toggleBtn = document.getElementById("toggleSidebar");
        const sidebar = document.getElementById("sidebar");
        const overlay = document.getElementById("sidebarOverlay");

        if (toggleBtn && sidebar && overlay) {
            const icon = toggleBtn.querySelector("i");

            const toggleSidebar = () => {
                const isOpen = sidebar.classList.toggle("active");
                overlay.classList.toggle("active");
                document.body.classList.toggle("sidebar-open");

                if (icon) {
                    if (isOpen) {
                        icon.classList.replace("fa-bars", "fa-xmark");
                        toggleBtn.title = "إخفاء القائمة";
                    } else {
                        icon.classList.replace("fa-xmark", "fa-bars");
                        toggleBtn.title = "إظهار القائمة";
                    }
                }
            };

            toggleBtn.addEventListener("click", toggleSidebar);
            overlay.addEventListener("click", toggleSidebar);
        } else {
            console.warn("Sidebar elements missing");
        }

    } catch (err) {
        console.error("Script error:", err);
    }
});