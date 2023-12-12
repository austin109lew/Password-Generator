var lengthInput = document.getElementById("length");
var charTypeInput = document.getElementById("charType");
var displayInput = document.getElementById("display");
var generateBtn = document.getElementById("generate-btn");
var copyBtn = document.getElementById("copy-btn");

generateBtn.addEventListener("click", function() {
  var length = Number(lengthInput.value);
  var charType = charTypeInput.value;
  var password = generatePassword(length, charType);
  displayInput.value = password;
});

copyBtn.addEventListener("click", function() {
  displayInput.select();
  document.execCommand("Copy");
  alert("Password copied to clipboard!");
});

function generatePassword(length, charType) {
  var charSets = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numeric: '0123456789',
    special: ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
  };
  var charSet = charSets[charType.toLowerCase()] || charSets.lowercase;
  var retVal = "";
  for (var i = 0; i < length; i++) {
    retVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  return retVal;
}
