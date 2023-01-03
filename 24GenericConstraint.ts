// function genericConstraint1<T>(arg: T): T {
//     console.log(arg.length)   TIDAK BISA KARENA DATA DINAMIS/GENERIC
//     return arg
// }


interface Length {
    length: number
}

function genericConstraint1<T extends Length>(arg: T): T {
    console.log(arg.length)
    return arg
}

const generic = genericConstraint1('Tes')
console.log(generic)

// const generic2 = genericConstraint1(222) // Tidak bisa karena tidak bisa dihitung length nya\
const generic2 = genericConstraint1({ length: 10, value: 222})