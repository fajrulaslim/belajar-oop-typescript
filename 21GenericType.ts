type Genertic<T> = T // Sepeti variable

function generic2Funciton<T>(value: T): Genertic<T> {
    return value
}

console.log(generic2Funciton<string>('Tes genertic type, '))