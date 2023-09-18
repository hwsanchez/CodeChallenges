// Find Intersection

// Have the function FindIntersection(strArr) read the array 
// of strings stored in strArr which will contain 2 elements: 
// the first element will represent a list of comma - separated 
// numbers sorted in ascending order, the second element will 
// represent a second list of comma - separated numbers(also sorted).
// Your goal is to return a comma - separated string containing the 
// numbers that occur in elements of strArr in sorted order.
// If there is no intersection, return the string false. 
const Array = ["0, 3, 6, 12", "1, 2, 4, 13, 15"];

function FindIntersection(strArr) {
  let result = "";
  let findvalue;
  const str1 = strArr[0].split(", ");
  length1 = str1.length
  const str2 = strArr[1].split(", ");
  length2 = str2.length
  if (length1 > length2) {
    for (let i = 0; i < length2; i++) {
      findvalue = str1.find(n => n === str2[i])
      if (findvalue != undefined) {
        result = result + str2[i] + ", "
      }
    }
  }
  else {
    for (let i = 0; i < length1; i++) {
      findvalue = str2.find((n) => n === str1[i]);
      if (findvalue != undefined) {
        result = result + str1[i] + ", ";
      }
    }

  }
  if (result.length != 0)
    return result.slice(0, -2);
  else
    return false
    
}

// keep this function call here
console.log(FindIntersection(Array));

