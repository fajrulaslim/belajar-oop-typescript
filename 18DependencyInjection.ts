// Sebuah desain pattern

class Store {
    private name: string = "Toko A"
    private profit: number = 1000

    getName(): string {
        return this.name
    }

    getProfit(): number {
        return this.profit
    }
}

class TechProduct {
    private store: Store
    private name: string
    private price: number

    constructor(name: string, price: number) {
        this.name = name
        this.price = price

        this.store = new Store()
    }

    sell(): void {
        console.log(`Harga jual ${this.name} = ${this.store.getProfit() + this.price}`)
    }
}

const keyboard = new TechProduct('Keyboard', 350000)
keyboard.sell()


// ------------------- DEPEDENCY INJECTION DINAMIS DATA

interface IStore {
    name: string;
    profit: number;
    getProfit(): number
}

class StoreDep implements IStore {
    name: string = "Toko Dep A"
    profit: number = 1000

    getName(): string {
        return this.name
    }

    getProfit(): number {
        return this.profit
    }
}

class StoreDep2 implements IStore {
    name: string = "Toko Dep B"
    profit: number = 2000

    getName(): string {
        return this.name
    }

    getProfit(): number {
        return this.profit
    }
}

class HijabProduct {
    private store: IStore
    private name: string
    private price: number

    constructor(name: string, price: number, store: IStore) {
        this.name = name
        this.price = price
        this.store = store
    }

    sell(): void {
        console.log(`Harga jual ${this.name} = ${this.store.getProfit() + this.price}`)
    }
}

const storeDep1 = new StoreDep()
const storeDep2 = new StoreDep2()

const hijab = new HijabProduct("Kerudung Merah", 120000, storeDep1)
const pasmina = new HijabProduct("Pasmina Biru", 85000, storeDep1)

hijab.sell()
pasmina.sell()