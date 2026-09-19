/* ==========================================================================
   NAND PHARMA - API PRODUCTS DATASET & DYNAMIC GRID LOGIC
   Official Business WhatsApp: +91 90239 73459
   ========================================================================== */

const PRODUCTS_DATA = [
  {
    id: "paracetamol-api",
    name: "Paracetamol API",
    category: "Analgesics & Antipyretics",
    cas: "103-90-2",
    hsn: "2924 29 90",
    formula: "C8H9NO2",
    mw: "151.16 g/mol",
    grade: "IP / BP / USP / EP Standard",
    packing: "25 Kg HDPE Drum with double inner LDPE liner bags",
    storage: "Store in a well-closed, light-resistant container at room temperature.",
    description: "High-purity Paracetamol (Acetaminophen) API manufactured under strict GMP compliance. Widely used as a core active ingredient for antipyretic and analgesic formulations.",
    applications: ["Oral Tablets", "Pediatric Suspensions", "Effervescent Granules", "Injectable Solutions"],
    qualityNote: "Batch COA, MSDS, and specification dossier available upon commercial inquiry.",
    isFeatured: true,
    isPopular: true,
    image: "assets/images/products/api-powder-1.png"
  },
  {
    id: "ibuprofen-api",
    name: "Ibuprofen API",
    category: "Analgesics & Antipyretics",
    cas: "15687-27-1",
    hsn: "2916 39 90",
    formula: "C13H18O2",
    mw: "206.28 g/mol",
    grade: "IP / BP / USP / EP Standard",
    packing: "25 Kg Fibre Drum / Corrugated Box with LDPE liners",
    storage: "Preserve in tight containers, protected from light and heat.",
    description: "Premium Non-Steroidal Anti-Inflammatory Drug (NSAID) active pharmaceutical ingredient, offering excellent bulk density and compression profiles for pharmaceutical manufacturing.",
    applications: ["Film-Coated Tablets", "Soft Gel Capsules", "Topical Gels", "Oral Suspensions"],
    qualityNote: "Complies with international pharmacopeia monographs.",
    isFeatured: true,
    isPopular: true,
    image: "assets/images/products/api-powder-2.png"
  },
  {
    id: "azithromycin-api",
    name: "Azithromycin API",
    category: "Antibiotics & Anti-Infectives",
    cas: "83905-01-5",
    hsn: "2941 90 90",
    formula: "C38H72N2O12",
    mw: "749.00 g/mol",
    grade: "IP / BP / USP Standard",
    packing: "25 Kg Aluminium Canister / HDPE Drum",
    storage: "Keep in a cool, dry place protected from moisture and air exposure.",
    description: "Broad-spectrum macrolide antibiotic active pharmaceutical ingredient engineered for optimal potency, stability, and bio-availability in anti-infective formulations.",
    applications: ["Dispersible Tablets", "Dry Suspensions", "Intravenous Infusions"],
    qualityNote: "Assay 98.0% - 102.0% (on anhydrous basis). Fully tested for impurity profile.",
    isFeatured: true,
    isPopular: false,
    image: "assets/images/products/api-powder-1.png"
  },
  {
    id: "amoxicillin-trihydrate-api",
    name: "Amoxicillin Trihydrate API",
    category: "Antibiotics & Anti-Infectives",
    cas: "61336-70-7",
    hsn: "2941 10 30",
    formula: "C16H19N3O5S · 3H2O",
    mw: "419.45 g/mol",
    grade: "IP / BP / USP / EP Standard",
    packing: "25 Kg Corrugated Fiber Drum with double PE liners",
    storage: "Store below 25°C in airtight, moisture-proof packaging.",
    description: "Micronized semi-synthetic penicillin API with broad antibacterial coverage. Excellent particle size distribution for high-speed tablet compression and oral suspension stability.",
    applications: ["Oral Capsules", "Chewable Tablets", "Dry Syrups"],
    qualityNote: "Strict control over microbial limits and residual solvents.",
    isFeatured: true,
    isPopular: true,
    image: "assets/images/products/api-powder-2.png"
  },
  {
    id: "pantoprazole-sodium-api",
    name: "Pantoprazole Sodium API",
    category: "Gastrointestinal",
    cas: "138780-47-1",
    hsn: "2933 99 00",
    formula: "C16H14F2N3NaO4S · 1.5H2O",
    mw: "432.37 g/mol",
    grade: "IP / BP / USP Standard",
    packing: "25 Kg HDPE Drum with black double polyethylene bags",
    storage: "Store protected from light and humidity at controlled room temperature.",
    description: "Potent proton pump inhibitor (PPI) API produced with high chemical stability. Essential for enteric-coated oral solid dosage forms and parenteral formulations.",
    applications: ["Enteric-Coated Tablets", "Lyophilized Injections"],
    qualityNote: "High purity white to off-white crystalline API.",
    isFeatured: true,
    isPopular: false,
    image: "assets/images/products/api-powder-1.png"
  },
  {
    id: "omeprazole-api",
    name: "Omeprazole API",
    category: "Gastrointestinal",
    cas: "73590-58-6",
    hsn: "2933 99 00",
    formula: "C17H19N3O3S",
    mw: "345.42 g/mol",
    grade: "IP / BP / USP / EP Standard",
    packing: "25 Kg Aluminium Container / Fiber Drum with double liners",
    storage: "Store in a light-resistant, airtight container at 2°C to 8°C or cool dark room.",
    description: "Benchmark gastro-protective proton pump inhibitor API supplied in fine crystalline powder format. Ideal for multi-unit pellet system (MUPS) and enteric capsule formulations.",
    applications: ["Enteric Pellets Capsules", "Delayed-Release Tablets"],
    qualityNote: "Controlled particle distribution for uniform pellet coating.",
    isFeatured: true,
    isPopular: true,
    image: "assets/images/products/api-powder-2.png"
  },
  {
    id: "metformin-hydrochloride-api",
    name: "Metformin Hydrochloride API",
    category: "Cardiovascular & Metabolic",
    cas: "1115-70-4",
    hsn: "2925 29 90",
    formula: "C4H11N5 · HCl",
    mw: "165.62 g/mol",
    grade: "IP / BP / USP / EP Standard",
    packing: "25 Kg / 50 Kg HDPE Drums / Jumbo Bags",
    storage: "Store in a well-closed container in a dry place.",
    description: "First-line biguanide anti-diabetic active pharmaceutical ingredient. Available in direct-compression (DC) and standard crystalline grades for high-volume B2B manufacturing.",
    applications: ["Immediate Release Tablets", "Sustained Release (SR/XR) Formulations"],
    qualityNote: "Free-flowing white crystalline powder with zero clumping.",
    isFeatured: false,
    isPopular: true,
    image: "assets/images/products/api-powder-1.png"
  },
  {
    id: "atorvastatin-calcium-api",
    name: "Atorvastatin Calcium API",
    category: "Cardiovascular & Metabolic",
    cas: "134523-03-8",
    hsn: "2933 99 00",
    formula: "C66H68CaF2N4O10 · 3H2O",
    mw: "1209.42 g/mol",
    grade: "IP / BP / USP Standard",
    packing: "25 Kg Fibre Drum with triple PE protective barrier bags",
    storage: "Store in tight, light-resistant container at controlled room temperature.",
    description: "Synthetic HMG-CoA reductase inhibitor (statin) API engineered for high cardiovascular formulation efficacy and optimal chemical purity standards.",
    applications: ["Film-Coated Lipid-Lowering Tablets", "Combination Therapy Tablets"],
    qualityNote: "Ultra-low impurity profile adhering to USP/EP monographs.",
    isFeatured: false,
    isPopular: false,
    image: "assets/images/products/api-powder-2.png"
  },
  {
    id: "losartan-potassium-api",
    name: "Losartan Potassium API",
    category: "Cardiovascular & Metabolic",
    cas: "124750-99-8",
    hsn: "2933 99 00",
    formula: "C22H22ClKN6O",
    mw: "461.01 g/mol",
    grade: "IP / BP / USP Standard",
    packing: "25 Kg HDPE Drum with double inner protective bags",
    storage: "Keep tightly sealed, protected from direct sunlight and atmospheric moisture.",
    description: "Angiotensin II receptor blocker (ARB) active ingredient tailored for antihypertensive pharmaceuticals. Consistently high dissolution and stability.",
    applications: ["Antihypertensive Tablets", "Fixed-Dose Combination Formulations"],
    qualityNote: "Assay 98.5% - 101.5%. Soluble in water and alcohol.",
    isFeatured: false,
    isPopular: false,
    image: "assets/images/products/api-powder-1.png"
  },
  {
    id: "cetirizine-hydrochloride-api",
    name: "Cetirizine Hydrochloride API",
    category: "Respiratory & Anti-Allergic",
    cas: "83881-52-1",
    hsn: "2933 59 90",
    formula: "C21H25ClN2O3 · 2HCl",
    mw: "461.81 g/mol",
    grade: "IP / BP / USP / EP Standard",
    packing: "25 Kg Fiber Drum with double LDPE liners",
    storage: "Store in tight, light-resistant containers.",
    description: "Second-generation antihistamine API widely incorporated in allergy relief medications. High water solubility and consistent bioavailability.",
    applications: ["Oral Solution", "Chewable Allergy Tablets", "Syrups"],
    qualityNote: "White crystalline powder meeting stringent purity guidelines.",
    isFeatured: false,
    isPopular: false,
    image: "assets/images/products/api-powder-2.png"
  },
  {
    id: "montelukast-sodium-api",
    name: "Montelukast Sodium API",
    category: "Respiratory & Anti-Allergic",
    cas: "151767-02-1",
    hsn: "2933 99 00",
    formula: "C35H35ClNNaS3O3",
    mw: "608.17 g/mol",
    grade: "IP / BP / USP Standard",
    packing: "25 Kg Aluminium Canister / Fibre Drum under nitrogen purge",
    storage: "Store at 2°C to 8°C protected from light, moisture, and heat.",
    description: "Leukotriene receptor antagonist API essential for asthma prophylaxis and seasonal allergic rhinitis treatments.",
    applications: ["Chewable Tablets", "Oral Granules", "Film-Coated Tablets"],
    qualityNote: "Hygroscopic powder packaged with moisture-barrier protection.",
    isFeatured: false,
    isPopular: false,
    image: "assets/images/products/api-powder-1.png"
  },
  {
    id: "diclofenac-sodium-api",
    name: "Diclofenac Sodium API",
    category: "Analgesics & Antipyretics",
    cas: "15307-79-6",
    hsn: "2922 49 90",
    formula: "C14H10Cl2NNaO2",
    mw: "318.13 g/mol",
    grade: "IP / BP / USP / EP Standard",
    packing: "25 Kg HDPE Drum with double inner LDPE bags",
    storage: "Store in light-resistant, tight containers.",
    description: "Potent anti-inflammatory API with analgesic and antipyretic efficacy. Preferred choice for topical gels, transdermal patches, and oral solid dosages.",
    applications: ["Sustained-Release Tablets", "Topical Gels & Ointments", "Intramuscular Injections"],
    qualityNote: "White to slightly yellowish crystalline powder.",
    isFeatured: false,
    isPopular: false,
    image: "assets/images/products/api-powder-2.png"
  },
  {
    id: "doxycycline-hyclate-api",
    name: "Doxycycline Hyclate API",
    category: "Antibiotics & Anti-Infectives",
    cas: "24390-14-5",
    hsn: "2941 30 90",
    formula: "(C22H24N2O8 · HCl)2 · C2H6O · H2O",
    mw: "1025.89 g/mol",
    grade: "IP / BP / USP Standard",
    packing: "25 Kg Aluminium Container / Fiber Drum",
    storage: "Store in well-closed containers, protected from light and humidity.",
    description: "Broad-spectrum tetracycline derivative active ingredient used across anti-infective formulations.",
    applications: ["Capsules", "Injectable Suspensions", "Oral Tablets"],
    qualityNote: "Yellow crystalline powder complying with international pharmacopeia limits.",
    isFeatured: false,
    isPopular: false,
    image: "assets/images/products/api-powder-1.png"
  },
  {
    id: "fluconazole-api",
    name: "Fluconazole API",
    category: "Antifungal & Anti-Emetic",
    cas: "86386-73-4",
    hsn: "2933 99 00",
    formula: "C13H12F2N6O",
    mw: "306.27 g/mol",
    grade: "IP / BP / USP / EP Standard",
    packing: "25 Kg HDPE Drum with double polyethylene inner bags",
    storage: "Store below 30°C in original sealed packaging.",
    description: "Triazole antifungal API engineered for systematic fungal infection therapeutics with high oral bioavailability.",
    applications: ["Oral Capsules", "Intravenous Infusions", "Oral Suspensions"],
    qualityNote: "High chemical stability and low residual solvent profile.",
    isFeatured: false,
    isPopular: false,
    image: "assets/images/products/api-powder-2.png"
  },
  {
    id: "ondansetron-hydrochloride-api",
    name: "Ondansetron Hydrochloride API",
    category: "Antifungal & Anti-Emetic",
    cas: "103639-04-9",
    hsn: "2933 99 00",
    formula: "C18H19N3O · HCl · 2H2O",
    mw: "365.85 g/mol",
    grade: "IP / BP / USP Standard",
    packing: "25 Kg Fibre Drum / Aluminium Canister",
    storage: "Protect from light, moisture, and excessive heat.",
    description: "Selective 5-HT3 receptor antagonist anti-emetic API essential for post-operative and chemo-therapy anti-nausea medication.",
    applications: ["Orally Disintegrating Tablets (ODT)", "IV Injections", "Oral Solutions"],
    qualityNote: "Purity > 99.0% with strict batch-to-batch consistency.",
    isFeatured: false,
    isPopular: false,
    image: "assets/images/products/api-powder-1.png"
  }
];

/* --------------------------------------------------------------------------
   WHATSAPP PRE-FILLED URL GENERATOR
   Number: +91 90239 73459
   -------------------------------------------------------------------------- */
function generateWhatsAppUrl(productName, hsnCode) {
  const phone = "919023973459";
  const nameStr = productName || "API Products";
  const hsnStr = hsnCode || "N/A";
  const message = `Hello Nand Pharma, I would like to inquire about ${nameStr}, HSN Code: ${hsnStr}. Please share specifications, MOQ, pricing, packaging and availability.`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

/* --------------------------------------------------------------------------
   PRODUCT CARD HTML GENERATOR
   -------------------------------------------------------------------------- */
function createProductCardHTML(product) {
  const waUrl = generateWhatsAppUrl(product.name, product.hsn);
  
  return `
    <div class="product-card" data-id="${product.id}" data-category="${product.category}">
      <div class="product-img-wrap">
        <img src="${product.image}" alt="${product.name} - Nand Pharma API Supplier" class="product-img" loading="lazy" />
        <div class="product-badge-group">
          ${product.isFeatured ? `<span class="badge badge-blue">Featured</span>` : ''}
          ${product.isPopular ? `<span class="badge badge-mint">Popular</span>` : ''}
        </div>
      </div>
      <div class="product-content">
        <span class="product-category-tag">${product.category}</span>
        <h3 class="product-title">${product.name}</h3>
        
        <div class="product-meta-grid">
          <div class="meta-item">
            <span class="meta-label">CAS Number</span>
            <span class="meta-value">${product.cas}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">HSN Code</span>
            <span class="meta-value">${product.hsn}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Formula</span>
            <span class="meta-value">${product.formula}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Grade</span>
            <span class="meta-value">${product.grade.split(' ')[0]} Std</span>
          </div>
        </div>
        
        <p class="product-desc">${product.description}</p>
        
        <div class="product-actions">
          <button type="button" class="btn btn-secondary btn-sm js-view-details" onclick="openProductModal('${product.id}')">
            View Details
          </button>
          <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-sm">
            <i class="ri-whatsapp-line btn-icon"></i> Inquiry
          </a>
        </div>
      </div>
    </div>
  `;
}

/* --------------------------------------------------------------------------
   RENDER PRODUCTS INTO CONTAINER
   -------------------------------------------------------------------------- */
function renderProducts(containerId, productList) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  if (productList.length === 0) {
    container.innerHTML = `
      <div class="no-results">
        <i class="ri-search-eye-line no-results-icon"></i>
        <h3>No API Products Found</h3>
        <p>No active ingredients matched your filter search criteria. Please try another keyword or browse categories.</p>
      </div>
    `;
    return;
  }
  
  container.innerHTML = productList.map(createProductCardHTML).join('');
}

/* --------------------------------------------------------------------------
   SEARCH AND FILTER SYSTEM
   -------------------------------------------------------------------------- */
function initProductSearchAndFilter(gridContainerId = 'products-grid-container') {
  const searchInput = document.getElementById('product-search-input');
  const clearBtn = document.getElementById('search-clear-btn');
  const filterTabs = document.querySelectorAll('.filter-tab');
  
  let currentCategory = 'all';
  let currentSearch = '';
  
  function applyFilters() {
    let filtered = PRODUCTS_DATA;
    
    // Category Filter
    if (currentCategory !== 'all') {
      filtered = filtered.filter(p => p.category.toLowerCase() === currentCategory.toLowerCase());
    }
    
    // Search Filter
    if (currentSearch.trim() !== '') {
      const query = currentSearch.toLowerCase().trim();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(query) ||
        p.cas.toLowerCase().includes(query) ||
        p.hsn.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.formula.toLowerCase().includes(query)
      );
    }
    
    renderProducts(gridContainerId, filtered);
  }
  
  // Filter Tabs Event Listeners
  if (filterTabs) {
    filterTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        filterTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        currentCategory = tab.getAttribute('data-category') || 'all';
        applyFilters();
      });
    });
  }
  
  // Search Input Event Listener
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value;
      if (clearBtn) {
        clearBtn.style.display = currentSearch.length > 0 ? 'block' : 'none';
      }
      applyFilters();
    });
  }
  
  // Clear Search
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      currentSearch = '';
      clearBtn.style.display = 'none';
      applyFilters();
    });
  }
  
  // Initial render
  renderProducts(gridContainerId, PRODUCTS_DATA);
}

/* --------------------------------------------------------------------------
   PRODUCT MODAL DETAILED VIEW
   -------------------------------------------------------------------------- */
function openProductModal(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;
  
  const modalOverlay = document.getElementById('product-modal-overlay');
  const modalContent = document.getElementById('product-modal-content');
  if (!modalOverlay || !modalContent) return;
  
  const waUrl = generateWhatsAppUrl(product.name, product.hsn);
  
  modalContent.innerHTML = `
    <div class="modal-body">
      <div class="modal-img-box">
        <img src="${product.image}" alt="${product.name}" />
      </div>
      
      <div class="modal-info">
        <div class="modal-header-meta">
          <span class="badge badge-blue">${product.category}</span>
          <h2 class="modal-title">${product.name}</h2>
          <p style="color: var(--text-muted); font-size: 0.92rem;">${product.description}</p>
        </div>
        
        <table class="spec-table">
          <tbody>
            <tr>
              <th>CAS Registry No.</th>
              <td><strong>${product.cas}</strong></td>
            </tr>
            <tr>
              <th>HSN Code</th>
              <td><strong>${product.hsn}</strong></td>
            </tr>
            <tr>
              <th>Molecular Formula</th>
              <td>${product.formula}</td>
            </tr>
            <tr>
              <th>Molecular Weight</th>
              <td>${product.mw}</td>
            </tr>
            <tr>
              <th>Grade / Spec</th>
              <td>${product.grade}</td>
            </tr>
            <tr>
              <th>Standard Packaging</th>
              <td>${product.packing}</td>
            </tr>
            <tr>
              <th>Storage Conditions</th>
              <td>${product.storage}</td>
            </tr>
          </tbody>
        </table>
        
        <div style="margin-bottom: 1.25rem;">
          <h4 style="font-size: 0.95rem; margin-bottom: 0.5rem; color: var(--primary-navy);">Target Formulations & Applications:</h4>
          <div class="applications-list">
            ${product.applications.map(app => `<span class="app-pill">${app}</span>`).join('')}
          </div>
        </div>
        
        <div class="modal-quality-note">
          <i class="ri-shield-check-line" style="color: var(--blue-accent); font-size: 1.1rem; vertical-align: middle;"></i>
          <strong>Quality & Compliance:</strong> ${product.qualityNote}
        </div>
        
        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
          <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-lg" style="flex: 1;">
            <i class="ri-whatsapp-line btn-icon"></i> Inquire on WhatsApp
          </a>
          <a href="contact.html?product=${encodeURIComponent(product.name)}" class="btn btn-secondary btn-lg">
            Send Email Inquiry
          </a>
        </div>
      </div>
    </div>
  `;
  
  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  const modalOverlay = document.getElementById('product-modal-overlay');
  if (modalOverlay) {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Close modal on click overlay or Esc key
document.addEventListener('DOMContentLoaded', () => {
  const modalOverlay = document.getElementById('product-modal-overlay');
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeProductModal();
    });
  }
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeProductModal();
  });
});
