// 🌟 Testimonial slider
const testimonials = document.querySelectorAll('.testimonial');
let current = 0;

function showNextTestimonial() {
  testimonials[current].classList.remove('active');
  current = (current + 1) % testimonials.length;
  testimonials[current].classList.add('active');
}

setInterval(showNextTestimonial, 7000); // Change every 7 seconds

// ✨ Floating gold orbs
const orbContainer = document.querySelector('.floating-orbs');

// Clear existing orbs if any
orbContainer.innerHTML = '';

// Generate 150 golden orbs
for (let i = 0; i < 50; i++) {
  const orb = document.createElement('div');
  orb.classList.add('orb');

  // Random position
  orb.style.top = `${Math.random() * 100}%`;
  orb.style.left = `${Math.random() * 100}%`;

  // Random size
  const size = 4 + Math.random() * 6;
  orb.style.width = `${size}px`;
  orb.style.height = `${size}px`;

  // Random animation duration and delay
  orb.style.animationDuration = `${8 + Math.random() * 8}s`;
  orb.style.animationDelay = `${Math.random() * 10}s`;

  orbContainer.appendChild(orb);
}

// 📦 Register Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/service-worker.js')
    .then((reg) => console.log('✅ Service Worker registered!', reg))
    .catch((err) =>
      console.error('❌ Service Worker registration failed:', err)
    );
}

// 📅 Auto-update year in footer
const yearSpan = document.querySelector('.current-year');
if (yearSpan) {
  const currentYear = new Date().getFullYear();
  yearSpan.textContent = currentYear;
}

// Contact Form
const form = document.getElementById('contactForm');
const popup = document.getElementById('popup');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // Stop actual submission

  // Show popup
  popup.style.display = 'block';

  // Clear form fields
  form.reset();

  // Hide popup after 3 seconds
  setTimeout(() => {
    popup.style.display = 'none';
  }, 3000);
});
