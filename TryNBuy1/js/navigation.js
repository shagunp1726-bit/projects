// Simple navigation helper
const navigateTo = (url) => {
    window.location.href = url;
};

// Check if user is "logged in" - using localStorage for mock auth
const checkAuth = () => {
    const isLoggedIn = localStorage.getItem('trynbuy_user');
    const currentPath = window.location.pathname;

    // Authorization logic
    const protectedPages = ['dashboard.html', 'add-product.html', 'product.html'];
    const isProtected = protectedPages.some(page => currentPath.includes(page));

    if (!isLoggedIn && isProtected) {
        navigateTo('login.html');
    }

    // If logged in and on login/landing, we can optionally redirect or show different UI
    // For now we keep landing accessible, but login redirects to dashboard
    if (isLoggedIn && currentPath.includes('login.html')) {
        navigateTo('dashboard.html');
    }
};

// Hamburger Menu Logic
document.addEventListener('DOMContentLoaded', () => {

    // Create mobile menu overlay if it doesn't exist
    if (!document.getElementById('mobile-menu-overlay')) {
        const overlay = document.createElement('div');
        overlay.id = 'mobile-menu-overlay';
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            z-index: 998;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s;
        `;
        document.body.appendChild(overlay);

        overlay.addEventListener('click', closeMobileMenu);
    }

    // Initialize Menu Toggles
    const toggles = document.querySelectorAll('.mobile-menu-toggle');
    toggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            toggleMobileMenu();
        });
    });
});

let isMenuOpen = false;

function toggleMobileMenu() {
    isMenuOpen = !isMenuOpen;
    const navLinks = document.querySelector('.nav-links'); // We need to add this class to nav containers
    const overlay = document.getElementById('mobile-menu-overlay');

    // Since we have different nav structures on landing vs dashboard, we'll handle generic "mobile-nav" class
    // For this simple implementation, we might need to inject a mobile menu container.

    // Let's assume we will add a specific .mobile-menu container in HTML or create it dynamically
    let mobileMenu = document.getElementById('mobile-menu-drawer');

    if (!mobileMenu) {
        mobileMenu = document.createElement('div');
        mobileMenu.id = 'mobile-menu-drawer';
        const isDashboard = window.location.pathname.includes('dashboard.html');
        mobileMenu.innerHTML = `
            <div style="padding: 2rem; display: flex; flex-direction: column; gap: 1.5rem;">
                <h2 style="color: var(--primary-color);">TryNbuy</h2>
                <a href="index.html" style="font-size: 1.1rem; font-weight: 500;">Home</a>
                <a href="dashboard.html" style="font-size: 1.1rem; font-weight: 500;">Browse Products</a>
                <a href="index.html#how-it-works" style="font-size: 1.1rem; font-weight: 500;">How It Works</a>
                <a href="about.html" style="font-size: 1.1rem; font-weight: 500;">About Us</a>
                <a href="contact.html" style="font-size: 1.1rem; font-weight: 500;">Contact</a>
                ${isDashboard ?
                `<a href="add-product.html" style="text-decoration: none; color: var(--text-color); font-weight: 500;">+ List Item</a>
                 <a href="#" id="mobile-logout" style="text-decoration: none; color: #ef4444; font-weight: 500;">Logout</a>`
                :
                `<a href="login.html" class="btn btn-primary" style="justify-content: center;">Log In</a>
                 <a href="#" onclick="alert('Contact Support');" style="text-decoration: none; color: var(--text-color); font-weight: 500;">Support</a>`
            }
            </div>
        `;

        // Attach logout listener if it exists
        setTimeout(() => {
            const logoutBtn = document.getElementById('mobile-logout');
            if (logoutBtn) {
                logoutBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    localStorage.removeItem('trynbuy_user');
                    window.location.href = 'index.html';
                });
            }
        }, 0);

        mobileMenu.style.cssText = `
            position: fixed;
            top: 0;
            right: -300px;
            width: 300px;
            height: 100%;
            background: white;
            z-index: 999;
            transition: right 0.3s ease;
            box-shadow: -5px 0 15px rgba(0,0,0,0.1);
        `;
        document.body.appendChild(mobileMenu);
    }

    if (isMenuOpen) {
        mobileMenu.style.right = '0';
        overlay.style.opacity = '1';
        overlay.style.visibility = 'visible';
    } else {
        mobileMenu.style.right = '-300px';
        overlay.style.opacity = '0';
        overlay.style.visibility = 'hidden';
    }
}

function closeMobileMenu() {
    isMenuOpen = false;
    const mobileMenu = document.getElementById('mobile-menu-drawer');
    const overlay = document.getElementById('mobile-menu-overlay');

    if (mobileMenu) mobileMenu.style.right = '-300px';
    if (overlay) {
        overlay.style.opacity = '0';
        overlay.style.visibility = 'hidden';
    }
}
