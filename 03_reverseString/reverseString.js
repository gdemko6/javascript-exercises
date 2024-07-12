const reverseString = function(string) {
   const splitString = string.split("");
   if (string == ""){
    return string;
   }
   let reversed = [];
   for(let i = splitString.length; i>0; i--){
      reversed += splitString.pop();
   }
   return reversed;
};

// Do not edit below this line
module.exports = reverseString;
