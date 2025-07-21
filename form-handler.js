
// Replace 'your_formspree_endpoint' with your actual endpoint

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const formData = Object.fromEntries(data.entries());

    try {
      const response = await fetch("https://formspree.io/f/mqalekaa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Thank you! We’ll contact you soon.");
        form.reset();
      } else {
        alert("Something went wrong. Please try again later.");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      alert("Error submitting form.");
    }
  });
});
