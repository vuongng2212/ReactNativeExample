//1. Create an array 'bills' containing all 10 test bill values
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]

//2. Create empty arrays for the tips and the totals ('tips' and 'totals')
const tips = []
const totals = []

//3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
const calcTip = (bill) => {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15
    }
    return bill * 0.2
}

for (let i = 0; i < bills.length; i++) {
    const bill = bills[i];
    const tip = calcTip(bill);
    tips.push(tip);
    totals.push(bill + tip);
}

console.log('Bills:', bills);
console.log('Tips:', tips);
console.log('Totals:', totals);

//4. Bonus
const calcAverage = (arr) => {
    // 4.1: Initialize sum variable and loop through the array
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    // 4.2: Calculate the average
    const average = sum / arr.length;

    return average;
}

//4.3 Call the function with the 'totals' array
const avgTotal = calcAverage(totals);
console.log('Average Total:', avgTotal);