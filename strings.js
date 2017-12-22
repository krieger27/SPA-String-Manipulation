let userText= document.getElementById("userInput");
let output= document.getElementById("output");
let theBtn = document.getElementById("btn");

function toTheDom (value){
    output.innerHTML = value;
}

theBtn.addEventListener("click", reversal);

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