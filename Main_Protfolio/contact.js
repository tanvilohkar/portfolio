// Contact Form JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Basic validation
            if (!name || !email || !message) {
                alert('Please fill in all required fields (Name, Email, and Message).');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Show success message
            successMessage.classList.add('show');
            
            // Reset form
            form.reset();
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                successMessage.classList.remove('show');
            }, 5000);
            
            // Log form submission (you can replace this with actual form submission)
            console.log('Form submitted:', { name, email, subject, message });
            
            // Optional: Send email using service like EmailJS, Formspree, or backend
            // EmailJS.send('service_id', 'template_id', {
            //     name: name,
            //     email: email,
            //     subject: subject,
            //     message: message
            // });
        });
    }
    
    // Add floating label animations
    const formInputs = document.querySelectorAll('.form-input');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            const label = this.previousElementSibling;
            if (label) {
                label.style.transform = 'translateY(-25px) scale(1.05)';
                label.style.color = '#8b5cf6';
            }
        });
        
        input.addEventListener('blur', function() {
            const label = this.previousElementSibling;
            if (label) {
                label.style.transform = 'translateY(0) scale(1)';
                label.style.color = '#ffffff';
            }
        });
        
        input.addEventListener('input', function() {
            if (this.value.trim() !== '') {
                this.style.borderColor = '#8b5cf6';
                this.style.boxShadow = '0 0 0 10px rgba(139, 92, 246, 0.3)';
            } else {
                this.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                this.style.boxShadow = 'none';
            }
        });
    });
    
    // Add scroll reveal animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all contact elements
    document.querySelectorAll('.contact-info-card, .contact-form-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        observer.observe(el);
    });
});
