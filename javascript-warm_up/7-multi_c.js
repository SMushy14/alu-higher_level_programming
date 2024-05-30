#!/usr/bin/node

const args = process.argv;
const x = Number(args[2]);

if (Number.isInteger(x)) {
  let i = 0;
  while (i < x) {
    console.log('C is fun');
    i++;
  }
} else {
  console.log('Missing number of occurrences');
}
