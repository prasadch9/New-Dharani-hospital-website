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



document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       CELEBRATION POPUP ELEMENTS
    ===================================================== */

    const celebrationPopup =
        document.getElementById("celebrationPopup");

    const celebrationClose =
        document.getElementById("celebrationClose");

    const celebrationOverlay =
        celebrationPopup?.querySelector(".celebration-overlay");

    const confettiContainer =
        document.getElementById("confettiContainer");


    /* =====================================================
       SAFETY CHECK
    ===================================================== */

    if (!celebrationPopup || !celebrationClose) {
        return;
    }


    /* =====================================================
       OPEN POPUP
    ===================================================== */

    function openCelebrationPopup() {

        celebrationPopup.classList.add("show");

        /* Prevent website background from scrolling */
        document.body.classList.add("celebration-open");

        /* Create confetti */
        createConfetti();
    }


    /* =====================================================
       CLOSE POPUP
    ===================================================== */

    function closeCelebrationPopup() {

        celebrationPopup.classList.remove("show");

        /* Allow website background scrolling again */
        document.body.classList.remove("celebration-open");
    }


    /* =====================================================
       CLOSE BUTTON
    ===================================================== */

    celebrationClose.addEventListener(
        "click",
        closeCelebrationPopup
    );


    /* =====================================================
       CLICK OUTSIDE POPUP
    ===================================================== */

    if (celebrationOverlay) {

        celebrationOverlay.addEventListener(
            "click",
            closeCelebrationPopup
        );

    }


    /* =====================================================
       ESC KEY TO CLOSE
    ===================================================== */

    document.addEventListener("keydown", (event) => {

        if (
            event.key === "Escape" &&
            celebrationPopup.classList.contains("show")
        ) {

            closeCelebrationPopup();

        }

    });


    /* =====================================================
       CONFETTI
    ===================================================== */

    function createConfetti() {

        if (!confettiContainer) {
            return;
        }

        /* Clear previous confetti */
        confettiContainer.innerHTML = "";


        const confettiCount =
            window.innerWidth <= 600 ? 35 : 55;


        for (let i = 0; i < confettiCount; i++) {

            const confetti =
                document.createElement("span");


            confetti.className =
                "celebration-confetti";


            /* Random position */
            confetti.style.left =
                Math.random() * 100 + "%";


            /* Random animation delay */
            confetti.style.animationDelay =
                Math.random() * 2 + "s";


            /* Random animation duration */
            confetti.style.animationDuration =
                (3 + Math.random() * 3) + "s";


            /* Random size */
            const size =
                5 + Math.random() * 6;

            confetti.style.width =
                size + "px";

            confetti.style.height =
                size * 1.5 + "px";


            /* Random rotation */
            confetti.style.transform =
                `rotate(${Math.random() * 360}deg)`;


            confettiContainer.appendChild(confetti);

        }

    }


    /* =====================================================
       OPTIONAL:
       OPEN POPUP AUTOMATICALLY
    ===================================================== */

   /* =====================================================
   OPEN IMMEDIATELY + AUTO CLOSE AFTER 6 SECONDS
===================================================== */

/* =====================================================
   OPEN IMMEDIATELY + AUTO CLOSE AFTER 6 SECONDS
===================================================== */

openCelebrationPopup();

setTimeout(() => {

    closeCelebrationPopup();

}, 6000);

});