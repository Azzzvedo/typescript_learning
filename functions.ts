function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number) {
  console.log("Result: " + num);
}

function addAndHandle(n1: number, n2: number, cb: (a: number) => void) {
  cb(add(n1, n2));
}

printResult(add(5, 12));

let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = 5
// combineValues = printResult;

console.log(combineValues(5, 7));

addAndHandle(10, 20, printResult);
