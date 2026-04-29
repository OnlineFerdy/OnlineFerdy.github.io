// Shared JS for Article Pages
// Handles: dark mode, language switching, mobile drawer

document.addEventListener('DOMContentLoaded', () => {

    // ─── Dark Mode ───────────────────────────────────────────────
    const darkModeToggle = document.getElementById('darkModeToggle');
    let isDarkMode = localStorage.getItem('darkMode') === 'true';

    const applyDarkMode = () => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
            if (darkModeToggle) darkModeToggle.innerHTML = '<i class="ri-sun-line"></i>';
        } else {
            document.body.classList.remove('dark-mode');
            if (darkModeToggle) darkModeToggle.innerHTML = '<i class="ri-moon-line"></i>';
        }
    };

    applyDarkMode();

    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            isDarkMode = !isDarkMode;
            localStorage.setItem('darkMode', isDarkMode);
            applyDarkMode();
        });
    }

    // ─── Language Toggle ─────────────────────────────────────────
    let currentLang = localStorage.getItem('lang') || 'id';

    const updateLanguageText = () => {
        document.querySelectorAll('.lang-text').forEach(el => {
            const val = el.getAttribute(`data-${currentLang}`);
            if (val !== null) el.innerHTML = val;
        });
        const langToggle = document.getElementById('langToggle');
        if (langToggle) {
            langToggle.textContent = currentLang === 'id' ? 'EN' : 'ID';
        }
    };

    // Apply on load
    updateLanguageText();

    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            currentLang = currentLang === 'id' ? 'en' : 'id';
            localStorage.setItem('lang', currentLang);
            updateLanguageText();
        });
    }

    // ─── Mobile Drawer ────────────────────────────────────────────
    const burgerMenu = document.getElementById('burgerMenu');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const mobileDrawerOverlay = document.getElementById('mobileDrawerOverlay');
    const closeDrawerBtn = document.getElementById('closeDrawer');

    const openDrawer = () => {
        if (mobileDrawer) mobileDrawer.classList.add('active');
        if (mobileDrawerOverlay) mobileDrawerOverlay.classList.add('active');
    };

    const closeDrawerFunc = () => {
        if (mobileDrawer) mobileDrawer.classList.remove('active');
        if (mobileDrawerOverlay) mobileDrawerOverlay.classList.remove('active');
    };

    if (burgerMenu) burgerMenu.addEventListener('click', openDrawer);
    if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeDrawerFunc);
    if (mobileDrawerOverlay) mobileDrawerOverlay.addEventListener('click', closeDrawerFunc);

});
