///////////////// Question
var input = prompt('Enter Character:');
if (input.length === 1 && (input === 'a' || input === 'A')) {
    document.write("True");
} else if (input.length === 1 && (input === 'e' || input === 'E')) {
    document.write("True");
} else if (input.length === 1 && (input === 'i' || input === 'I')) {
    document.write("True");
} else if (input.length === 1 && (input === 'o' || input === 'O')) {
    document.write("True");
} else if (input.length === 1 && (input === 'u' || input === 'U')) {
    document.write("True");
} else {
    document.write("False");
}


/////////// Question

let pass1=("abdul sami khan");
let pass2=prompt("Enter Your Password:");

if (pass2==" "){
    document.write("Please enter your password");
}
 else{
    document.write("Welcome!!!!!!")
 }

 //////////

if (pass1===pass2){
       document.write("Correct! The password you entered matches the original password.");
    }
else{
        document.write("Incorrect password");
 }

///////////// Question

var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}


