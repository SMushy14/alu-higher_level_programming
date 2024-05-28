#!/usr/bin/node
const args = process.argv;

const firstArg = args[2];
const number = parseInt(firstArg, 10);

if (!firstArg) {
  console.log('Not a number');
} else if (!isNaN(number)) {
  console.log(`My number: ${number}`);
} else {
  console.log('Not a number');
}
