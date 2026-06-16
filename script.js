/* ==========================================
   PRIME TECH PREMIUM SCRIPT
========================================== */

/* ==========================================
   SMOOTH ACTIVE NAVBAR
========================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }

    });

});


/* ==========================================
   NAVBAR SCROLL EFFECT
========================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(15,23,42,0.95)";

        navbar.style.boxShadow =
            "0 10px 30px rgba(0,0,0,0.25)";

    } else {

        navbar.style.background =
            "rgba(15,23,42,0.75)";

        navbar.style.boxShadow = "none";

    }

});


/* ==========================================
   COUNTER ANIMATION
========================================== */

const counters = document.querySelectorAll(".stat-box h2");

const startCounters = () => {

    counters.forEach(counter => {

        const text = counter.innerText;

        const number = parseInt(text);

        if (isNaN(number)) return;

        let count = 0;

        const speed = number / 80;

        const updateCounter = () => {

            count += speed;

            if (count < number) {

                counter.innerText =
                    Math.ceil(count) + "+";

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText = text;

            }

        };

        updateCounter();

    });

};

let counterStarted = false;

window.addEventListener("scroll", () => {

    const stats = document.querySelector(".stats");

    if (!stats) return;

    const statsTop = stats.offsetTop - 500;

    if (
        window.scrollY > statsTop &&
        !counterStarted
    ) {

        startCounters();
        counterStarted = true;

    }

});


/* ==========================================
   SCROLL REVEAL ANIMATION
========================================== */

const revealElements = document.querySelectorAll(
    ".section, .stat-box, .project-card, .service-card, .feature-card, .review-card, .price-card"
);

revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(40px)";
    element.style.transition =
        "all 0.8s ease";

});

const revealOnScroll = () => {

    revealElements.forEach(element => {

        const windowHeight =
            window.innerHeight;

        const revealTop =
            element.getBoundingClientRect().top;

        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {

            element.style.opacity = "1";
            element.style.transform =
                "translateY(0px)";

        }

    });

};

window.addEventListener(
    "scroll",
    revealOnScroll
);

window.addEventListener(
    "load",
    revealOnScroll
);


/* ==========================================
   CONTACT FORM VALIDATION
========================================== */

const form =
    document.querySelector(".contact-form");

if (form) {

    form.addEventListener(
        "submit",
        function (e) {

            e.preventDefault();

            const inputs =
                form.querySelectorAll(
                    "input, textarea"
                );

            let valid = true;

            inputs.forEach(input => {

                if (
                    input.value.trim() === ""
                ) {

                    valid = false;

                    input.style.border =
                        "2px solid red";

                } else {

                    input.style.border =
                        "2px solid transparent";

                }

            });

            if (!valid) {

                alert(
                    "Please fill all fields."
                );

                return;

            }

            alert(
                "Thank You! Your message has been submitted successfully."
            );

            form.reset();

        }
    );

}


/* ==========================================
   HERO PARALLAX EFFECT
========================================== */

const heroCard =
    document.querySelector(".hero-card");

window.addEventListener("mousemove", e => {

    if (!heroCard) return;

    const x =
        (window.innerWidth / 2 - e.pageX) / 40;

    const y =
        (window.innerHeight / 2 - e.pageY) / 40;

    heroCard.style.transform =
        `rotateY(${x}deg) rotateX(${-y}deg)`;

});


/* ==========================================
   BUTTON RIPPLE EFFECT
========================================== */

const buttons =
    document.querySelectorAll(
        ".primary-btn, .nav-btn, .price-card a"
    );

buttons.forEach(button => {

    button.addEventListener(
        "mouseenter",
        () => {

            button.style.boxShadow =
                "0 0 25px rgba(56,189,248,0.6)";

        }
    );

    button.addEventListener(
        "mouseleave",
        () => {

            button.style.boxShadow =
                "none";

        }
    );

});


/* ==========================================
   TYPING EFFECT FOR HERO TITLE
========================================== */

const heroTitle =
    document.querySelector(".hero h1");

if (heroTitle) {

    const originalText =
        heroTitle.innerHTML;

    heroTitle.innerHTML = "";

    let i = 0;

    function typeWriter() {

        if (i < originalText.length) {

            heroTitle.innerHTML +=
                originalText.charAt(i);

            i++;

            setTimeout(
                typeWriter,
                25
            );

        }

    }

    window.addEventListener(
        "load",
        typeWriter
    );

}


/* ==========================================
   PROJECT CARD HOVER TILT
========================================== */

const cards =
    document.querySelectorAll(
        ".project-card"
    );

cards.forEach(card => {

    card.addEventListener(
        "mousemove",
        e => {

            const rect =
                card.getBoundingClientRect();

            const x =
                e.clientX - rect.left;

            const y =
                e.clientY - rect.top;

            const rotateY =
                (x - rect.width / 2) / 20;

            const rotateX =
                -(y - rect.height / 2) / 20;

            card.style.transform =
                `perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-8px)`;

        }
    );

    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "perspective(1000px) rotateX(0) rotateY(0)";

        }
    );

});


/* ==========================================
   LOADING COMPLETE
========================================== */

window.addEventListener("load", () => {

    console.log(
        "PrimeTech Portfolio Loaded Successfully 🚀"
    );

});
