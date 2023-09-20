// Given a time in -hour AM/PM format, convert it to military (24-hour) time.
// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock. 
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
// Example

// Return '12:01:00'.

// Return '00:01:00'.
// Function Description
// Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.
// timeConversion has the following parameter(s):
// string s: a time in  hour format
// Returns
// string: the time in  hour format
// Input Format
// A single string  that represents a time in -hour clock format (i.e.:  or ).
// Constraints
// All input times are valid




function timeConvert(s) {
  let result = "";
  const amOrPm = s.slice(-2);
  militaryTime = s.slice(0, 8).split(":");
  let hourNumber = 0;
  console.log(militaryTime);
  if (amOrPm === "AM") {
    if (militaryTime[0] === "12") {
      militaryTime[0] = "00";
    }
  } else {
    if (militaryTime[0] != "12") {
      numberHour = Number(militaryTime[0]) + 12;
      militaryTime[0] = numberHour.toString();
    }
  }
  result = result.concat(
    militaryTime[0],
    ":",
    militaryTime[1],
    ":",
    militaryTime[2]
  );
  console.log(result);
}

const inputTime = "12:05:45PM";
timeConvert(inputTime);
