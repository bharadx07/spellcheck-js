const SpellCheck = require("./spellcheck");

/**
 *
 * @param {string} wordOrSentence A single word or a sentence of words that is checked for spelling.
 * @param {boolean} advancedOrNot Set if the function should return additional information like the words spelled correctly and the words spelled wrong.
 * @param {string | string[]} additionalWords Extend the dictionary with your own custom words.
 * @returns {boolean | {isSpelledCorrectly: boolean, correctlySpelledWords: string[], incorrectlySpelledWords: string[]}} Simple boolean to inform of spelling or more advanced info.
 */
const spellcheck = (
  wordOrSentence,
  advancedOrNot = false,
  additionalWords = []
) => {
  return new SpellCheck(wordOrSentence)
    .evaluate(additionalWords)
    .formatted(advancedOrNot);
};

module.exports = spellcheck;
