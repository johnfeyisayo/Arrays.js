const removeVowels = (anotherString) => {
    let newArray = [];
    for (let letter of anotherString) {
      if (!newArray.includes(letter)) {
        newArray.push(letter);
      }
    }
    return newArray;
  }
  console.log(removeVowels('amazing'));