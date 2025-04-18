// JavaScript for Brandon Griffeth's multi-page portfolio website

document.addEventListener('DOMContentLoaded', function() {
    console.log('Website loaded successfully!');
    
    // Highlight active navigation link
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
    
    // Add any future JavaScript functionality here
});