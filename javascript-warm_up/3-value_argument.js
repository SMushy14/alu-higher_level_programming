#!/usr/bin/node
const args = process.argv;
if (args[0] <= 2) {
  console.log('No argument');
} else {
  console.log(args[0]);
}
