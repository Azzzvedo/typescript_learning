interface Person {
  name: string;
  age: number;
  greet(phrase: string): void;
}

const ian: Person = {
  name: "ian",
  age: 33,
  greet(phrase) {
    console.log(phrase);
  },
};
