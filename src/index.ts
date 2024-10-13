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




// Type anotations anonymous and arrow function

// const add = function(num1: number, num2: number) : number {
//     return num1 + num2;
// }

// console.log(add(10,20));

// const addWithArrow = (num1: number, num2: number) : number => num1 + num2;

// console.log(addWithArrow(10,20))



// Data types , type alias

// type st = string;

// let theName: st = "Alakel";
// theName = "Abdullah";

// type standnum = string | number;

// let all: standnum = 10;
// all = 100;
// all = "Abdullah";


// Data types, type alias advanced

// type Buttons = {
//     up: string,
//     right: string,
//     down: string,
//     left: string
// }

// type Last = Buttons & {
//     x: boolean
// }

// function getActions(btns: Last) {
//     console.log(`Action For Button Up Is ${btns.up}`)
//     console.log(`Action For Button right Is ${btns.right}`)
//     console.log(`Action For Button down Is ${btns.down}`)
//     console.log(`Action For Button left Is ${btns.left}`)
// }

// getActions({up: "Go Up", right: "Go Right", down: "Go Down", left: "Go Left", x: true})




//Data Types: Literal Types

// type nums = 0 | 1 | -1;

// function comapre(num1: number, num2: number): nums {
//     if (num1 === num2) {
//         return 0;
//     }
//     else if (num1 > num2) {
//         return 1;
//     }
//     else {
//         return -1;
//     }
// }

// console.log(comapre(20, 20)); //0
// console.log(comapre(20, 15)); //1
// console.log(comapre(15, 20)); //-1

// let myNumber: nums = 100; // here error becuase you can assign number 100 to nums becuase its type only 0 | 1 | -1

// above we made custom type we can use it as a type in our project and what we can to return from the veriables or functions



// Data Type: Tuple

// Tuple
// Is Another Sort Of Array Type
// We knows exactly how many elements it contains 
// We knows which types it contains at specific positions

// let article : readonly [number, string, boolean] = [11, "Title One", true];

// article = [12, "Title Two", false];

// // article.push(100); with readonly obove you cannot push new element to the tuple if you remove readonly you can push new items to it

// console.log(article);

// const [id, title, published] = article;   // Distructuring operation here create new variables and set its values from the tuple above

// console.log(id); // 12
// console.log(title);  // Title Two
// console.log(published); // false



// Data Types
// Void
// Function that will return nothing
// Function In javascript tat not return a value will show undefined
// undefined is not void
// Never
// Return Type never Returns
// The function Doesnot Have a normal completion
// It throws an error or never finishes running at all "Infinite Loop"



// Data Types

// Void
// Function that will return nothing (nothing = no value return )
// Function in Javascript that not return a value will show undefined
// undefined is not void

// Never
// Return type never returns
// The function does not have a normal completion
// It throws an error or Never Finishes Running at all "Infinite Loop"

// function loggging(msg: string) {
//     console.log(msg);
// }

// console.log(loggging("I'm A Message"))

// above will return as per below:


// I'm A Message
// undefined


// function loggging(msg: string) {
//     console.log(msg);
//     return msg;
// }

// console.log(loggging("I'm A Message"))


// above will return as per below:

// I'm A Message
// I'm A Message




// below cannot return while set void to the function
// function loggging(msg: string) : void {
//     console.log(msg);
//     return;
// }

// console.log(loggging("I'm A Message"))
// console.log("Test");


// const fail = (msg: string) => {
//     throw new Error(msg);
//     // return 10;  // unreachable code
// }

// function alwaysLog(name: string) : never {
//     while(true) {
//         console.log(name)
//     }
// }

// alwaysLog("Alakel");
// console.log("Test");  here unreachable code detected becuase the function above no end point and will not end and this code will not work



// Data Types
// Enums => Enumerations
//      - Allow use to decalre a set of named contants
//      - Used For logical grouping collection of contants "Collection of related Values"
//      - It Organize Your code 
//      - By Default Enums are Number-Based, First Element is 0
//      - There is a Numeric Enums
//      - There is a String-Based Enums
//      - There is Heterogeneous Enums [String + Number]



// const KIDS = 15;
// const EASY = 10;
// const MEDIUM = 6;
// const HARD = 3;



// const enum Level {
//     Kids = 15,
//     Easy = 10,
//     Medium = 6,
//     Hard = 3,
// }

// let lvl: string = "Easy";

// if(lvl ==="Easy") {
//     console.log(`The Level is ${lvl} and Number of Seconds is ${Level.Easy}`);
// }



// Enums => Enumerations

    // Enum can refer to other Enum
    // Enum can refer to same Enum
    // Enum can have calculations
    // Enum can Have functions

// function getEasySeconds() : number {
//     return 3;
// }


// enum Kids {
//     Five = 25,
//     Seven = 20,
//     Ten = 15,
// }

// enum Level {
//     Kid = Kids.Ten,
//     Easy = getEasySeconds(),
//     Medium = Easy,
//     Hard = Medium + 5,
// }

// let lvl: string = "Easy";

// if(lvl ==="Easy") {
//     console.log(`The Level is ${lvl} and Number of Seconds is ${Level.Easy}`);
// }





// Data Types
// Type Assertions  تأكيد النوع
// - Something Complier doesnot know that information we do 
//  - TypeScript is not performing any check to make sure type assertion is valid

// let myImg = document.getElementById("my-img") as HTMLImageElement;
// let myImg = <HTMLImageElement> document.getElementById("my-img");
// console.log(myImg.src);


// Here it's correct becuase the "1000" is string 
// let data: any = "1000";
// console.log((data as string).repeat(2));


// below it cause an error becuase it not a string 1000 it's a number but in console becuase it will not check to make sure after type assetion
// let data: any = 1000;
// console.log((data as string).repeat(2));



// Data Types
// Union and Intersection Types

// Union Type
// the | symbol is used to create the union => "Or"

// Intersection Type
// Is a type that combines several types into one
// the & symbol is used to create an intersection => "And"

// If a Union is an OR, then An intersection is An AND

// let all: number | string = 100;


// type A = {
//     one: string,
//     two: number,
//     three: boolean
// }

// type B = A & {
//     four: number
// }

// type C = {
//     five: Boolean
// }

// type mix = A & C;

// function getActions(btns: mix) {
//     console.log(`Hello ${btns.one}`);
//     console.log(`Hello ${btns.two}`);
//     console.log(`Hello ${btns.three}`);
//     console.log(`Hello ${btns.five}`);
// }


// getActions({one: "String", two: 100, three: true, five: false});
