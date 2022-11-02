// OVerriding - Menggantikan method kelas parent
class Hewan6 {
    nama: string = ''

    bernafas () {
        console.log('Bernafas')
    }
}

class Katak6 extends Hewan6 {
    bernafas() {
        console.log('Bernafas cepat')
    }
}

const katak6 = new Katak6()
katak6.bernafas()