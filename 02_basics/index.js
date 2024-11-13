const readline = require('readline');

// Create an interface to read input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt user for input
rl.question('What is your name? ', (answer) => {
  console.log(`Hello, ${answer}!`);
  
  // Close the readline interface
  rl.close();
});
