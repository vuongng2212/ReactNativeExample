//Map
Array.prototype.myMap = function(callback) {
    const resultArray = [];
    for (let index = 0; index < this.length; index++) {
        resultArray.push(callback(this[index], index, this));
    }
    return resultArray;
}
const arr = [1, 2, 3, 4, 5, 6, 8, 10]
const doub = arr.myMap(i => i * 2)

// console.log(arr);
// console.log(doub);

//Filter
Array.prototype.myFilter = function(callback) {

    var arr = [];

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i]) == true) {
            arr.push(this[i]);
        }

    }

    return arr;
}

// const rs = arr.myFilter(i => i > 5)
// console.log(rs);

//Reduce
Array.prototype.myReduce = function(callback) {
    var a = 0;
    for (let i = 0; i < this.length; i++) {
        callback(a = a + this[i])
    }
    return a;
}

// const bill = 100
// const result = arr.myReduce((bill, i) => bill + i)
// console.log(result);

//find 
// Array.prototype.myFind = function(callback) {
//     for (let i = 0; i < array.length; i++) {
//         if (callback.call(thisArg, array[i], i, array)) {
//             return array[i];
//         }
//     }
//     return false;
// }

// const found = arr.myFind(num => num > 5);
// console.log(found);

//Any
Array.prototype.myAny = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return true;
        }
    }
    return false;
}

// rs = arr.myAny(i => i > 3);
// console.log(rs);

Array.prototype.mySome = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return true;
        }
    }
    return false;
}

// rs = arr.mySome(i => i > 4)
// console.log(rs);