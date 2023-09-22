# Bank Account Management Website

## **Introduction**
Following the Javascript Intermediate Campaign on the StackUp Learn and Earn platform, this bounty required me to create a website that makes use of classes, switch statements, and try-catch-finally statements. I chose to create a Bank Account Management Website, a simple web application that allows users to perform basic banking operations such as depositing funds, withdrawing funds, and checking their account balance. It is implemented using JavaScript and provides a user-friendly interface for managing a bank account.

## **How it works**
This website is a practical demonstration of how JavaScript can be used to create a functional bank account management system. It showcases the use of JavaScript classes, switch statements, and try-catch-finally statements to handle various banking operations and provide feedback to users.

Below is an explanation of how the various JavaScript Concepts were incorporated

- **BankAccount Class:**
    The website uses the `BankAccount` class to create and manage user accounts. This class encapsulates the account properties and provides methods for depositing, withdrawing, and checking the balance. The class is defined with a constructor that takes three parameters: `accountHolderName`, `accountNumber`, and `accountType`. It also initializes the `balance` property to zero when a new instance of the class is created.
    It provides three methods:
    - `deposit(amount):` Adds the specified amount to the account's balance if the amount is greater than zero and a valid number.
    - `withdraw(amount):` Subtracts the specified amount from the account's balance if the amount is greater than zero, a valid number, and the account has sufficient funds.
    - `checkBalance():` Returns the current balance of the account.

- **Event Listener:**
    The code adds an event listener to the `performActionButton` element, which listens for a button click.

- **Event Handling:**
    When the button is clicked, the code retrieves the values from the input elements such as `accountNameInput`, `accountNumberInput`, `accountTypeSelect`, `actionSelect`, and `amountInput`.
    It performs various checks to ensure that the input values are valid and that the required fields are not empty.
    It then uses a switch statement to determine the action to be taken based on the selected action (`deposit`, `withdraw`, or `checkBalance`).

- **Switch Statements:**
    A switch statement is employed to determine which action the user wants to perform (`deposit`, `withdraw`, or `checkBalance`). Depending on the selected action, it calls the corresponding method of the currentAccount object (an instance of the `BankAccount` class) and updates the `resultMessage` element with the outcome of the action or any error messages.

- **Try-Catch-Finally Statements:**
    The website uses try-catch blocks to handle errors gracefully. When a user inputs invalid data or attempts to withdraw more funds than available, the catch block captures the error and displays an informative an error message in the `resultMessage` element. The finally block ensures that necessary cleanup actions are performed regardless of the outcome.


## **How to Use the Site**

- **Account Setup:**
    - Enter your `Account Holder Name` and `Account Number` in the respective input fields.
    - Select your `Account Type` from the dropdown menu (e.g., "Savings" or "Checking").

- **Perform Actions:**
After setting up your account, you can proceed to perform the following actions:
    - `Deposit:` Enter the amount you want to deposit in the "Amount" field and select "Deposit" from the action dropdown. Click the "Perform Action" button to deposit funds into your account.
    - `Withdraw:` Enter the amount you want to withdraw in the "Amount" field and select "Withdraw" from the action dropdown. Click the "Perform Action" button to withdraw funds from your account.
    - `Check Balance:` Select "Check Balance" from the action dropdown and click the "Perform Action" button to view your current account balance.

- **Results and Error Handling:**
    - The website will display the result of each action or any error messages in the Result Message area.
    - If an action is successful, it will show the transaction details and the updated account balance.
    - If an error occurs (e.g., insufficient funds or invalid input), an error message will be displayed, providing information about the issue.

---
With this website, users can practice managing a bank account while also learning how JavaScript concepts like classes, switch statements, and error handling can be applied in a real-world web application. It provides a valuable educational tool for understanding fundamental programming concepts in a practical context.