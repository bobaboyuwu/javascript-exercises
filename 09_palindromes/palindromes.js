const palindromes = function (string) {
 // convert characters to lowercase and remove non-alphanumeric characters
  const processedString = string.toLowerCase().replace(/[\W_]/g, "");
  return (
    processedString
    // creates an array of characters
      .split("")
    // reverses the array of characters
      .reverse()
    // brings the array of characters back together
      .join("") == processedString
  );
};
;


// Do not edit below this line
module.exports = palindromes;
