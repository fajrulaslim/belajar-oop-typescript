// 1 Abstarct class harus ada 1 class method
// template di setiap kelas yg di setiap class yg diextend harus ada itu

abstract class Hewan12 {
     name: string

     constructor(name: string) {
        this.name = name
     }

     makan():void {
        console.log(`${this.name} sedang makan`)
     }

    //  wajib ada di setiap child nya
     abstract bergerak(): void 
}

class Kucing12 extends Hewan12 {
    constructor() {
        super('Kucing')
    }

    bergerak(): void {
        console.log('Kucing berjalan')
    }
}

class Burung12 extends Hewan12 {
    constructor() {
        super('Burung')
    }

    bergerak(): void {
        console.log('Burung terbang')
    }
}

const kucing12 = new Kucing12()
kucing12.bergerak()

const burung12 = new Burung12()
burung12.bergerak()