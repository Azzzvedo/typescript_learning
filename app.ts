enum Role {
  ADMIN = 5,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

// console.log(person.name);

for (const hobby of person.hobbies) {
  // console.log(hobby.toUpperCase());
}

// tuple exception
// person.role.push("admin");

// console.log(person.role);
if (person.role === Role.ADMIN) {
  console.log("admin");
}
