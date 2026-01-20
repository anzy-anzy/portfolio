/* ===========================
   SMOOTH SCROLL
=========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

/* ===========================
   DARK MODE TOGGLE
=========================== */

const toggleBtn = document.getElementById("toggleTheme");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        toggleBtn.textContent = "☀️";
    } else {
        toggleBtn.textContent = "🌙";
    }
});

/* ===========================
   TESTIMONIAL FORM HANDLER
=========================== */

document.getElementById("testimonialForm").addEventListener("submit", function(e) {
    e.preventDefault();

    alert("Thank you! Your testimonial has been submitted.");

    this.reset();
});