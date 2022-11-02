class Hewan2 {
    // Property
    nama: string = ''
    kaki: number = 0
    mamalia: boolean = false

    // Method
    bernafas() {
        console.log('Hewan2 bernafas')
    }
}

const kucing2 = new Hewan2()
console.log(kucing2)
console.log('---')
kucing2.nama = 'Anggora'
kucing2.kaki = 4
kucing2.mamalia = true
console.log(kucing2)
kucing2.bernafas()