const repeatString = function (string, num) {
  finalWord = "";
  if (num < 0) {
    return "ERROR";
  }
  for (i = 0; i < num; i++) {
    finalWord += string;
  }

  return finalWord;
};

// Do not edit below this line
module.exports = repeatString;
