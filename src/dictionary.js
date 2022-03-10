/* 
1. fetch the words and data in ./dictionary/~
    - these include the complete word list
    - and the english language specs
2. use typo.js and create a dictionary object
    - export it
*/

const fs = require("fs");
const Constants = require("./constants");

// three functions to go from raw to array of words
const wordList = Object.keys(
  JSON.parse(fs.readFileSync(Constants.dictionaryPath, "utf-8"))
);

class Dictionary {
    
}
