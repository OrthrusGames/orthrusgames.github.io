// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const topNav = document.querySelector('.top-nav');
    
    // Navigation scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            topNav.classList.add('scrolled');
        } else {
            topNav.classList.remove('scrolled');
        }
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Preload videos for better performance
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
        video.preload = 'metadata';
    });
});