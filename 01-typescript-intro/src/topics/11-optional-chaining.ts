export interface Passenger {
    name: string;
    children?: string[];
}


const passanger1: Passenger = {
    name: "Emilio"
}

const passanger2: Passenger = {
    name: "Melisa",
    children: ["Natalia",'Elizabeth']
}

const printChildren = ({name, children}: Passenger) => {
    const howManyChildren = children?.length || 0;

    console.log(name, " tiene ", howManyChildren, " hijos/as");   
}

const returnChildren = ({ children }: Passenger): number => {
    if (!children) return 0;

    const howManyChildren = children!.length;

    return howManyChildren;
}

printChildren(passanger1)
returnChildren(passanger2)