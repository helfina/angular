class Pote{

    surnom: string;
    age: number;
    platPreferer: string;

    constructor(surnom: string,age: number,platPreferer: string){
        this.surnom=surnom;
        this.age=age;
        this.platPreferer=platPreferer;
    }

    checkDesPotes(){
        console.log("un high-five vers le haut et deux vers la gauche");
    }

    sePresenter(){
        console.log("je suis" + this.surnom);
    }

}
var monPotePascal=new Pote("Pascalou",42,"Burger");

monPotePascal.checkDesPotes();