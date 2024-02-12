function classDecorator<T extends {new (...args: any[]): {}}>(
    constructor: T
) {
    return class extends constructor {
        newProperty = 'New Property';
        hello = 'override';
    } as T; // Add this line to cast it back to the original constructor type
}

//@classDecorator
class SuperClass {

    //@classDecorator
    public myProperty: string = "Abc123"
    
    //@classDecorator
    print() {
        console.log('Hola mundo')
    }
}

console.log(SuperClass);
const myClass = new SuperClass();
console.log(myClass);
