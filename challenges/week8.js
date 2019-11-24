const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  if (nums.includes(n)) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === n && i < nums.length - 1) {
        return nums[i + 1];
      } else if (nums[i] === n && i === nums.length - 1) {
        return null;
      }
    }
  } else {
    return null;
  }
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  let count = { 0: 0, 1: 0 };
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "0") {
      count[0]++;
    } else if (str[i] === "1") {
      count[1]++;
    }
  }
  return count;
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  let revN = n
    .toString()
    .split("")
    .reverse()
    .join("");
  return Number(revN);
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  let count = 0;
  for (let i = 0; i < arrs.length; i++) {
    count += arrs[i].reduce((a, b) => a + b, 0);
  }
  return count;
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  if (arr.length < 2) {
    return arr;
  } else {
    let firstL = arr[0];
    arr[0] = arr[arr.length - 1];
    arr.pop();
    arr.push(firstL);
    return arr;
  }
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  return Object.values(haystack)
    .join("")
    .toLowerCase()
    .includes(searchTerm.toLowerCase());
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  str = str.toLowerCase();
  let splitStr = str.split(" ");
  let frequency = {};
  for (let i = 0; i < splitStr.length; i++) {
    const s = splitStr[i].replace(/[^a-zA-Z]+/, "");
    if (frequency.hasOwnProperty(s)) {
      frequency[s]++;
    } else {
      frequency[s] = 1;
    }
  }
  return frequency;
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
