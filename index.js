// Import stylesheets
import './style.css';

// Write Javascript code!
function analyzeBalanceSheet(balanceSheet) {
  let expenseCount = 0;
  let expenseSum = 0;

  for (let item of balanceSheet) {
    if (typeof item === 'string') {
      const amount = parseFloat(item);
      if (!isNaN(amount)) {
        if (amount < 0) {
          expenseCount++;
          expenseSum += amount;
        }
      }
    }
  }

  return `expenseCount:${expenseCount}, expenseSum: ${expenseSum.toFixed(2)}`;
}

// Example usage
const balanceSheet = [
  '100',
  '-50.5',
  '200',
  'invalid',
  '-150',
  '-50',
  '0',
  'not-a-number',
];
const result = analyzeBalanceSheet(balanceSheet);
console.log(result); // Output: "expenseCount:3, expenseSum: -250.50"

const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Balance Sheet</h1>`;
