const { Dictionary, wordList, specialCharacterList } = require("./dictionary");
const Constants = require("./constants");

const dictionary = new Dictionary(wordList, specialCharacterList);

class SpellCheck {
  isSpelledCorrectly = true;
  correctlySpelledWords = [];
  incorrectlySpelledWords = [];

  constructor(wordOrSentence) {
    this.wordOrSentence = wordOrSentence;
  }

  evaluate(additionalWords) {
    dictionary.extend(additionalWords);

    const eachWord = this.wordOrSentence.split(Constants.parsing.spacing);

    eachWord.forEach((word) => {
      const wordSpelledCorrectly = dictionary.check(word);

      if (wordSpelledCorrectly) {
        this.correctlySpelledWords.push(word);
      } else {
        this.incorrectlySpelledWords.push(word);
        this.isSpelledCorrectly = false;
      }
    });

    return this;
  }

  formatted(advancedOrNot) {
    if (advancedOrNot) {
      return {
        isSpelledCorrectly: this.isSpelledCorrectly,
        correctlySpelledWords: this.correctlySpelledWords,
        incorrectlySpelledWords: this.incorrectlySpelledWords,
      };
    }

    return this.isSpelledCorrectly;
  }
}

module.exports = SpellCheck;
