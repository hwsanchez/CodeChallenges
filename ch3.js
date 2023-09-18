
// Questions Marks

// Have the function QuestionsMarks(str) take the str string parameter,
// which will contain single digit numbers, letters, and question marks,
// and check if there are exactly 3 question marks between every pair of 
// two numbers that add up to 10. If so, then your program should return 
// the string true, otherwise it should return the string false.If there 
// aren't any two numbers that add up to 10 in the string, then your program
// should return false as well. 

// For example: if str is "arrb6???4xxbl5???eee5" then your program should return true because there are exactly 3 question marks between 6 and 4, and 3 question marks between 5 and 5 at the end of the string.
// Examples

// Input: "aa6?9" 
// Output: false
// Input: "acc?7??sss?3rr1??????5" 
// Output: true





function is_numeric_char(c) {
  return /\d/.test(c);
}

function QuestionsMarks(str) {
  let numSum = 0;
  let questionCounter = 0;
  let digitCounter = 0;

  for (let i = 0; i < str.length; i++) {
    if (is_numeric_char(str[i])) {
      digitCounter++;
      if (digitCounter === 1) {
        questionCounter = 0;
      }
      numSum += Number(str[i]);
    }
    if (str[i] === "?") {
      questionCounter++;
    }
    if (digitCounter === 2) {
      if (questionCounter === 3 && numSum === 10) {
        return true;
      } else {
        digitCounter = 0;
        numSum = 0;
        questionCounter = 0;
      }
    }
  }

  return false;
}

// Example usage:
console.log(QuestionsMarks("5??aaaaaaaaaaaaaaaaaaa?5?a??5"));

