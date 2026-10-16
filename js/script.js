
// Mobile navigation
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});

// Close the mobile menu after clicking a navigation link
navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
});

// Display the current year in the footer
document.getElementById("year").textContent =
    new Date().getFullYear();

// Demo Get Started interaction
const getStartedButton = document.getElementById("get-started");
const contactMessage = document.getElementById("contact-message");

getStartedButton.addEventListener("click", function () {
    contactMessage.textContent =
        "Thanks for your interest! This is a demo landing page.";

    getStartedButton.textContent = "Thank You!";
});
