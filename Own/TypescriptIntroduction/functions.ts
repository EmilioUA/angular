                                         //OPTIONAL
function add(num1: number, num2: number, num3? : number) : number{  //Named function
    return num3? num1 + num2 + num3 : num1 + num2
}

console.log(add(2, 3));
console.log(add(2, 3, 5));

                                         //REQUIRED
const sub = (num1: number, num2: number, num3 = 10) : number => num1 -  num2 - num3;  //Arrow function
console.log(sub(2, 3))
console.log(sub(2, 3, 5))

const mult = function add(num1: number, num2: number) : number{ //Function expresion
    return num1 * num2
}

function add2(num1: number, num2: number, ...num3 : number[]) : number{  //Named function
    return num1 + num2 + num3.reduce((a , b) => a + b, 0);
}
console.log(add2(2, 3))
console.log(add2(2, 3, 1, 2, 3, 4 ,5))
console.log(add2(2, 3, ...[1, 2, 3, 4 ,5]))