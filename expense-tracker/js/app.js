/**
 * App Module
 * Handles UI updates and application logic.
 */

// DOM Elements
const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');
const type = document.getElementById('type');
const category = document.getElementById('category');

// State
let transactions = Storage.getTransactions();

/**
 * Add a new transaction
 * @param {Event} e - Form submit event
 */
function addTransaction(e) {
    e.preventDefault();

    if (text.value.trim() === '' || amount.value.trim() === '') {
        alert('Please add a description and amount');
        return;
    }

    const transactionType = type.value;
    // For expense, we can store as negative or keep positive and handle logic. 
    // Requirement says "Clear color difference for income (green) and expense (red)".
    // Let's store amount as positive number and use 'type' to distinguish.

    // Ensure amount is a valid number
    const amountValue = +amount.value;

    const transaction = {
        id: generateID(),
        text: text.value,
        amount: amountValue,
        type: transactionType,
        category: category.value,
        createdAt: new Date().toISOString()
    };

    transactions = Storage.saveTransaction(transaction);

    addTransactionDOM(transaction);
    updateValues();

    // Reset inputs
    text.value = '';
    amount.value = '';
}

/**
 * Generate random ID
 * @returns {number} Random ID
 */
function generateID() {
    return Math.floor(Math.random() * 100000000);
}

/**
 * Add transaction to DOM list
 * @param {Object} transaction 
 */
function addTransactionDOM(transaction) {
    // Get sign and class based on type
    const isExpense = transaction.type === 'expense';
    const sign = isExpense ? '-' : '+';
    const className = isExpense ? 'minus' : 'plus';
    const amountColor = isExpense ? 'text-red' : 'text-green';

    const item = document.createElement('li');

    // Add class based on value
    item.classList.add(className);

    item.innerHTML = `
        <div class="transaction-info">
            <strong>${transaction.text}</strong>
            <small>${transaction.category}</small>
        </div>
        <span>${sign}₹${Math.abs(transaction.amount).toFixed(2)}</span>
        <button class="delete-btn" onclick="removeTransaction(${transaction.id})">x</button>
    `;

    list.appendChild(item);
}

/**
 * Update the balance, income and expense
 */
function updateValues() {
    const amounts = transactions.map(transaction => {
        return transaction.type === 'expense' ? -transaction.amount : transaction.amount;
    });

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    const expense = (
        amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1
    ).toFixed(2);

    balance.innerText = `₹${total}`;
    money_plus.innerText = `+₹${income}`;
    money_minus.innerText = `-₹${expense}`;
}

/**
 * Remove transaction by ID
 * @param {number} id 
 */
function removeTransaction(id) {
    transactions = Storage.deleteTransaction(id);
    init();
}

/**
 * Initialize application
 */
function init() {
    list.innerHTML = '';
    if (transactions.length > 0) {
        transactions.forEach(addTransactionDOM);
    }
    updateValues();
}

// Event Listeners
form.addEventListener('submit', addTransaction);

// Initialize
init();
