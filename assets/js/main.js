(() => {
    /* ---------- Kursor kustom (hanya desktop dengan mouse) ---------- */
    const cursor = document.getElementById("cursor");
    const ring = document.getElementById("cursorRing");
    const useCursor = window.matchMedia("(min-width: 900px) and (pointer: fine)").matches;

    if (useCursor && cursor && ring) {
        document.body.classList.add("has-cursor");
        cursor.classList.remove("hidden");
        ring.classList.remove("hidden");

        let mx = 0, my = 0, rx = 0, ry = 0;

        document.addEventListener("mousemove", (e) => {
            mx = e.clientX;
            my = e.clientY;
            cursor.style.left = mx - 4 + "px";
            cursor.style.top = my - 4 + "px";
        });

        const animateRing = () => {
            rx += (mx - rx - 16) * 0.12;
            ry += (my - ry - 16) * 0.12;
            ring.style.left = rx + "px";
            ring.style.top = ry + "px";
            requestAnimationFrame(animateRing);
        };
        animateRing();

        document.querySelectorAll("a, button").forEach((el) => {
            el.addEventListener("mouseenter", () => {
                cursor.style.transform = "scale(2.5)";
                ring.style.transform = "scale(1.5)";
            });
            el.addEventListener("mouseleave", () => {
                cursor.style.transform = "scale(1)";
                ring.style.transform = "scale(1)";
            });
        });
    }

    /* ---------- Menu mobile ---------- */
    const menuBtn = document.getElementById("menu-btn");
    const menu = document.getElementById("mobile-menu");

    if (menuBtn && menu) {
        const setMenu = (open) => {
            menu.classList.toggle("hidden", !open);
            menuBtn.setAttribute("aria-expanded", String(open));
            menuBtn.querySelector("[data-open]").classList.toggle("hidden", open);
            menuBtn.querySelector("[data-close]").classList.toggle("hidden", !open);
        };
        menuBtn.addEventListener("click", () => setMenu(menuBtn.getAttribute("aria-expanded") !== "true"));
        menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
        document.addEventListener("keydown", (e) => e.key === "Escape" && setMenu(false));
    }

    /* ---------- Animasi muncul saat di-scroll ---------- */
    const targets = document.querySelectorAll(".reveal, .reveal-stagger");

    const show = (el) => {
        if (el.classList.contains("reveal-stagger")) {
            [...el.children].forEach((child, i) => {
                child.style.animationDelay = i * 80 + "ms";
                child.classList.add("is-visible");
            });
        } else {
            el.classList.add("is-visible");
        }
    };

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    show(entry.target);
                    observer.unobserve(entry.target);
                });
            },
            { threshold: 0.05 },
        );
        targets.forEach((el) => observer.observe(el));
    } else {
        targets.forEach(show);
    }

    /* ---------- Tahun di footer ---------- */
    const year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();
})();
