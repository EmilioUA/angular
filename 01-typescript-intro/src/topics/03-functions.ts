function addNumbers(num1: number, num2: number): number {
    return num1 + num2;
}

const result = addNumbers(1, 2);
//console.log({result});

const addNumbers2 = (num1: number, num2: number): string => {
    return `${num1 + num2}`;  //`${}` es una template string que permite interpolar variables.
    //Inyección de una expresión de JavaScript dentro de una template literal
}

const result2 = addNumbers2(1, 2);
//console.log({result2});


function multiply(firstNumber: number, secondNumber?: number, base: number = 2): number {
    return firstNumber * base;
}

const result3 = multiply(5);
//console.log({result3});

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}


const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
}

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log('Health points', this.hp);
    },
}

healCharacter(strider, 10);
strider.showHp();

export{}