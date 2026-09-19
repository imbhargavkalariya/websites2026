/**
 * JANY PHARMA - MASTER JAVASCRIPT LOGIC
 * Includes Header logic, Custom Cursor, Scroll Reveals, Animated Stats,
 * Product Catalog Filtering, Product Specs Modal, Accordions & Contact Prefill.
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileDrawer();
  initCustomCursor();
  initScrollReveal();
  initCounters();
  initAccordions();

  // If on product page or container present
  if (document.getElementById('products-grid')) {
    initProductCatalog();
  }

  // If on contact page
  if (document.getElementById('inquiry-form')) {
    initContactForm();
  }
});

/* ==========================================================================
   1. STICKY HEADER & NAVBAR SHRINK
   ========================================================================== */
function initStickyHeader() {
  const header = document.getElementById('header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* ==========================================================================
   2. MOBILE NAVIGATION DRAWER
   ========================================================================== */
function initMobileDrawer() {
  const toggleBtn = document.getElementById('mobile-toggle');
  const drawer = document.getElementById('mobile-drawer');
  const overlay = document.getElementById('mobile-overlay');
  const closeBtn = document.getElementById('mobile-drawer-close');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !drawer || !overlay) return;

  const openDrawer = () => {
    toggleBtn.classList.add('active');
    drawer.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    toggleBtn.classList.remove('active');
    drawer.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  toggleBtn.addEventListener('click', () => {
    if (drawer.classList.contains('active')) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);
  navLinks.forEach(link => link.addEventListener('click', closeDrawer));
}

/* ==========================================================================
   3. CUSTOM DESKTOP CURSOR FOLLOW EFFECT
   ========================================================================== */
function initCustomCursor() {
  // Check if touch device
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth < 992) {
    return;
  }

  let cursorDot = document.querySelector('.custom-cursor-dot');
  let cursorRing = document.querySelector('.custom-cursor-ring');

  if (!cursorDot) {
    cursorDot = document.createElement('div');
    cursorDot.className = 'custom-cursor-dot';
    document.body.appendChild(cursorDot);
  }

  if (!cursorRing) {
    cursorRing = document.createElement('div');
    cursorRing.className = 'custom-cursor-ring';
    document.body.appendChild(cursorRing);
  }

  let mouseX = -100, mouseY = -100;
  let ringX = -100, ringY = -100;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.left = `${mouseX}px`;
    cursorDot.style.top = `${mouseY}px`;
  });

  function renderRing() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    cursorRing.style.left = `${ringX}px`;
    cursorRing.style.top = `${ringY}px`;
    requestAnimationFrame(renderRing);
  }
  requestAnimationFrame(renderRing);

  // Hover states for interactive elements
  const interactiveSelectors = 'a, button, .glass-card, .filter-tab, .product-card, input, select, textarea';
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(interactiveSelectors)) {
      document.body.classList.add('cursor-hover');
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(interactiveSelectors)) {
      document.body.classList.remove('cursor-hover');
    }
  });
}

/* ==========================================================================
   4. SCROLL REVEAL ANIMATIONS
   ========================================================================== */
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal-on-scroll');
  if (!elements.length) return;

  const observerOptions = {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  elements.forEach(el => observer.observe(el));
}

/* ==========================================================================
   5. ANIMATED STATISTIC COUNTERS
   ========================================================================== */
function initCounters() {
  const statNumbers = document.querySelectorAll('.stat-number');
  if (!statNumbers.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const countTo = parseInt(target.getAttribute('data-count'), 10);
        const prefix = target.getAttribute('data-prefix') || '';
        const suffix = target.getAttribute('data-suffix') || '';

        let count = 0;
        const duration = 2000;
        const stepTime = 20;
        const increment = countTo / (duration / stepTime);

        const timer = setInterval(() => {
          count += increment;
          if (count >= countTo) {
            target.textContent = `${prefix}${countTo}${suffix}`;
            clearInterval(timer);
          } else {
            target.textContent = `${prefix}${Math.floor(count)}${suffix}`;
          }
        }, stepTime);

        observer.unobserve(target);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(stat => observer.observe(stat));
}

/* ==========================================================================
   6. ACCORDION TOGGLE
   ========================================================================== */
function initAccordions() {
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isActive = item.classList.contains('active');

      // Close all other items in same container
      const parentContainer = item.parentElement;
      parentContainer.querySelectorAll('.accordion-item').forEach(child => {
        child.classList.remove('active');
      });

      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   7. PRODUCT CATALOG LOGIC (FILTERING, SEARCH & MODAL)
   ========================================================================== */
function initProductCatalog() {
  const grid = document.getElementById('products-grid');
  const searchInput = document.getElementById('product-search');
  const filterTabs = document.querySelectorAll('.filter-tab');
  const noProductsState = document.getElementById('no-products-state');

  if (!grid || typeof JANY_PRODUCTS === 'undefined') return;

  let currentCategory = 'all';
  let searchQuery = '';

  function renderProducts() {
    grid.innerHTML = '';

    const filtered = JANY_PRODUCTS.filter(prod => {
      const matchesCategory = (currentCategory === 'all') || (prod.categorySlug === currentCategory);
      const matchesSearch = prod.name.toLowerCase().includes(searchQuery) ||
        prod.category.toLowerCase().includes(searchQuery) ||
        prod.casNumber.toLowerCase().includes(searchQuery) ||
        prod.description.toLowerCase().includes(searchQuery);
      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      if (noProductsState) noProductsState.style.display = 'block';
      return;
    }

    if (noProductsState) noProductsState.style.display = 'none';

    filtered.forEach(prod => {
      const card = document.createElement('div');
      card.className = 'glass-card product-card reveal-on-scroll is-visible';
      card.innerHTML = `
        <div class="product-img-wrapper">
          <span class="product-category-badge">${prod.category}</span>
          <img src="${prod.image}" alt="${prod.name}" loading="lazy" />
        </div>
        <h3 class="product-title">${prod.name}</h3>
        <div class="product-spec-row">
          <span class="product-spec-label">Strength/Grade:</span>
          <span>${prod.strength}</span>
        </div>
        <div class="product-spec-row">
          <span class="product-spec-label">CAS Reg. No:</span>
          <span>${prod.casNumber}</span>
        </div>
        <div class="product-spec-row">
          <span class="product-spec-label">Dosage Form:</span>
          <span>${prod.dosageForm}</span>
        </div>
        <div class="product-actions">
          <button class="btn btn-secondary btn-sm view-details-btn" data-id="${prod.id}">
            View Details
          </button>
          <a href="contact.html?product=${encodeURIComponent(prod.name)}" class="btn btn-primary btn-sm">
            Inquire Now
          </a>
        </div>
      `;
      grid.appendChild(card);
    });

    // Attach click events to "View Details"
    document.querySelectorAll('.view-details-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const prodId = e.currentTarget.getAttribute('data-id');
        openProductModal(prodId);
      });
    });
  }

  // Filter tab event listeners
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentCategory = tab.getAttribute('data-category');
      renderProducts();
    });
  });

  // Search input listener
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderProducts();
    });
  }

  // Initial render
  renderProducts();

  // Check URL params for category preset
  const urlParams = new URLSearchParams(window.location.search);
  const catParam = urlParams.get('category');
  if (catParam) {
    const targetTab = document.querySelector(`.filter-tab[data-category="${catParam}"]`);
    if (targetTab) targetTab.click();
  }
}

/* Product Modal Pop-up */
function openProductModal(productId) {
  const product = JANY_PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  let modal = document.getElementById('product-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'product-modal';
    modal.className = 'modal-overlay';
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="modal-content">
      <button class="modal-close" id="modal-close-btn" aria-label="Close modal">&times;</button>
      <div class="modal-body-grid">
        <div class="modal-img-box">
          <img src="${product.image}" alt="${product.name}" />
        </div>
        <div>
          <span class="section-badge">${product.category}</span>
          <h2 style="margin-bottom: 0.5rem;">${product.name}</h2>
          <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1.25rem;">
            ${product.description}
          </p>
          <table class="modal-specs-table">
            <tr><th>Strength / Grade</th><td>${product.strength}</td></tr>
            <tr><th>CAS Reg. Number</th><td>${product.casNumber}</td></tr>
            <tr><th>Purity / Standard</th><td>${product.purity}</td></tr>
            <tr><th>Dosage / Formulation</th><td>${product.dosageForm}</td></tr>
            <tr><th>Packaging Specs</th><td>${product.packaging}</td></tr>
            <tr><th>Storage Conditions</th><td>${product.storage}</td></tr>
            <tr><th>Shelf Life</th><td>${product.shelfLife}</td></tr>
            <tr><th>Compliance Status</th><td>${product.compliance}</td></tr>
          </table>
          <div style="margin-top: 1.5rem; display: flex; gap: 1rem;">
            <a href="contact.html?product=${encodeURIComponent(product.name)}" class="btn btn-primary" style="flex:1;">
              Send Inquiry for ${product.name}
            </a>
          </div>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  const closeBtn = modal.querySelector('#modal-close-btn');
  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  window.addEventListener('keydown', function escHandler(e) {
    if (e.key === 'Escape') {
      closeModal();
      window.removeEventListener('keydown', escHandler);
    }
  });
}

/* ==========================================================================
   8. CONTACT FORM PREFILL & WHATSAPP GENERATOR
   ========================================================================== */
function initContactForm() {
  const urlParams = new URLSearchParams(window.location.search);
  const selectedProduct = urlParams.get('product');

  const productInput = document.getElementById('form-product-service');
  const messageInput = document.getElementById('form-message');

  if (selectedProduct && productInput) {
    productInput.value = `Inquiry for: ${selectedProduct}`;
    if (messageInput) {
      messageInput.value = `Hello Jani Pharma Team,\n\nWe would like to request official commercial quotes and compliance documentation (COA/Dossier) for: ${selectedProduct}.\n\nPlease provide specifications and lead times. Thank you.`;
    }

    // Smooth scroll to form if hash or parameter present
    const formSection = document.getElementById('inquiry-form');
    if (formSection) {
      setTimeout(() => {
        formSection.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  }

  // Handle inquiry form submit preview
  const form = document.getElementById('inquiry-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Sending Inquiry...';

      setTimeout(() => {
        submitBtn.innerHTML = '✔ Inquiry Sent Successfully!';
        submitBtn.style.background = 'var(--accent-emerald)';
        form.reset();

        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
          submitBtn.style.background = '';
        }, 4000);
      }, 1200);
    });
  }
}
