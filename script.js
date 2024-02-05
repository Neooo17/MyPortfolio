const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
const links = document.querySelectorAll(".primary-navigation li");

navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible");
    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    }else{
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
})


links.forEach((link) => {
    link.addEventListener("click", () => {
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
        window.scrollTo({top: 0, behavior: 'smooth'});
    })
})



// Get all <a> elements within sections (excluding those in the navigation)
var sectionLinks = document.querySelectorAll('a:not(nav a)');

// Loop through the selected links and set the target attribute to '_blank'
sectionLinks.forEach(function(link) {
    link.setAttribute('target', '_blank');
});


// Tilt effect on project images

document.querySelectorAll('.proj-img img').forEach(img => {
    img.addEventListener('mousemove', (e) => {
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within the element.
        const y = e.clientY - rect.top;  // y position within the element.

        const dx = x - rect.width / 2;
        const dy = y - rect.height / 2;

        const tiltX = dy / rect.height * 15; // Tilt intensity
        const tiltY = dx / rect.width * -15; // Tilt intensity

        e.target.style.transform = `rotateY(${tiltY}deg) rotateX(${tiltX}deg)`;
    });

    img.addEventListener('mouseleave', (e) => {
        e.target.style.transform = '';
    });
});


// Adding links to project image

document.querySelectorAll('.project-image').forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', function() {
        const url = this.getAttribute('data-link');
        if (url) {
            window.open(url, '_blank');
        }
    });
});

//other way to add links to image using js

// const imageLinks = {
//     image1: 'https://neooo17.github.io/Space-Tourism-Multi-page-Website/',
//     image2: 'https://neooo17.github.io/Weather-app/',
//     image3: 'https://neooo17.github.io/Responsive-Clipboard-landing-page/',
//     // More mappings as needed
// };

// Object.keys(imageLinks).forEach(id => {
//     const image = document.getElementById(id);
//     if (image) {
//         image.style.cursor = 'pointer'; // Optional: Change cursor on hover
//         image.addEventListener('click', () => {
//             window.location.href = imageLinks[id];
//         });
//     }
// });
