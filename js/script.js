// ============================================
// NAVIGATION & MENU FUNCTIONALITY
// ============================================

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

// Toggle mobile menu
if (hamburger) {
  hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('active');
  });
}

// Close menu when a link is clicked
const navItems = document.querySelectorAll('.nav-link');
navItems.forEach(item => {
  item.addEventListener('click', function() {
    navLinks.classList.remove('active');
  });
});

// ============================================
// NAVIGATION ACTIVE STATE
// ============================================

function setActive(event) {
  event.preventDefault();
  
  // Remove active class from all links
  navItems.forEach(link => link.classList.remove('active'));
  
  // Add active class to clicked link
  event.target.classList.add('active');
  
  // Scroll to section
  const targetId = event.target.getAttribute('href');
  const targetSection = document.querySelector(targetId);
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// ============================================
// SCROLL-BASED NAVIGATION HIGHLIGHT
// ============================================

window.addEventListener('scroll', function() {
  let currentSection = '';
  
  const sections = document.querySelectorAll('section[id]');
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (scrollY >= sectionTop - 200) {
      currentSection = section.getAttribute('id');
    }
  });
  
  navItems.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + currentSection) {
      link.classList.add('active');
    }
  });
});

// ============================================
// GALLERY FILTERING
// ============================================

function filterGallery(category) {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  // Update active button
  filterBtns.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  
  // Filter gallery items
  galleryItems.forEach(item => {
    if (category === 'all') {
      item.style.display = 'block';
      item.classList.remove('hidden');
      setTimeout(() => {
        item.style.animation = 'fadeIn 0.6s ease';
      }, 0);
    } else if (item.getAttribute('data-category') === category) {
      item.style.display = 'block';
      item.classList.remove('hidden');
      setTimeout(() => {
        item.style.animation = 'fadeIn 0.6s ease';
      }, 0);
    } else {
      item.style.display = 'none';
      item.classList.add('hidden');
    }
  });
}

// ============================================
// SMOOTH SCROLL TO SECTION
// ============================================

function scrollToSection(sectionId) {
  const section = document.querySelector(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// ============================================
// CONTACT FORM HANDLING
// ============================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    // Form validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const eventType = document.getElementById('event_type').value;
    const eventDate = document.getElementById('event_date').value;
    const message = document.getElementById('message').value.trim();
    
    if (!name || !email || !phone || !eventType || !eventDate || !message) {
      e.preventDefault();
      alert('Please fill in all required fields.');
      return false;
    }
    
    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      e.preventDefault();
      alert('Please enter a valid email address.');
      return false;
    }
    
    // Phone validation (basic)
    const phonePattern = /^[0-9\s\-\+\(\)]{7,}$/;
    if (!phonePattern.test(phone)) {
      e.preventDefault();
      alert('Please enter a valid phone number.');
      return false;
    }
    
    // Show success message
    const submitBtn = contactForm.querySelector('.form-submit');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Note: Formspree will handle the actual submission
    // This timeout is just for UX feedback
    setTimeout(() => {
      submitBtn.textContent = 'Message Sent!';
      submitBtn.style.backgroundColor = '#27ae60';
      
      setTimeout(() => {
        contactForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        submitBtn.style.backgroundColor = '';
      }, 3000);
    }, 1000);
  });
}

// ============================================
// SMOOTH SCROLL BEHAVIOR
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') {
      e.preventDefault();
      return;
    }
    
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'slideInUp 0.8s ease forwards';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe feature cards
document.querySelectorAll('.feature-card').forEach(card => {
  observer.observe(card);
});

// Observe service cards
document.querySelectorAll('.service-card').forEach(card => {
  observer.observe(card);
});

// Observe testimonial cards
document.querySelectorAll('.testimonial-card').forEach(card => {
  observer.observe(card);
});

// ============================================
// LAZY LOAD IMAGES
// ============================================

if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add('loaded');
        imageObserver.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// ============================================
// UTILITY: DEBOUNCE FUNCTION
// ============================================

function debounce(func, wait) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

// ============================================
// MOBILE RESPONSIVE HANDLING
// ============================================

const handleResize = debounce(function() {
  if (window.innerWidth > 768) {
    navLinks.classList.remove('active');
  }
}, 250);

window.addEventListener('resize', handleResize);

// ============================================
// INITIALIZE PAGE
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  console.log('Website loaded successfully!');
  
  // Add initial animations
  const heroTitle = document.querySelector('.hero-title');
  const heroSubtitle = document.querySelector('.hero-subtitle');
  
  if (heroTitle) {
    heroTitle.style.animation = 'slideInUp 0.8s ease';
  }
  
  if (heroSubtitle) {
    heroSubtitle.style.animation = 'slideInUp 0.8s ease 0.2s backwards';
  }
});

// ============================================
// FORM FIELD VALIDATION IN REAL TIME
// ============================================

const emailInput = document.getElementById('email');
if (emailInput) {
  emailInput.addEventListener('blur', function() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (this.value && !emailPattern.test(this.value)) {
      this.style.borderColor = '#e74c3c';
      this.style.boxShadow = '0 0 0 3px rgba(231, 76, 60, 0.2)';
    } else {
      this.style.borderColor = '';
      this.style.boxShadow = '';
    }
  });
}

const phoneInput = document.getElementById('phone');
if (phoneInput) {
  phoneInput.addEventListener('blur', function() {
    const phonePattern = /^[0-9\s\-\+\(\)]{7,}$/;
    if (this.value && !phonePattern.test(this.value)) {
      this.style.borderColor = '#e74c3c';
      this.style.boxShadow = '0 0 0 3px rgba(231, 76, 60, 0.2)';
    } else {
      this.style.borderColor = '';
      this.style.boxShadow = '';
    }
  });
}

// ============================================
// KEYBOARD NAVIGATION
// ============================================

document.addEventListener('keydown', function(e) {
  // Close mobile menu with Escape key
  if (e.key === 'Escape') {
    navLinks.classList.remove('active');
  }
});

// ============================================
// PREVENT MULTIPLE FORM SUBMISSIONS
// ============================================

if (contactForm) {
  let isSubmitting = false;
  
  contactForm.addEventListener('submit', function(e) {
    if (isSubmitting) {
      e.preventDefault();
      return;
    }
    
    isSubmitting = true;
    setTimeout(() => {
      isSubmitting = false;
    }, 3000);
  });
}
