process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

// Reads complete line from STDIN
function readLine() {
    return input_stdin_array[input_currentline++];
}

function main() {
    // Declare second integer, double, and String variables.
    var si = 12
    var sd = 4.0
    var ss = "is the best place to learn and practice coding!"
    // Read and save an integer, double, and String to your variables.
    si = parseInt(readLine())
    sd = parseFloat(readLine())
    ss = readLine()
    // Print the sum of both integer variables on a new line.
    console.log(i + si)
    // Print the sum of the double variables on a new line.
    console.log((d + sd).toFixed(1))
    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.
    console.log(s + ss)
}

