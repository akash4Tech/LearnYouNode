const fs=require('fs');
// let data = 'hi';
fs.readFile(process.argv[2],'utf8',(err, data) =>{
    if(err){
    console.log(err);
    }else{
        console.log(1);
    console.log(data.split('\n').length-1);
    }
})
console.log(2);