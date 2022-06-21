// combine function that favours type coercion to number rather than to string

function combine(input1: number | string, input2: number | string, resultConversion?: "as-text" | "as-number") {
  let result;
  if (typeof input1 === "number" || typeof input2 === "number" || resultConversion === "as-number") result = +input1 + +input2;
  if (resultConversion === "as-text") result = input1.toString() + input2.toString();
  return result;
}

const combinedNums = combine(10, 15);
console.log(combinedNums);

const combinedAges = combine(30, 25, "as-number");
console.log(combinedAges);

const combinedNames = combine("Ian", "Rebecca", "as-text");
console.log(combinedNames);

const combinedAges2 = combine(24, "23");
console.log(combinedAges2);
