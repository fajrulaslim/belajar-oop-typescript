class Hewan3A {
    nama: string
    kaki: number

    constructor(name: string, leg: number) {
        this.nama = name
        this.kaki = leg
    }
}

const burung3 = new Hewan3A('Burung3 Perkutut', 2)
const kakiBurung3 = burung3.kaki
console.log(burung3)
console.log(kakiBurung3)
console.log('---')

class Hewan3AB {
    nama: string = ''
    kaki: number = 0
}

const kucing3 = new Hewan3AB()
console.log(kucing3)
console.log('---')

// cara kedua
class Hewan3AC {
    constructor(public name: string, public leg: number) {}
}
const ayam3 = new Hewan3AC("Ayam3", 2)
console.log(ayam3)
console.log('---')