// change navbar styles on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
})

//slider jquery
var slider = document.querySelector('.slider');
var gridContainer = slider.querySelector('.grid-container');
var prevArrow = slider.querySelector('.prev-arrow');
var nextArrow = slider.querySelector('.next-arrow');

var slideWidth = slider.offsetWidth;
var slideCount = gridContainer.children.length;
var currentIndex = 0;

prevArrow.addEventListener('click', function () {
    if (currentIndex > 0) {
        currentIndex--;
        gridContainer.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
    }
});

nextArrow.addEventListener('click', function () {
    if (currentIndex < slideCount - 1) {
        currentIndex++;
    }

    gridContainer.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
});

//spinning skills 
var frontend = document.querySelector('.frontend');
var backend = document.querySelector('.backend');
var tools = document.querySelector('.tools');
var outerCircle = document.querySelector('.outer-circle');
var innerCircle_1 = document.querySelector('.inner-circle-1');
var innerCircle_2 = document.querySelector('.inner-circle-2');
var innerCircle_3 = document.querySelector('.inner-circle-3');
var innermostCircle = document.querySelector('.innermost-circle');
var skillOrbits = document.querySelector('.skill-orbits');

/*frontend*/
frontend.addEventListener('mouseover', function () {
    skillOrbits.style.margin = '0 0 12rem 0';
    outerCircle.style.display = 'none';
    innerCircle_1.style.display = 'none';
    innerCircle_3.style.display = 'none';
    innermostCircle.style.background = 'var(--color-inner-circle-1)';
});

frontend.addEventListener('mouseout', function () {
    skillOrbits.style.margin = '-6rem 0 0 0';
    outerCircle.style.display = 'block';
    innerCircle_1.style.display = 'block';
    innerCircle_3.style.display = 'block';
    innermostCircle.style.background = 'var(--color-primary)';
});

/*backend*/
backend.addEventListener('mouseover', function () {
    skillOrbits.style.margin = '0 0 12rem 0';
    outerCircle.style.display = 'none';
    innerCircle_2.style.display = 'none';
    innermostCircle.style.background = 'var(--color-inner-circle-3)';
});

backend.addEventListener('mouseout', function () {
    skillOrbits.style.margin = '-6rem 0 0 0';
    outerCircle.style.display = 'block';
    innerCircle_2.style.display = 'block';
    innermostCircle.style.background = 'var(--color-primary)';
});

/*tools*/
tools.addEventListener('mouseover', function () {
    innerCircle_1.style.display = 'none';
    innerCircle_2.style.display = 'none';
    innerCircle_3.style.display = 'none';
    innermostCircle.style.background = 'var(--color-outer-circle)';
});

tools.addEventListener('mouseout', function () {
    innerCircle_1.style.display = 'block';
    innerCircle_2.style.display = 'block';
    innerCircle_3.style.display = 'block';
    innermostCircle.style.background = 'var(--color-primary)';
});

//toggle nav menu
const toggleButton = document.querySelector(".togglebtn");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll("nav ul li a");

toggleButton.addEventListener("click", () => {
    toggleButton.classList.toggle("active");
    navMenu.style.display = navMenu.style.display === "block" ? "none" : "block";
});

// Close the navigation when a link is clicked
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.style.display = "none";
        toggleButton.classList.remove("active");
    });
});



