const fs=require('fs');
// let data;
// console.log('data',data,'\n\n\n');
let buf=fs.readFileSync(process.argv[1]);
// console.log(data.toString());

// // console.log(buf);
const str=buf.toString();
// // console.log(str);
const arr=str.split('\n');
// // console.log(arr);
console.log(arr.length-1);
