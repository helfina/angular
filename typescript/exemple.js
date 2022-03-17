var Pote = /** @class */ (function () {
    function Pote(surnom, age, platPreferer) {
        this.surnom = surnom;
        this.age = age;
        this.platPreferer = platPreferer;
    }
    Pote.prototype.checkDesPotes = function () {
        console.log("un high-five vers le haut et deux vers la gauche");
    };
    Pote.prototype.sePresenter = function () {
        console.log("je suis" + this.surnom);
    };
    return Pote;
}());
var monPotePascal = new Pote("Pascalou", 42, "Burger");
monPotePascal.checkDesPotes();
