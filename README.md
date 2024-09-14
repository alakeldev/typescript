# typescript

- Typescript is a strongly typed programming language that builds on Javascript.
- Typescript developed and maintained by microsoft.
- Typescript is javascript with types.
- Typescript add features to javascript without changing it.

## Why we need to learn typescript

- Detect errors without running the code "Static type checking".
- Analyze the Code while you type it.
- Save some unit tests as the error show while writing.
- Every JS file is Valid TS file.
- Will help you when you write React, Vue, Angular Apps.
- Gives You the missing features in JS like "Interfaces, Generics, Decorators".

## How Typescript works

- Typescript compiler compile TS code into JS code 'This operation called Transpilation'.
- How about the new features ? Workaround.


## install typescript global on you system

- npm i -g typescript

## check which version from Typescript you have

- tsc -v

- to get the compiled version from the typescript file that you are working on and get it with Javscript version write on terminal as per below :

- tsc filename.ts

It will create new file with .js  => Transpilation


- to make watch on any change of the .ts file and reflecting this change on .js files

to get help from the tsc command you gonna write on terminal:

- tsc -h

to watch you gonna write in terminal:

- tsc -w filename.ts  

above it starting watching and direct make change on the files after save it


## below to create file tsconfig.json

tsc --init

this file is very important to edit and understand what is has inside it like below:

- "rootDir": "./src",                                  /*Specify the root folder within your source files.*/
- "sourceMap": true,                                /*Create source map files for emitted JavaScript files.*/
- "outDir": "./dist",                                   /*Specify an output folder for all emitted files. */
- "removeComments": true,                           /* Disable emitting comments.*/

## Statically typed Language like [Rust, C, C++]

- Variables Types are static, once decalre it you cannot be change
- type of variables is known at compile time "do type checking at compile-time"
- Have better preformance at Run-Time du to not needing to check types Dynamically
- Error detected earlier

## Dynamically typed language like [PHP, Python, Javascript]

- Variables Types are Dynamic, you can always change it
- "Type check at execution-time"
- Error can be detected after execution



## Type annotations || Signature

- Indicate the data type of variables
- Indicate The data type of Functions Input/Output
- Objects, etc.

Examples to understand below:

let theName: string = "Alakel";
let theAge: number = 30;
let hire: boolean = true;
let all: any = "abode developer";
let allVars;  // here the type is any by default

theName = "Abdullah";

all = 100;

function add(n1: number, n2: number) {
    return n1 + n2;
}

console.log(add(5, 5));

## Type annotations with arrays

let myFriends: string[] = ["Alakel", "Abdullah", "Lola"];

for (let i=0; i < myFriends.length; i++ ) {
    console.log(myFriends[i].repeat(3));
}

## Type annotations with multidimensional arrays

let arrayOne: number[] = [1, 2, 3, 4, 5];
let arrayTwo: string[] = ["A", "B", "C"];
let arrayThree: (string | number)[] = [1, 2, 3, 4, "A", "B", "C"];

let arrayFour: (string | number | string[] | boolean)[] = [1, 2, 3, 4, "A", "B", ["C", "D"], true, false];

## Type annotations with functions

// noImplicitAny => if this inside tsconfig is false that's meaning that do not make an error if you see any

// noImplicitReturns
// - With check all code paths in a functions to ensure they return a value

// noUnusedLocals
// Report Errors on Unused Local Variables

// noUnusedParameters
// Report Errors On Unused Parameters In Functions.

let showMsg = true;

function showDetails(name: string, age: number, salary: number) : string {
    let test = 10;

    if(showMsg) {
        return `Hello ${name}, Age is ${age}, Salary is ${salary}, Test Variable ${test}`;
    }
    return `No data to show`;
}

console.log(showDetails("Alakel", 30, 5000));

## Function optional and default parameters

// Function
// Optional and Default parameters

// in Javascript, every parameter is optional => "undefined" If you didn't use it
// "?" optional parameter

function showData(name: string, age?: number, country?: string) {
    return `${name} - ${age} - ${country}`;
}

console.log(showData("Alakel", 30, "Syria"))


above we have two parameters optional age and country if you didn't provid them a value it will return the undefined value as default becuase of ? without any error showing


## Function Rest Paramter

// What about Float => All is under type number

function addAll(...nums: number[]) : number {
    let result = 0;

    // for(let i = 0; i < nums.length; i++) {
    //     result += nums[i];
    // }

    nums.forEach((num) => result += num)
    return result;
}

console.log(addAll(10, 20, 30, 100, 10.5, +true));
