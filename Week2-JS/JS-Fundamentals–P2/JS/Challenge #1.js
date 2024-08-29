// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!

//1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
const calcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3;
}

//2. Use the function to calculate the average for both teams
const avgDolphins1 = calcAverage(44, 12, 71)
const avgKoalas1 = calcAverage(65, 54, 49)
    // console.log(avgDolphins);
    // console.log(avgKoalas);

//3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)"
const checkWinner = (avgDolhins, avgKoalas) => {
    if (avgDolhins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolhins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolhins) {
        console.log(`Koalas win ${avgKoalas} vs. ${avgDolhins}`);
    } else {
        console.log("Draw");
    }
}

//4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2
const avgDolphins2 = calcAverage(85, 54, 41)
const avgKoalas2 = calcAverage(23, 34, 27)

checkWinner(avgDolphins1, avgKoalas1)
checkWinner(avgDolphins2, avgKoalas2)

//5. Ignore draws this time
const checkWinnerIgnoreDraw = (avgDolhins, avgKoalas) => {
    if (avgDolhins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolhins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolhins) {
        console.log(`Koalas win ${avgKoalas} vs. ${avgDolhins}`);
    }
}
checkWinnerIgnoreDraw(avgDolphins1, avgKoalas1)