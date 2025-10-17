// class Person {
//     name: string;
//     life_points: number;
//
//     constructor(name: string) {
//         this.name = name;
//         this.life_points = 100;
//     }
// }
//
// const perso = new Person("John");
//
// console.log(perso);



// class Person {
//     name: string;
//     life_points: number;
//
//     constructor(name: string) {
//         this.name = name;
//         this.life_points = 100;
//     }
//
//     // Méthode hit : fait perdre 10 points à la victime
//     hit(victim: Person): void {
//         victim.life_points -= 10;
//         console.log(`${this.name} frappe ${victim.name} 👊 (-10 PV)`);
//     }
// }
//
// // Création de persos
// const p1 = new Person("John");
// const p2 = new Person("Alice");
//
// // John tape Alice
// p1.hit(p2);
//
// console.log(`${p2.name} a maintenant ${p2.life_points} points de vie.`);



// class Person {
//     life_points: number;
//
//     constructor() {
//         this.life_points = 100;
//     }
//
//     // Méthode qui vérifie si la personne est morte
//     is_dead(): boolean {
//         return this.life_points <= 0;
//     }
// }
//
// const p1 = new Person();
//
// console.log(`Points de vie de p1 : ${p1.life_points}`);
// console.log(`p1 est mort ? ${p1.is_dead()}`);
//
// // On fait perdre tous les points de vie à p1
// p1.life_points = 0;
//
// console.log(`Points de vie de p1 : ${p1.life_points}`);
// console.log(`p1 est mort ? ${p1.is_dead()}`);



// Exo 10
// class Person {
//     life_points: number;
//
//     constructor() {
//         this.life_points = 100;
//     }
//
//     hit(victim: Person): void {
//         victim.life_points -= 10;
//         console.log(`💥 Un coup classique (-10 PV)`);
//     }
//
//     is_dead(): boolean {
//         return this.life_points <= 0;
//     }
// }
//
// // Classe dérivée
// class Wizard extends Person {
//     constructor() {
//         super();
//         this.life_points = 80;
//     }
//
//     // On surcharge la méthode hit()
//     hit(victim: Person): void {
//         victim.life_points -= 15;
//         console.log(`🪄 Coup de magie (-15 PV)`);
//     }
// }
//
//
// const p1 = new Person();
// const w1 = new Wizard();
//
// console.log(`Person a ${p1.life_points} PV`);
// console.log(`Wizard a ${w1.life_points} PV`);
//
// // Le mage attaque la personne
// w1.hit(p1);
//
// console.log(`Après l’attaque, Person a ${p1.life_points} PV`);


// Exo 11
// =============================
// Classe Person
// =============================
class Person {
    private life_points: number;

    constructor() {
        this.life_points = 100;
    }

    get_life_points(): number {
        return this.life_points;
    }

    add_life_points(points: number): void {
        this.life_points += points;
    }
}

// =============================
// Classe HealthPotion
// =============================
class HealthPotion {
    was_used_by(person: Person): void {
        person.add_life_points(10);
        console.log("🧪 La potion a été utilisée : +10 PV !");
    }
}

// =============================
// Classe Inventory
// =============================
class Inventory {
    private items: any[];

    constructor() {
        this.items = [];
    }

    add_object(item: any): void {
        this.items.push(item);
    }

    get_objects(): any[] {
        return this.items;
    }
}

// =============================
// Exemple d'utilisation
// =============================
const p1 = new Person();
const potion = new HealthPotion();
const inventory = new Inventory();

// On ajoute une potion dans l’inventaire
inventory.add_object(potion);
console.log("🎒 Inventaire :", inventory.get_objects());

// On utilise la potion sur la personne
potion.was_used_by(p1);
console.log(`❤️ Points de vie actuels : ${p1.get_life_points()}`);