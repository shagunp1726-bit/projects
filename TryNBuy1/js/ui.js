// UI Helper Functions

const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(amount);
};

// Generic function to create elements
const createElement = (tag, className, text) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text) element.textContent = text;
    return element;
};

// Show a simple toast/alert (can be improved later)
const showAlert = (message) => {
    alert(message);
};

/* 
  We will add more specific UI logic here as we build pages 
  (e.g., renderProductCard)
*/
