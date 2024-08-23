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