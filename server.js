const express = require('express');
const app = express();
const fs = require("fs");
const { callbackify } = require('util');

function getRandomLine(filename, callback){
  fs.readFile(filename, "utf-8", function(err, data){
    if(err) {
        throw err;
    }

    // note: this assumes `data` is a string - you may need
    //       to coerce it - see the comments for an approach
    var lines = data.split('\n');
    
    // choose one of the lines...
    var line = lines[Math.floor(Math.random()*lines.length)]

    // invoke the callback with our line

    callback(line) 
 })
};

app.use("/public", express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    var word = "WORDS";
    res.send(getRandomLine("public/words.txt"));
});

function test(e) {
   console.log(e)
}


app.listen(3000);