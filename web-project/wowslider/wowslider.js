document.addEventListener("DOMContentLoaded", () => {
    try {
        /* =====================
           CAROUSEL
        ===================== */
        const carousel = document.getElementById("carousel");
        const dotsContainer = document.getElementById("carouselDots");
        const nextBtn = document.getElementById("nextBtn");
        const prevBtn = document.getElementById("prevBtn");

        if (!carousel || !dotsContainer || !nextBtn || !prevBtn) {
            console.warn("Carousel elements missing");
            return;
        }

        // فقط الكروت داخل هذا الكاروسيل
        const cards = carousel.querySelectorAll(".car-card");

        if (!cards.length) {
            console.warn("No cards found in carousel");
            return;
        }

        let index = 0;
        let autoPlay = null;

        /* ===== Create dots ===== */
        dotsContainer.innerHTML = "";
        cards.forEach((_, i) => {
            const dot = document.createElement("span");
            if (i === 0) dot.classList.add("active");

            dot.addEventListener("click", () => {
                index = i;
                scrollToCard();
                resetAutoplay();
            });

            dotsContainer.appendChild(dot);
        });

        const dots = dotsContainer.querySelectorAll("span");

        function updateDots() {
            dots.forEach(d => d.classList.remove("active"));
            if (dots[index]) {
                dots[index].classList.add("active");
            }
        }

        function getCardWidth() {
            return cards[0].getBoundingClientRect().width;
        }

        function scrollToCard(animate = true) {
            const width = getCardWidth();

            carousel.scrollTo({
                left: width * index,
                behavior: animate ? "smooth" : "auto"
            });

            updateDots();
        }

        /* ===== Buttons ===== */
        nextBtn.addEventListener("click", () => {
            index = (index + 1) % cards.length;
            scrollToCard(true);
            resetAutoplay();
        });

        prevBtn.addEventListener("click", () => {
            index = (index - 1 + cards.length) % cards.length;
            scrollToCard(true);
            resetAutoplay();
        });

        /* ===== Autoplay ===== */
        function startAutoplay() {
            autoPlay = setInterval(() => {
                index = (index + 1) % cards.length;
                scrollToCard(true);
            }, 3000);
        }

        function resetAutoplay() {
            if (autoPlay) clearInterval(autoPlay);
            startAutoplay();
        }

        startAutoplay();

        /* ===== Resize handling ===== */
        window.addEventListener("resize", () => {
            scrollToCard(false);
        });

        /* ===== Click → details ===== */
        cards.forEach(card => {
            card.addEventListener("click", () => {
                const link = card.getAttribute("data-link");
                if (link) {
                    window.location.href = link;
                }
            });
        });

    } catch (err) {
        console.error("Carousel script error:", err);
    }
});
