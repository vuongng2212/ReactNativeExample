/*Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.*/
var MarksMass = 78
var MarksHeight = 1.69
var JohnsMass = 92
var JohnsHeight = 1.95

MarkBMI = MarksMass / MarksHeight ** 2
JohnBMI = JohnsMass / JohnsHeight ** 2

var markHigherBMI = false
if (MarkBMI > JohnBMI) {
    markHigherBMI = true
} else {
    markHigherBMI = false
}
//1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
if (markHigherBMI) {
    console.log("Mark's BMI is higher than John's!");
} else {
    console.log("Mark's BMI is higher than John's!")
}

//2. Use a template literal to include the BMI values in the outputs. Example: "Mark'sBMI (28.3) is higher than John's (23.9)!"
console.log(`Mark'sBMI (${MarkBMI}) is higher than John's (${JohnBMI})!`);