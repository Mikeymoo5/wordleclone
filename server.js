const express = require('express');
const app = express();
const fs = require("fs").promises;
const { callbackify } = require('util');

async function getRandomLine(filename, callback){
    data = await fs.readFile(filename, "utf-8")

    // note: this assumes `data` is a string - you may need
    //       to coerce it - see the comments for an approach
    var lines = data.split('\n');
    
    // choose one of the lines...
    var line = lines[Math.floor(Math.random()*lines.length)]

    // invoke the callback with our line

    return await line
}

app.use("/public", express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    var word = "WORDS";
    (async () => {
      res.render("index");
    })()
});

function test(e) {
   console.log(e)
}


app.listen(3000);