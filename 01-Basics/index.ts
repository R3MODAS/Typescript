//! Basic primitive types
// let userName: string = "Remo"
// let userAge: number = 23
// let isValid: boolean = true

//! Combining types
// Union Types
// let userID: string | number = "randomId"
// userID = 123

//! Avoiding typescript error
// let user;
// user = {
//     name: "Remo",
//     age: 24,
//     isAdmin: true,
//     id: "abc" // 123
// }

//! Working with object types
// let user: object; // avoiding the error for now
// let user: {
//   name: string;
//   age: number;
//   isAdmin: boolean;
//   id: string | number;
// };

// user = {
//   name: "Remo",
//   age: 24,
//   isAdmin: true,
//   id: "abc", // 123
// };
// user = {} //? Not a valid object now as we have defined the properties for the object

//! Working with array types
// let hobbies: Array<string>;
// let hobbies: string[];
// hobbies = ["Sports", "Cooking", "Reading"];

//! Adding types to function parameters
// function add(a: number, b: number): void {
//   const result = a + b;
//   console.log(result);
// }

// function add(a: number, b: number): number {
//   const result = a + b;
//   return result;
// }

//? We can depend on the type inference too as typescript automatically knows the return type but it's good to explicitly define the return type (void or any datatype)

//! Defining function types
// function calculate(
//   a: number,
//   b: number,
//   calcFn: (a: number, b: number) => number
// ) {
//   calcFn(a, b);
// }
// calculate(2, 5, add);

//! Custom type definition aliases
//? function
type addFn = (a: number, b: number) => number;
// function calculate(a: number, b: number, calcFn: addFn) {
//   calcFn(a, b);
// }
// calculate(2, 5, add);

//? different types
type stringOrNum = string | number;
// let userID: stringOrNum = "abc123"

//? object
type User = {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
};

let user: User;
user = {
  name: "Remo",
  age: 24,
  isAdmin: true,
  id: "abc", // 123
};
