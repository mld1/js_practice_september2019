function getFillings(sandwich) {
  return sandwich.fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  if(person.city === "Manchester"){
    return true;
  } else {
    return false
  }
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  return Math.ceil(people / 40)
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  let count = 0;
  arr.forEach(element => {
    if(element === "sheep"){
    count++;
    }
  });
  return count;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  if(person.address.postCode[0] === "M" && person.address.postCode.length === 7){
    return true;
  } else {
    return false;
  }
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
