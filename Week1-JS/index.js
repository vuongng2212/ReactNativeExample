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


/*Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.*/
//1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
if (markHigherBMI) {
    console.log("Mark's BMI is higher than John's!");
} else {
    console.log("Mark's BMI is higher than John's!")
}

//2. Use a template literal to include the BMI values in the outputs. Example: "Mark'sBMI (28.3) is higher than John's (23.9)!"
console.log(`Mark'sBMI (${MarkBMI}) is higher than John's (${JohnBMI})!`);


/*Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!*/

//Test Data
var DolphinsScoreData1 = [96, 108, 89]
var DolphinsScoreDataBonus1 = [97, 112, 101]
var DolphinsScoreDataBonus2 = [97, 112, 101]

var KoalasScoreData1 = [88, 91, 110]
var KoalasScoreDataBonus1 = [109, 95, 123]
var KoalasScoreDataBonus2 = [109, 95, 106]

//1. Calculate the average score for each team, using the test data below
function calculateAverage(scores) {
    const total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
}

var DolphinsAvgData1 = calculateAverage(DolphinsScoreData1)
console.log(DolphinsAvgData1);

var KoalasAvgData1 = calculateAverage(KoalasScoreData1)
console.log(KoalasAvgData1);

//2. Compare the team's average scores to determine the winner of the competition,and print it to the console.Don 't forget that there can be a draw, so test for that as well(draw means they have the same average score)
if (DolphinsAvgData1 === KoalasAvgData1) {
    console.log("Draw!");
} else if (DolphinsAvgData1 > KoalasAvgData1) {
    console.log("Dolphins is winner!");
} else {
    console.log("Koalas is winner!");
}

//3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks
var DolphinsAvgDataBonus1 = calculateAverage(DolphinsScoreDataBonus1)
var KoalasAvgDataBonus1 = calculateAverage(KoalasScoreDataBonus1)

if (DolphinsAvgDataBonus1 >= 100 && DolphinsAvgDataBonus1 > KoalasAvgDataBonus1) {
    console.log("Dolphins is winner!");
} else if (KoalasAvgDataBonus1 >= 100 && KoalasAvgDataBonus1 > DolphinsAvgDataBonus1) {
    console.log("Koalas is winner!");
} else {
    console.log("No team win!");
}

//4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy
var DolphinsAvgDataBonus2 = calculateAverage(DolphinsScoreDataBonus2)
var KoalasAvgDataBonus2 = calculateAverage(KoalasScoreDataBonus2)

if (DolphinsAvgDataBonus2 >= 100 && KoalasAvgDataBonus2 >= 100) {
    if (DolphinsAvgDataBonus2 === KoalasAvgDataBonus2) {
        console.log("Draw!");
    } else if (DolphinsAvgDataBonus2 > KoalasAvgDataBonus2) {
        console.log("Dolphins is winner!");
    } else {
        console.log("Koalas is winner!");
    }
}

/*Coding Challenge #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.*/
//D
//1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement � (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
var tip = []

function calculateTips(bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15
    }
    return bill * 0.2
}

function calTipsTernaryOperator(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
}

bill = [275, 40, 430]

tip[0] = calTipsTernaryOperator(bill[0])
tip[1] = calTipsTernaryOperator(bill[1])
tip[2] = calTipsTernaryOperator(bill[2])
console.log(tip);

//2. Print a string to the console containing the bill value, the tip, and the final value(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25”
function calculateTotalBill(bill) {
    return bill + calTipsTernaryOperator(bill)
}

console.log(`The bill was ${bill[0]}, the tip was ${tip[0]}, and the total value ${calculateTotalBill(bill[0])}`);