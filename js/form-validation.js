// Form validation and submission handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Validate form
            let valid = true;
            let errorMessages = [];
            
            if (name === '') {
                valid = false;
                errorMessages.push('Name is required');
                document.getElementById('name').classList.add('error');
            } else {
                document.getElementById('name').classList.remove('error');
            }
            
            if (email === '') {
                valid = false;
                errorMessages.push('Email is required');
                document.getElementById('email').classList.add('error');
            } else if (!isValidEmail(email)) {
                valid = false;
                errorMessages.push('Please enter a valid email address');
                document.getElementById('email').classList.add('error');
            } else {
                document.getElementById('email').classList.remove('error');
            }
            
            if (message === '') {
                valid = false;
                errorMessages.push('Message is required');
                document.getElementById('message').classList.add('error');
            } else {
                document.getElementById('message').classList.remove('error');
            }
            
            // If form is valid, proceed with submission
            if (valid) {
                // In a real application, you would send the form data to a server here
                // For now, we'll just simulate a successful submission
                
                // Clear form
                contactForm.reset();
                
                // Show success message
                showFormMessage('Your message has been sent successfully!', 'success');
                
                // Hide success message after a delay
                setTimeout(() => {
                    const messageElement = document.querySelector('.form-message');
                    if (messageElement) {
                        messageElement.style.opacity = '0';
                        setTimeout(() => {
                            messageElement.remove();
                        }, 500);
                    }
                }, 5000);
            } else {
                // Show error message
                showFormMessage(`Please correct the following errors: ${errorMessages.join(', ')}`, 'error');
            }
        });
    }
    
    // Helper functions
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function showFormMessage(message, type) {
        // Remove any existing message
        const existingMessage = document.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Create message element
        const messageElement = document.createElement('div');
        messageElement.className = `form-message ${type === 'success' ? 'success' : 'error'}`;
        messageElement.innerText = message;
        
        // Add message to the form
        contactForm.insertBefore(messageElement, contactForm.firstChild);
        
        // Fade in the message
        setTimeout(() => {
            messageElement.style.opacity = '1';
        }, 10);
    }
    
    // Add error styling to the CSS
    const styleElement = document.createElement('style');
    styleElement.innerHTML = `
        .form-control.error {
            border-color: #ff4d4d;
            background-color: rgba(255, 77, 77, 0.05);
        }
        
        .form-message {
            padding: 15px;
            border-radius: 10px;
            margin-bottom: 20px;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        .form-message.success {
            background-color: rgba(39, 174, 96, 0.1);
            border: 1px solid rgba(39, 174, 96, 0.3);
            color: #27ae60;
        }
        
        .form-message.error {
            background-color: rgba(255, 77, 77, 0.1);
            border: 1px solid rgba(255, 77, 77, 0.3);
            color: #ff4d4d;
        }
    `;
    document.head.appendChild(styleElement);
});