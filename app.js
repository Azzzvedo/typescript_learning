function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result: " + num);
}
function addAndHandle(n1, n2, cb) {
    cb(add(n1, n2));
}
printResult(add(5, 12));
var combineValues;
combineValues = add;
// combineValues = 5
// combineValues = printResult;
console.log(combineValues(5, 7));
addAndHandle(10, 20, printResult);
