document.addEventListener("DOMContentLoaded", () => {
    try {
        const toggleBtn = document.getElementById("toggleSidebar");
        const sidebar = document.getElementById("sidebar");
        const overlay = document.getElementById("sidebarOverlay");
        const mainNav = document.querySelector(".main-nav");

        if (!toggleBtn) return;

        const icon = toggleBtn.querySelector("i");

        // Detect mobile
        const isMobile = () => window.innerWidth <= 768;

        const openMenu = () => {
            if (isMobile()) {
                // Mobile → Top Nav
                mainNav?.classList.add("show");
            } else {
                // Desktop → Sidebar
                sidebar?.classList.add("active");
                overlay?.classList.add("active");
                document.body.classList.add("sidebar-open");
            }

            if (icon) {
                icon.classList.replace("fa-bars", "fa-xmark");
                toggleBtn.title = "إخفاء القائمة";
            }
        };

        const closeMenu = () => {
            mainNav?.classList.remove("show");
            sidebar?.classList.remove("active");
            overlay?.classList.remove("active");
            document.body.classList.remove("sidebar-open");

            if (icon) {
                icon.classList.replace("fa-xmark", "fa-bars");
                toggleBtn.title = "إظهار القائمة";
            }
        };

        const toggleMenu = () => {
            const isOpen =
                (isMobile() && mainNav?.classList.contains("show")) ||
                (!isMobile() && sidebar?.classList.contains("active"));

            isOpen ? closeMenu() : openMenu();
        };

        // Button
        toggleBtn.addEventListener("click", toggleMenu);

        // Overlay closes (desktop)
        overlay?.addEventListener("click", closeMenu);

        // Clicking links closes (mobile)
        document.querySelectorAll(".main-nav a").forEach(link => {
            link.addEventListener("click", closeMenu);
        });

        // Auto-fix when resizing screen
        window.addEventListener("resize", closeMenu);

    } catch (err) {
        console.error("Sidebar script error:", err);
    }
});
