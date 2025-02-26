

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




document.querySelectorAll(".overlay nav ul li a").forEach((link) => {


    link.addEventListener("click", function () {
        document.querySelector(".overlay").classList.remove("active");
})
});


function openOverlay() {
    document.querySelector(".overlay").classList.add("active");
}

function closeOverlay() {
    document.querySelector(".overlay").classList.remove("active");
}


function startCounter(counter) {
    let target = +counter.getAttribute("data-target");
    let count = 0;
    let speed = target / 300; // Adjust speed
    let hasPlus = counter.innerText.includes("+"); // Check if the original text had "+"

    function updateCounter() {
        count += speed;
        if (count < target) {
            counter.innerText = Math.ceil(count) + (hasPlus ? "+" : "");
            requestAnimationFrame(updateCounter);
        } else {
            counter.innerText = target + (hasPlus ? "+" : ""); // Add "+" if it was there originally
        }
    }

    updateCounter();
}

// Select all counters and start animation
document.querySelectorAll(".counter").forEach(startCounter);



document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll("section");
    const offsetValue = 95; // Adjust based on navbar height

   

    // Smooth scrolling
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - offsetValue,
                    behavior: "smooth"
                });
            }
        });
    });

    // Active class on scroll
    window.addEventListener("scroll", function () {
        let currentSection = "home"; // Default to home

        sections.forEach(section => {
            const sectionTop = section.offsetTop - offsetValue;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute("id");
            }
        });

        // Special case: If at the top, keep "Home" active
        if (sections.length > 0 && window.scrollY < sections[1].offsetTop - offsetValue) {
            currentSection = "home";
        }

        // Update active class
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === currentSection) {
                link.classList.add("active");
            }
        });
    });
});





window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    document.querySelector(".nav-bar").classList.add("shrink");
    
  } else {
    document.querySelector(".nav-bar").classList.remove("shrink");

  }
}