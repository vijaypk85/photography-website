let currentImageIndex = 0;
let visibleImages = [];

const galleryImages = [
  'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1606216174052-f3d0b8e4bfa0?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1558636508-e0db3814bd20?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1585254475919-7ac8620988e3?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1565538810185-dbc477fc2e4b?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1573139662582-8e80e3849f72?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1584095268862-d1f17dabf8e8?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1540575467063-178f50002cbc?w=400&h=300&fit=crop'
];

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

function openLightbox(index) {
  updateVisibleImages();
  currentImageIndex = index;
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.querySelector('.lightbox-image');
  
  const visibleItems = document.querySelectorAll('.gallery-item:not([style*="display: none"])');
  let actualIndex = 0;
  
  for (let i = 0; i < document.querySelectorAll('.gallery-item').length; i++) {
    if (document.querySelectorAll('.gallery-item')[i] === visibleItems[index]) {
      actualIndex = i;
      break;
    }
  }

  if (actualIndex >= 0 && actualIndex < galleryImages.length) {
    lightboxImage.src = galleryImages[actualIndex];
    currentImageIndex = actualIndex;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeLightbox(event) {
  if (event.target.id === 'lightbox') {
    document.getElementById('lightbox').classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

function nextImage(event) {
  event.stopPropagation();
  currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
  document.querySelector('.lightbox-image').src = galleryImages[currentImageIndex];
}

function previousImage(event) {
  event.stopPropagation();
  currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
  document.querySelector('.lightbox-image').src = galleryImages[currentImageIndex];
}

document.addEventListener('keydown', function(event) {
  const lightbox = document.getElementById('lightbox');
  if (lightbox.classList.contains('active')) {
    if (event.key === 'ArrowRight') nextImage(event);
    if (event.key === 'ArrowLeft') previousImage(event);
    if (event.key === 'Escape') closeLightbox({ target: lightbox });
  }
});

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

  const mailtoLink = `mailto:contact@momentscaptured.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoLink;

  showSuccessMessage();
  form.reset();
}

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
