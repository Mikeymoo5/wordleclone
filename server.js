const express = require('express');
const app = express();
const fs = require("fs").promises;
const { callbackify } = require('util');
const wordLoc = "public/words.txt"
async function getRandomLine(filename, callback){
    data = await fs.readFile(filename, "utf-8");

    // note: this assumes `data` is a string - you may need
    //       to coerce it - see the comments for an approach
    var lines = data.split('\n');
    
    // choose one of the lines...
    var line = lines[Math.floor(Math.random()*lines.length)];

    // invoke the callback with our line

    return await line
}

async function checkWord(word) {

  data = await fs.readFile(wordLoc, "utf-8");

  var lines = data.split('\n');

  for (let x = 0; x < data.length; x++) {
    line = lines[x];
    if (line == word) {
      return true;
    }
  } 

  return false;
}



app.use("/public", express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    
    (async () => {
      var randomword = await getRandomLine("public/words.txt");
      res.render("index", {word:randomword});
    })()
});

app.post("/checkword", async (req, res) => {
  res.send("hi");
  (async () => {
    var isvalid = checkWord(await req.body.guess);
  })()
  
  res.send(isvalid);

});

app.request

function test(e) {
   console.log(e)
}


app.listen(3000);