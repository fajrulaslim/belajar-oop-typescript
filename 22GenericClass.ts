interface Generic3<T> {
    propA: T,
    method(): T
}

class GenericClass<T> implements Generic3<T> {
    propA: T
    
    constructor(prop: T) {
        this.propA = prop
    }

    method(): T {
        return this.propA
    }
}

const generic = new GenericClass<Number>(22)
console.log(generic.method())