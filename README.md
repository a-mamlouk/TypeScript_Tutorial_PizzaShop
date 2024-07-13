// Welcome to the TypeScript tutorial : https://www.youtube.com/watch?v=SpwzRDUQ1GI&list=LL&index=22

// TypeScript is a statically typed superset of JavaScript that compiles to plain JavaScript.
// It adds optional static types to JavaScript, which can help catch errors and provide better tooling support.

// To get started with TypeScript, you'll need to have Node.js and TypeScript installed on your machine.
// You can install TypeScript globally using npm by running the following command:
// npm install -g typescript

// Once TypeScript is installed, you can create a new TypeScript file with the .ts extension.
// TypeScript code can be written using the same syntax as JavaScript, with the addition of type annotations.

// Let's start with a simple example:
function greet(name: string) {
  console.log(`Hello, ${name}!`);
}

greet("TypeScript");

// In this example, we define a function called greet that takes a parameter of type string.
// The function then logs a greeting message to the console, using the provided name.

// To compile the TypeScript code to JavaScript, you can use the TypeScript compiler (tsc).
// Run the following command in the terminal to compile the TypeScript file:
// tsc filename.ts

// Once the code is compiled, you can run the resulting JavaScript file using Node.js or in a browser.

// This is just a brief introduction to TypeScript. In the upcoming sections, we'll explore more TypeScript features and concepts.

// Happy coding!
