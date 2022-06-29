/*
const names: Array<string> = ["Max", "Manuel"];

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('This is done!')
  }, 2000)
})

promise.then(data => {
  data.split(' ');
})
*/

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObjects = merge({ firstName: "Ian" }, { age: 33 });

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value.";
  if (element.length > 0)
    descriptionText = `Got ${element.length} element${
      element.length === 1 ? "" : "s"
    }.`;
  return [element, descriptionText];
}

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}

extractAndConvert({ thing1: "thing", e: "234324" }, "e");
