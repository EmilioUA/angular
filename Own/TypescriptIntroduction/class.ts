class Employee {
    id: number;
    name: string
    address: string

    //In Ts you only can have one constructor.
    constructor(id: number, name: string, address: string){
        this.id = id
        this.name = name
        this.address = address
    }
}

//let johnDefault = new Employee(); This give an error

let john = new Employee(1, "John", "Highway 71");
// john.id = 1;
// john.name = "John";
// john.address = "Highway 71";

console.log(john);