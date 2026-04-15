const WHATSAPP_NUMBER = "918308651469";

const products = [
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
    image: "https://images.unsplash.com/photo-1542751695-046658ec66b8?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 2,
    name: "Mehfil Floral Harmonium",
    category: "Harmonium",
    price: 22999,
    oldPrice: 25999,
    badge: "Premium",
    description: "Decorative harmonium styling with a vibrant premium visual presentation.",
    longDescription: "A visually rich harmonium option for customers looking for a musical instrument with elegant decorative appeal. Great for showroom display, gifts, and devotional performance setups.",
    highlights: ["Premium visual appeal", "Elegant floral setup", "Showroom-ready presentation"],
    image: "https://images.unsplash.com/photo-1643287928605-b8e1190615fa?auto=format&fit=crop&w=1200&q=80"
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
    image: "https://images.unsplash.com/photo-1771718968046-6b8cee870812?auto=format&fit=crop&w=1200&q=80"
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
    image: "https://images.unsplash.com/photo-1771718968046-6b8cee870812?auto=format&fit=crop&w=1200&q=80"
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
    image: "https://images.unsplash.com/photo-1755529523637-645b0b5c9aba?auto=format&fit=crop&w=1200&q=80"
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
    image: "https://images.unsplash.com/photo-1755529523637-645b0b5c9aba?auto=format&fit=crop&w=1200&q=80"
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
    image: "https://images.unsplash.com/photo-1750565489375-bd1085122369?auto=format&fit=crop&w=1200&q=80"
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
    image: "https://images.unsplash.com/photo-1750565489375-bd1085122369?auto=format&fit=crop&w=1200&q=80"
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
    image: "https://images.unsplash.com/photo-1716505681151-468d09e6352d?auto=format&fit=crop&w=1200&q=80"
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
    image: "https://images.unsplash.com/photo-1716505681151-468d09e6352d?auto=format&fit=crop&w=1200&q=80"
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
    image: "https://images.unsplash.com/photo-1629327896333-7ecec1515ae5?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 12,
    name: "Studio Podcast Microphone",
    category: "Musical Accessories",
    price: 3999,
    oldPrice: 4699,
    badge: "Trending",
    description: "Studio-style microphone accessory for recording, vocals, and content creators.",
    longDescription: "A polished audio accessory for users who want a professional-looking microphone for singing practice, podcasting, or studio display setups.",
    highlights: ["Studio recording look", "Premium accessory option", "Good for creators and vocals"],
    image: "https://images.unsplash.com/photo-1627667049482-dd134b1f6366?auto=format&fit=crop&w=1200&q=80"
  }
];

const categories = ["All", "Harmonium", "Tabla", "Keyboard", "Guitar", "Dholak", "Musical Accessories"];

const state = {
  search: "",
  category: "All",
  maxPrice: 50000,
  sort: "featured",
  selectedId: 1,
  wishlistOnly: false,
  wishlist: new Set()
};

const categoryPills = document.getElementById("categoryPills");
const productGrid = document.getElementById("productGrid");
const resultsText = document.getElementById("resultsText");
const wishlistCount = document.getElementById("wishlistCount");
const wishlistText = document.getElementById("wishlistText");
const detailContent = document.getElementById("detailContent");
const wishlistOnlyBtn = document.getElementById("wishlistOnlyBtn");

const searchDesktop = document.getElementById("searchDesktop");
const categoryDesktop = document.getElementById("categoryDesktop");
const priceDesktop = document.getElementById("priceDesktop");
const priceLabelDesktop = document.getElementById("priceLabelDesktop");
const sortDesktop = document.getElementById("sortDesktop");

const searchMobile = document.getElementById("searchMobile");
const categoryMobile = document.getElementById("categoryMobile");
const priceMobile = document.getElementById("priceMobile");
const priceLabelMobile = document.getElementById("priceLabelMobile");
const sortMobile = document.getElementById("sortMobile");

const catalogToast = new bootstrap.Toast(document.getElementById("catalogToast"));

document.getElementById("catalogOnlyBtn").addEventListener("click", () => catalogToast.show());
document.getElementById("wishlistNavBtn").addEventListener("click", () => {
  state.wishlistOnly = !state.wishlistOnly;
  syncInputs();
  renderProducts();
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("clearFiltersDesktop").addEventListener("click", resetFilters);
document.getElementById("clearFiltersMobile").addEventListener("click", resetFilters);
document.getElementById("applyMobileFilters").addEventListener("click", renderProducts);

wishlistOnlyBtn.addEventListener("click", () => {
  state.wishlistOnly = !state.wishlistOnly;
  syncInputs();
  renderProducts();
});

function formatPrice(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(value);
}

function discountPercentage(price, oldPrice) {
  return Math.round(((oldPrice - price) / oldPrice) * 100);
}

function buildWhatsAppLink(product) {
  const message = `Hello Shri Samarth Krupa Musical, I am interested in "${product.name}" (${formatPrice(product.price)}). Please share more details.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function syncInputs() {
  searchDesktop.value = state.search;
  searchMobile.value = state.search;
  categoryDesktop.value = state.category;
  categoryMobile.value = state.category;
  priceDesktop.value = state.maxPrice;
  priceMobile.value = state.maxPrice;
  sortDesktop.value = state.sort;
  sortMobile.value = state.sort;
  priceLabelDesktop.textContent = formatPrice(state.maxPrice);
  priceLabelMobile.textContent = formatPrice(state.maxPrice);
  wishlistCount.textContent = state.wishlist.size;
  wishlistText.textContent = state.wishlist.size;

  wishlistOnlyBtn.classList.toggle("btn-brand", state.wishlistOnly);
  wishlistOnlyBtn.classList.toggle("btn-soft", !state.wishlistOnly);
  wishlistOnlyBtn.innerHTML = state.wishlistOnly
    ? '<i class="bi bi-heart-fill me-2"></i>Showing wishlist'
    : '<i class="bi bi-heart me-2"></i>Wishlist only';
}

function renderCategoryOptions() {
  const options = categories.map(item => `<option value="${item}">${item}</option>`).join("");
  categoryDesktop.innerHTML = options;
  categoryMobile.innerHTML = options;
}

function renderCategoryPills() {
  categoryPills.innerHTML = categories.slice(1).map(category => `
    <div class="col-6 col-md-4 col-xl-2">
      <button class="category-pill ${state.category === category ? "active" : ""}" data-category="${category}">
        <i class="bi bi-vinyl"></i>
        <span>${category}</span>
      </button>
    </div>
  `).join("");

  categoryPills.querySelectorAll("[data-category]").forEach(button => {
    button.addEventListener("click", () => {
      state.category = button.dataset.category;
      state.wishlistOnly = false;
      syncInputs();
      renderCategoryPills();
      renderProducts();
      document.getElementById("products").scrollIntoView({ behavior: "smooth" });
    });
  });
}

function getFilteredProducts() {
  const query = state.search.trim().toLowerCase();

  const filtered = products.filter(product => {
    const haystack = `${product.name} ${product.category} ${product.description} ${product.longDescription}`.toLowerCase();
    const matchesSearch = !query || haystack.includes(query);
    const matchesCategory = state.category === "All" || product.category === state.category;
    const matchesPrice = product.price <= state.maxPrice;
    const matchesWishlist = !state.wishlistOnly || state.wishlist.has(product.id);
    return matchesSearch && matchesCategory && matchesPrice && matchesWishlist;
  });

  switch (state.sort) {
    case "priceLowHigh":
      filtered.sort((a, b) => a.price - b.price);
      break;
    case "priceHighLow":
      filtered.sort((a, b) => b.price - a.price);
      break;
    case "nameAZ":
      filtered.sort((a, b) => a.name.localeCompare(b.name));
      break;
    default:
      filtered.sort((a, b) => a.id - b.id);
  }

  return filtered;
}

function renderProducts() {
  const filtered = getFilteredProducts();
  resultsText.textContent = `Showing ${filtered.length} product${filtered.length === 1 ? "" : "s"}`;

  if (!filtered.length) {
    productGrid.innerHTML = `
      <div class="col-12">
        <div class="empty-state">
          <h5 class="fw-bold mb-2">No products found</h5>
          <p class="mb-3">Try changing your search, category, or price filter.</p>
          <button class="btn btn-brand" onclick="resetFilters()">Reset filters</button>
        </div>
      </div>`;
    return;
  }

  productGrid.innerHTML = filtered.map(product => `
    <div class="col-sm-6 col-xl-4">
      <article class="product-card" role="button" tabindex="0" data-product-id="${product.id}">
        <div class="product-media">
          <img src="${product.image}" alt="${product.name}">
          <button class="wishlist-btn ${state.wishlist.has(product.id) ? "active" : ""}" data-wishlist-id="${product.id}" aria-label="Add to wishlist">
            <i class="bi ${state.wishlist.has(product.id) ? "bi-heart-fill" : "bi-heart"}"></i>
          </button>
        </div>
        <div class="product-body">
          <div class="d-flex justify-content-between align-items-start gap-2 mb-2">
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
          <div class="d-grid gap-2">
            <button class="btn btn-soft" data-view-id="${product.id}"><i class="bi bi-eye me-2"></i>View details</button>
            <a class="btn btn-brand" href="${buildWhatsAppLink(product)}" target="_blank" rel="noopener"><i class="bi bi-whatsapp me-2"></i>WhatsApp inquiry</a>
          </div>
        </div>
      </article>
    </div>
  `).join("");

  productGrid.querySelectorAll("[data-view-id], [data-product-id]").forEach(card => {
    card.addEventListener("click", event => {
      if (event.target.closest("[data-wishlist-id]")) return;
      const id = Number(card.dataset.viewId || card.dataset.productId);
      showProductDetails(id);
    });
  });

  productGrid.querySelectorAll("[data-wishlist-id]").forEach(button => {
    button.addEventListener("click", event => {
      event.stopPropagation();
      toggleWishlist(Number(button.dataset.wishlistId));
    });
  });
}

function showProductDetails(id) {
  state.selectedId = id;
  const product = products.find(item => item.id === id) || products[0];

  detailContent.innerHTML = `
    <div class="col-lg-5">
      <div class="detail-image h-100">
        <img src="${product.image}" alt="${product.name}">
      </div>
    </div>
    <div class="col-lg-7">
      <div class="d-flex flex-wrap align-items-center gap-2 mb-3">
        <span class="badge-soft">${product.badge}</span>
        <span class="detail-meta">${product.category}</span>
      </div>
      <h3 class="fw-bold display-6 mb-3">${product.name}</h3>
      <p class="detail-meta fs-5 mb-3">${product.longDescription}</p>
      <div class="d-flex flex-wrap align-items-center gap-3 mb-4">
        <div class="detail-price">${formatPrice(product.price)}</div>
        <div class="old-price fs-5">${formatPrice(product.oldPrice)}</div>
        <div class="discount">Save ${discountPercentage(product.price, product.oldPrice)}%</div>
      </div>
      <div class="row g-3 mb-4">
        ${product.highlights.map(item => `<div class="col-md-6"><div class="detail-feature"><i class="bi bi-check2-circle text-success me-2"></i>${item}</div></div>`).join("")}
      </div>
      <div class="d-flex flex-wrap gap-3">
        <a class="btn btn-success btn-lg rounded-4 fw-bold" target="_blank" rel="noopener" href="${buildWhatsAppLink(product)}"><i class="bi bi-whatsapp me-2"></i>Inquire on WhatsApp</a>
        <button class="btn ${state.wishlist.has(product.id) ? "btn-brand" : "btn-soft"} btn-lg rounded-4" id="detailWishlistBtn">
          <i class="bi ${state.wishlist.has(product.id) ? "bi-heart-fill" : "bi-heart"} me-2"></i>${state.wishlist.has(product.id) ? "Saved to wishlist" : "Add to wishlist"}
        </button>
      </div>
    </div>
  `;

  document.getElementById("detailWishlistBtn").addEventListener("click", () => toggleWishlist(product.id));
  document.getElementById("details").scrollIntoView({ behavior: "smooth", block: "start" });
}

function toggleWishlist(id) {
  if (state.wishlist.has(id)) {
    state.wishlist.delete(id);
  } else {
    state.wishlist.add(id);
  }

  syncInputs();
  renderProducts();
  showProductDetails(state.selectedId);
}

function updateState(partial) {
  Object.assign(state, partial);
  syncInputs();
  renderCategoryPills();
  renderProducts();
}

function resetFilters() {
  updateState({
    search: "",
    category: "All",
    maxPrice: 50000,
    sort: "featured",
    wishlistOnly: false
  });
}

window.resetFilters = resetFilters;

searchDesktop.addEventListener("input", event => updateState({ search: event.target.value }));
searchMobile.addEventListener("input", event => updateState({ search: event.target.value }));
categoryDesktop.addEventListener("change", event => updateState({ category: event.target.value, wishlistOnly: false }));
categoryMobile.addEventListener("change", event => updateState({ category: event.target.value, wishlistOnly: false }));
priceDesktop.addEventListener("input", event => updateState({ maxPrice: Number(event.target.value) }));
priceMobile.addEventListener("input", event => updateState({ maxPrice: Number(event.target.value) }));
sortDesktop.addEventListener("change", event => updateState({ sort: event.target.value }));
sortMobile.addEventListener("change", event => updateState({ sort: event.target.value }));

function init() {
  renderCategoryOptions();
  renderCategoryPills();
  syncInputs();
  renderProducts();
  showProductDetails(state.selectedId);
}

init();
