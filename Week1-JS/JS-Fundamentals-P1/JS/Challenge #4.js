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