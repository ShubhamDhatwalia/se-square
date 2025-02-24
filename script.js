document.addEventListener("DOMContentLoaded", function () {
    let brandSwiper = new Swiper(".brandSwiper", {
        slidesPerView: 'auto',
        loop: true,
        speed: 5000,
        autoplay: { delay: 0 },
    });

    let showCaseDown = new Swiper(".showCaseSwiperDown", {
        slidesPerView: 2,
        spaceBetween: 29,
        loop: true,
        speed: 5000,
        direction: "vertical",
        autoplay: { delay: 0, reverseDirection: true },
    });

    let showCaseUp = new Swiper(".showCaseSwiperUp", {
        slidesPerView: 2,
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
        speed: 5000,
        autoplay: { delay: 0 },
    });

    let projectsSwiper = new Swiper(".projectsSwiper", {
        slidesPerView: 'auto',
        loop: true,
        speed: 3000,
        autoplay: { delay: 0 },
    });

    let portfolioSwiper1 = new Swiper(".portfolioSwiper1", {
        slidesPerView: 3,
        loop: true,
        spaceBetween: 10,
        speed: 8000,
        autoplay: { delay: 0 },
    });

    let portfolioSwiper2 = new Swiper(".portfolioSwiper2", {
        slidesPerView: 3,
        loop: true,
        spaceBetween: 10,
        speed: 8000,
        autoplay: { delay: 0, reverseDirection: true },
    });

    let portfolioSwiper3 = new Swiper(".portfolioSwiper3", {
        slidesPerView: 3,
        loop: true,
        spaceBetween: 10,
        speed: 8000,
        autoplay: { delay: 0 },
    });
});
