/*Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)*/

//1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)

const Mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        return this.mass / this.height ** 2
    }
}

const John = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        return this.mass / this.height ** 2
    }
}

//3. Log to the console who has the higher BMI, together with the full name and the espective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
const MarkBMI = Mark.calcBMI()
const JohnBMI = John.calcBMI()
if (MarkBMI > JohnBMI) {
    console.log(`Mark's BMI (${MarkBMI}) is higher than John's (${JohnBMI})`);
} else if (JohnBMI > MarkBMI) {
    console.log(`John's BMI (${JohnBMI}) is higher than Mark's (${MarkBMI})`);
} else {
    console.log("Mark and John have same BMI");
}