/* 
1. fetch the words and data in ./dictionary/~
    - these include the complete word list
    - and the english language specs
2. use typo.js and create a dictionary object
    - export it
*/

const fs = require("fs");

const Constants = require("./constants");
const Typo = require("typo-js");

const aff = fs.readFileSync(Constants.dictionary.affPath, "utf-8");
const dic = fs.readFileSync(Constants.dictionary.dicPath, "utf-8");

module.exports = new Typo("en_US", aff, dic);
