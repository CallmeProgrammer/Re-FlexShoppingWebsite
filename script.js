const overlay = document.getElementById("overlay");
const buyer = document.getElementById("buyer");
const seller = document.getElementById("seller");
const defaultProducts = [
  {
    isDefault: true,
    productType: "shoes",
    brand: "Nike",
    model: "Air Jordan 1 High OG – Court Purple",
    condition: "Used • Like New",
    price: "16999",
    image: "Assets/ShoesPngs/Air Jordan 1 High OG – Court Purple.png",
    description:
      "Iconic Jordan 1 in Court Purple colorway. Comes with original box, minimal wear, authentic and verified.",
    verified: true,
  },
  {
    isDefault: true,
    productType: "shoes",
    brand: "Nike",
    model: "Air Jordan 1 High OG – Black Toe",
    condition: "Used • Very Good",
    price: "17999",
    image: "Assets/ShoesPngs/Air Jordan 1 High OG – Black Toe.png",
    description:
      "Iconic Jordan 1 in Court Purple colorway. Comes with original box, minimal wear, authentic and verified.",
    verified: true,
  },
  {
    isDefault: true,
    productType: "hoodie",
    brand: "Balenciaga",
    model: "Oversized Hoodie",
    condition: "Used • Good",
    price: "45999",
    image:
      "Assets/Hoodies/Balanciaga Tape Type Ripped Pocket Hoodie Oversized in Black Faded.png",
    description:
      "Iconic Jordan 1 in Court Purple colorway. Comes with original box, minimal wear, authentic and verified.",
    verified: true,
  },
   {
    isDefault: true,
    productType: "perfume",
    brand: "Dior",
    model: "Sauvage Eau de Parfum",
    condition: "Brand New",
    price: "8999",
    image: "Assets/Perfumes/Dior Homme.png",
    description: "Fresh, spicy Dior Sauvage. Long-lasting and bold.",
    verified: true,
  },
   {
    isDefault: true,
    productType: "bag",
    brand: "Gucci",
    model: "Marmont Shoulder Bag",
    condition: "Like New",
    price: "89999",
    image: "Assets/Bags/Gucci Marmont shoulder bag.png",
    description: "Iconic Gucci Marmont shoulder bag with signature GG hardware.",
    verified: true
  },
  {
    isDefault: true,
    productType: "shoes",
    brand: "Nike",
    model: "Air Jordan 1 High OG – Pine Green",
    condition: "Used • Very Good",
    price: "17999",
    image: "Assets/ShoesPngs/Air Jordan 1 High OG – Pine Green.png",
    description: "Classic Jordan 1 Pine Green colorway, verified authentic.",
    verified: true
  },
  {
    isDefault: true,
    productType: "hoodie",
    brand: "Louis Vuitton",
    model: "Monogram French Terry Hoodie",
    condition: "Like New",
    price: "65999",
    image: "Assets/Hoodies/LV Monogram French Terry Zip-Through Hoodie.png",
    description: "Premium Louis Vuitton monogram hoodie with zip-through design.",
    verified: true
  },
  {
    isDefault: true,
    productType: "perfume",
    brand: "Roja",
    model: "Roja Parfum",
    condition: "Brand New",
    price: "32999",
    image: "Assets/Perfumes/RojaParfum.png",
    description: "Luxury niche fragrance with rich, long-lasting notes.",
    verified: true
  },
  {
    isDefault: true,
    productType: "bag",
    brand: "Dior",
    model: "Bow Bag",
    condition: "Like New",
    price: "94999",
    image: "Assets/Bags/Dior Bow Bag.png",
    description: "Elegant Dior Bow Bag crafted with premium materials.",
    verified: true
  },
  {
    isDefault: true,
    productType: "shoes",
    brand: "Balenciaga",
    model: "Speed Trainer – Triple Black",
    condition: "Used • Like New",
    price: "54999",
    image: "Assets/ShoesPngs/Balenciaga Speed Trainer (Triple Black).png",
    description: "Balenciaga Speed Trainer with sleek sock-fit design.",
    verified: true
  },
  {
    isDefault: true,
    productType: "hoodie",
    brand: "Gucci",
    model: "GG Jersey Zip Jacket",
    condition: "Used • Very Good",
    price: "58999",
    image: "Assets/Hoodies/Gucci GG jersey jacquard zip jacket.png",
    description: "Gucci GG jacquard zip jacket with luxury street aesthetic.",
    verified: true
  },
  {
    isDefault: true,
    productType: "bag",
    brand: "Louis Vuitton",
    model: "Discovery Bum Bag",
    condition: "Like New",
    price: "69999",
    image: "Assets/Bags/LVDiscovery BumBag.png",
    description: "Compact LV Discovery bum bag, perfect for daily essentials.",
    verified: true
  },
  {
    isDefault: true,
    productType: "perfume",
    brand: "Dior",
    model: "Dior Homme Intense",
    condition: "Brand New",
    price: "12499",
    image: "Assets/Perfumes/Dior HommeIntense.png",
    description: "Bold and sophisticated Dior Homme Intense fragrance.",
    verified: true
  },
  {
    isDefault: true,
    productType: "shoes",
    brand: "Nike",
    model: "Air Jordan 1 High OG – Court Purple",
    condition: "Used • Like New",
    price: "16999",
    image: "Assets/ShoesPngs/Air Jordan 1 High OG – Court Purple.png",
    description: "Court Purple Jordan 1 OG with iconic silhouette.",
    verified: true
  },
  {
    isDefault: true,
    productType: "hoodie",
    brand: "Prada",
    model: "Cotton Fleece Hoodie",
    condition: "Like New",
    price: "52999",
    image: "Assets/Hoodies/Prada Men's Cotton Fleece Hoodie.png",
    description: "Minimal Prada fleece hoodie with premium comfort.",
    verified: true
  },
  {
    isDefault: true,
    productType: "bag",
    brand: "Balenciaga",
    model: "Bel Air Mini Carry All",
    condition: "Like New",
    price: "97999",
    image: "Assets/Bags/BalanciagaWomen's Bel Air Carry All Bag Mini in Black.png",
    description: "Balenciaga Bel Air mini bag with structured luxury design.",
    verified: true
  },
  {
    isDefault: true,
    productType: "shoes",
    brand: "Nike",
    model: "Air Jordan 1 High OG – Stealth Grey",
    condition: "Used • Good",
    price: "15999",
    image: "Assets/ShoesPngs/Air Jordan 1 High OG – Stealth Grey.png",
    description: "Stealth Grey Jordan 1 OG with timeless appeal.",
    verified: true
  },
  {
    isDefault: true,
    productType: "perfume",
    brand: "Gucci",
    model: "The Alchemist’s Garden",
    condition: "Brand New",
    price: "28999",
    image: "Assets/Perfumes/GucciThe Alchemist's Garden.png",
    description: "Gucci’s exclusive luxury fragrance collection.",
    verified: true
  },
  {
    isDefault: true,
    productType: "hoodie",
    brand: "Balenciaga",
    model: "Basketball Hoodie",
    condition: "Used • Very Good",
    price: "48999",
    image: "Assets/Hoodies/Balenciaga Men's Basketball Hoodie.png",
    description: "Oversized Balenciaga hoodie inspired by basketball culture.",
    verified: true
  },
  {
    isDefault: true,
    productType: "bag",
    brand: "Louis Vuitton",
    model: "Speedy Bandoulière 18",
    condition: "Like New",
    price: "109999",
    image: "Assets/Bags/LVSpeedy Bandoulière 18 x The Darjeeling LimitedBag.png",
    description: "Limited edition Speedy Bandoulière with artistic detailing.",
    verified: true
  },
  {
    isDefault: true,
    productType: "shoes",
    brand: "Balenciaga",
    model: "Track Trainer – Black Yellow",
    condition: "Used • Like New",
    price: "59999",
    image: "Assets/ShoesPngs/Balenciaga Track Trainer (Black  Yellow).png",
    description: "Balenciaga Track trainer with bold multi-layered sole.",
    verified: true
  },
  {
    isDefault: true,
    productType: "hoodie",
    brand: "Louis Vuitton",
    model: "Tie-Dye Sweatshirt",
    condition: "Like New",
    price: "57999",
    image: "Assets/Hoodies/LV Tie-Dye Sweatshirt.png",
    description: "LV tie-dye sweatshirt with premium cotton finish.",
    verified: true
  },
  {
    isDefault: true,
    productType: "bag",
    brand: "Gucci",
    model: "Ophidia Bag",
    condition: "Like New",
    price: "84999",
    image: "Assets/Bags/Gucci Ophidia.png",
    description: "Classic Gucci Ophidia bag with signature web stripe.",
    verified: true
  },
  {
    isDefault: true,
    productType: "perfume",
    brand: "Dior",
    model: "Dior Homme",
    condition: "Brand New",
    price: "9999",
    image: "Assets/Perfumes/Dior Homme.png",
    description: "Elegant Dior Homme fragrance with woody notes.",
    verified: true
  },
  {
    isDefault: true,
    productType: "shoes",
    brand: "Nike",
    model: "Air Jordan 1 High OG – Chicago Gold",
    condition: "Used • Very Good",
    price: "18499",
    image: "Assets/ShoesPngs/Air Jordan 1 High OG – Chicago Gold.png",
    description: "Chicago Gold Jordan 1 OG with premium leather finish.",
    verified: true
  },
  {
    isDefault: true,
    productType: "hoodie",
    brand: "Balenciaga",
    model: "Grey Cropped Logo Hoodie",
    condition: "Used • Like New",
    price: "46999",
    image: "Assets/Hoodies/Balenciaga Grey Cropped Logo Hoodie Graphic Flared Fit Sweatshirt.png",
    description: "Cropped Balenciaga hoodie with bold logo graphic.",
    verified: true
  },
  {
    isDefault: true,
    productType: "bag",
    brand: "Louis Vuitton",
    model: "Discovery Cargo Backpack",
    condition: "Like New",
    price: "99999",
    image: "Assets/Bags/LVSDiscovery Cargo BackpackBag.png",
    description: "Luxury LV cargo backpack with modern silhouette.",
    verified: true
  },
  {
    isDefault: true,
    productType: "shoes",
    brand: "Balenciaga",
    model: "Track 2 Trainer",
    condition: "Used • Like New",
    price: "62999",
    image: "Assets/ShoesPngs/Balenciaga Track 2 Trainer (White  Blue  Red).png",
    description: "Balenciaga Track 2 with futuristic layered design.",
    verified: true
  },
  {
    isDefault: true,
    productType: "hoodie",
    brand: "Balenciaga",
    model: "Los Angeles Cityscape Hoodie",
    condition: "Used • Very Good",
    price: "49999",
    image: "Assets/Hoodies/balenciaga Los Angeles cityscape hoodie.png",
    description: "Balenciaga hoodie featuring LA cityscape graphic.",
    verified: true
  },
];
// function initInventory() {
//   const stored = JSON.parse(localStorage.getItem("inventory"));
//   if (!stored || stored.length === 0) {
//     localStorage.setItem("inventory", JSON.stringify(defaultProducts));
//   }
// }
function initInventory() {
  const stored = JSON.parse(localStorage.getItem("inventory")) || [];

  // keep ONLY user-added products
  const userProducts = stored.filter(p => p.isDefault === false);

  // add fresh default products from code
  const freshInventory = [...defaultProducts, ...userProducts];

  localStorage.setItem("inventory", JSON.stringify(freshInventory));
}

initInventory();

// BUY button
document.getElementById("Buy").addEventListener("click", () => {
  // overlay.classList.remove("hidden");
  // buyer.classList.remove("hidden");
  // seller.classList.add("hidden");
  showBuyer();
});

// SELL button
document.getElementById("sell").addEventListener("click", () => {
  // overlay.classList.remove("hidden");
  // seller.classList.remove("hidden");
  // buyer.classList.add("hidden");
  showSeller();
});

// Close overlay
function closeOverlay() {
  overlay.classList.add("hidden");
  buyer.classList.add("hidden");
  seller.classList.add("hidden");
}

/* ================= SELLER FLOW ================= */
const productsDiv = document.getElementById("products");

/* ---------- LOAD INVENTORY ON PAGE LOAD ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const inventory = JSON.parse(localStorage.getItem("inventory")) || [];

  // If inventory is empty, keep default HTML products
  if (inventory.length === 0) {
    syncHTMLProductsToStorage();
  } else {
    renderProducts();
  }
});
function syncHTMLProductsToStorage() {
  const cards = document.querySelectorAll("#products .card");
  const inventory = [];

  cards.forEach((card) => {
    inventory.push({
      brand: card.querySelector(".brand")?.textContent || "",
      model: card.querySelector(".brand")?.textContent || "",
      condition: card.querySelector(".condition")?.textContent || "",
      price: card.querySelector(".price")?.textContent.replace("₹", ""),
      image: card.querySelector("img")?.src,
      verified: true,
    });
  });
  localStorage.setItem("inventory", JSON.stringify(inventory));
}
function submitProduct() {
  const brand = document.getElementById("brand").value;
  const model = document.getElementById("model").value;
  const price = document.getElementById("price").value;
  const condition = document.getElementById("conditionText").textContent;
  const imageInput = document.getElementById("image");
  const desc = document.getElementById("desc").value;
  const productType = document.getElementById("productType").value;

  if (!brand || !model || !price || !imageInput.files.length) {
    alert("Please fill all required fields");
    return;
  }
  const reader = new FileReader();
  reader.onload = function () {
    const inventory = JSON.parse(localStorage.getItem("inventory")) || [];

    inventory.push({
      isDefault: false, // 🔥 USER PRODUCT
      productType, // ✅ ADD THIS
      brand,
      model,
      condition,
      price,
      image: reader.result, // BASE64
      verified: true,
      description: desc, // ✅ ADD THIS
    });

    localStorage.setItem("inventory", JSON.stringify(inventory));
    clearSellerForm();
    renderProducts();
    closeOverlay();
    showBuyer(); // open inventory
  };

  reader.readAsDataURL(imageInput.files[0]);
}
function renderProducts(filter = "all") {
  productsDiv.innerHTML = "";

  const inventory = JSON.parse(localStorage.getItem("inventory")) || [];

  inventory.filter((p) => filter === "all" || p.productType === filter);
  // .forEach((p, index) => {
  //   productsDiv.innerHTML += `
  //     <div class="card" onclick="!isEditMode && openProductOverlay(${index})">
  //       <img src="${p.image}" alt="${p.model}">

  //       <h4 class="brand">${p.brand}</h4>
  //       <p class="model">${p.model}</p>
  //       <p class="condition">${p.condition}</p>

  //       <div class="price">₹${p.price}</div>
  //       <div class="verified">✔ Verified</div>

  //       ${
  //         isEditMode
  //           ? `<button class="delete-btn" onclick="deleteProduct(${index})">
  //                Delete
  //              </button>`
  //           : ""
  //       }
  //     </div>
  //   `;
  // });
  inventory.forEach((p, realIndex) => {
    if (filter !== "all" && p.productType !== filter) return;

    productsDiv.innerHTML += `
    <div class="card" onclick="!isEditMode && openProductOverlay(${realIndex})">
      <img src="${p.image}" alt="${p.model}">

      <h4 class="brand">${p.brand}</h4>
      <p class="model">${p.model}</p>
      <p class="condition">${p.condition}</p>

      <div class="price">₹${p.price}</div>
      <div class="verified">✔ Verified</div>

      ${
        isEditMode
          ? `<button class="delete-btn" onclick="deleteProduct(${realIndex}); event.stopPropagation();">
               Delete
             </button>`
          : ""
      }
    </div>
  `;
  });
}

function deleteProduct(index) {
  const inventory = JSON.parse(localStorage.getItem("inventory")) || [];
  inventory.splice(index, 1);
  localStorage.setItem("inventory", JSON.stringify(inventory));
  renderProducts();
}

let isEditMode = false;

function toggleEditMode() {
  isEditMode = !isEditMode;

  const btn = document.getElementById("editToggleBtn");
  btn.classList.toggle("active", isEditMode);
  btn.textContent = isEditMode ? "Exit Edit Mode" : "Edit Inventory";

  renderProducts(); // 🔥 re-render cards
}

function showBuyer() {
  document.getElementById("overlay").classList.remove("hidden");
  document.getElementById("buyer").classList.remove("hidden");
  document.getElementById("seller").classList.add("hidden");
}

function showSeller() {
  document.getElementById("overlay").classList.remove("hidden");
  document.getElementById("seller").classList.remove("hidden");
  document.getElementById("buyer").classList.add("hidden");
}

// =================
const filterToggle = document.getElementById("filterToggle");
const filterBar = document.getElementById("filterBar");

filterToggle.addEventListener("click", () => {
  filterBar.classList.toggle("open");
});

/* Optional: close filters when a filter is clicked */
filterBar.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    filterBar.classList.remove("open");
  }
});

/* ================= CONDITION + PRICE ================= */

const range = document.getElementById("conditionRange");
const conditionText = document.getElementById("conditionText");
const basePriceInput = document.getElementById("basePrice");
const suggestedPriceInput = document.getElementById("price");

function updateCondition() {
  const value = range.value;
  let label = "";
  let multiplier = 1;

  if (value >= 9) {
    label = "Like New";
    multiplier = 0.9;
  } else if (value >= 7) {
    label = "Very Good";
    multiplier = 0.8;
  } else if (value >= 5) {
    label = "Good";
    multiplier = 0.65;
  } else {
    label = "Fair";
    multiplier = 0.5;
  }

  conditionText.textContent = `${label} (${value}/10)`;

  const basePrice = parseFloat(basePriceInput.value);
  if (!isNaN(basePrice)) {
    suggestedPriceInput.value = Math.round(basePrice * multiplier);
  }
}

range.addEventListener("input", updateCondition);
basePriceInput.addEventListener("input", updateCondition);
updateCondition();

/* ================= MODEL SWITCHING ================= */

const productType = document.getElementById("productType");
const modelSelect = document.getElementById("model");

const modelsByType = {
  shoes: ["Air Jordan 1", "Air Jordan 4", "Dunk Low", "Air Force 1"],
  hoodie: ["Classic Hoodie", "Oversized Hoodie", "Zip Hoodie"],
  perfume: ["Eau de Parfum", "Eau de Toilette", "Limited Edition"],
  bag: ["Tote Bag", "Crossbody Bag", "Luxury Handbag", "Bum Bag"],
};

productType.addEventListener("change", () => {
  modelSelect.innerHTML = `<option value="">Model</option>`;
  if (!modelsByType[productType.value]) return;

  modelsByType[productType.value].forEach((model) => {
    const opt = document.createElement("option");
    opt.value = model;
    opt.textContent = model;
    modelSelect.appendChild(opt);
  });
});
// ================= CLEAR INPUT FEILDS ================= */
function clearSellerForm() {
  document.getElementById("brand").value = "";
  document.getElementById("productType").value = "";
  document.getElementById("model").innerHTML =
    `<option value="">Model</option>`;
  document.getElementById("year").value = "";
  document.getElementById("basePrice").value = "";
  document.getElementById("price").value = "";
  document.getElementById("desc").value = "";
  document.getElementById("image").value = "";

  // Reset condition slider
  document.getElementById("conditionRange").value = 9;
  document.getElementById("conditionText").textContent = "Like New (9/10)";
}

/* ================= HERO WORD ROTATION ================= */

const words = ["thrift", "drip", "flex", "culture"];
let index = 0;
const wordEl = document.getElementById("changing-word");

if (wordEl) {
  wordEl.style.color = "#ae00ff";

  setInterval(() => {
    wordEl.style.opacity = 0;

    setTimeout(() => {
      index = (index + 1) % words.length;
      wordEl.textContent = words[index];
      wordEl.style.opacity = 1;
    }, 300);
  }, 2000);
}

/* ================= EXCLUSIVE CARD TIMER ================= */
const endTime = new Date().getTime() + 6 * 60 * 60 * 1000;

function updateTimer() {
  const now = new Date().getTime();
  const diff = endTime - now;

  if (diff <= 0) return;

  const h = Math.floor(diff / (1000 * 60 * 60));
  const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("hours").textContent = String(h).padStart(2, "0");
  document.getElementById("minutes").textContent = String(m).padStart(2, "0");
  document.getElementById("seconds").textContent = String(s).padStart(2, "0");
}

setInterval(updateTimer, 1000);
updateTimer();
/* ================= PRODUCT OVERLAY PAGE ================= */
function closeProductOverlay() {
  const overlay = document.getElementById("productOverlay");
  overlay.classList.add("hidden");
  document.body.classList.remove("modal-open");
}

function openProductOverlay(index) {
  const inventory = JSON.parse(localStorage.getItem("inventory")) || [];
  const p = inventory[index];
  if (!p) return;

  const overlay = document.getElementById("productOverlay");

  overlay.innerHTML = `
    <div class="overlay-content product-view">

      <!-- CLOSE (TOP LEFT) -->
      <button class="product-close" onclick="closeProductOverlay()">✕</button>

      <div class="product-view-layout">

        <!-- IMAGE -->
        <div class="product-view-image">
          <img src="${p.image}" alt="${p.model}">
        </div>

        <!-- INFO -->
        <div class="product-view-info">
          <h3 class="brand">${p.brand}</h3>
          <h2 class="model">${p.model}</h2>

          <p class="condition">${p.condition}</p>

          ${p.description ? `<p class="description">${p.description}</p>` : ""}

          <div class="price">₹${p.price}</div>
          <div class="verified">✔ Verified</div>

          <button class="buy-now-btn" onclick="openBuyForm()" >Get It Now</button>
        </div>

      </div>
    </div>
  `;

  overlay.classList.remove("hidden");
  document.body.classList.add("modal-open");
}
// ================= RENDER PRODUCTS WITH BRAND FILTER ================= */
function showBrandInventory(brandName) {
  // Open inventory overlay
  showBuyer();

  productsDiv.innerHTML = "";

  const inventory = JSON.parse(localStorage.getItem("inventory")) || [];

  inventory
    .filter((p) => p.brand?.toLowerCase() === brandName.toLowerCase())
    .forEach((p, index) => {
      productsDiv.innerHTML += `
        <div class="card" onclick="!isEditMode && openProductOverlay(${index})">
          <img src="${p.image}" alt="${p.model}">
          <h4 class="brand">${p.brand}</h4>
          <p class="model">${p.model}</p>
          <p class="condition">${p.condition}</p>
          <div class="price">₹${p.price}</div>
          <div class="verified">✔ Verified</div>

          ${
            isEditMode
              ? `<button class="delete-btn" onclick="deleteProduct(${index})">Delete</button>`
              : ""
          }
        </div>
      `;
    });
}
// ================= BUYER FORM ================= */
function openBuyForm() {
  document.getElementById("buyFormOverlay").classList.remove("hidden");
}

function closeBuyForm() {
  document.getElementById("buyFormOverlay").classList.add("hidden");
}

/* Submit */
document.getElementById("buyForm").addEventListener("submit", function (e) {
  e.preventDefault();

  document.getElementById("buySuccessMsg").classList.remove("hidden");

  setTimeout(() => {
    closeBuyForm();
    document.getElementById("buyForm").reset();
    document.getElementById("buySuccessMsg").classList.add("hidden");
  }, 5000);
});
// ================= CONTACT US ================= */
function openContact() {
  document.getElementById("contactOverlay").classList.remove("hidden");
  document.body.classList.add("modal-open");
}

function closeContact() {
  document.getElementById("contactOverlay").classList.add("hidden");
  document.body.classList.remove("modal-open");
}

function submitContact() {
  const name = document.getElementById("contactName").value;
  const email = document.getElementById("contactEmail").value;
  const message = document.getElementById("contactMessage").value;

  if (!name || !email || !message) {
    alert("Please fill all required fields");
    return;
  }

  const panel = document.getElementById("contact");

  panel.innerHTML = `
    <h2>Message Sent ✅</h2>
    <p>Thanks for reaching out. We’ll get back to you shortly.</p>
  `;

  setTimeout(() => {
    closeContact();
  }, 3000);
}

