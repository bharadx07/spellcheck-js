const dictionary = require("./dictionary");
const Constants = require("./constants");

class SpellCheck {
  isSpelledCorrectly = true;
  correctlySpelledWords = [];
  incorrectlySpelledWords = [];

  constructor(wordOrSentence) {
    this.wordOrSentence = wordOrSentence;
  }

  evaluate() {
    const eachWord = this.wordOrSentence.split(Constants.parsing.spacing);

    eachWord.forEach((word) => {
      const wordSpelledCorrectly = dictionary.check(word);

      if (wordSpelledCorrectly) {
        this.correctlySpelledWords.push(word);
      } else {
        this.incorrectlySpelledWords.push(word);
        this.isAllEnglish = false;
      }
    });

    return this;
  }

  formatted(config) {
    if (config.advanced) {
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
