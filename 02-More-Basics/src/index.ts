//! Functions
// function sum(a: number,b: number): number {
//   return a + b;
// }
// console.log(sum(10, 20))

// ----------------------------------------

//! Arrays
// const arr: number[] = [10,20,30,40,50]
// const arr2: string[] = ["Remo", "Ram", "Shyam"]

// const arr: Array<number> = [10, 20, 30, 40, 50];
// const arr2: Array<string> = ["Remo", "Ram", "Shyam"];
// const arr3: Array<string | number> = [10, 20, "Remo"];

// ----------------------------------------

//! Objects
// type User = {
//   name: string;
//   age: number;
//   place: string;
//   gender?: string; // optional value
// }

// interface User {
//   name: string;
//   age: number;
//   place: string;
//   gender?: string;
// }

// type Food = (food: string) => void;

// interface UpdatedUser extends User {
//   bloodGroup: string;
//   details: () => void;
//   favFood: Food;
// }

// const user1: User = {
//   name: "Remo",
//   age: 24,
//   place: "kpa",
// };

// const user2: User = {
//   name: "Ram",
//   age: 29,
//   place: "usa",
//   gender: "male",
// };

// const updatedUser: UpdatedUser = {
//   name: "Shubham",
//   age: 26,
//   place: "delhi",
//   bloodGroup: "A+",
//   details: function () {
//     console.log(`Hey! My Name is ${this.name} and I am ${this.age} years old`);
//   },
//   favFood(food) {
//     console.log(`I Love ${food}`);
//   },
// };

// updatedUser.favFood("Biriyani")

// ----------------------------------------

//! Functions
//TODO: Optional Parameter
// type FuncType = (a: number, b: number, c?: number) => void;

// const func: FuncType = (a, b, c) => {
//   if(typeof c === "undefined"){
//     return "C is not present"
//   }
//   console.log(`Result: ${a * b * c}`);
// };

// func(10, 20, 30);

//TODO: Rest Operator
// type FuncType = (...nums: Array<Number>) => void;
// const func: FuncType = (...nums) => {
//   console.log(nums);
// };

// function func(...nums: Array<Number>): void {
//   console.log(nums)
// }

// const func = function(...nums: Array<Number>): void{
// console.log(nums)
// }
// func(10,20,30,40,50)

// ----------------------------------------

// //! Function with Objects
// interface Product {
//   name: string;
//   stock: number;
//   price: number;
//   photo: string;
// }

// type GetData = (product: Product) => void;

// const getData: GetData = (product: Product) => {
//   console.log(product);
// };

// const productOne: Product = {
//   name: "Macbook",
//   stock: 45,
//   price: 10000,
//   photo: "photoUrl",
// };
// getData(productOne)

//! Never Type
// const errorHandler = (): never => {
//   throw new Error()
// }

// ----------------------------------------

//! Type Assertion and How to select DOM elements
// const btn = document.getElementById("btn") as HTMLElement;
// const btn = <HTMLElement>document.getElementById("btn");
// const btn = document.getElementById("btn")!;
// btn.onclick;

// const img = document.getElementById("myimg") as HTMLImageElement;
// img.src;

// const form = document.querySelector("#myform") as HTMLFormElement;
// const textInput = document.querySelector("#name") as HTMLInputElement;
// const ageInput = document.querySelector("#age") as HTMLInputElement;

// form.onsubmit = (e: SubmitEvent) => {
//   e.preventDefault();
//   const name = textInput.value;
//   const num = Number(ageInput.value);

//   const div = document.createElement("div");
//   div.textContent = `Name: ${name} | Age: ${num}`;
//   document.body.append(div);

//   textInput.value = ""
//   ageInput.value = ""
// };

// interface User{
//     [key: string]: string;
// }

// const user: User = {
//     name: "Remo",
//     email: "abc@gmail.com",
//     place: "kpa",
// }

// ----------------------------------------

//! Type Utility

//TODO: Partial<Type>
// type User = {
//     name: string,
//     email: string
// }
// type User2 = Partial<User>

//TODO: Required<Type> - opposite of partial
// type User = {
//     name?: string,
//     email: string
// }
// type User2 = Required<User>
// const user: User2 = {
//     name: "Remo",
//     email: "abc@gmail.com"
// }

//! Generics
//TODO: Example 1
// const func = <CustomType>(data: CustomType): void => {
//     console.log(data)
// }
// const num = func<number>(20)
// const string = func<string>("Remo")
// const bool = func<boolean>(true)

// type Person = {
//   name: string;
//   age: number;
// };

//TODO: Example 2
// const func = <CustomType>(data: CustomType): void => {
//   console.log(data);
// };
// const person1: Person = {
//   name: "Remo",
//   age: 24,
// };
// func<Person>(person1);

//TODO: Example 3
// const func = <T, U>(a: T, b: U): void => {
//   console.log(`Output is ${a} and ${b}`);
// };
// func<number, number>(10, 20);
// func<string, string>("Remo", "Ram");
// func<string, number>("Remo", 24);

//TODO: Example 4
// const func = <T, U>(a: T, b: U): { a: T; b: U } => {
//   return { a, b };
// };
// const result = func<number, string>(24, "Remo");
// console.log(result)

//TODO: Example 5
// type User = {
//   name: string;
//   age: number;
// };

// type User2 = {
//   name: string;
//   age: number;
//   email: string;
// };

// const user1: User = {
//   name: "Remo",
//   age: 24,
// };

// const user2: User2 = {
//   name: "Remo",
//   age: 24,
//   email: "remo@gmail.com",
// };

// const func = <T, U>(n: T, o: U): { n: T; o: U } => {
//   return { n, o };
// };

// const ans = func<User,User2>(user1, user2);
// console.log(ans)

// TODO: Example 6
// interface User {
//   name: string;
//   age: number;
// }

// const users: Array<User> = [
//   {
//     name: "Remo",
//     age: 24,
//   },
//   {
//     name: "Ram",
//     age: 53,
//   },
//   {
//     name: "Shyam",
//     age: 28,
//   },
//   {
//     name: "Shubham",
//     age: 64,
//   },
//   {
//     name: "Ramu",
//     age: 34,
//   },
// ];

// const filterByPeople = <T, U extends keyof T>(
//   arr: T[],
//   property: U,
//   value: T[U]
// ) => {
//   return arr.filter((item) => item[property] === value);
// };

// const filteredPeopleByName = filterByPeople(users, "name", "Remo");
// const filteredPeopleByAge = filterByPeople(users, "age", 64);
// console.log(filteredPeopleByName)
// console.log(filteredPeopleByAge)