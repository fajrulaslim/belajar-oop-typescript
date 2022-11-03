// Perjanjian atau kontrak properti dan method yang ada di interface harus diimplemetnasikan di child nya

interface AndroidPhone {
    name: string
    menu(): void
    home(): void
    back(): void
}

class Samsung implements AndroidPhone {
    name: string

    constructor(name: string) {
        this.name = name
    }

    menu(): void {
        console.log('Menu tapped')
    }
    home(): void {
        console.log('Home tapped')
    }
    back(): void {
        console.log('Back tapped')
    }    
}

class GameA {
    private phone: AndroidPhone

    constructor(phone: AndroidPhone) {
        this.phone = phone
    }

    menu() {
        this.phone.menu()
    }

    home() {
        this.phone.home()
    }

    back() {
        console.log('Kembali ke menu sebelumnya')
    }
}

const samsung = new Samsung('Galaxy Tab')
const game = new GameA(samsung)

game.home()
game.back()
game.menu()


interface ApplePhone {
    home(): void
}

class Iphone implements ApplePhone {
    name: string

    constructor(name: string) {
        this.name = name
    }

    home(): void {
        console.log('Muncul global')
    }
}

const iphone = new Iphone('Iphone SE')
// const game2 = new GameA(iphone)