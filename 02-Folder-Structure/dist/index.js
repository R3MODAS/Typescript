"use strict";
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
//! Optional Parameter
// type FuncType = (a: number, b: number, c?: number) => void;
// const func: FuncType = (a, b, c) => {
//   if(typeof c === "undefined"){
//     return "C is not present"
//   }
//   console.log(`Result: ${a * b * c}`);
// };
// func(10, 20, 30);
//! Rest Operator
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
//! Type Assertion
// const btn = document.getElementById("btn") as HTMLElement;
// const btn = <HTMLElement>document.getElementById("btn");
const btn = document.getElementById("btn");
btn.onclick;
const img = document.getElementById("myimg");
img.src;
