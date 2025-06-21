const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});     
// Function to prompt user for input
function promptUser(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}
// Main function to run the calculator
async function runCalculator() {    
    try {
        const a = parseFloat(await promptUser("Enter the first number (a): "));
        const b = parseFloat(await promptUser("Enter the second number (b): "));
        const operator = await promptUser("Enter the operator (add, subtract, multiply, divide, modulus, exponent, squareRoot): ");
        
        const result = calculator(a, b, operator);
        console.log(`Result: ${result}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    } finally {
        rl.close();
    }
}
runCalculator();
// Function to perform the calculation based on the operator

function calculator(a,b,operator){
    switch(operator){
        case "+":
            return a + b;
        case "-":
            return a - b;           
        case "*":
            return a * b;
        case "/":
            if (b === 0) {
                throw new Error("Cannot divide by zero");
            }
            return a / b;
        case "%":
            return a % b;       
        case "exponent":
            return Math.pow(a, b);
        case "squareRoot":
            if (a < 0) {
                throw new Error("Cannot calculate square root of a negative number");
            }
            return Math.sqrt(a);
        default:
            throw new Error("Invalid operator");
    }
}
// Example usage:
  
