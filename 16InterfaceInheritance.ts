interface Vehicle {
    name: string;
    wheels: number;
}

interface ICar extends Vehicle {
    door: number;
}

class Civic implements ICar {
    name: string = "Civic"
    wheels: number = 4
    door: number = 2
}