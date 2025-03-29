const naLinks = document.querySelector(".nav-menu .nav-link");
const menuOpenButton = document.querySelector('#menu-open-button');
const menuCloseButton = document.querySelector('#menu-close-button');

menuOpenButton.addEventListener("click", () => {
    // Toggle mobile menu visibility 
    document.body.classList.toggle("show-mobile-menu");
});

// Close menu when te close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

// Close menu when the nav link is clicked
navLinks.forEach(lonk =>{
    naLinks.addEventListener("click", () => menuOpenButton.click());
});