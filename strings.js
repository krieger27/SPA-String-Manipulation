let userText= document.getElementById("userInput");
let output= document.getElementById("output");
let theBtn = document.getElementById("btn");

function toTheDom (value){
    output.innerHTML = value;
}

theBtn.addEventListener("click", reversal);


//Lets hope this works//
var alphaOnly = /[A-Za-z]/g;

function restrictCharacters(myfield, e, restrictionType) {
if (!e) var e = window.event
if (e.keyCode) code = e.keyCode;
else if (e.which) code = e.which;
var character = String.fromCharCode(code);

// if they pressed esc... remove focus from field...
if (code==27) { this.blur(); return false; }

// ignore if they are press other keys
// strange because code: 39 is the down key AND ' key...
// and DEL also equals .
if (!e.ctrlKey && code!=9 && code!=8 && code!=36 && code!=37 && code!=38 && (code!=39 || (code==39 && character=="'")) && code!=40) {
if (character.match(restrictionType)) {
return true;
} else {
return false;
}
}
}

function reversal (userInput) {
    let captureText = userText.value;
    let outputValue = "";
    let stringToArray = captureText.split("");
    let reverse = stringToArray.reverse().join("");
    outputValue += `reverse it: "${reverse}".` + "<br>";
    toTheDom(outputValue);
    }
    
function alphabits(userInput) {
    let captureText = userText.value;
    let outputValue = "";
    let stringToArray = captureText.split("");
    let alphabetical = stringToArray.sort().join("");
    outputValue += `alphabetize it: "${alphabetical}".` + "<br>";
    toTheDom(outputValue);
}
    
function palindrome(userInput) {
    let captureText = userText.value;
    let outputValue = "";
    let stringToArray = captureText.split("");
    let reverse = stringToArray.reverse().join("");
    if (reverse === captureText)
    outputValue += `reverse it: "${reverse}".`;
    toTheDom(outputValue);
}
    
 var testString = "";
    reversal(testString);
    alphabits(testString);
    palindrome(testString);