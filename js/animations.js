// Enhanced animations for the website
document.addEventListener('DOMContentLoaded', function() {
    // Scroll reveal animation
    const scrollElements = document.querySelectorAll('.scroll-reveal');
    
    const elementInView = (el, percentageScroll = 100) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) * (percentageScroll / 100)
        );
    };
    
    const displayScrollElement = element => {
        element.classList.add('scrolled');
    };
    
    const hideScrollElement = element => {
        element.classList.remove('scrolled');
    };
    
    const handleScrollAnimation = () => {
        scrollElements.forEach(el => {
            if (elementInView(el, 80)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        });
    };
    
    // Add scroll reveal class to elements that should animate on scroll
    const elementsToAnimate = document.querySelectorAll('.hero h2, .hero p, .social-icons, .profile-image, .profile-content, section h2, .job, .skill-category, .cert-list li, .volunteer-list li, .blog-post, .goals-list li, .portfolio-item');
    
    elementsToAnimate.forEach(el => {
        if (!el.classList.contains('scroll-reveal')) {
            el.classList.add('scroll-reveal');
        }
    });
    
    // Initialize scroll animation
    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });
    
    // Trigger once on load
    handleScrollAnimation();
});