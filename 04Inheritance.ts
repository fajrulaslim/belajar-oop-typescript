// Parent
class Hewan4 {
    nama: string = ''
    kaki: number = 0

    bernafas () {
        console.log('Bernafas')
    }
}

// Child
class Burung4 extends Hewan4 {
    warna: string = 'Kuning'
}

const burung4 = new Burung4()
console.log(burung4)
burung4.nama = 'Kutilang'
burung4.kaki = 2
console.log(burung4)