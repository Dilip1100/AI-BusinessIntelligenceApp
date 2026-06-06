// =====================================================
// Enterprise AI BI Website
// script.js
// =====================================================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // Mobile Navigation
    // ==========================================

    const mobileToggle = document.querySelector(".mobile-toggle");
    const nav = document.querySelector(".nav");

    if (mobileToggle && nav) {
        mobileToggle.addEventListener("click", () => {
            nav.classList.toggle("active");
        });
    }

    // ==========================================
    // Smooth Scroll
    // ==========================================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {
                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

                nav?.classList.remove("active");
            }
        });
    });

    // ==========================================
    // Scroll Reveal
    // ==========================================

    const revealElements = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("revealed");
                }

            });
        },
        {
            threshold: 0.15
        }
    );

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // ==========================================
    // Sticky Header
    // ==========================================

    const header = document.querySelector(".site-header");

    window.addEventListener("scroll", () => {

        if (!header) return;

        if (window.scrollY > 30) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    });

    // ==========================================
    // Enquiry Form
    // ==========================================

    const form = document.getElementById("enquiryForm");

    if (form) {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            const name =
                document.getElementById("name")?.value || "";

            const email =
                document.getElementById("email")?.value || "";

            const phone =
                document.getElementById("phone")?.value || "";

            const requirement =
                document.getElementById("requirement")?.value || "";

            const body = `
Name: ${name}

Email: ${email}

Phone: ${phone}

Requirement:

${requirement}
`;

            const mailtoLink =
                `mailto:dilip1100@gmail.com` +
                `?subject=${encodeURIComponent("Enterprise BI Demo Request")}` +
                `&body=${encodeURIComponent(body)}`;

            window.location.href = mailtoLink;

            form.reset();

        });

    }

    // ==========================================
    // CTA Tracking (Optional)
    // ==========================================

    document.querySelectorAll(".button").forEach(btn => {

        btn.addEventListener("click", () => {

            console.log(
                "CTA Clicked:",
                btn.textContent.trim()
            );

        });

    });

    // ==========================================
    // Image Hover Enhancement
    // ==========================================

    const cards = document.querySelectorAll(
        ".solution-card, .image-card, .feature-card"
    );

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {
            card.classList.add("hovered");
        });

        card.addEventListener("mouseleave", () => {
            card.classList.remove("hovered");
        });

    });

    // ==========================================
    // Current Year Footer
    // ==========================================

    const yearElement =
        document.getElementById("currentYear");

    if (yearElement) {
        yearElement.textContent =
            new Date().getFullYear();
    }

});

// =====================================================
// Optional Formspree Integration
// =====================================================
//
// Replace submit handler above with:
//
// fetch("YOUR_FORMSPREE_ENDPOINT", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//         name,
//         email,
//         phone,
//         requirement
//     })
// })
//
// =====================================================

// =====================================================
// Optional EmailJS Integration
// =====================================================
//
// emailjs.send(
//     "SERVICE_ID",
//     "TEMPLATE_ID",
//     {
//         name,
//         email,
//         phone,
//         requirement
//     },
//     "PUBLIC_KEY"
// );
//
// =====================================================
