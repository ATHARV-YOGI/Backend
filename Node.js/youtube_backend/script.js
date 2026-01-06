const fs = require('fs');

// fs.writeFile("hey.txt", "hey hello ji", function(err){
//     if(err) console.error(err);
//     else console.log("done");
// })


// fs.appendFile("hey.txt", " kaise ho", function(err){
//     if(err) console.error(err);
//     else console.log("done");
// })

// fs.rename("hey.txt", "hello.txt", function(err){
//     if(err) console.error(err);
//     else console.log("done");
// })

// fs.copyFile("hello.txt", "./copy/temp.txt", function(err){
//     if(err) console.error(err);
//     else console.log("done");
// })

// fs.unlink("hello.txt", function(err){
//     if(err) console.error(err);
//     else console.log("done");
// })

fs.rm("./copy", {recursive: true}, function(err){
    if(err) console.error(err);
    else console.log("removed");
})