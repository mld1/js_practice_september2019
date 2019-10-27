function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  let newArr = [];
  for(let i = 0; i < nums.length; i++){
    if(nums[i] < 1){
      newArr.push(nums[i])
    }
  } 
  return newArr; 
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  let newArr = [];
  for(let i = 0; i < names.length; i++){
    for(let j = 0; j < names[i].length; j++){
      if(names[i][j] === char){
        newArr.push(names[i]);
      }
    }
  }  
  return newArr; 
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  let newArr = [];
  for(let i = 0; i < words.length; i++){
    if(words[i].includes("to ") === true){
      newArr.push(words[i])
    }
  }
  return newArr;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  let newArr = [];
  for(let i = 0; i < nums.length; i++){
    if(nums[i] === Math.ceil(nums[i])){
      newArr.push(nums[i]);
    }
    }
 return newArr; 
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  let newArr = [];
  for(let key in users){
    newArr.push(users[key].data.city.displayName)
  }
  return newArr;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  const newArr = nums.map(num => {
    let n = Math.sqrt(num);
    if(n !== Math.ceil(n)){
    return Number(n.toFixed(2));
    } else {
      return n;
    }
  });
  return newArr;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  let newArr = [];
  let strLowerCase = str.toLowerCase();
  for (let i = 0; i < sentences.length; i++){
      let sentenceLowerCase = sentences[i].toLowerCase();
      if(sentenceLowerCase.includes(strLowerCase)){
        newArr.push(sentences[i])
      }
  }
  return newArr;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  let newArr = [];
  for (let i = 0; i < triangles.length; i++){
  let triangleSorted = triangles[i].sort(((a, b) => b - a))
  newArr.push(triangleSorted[0]);
  }
  return newArr;
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};