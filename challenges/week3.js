function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  const newArr = nums.map(num => num * num);
  return newArr;
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  let newString = "";
  for(let i = 0; i < words.length; i++){
    if(i === 0){
      newString = newString + words[i];
    } else if(i > 0){
      let capitalWord = words[i];
      for(let j = 0; j < capitalWord.length; j++){
        if(j === 0){
          let firstLet = capitalWord[j].toUpperCase();
          newString = newString + firstLet;
        } else {
          newString = newString + capitalWord[j];
        }
      }
    }
  }
  return newString;
  }


  function getTotalSubjects(people) {
    if (people === undefined) throw new Error("people is required");
    let count = 0;
    for(let key in people){
      count = count + people[key].subjects.length;
      }
    return count;
  }

  function checkIngredients(menu, ingredient) {
    if (menu === undefined) throw new Error("menu is required");
    if (!ingredient) throw new Error("ingredient is required");
    let menuArr =[]
    for(let key in menu){
    menuArr = menuArr + Object.values(menu[key]);
    }
  return menuArr.includes(ingredient);
  }  

  function duplicateNumbers(arr1, arr2) {
    if (arr1 === undefined) throw new Error("arr1 is required");
    if (arr2 === undefined) throw new Error("arr2 is required");
    let newArr = [];
    for(let i = 0; i < arr1.length; i++){
      if(arr2.includes(arr1[i])){
        if(!newArr.includes(arr1[i]))
        newArr.push(arr1[i]);
      }
    }
    return newArr.sort(((a, b) => a - b))
  }

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
