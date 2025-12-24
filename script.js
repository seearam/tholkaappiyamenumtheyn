// Contact Button
document.getElementById("contactBtn").addEventListener("click", function() {
    const message = document.getElementById("message");
    message.textContent = "Thank you for reaching out! We'll get back to you soon. Lorem ipsum dolor sit amet.";
    message.style.color = "green";
});

// Hamburger Menu Toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});
