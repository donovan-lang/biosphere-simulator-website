// ========================================
// BIOSPHERE SIMULATOR — Landing Page JS
// ========================================

// Nav scroll effect
const nav = document.getElementById('nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  nav.classList.toggle('scrolled', scrollY > 80);
  lastScroll = scrollY;
});

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  navToggle.classList.toggle('active');
});

// Close mobile nav on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('active');
  });
});

// Scroll reveal
const revealElements = () => {
  const reveals = document.querySelectorAll(
    '.feature-card, .era-card, .dynasty-card, .comp-card, .rating-tier, ' +
    '.about-text, .about-card, .screenshot-placeholder, .newsletter-box, ' +
    '.river-visual, .rating-showcase, .wishlist-content'
  );

  reveals.forEach(el => {
    if (!el.classList.contains('reveal')) {
      el.classList.add('reveal');
    }

    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight - 80) {
      el.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', revealElements);
window.addEventListener('load', revealElements);

// Hero particles (subtle floating dust)
const particlesContainer = document.getElementById('particles');

function createParticle() {
  const particle = document.createElement('div');
  const size = Math.random() * 3 + 1;
  const x = Math.random() * 100;
  const duration = Math.random() * 15 + 10;
  const delay = Math.random() * 10;

  Object.assign(particle.style, {
    position: 'absolute',
    width: size + 'px',
    height: size + 'px',
    background: `rgba(212, 175, 55, ${Math.random() * 0.15 + 0.05})`,
    borderRadius: '50%',
    left: x + '%',
    bottom: '-10px',
    animation: `particleFloat ${duration}s ${delay}s linear infinite`,
    pointerEvents: 'none',
  });

  particlesContainer.appendChild(particle);
}

// Create floating particles
for (let i = 0; i < 30; i++) {
  createParticle();
}

// Add particle animation
const particleStyle = document.createElement('style');
particleStyle.textContent = `
  @keyframes particleFloat {
    0% {
      transform: translateY(0) translateX(0);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      transform: translateY(-100vh) translateX(${Math.random() > 0.5 ? '' : '-'}${Math.random() * 100}px);
      opacity: 0;
    }
  }
`;
document.head.appendChild(particleStyle);

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// Newsletter form (placeholder — wire up to actual service)
const newsletterForm = document.getElementById('newsletterForm');
newsletterForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = newsletterForm.querySelector('input').value;

  // Placeholder: replace with actual email service
  const btn = newsletterForm.querySelector('button');
  const originalText = btn.textContent;
  btn.textContent = 'Subscribed!';
  btn.style.background = '#5a9e4f';
  btn.style.borderColor = '#5a9e4f';
  newsletterForm.querySelector('input').value = '';

  setTimeout(() => {
    btn.textContent = originalText;
    btn.style.background = '';
    btn.style.borderColor = '';
  }, 3000);
});

// Stagger reveal for grid items
const staggerReveal = () => {
  const grids = document.querySelectorAll('.features-grid, .comparison-grid, .rating-tiers');

  grids.forEach(grid => {
    const items = grid.children;
    const rect = grid.getBoundingClientRect();

    if (rect.top < window.innerHeight - 40) {
      Array.from(items).forEach((item, i) => {
        setTimeout(() => {
          item.classList.add('visible');
        }, i * 100);
      });
    }
  });
};

window.addEventListener('scroll', staggerReveal);
window.addEventListener('load', staggerReveal);
