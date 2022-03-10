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
  wordList;
  specialCharacterList;

  constructor(wordList, specialCharacterList) {
    this.wordList = wordList;
    this.specialCharacterList = specialCharacterList;
  }

  extend(words) {
    if (typeof words === "string") {
      wordList.push(words);
    }

    words.forEach((word) => {
      wordList.push(word);
    });
  }

  purgeSpecialCharacters(word) {
    let withoutSpecialCharacters = word;

    this.specialCharacterList.forEach((spcar) => {
      withoutSpecialCharacters = withoutSpecialCharacters.split(spcar).join("");
    });

    return withoutSpecialCharacters;
  }

  check(word) {
    return wordList.includes(this.withoutSpecialCharacters(word));
  }
}

const dictionary = new Dictionary(wordList, )
