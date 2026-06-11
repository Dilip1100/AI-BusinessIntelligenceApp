document.addEventListener("DOMContentLoaded", () => {
  // Mobile Navigation
  const mobileToggle = document.querySelector(".mobile-toggle");
  const nav = document.querySelector(".nav");

  if (mobileToggle && nav) {
    mobileToggle.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }

  // Smooth Scroll Navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (event) {
      const targetId = this.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

      if (nav) {
        nav.classList.remove("active");
      }
    });
  });

  // Header Scroll Effect
  const header = document.querySelector(".site-header");

  window.addEventListener("scroll", () => {
    if (!header) return;

    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Reveal Animations
  const revealElements = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  revealElements.forEach(element => {
    revealObserver.observe(element);
  });

  // Card Hover Enhancement
  const cards = document.querySelectorAll(
    ".solution-card, .feature-card, .image-card, .model-card, .framework-card"
  );

  cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.classList.add("hovered");
    });

    card.addEventListener("mouseleave", () => {
      card.classList.remove("hovered");
    });
  });

  // Demo Enquiry Form
  const form = document.getElementById("enquiryForm");

  // Formspree Endpoint
  // Replace "yourFormId" with your real Formspree form ID after creating a form.
  const FORMSPREE_ENDPOINT =
    "https://formspree.io/f/xqeodybp";

  if (form) {
    form.addEventListener("submit", async event => {
      event.preventDefault();

      const submitButton = form.querySelector("button[type='submit']");

      const payload = {
        name:
          document.getElementById("name")?.value.trim() || "",
        email:
          document.getElementById("email")?.value.trim() || "",
        phone:
          document.getElementById("phone")?.value.trim() || "",
        requirement:
          document.getElementById("requirement")?.value.trim() || ""
      };

      if (!payload.name || !payload.email) {
        alert("Please enter your name and email.");
        return;
      }

      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = "Sending...";
      }

      // Formspree Submission
      if (FORMSPREE_ENDPOINT) {
        try {
          const response = await fetch(
            FORMSPREE_ENDPOINT,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
              },
              body: JSON.stringify({
                name: payload.name,
                email: payload.email,
                phone: payload.phone,
                requirement: payload.requirement,
                source: "Enterprise AI Business Intelligence Website"
              })
            }
          );

          if (response.ok) {
            alert(
              "Thank you. Your enquiry has been submitted successfully."
            );

            form.reset();

            if (submitButton) {
              submitButton.disabled = false;
              submitButton.textContent = "Send Enquiry";
            }

            return;
          }

          throw new Error("Formspree submission failed");
        } catch (error) {
          console.error(error);

          alert(
            "Form submission could not be completed. Opening email fallback instead."
          );
        }
      }

      // Mailto Fallback
      const subject = encodeURIComponent(
        "Enterprise AI BI Demo Request"
      );

      const body = encodeURIComponent(
`Name: ${payload.name}

Email: ${payload.email}

Phone: ${payload.phone}

Requirement:
${payload.requirement}

---
Sent from Enterprise AI Business Intelligence Website`
      );

      window.location.href =
        `mailto:dilip1100@gmail.com?subject=${subject}&body=${body}`;

      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = "Send Enquiry";
      }
    });
  }

  // KPI Counter Animation
  const counters = document.querySelectorAll("[data-counter]");

  const counterObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        const element = entry.target;
        const target = Number(
          element.getAttribute("data-counter")
        );

        let current = 0;
        const increment = Math.ceil(target / 50);

        const timer = setInterval(() => {
          current += increment;

          if (current >= target) {
            current = target;
            clearInterval(timer);
          }

          element.textContent = current;
        }, 25);

        counterObserver.unobserve(element);
      });
    },
    {
      threshold: 0.5
    }
  );

  counters.forEach(counter => {
    counterObserver.observe(counter);
  });

  console.log(
    "Enterprise AI BI Website Loaded Successfully"
  );
});
