var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animals = /** @class */ (function () {
    function Animals(name, pattes, color) {
        // this.species = species;
        this.name = name;
        this.pattes = pattes;
        this.color = color;
    }
    return Animals;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name, pattes, color) {
        var _this = _super.call(this, name, pattes, color) || this;
        _this.type = "chat";
        _this.pattes = 4;
        return _this;
    }
    return Cat;
}(Animals));
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, pattes, color) {
        var _this = _super.call(this, name, pattes, color) || this;
        _this.type = "chien";
        _this.pattes = 4;
        return _this;
    }
    return Dog;
}(Animals));
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird(name, pattes, color) {
        var _this = _super.call(this, name, pattes, color) || this;
        _this.type = "oiseau";
        return _this;
    }
    return Bird;
}(Animals));
var Fish = /** @class */ (function (_super) {
    __extends(Fish, _super);
    function Fish(name, pattes, color) {
        var _this = _super.call(this, name, pattes, color) || this;
        _this.type = "poisson";
        return _this;
    }
    return Fish;
}(Animals));
var Vers = /** @class */ (function (_super) {
    __extends(Vers, _super);
    function Vers(name, pattes, color) {
        var _this = _super.call(this, name, pattes, color) || this;
        _this.type = "vers";
        return _this;
    }
    return Vers;
}(Animals));
// On peut photographier tous les animaux
function unePhoto(animals) {
    console.log(" On peut photographier tous les animaux ".concat(animals.name));
}
// Tous les chats peuvent miauler
function miauler(chat) {
    if (chat.type == "chat") {
        console.log("".concat(chat.name, " Miaou"));
    }
    else {
        console.log("".concat(chat.name, " Ce n'est pas un chat"));
    }
}
// Tous les chiens peuvent aboyer
function aboyer(dog) {
    if (dog.type == "chien") {
        console.log("".concat(dog.name, " Wouf"));
    }
    else {
        console.log("".concat(dog.name, " Ce n'est pas un chien"));
    }
}
;
// Tous les oiseaux peuvent voler
function voler(bird) {
    if (bird.type == "oiseau") {
        console.log("".concat(bird.name, " Tous les oiseaux peuvent voler"));
    }
    else {
        console.log("".concat(bird.name, " Ce n'est pas un oiseau"));
    }
}
;
// Tous les poissons peuvent nager
function nager(fish) {
    if (fish.type == "poisson") {
        console.log("".concat(fish.name, " Tous les poissons peuvent nager"));
    }
    else {
        console.log("".concat(fish.name, " Ce n'est pas un poisson"));
    }
}
;
// On peut caresser tous les animaux à 4 pattes
function caresser(animals) {
    if (animals.pattes === 4) {
        console.log("".concat(animals.name, " On peut caresser tous les animaux \u00E0 4 pattes"));
    }
    else {
        console.log("".concat(animals.name, " pas touche"));
    }
}
// On peut nourrir tous les animaux de couleur noire
function nourrir(animals) {
    if (animals.color === "noir") {
        console.log("".concat(animals.name, " On peut nourrir tous les animaux de couleur noire"));
    }
    else {
        console.log("".concat(animals.name, "  pas de couleur noire"));
    }
}
var catOne = new Cat("européen", 4, "noir");
var catTwo = new Cat("chartreux", 4);
var dogOne = new Dog("Terre-Neuve", 4, "noir");
var dogTwo = new Dog("Moon Moon", 4);
var birdOne = new Bird("Mésange", 2);
var birdTwo = new Bird("Merle", 2, "noir");
var fishOne = new Fish("Thon", 0);
var fishTwo = new Fish("Requin", 0);
var insecteOne = new Vers("Gadget", 0);
var insecteTwo = new Vers("Merlin", 0, "noir");
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
