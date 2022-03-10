/* CONSTANTS
  - dictionaryPath: raw file path to en_US.json
*/

const dictionaryPath = __dirname + "/../dictionary/en_US.json";
const specialCharactersPath =
  __dirname + "/../dictionary/english_special_characters.json";

const Constants = {
  dictionary: {
    dictionaryPath,
    specialCharactersPath,
  },
  parsing: {
    spacing: " ",
  },
};

module.exports = Constants;
