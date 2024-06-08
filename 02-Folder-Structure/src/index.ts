//! Functions
// function sum(a: number,b: number): number {
//   return a + b;
// }
// console.log(sum(10, 20))

//! Arrays
// const arr: number[] = [10,20,30,40,50]
// const arr2: string[] = ["Remo", "Ram", "Shyam"]

// const arr: Array<number> = [10, 20, 30, 40, 50];
// const arr2: Array<string> = ["Remo", "Ram", "Shyam"];
// const arr3: Array<string | number> = [10, 20, "Remo"];

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

//! Functions
// defining type
type FuncType = (a: number, b: number, c: number) => void;

const func: FuncType = (a, b, c) => {
  console.log(`Result: ${a * b * c}`);
};

func(10, 20, 30);
