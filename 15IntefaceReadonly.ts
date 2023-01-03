interface Student {
    readonly name: string;
    readonly age: number;
}

let student: Student = { name: "Fajrul", age: 31 }

// let student.name = "Dodo"    // Tidak bisa, karena sebelumnya sudah diinisialisasi ,, bersifat const