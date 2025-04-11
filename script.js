// Login Form
document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    alert(`Welcome back, ${username}! (Login simulation)`);
    this.reset();
});

// Register Form
document.getElementById('registerForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    const username = document.getElementById('reg-username').value;
    const email = document.getElementById('reg-email').value;
    const phone = document.getElementById('reg-phone').value;
    const password = document.getElementById('reg-password').value;
    const confirmPassword = document.getElementById('reg-confirm-password').value;

    // Email validation
    if (!email.includes('@')) {
        alert('Please enter a valid email address with @ symbol');
        return;
    }

    // Phone number validation
    if (!/^\d{10}$/.test(phone)) {
        alert('Please enter a valid 10-digit phone number');
        return;
    }

    // Password validation
    if (password.length < 6) {
        alert('Password must be at least 6 characters long');
        return;
    }

    // Confirm password validation
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    // If all validations pass
    alert(`Account created successfully for ${username}! (Register simulation)`);
    this.reset();
    window.location.href = 'login.html';
});

// Feedback Form
const feedbackButtons = document.querySelectorAll('.feedback-btn');
const feedbackContainer = document.getElementById('feedbackFormContainer');
const courseNameSpan = document.getElementById('courseName');
const feedbackForm = document.getElementById('feedbackForm');
const feedbackMessage = document.getElementById('feedbackMessage');
const closeFeedback = document.getElementById('closeFeedback');

feedbackButtons.forEach(button => {
    button.addEventListener('click', function() {
        const course = this.getAttribute('data-course');
        courseNameSpan.textContent = course;
        feedbackContainer.style.display = 'block';
    });
});

feedbackForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const rating = document.getElementById('rating').value;
    const comments = document.getElementById('comments').value;

    if (name && rating && comments) {
        feedbackMessage.textContent = `Thank you, ${name}! Feedback for ${courseNameSpan.textContent} submitted.`;
        this.reset();
        setTimeout(() => {
            feedbackContainer.style.display = 'none';
            feedbackMessage.textContent = '';
        }, 2000);
    } else {
        alert('Please fill all fields.');
    }
});

closeFeedback.addEventListener('click', function() {
    feedbackContainer.style.display = 'none';
    feedbackForm.reset();
    feedbackMessage.textContent = '';
});

// Contact Form
document.getElementById('contactForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Basic validation
    if (!email.includes('@')) {
        alert('Please enter a valid email address');
        return;
    }

    // Simulate form submission
    alert(`Thank you, ${name}! Your message has been sent. We'll get back to you soon.`);
    this.reset();
});