export class Person{
//    public name: string;
//    public address: string;
    constructor(
        public name: string, 
        public address?: string
    ) {}
}

export class Hero extends Person{
    constructor(
        public realName: string, 
        public age: number,
        name: string,
        address: string = "New York"
    ) {
        super(name, address)
    }
}

export class Vilian {
    constructor(
        public realName: string, 
        public age: number,
        public person: Person
    )
    {}
}

const tony = new Person ("Tony Stark", "New York");

const ironman = new Vilian("Tony Stark", 45, tony);
console.log(ironman)
