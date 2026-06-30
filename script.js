let currentImageIndex = 0;
let visibleImages = [];

document.addEventListener('DOMContentLoaded', function() {
  setupMenuToggle();
  updateVisibleImages();
});

function setupMenuToggle() {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
  });

  const navItems = navLinks.querySelectorAll('a');
  navItems.forEach(item => {
    item.addEventListener('click', function() {
      navLinks.classList.remove('active');
    });
  });
}

function smoothScroll(target) {
  event.preventDefault();
  const element = document.querySelector(target);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
  return false;
}

function filterGallery(category) {
  const items = document.querySelectorAll('.gallery-item');
  const buttons = document.querySelectorAll('.filter-btn');

  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  items.forEach(item => {
    if (category === 'all') {
      item.style.display = 'block';
      setTimeout(() => item.style.opacity = '1', 10);
    } else {
      if (item.dataset.category === category) {
        item.style.display = 'block';
        setTimeout(() => item.style.opacity = '1', 10);
      } else {
        item.style.opacity = '0';
        setTimeout(() => item.style.display = 'none', 300);
      }
    }
  });

  updateVisibleImages();
}

function updateVisibleImages() {
  const visibleItems = document.querySelectorAll('.gallery-item[style="display: block"], .gallery-item:not([style*="display: none"])');
  visibleImages = Array.from(visibleItems).filter(item => {
    return item.style.display !== 'none';
  });
}

// ===== FIXED LIGHTBOX =====
function openLightbox(index) {
  const galleryItems = document.querySelectorAll('.gallery-item img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.querySelector('.lightbox-image');

  if (galleryItems[index]) {
    lightboxImage.src = galleryItems[index].src;
    currentImageIndex = index;
    lightbox.classList.add('active');  // ← FIX: Add class instead of style.display
    document.body.style.overflow = 'hidden'; // Prevent page scroll
  }
}

function closeLightbox(event) {
  const lightbox = document.getElementById('lightbox');
  // Only close if clicking background, not buttons/image
  if (event.target === lightbox || event.target.classList.contains('lightbox-close')) {
    lightbox.classList.remove('active');  // ← FIX: Remove class instead of style.display
    document.body.style.overflow = 'auto';  // Allow page scroll again
  }
}

function nextImage(event) {
  event.stopPropagation();
  const galleryItems = document.querySelectorAll('.gallery-item img');
  currentImageIndex = (currentImageIndex + 1) % galleryItems.length;
  document.querySelector('.lightbox-image').src = galleryItems[currentImageIndex].src;
}

function previousImage(event) {
  event.stopPropagation();
  const galleryItems = document.querySelectorAll('.gallery-item img');
  currentImageIndex = (currentImageIndex - 1 + galleryItems.length) % galleryItems.length;
  document.querySelector('.lightbox-image').src = galleryItems[currentImageIndex].src;
}

// ===== KEYBOARD CONTROLS (Now Works!) =====
document.addEventListener('keydown', function(event) {
  const lightbox = document.getElementById('lightbox');
  if (lightbox.classList.contains('active')) {  // ← Now checks actual state
    if (event.key === 'ArrowRight') nextImage(event);
    if (event.key === 'ArrowLeft') previousImage(event);
    if (event.key === 'Escape') {
      lightbox.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  }
});

// ===== FORM SUBMISSION WITH FORMSPREE =====
function handleFormSubmit(event) {
  event.preventDefault();

  const form = document.getElementById('contactForm');
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const eventType = document.getElementById('event_type').value;
  const eventDate = document.getElementById('event_date').value;
  const budget = document.getElementById('budget').value;
  const message = document.getElementById('message').value;

  console.log('Form Submitted!');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Phone:', phone);
  console.log('Event Type:', eventType);
  console.log('Event Date:', eventDate);
  console.log('Budget:', budget);
  console.log('Message:', message);

  // Show loading state
  const submitBtn = form.querySelector('.form-submit');
  const originalText = submitBtn.textContent;
  submitBtn.textContent = 'Sending...';
  submitBtn.disabled = true;

  // Prepare form data
  const formData = new FormData(form);

  // Try Formspree first (better for web)
  fetch('https://formspree.io/f/mvzjbzbq', {  // ← UPDATE THIS WITH YOUR FORMSPREE ID
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      console.log('Form sent via Formspree successfully!');
      showSuccessMessage();
      form.reset();
      
      // Reset button
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
      
      // Scroll to success message
      smoothScroll('#home');
    } else {
      throw new Error('Formspree failed');
    }
  })
  .catch(error => {
    console.log('Formspree failed, trying mailto fallback...');
    
    // Fallback to mailto if Formspree fails
    const subject = `Photography Inquiry from ${name}`;
    const body = `
Name: ${name}
Email: ${email}
Phone: ${phone}
Event Type: ${eventType}
Event Date: ${eventDate}
Budget: ${budget}

Message:
${message}
    `;
    
    const mailtoLink = `mailto:mytechlearning85@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    
    // Reset button
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  });
}

// ===== CUSTOM SUCCESS MESSAGE (Your Original Style) =====
function showSuccessMessage() {
  const form = document.getElementById('contactForm');
  const successMsg = document.createElement('div');
  successMsg.style.cssText = `
    background: #27ae60;
    color: white;
    padding: 15px;
    border-radius: 5px;
    margin-bottom: 20px;
    text-align: center;
    font-weight: 600;
    animation: slideDown 0.5s ease;
  `;
  successMsg.textContent = '✓ Thank you! Your inquiry has been sent. We\'ll respond within 24 hours.';

  form.insertBefore(successMsg, form.firstChild);

  setTimeout(() => {
    successMsg.style.animation = 'slideUp 0.5s ease';
    setTimeout(() => successMsg.remove(), 500);
  }, 4000);
}

// ===== ANIMATIONS =====
const style = document.createElement('style');
style.textContent = `
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes slideUp {
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(-20px);
    }
  }

  .gallery-item {
    opacity: 1;
    transition: opacity 0.3s ease;
  }
`;
document.head.appendChild(style);

console.log('Website loaded successfully! 📸');
