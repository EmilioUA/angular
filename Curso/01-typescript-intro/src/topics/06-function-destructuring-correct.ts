interface Products {
    description: string;
    price: number;
}

const phone: Products = {
    description: "Nokia A1",
    price: 150.0
}

const tablet: Products = {
    description: "iPad Air",
    price: 250.0
}

interface TaxCalculationOptions {
    tax: number;
    products: Products[];
}
//function taxCalculation(options: TaxCalculationOptions): [number, number]{
//function taxCalculation({tax, products}: TaxCalculationOptions): [number, number]{
function taxCalculation(options: TaxCalculationOptions): [number, number]{
    let total = 0;

    const {tax, products} = options;

    products.forEach( ({price}) => {
        total += price;
    })

    return [total, total * tax];
}

const shoppingCart = [phone, tablet]
const tax = 0.21

const [total, taxTotal] = taxCalculation({
    tax: tax,
    products: shoppingCart
})

console.log('Total: ', total)
console.log('Tax: ', taxTotal)

export {};