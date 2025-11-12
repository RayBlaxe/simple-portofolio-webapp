// Simple JavaScript for Portfolio Website
// Much simpler than the complex version!

// Get elements
const filterBtns = document.querySelectorAll('.filter-btn');
const projectItems = document.querySelectorAll('.project-item');
const backToTopBtn = document.getElementById('backToTop');
const contactForm = document.getElementById('contactForm');

// Filter Projects - Simple and easy to understand
filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const filter = this.getAttribute('data-filter');
        
        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        // Show/Hide projects
        projectItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category').includes(filter)) {
                item.style.display = 'block';
                item.style.animation = 'fadeIn 0.5s ease';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Back to Top Button
window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Contact Form
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    // Show success message
    alert(`Thank you, ${name}! Your message has been sent. We'll reply to ${email} soon!`);
    
    // Reset form
    contactForm.reset();
});

// Smooth Scrolling for Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
