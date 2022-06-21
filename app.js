// combine function that favours type coercion to number rather than to string
// function takes optional third param to force string or number conversion
function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === "number" || typeof input2 === "number" || resultConversion === "as-number")
        result = +input1 + +input2;
    if (resultConversion === "as-text")
        result = input1.toString() + input2.toString();
    return result;
}
var combinedNums = combine(10, 15);
console.log(combinedNums);
var combinedAges = combine(30, 25, "as-number");
console.log(combinedAges);
var combinedNames = combine("Ian", "Rebecca", "as-text");
console.log(combinedNames);
var combinedAges2 = combine(24, "23");
console.log(combinedAges2);
