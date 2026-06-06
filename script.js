// Mobile Navigation
const toggle = document.querySelector(".mobile-toggle");
const nav = document.querySelector(".nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

// Reveal Animations
const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.12,
  }
);

revealItems.forEach((item) => observer.observe(item));

// ====================================
// ENQUIRY FORM CONFIGURATION
// ====================================

// Option 1: Formspree
// Example:
// const FORMSPREE_ENDPOINT = "https://formspree.io/f/xxxxxxxx";

const FORMSPREE_ENDPOINT = "";

// ====================================
// FORM SUBMISSION
// ====================================

const enquiryForm = document.getElementById("enquiryForm");

if (enquiryForm) {
  enquiryForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const payload = {
      name: document.getElementById("name")?.value.trim() || "",
      email: document.getElementById("email")?.value.trim() || "",
      phone: document.getElementById("phone")?.value.trim() || "",
      requirement:
        document.getElementById("requirement")?.value.trim() || "",
    };

    // Formspree Integration
    if (FORMSPREE_ENDPOINT) {
      try {
        const response = await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (response.ok) {
          alert(
            "Thank you. Your enquiry has been submitted successfully."
          );

          enquiryForm.reset();
          return;
        }
      } catch (error) {
        console.warn(
          "Formspree submission failed. Using mailto fallback.",
          error
        );
      }
    }

    // Mailto Fallback
    const subject = encodeURIComponent(
      "Enterprise BI Demo Request"
    );

    const body = encodeURIComponent(
`Name: ${payload.name}

Email: ${payload.email}

Phone: ${payload.phone}

Requirement:
${payload.requirement}`
    );

    window.location.href =
      `mailto:dilip1100@gmail.com?subject=${subject}&body=${body}`;
  });
}

// ====================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ====================================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");

    if (targetId && targetId !== "#") {
      const target = document.querySelector(targetId);

      if (target) {
        e.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        nav?.classList.remove("open");
      }
    }
  });
});

// ====================================
// SIMPLE HOVER ENHANCEMENT
// ====================================

document
  .querySelectorAll(
    ".feature-card, .solution-card, .model-card, .image-card"
  )
  .forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-4px)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });

console.log(
  "Enterprise AI Business Intelligence Website Loaded Successfully"
);