// Get command line arguments (skip first two which are node and script path)
const args = process.argv.slice(2);

// Get the first argument and convert to integer
const size = parseInt(args[0]);

// Check if the conversion resulted in a valid number
if (isNaN(size)) {
    console.log("Missing size");
} else {
    // Use nested loops to print the square
    for (let row = 0; row < size; row++) {
        let line = "";
        for (let col = 0; col < size; col++) {
            line += "X";
        }
        console.log(line);
    }
}