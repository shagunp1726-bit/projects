/**
 * Storage Module
 * Handles all localStorage operations for the Expense Tracker.
 */
const Storage = {
    key: 'expense_tracker_transactions',

    /**
     * Get all transactions from localStorage
     * @returns {Array} List of transactions
     */
    getTransactions: function() {
        const transactions = localStorage.getItem(this.key);
        return transactions !== null ? JSON.parse(transactions) : [];
    },

    /**
     * Save a new transaction to localStorage
     * @param {Object} transaction - The transaction object to save
     * @returns {Array} Updated list of transactions
     */
    saveTransaction: function(transaction) {
        const transactions = this.getTransactions();
        transactions.push(transaction);
        localStorage.setItem(this.key, JSON.stringify(transactions));
        return transactions;
    },

    /**
     * Delete a transaction by ID
     * @param {number} id - The ID of the transaction to delete
     * @returns {Array} Updated list of transactions
     */
    deleteTransaction: function(id) {
        let transactions = this.getTransactions();
        transactions = transactions.filter(transaction => transaction.id !== id);
        localStorage.setItem(this.key, JSON.stringify(transactions));
        return transactions;
    },
    
    /**
     * Bulk save transactions (used for updates)
     * @param {Array} transactions - List of transactions
     */
    saveAll: function(transactions) {
         localStorage.setItem(this.key, JSON.stringify(transactions));
    }
};
