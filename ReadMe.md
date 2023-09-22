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
    The website uses try-catch blocks to handle errors gracefully. When a user inputs invalid data or attempts to withdraw more funds than available, the catch block captures the error and displays an informative error message in the `resultMessage` element. Below is the breakdown of how each type of error is caught and handled.
  - `Empty Account Name or Account Number:`
        - If the user does not provide an account name or account number, the code throws an error with the error message, `Account name and number are necessary to continue, kindly fill them in.`
  - `Account Not Found:`
      - When the user attempts to perform a withdraw or checkBalance action on an account that doesn't exist in the bankAccounts array, the code throws an error with the error message, `Account not found. Deposit to create an account with us.`
  - `Invalid Action:`
      - If the user selects an action that is not one of the valid actions ('deposit', 'withdraw', 'checkBalance'), the code throws an error with the error message, `Invalid action.`
  - `Amount Validation:`
      - When depositing or withdrawing funds, the code checks if the provided amount is greater than zero and a valid number. If not, it throws an error with one of the following error messages:
        - `Amount must be greater than zero.`
        - `Please enter a valid amount to deposit.`
        - `Please enter a valid withdrawal amount.`
  - `Insufficient Funds (Withdrawal):`
      - If the user attempts to withdraw an amount greater than their account balance, the code throws an error with the error message: `Insufficient funds.`
  - `Other Errors:`
      - Any other unexpected errors that may occur during the execution of the try block will also be caught by the catch block.

  - In all cases, when an error is caught in the catch block, an error message is set in the resultMessage element to inform the user about the issue. This ensures that users receive clear feedback when something goes wrong.

  - The finally block does not contain any specific error-handling logic in this code. It's typically used for code that should run regardless of whether an exception was thrown or not. In this case, you could use it for cleanup tasks or to reset some variables or UI elements if needed.


## **How to Use the Site**

- **Account Setup:**
    - Enter your `Account Holder Name` and `Account Number` in the respective input fields.
    - Select your `Account Type` from the dropdown menu (e.g., "Savings" or "Checking").
    - Select the `deposit` option from the dropdown menu in the action section, and click the Perform Action button to create an account if you don't have an existing account.

- **Perform Actions:**
After setting up your account, you can proceed to perform the following actions:
    - `Deposit:` Enter the amount you want to deposit in the "Amount" field and select "Deposit" from the action dropdown. Click the "Perform Action" button to deposit funds into your account.
    - `Withdraw:` Enter the amount you want to withdraw in the "Amount" field and select "Withdraw" from the action dropdown. Click the "Perform Action" button to withdraw funds from your account. Note that a new user will have to deposit first before they can withdraw, as depositing creates an account for them automatically. Nonexisting users will get an error with the message `Account name and number are necessary to continue, kindly fill them in.`
    - `Check Balance:` Select "Check Balance" from the action dropdown and click the "Perform Action" button to view your current account balance. Note that new users will have to deposit first before they can check their balance, as depositing creates an account for them automatically. Nonexisting users will get an error with the message `Account name and number are necessary to continue, kindly fill them in.`

- **Results and Error Handling:**
    - The website will display the result of each action or any error messages in the Result Message area.
    - If an action is successful, it will show the transaction details and the updated account balance.
    - If an error occurs (e.g., insufficient funds or invalid input), an error message will be displayed, providing information about the issue.

---
With this website, users can practice managing a bank account while also learning how JavaScript concepts like classes, switch statements, and error handling can be applied in a real-world web application. It provides a valuable educational tool for understanding fundamental programming concepts in a practical context.
