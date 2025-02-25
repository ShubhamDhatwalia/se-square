

AOS.init({
    once: true,
  });


document.addEventListener("DOMContentLoaded", function () {
    let brandSwiper = new Swiper(".brandSwiper", {
        slidesPerView: 'auto',
        loop: true,
        speed: 5000,
        autoplay: { delay: 0 },
    });

    let showCaseDown = new Swiper(".showCaseSwiperDown", {
        slidesPerView: 'auto',
        spaceBetween: 29,
        loop: true,
        speed: 5000,
        direction: "vertical",
        autoplay: { delay: 0, reverseDirection: true },
    });

    let showCaseUp = new Swiper(".showCaseSwiperUp", {
        slidesPerView: 'auto',
        spaceBetween: 29,
        loop: true,
        speed: 5000,
        direction: "vertical",
        autoplay: { delay: 0 },

    });

    let testimonialSwiper = new Swiper(".testimonialSwiper", {
        slidesPerView: 3,
        spaceBetween: 85,
        loop: true,
        speed: 1000,
        autoplay: { delay: 2000 },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            1400: { slidesPerView: 3, spaceBetween: 30 },
            600: { slidesPerView: 2, spaceBetween: 30 },

            200: { slidesPerView: 1, spaceBetween: 10, },
        },
    });

    let projectsSwiper = new Swiper(".projectsSwiper", {
        slidesPerView: 'auto',
        loop: true,
        speed: 3000,
        autoplay: { delay: 0 },
    });

    let portfolioSwiper1 = new Swiper(".portfolioSwiper1", {
        slidesPerView: 'auto',
        loop: true,
        spaceBetween: 10,
        speed: 8000,
        autoplay: { delay: 0 },
    });

    let portfolioSwiper2 = new Swiper(".portfolioSwiper2", {
        slidesPerView: 'auto',
        loop: true,
        spaceBetween: 10,
        speed: 8000,
        autoplay: { delay: 0, reverseDirection: true },
    });

    let portfolioSwiper3 = new Swiper(".portfolioSwiper3", {
        slidesPerView: 'auto',
        loop: true,
        spaceBetween: 10,
        speed: 8000,
        autoplay: { delay: 0 },
    });
});



document.querySelectorAll(".taber-content").forEach((tab) => {


    tab.addEventListener("click", function () {
        let answer = tab.children[1].children[0];
        let isExpanded = answer.classList.contains("expanded");
        console.log(isExpanded);

        document.querySelectorAll(".taber-content").forEach((t) => {

            t.children[1].children[0].classList.remove("expanded");
        });

        if (!isExpanded) {
            console.log(this);
            this.children[1].children[0].classList.add("expanded");
        }
    });
});

document.querySelectorAll(".question-side li").forEach((item) => {
    item.addEventListener("click", function () {
        let target = this.getAttribute("data-target");


        document.querySelectorAll(".question-side li").forEach((li) => {
            li.classList.remove("active");
        });

        this.classList.add("active");

        document.querySelectorAll(".answer-side .answer").forEach((answer) => {
            answer.style.display = "none";
        });

        document.getElementById(target).style.display = "block";
    });
});



function openOverlay() {
    document.querySelector(".overlay").classList.add("active");
}

function closeOverlay() {
    document.querySelector(".overlay").classList.remove("active");
}













document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll("section");
    const offsetValue = 80; // Adjust based on navbar height

    // Smooth scrolling
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - offsetValue, // Adjusted offset
                    behavior: "smooth"
                });
            }
        });
    });


});


