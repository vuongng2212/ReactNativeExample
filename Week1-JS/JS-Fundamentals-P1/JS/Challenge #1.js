/*Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).*/

// 1. Store Mark's and John's mass and height in variables
//Mark
var MarksMass = 78
var MarksHeight = 1.69
    //John
var JohnsMass = 92
var JohnsHeight = 1.95

//2. Calculate both their BMIs using the formula (you can even implement both versions)
MarkBMI = MarksMass / MarksHeight ** 2
JohnBMI = JohnsMass / JohnsHeight ** 2
console.log(MarkBMI);
console.log(JohnBMI);

//3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
var markHigherBMI = false
if (MarkBMI > JohnBMI) {
    markHigherBMI = true
} else {
    markHigherBMI = false
}
console.log(markHigherBMI);