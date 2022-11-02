class Ayam10 {
    static kaki: number = 2

    static jalan() {
        console.log(`Ayam berjaln dengan ${this.kaki} kaki`)
    }

    getKaki() {
        // console.log(this.kaki) error
        console.log(Ayam10.kaki)
    }
}

console.log(Ayam10.jalan())

const ayam10A = new Ayam10()
const ayam10B = new Ayam10()
const ayam10C = new Ayam10()
const ayam10D = new Ayam10()

Ayam10.kaki = 4

console.log(ayam10A.getKaki())