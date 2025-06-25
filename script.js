// Form submission handling
document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault(); // Prevent default form submission and redirection

    const form = e.target;
    const formData = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            form.reset(); // Reset form fields on successful submission
            alert('Form submitted successfully!'); // Optional: Show success message
        } else {
            alert('There was an error submitting the form. Please try again.');
        }
    } catch (error) {
        alert('An error occurred: ' + error.message);
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if(window.innerWidth <= 768) {
            navLinks.style.display = 'none';
        }
    });
});

document.getElementById('phone').addEventListener('input', function(e) {
    let value = e.target.value;
    // Remove any characters that aren't digits, +, -, or spaces
    e.target.value = value.replace(/[^0-9+\-\s]/g, '');
});