let lname: string;
//lname = 10; strongly typed, error.
lname = "Uclés";
let newname = lname.toUpperCase();
console.log(newname)


let age : number;
age = 22;
let dob = "22"
let result = parseInt(dob);


let isValid : boolean = false; //Generate JS, if u don't inicialice -> undefined
console.log(isValid)


let myList  : string[];
myList = ["hola", "mundo"]
let text = myList.find((str)=> str==="hola");
console.log(text);

let numList : Array<number>; //Generics
numList = [1,2,3,4,5]

let result1 = numList.filter((num) => num>2);
console.log(result1)
console.log(numList.reduce((acc, num) => acc + num));


const enum Color {
    Red,
    Green,
    Blue
}

let c: Color = Color.Blue;


let swapNumbs : [number, number];

function swapNumbers(num1:number, num2:number) : [number, number]{
    return [num2, num1]
}

swapNumbs = swapNumbers(10, 20);

console.log(swapNumbs[0]);
//console.log(swapNumbs[2]);


let department : any //Try to avoid any
department = "IT";
department = 10;