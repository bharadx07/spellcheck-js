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
  JSON.parse(fs.readFileSync(Constants.dictionary.dictionaryPath, "utf-8"))
);
const specialCharacterList = JSON.parse(
  fs.readFileSync(Constants.dictionary.specialCharactersPath, "utf-8")
).spchar;

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

      return;
    }

    words.forEach((word) => {
      wordList.push(word);
    });
  }

  purgeSpecialCharacters(word) {
    let withoutSpecialCharacters = word;

    this.specialCharacterList.forEach((spchar) => {
      withoutSpecialCharacters = withoutSpecialCharacters
        .split(spchar)
        .join("");
    });

    return withoutSpecialCharacters;
  }

  check(word) {
    return wordList.includes(this.purgeSpecialCharacters(word));
  }
}

module.exports = {
  Dictionary,
  wordList,
  specialCharacterList,
};
