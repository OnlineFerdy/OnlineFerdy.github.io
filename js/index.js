document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.getElementById('product-grid');
    const pills = document.querySelectorAll('.pill');

    // Function to format currency to IDR
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(amount);
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
            const badgeHtml = product.badge ? `<span class="badge">${product.badge}</span>` : '';

            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-img">
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <div class="product-divider"></div>
                    <p class="price">Made with Love</p>
                    <p class="subscribe-price"><strong>${formatCurrency(product.price)}</strong></p>
                    ${badgeHtml}
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
});
