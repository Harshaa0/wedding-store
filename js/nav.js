// document.addEventListener("DOMContentLoaded", function () {
//     let prevScrollPos = window.scrollY;
//     const nav = document.querySelector("nav");

//     window.addEventListener("scroll", function () {
//         let currentScrollPos = window.scrollY;

//         if (currentScrollPos > prevScrollPos) {
//             // Scrolling down - hide navbar
//             nav.classList.add("hidden");
//         } else {
//             // Scrolling up - show navbar
//             nav.classList.remove("hidden");
//             nav.classList.add("scrolled");
//         }

//         prevScrollPos = currentScrollPos;
//     });
// });



let lastScrollTop = 0;
const navbar = document.querySelector("nav");

window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    let viewportHeight = window.innerHeight; // 100vh in pixels
    let documentHeight = document.documentElement.scrollHeight;
    let scrollRemaining = documentHeight - (scrollTop + viewportHeight);

    if (scrollTop < viewportHeight) {
        // At the top (0 - 100vh): Keep navbar transparent
        navbar.classList.remove("scrolled");
        navbar.style.transform = "translateY(0)";
    } else if (scrollTop > viewportHeight && scrollTop > lastScrollTop) {
        // Scrolling down past 100vh: Hide navbar
        navbar.style.transform = "translateY(-100%)";
    } else if (scrollTop > viewportHeight && scrollTop < lastScrollTop) {
        // Scrolling up past 100vh: Show navbar with white background
        navbar.style.transform = "translateY(0)";
        navbar.classList.add("scrolled");
    }

    if (scrollRemaining < viewportHeight) {
        // If less than 100vh is left in the page: Make navbar transparent again
        navbar.classList.remove("scrolled");
    }

    lastScrollTop = scrollTop;
});
