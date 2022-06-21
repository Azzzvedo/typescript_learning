// combine function that favours type coercion to number rather than to string

function combine(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === "number" || typeof input2 === "number") {
    result = +input1 + +input2;
  } else if (typeof input1 === "string" || typeof input2 === "string") {
    result = input1 + input2;
  }
  return result;
}

const combinedAges = combine(30, 25);
console.log(combinedAges);

const combinedNames = combine("Ian", "Rebecca");
console.log(combinedNames);
