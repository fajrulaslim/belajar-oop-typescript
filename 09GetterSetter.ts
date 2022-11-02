class ProductA {
    private _price: number = 0;
    private _discount: number = 0.05

    get price() {
        return this._price
    }

    set price(value: number) {
        this._price = value - (value * this._discount)
    }
}

const productA = new ProductA()
console.log(productA.price)
productA.price = 2000
console.log(productA.price)