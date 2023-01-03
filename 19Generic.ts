function getData(value: any) {
    return value
}

const data1 = getData('Tes')

console.log(data1)

// -----------

function getData2<T>(value: T) {
    return value
}

const data2A = getData2<String>('Tes2')
const data2B = getData2<Number>(3)

console.log(data2A)
console.log(data2B)