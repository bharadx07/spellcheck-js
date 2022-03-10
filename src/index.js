const dictionary = require("./dictionary");

class Result {
  isAllEnglish = true;
  englishWords = [];
  notEnglishWords = [];

  constructor(englishString) {
    this.englishString = englishString;
  }

  evaluate() {
    const eachWord = this.englishString.split(" ");
    eachWord.forEach((word) => {
      const isEnglish = dictionary.check(word);

      if (isEnglish) {
        this.englishWords.push(word);
      } else {
        this.notEnglishWords.push(word);
        this.isAllEnglish = false;
      }
    });

    return this;
  }

  formatted(config) {
    if (config.advanced) {
      return {
        isAllEnglish: this.isAllEnglish,
        englishWords: this.englishWords,
        notEnglishWords: this.notEnglishWords,
      };
    }

    return this.isAllEnglish;
  }
}

const allEnglishWords = (englishString, config) => {
  return new Result(englishString).evaluate().formatted(config);
};

console.log(allEnglishWords("this is a sentence with all english words", { advanced: true }));
