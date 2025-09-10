// Coding Challenge #2a: Product Pricing Assistant: Discounts, Tax, and Break-Even

// Variables
const productName = "Lockpicking Set";

const costPerUnit = 8.99;
const basePrice = 24.99;
const discountRate = 0.10; 
const SalesTaxRate = 0.07;
const fixedMonthlyCosts = 500;

// Pricing and Profit Metrics
const discountedPrice = basePrice * (1 - discountRate);
const finalPriceWithTax = discountedPrice * (1 + SalesTaxRate);
const profitPerUnit = finalPriceWithTax - costPerUnit;
const isProfitablePerUnit = profitPerUnit > 0;

// Math.ceil for break-even calculation + Infinity for unprofitable products
const breakEvenUnits = isProfitablePerUnit
  ? Math.ceil(fixedMonthlyCosts / profitPerUnit)
  : Infinity;

// Console Commmands

console.log("\\\===Pricing Assistant===///");
console.log(`Product: ${productName}`);
console.log('Discounted Price (before tax): $' + discountedPrice.toFixed(2));
console.log('Final Price (after tax): $' + finalPriceWithTax.toFixed(2));
console.log('Profit per Unit: $' + profitPerUnit.toFixed(2));
console.log(`Break-Even Units: ${breakEvenUnits}');
console.log('Profitable per Unit?: ${isProfitablePerUnit ? "Yes" : "No"}');
