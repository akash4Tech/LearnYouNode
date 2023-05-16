const fs=require('fs');
console.log('welcome');
let check=fs.readFile(process.argv[2]);
let str=check.toString();
console.log(str);
console.log('hiii')