function capitalize(word) {
  // if (word === undefined) throw new Error("word is required");
  if (typeof word !== "string") throw new Error("word is required");
  let firstLetter = word[0];
  return firstLetter.toUpperCase() + word.slice(1, word.length);
}


function generateInitials(firstName, lastName) {
  if (typeof firstName !== "string") throw new Error("firstName is required");
  if (typeof lastName !== "string") throw new Error("lastName is required");
  let firstLetter = firstName[0];
  let letterAfter = lastName[0];
  return firstLetter.toUpperCase() + "." + letterAfter.toUpperCase();
}

function addVAT(originalPrice, vatRate) {
  if (typeof originalPrice !== "number") throw new Error("originalPrice is required as number");
  if (typeof vatRate !== "number") throw new Error("vatRate is required as number");
  if (vatRate > 100) throw new Error("vatRate is required as less than 100");
  if (vatRate < 0) throw new Error("vatRate is required as 0 or above");
  if (originalPrice < 0) throw new Error("origionalPrice is required as 0 or above");
  const newPrice = originalPrice + ((vatRate / 100) * originalPrice);
  return Math.round(newPrice * 100) / 100;
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  const newPrice = originalPrice - (reduction / 100 * originalPrice);
  return Math.round(newPrice * 100) / 100;
}

function getMiddleCharacter(str) {
  if (typeof str !== "string") throw new Error("str is required as string");
  if(str.length % 2 === 0){
  return str[(str.length) / 2 - 1] + str[str.length / 2];
  } else {
    return str[(str.length + 1) / 2 - 1];
  }
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  let wordReversed = ""
  for(let i = word.length - 1; i >= 0; i--){
    wordReversed = wordReversed + word[i];
  }
  return wordReversed;
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  let wordReversed = "";
  let newArr = [];
  for(let i = 0; i < words.length; i++){
    let singleWord = words[i];
    for(let j = singleWord.length - 1; j >= 0; j--){
    wordReversed = wordReversed + singleWord[j];
    }
    newArr.push(wordReversed);
    wordReversed = "";
  }
  return newArr;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  let count = 0;
  for(let i = 0; i < users.length; i++){
  if(users[i].type == "Linux"){
    count++;
  }
  }
  return count;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  let sum = 0;
  for(let i = 0; i < scores.length; i++){
    sum = sum + scores[i];
  }
  let decimal = sum / scores.length;
  return  Math.round(decimal * 100) / 100
}


function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  if (n % 5 === 0 && n % 3 === 0){
    return "fizzbuzz"
  } else if(n % 3 === 0){
    return "fizz"
  } else if(n % 5 === 0){
    return "buzz"
  } else {
    return n
  }
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
