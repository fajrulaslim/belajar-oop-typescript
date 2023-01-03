type UserType = {
    name: string
}
type UserType2 = string

interface UserInterface {
    name: string
}

class User1 implements UserType {
    name: string = "User 1"
}

class User2 implements UserInterface {
    name: string = "User 2"
}

// TYPE BISA LANGSUNG BERBENTUK 1 VARIABEL, ATAU OBJECT
// INTERFACE HANYA BISA MEMAKAI OBJECT TYPE

// TYPE TIDAK BISA DI MERGE MAUPUN EXTENDS CLASS
// INTERFACE BISA DI MERGE (GABUNG ANTAR INTERFACE), DAN MENEXTENDS CLASS

// MERGE INTERFACE
interface Dino {
    name: string
}
interface Dino {
    color: string
}
class DinoSaur implements Dino {
    name: string
    color: string
}

//MERGE TYPE
type Name = {
    name: string
}
type Age = {
    age: Number
}
type UserA = Name & Age
type UserB = Name | Age

const user: UserA = {
    name: "fajrul",
    age: 32
}

// GUNAKAN INTERFACE JIKA INGIN DIPASANGKAN DI CLASS
// GUNAKAN TYPE JIKA INGIN MENGUBAH VARIABEL ATAU FUNCTION