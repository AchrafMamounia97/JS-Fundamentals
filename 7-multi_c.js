// Get command line arguments (skip first two which are node and script path)
const args = process.argv.slice(2);

// Get the first argument and convert to integer
const x = parseInt(args[0]);

// Check if the conversion resulted in a valid number
if (isNaN(x)) {
    console.log("Missing number of occurrences");
} else {
    // Use a for loop to print "C is fun" x times
    for (let i = 0; i < x; i++) {
        console.log("C is fun");
    }
}