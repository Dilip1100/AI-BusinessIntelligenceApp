document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const navLinks = Array.from(document.querySelectorAll(".nav-links a[href^='#']"));

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const body = [
        ["Name", data.get("name")],
        ["Email", data.get("email")],
        ["Phone", data.get("phone")],
        ["Requirement", data.get("requirement")]
      ]
        .map(([label, value]) => `${label}: ${String(value || "").trim()}`)
        .join("\n");

      const subject = "Business Intelligence Demo Request";
      window.location.href = `mailto:dilip1100@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  }

  if ("IntersectionObserver" in window && navLinks.length) {
    const sections = navLinks
      .map((link) => document.querySelector(link.getAttribute("href")))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const active = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!active) return;
        navLinks.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${active.target.id}`);
        });
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0.15, 0.35, 0.6] }
    );

    sections.forEach((section) => observer.observe(section));
  }
});
