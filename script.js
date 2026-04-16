/*
  Shri Samarth Krupa Musical - Shared storefront + admin data script
  Note: In a static website, the browser cannot directly overwrite script.js on your server.
  This admin page updates data in memory and lets you DOWNLOAD a new script.js file.
  Replace the old script.js in your project with the downloaded one.
*/

window.SITE_DATA = {
  settings: {
    storeName: "Shri Samarth Krupa Musical & Electronics",
    shortName: "Shri Samarth Krupa Musical",
    whatsappNumber: "918308651469",
    storeAddress: "Main Road, Raver, District Jalgaon (MH), Pincode 425508",
    phoneOne: "9359776263",
    phoneTwo: "9405724793",
    instagramOne: "jayesh_sugandhiwale",
    instagramTwo: "skmusical2021",
    amazonLink: "",
    flipkartLink: "",
    meeshoLink: "",
    storeTagline: "All kinds of Musical Instruments • Wholesaler & Retailer • Sales and Service"
  },
  categories: [
    { id: 1, name: "Harmonium", icon: "🎹", copy: "Traditional reed instruments for bhajan and classical music." },
    { id: 2, name: "Tabla", icon: "🥁", copy: "Classical hand percussion for practice, stage, and teaching." },
    { id: 3, name: "Keyboard", icon: "⌨️", copy: "Portable and performance-style keyboards for all levels." },
    { id: 4, name: "Guitar", icon: "🎸", copy: "Acoustic guitars for learners, hobby players, and performers." },
    { id: 5, name: "Dholak", icon: "🪘", copy: "Rhythmic folk instruments for festive and devotional settings." },
    { id: 6, name: "Musical Accessories", icon: "🎤", copy: "Useful add-ons like microphones, stands, and support gear." }
  ],
  products: [
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
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80",
      images: ["https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80"],
      featured: true,
      visible: true,
      inStock: true,
      order: 1
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
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80",
      images: ["https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80"],
      featured: false,
      visible: true,
      inStock: true,
      order: 2
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
      image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80",
      images: ["https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80"],
      featured: true,
      visible: true,
      inStock: true,
      order: 3
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
      image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80",
      images: ["https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80"],
      featured: false,
      visible: true,
      inStock: true,
      order: 4
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
      image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&w=1200&q=80",
      images: ["https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&w=1200&q=80"],
      featured: false,
      visible: true,
      inStock: true,
      order: 5
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
      image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&w=1200&q=80",
      images: ["https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&w=1200&q=80"],
      featured: false,
      visible: true,
      inStock: true,
      order: 6
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
      image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1200&q=80",
      images: ["https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1200&q=80"],
      featured: true,
      visible: true,
      inStock: true,
      order: 7
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
      image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1200&q=80",
      images: ["https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1200&q=80"],
      featured: false,
      visible: true,
      inStock: true,
      order: 8
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
      image: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?auto=format&fit=crop&w=1200&q=80",
      images: ["https://images.unsplash.com/photo-1571330735066-03aaa9429d89?auto=format&fit=crop&w=1200&q=80"],
      featured: false,
      visible: true,
      inStock: true,
      order: 9
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
      image: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?auto=format&fit=crop&w=1200&q=80",
      images: ["https://images.unsplash.com/photo-1571330735066-03aaa9429d89?auto=format&fit=crop&w=1200&q=80"],
      featured: false,
      visible: true,
      inStock: true,
      order: 10
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
      image: "https://images.unsplash.com/photo-1516280030429-27679b3dc9cf?auto=format&fit=crop&w=1200&q=80",
      images: ["https://images.unsplash.com/photo-1516280030429-27679b3dc9cf?auto=format&fit=crop&w=1200&q=80"],
      featured: false,
      visible: true,
      inStock: true,
      order: 11
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
      image: "https://images.unsplash.com/photo-1516280030429-27679b3dc9cf?auto=format&fit=crop&w=1200&q=80",
      images: ["https://images.unsplash.com/photo-1516280030429-27679b3dc9cf?auto=format&fit=crop&w=1200&q=80"],
      featured: false,
      visible: true,
      inStock: true,
      order: 12
    }
  ]
};

(function () {
  const data = window.SITE_DATA;

  function qs(selector, root = document) { return root.querySelector(selector); }
  function qsa(selector, root = document) { return Array.from(root.querySelectorAll(selector)); }
  function formatPrice(value) {
    return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(Number(value || 0));
  }
  function discountPercentage(price, oldPrice) {
    price = Number(price || 0);
    oldPrice = Number(oldPrice || 0);
    if (!oldPrice || oldPrice <= price) return 0;
    return Math.round(((oldPrice - price) / oldPrice) * 100);
  }
  function safeText(value) {
    return String(value || "").replace(/[&<>"']/g, function (m) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[m];
    });
  }
  function whatsappLink(product) {
    const n = data.settings.whatsappNumber || "918308651469";
    const msg = `Hello ${data.settings.shortName || data.settings.storeName}, I am interested in "${product.name}" (${formatPrice(product.price)}). Please share more details.`;
    return `https://wa.me/${n}?text=${encodeURIComponent(msg)}`;
  }
  function getVisibleProducts() {
    return data.products.filter(p => p.visible !== false).slice().sort((a,b) => (a.order || 9999) - (b.order || 9999) || a.id - b.id);
  }
  function getCategoryCounts() {
    const counts = {};
    getVisibleProducts().forEach(p => { counts[p.category] = (counts[p.category] || 0) + 1; });
    return counts;
  }
  function updateNav() {
    const page = document.body.dataset.page;
    qsa(".nav-links a").forEach(link => {
      if (link.dataset.page === page) link.classList.add("active");
    });
    const toggle = qs('.nav-toggle');
    const menu = qs('.nav-menu');
    if (toggle && menu) toggle.addEventListener('click', () => menu.classList.toggle('open'));
  }
  function updateSettingsUI() {
    qsa('[data-store-name]').forEach(el => el.textContent = data.settings.shortName || data.settings.storeName);
    qsa('[data-store-fullname]').forEach(el => el.textContent = data.settings.storeName);
    qsa('[data-address]').forEach(el => el.textContent = data.settings.storeAddress || '');
    qsa('[data-phone-one]').forEach(el => el.textContent = data.settings.phoneOne || '');
    qsa('[data-phone-two]').forEach(el => el.textContent = data.settings.phoneTwo || '');
    qsa('[data-instagram-one]').forEach(el => el.textContent = '@' + (data.settings.instagramOne || '')); 
    qsa('[data-instagram-two]').forEach(el => el.textContent = '@' + (data.settings.instagramTwo || '')); 
    qsa('[data-tagline]').forEach(el => el.textContent = data.settings.storeTagline || '');
    qsa('[data-whatsapp-link]').forEach(el => {
      el.setAttribute('href', `https://wa.me/${data.settings.whatsappNumber}?text=${encodeURIComponent('Hello ' + (data.settings.shortName || data.settings.storeName) + ', I want to know more about your products.')}`);
    });
  }
  function categoryCard(cat, count) {
    return `<a class="category-card" href="products.html?category=${encodeURIComponent(cat.name)}"><div class="category-icon">${safeText(cat.icon)}</div><h3>${safeText(cat.name)}</h3><p>${safeText(cat.copy)}</p><div class="category-meta"><span>${count || 0} products</span><span>View catalog →</span></div></a>`;
  }
  function productCard(product) {
    const discount = discountPercentage(product.price, product.oldPrice);
    return `<article class="product-card"><div class="product-media"><img src="${safeText(product.image)}" alt="${safeText(product.name)}" loading="lazy"></div><div class="product-body"><div class="product-top"><span class="badge-soft">${safeText(product.badge || 'Product')}</span><span class="product-category">${safeText(product.category)}</span></div><h3 class="product-title">${safeText(product.name)}</h3><p class="product-desc">${safeText(product.description)}</p><div class="price-row"><span class="price">${formatPrice(product.price)}</span><span class="old-price">${formatPrice(product.oldPrice)}</span>${discount ? `<span class="discount">${discount}% off</span>` : ''}</div><div class="card-actions"><a class="btn btn-soft" href="details.html?id=${product.id}">View details</a><a class="btn btn-primary" target="_blank" rel="noopener" href="${whatsappLink(product)}">WhatsApp inquiry</a></div></div></article>`;
  }
  function renderHome() {
    const featuredRoot = qs('#featuredProducts');
    const categoriesRoot = qs('#homeCategories');
    if (featuredRoot) {
      const list = getVisibleProducts().filter(p => p.featured).slice(0, 4);
      featuredRoot.innerHTML = list.map(productCard).join('');
    }
    if (categoriesRoot) {
      const counts = getCategoryCounts();
      categoriesRoot.innerHTML = data.categories.map(cat => categoryCard(cat, counts[cat.name] || 0)).join('');
    }
  }
  function renderCategories() {
    const root = qs('#categoryGrid');
    if (!root) return;
    const counts = getCategoryCounts();
    root.innerHTML = data.categories.map(cat => categoryCard(cat, counts[cat.name] || 0)).join('');
  }
  function renderProducts() {
    const root = qs('#productGrid');
    if (!root) return;
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category') || 'All';
    const searchInput = qs('#searchInput');
    const categorySelect = qs('#categorySelect');
    const priceRange = qs('#priceRange');
    const sortSelect = qs('#sortSelect');
    const priceValue = qs('#priceValue');
    const resultsText = qs('#resultsText');
    const wishlistText = qs('#wishlistText');

    if (categorySelect) {
      categorySelect.innerHTML = '<option value="All">All</option>' + data.categories.map(c => `<option value="${safeText(c.name)}">${safeText(c.name)}</option>`).join('');
      categorySelect.value = category;
    }

    function draw() {
      let list = getVisibleProducts();
      const q = (searchInput?.value || '').trim().toLowerCase();
      const cat = categorySelect?.value || 'All';
      const max = Number(priceRange?.value || 9999999);
      const sort = sortSelect?.value || 'featured';
      if (priceValue) priceValue.textContent = formatPrice(max);

      list = list.filter(p => {
        const searchBlob = [p.name, p.category, p.description, p.longDescription].join(' ').toLowerCase();
        return (!q || searchBlob.includes(q)) && (cat === 'All' || p.category === cat) && Number(p.price) <= max;
      });

      if (sort === 'priceLowHigh') list.sort((a,b) => a.price - b.price);
      else if (sort === 'priceHighLow') list.sort((a,b) => b.price - a.price);
      else if (sort === 'nameAZ') list.sort((a,b) => a.name.localeCompare(b.name));

      if (resultsText) resultsText.textContent = `Showing ${list.length} product${list.length === 1 ? '' : 's'}`;
      if (wishlistText) wishlistText.textContent = '0';
      root.innerHTML = list.length ? list.map(productCard).join('') : '<div class="empty-state"><h3>No products found</h3><p>Try changing search, category, or price filters.</p></div>';
    }

    if (params.get('category') && categorySelect) categorySelect.value = params.get('category');
    [searchInput, categorySelect, priceRange, sortSelect].forEach(el => {
      if (!el) return;
      el.addEventListener('input', draw);
      el.addEventListener('change', draw);
    });
    const clearBtn = qs('#clearFiltersBtn');
    if (clearBtn) clearBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      if (categorySelect) categorySelect.value = 'All';
      if (priceRange) priceRange.value = priceRange.max;
      if (sortSelect) sortSelect.value = 'featured';
      draw();
    });
    draw();
  }
  function renderDetails() {
    const root = qs('#detailRoot');
    if (!root) return;
    const params = new URLSearchParams(window.location.search);
    const id = Number(params.get('id') || 1);
    const product = getVisibleProducts().find(p => p.id === id) || getVisibleProducts()[0];
    if (!product) return;
    const images = (product.images && product.images.length ? product.images : [product.image]).filter(Boolean);
    root.innerHTML = `<div class="detail-grid"><div><div class="detail-image slider"><img id="detailMainImage" src="${safeText(images[0])}" alt="${safeText(product.name)}"><div class="slider-dots">${images.map((_,i)=>`<button class="slider-dot ${i===0?'active':''}" data-slide="${i}"></button>`).join('')}</div></div></div><div><span class="badge-soft">${safeText(product.badge || 'Product')}</span><h1 class="detail-title">${safeText(product.name)}</h1><p class="muted">${safeText(product.category)}</p><p class="detail-copy">${safeText(product.longDescription)}</p><div class="price-row"><p class="detail-price">${formatPrice(product.price)}</p><span class="old-price">${formatPrice(product.oldPrice)}</span>${discountPercentage(product.price, product.oldPrice) ? `<span class="discount">Save ${discountPercentage(product.price, product.oldPrice)}%</span>` : ''}</div><div class="detail-highlights">${(product.highlights||[]).map(h => `<div class="detail-feature">✓ ${safeText(h)}</div>`).join('')}</div><div class="inline-actions"><a class="btn btn-success" target="_blank" rel="noopener" href="${whatsappLink(product)}">WhatsApp inquiry</a><a class="btn btn-soft" href="products.html?category=${encodeURIComponent(product.category)}">More ${safeText(product.category)}</a></div></div></div>`;
    const mainImage = qs('#detailMainImage');
    const dots = qsa('.slider-dot', root);
    let current = 0;
    function show(idx) {
      current = idx;
      mainImage.src = images[idx];
      dots.forEach((d,i)=>d.classList.toggle('active', i===idx));
    }
    dots.forEach(d => d.addEventListener('click', () => show(Number(d.dataset.slide))));
    if (images.length > 1) {
      setInterval(() => show((current + 1) % images.length), 3000);
    }

    const related = qs('#relatedProducts');
    if (related) {
      related.innerHTML = getVisibleProducts().filter(p => p.category === product.category && p.id !== product.id).slice(0,4).map(productCard).join('');
    }
  }
  function renderContact() {
    // Settings are already injected by updateSettingsUI
  }

  // Admin page
  async function adminDownloadScript() {
    let source = '';
    try {
      const res = await fetch('script.js', { cache: 'no-store' });
      source = await res.text();
    } catch (e) {
      source = '';
    }
    const replacement = 'window.SITE_DATA = ' + JSON.stringify(data, null, 2) + ';';
    if (source && /window\.SITE_DATA\s*=\s*\{[\s\S]*?\};/.test(source)) {
      source = source.replace(/window\.SITE_DATA\s*=\s*\{[\s\S]*?\};/, replacement);
    } else {
      source = replacement + '

' + source;
    }
    const blob = new Blob([source], { type: 'application/javascript' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'script.js';
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  }
  function adminInit() {
    const adminRoot = qs('#adminPage');
    if (!adminRoot) return;
    const USER = 'Pranit@01';
    const PASS = 'Pranit@01';
    const login = qs('#loginBox');
    const panel = qs('#adminPanel');
    const loginBtn = qs('#adminLoginBtn');
    const loginUser = qs('#adminUser');
    const loginPass = qs('#adminPass');
    const loginErr = qs('#loginErr');
    const table = qs('#adminProductsTable');
    const productForm = qs('#adminProductForm');
    const productId = qs('#productId');
    const categorySelect = qs('#adminCategory');
    const categoriesList = qs('#adminCategoriesList');
    const categoryForm = qs('#adminCategoryForm');
    const categoryId = qs('#categoryId');
    const settingsForm = qs('#adminSettingsForm');

    function populateAdminCategoryOptions() {
      categorySelect.innerHTML = data.categories.map(c => `<option value="${safeText(c.name)}">${safeText(c.name)}</option>`).join('');
    }
    function renderAdminProducts() {
      table.innerHTML = data.products.slice().sort((a,b)=>(a.order||9999)-(b.order||9999)||a.id-b.id).map(p => `
        <tr>
          <td><img src="${safeText(p.image)}" alt="${safeText(p.name)}" class="mini-img"></td>
          <td><strong>${safeText(p.name)}</strong><br><span class="muted">${safeText(p.category)}</span></td>
          <td>${formatPrice(p.price)}</td>
          <td>${p.visible !== false ? 'Shown' : 'Hidden'}</td>
          <td>${p.featured ? 'Yes' : 'No'}</td>
          <td class="actions-row"><button type="button" class="btn-mini" data-edit="${p.id}">Edit</button><button type="button" class="btn-mini" data-del="${p.id}">Delete</button></td>
        </tr>`).join('');
      qsa('[data-edit]', table).forEach(btn => btn.addEventListener('click', () => loadProduct(Number(btn.dataset.edit))));
      qsa('[data-del]', table).forEach(btn => btn.addEventListener('click', () => {
        data.products = data.products.filter(p => p.id !== Number(btn.dataset.del));
        renderAdminProducts();
        renderAdminCategories();
      }));
    }
    function renderAdminCategories() {
      categoriesList.innerHTML = data.categories.map(c => `<div class="list-item"><div><h4>${safeText(c.icon)} ${safeText(c.name)}</h4><p>${safeText(c.copy)}</p></div><div class="actions-row"><button type="button" class="btn-mini" data-cedit="${c.id}">Edit</button><button type="button" class="btn-mini" data-cdel="${c.id}">Delete</button></div></div>`).join('');
      qsa('[data-cedit]', categoriesList).forEach(btn => btn.addEventListener('click', () => {
        const cat = data.categories.find(c => c.id === Number(btn.dataset.cedit));
        categoryId.value = cat.id;
        qs('#categoryName').value = cat.name;
        qs('#categoryIcon').value = cat.icon;
        qs('#categoryCopy').value = cat.copy || '';
      }));
      qsa('[data-cdel]', categoriesList).forEach(btn => btn.addEventListener('click', () => {
        const id = Number(btn.dataset.cdel);
        const cat = data.categories.find(c => c.id === id);
        if (data.products.some(p => p.category === cat.name)) { alert('This category is used by products.'); return; }
        data.categories = data.categories.filter(c => c.id !== id);
        renderAdminCategories();
        populateAdminCategoryOptions();
      }));
    }
    function loadProduct(id) {
      const p = data.products.find(x => x.id === id);
      if (!p) return;
      productId.value = p.id;
      qs('#adminName').value = p.name || '';
      qs('#adminCategory').value = p.category || '';
      qs('#adminPrice').value = p.price || 0;
      qs('#adminOldPrice').value = p.oldPrice || 0;
      qs('#adminBadge').value = p.badge || '';
      qs('#adminOrder').value = p.order || '';
      qs('#adminDesc').value = p.description || '';
      qs('#adminLongDesc').value = p.longDescription || '';
      qs('#adminHighlights').value = (p.highlights || []).join(' | ');
      qs('#adminImage').value = p.image || '';
      qs('#adminImages').value = (p.images || []).join('\n');
      qs('#adminFeatured').checked = !!p.featured;
      qs('#adminVisible').checked = p.visible !== false;
      qs('#adminStock').checked = p.inStock !== false;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    function fillSettings() {
      qs('#setStoreName').value = data.settings.storeName || '';
      qs('#setShortName').value = data.settings.shortName || '';
      qs('#setWhatsapp').value = data.settings.whatsappNumber || '';
      qs('#setAddress').value = data.settings.storeAddress || '';
      qs('#setPhone1').value = data.settings.phoneOne || '';
      qs('#setPhone2').value = data.settings.phoneTwo || '';
      qs('#setInstagram1').value = data.settings.instagramOne || '';
      qs('#setInstagram2').value = data.settings.instagramTwo || '';
      qs('#setAmazon').value = data.settings.amazonLink || '';
      qs('#setFlipkart').value = data.settings.flipkartLink || '';
      qs('#setMeesho').value = data.settings.meeshoLink || '';
      qs('#setTagline').value = data.settings.storeTagline || '';
    }

    loginBtn.addEventListener('click', () => {
      if (loginUser.value.trim() === USER && loginPass.value.trim() === PASS) {
        login.classList.add('hidden');
        panel.classList.remove('hidden');
        populateAdminCategoryOptions();
        renderAdminProducts();
        renderAdminCategories();
        fillSettings();
      } else {
        loginErr.textContent = 'Invalid username or password';
      }
    });

    productForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const id = Number(productId.value || 0);
      const record = {
        id: id || (data.products.length ? Math.max(...data.products.map(p => p.id)) + 1 : 1),
        name: qs('#adminName').value.trim(),
        category: qs('#adminCategory').value,
        price: Number(qs('#adminPrice').value || 0),
        oldPrice: Number(qs('#adminOldPrice').value || 0),
        badge: qs('#adminBadge').value.trim(),
        order: Number(qs('#adminOrder').value || data.products.length + 1),
        description: qs('#adminDesc').value.trim(),
        longDescription: qs('#adminLongDesc').value.trim(),
        highlights: qs('#adminHighlights').value.split('|').map(v => v.trim()).filter(Boolean),
        image: qs('#adminImage').value.trim(),
        images: qs('#adminImages').value.split('\n').map(v => v.trim()).filter(Boolean),
        featured: qs('#adminFeatured').checked,
        visible: qs('#adminVisible').checked,
        inStock: qs('#adminStock').checked
      };
      if (!record.images.length && record.image) record.images = [record.image];
      if (!record.image && record.images.length) record.image = record.images[0];
      if (id) data.products = data.products.map(p => p.id === id ? record : p);
      else data.products.push(record);
      productForm.reset();
      productId.value = '';
      renderAdminProducts();
      adminDownloadScript();
      alert('Product saved. Downloaded script.js. Replace your website script.js with the downloaded file.');
    });

    categoryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const id = Number(categoryId.value || 0);
      const rec = {
        id: id || (data.categories.length ? Math.max(...data.categories.map(c => c.id)) + 1 : 1),
        name: qs('#categoryName').value.trim(),
        icon: qs('#categoryIcon').value.trim(),
        copy: qs('#categoryCopy').value.trim()
      };
      if (id) {
        const old = data.categories.find(c => c.id === id);
        data.products.forEach(p => { if (p.category === old.name) p.category = rec.name; });
        data.categories = data.categories.map(c => c.id === id ? rec : c);
      } else data.categories.push(rec);
      categoryForm.reset();
      categoryId.value = '';
      renderAdminCategories();
      populateAdminCategoryOptions();
      adminDownloadScript();
      alert('Category saved. Downloaded script.js. Replace your website script.js with the downloaded file.');
    });

    settingsForm.addEventListener('submit', (e) => {
      e.preventDefault();
      data.settings = {
        storeName: qs('#setStoreName').value.trim(),
        shortName: qs('#setShortName').value.trim(),
        whatsappNumber: qs('#setWhatsapp').value.trim(),
        storeAddress: qs('#setAddress').value.trim(),
        phoneOne: qs('#setPhone1').value.trim(),
        phoneTwo: qs('#setPhone2').value.trim(),
        instagramOne: qs('#setInstagram1').value.trim(),
        instagramTwo: qs('#setInstagram2').value.trim(),
        amazonLink: qs('#setAmazon').value.trim(),
        flipkartLink: qs('#setFlipkart').value.trim(),
        meeshoLink: qs('#setMeesho').value.trim(),
        storeTagline: qs('#setTagline').value.trim()
      };
      adminDownloadScript();
      alert('Settings saved. Downloaded script.js. Replace your website script.js with the downloaded file.');
    });

    qs('#downloadScriptBtn').addEventListener('click', adminDownloadScript);
  }

  function init() {
    updateNav();
    updateSettingsUI();
    renderHome();
    renderCategories();
    renderProducts();
    renderDetails();
    renderContact();
    adminInit();
  }
  document.addEventListener('DOMContentLoaded', init);
})();
