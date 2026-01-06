class Table {
  nbPieds; 
  materiaux;
  couleur;

  constructor(nbPieds, materiaux, couleur) {
    this.nbPieds = nbPieds;
    this.materiaux = materiaux;
    this.couleur = couleur;
  }
}

let tableIkea = new Table(4, "Verre", "Rouge");
let tableSpeciale = new Table(3, "Metal", "Marron");

console.log(tableIkea);

console.log(`Ma table est en ${tableIkea.materiaux}`);

let tables = [tableIkea, tableSpeciale];

console.log(tables);
