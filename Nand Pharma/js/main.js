/* ==========================================================================
   NAND PHARMA - MAIN INTERACTIVE JAVASCRIPT
   Handles Sticky Header, Custom Cursor, Mobile Drawer, Canvas Particles,
   Contact Form Validation, & WhatsApp Integration
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileMenu();
  initCustomCursor();
  initHeroCanvas();
  initScrollReveal();
  initDynamicYear();
  initContactForm();
});

/* --------------------------------------------------------------------------
   1. STICKY HEADER & SCROLL EFFECTS
   -------------------------------------------------------------------------- */
function initStickyHeader() {
  const header = document.querySelector('.header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
  });
}

/* --------------------------------------------------------------------------
   2. MOBILE MENU & HAMBURGER DRAWER
   -------------------------------------------------------------------------- */
function initMobileMenu() {
  const hamburgerBtn = document.querySelector('.hamburger-btn');
  const navMenu = document.querySelector('.nav-menu');
  const overlay = document.querySelector('.mobile-nav-overlay');
  
  if (!hamburgerBtn || !navMenu) return;

  function toggleMenu() {
    hamburgerBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
    if (overlay) overlay.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
  }

  hamburgerBtn.addEventListener('click', toggleMenu);
  
  if (overlay) {
    overlay.addEventListener('click', toggleMenu);
  }

  // Close menu when clicking nav links
  const navLinks = navMenu.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('active')) {
        toggleMenu();
      }
    });
  });
}

/* --------------------------------------------------------------------------
   3. CUSTOM CURSOR INTERACTION (FINE POINTERS ONLY)
   -------------------------------------------------------------------------- */
function initCustomCursor() {
  // Only execute if matchMedia pointer is fine
  if (!window.matchMedia('(pointer: fine)').matches) return;

  const dot = document.createElement('div');
  const follower = document.createElement('div');
  
  dot.className = 'custom-cursor-dot';
  follower.className = 'custom-cursor-follower';
  
  document.body.appendChild(dot);
  document.body.appendChild(follower);

  let mouseX = -100;
  let mouseY = -100;
  let followerX = -100;
  let followerY = -100;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;
  });

  function animateFollower() {
    followerX += (mouseX - followerX) * 0.15;
    followerY += (mouseY - followerY) * 0.15;
    follower.style.left = `${followerX}px`;
    follower.style.top = `${followerY}px`;
    requestAnimationFrame(animateFollower);
  }
  animateFollower();

  // Hover triggers for interactive elements
  const hoverSelectors = 'a, button, .product-card, .card-box, input, select, textarea, .filter-tab';
  
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(hoverSelectors)) {
      document.body.classList.add('cursor-hover');
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(hoverSelectors)) {
      document.body.classList.remove('cursor-hover');
    }
  });
}

/* --------------------------------------------------------------------------
   4. HERO SCIENTIFIC MOLECULAR CANVAS ANIMATION
   -------------------------------------------------------------------------- */
function initHeroCanvas() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];

  function resize() {
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
  }
  
  window.addEventListener('resize', resize);
  resize();

  const particleCount = Math.min(Math.floor(width / 25), 45);

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.radius = Math.random() * 2.5 + 1.5;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(14, 165, 233, 0.6)';
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    // Draw connecting molecular lines
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 130) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(2, 132, 199, ${0.25 * (1 - dist / 130)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(render);
  }

  render();
}

/* --------------------------------------------------------------------------
   5. SCROLL REVEAL ANIMATION
   -------------------------------------------------------------------------- */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(el => observer.observe(el));
}

/* --------------------------------------------------------------------------
   6. DYNAMIC COPYRIGHT YEAR
   -------------------------------------------------------------------------- */
function initDynamicYear() {
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/* --------------------------------------------------------------------------
   7. CONTACT FORM VALIDATION & DYNAMIC WHATSAPP REDIRECT
   Number: +91 90239 73459
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('inquiry-form');
  const productSelect = document.getElementById('form-product-select');
  
  // Auto-populate product select dropdown if PRODUCTS_DATA is loaded
  if (productSelect && typeof PRODUCTS_DATA !== 'undefined') {
    // Keep first default option
    const existingDefault = productSelect.querySelector('option[value=""]');
    productSelect.innerHTML = existingDefault ? existingDefault.outerHTML : '<option value="">Select Required API Product...</option>';
    
    PRODUCTS_DATA.forEach(p => {
      const opt = document.createElement('option');
      opt.value = p.name;
      opt.textContent = `${p.name} (HSN: ${p.hsn})`;
      productSelect.appendChild(opt);
    });
    
    // Add General Inquiry option
    const genOpt = document.createElement('option');
    genOpt.value = "General / Multiple API Inquiry";
    genOpt.textContent = "Other / General API Inquiry";
    productSelect.appendChild(genOpt);
    
    // Check URL parameters for pre-selected product
    const urlParams = new URLSearchParams(window.location.search);
    const preSelected = urlParams.get('product');
    if (preSelected) {
      const decoded = decodeURIComponent(preSelected);
      for (let i = 0; i < productSelect.options.length; i++) {
        if (productSelect.options[i].value.toLowerCase() === decoded.toLowerCase()) {
          productSelect.selectedIndex = i;
          break;
        }
      }
    }
  }

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const fullName = document.getElementById('form-name')?.value.trim();
    const company = document.getElementById('form-company')?.value.trim();
    const phone = document.getElementById('form-phone')?.value.trim();
    const email = document.getElementById('form-email')?.value.trim();
    const location = document.getElementById('form-location')?.value.trim();
    const product = document.getElementById('form-product-select')?.value;
    const quantity = document.getElementById('form-quantity')?.value.trim();
    const message = document.getElementById('form-message')?.value.trim();

    // Basic Validation
    if (!fullName || !phone || !email || !company) {
      alert('Please complete all required fields (Full Name, Company, Phone Number, Email Address).');
      return;
    }

    // Format WhatsApp Message
    const targetPhone = "919023973459";
    const waText = 
`*NAND PHARMA B2B INQUIRY*
----------------------------
*Name:* ${fullName}
*Company:* ${company}
*Phone:* ${phone}
*Email:* ${email}
*Location:* ${location || 'Not Specified'}
*Product Required:* ${product || 'General Inquiry'}
*Estimated Quantity:* ${quantity || 'Requirement upon discussion'}
*Message/Details:*
${message || 'No additional notes provided.'}
----------------------------
Please share COA, specifications, MOQ, and commercial pricing.`;

    const waUrl = `https://wa.me/${targetPhone}?text=${encodeURIComponent(waText)}`;

    // Display Feedback Toast
    const toast = document.getElementById('form-toast');
    if (toast) {
      toast.style.display = 'flex';
      toast.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // Redirect to WhatsApp after short delay
    setTimeout(() => {
      window.open(waUrl, '_blank');
      form.reset();
    }, 1200);
  });
}
