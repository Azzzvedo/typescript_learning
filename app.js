function add(n1, n2, printResult, resultPhrase) {
    var result = n2 + n2;
    if (printResult) {
        console.log(resultPhrase, result);
    }
    else {
        return result;
    }
}
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var resultPhrase = "Result is: ";
var result = add(number1, number2, printResult, resultPhrase);
