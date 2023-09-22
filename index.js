class BankAccount {
    constructor(accountHolderName, accountNumber, accountType) {
        this.accountHolderName = accountHolderName;
        this.accountNumber = accountNumber;
        this.accountType = accountType;
        this.balance = 0;
    }

    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Amount must be greater than zero.");
        }
        if (isNaN(amount)) {
            throw new Error("Please enter a valid amount to deposit.");
        }
        this.balance += amount;
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new Error("Amount must be greater than zero.");
        }
        if (isNaN(amount)) {
            throw new Error("Please enter a valid withdrawal amount.");
        }
        if (amount > this.balance) {
            throw new Error("Insufficient funds.");
        }
        this.balance -= amount;
    }

    checkBalance() {
        return this.balance;
    }
}

const bankAccounts = [];

const accountNameInput = document.getElementById('accountName');
const accountNumberInput = document.getElementById('accountNumber');
const accountTypeSelect = document.getElementById('accountType');
const actionSelect = document.getElementById('action');
const amountInput = document.getElementById('amount');
const performActionButton = document.getElementById('performAction');
const resultMessage = document.getElementById('resultMessage');

let currentAccount;

performActionButton.addEventListener('click', () => {
    const accountHolderName = accountNameInput.value.trim();
    const accountNumber = accountNumberInput.value.trim();
    const accountType = accountTypeSelect.value;
    const action = actionSelect.value;
    const amount = parseFloat(amountInput.value);

    try {
        if (!accountHolderName || !accountNumber) {
            throw new Error("Account name and number are neccessary to continue, kindly fill them in.");
        }

        const existingAccount = bankAccounts.find(account => account.accountNumber === accountNumber);

        if (!existingAccount) {
            if (action === 'checkBalance' || action === 'withdraw') {
                throw new Error("Account not found. Deposit to create an account with us.");
            }

            // Create a new account if it doesn't exist
            currentAccount = new BankAccount(accountHolderName, accountNumber, accountType);
            bankAccounts.push(currentAccount);
        } else {
            currentAccount = existingAccount;
        }

        switch (action) {
            case 'deposit':
                currentAccount.deposit(amount);
                resultMessage.innerHTML = `Deposited $${amount}.<br>New balance: $${currentAccount.checkBalance()}`;
                break;
            case 'withdraw':
                currentAccount.withdraw(amount);
                resultMessage.innerHTML = `Withdrawn $${amount}.<br>New balance: $${currentAccount.checkBalance()}`;
                break;
            case 'checkBalance':
                resultMessage.innerHTML = `Account Holder: ${currentAccount.accountHolderName}<br>Account Number: ${currentAccount.accountNumber}<br>Balance: $${currentAccount.checkBalance()}`;
                break;
            default:
                resultMessage.textContent = 'Invalid action.';
                break;
        }
    } catch (error) {
        resultMessage.textContent = error.message;
    }
});
