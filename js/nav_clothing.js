console.log("nav_clothing.js is loaded!");


let lastScrollTop = 0;
const navbar = document.querySelector("nav");

window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down - Hide navbar
        navbar.style.transform = "translateY(-100%)";
        navbar.classList.remove("scrolled"); // Remove white background
    } else {
        // Scrolling up - Show navbar with white background
        navbar.style.transform = "translateY(0)";
        navbar.classList.add("scrolled");
    }

    lastScrollTop = scrollTop;
});
