const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const body = [
    ["Name", data.get("name")],
    ["Email", data.get("email")],
    ["Phone", data.get("phone")],
    ["Requirement", data.get("requirement")]
  ]
    .map(([label, value]) => `${label}: ${value || ""}`)
    .join("\n");

  const subject = "Business Intelligence Demo Request";
  window.location.href = `mailto:dilip1100@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
