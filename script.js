const WHATSAPP_NUMBER = "918308651469";

const PRODUCTS = [
  {
    id: 1,
    name: "Swaranjali Classic Harmonium",
    category: "Harmonium",
    price: 18999,
    oldPrice: 21999,
    badge: "Bestseller",
    description: "Traditional harmonium with warm tonal character for devotional and classical use.",
    longDescription: "A premium-looking harmonium suited for bhajans, home practice, and stage performance. Designed for a polished product showcase with a rich wooden look and elegant front profile.",
    highlights: ["Smooth key response", "Portable folding body", "Ideal for devotional music"],
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 2,
    name: "Mehfil Deluxe Harmonium",
    category: "Harmonium",
    price: 22999,
    oldPrice: 25999,
    badge: "Premium",
    description: "Decorative harmonium styling with a premium visual presentation.",
    longDescription: "A visually rich harmonium option for customers looking for an instrument with elegant decorative appeal. Great for showroom display, gifts, and devotional performance setups.",
    highlights: ["Premium visual appeal", "Elegant body design", "Showroom-ready presentation"],
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 3,
    name: "Naad Sheesham Tabla Set",
    category: "Tabla",
    price: 15999,
    oldPrice: 18499,
    badge: "Popular",
    description: "Classic tabla pair with clear dayan response and strong bayan depth.",
    longDescription: "A refined tabla set suitable for learners and intermediate players who want a polished appearance and balanced tonal response for regular riyaz and live presentation.",
    highlights: ["Balanced sound character", "Performance-ready look", "Traditional percussion appeal"],
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 4,
    name: "Riyaaz Copper Bayan Tabla",
    category: "Tabla",
    price: 23999,
    oldPrice: 26999,
    badge: "Artist Pick",
    description: "Premium tabla styling with strong stage presence and handcrafted detail.",
    longDescription: "Designed for players who want a more premium visual impression with dependable sound feel. A polished product for classical music lovers and serious performers.",
    highlights: ["Stage-friendly look", "Premium percussion styling", "Suitable for advanced players"],
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 5,
    name: "SwarKey 61 Student Keyboard",
    category: "Keyboard",
    price: 14499,
    oldPrice: 16999,
    badge: "New",
    description: "Compact keyboard for music classes, home practice, and learner setups.",
    longDescription: "A practical keyboard choice for students and hobby musicians. Its clean design makes it easy to present as a catalog item for educational and personal music use.",
    highlights: ["Beginner friendly", "Clean modern design", "Great for home use"],
    image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 6,
    name: "StageTone Performance Keyboard",
    category: "Keyboard",
    price: 28999,
    oldPrice: 31999,
    badge: "Featured",
    description: "Performance-style keyboard with a premium stage-ready presentation.",
    longDescription: "A more advanced keyboard option for customers who want a product that looks substantial, premium, and suitable for studio or live-performance environments.",
    highlights: ["Stage-ready styling", "Premium presentation", "Ideal for serious users"],
    image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 7,
    name: "Aarambh Acoustic Guitar",
    category: "Guitar",
    price: 8999,
    oldPrice: 10499,
    badge: "Starter Favorite",
    description: "Warm-toned acoustic guitar for beginners, students, and home practice.",
    longDescription: "A comfortable entry-level acoustic guitar with a clean natural finish. Perfect for music classes, gifting, and customers starting their playing journey.",
    highlights: ["Comfortable body shape", "Natural acoustic look", "Beginner friendly"],
    image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 8,
    name: "SurTarang Cutaway Guitar",
    category: "Guitar",
    price: 13499,
    oldPrice: 15499,
    badge: "Modern",
    description: "Modern acoustic guitar styling with a clean premium finish and broad appeal.",
    longDescription: "A stylish guitar for catalog presentation, suitable for learners, casual performers, and customers who prefer a more premium visual finish in an acoustic instrument.",
    highlights: ["Modern display appeal", "Versatile use case", "Premium finish look"],
    image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 9,
    name: "Festival Dholak Classic",
    category: "Dholak",
    price: 7499,
    oldPrice: 8699,
    badge: "Value Pick",
    description: "Traditional hand drum style for folk, bhajan, and festive performances.",
    longDescription: "A compact dholak-style product with strong visual appeal for devotional gatherings, festive programs, and live folk music settings.",
    highlights: ["Folk performance ready", "Portable body", "Great for festive use"],
    image: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 10,
    name: "Lehra Hand Drum Edition",
    category: "Dholak",
    price: 9999,
    oldPrice: 11499,
    badge: "Handcrafted",
    description: "Handheld drum look with a strong performance vibe and traditional identity.",
    longDescription: "A more premium dholak-style showcase item intended for performers and customers who want a compact rhythmic instrument with character and visual charm.",
    highlights: ["Traditional rhythm look", "Performance-friendly feel", "Compact and striking"],
    image: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 11,
    name: "Stage Mic Stand Pro",
    category: "Musical Accessories",
    price: 2499,
    oldPrice: 2999,
    badge: "Essential",
    description: "Elegant microphone stand setup for stage, events, and vocal practice spaces.",
    longDescription: "A useful accessory item that rounds out your music catalog. Ideal for singers, public performances, rehearsal rooms, and event setups.",
    highlights: ["Stage-ready design", "Useful accessory item", "Ideal for singers and events"],
    image: "https://images.unsplash.com/photo-1516280030429-27679b3dc9cf?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 12,
    name: "Studio Vocal Microphone",
    category: "Musical Accessories",
    price: 3999,
    oldPrice: 4999,
    badge: "Trending",
    description: "Studio-style microphone accessory for recording, vocals, and content creators.",
    longDescription: "A polished audio accessory for users who want a professional-looking microphone for singing practice, podcasting, or studio display setups.",
    highlights: ["Studio recording look", "Premium accessory option", "Good for creators and vocals"],
    image: "https://images.unsplash.com/photo-1516280030429-27679b3dc9cf?auto=format&fit=crop&w=1200&q=80"
  },

  {
     id: 13,
     name: "DJ",
     category: "Musical Accessories",
     price: 190999,
     oldPrice: 194999,
     badge: "Trending",
     description: "Studio-style microphone accessory for recording, vocals, and content creators.",
     longDescription: "A polished audio accessory for users who want a professional-looking microphone for singing practice, podcasting, or studio display setups.",
     highlights: ["Studio recording look", "Premium accessory option", "Good for creators and vocals"],
     image: "https://images.unsplash.com/photo-1516280030429-27679b3dc9cf?auto=format&fit=crop&w=1200&q=80"
  }

];

const CATEGORIES = [
  { name: "Harmonium", icon: "🎹", copy: "Traditional reed instruments for bhajan and classical music." },
  { name: "Tabla", icon: "🥁", copy: "Classical hand percussion for practice, stage, and teaching." },
  { name: "Keyboard", icon: "⌨️", copy: "Portable and performance-style keyboards for all levels." },
  { name: "Guitar", icon: "🎸", copy: "Acoustic guitars for learners, hobby players, and performers." },
  { name: "Dholak", icon: "🪘", copy: "Rhythmic folk instruments for festive and devotional settings." },
  { name: "Musical Accessories", icon: "🎤", copy: "Useful add-ons like microphones, stands, and support gear." }
];

function loadWishlist() {
  try {
    const raw = window.localStorage.getItem("ssk-wishlist");
    const parsed = raw ? JSON.parse(raw) : [];
    return new Set(Array.isArray(parsed) ? parsed : []);
  } catch (error) {
    console.warn("Wishlist storage could not be read. Resetting it.", error);
    return new Set();
  }
}

const state = {
  category: "All",
  search: "",
  maxPrice: 5000000,
  sort: "featured",
  wishlistOnly: false,
  selectedId: 1,
  wishlist: loadWishlist()
};

function $(selector, root = document) { return root.querySelector(selector); }
function $all(selector, root = document) { return Array.from(root.querySelectorAll(selector)); }

function formatPrice(value) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(value);
}

function discountPercentage(price, oldPrice) {
  return Math.round(((oldPrice - price) / oldPrice) * 100);
}

function whatsappLink(product) {
  const message = `Hello Shri Samarth Krupa Musical, I am interested in "${product.name}" (${formatPrice(product.price)}). Please share more details.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function saveWishlist() {
  try {
    window.localStorage.setItem("ssk-wishlist", JSON.stringify([...state.wishlist]));
  } catch (error) {
    console.warn("Wishlist storage could not be saved.", error);
  }
  updateWishlistUI();
}

function updateWishlistUI() {
  $all("[data-wishlist-count]").forEach(el => { el.textContent = state.wishlist.size; });
}

function getQueryParams() {
  return new URLSearchParams(window.location.search);
}

function setActiveNav() {
  const page = document.body.dataset.page;
  $all(".nav-links a").forEach(link => {
    if (link.dataset.page === page) link.classList.add("active");
  });
}

function initNav() {
  const toggle = $(".nav-toggle");
  const menu = $(".nav-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", () => menu.classList.toggle("open"));
  }
}

function showToast(message) {
  const toast = $("#toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2200);
}

function attachCatalogButton() {
  const btn = $("#catalogOnlyBtn");
  if (!btn) return;
  btn.addEventListener("click", () => showToast("This is a display-only website. Customers contact you on WhatsApp."));
}

function renderCategoryCards(selector) {
  const container = $(selector);
  if (!container) return;
  container.innerHTML = CATEGORIES.map(category => {
    const count = PRODUCTS.filter(item => item.category === category.name).length;
    return `
      <a class="category-card" href="products.html?category=${encodeURIComponent(category.name)}">
        <div class="category-icon">${category.icon}</div>
        <h3>${category.name}</h3>
        <p>${category.copy}</p>
        <div class="category-meta">
          <span>${count} products</span>
          <span>View catalog →</span>
        </div>
      </a>
    `;
  }).join("");
}

function toggleWishlist(productId) {
  if (state.wishlist.has(productId)) {
    state.wishlist.delete(productId);
    showToast("Removed from wishlist");
  } else {
    state.wishlist.add(productId);
    showToast("Saved to wishlist");
  }
  saveWishlist();
  renderProductsPage();
  renderFeaturedProducts();
  renderRelatedProducts();
  renderDetailPage();
}

function productCard(product) {
  const inWishlist = state.wishlist.has(product.id);
  return `
    <article class="product-card">
      <div class="product-media">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <button class="wishlist-btn ${inWishlist ? "active" : ""}" data-wishlist-id="${product.id}" aria-label="Save to wishlist">${inWishlist ? "♥" : "♡"}</button>
      </div>
      <div class="product-body">
        <div class="product-top">
          <span class="badge-soft">${product.badge}</span>
          <span class="product-category">${product.category}</span>
        </div>
        <h3 class="product-title">${product.name}</h3>
        <p class="product-desc">${product.description}</p>
        <div class="price-row">
          <span class="price">${formatPrice(product.price)}</span>
          <span class="old-price">${formatPrice(product.oldPrice)}</span>
          <span class="discount">${discountPercentage(product.price, product.oldPrice)}% off</span>
        </div>
        <div class="card-actions">
          <a class="btn btn-soft" href="details.html?id=${product.id}">View details</a>
          <a class="btn btn-primary" target="_blank" rel="noopener" href="${whatsappLink(product)}">WhatsApp inquiry</a>
        </div>
      </div>
    </article>
  `;
}

function wireWishlistButtons(root = document) {
  $all("[data-wishlist-id]", root).forEach(button => {
    button.addEventListener("click", event => {
      event.preventDefault();
      toggleWishlist(Number(button.dataset.wishlistId));
    });
  });
}

function applyQueryStateFromUrl() {
  const params = getQueryParams();
  const category = params.get("category");
  const search = params.get("search");
  const detailId = params.get("id");
  if (category) state.category = category;
  if (search) state.search = search;
  if (detailId) state.selectedId = Number(detailId);
}

function filteredProducts() {
  const query = state.search.trim().toLowerCase();
  const list = PRODUCTS.filter(product => {
    const haystack = `${product.name} ${product.category} ${product.description} ${product.longDescription}`.toLowerCase();
    const matchesSearch = !query || haystack.includes(query);
    const matchesCategory = state.category === "All" || product.category === state.category;
    const matchesPrice = product.price <= state.maxPrice;
    const matchesWishlist = !state.wishlistOnly || state.wishlist.has(product.id);
    return matchesSearch && matchesCategory && matchesPrice && matchesWishlist;
  });

  switch (state.sort) {
    case "priceLowHigh":
      list.sort((a, b) => a.price - b.price);
      break;
    case "priceHighLow":
      list.sort((a, b) => b.price - a.price);
      break;
    case "nameAZ":
      list.sort((a, b) => a.name.localeCompare(b.name));
      break;
    default:
      list.sort((a, b) => a.id - b.id);
  }
  return list;
}

function renderFeaturedProducts() {
  const grid = $("#featuredProducts");
  if (!grid) return;
  grid.innerHTML = PRODUCTS.slice(0, 4).map(productCard).join("");
  wireWishlistButtons(grid);
}

function renderProductsPage() {
  const grid = $("#productGrid");
  if (!grid) return;

  const resultsText = $("#resultsText");
  const wishlistText = $("#wishlistText");
  const list = filteredProducts();

  if (resultsText) {
    resultsText.textContent = `Showing ${list.length} product${list.length === 1 ? "" : "s"}`;
  }
  if (wishlistText) {
    wishlistText.textContent = state.wishlist.size;
  }

  if (!list.length) {
    grid.innerHTML = `
      <div class="empty-state">
        <h3>No products found</h3>
        <p>Try changing search, category, or price filters.</p>
        <button class="btn btn-primary" id="resetFiltersBtn">Reset filters</button>
      </div>
    `;
    const resetBtn = $("#resetFiltersBtn");
    if (resetBtn) resetBtn.addEventListener("click", resetFilters);
    return;
  }

  grid.innerHTML = list.map(productCard).join("");
  wireWishlistButtons(grid);
}

function resetFilters() {
  state.category = "All";
  state.search = "";
  state.maxPrice = 50000;
  state.sort = "featured";
  state.wishlistOnly = false;
  syncProductControls();
  renderProductsPage();
}

function syncProductControls() {
  const search = $("#searchInput");
  const category = $("#categorySelect");
  const price = $("#priceRange");
  const sort = $("#sortSelect");
  const priceValue = $("#priceValue");
  const wishlistOnlyBtn = $("#wishlistOnlyBtn");

  if (search) search.value = state.search;
  if (category) category.value = state.category;
  if (price) price.value = state.maxPrice;
  if (sort) sort.value = state.sort;
  if (priceValue) priceValue.textContent = formatPrice(state.maxPrice);
  if (wishlistOnlyBtn) {
    wishlistOnlyBtn.textContent = state.wishlistOnly ? "Showing wishlist" : "Wishlist only";
    wishlistOnlyBtn.classList.toggle("btn-primary", state.wishlistOnly);
    wishlistOnlyBtn.classList.toggle("btn-soft", !state.wishlistOnly);
  }
}

function initProductsPage() {
  const page = document.body.dataset.page;
  if (page !== "products") return;

  const categorySelect = $("#categorySelect");
  const searchInput = $("#searchInput");
  const priceRange = $("#priceRange");
  const sortSelect = $("#sortSelect");
  const clearBtn = $("#clearFiltersBtn");
  const wishlistOnlyBtn = $("#wishlistOnlyBtn");

  if (categorySelect) {
    categorySelect.innerHTML = [`<option value="All">All</option>`].concat(
      CATEGORIES.map(category => `<option value="${category.name}">${category.name}</option>`)
    ).join("");
  }

  syncProductControls();
  renderProductsPage();

  if (searchInput) searchInput.addEventListener("input", e => { state.search = e.target.value; renderProductsPage(); });
  if (categorySelect) categorySelect.addEventListener("change", e => { state.category = e.target.value; state.wishlistOnly = false; syncProductControls(); renderProductsPage(); });
  if (priceRange) priceRange.addEventListener("input", e => { state.maxPrice = Number(e.target.value); syncProductControls(); renderProductsPage(); });
  if (sortSelect) sortSelect.addEventListener("change", e => { state.sort = e.target.value; renderProductsPage(); });
  if (clearBtn) clearBtn.addEventListener("click", resetFilters);
  if (wishlistOnlyBtn) wishlistOnlyBtn.addEventListener("click", () => { state.wishlistOnly = !state.wishlistOnly; syncProductControls(); renderProductsPage(); });
}

function renderDetailPage() {
  const root = $("#detailRoot");
  if (!root) return;

  const product = PRODUCTS.find(item => item.id === state.selectedId) || PRODUCTS[0];
  const inWishlist = state.wishlist.has(product.id);

  root.innerHTML = `
    <div class="detail-grid">
      <div class="detail-image"><img src="${product.image}" alt="${product.name}"></div>
      <div>
        <span class="badge-soft">${product.badge}</span>
        <h1 class="detail-title">${product.name}</h1>
        <p class="muted">${product.category}</p>
        <p class="detail-copy">${product.longDescription}</p>
        <div class="price-row">
          <p class="detail-price">${formatPrice(product.price)}</p>
          <span class="old-price">${formatPrice(product.oldPrice)}</span>
          <span class="discount">Save ${discountPercentage(product.price, product.oldPrice)}%</span>
        </div>
        <div class="detail-highlights">
          ${product.highlights.map(item => `<div class="detail-feature">✓ ${item}</div>`).join("")}
        </div>
        <div class="inline-actions">
          <a class="btn btn-success" target="_blank" rel="noopener" href="${whatsappLink(product)}">WhatsApp inquiry</a>
          <button class="btn ${inWishlist ? "btn-primary" : "btn-soft"}" id="detailWishlistBtn">${inWishlist ? "Saved to wishlist" : "Add to wishlist"}</button>
          <a class="btn btn-soft" href="products.html?category=${encodeURIComponent(product.category)}">More ${product.category}</a>
        </div>
      </div>
    </div>
  `;

  const wishlistBtn = $("#detailWishlistBtn");
  if (wishlistBtn) wishlistBtn.addEventListener("click", () => toggleWishlist(product.id));
}

function renderRelatedProducts() {
  const grid = $("#relatedProducts");
  if (!grid) return;
  const current = PRODUCTS.find(item => item.id === state.selectedId) || PRODUCTS[0];
  const list = PRODUCTS.filter(item => item.category === current.category && item.id !== current.id).slice(0, 4);
  grid.innerHTML = list.map(productCard).join("");
  wireWishlistButtons(grid);
}

function initHomePage() {
  renderCategoryCards("#homeCategories");
  renderFeaturedProducts();
}

function initCategoriesPage() {
  renderCategoryCards("#categoryGrid");
}

function initDetailsPage() {
  renderDetailPage();
  renderRelatedProducts();
}

function initShared() {
  applyQueryStateFromUrl();
  setActiveNav();
  initNav();
  attachCatalogButton();
  updateWishlistUI();
}

window.addEventListener("DOMContentLoaded", () => {
  initShared();
  initHomePage();
  initCategoriesPage();
  initProductsPage();
  initDetailsPage();
});
