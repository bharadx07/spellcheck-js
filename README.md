# spellcheck-js

Checks if a english sentence or word is spelled correctly in JavaScript.

## Installation

```sh
npm i spellcheck-js
```

## Usage

First import:

```js
const spellcheck = require("spellcheck-js");
```

Check if a word is spelled correctly:

```js
spellcheck("hello"); // true
spellcheck("fsdklfjas"); // false
```

Or a sentence:

```js
spellcheck("sentence correct"); // true
spellcheck("sentecees corecte"); // false
```

Get more advanced info:

```js
spellcheck("which wordd wrong"); // {isSpelledCorrectly: false, correctlySpelledWords: ['which', 'wrong'], incorrectlySpelledWords: ['wordd']}
```

Or add your own words

```js
spellcheck("customword"); // false
spellcheck("customword", false, ["customword"]); // true
```

## License

**spellcheck-js** is [MIT-licensed](LICENSE) open-source software created by Bharadwaj Duggaraju.
