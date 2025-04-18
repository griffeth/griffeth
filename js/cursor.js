// Custom cursor implementation
document.addEventListener('DOMContentLoaded', function() {
    // Only enable custom cursor if user explicitly chooses to
    // This ensures the site is usable by default with the normal cursor
    const useCustomCursor = false; // Set to true to enable custom cursor
    
    if (!useCustomCursor) return;
    
    // Create cursor elements
    const cursor = document.createElement('div');
    const cursorDot = document.createElement('div');
    
    cursor.className = 'custom-cursor';
    cursorDot.className = 'custom-cursor-dot';
    
    document.body.appendChild(cursor);
    document.body.appendChild(cursorDot);
    
    // Track cursor position
    let cursorVisible = true;
    let cursorScale = 1;
    let cursorX = -100;
    let cursorY = -100;
    
    // Update cursor position
    document.addEventListener('mousemove', (e) => {
        cursorX = e.clientX;
        cursorY = e.clientY;
        
        if (!cursorVisible) {
            cursor.style.opacity = 1;
            cursorDot.style.opacity = 1;
            cursorVisible = true;
        }
        
        // Position the cursors
        cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) scale(${cursorScale})`;
        cursorDot.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
    });
    
    // Hide cursor when it leaves the window
    document.addEventListener('mouseout', () => {
        cursor.style.opacity = 0;
        cursorDot.style.opacity = 0;
        cursorVisible = false;
    });
    
    // Handle cursor over interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .resume-button, .social-icons a, .nav-links a, input, textarea');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseover', () => {
            cursorScale = 1.5;
            cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) scale(${cursorScale})`;
            cursor.classList.add('cursor-hover');
        });
        
        el.addEventListener('mouseout', () => {
            cursorScale = 1;
            cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) scale(${cursorScale})`;
            cursor.classList.remove('cursor-hover');
        });
    });
});