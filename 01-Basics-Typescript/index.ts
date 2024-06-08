//! Basic primitive types
// let userName: string = "Remo"
// let userAge: number = 23
// let isValid: boolean = true

//! Union types
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

//TODO: We can depend on the type inference too as typescript automatically knows the return type but it's good to explicitly define the return type (void or any datatype)

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
//TODO: function
// type AddFn = (a: number, b: number) => number;
// function calculate(a: number, b: number, calcFn: AddFn) {
//   calcFn(a, b);
// }
// calculate(2, 5, add);

//TODO: union types
// type StringOrNum = string | number;
// let userID: StringOrNum = "abc123"

//TODO: object
// type User = {
//   name: string;
//   age: number;
//   isAdmin: boolean;
//   id: string | number;
// };

// let user: User;
// user = {
//   name: "Remo",
//   age: 24,
//   isAdmin: true,
//   id: "abc", // 123
// };

//! Defining object types with interfaces
// interface Credentials {
//   email: string;
//   password: string;
// }

// let creds: Credentials;
// creds = {
//   email: "abc@gmail.com",
//   password: "abc123",
// };

//TODO: So to define the object types we can use both custom type and interfaces

//! Interfaces vs custom types
/*
  1. Interfaces can be used to define function types but we cannot use interface to store a union type

  2. Interfaces can be used for classes rather than using the custom type
*/

//! Merging types and interface
//TODO: custom types
// type Admin = {
//   permissions: string[];
// };
// type User = {
//   userName: string;
// };
// type AppAdmin = Admin & User;

//TODO: interface
// interface Admin {
//   permissions: string[];
// }
// interface User {
//   userName: string;
// }
// interface AppAdmin extends Admin, User {}

// let admin: AppAdmin;
// admin = {
//   permissions: ["login"],
//   userName: "Remo",
// };

// let role: "admin" | "user" | "editor";
// role = "admin";
// role = "user";
// role = "editor";

//! Adding type guards
// type Role = "admin" | "user" | "editor";
// let role: Role;
// role = "admin";
// role = "user";
// role = "editor";

// function performAction(action: string | number, role: Role) {
//   if (role === "admin" && typeof action === "string") {
// ...
//   }
// }

//! Generic types
//TODO: A type that requires another type (works together) like an array needs more information (type of value stored in the array)

// type Role = "admin" | "user" | "editor";
// let roles: Array<Role>;
// let roles: Role[];
// roles = ['admin', 'user']

//TODO: Custom generic types
// type DataStorage<T> = {
//   storage: T[];
//   add: (data: T) => void;
// };

// const textStorage: DataStorage<string> = {
//   storage: [],
//   add(data) {
//     this.storage.push(data);
//   },
// };

// type User = {
//   name: string;
//   age: number;
//   isAdmin: boolean;
//   id: string | number;
// };

// const userStorage: DataStorage<User> = {
//   storage: [],
//   add(user) {
//     this.storage.push(user);
//   },
// };

// function merge<T, U>(a: T, b: U) {
//   return { ...a, ...b };
// }
// const newUser = merge<{ name: string }, { age: number }>(
//   { name: "Remo" },
//   { age: 24 }
// );

//? Typescript still gets the type of the values
// const newUser = merge({ name: "Remo" }, { age: 24 });
