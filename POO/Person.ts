class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

// Utilisation de la classe Person

const p1 = new Person('Alice', 25);
const p2 = new Person('Bob', 30);

console.log('Âge de p1 :', p1.age);
console.log('Âge de p2 :', p2.age);

p2.age = 18;
console.log('Nouvel âge de p2 :', p2.age);

