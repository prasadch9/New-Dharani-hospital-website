// ===============================
// MOBILE MENU
// ===============================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    menuToggle.setAttribute("aria-expanded", navMenu.classList.contains("active"));
});


// ===============================
// CLOSE MENU AFTER CLICKING LINK
// ===============================

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});


// ===============================
// SCROLL REVEAL ANIMATIONS
// ===============================

const revealItems = document.querySelectorAll(
    ".section-heading, .about-grid, .emergency-card, .department-card, .doctor-card, .facility-card, .cta-content, .contact-card, .contact-form-wrapper, .footer-content"
);

revealItems.forEach((item, index) => {
    item.classList.add("reveal");

    if (index % 3 !== 0) {
        item.classList.add(`reveal-delay-${(index % 3)}`);
    }
});

if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }

            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.12 });

    revealItems.forEach(item => revealObserver.observe(item));
} else {
    revealItems.forEach(item => item.classList.add("is-visible"));
}


// ===============================
// HEADER SCROLL EFFECT
// ===============================

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


// ===============================
// CONTACT FORM
// ===============================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const message =
            document.getElementById("message").value.trim();


        if (name === "" ||
            phone === "" ||
            email === "" ||
            message === "") {

            alert("Please fill in all fields.");

            return;
        }


        alert(
            "Thank you, " +
            name +
            ". Your enquiry has been submitted."
        );

        contactForm.reset();

    });

}