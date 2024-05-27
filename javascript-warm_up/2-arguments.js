#!/usr/bin/node
/* a script that prints a message depending of the number of arguments passed. It handles the arguments passed to the script by slicing off the first two elements of process.argv (Node.js executable path and script path). This way, args contains only the actual arguments passed to the script. */
const args = process.argv.slice(2);

if (args.length === 0) {
  console.log('No argument');
} else if (args.length === 1) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
