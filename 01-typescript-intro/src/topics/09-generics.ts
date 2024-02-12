export function whatsMyType<T>( argument: T ): T {


    return argument;
}

const amIString = whatsMyType<string>('Hola Mundo');
const amINumber = whatsMyType<number>(111);
const amIArray  = whatsMyType<number[]>([1,2,3,4,5]);

console.log(amIArray, amINumber, amIString)