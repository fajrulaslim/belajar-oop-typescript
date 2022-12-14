// Biasa disebut acces modifier

// Public
// Private, hanya digunakan kelas itu sendiri
// Protected, hanya digunakan kelas itu sendiri beserta turunannya

class Hewan7 {
    public nama: string
    private kaki: number
    protected mamalia: boolean

    constructor(nama: string, kaki: number, mamalia: boolean) {
        this.nama = nama
        this.kaki = kaki
        this.mamalia = mamalia
    }

    berjalan() {
    }
}

class Katak7 extends Hewan7 {
    private umurTelur: number = 4
    private umurKecebong: number = 7
    private umurKatak: number = 90

    getUmur() {
        console.log(this.umurTelur + this.umurKecebong + this.umurKatak)
    }
}

const katak7 = new Katak7('Katak Besar', 4, false)