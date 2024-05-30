#!/usr/bin/node

const args = process.argv.slice(2);
const size = Number(args[0]);

if (Number.isInteger(size)) {
  let i = 0;
  while (i < size) {
    console.log('X'.repeat(size));
    i++;
  }
} else {
  console.log('Missing size');
}
