const repeatString = function(string, i) {
  repeatedString = "";
  if (i < 0){
    return "ERROR";
  }
  for(i; i>0; i--){
     repeatedString += string;
  }
  return repeatedString;
}

// Do not edit below this line
module.exports = repeatString;
