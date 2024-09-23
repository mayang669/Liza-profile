// Profile photo change effect
const profilePhoto = document.getElementById('profile-photo');
let photos = ['rupa1.jpg', 'rupa2.jpg', 'rupa3.jpg'];
let i = 0;

setInterval(() => {
    profilePhoto.src = photos[i];
    i = (i + 1) % photos.length;
}, 2000);

// Smooth scrolling for projects (optional)
const projectLinks = document.querySelectorAll('.social-icons a');

projectLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Hover effect for project cards (added a glow effect with JS)
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.boxShadow = '0 0 15px 5px rgba(147, 112, 219, 0.8)'; // Purple glow
    });
    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = 'none';
    });
});


