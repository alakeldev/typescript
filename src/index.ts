// console.log(Math.floor(10.5));


// let theName: string = "Alakel";
// let theAge: number = 30;
// let hire: boolean = true;
// let all: any = "Abode developer";
// let allVars;  // here the type is any by default

// theName = "Abdullah";

// all = 100;

// function add(n1: number, n2: number) {
//     return n1 + n2;
// }

// console.log(add(5, 5));





// let all = "Alakel"; // here it's string by default becuase of the assigned value



// let all; // here it's any so you can assign it below to it any value you want
// all = "A";
// all = 100;
// all = true;


// let all: string | number | boolean = "Abdullah";
// all = "alakel";
// all =  100;
// all = true;


// let myFriends: string[] = ["Alakel", "Abdullah", "Lola"];

// for (let i=0; i < myFriends.length; i++ ) {
//     console.log(myFriends[i].repeat(3));
// }




// type annotation with multidimensional arrays

// let arrayOne: number[] = [1, 2, 3, 4, 5];
// let arrayTwo: string[] = ["A", "B", "C"];
// let arrayThree: (string | number)[] = [1, 2, 3, 4, "A", "B", "C"];

// let arrayFour: (string | number | string[] | boolean)[] = [1, 2, 3, 4, "A", "B", ["C", "D"], true, false];




// Type annotations with functions

// noImplicitAny => if this inside tsconfig is false that's meaning that do not make an error if you see any 

// noImplicitReturns
// - With check all code paths in a functions to ensure they return a value

// noUnusedLocals
// Report Errors on Unused Local Variables

// noUnusedParameters
// Report Errors On Unused Parameters In Functions.

// let showMsg = true;

// function showDetails(name: string, age: number, salary: number) : string {
//     let test = 10;

//     if(showMsg) {
//         return `Hello ${name}, Age is ${age}, Salary is ${salary}, Test Variable ${test}`;
//     }
//     return `No data to show`;
// }

// console.log(showDetails("Alakel", 30, 5000));




// Function
// Optional and Default parameters

// in Javascript, every parameter is optional => "undefined" If you didn't use it
// "?" optional parameter

// function showData(name: string, age?: number, country?: string) {
//     return `${name} - ${age} - ${country}`;
// }

// console.log(showData("Alakel", 30, "Syria"))




// Function Rest Paramter
// What about Float => All is under type number

// function addAll(...nums: number[]) : number {
//     let result = 0;

//     // for(let i = 0; i < nums.length; i++) {
//     //     result += nums[i];
//     // }

//     nums.forEach((num) => result += num)
//     return result;
// }

// console.log(addAll(10, 20, 30, 100, 10.5, +true));