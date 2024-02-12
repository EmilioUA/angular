export interface Products {
    description: string;
    price: number;
}

interface TaxCalculationOptions {
    tax: number;
    products: Products[];
}

export function taxCalculation(options: TaxCalculationOptions): number[]{
    let total = 0;
    const {products} = options

    products.forEach( product => {
        const {price} = product
        total += price;
    })

    return [total, total * options.tax];
}