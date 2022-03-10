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

  formatted() {
    return {
      isAllEnglish: this.isAllEnglish,
      englishWords: this.englishWords,
      notEnglishWords: this.notEnglishWords,
    };
  }
}

const allEnglishWords = (englishString) => {
  return new Result(englishString).evaluate().formatted();
};

console.log(allEnglishWords("hey", {}).isAllEnglish);
