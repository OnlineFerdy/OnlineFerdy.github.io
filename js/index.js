document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.getElementById('product-grid');
    const pills = document.querySelectorAll('.pill');

    // Function to format currency to IDR
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(amount);
    };

    let currentLang = localStorage.getItem('lang') || 'id'; // default to ID

    const updateLanguageText = () => {
        document.querySelectorAll('.lang-text').forEach(el => {
            el.innerHTML = el.getAttribute(`data-${currentLang}`);
        });
        const langToggle = document.getElementById('langToggle');
        if (langToggle) {
            langToggle.textContent = currentLang === 'id' ? 'EN' : 'ID';
        }
        const activePill = document.querySelector('.pill.active');
        if (activePill) {
            renderProducts(activePill.getAttribute('data-category'));
        }
    };

    // Function to render products
    const renderProducts = (category) => {
        productGrid.innerHTML = '';
        let filteredProducts = [];

        if (category === 'Best-Sellers') {
            // FIXED 8 PRODUCTS (Selected for aspect ratio/popularity)
            // IDs: 2, 10, 13, 15, 21, 26, 32, 36
            const bestSellerIds = [2, 10, 13, 15, 21, 26, 32, 36];
            filteredProducts = products.filter(p => bestSellerIds.includes(p.id));
        } else if (category === 'Bouquets') {
            // Sort bouquets by name (proxy for "short" first if named correctly, or just consistent order)
            filteredProducts = products
                .filter(product => product.category === category)
                .sort((a, b) => a.name.localeCompare(b.name));
        } else {
            filteredProducts = products.filter(product => product.category === category);
        }

        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            // Badge from data
            const subtitleText = currentLang === 'id' ? 'Dibuat dengan Kulit Jagung' : 'Made with Corn Husk';
            const buyNowText = currentLang === 'id' ? 'Beli Sekarang' : 'Buy Now';

            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-img">
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <div class="product-divider"></div>
                    <p class="price">${subtitleText}</p>
                    <p class="subscribe-price"><strong>${formatCurrency(product.price)}</strong></p>
                    <a href="https://wa.me/62895321316041?text=halo%2C%20saya%20dari%20web%20aida%20craft%2C%20ingin%20membeli%20produk%20${encodeURIComponent(product.name)}%20dari%20web" target="_blank" class="btn-shop-now lang-text" data-en="Buy Now" data-id="Beli Sekarang">${buyNowText}</a>
                </div>
            `;
            productGrid.appendChild(productCard);
        });
    };

    // Initial render
    renderProducts('Best-Sellers');

    // Event listeners for sorting pills
    pills.forEach(pill => {
        pill.addEventListener('click', () => {
            // Remove active class from all pills
            pills.forEach(p => p.classList.remove('active'));
            // Add active class to clicked pill
            pill.classList.add('active');

            const category = pill.getAttribute('data-category');
            renderProducts(category);
        });
    });

    // Mobile Drawer Logic
    const burgerMenu = document.getElementById('burgerMenu');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const mobileDrawerOverlay = document.getElementById('mobileDrawerOverlay');
    const closeDrawer = document.getElementById('closeDrawer');

    if (burgerMenu) {
        burgerMenu.addEventListener('click', () => {
            mobileDrawer.classList.add('active');
            mobileDrawerOverlay.classList.add('active');
        });
    }

    const closeDrawerFunc = () => {
        mobileDrawer.classList.remove('active');
        mobileDrawerOverlay.classList.remove('active');
    };

    if (closeDrawer) closeDrawer.addEventListener('click', closeDrawerFunc);
    if (mobileDrawerOverlay) mobileDrawerOverlay.addEventListener('click', closeDrawerFunc);

    // Language switch logic
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            currentLang = currentLang === 'id' ? 'en' : 'id';
            localStorage.setItem('lang', currentLang);
            updateLanguageText();
        });
    }

    updateLanguageText();
});
