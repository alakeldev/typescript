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




// Type Anotations with Object

// let myObject: {
//     readonly username: string,
//     id: number,
//     hire?: boolean, 
//     skills: {
//         one: string,
//         two: string
//     }
// } = {
//     username: "Alakel",
//     id: 100,
    // hire: false, becuase above the hire ? so it's no required and not cause an error if not written here!!!
//     skills: {
//         one: "html",
//         two: "css"
//     }
// };


// myObject.username = "Abdullah";    Error becuase it'S a read only cannot update its value
// myObject.id = 101;
// myObject.hire = false;


// console.log(myObject.username);
// console.log(myObject.id);
// console.log(myObject.hire);
// console.log(myObject.skills.one);
// console.log(myObject.skills.two);




// Interface
// Interface Declaration
// Serve Like Types
// The Interface Describes The Shape Of an Object
// It defines the syntax to follow

// Use With Object
// Use with Function
// Use Read only and Optional Operator

// interface User {
//     id: number,
//     username: string,
//     country: string
// }

// let user: User = {
//     id: 100,
//     username: "Alakel",
//     country: "Syria"
// }

// console.log(user);


// // Example with function

// function getData(data: User) {
//     console.log(`id is ${data.id}`);
//     console.log(`username is ${data.username}`);
//     console.log(`country is ${data.country}`);
// }

// getData({ id:200, username: "Alakel", country: "SY-Damascus" });



// Interface Method and Parameters

// interface User {
//     id: number,
//     username: string,
//     country: string,
//     sayHello() : string,
//     sayWelcome: () => string,
//     getDouble(num: number) : number
// }

// let user: User = {
//     id: 100,
//     username: "Alakel",
//     country: "Syria",
//     sayHello() {
//         return `Hello ${this.username}`;
//     },
//     sayWelcome: () => {
//         return `Welcome ${user.username}`;
//     },
//     getDouble(n) {
//         return n * 2;
//     }

// }

// console.log(user.id);
// console.log(user.sayHello());
// console.log(user.sayWelcome());
// console.log(user.getDouble(100));



// Interface ReOpen and use cases

// // Home Page:
// interface Settings {
//     theme: boolean;
//     font: string;
// }

// //  Articiles Page:
// interface Settings {
//     sidebar: boolean;
// }

// // Contact Page
// interface Settings {
//     external: boolean;
// }



// let userSettings: Settings = {
//     theme: true,
//     font: "Open Sans",
//     sidebar: false,
//     external: true
// }





// Interface Extend

// interface User {
//     id: number;
//     username: string;
//     country: string;
// }

// interface Moderator extends User{
//     role: string | number
// }

// interface Admin extends User, Moderator{
//     protect: boolean;
// }

// let user: Admin = {
//     id: 100,
//     username: "Alakel",
//     country: "Syria",
//     role: "Mod",
//     protect: true
// }

// console.log(user.id);




// Interface Final Discussion
// Interface vs Type Aliases
// Take a look on HTMLelement Interface

// let el = document.getElementById("id") as HTMLElement;




// Class Type Annotations (Type Annotations with Class)


// class User {
//     u: string;
//     s: number;
//     msg: () => string;
//     constructor(username: string, salary: number) {
//         this.u = username;
//         this.s = salary;
//         this.msg = function() {
//             return `Hello ${this.u} Your Salary Is ${this.s}`;
//         }
//     }
//     sayMsg() {
//         return `Hello ${this.u} Your Salary Is ${this.s}`;
//     }
// }

// let userOne = new User("Alakel", 5000);

// console.log(userOne.u);
// console.log(userOne.s);
// console.log(userOne.msg());
// console.log(userOne.sayMsg());


// Class Access Modifiers and Parameters Properties

// Public 
// All Members Of a Class in Typescript are public
// All Public members can be accessed anythwere without any Restrictions

// Private
// Members are visible only to that class and are not accessible outside the class

// Protected
// Same like private but can be accessed using the deriving class

// Typescript is a layer on top of Javascript
// It should remove all annotations and although access modifiers "Private for example"


// class User {
//     msg: () => string;
//     constructor(private username: string, protected salary: number, public readonly address: string) {
//         this.msg = function() {
//             return `Hello ${this.username} Your Salary Is ${this.salary}`;
//         }
//     }
//     sayMsg() {
//         return `Hello ${this.username} Your Salary Is ${this.salary}`;
//     }
// }

// let userOne = new User("Alakel", 5000, "Syria");

// console.log(userOne.u);
// console.log(userOne.s);
// console.log(userOne.msg());
// console.log(userOne.sayMsg());




// Class Accessors
// Get and Set Accessors



// class User {
//     msg: () => string;
//     constructor(private _username: string, public salary: number, public readonly address: string) {
//         this.msg = function() {
//             return `Hello ${this._username} Your Salary Is ${this.salary}`;
//         }
//     }
//     sayMsg() {
//         return `Hello ${this._username} Your Salary Is ${this.salary}`;
//     }

//     get username() : string {
//         return this._username;
//     }

//     set username(value: string) {
//         this._username = value;
//     }
// }

// let userOne = new User("Alakel", 5000, "Syria");

// console.log(userOne.username);
// userOne.username = "Abode";
// console.log(userOne.username);
// console.log(userOne.salary);
// console.log(userOne.msg());
// console.log(userOne.sayMsg());





// Class 
// Static Members
// Don't user "name, length, call"

// class User {
//     static created: number = 0;
//     static getCount() : void {
//         console.log(`${this.created} Objects Created`);
//     }

//     constructor( public username: string) {
//         User.created++;
//     }
// }


// let u1 = new User("Alakel");
// let u2 = new User("Abode");
// let u3 = new User("Abd");
// let u4 = new User("Mama");

// User.getCount();





// Class Implement Interface

// interface Settings {
//     theme: boolean;
//     font: string;
//     save(): void;
// }


// class User implements Settings {
//     constructor(public username:string, public theme: boolean, public font: string) {

//     }

//     save(): void {
//         console.log(`saved`);
//     }

//     update(): void {
//         console.log(`updated`)
//     }
// }

// let userOne = new User("Alakel", true, "Sane seref");


// console.log(userOne.username)
// console.log(userOne.font)

// userOne.save()
// userOne.update()





// Abstract Class and Members
// We cannot create and instance of an abstract class

// abstract class Food {
//     constructor(public title: string) {}

//     abstract getCookingtime(): void
// }

// class Pizza extends Food {
//     constructor(title: string, public price: number) {
//         super(title);
//     }

//     getCookingtime(): void {
//         console.log(`Cooking time for Pizza is one hour`)
//     }
// }

// class Burger extends Food {
//     constructor(title: string, public price: number) {
//         super(title);
//     }

//     getCookingtime(): void {
//             console.log(`Cooking time for Bruger is one hour`)
//         }
// }

// let pizzaOne = new Pizza("Peporone", 100);

// console.log(pizzaOne.title);
// console.log(pizzaOne.price);

// pizzaOne.getCookingtime();










//Class  
// Polymorphism & Method Override

// polymorphism 
// Classes have the same methods but different Implementations

// Methods Override 
// Allowing Child class to provide implementation of a method in parent class
// a method in child class must has same name as parent class


// noImplicitOverride

// class Player {
//     constructor(public name:string) {}
//     attack(): void {
//         console.log("Attacking now");
//     }
// }


// class Amazon extends Player {
//     constructor(name: string, public spears: number) {
//         super(name)
//     }
//     override attack(): void {
//         // super.attack();
//         console.log("Attacking with Spear");
//         this.spears -= 1;
//     }
// }


// class Barbarian extends Player {
//     constructor(name: string, public axeDurability: number) {
//         super(name)
//     }
//     override attack(): void {
//         // super.attack();
//         console.log("Attacking with Axe");
//         this.axeDurability -= 1;
//     }
// }


// let barOne = new Barbarian("Alakel", 100);

// console.log(barOne.name);
// barOne.attack();
// console.log(barOne.axeDurability);








// Generics Introduction

// Help write a reusable code
// allow to pass type as a parameter to another type
// you will be able to deal with multiple types without using ": any type"
// we can create:
    // Generic Classes
    // Generic Functions
    // Generic Methods
    // Generic Interfaces




// The example below is without using the generic way

// function returnNumber(val: number): number {
//     return val;
// }

// function returnString(val: string): string {
//     return val;
// }

// function returnBoolean(val: boolean): boolean {
//     return val;
// }


// console.log(returnNumber(10));
// console.log(returnString("Hello"));
// console.log(returnBoolean(true));



// With using the generic

// function returnType<GenericType>(val: GenericType) : GenericType {
//     return val;
// }


// console.log(returnType<number>(10));
// console.log(returnType<string>("Hello"));
// console.log(returnType<boolean>(true));
// console.log(returnType<number[]>([1,2,3,4]));







// Generics Multiple Types
// Arrow Function
// Multiple Types
// Discussion


// const returnTypeArrowSyntax = <T>(val: T): T => val;

// console.log(returnTypeArrowSyntax<number>(100));
// console.log(returnTypeArrowSyntax<string>("Alakel"));





// Important to understand the case here
// function testType<T>(val: T): string {
//     return `The Value is ${val} and Type is ${typeof val}`;
// }

// console.log(testType<number>(100));
// console.log(testType<string>("Alakel"));




// Important to understand the Multiple types
// function multipleTypes<T, S>(valOne: T, valTwo: S): string {
//     return `The first Value is ${valOne} and second value is ${valTwo}`;
// }

// console.log(multipleTypes<string, number>("Alakel", 100));
// console.log(multipleTypes<string, boolean>("Alakel", true));








// Generics Classes

// class User<T = number> {    // Here the default type is string but you can insert any another type
//     constructor(public value: T) {}
//     show(msg: T) :void {
//         console.log(`${msg} - ${this.value}`);
//     }
// }

// let userOne = new User("Alakel");
// console.log(userOne.value);
// userOne.show("Message");

// let userTwo = new User<number | string>(100);
// console.log(userOne.value);
// userTwo.show("Message");









// Generics and Interfaces

// interface Book {
//     itemType: string;
//     title: string;
//     isbn: number;
// }

// interface Game {
//     itemType: string;
//     title: string;
//     style: string;
//     price: number;
// }

// class Collection<T> {
//     public data: T[] = [];
//     add(item: T) : void {
//         this.data.push(item);
//     }
// }


// let itemOne = new Collection<Book>();
// itemOne.add({ itemType: "Book", title: "Atmomic" , isbn: 111111222 });
// itemOne.add({ itemType: "Book", title: "Follow me" , isbn: 454544000 });


// console.log(itemOne);


// let itemTwo = new Collection<Game>();
// itemTwo.add({ itemType: "Game", title: "Call of duty", style: "Action", price:100 });
// console.log(itemTwo);