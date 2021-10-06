let isAny: any = "Try to avoid" + 3 + { beacuse: "this is" } + ["an", "problem"] + /foo/ + false + 2.2 + undefined + null;
let isString: string = "\nthis is an fantastic string\n";
let isBoolean: boolean = true;
let isNumber: number = 2;
let isRegex: RegExp = /foo/;
let isTuple: string | number = "foo " + 2; //type needs to be string or number

// Records
const ids: Record<number, string> = {
    10: "a",
    20: "b",
}

ids[30] = "c";
/*  
    This is called
    first argument return true, second return false 
*/
ids[30] === "d" ? console.log("yes") : console.log("nope");

// Arrays
let isArray1: string[] = ["lucas", "pacheco"]; // Array of strings
let isArray2: Array<string> = ["lucas", "drozdowski"]; // Array of strings too but using generics
let isArray3: Array<string | number> = ["lucas", "drozdowski", 27]; // Array of tupple string and number too but using more than one type

// Interface - can sacale adding new parammeters to an existing interface

/* 
    I(nterface)Person = IPerson
    usiing the I at front is an patter / convention, not fully necessary, but is a good practice
*/
interface IPerson {
    name: string;
    lastname: string;
    age: number
}
// Object with Interface
const isObject: IPerson = {
    name: "Lucas",
    lastname: "Pacheco",
    age: 27
}

// Loops - inferring the type of the array
// Type inference, i=number
for (let i = 0; i < 10; i++) {
    console.log(i);
}

[1, 2, 3].forEach(i => console.log(i)); //Array<number>
const mapToString: string[] = [1, 2, 3].map(i => `${i * 4}`); //from Array<number> using template string to be Array<string>

console.log(
    isAny,
    isString,
    isBoolean,
    isNumber,
    isRegex,
    isTuple,
    isArray1,
    isArray2,
    isArray3,
    isObject,
    ids,
    mapToString
);