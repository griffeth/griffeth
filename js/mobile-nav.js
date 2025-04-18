// Mobile navigation implementation
document.addEventListener('DOMContentLoaded', function() {
    // Create hamburger menu button
    const nav = document.querySelector('.main-nav');
    const navContainer = document.querySelector('.nav-container');
    const navLinks = document.querySelector('.nav-links');
    
    // Create hamburger button if it doesn't exist
    if (!document.querySelector('.hamburger-menu')) {
        const hamburger = document.createElement('div');
        hamburger.className = 'hamburger-menu';
        hamburger.innerHTML = `
            <div class="hamburger-line"></div>
            <div class="hamburger-line"></div>
            <div class="hamburger-line"></div>
        `;
        navContainer.appendChild(hamburger);
        
        // Add click event to toggle menu
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');
            hamburger.classList.toggle('toggle');
        });
    }
    
    // Close mobile menu when clicking a link
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('nav-active')) {
                navLinks.classList.remove('nav-active');
                document.querySelector('.hamburger-menu').classList.remove('toggle');
            }
        });
    });
});