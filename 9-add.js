// Define the add function with the required prototype
function add(a, b) {
    return a + b;
}

// Get command line arguments (skip first two which are node and script path)
const args = process.argv.slice(2);

// Get the two arguments and convert them to integers
const firstInteger = parseInt(args[0]);
const secondInteger = parseInt(args[1]);

// Call the add function and print the result
const result = add(firstInteger, secondInteger);
console.log(result);