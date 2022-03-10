const SpellCheck = require("./spellcheck");

const allEnglishWords = (englishString) => {
  return new Result(englishString).evaluate().formatted();
};

console.log(allEnglishWords("hey", {}).isAllEnglish);
