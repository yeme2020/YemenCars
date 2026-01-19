document.addEventListener("DOMContentLoaded", () => {
    try {
        /* =====================
           ELEMENTS
        ===================== */
        const toggleBtn = document.getElementById("toggleSidebar");
        const sidebar = document.getElementById("sidebar");
        const overlay = document.getElementById("sidebarOverlay");
        const mainNav = document.querySelector(".main-nav");

        if (!toggleBtn) {
            console.warn("Toggle button not found");
            return;
        }

        const icon = toggleBtn.querySelector("i");

        /* =====================
           TOGGLE FUNCTION
        ===================== */
        const toggleMenu = () => {
            const sidebarOpen = sidebar?.classList.toggle("active");
            overlay?.classList.toggle("active");
            document.body.classList.toggle("sidebar-open");

            // Toggle top mobile nav
            if (mainNav) {
                mainNav.classList.toggle("show");
            }

            // Change icon
            if (icon) {
                if (sidebarOpen) {
                    icon.classList.replace("fa-bars", "fa-xmark");
                    toggleBtn.title = "إخفاء القائمة";
                } else {
                    icon.classList.replace("fa-xmark", "fa-bars");
                    toggleBtn.title = "إظهار القائمة";
                }
            }
        };

        /* =====================
           EVENTS
        ===================== */
        toggleBtn.addEventListener("click", toggleMenu);

        // Click outside closes everything
        if (overlay) {
            overlay.addEventListener("click", () => {
                sidebar?.classList.remove("active");
                overlay.classList.remove("active");
                mainNav?.classList.remove("show");

                if (icon) {
                    icon.classList.replace("fa-xmark", "fa-bars");
                    toggleBtn.title = "إظهار القائمة";
                }
            });
        }

        // Click link closes menu (mobile UX)
        document.querySelectorAll(".main-nav a").forEach(link => {
            link.addEventListener("click", () => {
                sidebar?.classList.remove("active");
                overlay?.classList.remove("active");
                mainNav?.classList.remove("show");

                if (icon) {
                    icon.classList.replace("fa-xmark", "fa-bars");
                    toggleBtn.title = "إظهار القائمة";
                }
            });
        });

    } catch (err) {
        console.error("Sidebar script error:", err);
    }
});
