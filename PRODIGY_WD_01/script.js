// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var learnMoreLinks = document.querySelectorAll('.learn-more');
    learnMoreLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var popupId = this.getAttribute('href');
            var popup = document.querySelector(popupId);
            popup.style.display = 'block';
        });
    });

    var closeButtons = document.querySelectorAll('.popup .close');
    closeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var popup = this.closest('.popup');
            popup.style.display = 'none';
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var learnMoreLinks = document.querySelectorAll('.book-now');
    learnMoreLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var popupId = this.getAttribute('href');
            var popup = document.querySelector(popupId);
            popup.style.display = 'block';
        });
    });

    var closeButtons = document.querySelectorAll('.popup .close');
    closeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var popup = this.closest('.popup');
            popup.style.display = 'none';
        });
    });
});
// Add fixed-header class to body when scrolling down
var lastScrollTop = 0;
window.addEventListener("scroll", function() {
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
        // Scroll down
        document.body.classList.add("fixed-header");
    } else {
        // Scroll up
        document.body.classList.remove("fixed-header");
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
}, false);

