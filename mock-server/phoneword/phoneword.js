const PhoneWordNumberMap = new Map();
PhoneWordNumberMap.set(0, []);
PhoneWordNumberMap.set(1, []);
PhoneWordNumberMap.set(2, ["a", "b", "c"]);
PhoneWordNumberMap.set(3, ["d", "e", "f"]);
PhoneWordNumberMap.set(4, ["g", "h", "i"]);
PhoneWordNumberMap.set(5, ["j", "k", "l"]);
PhoneWordNumberMap.set(6, ["m", "n", "o"]);
PhoneWordNumberMap.set(7, ["p", "q", "r", "s"]);
PhoneWordNumberMap.set(8, ["t", "u", "v"]);
PhoneWordNumberMap.set(9, ["w", "x", "y", "z"]);

/*
@param: combination -  by default empty, on iterate every digit it will append the currnt letter
@param: nextdigit - it will come from client as query param
@param: result - default empty and add the combination on iterate every digit.
*/
const recursion = (combination, nextdigit, result) => {
  // if nextdigit not exist
  if (nextdigit.length === 0) {
    // adding the word combination in result
    result.push(combination);
  } else {
    //get the first digit from the args.
    const digit = parseInt(nextdigit.substring(0, 1));
    const letters = PhoneWordNumberMap.get(digit);
    for (let i = 0; i < letters.length; i++) {
      const letter = PhoneWordNumberMap.get(digit)[i];
      //appending the current letter in combination and getting next digit
      recursion(combination + letter, nextdigit.substring(1), result);
    }
  }
};

module.exports = {
  findWordList: (digits) => {
    const result = [];
    recursion("", digits, result);
    return result;
  },
};
