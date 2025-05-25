// Define the factorial function recursively
function factorial(n) {
    // Base cases: factorial of NaN is 1, factorial of 0 or 1 is 1
    if (isNaN(n) || n <= 1) {
        return 1;
    }
    // Recursive case: n * factorial(n-1)
    return n * factorial(n - 1);
}

// Get command line arguments (skip first two which are node and script path)
const args = process.argv.slice(2);

// Get the first argument and convert to integer
const number = parseInt(args[0]);

// Calculate factorial and print the result
const result = factorial(number);
console.log(result);