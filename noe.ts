
// Chat européen (noir)
// Chat chartreux
// Chien Terre-Neuve (noir)
// Chien Moon Moon
// Mésange
// Merle (noir)
// Thon
// Requin
// Asticot
interface AllAnimals {
    // species : string;
    name: string;
    color?: string;

}

class Animals implements AllAnimals{
    // species : string;
    pattes: number;
  name:string;
  type? : string;
  color? :string;

    constructor(name: string, pattes: number, color?: string,) {
        // this.species = species;
        
        this.name = name;
        this.pattes = pattes;
    
        this.color = color;


    }
}
class Cat extends Animals {
type: string

constructor(name: string, pattes: number, color?: string){
        super(name,pattes,color)
            this.type = "chat"
            this.pattes =4 
}
    

}

class Dog extends Animals {
    type: string

constructor(name: string, pattes: number, color?: string){
        super(name,pattes,color)
            this.type = "chien"
            this.pattes =4 
}

    
}
class Bird extends Animals {
    type: string

    constructor(name: string, pattes: number, color?: string){
            super(name,pattes,color)
                this.type = "oiseau"
            
}}


class Fish extends Animals {
    type: string

    constructor(name: string, pattes: number, color?: string){
            super(name,pattes,color)
                this.type = "poisson"
            
   
}}


class Vers extends Animals {
    type: string

    constructor(name: string, pattes: number, color?: string){
            super(name,pattes,color)
                this.type = "vers"
             

}}
// On peut photographier tous les animaux

function unePhoto(animals: Animals) {
    console.log(` On peut photographier tous les animaux ${animals.name}`)
}

// Tous les chats peuvent miauler

function miauler(chat:Cat){
    if (chat.type =="chat"){
        console.log(`${chat.name} Miaou`);
    }
    else{
        console.log(`${chat.name} Ce n'est pas un chat`);

    }
    
}

// Tous les chiens peuvent aboyer
function aboyer(dog: Dog) {
    if (dog.type =="chien"){
        console.log(`${dog.name} Wouf`);
    }
    else{
        console.log(`${dog.name} Ce n'est pas un chien`);

    }
    
};

// Tous les oiseaux peuvent voler
function voler(bird: Bird) {
    if (bird.type =="oiseau"){
        console.log(`${bird.name} Tous les oiseaux peuvent voler`);
    }
    else{
        console.log(`${bird.name} Ce n'est pas un oiseau`);

    }
};

// Tous les poissons peuvent nager
function nager(fish: Fish) {
    if (fish.type =="poisson"){
        console.log(`${fish.name} Tous les poissons peuvent nager`);
    }
    else{
        console.log(`${fish.name} Ce n'est pas un poisson`);

    }
};

// On peut caresser tous les animaux à 4 pattes
function caresser(animals: Animals) {
    if (animals.pattes === 4) {
        console.log(`${animals.name} On peut caresser tous les animaux à 4 pattes`)
    }
    else { console.log(`${animals.name} pas touche`) }
}
// On peut nourrir tous les animaux de couleur noire
function nourrir(animals: Animals) {
    if (animals.color === "noir") {
        console.log(`${animals.name} On peut nourrir tous les animaux de couleur noire`)
    }
    else {
        console.log(`${animals.name}  pas de couleur noire`)
    }
}

let catOne = new Cat("européen", 4,"noir");
let catTwo = new Cat("chartreux", 4,);

let dogOne = new Dog("Terre-Neuve", 4,"noir");
let dogTwo = new Dog("Moon Moon", 4,);


let birdOne = new Bird("Mésange", 2);
let birdTwo = new Bird("Merle", 2,"noir");


let fishOne = new Fish("Thon", 0);
let fishTwo = new Fish("Requin", 0);

let insecteOne: Vers = new Vers("Gadget", 0);
let insecteTwo: Vers = new Vers("Merlin", 0, "noir");

miauler(catOne);
miauler(dogOne);
aboyer(dogOne);
aboyer(catOne);
voler(birdOne);
voler(dogOne);
nager(fishOne);
nager(catOne);
caresser(dogOne);
caresser(fishOne);
nourrir(insecteTwo);
nourrir(fishTwo);