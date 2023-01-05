interface AllAnimals{
    species : string;
    name : string;
    color?: string;
}
class Animals{
    species : string;
    name :string;
    color?: string;

constructor(species:string, name: string, color?: string) {
    this.species = species;
    this.name = name;
    this.color = color;
    
    

}}
 class Cats extends Animals{

    pattes: number;

 constructor(species:string,name: string, color?: string, pattes: 4){
    super(species,name, color);
   
    this.pattes = pattes;
 }
 }
 
 class Dog extends Animals{
    
     pattes: number;

 constructor(species:string,name: string, color?: string, pattes: 4){
    super(species,name, color);
   
    this.pattes = pattes;
 }
}
 class Bird extends Animals{

 pattes: number;

 constructor(species:string,name: string, color?: string, pattes: 2){
    super(species,name, color);
   
    this.pattes = pattes;

 }}


 class Fish extends Animals{
     

 constructor(species:string,name: string, color?: string){
    super(species,name, color);
   
    

 }}


 class Vers extends Animals{
   

 constructor(species:string,name: string, color?: string){
    super(species,name, color);
   
    
 }}
// On peut photographier tous les animaux
function takePhoto(animal:Animals){
return ("On peut photographier tous les animaux")
}

// Tous les chats peuvent miauler
function miauler(animal:Animals){
    return ("Miaou")};


// Tous les chiens peuvent aboyer
function aboyer(animal:Animals){
    return ("Wouf")};

// Tous les oiseaux peuvent voler
function voler(animal:Animals){
    return ("Tous les oiseaux peuvent voler")};

// Tous les poissons peuvent nager
function nager(animal:Animals){
    return ("Tous les poissons peuvent nager")};

// On peut caresser tous les animaux à 4 pattes
function caresser(animal:Animals){
    return ("On peut caresser tous les animaux à 4 pattes")};
// On peut nourrir tous les animaux de couleur noire
function nourrir(animal:Animals){
    return ("On peut nourrir tous les animaux de couleur noire")};