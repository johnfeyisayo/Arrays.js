const vowels = ["a", "e", "i", "o", "u"];
const vowelCount = (aString) => {
  let newObject = {};
  for (let letter of aString) {
    if (vowels.includes(letter)) {
      if (newObject.hasOwnProperty(letter)) {
        newObject[letter] = newObject[letter] + 1;
      } else {
        newObject[letter] = 1;
      }
    }
  }
  return newObject;
}
console.log(vowelCount('awesome'));
