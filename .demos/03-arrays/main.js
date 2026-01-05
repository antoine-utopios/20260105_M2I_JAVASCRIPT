
// Pour créer des variables contenant non pas une valeurs mais plusieurs valeurs, on va utiliser des variables de type tableau
let mesPrenoms = ["Antoine","Claire","Théo","Mike","John"];

console.log(mesPrenoms);

// On peut manipuler les tableau et en extraire des informations ou des valeurs
console.log(`La longueur du tableau mesPrenoms est de : ${mesPrenoms.length}`);
console.log(`Le troisième élément de mon tableau est: ${mesPrenoms[2]}`);


console.log(`Le contenu du tableau avant modification est: ${mesPrenoms}`);
mesPrenoms[3] = "Johnny"; // Modification du 4e élément via l'index
console.log(`Le contenu du tableau après modification est: ${mesPrenoms}`);

// Pour rétirer des valeurs d'un tableau, on peut utiliser .shift() ou .pop() en fonction ce si l'on veut retirer des éléments depuis le début ou depuis la fin
let premierElementTableau = mesPrenoms.shift();
let dernierElementTableau = mesPrenoms.pop();
console.log(`Le contenu du tableau après suppression de son premier élément est: ${mesPrenoms}`);
console.log(`L'element premier qui a été supprimé est ${premierElementTableau}`);
console.log(`L'element dernier qui a été supprimé est ${dernierElementTableau}`);

// Pour ajouter des élément, on peut utiliser .unshift() ou .push() en fonction de si l'on veut ajouter des éléments du début ou de la fin
mesPrenoms.unshift("Antoine");
mesPrenoms.push("John");
console.log(`Le contenu du tableau après ajout est: ${mesPrenoms}`);

let mesNombresA = [1, 3, 5, 6];
let mesNombresB = [2, 4, 10];

console.log(`mesNombresA: ${mesNombresA}`);
console.log(`mesNombresB: ${mesNombresB}`);

// mesNombresA.unshift([2, 4, 10]);
// mesNombresA.unshift(mesNombresB);
// mesNombresA.unshift(2, 4, 10);
mesNombresA.unshift(...mesNombresB);

// Pour trier les éléments d'un tableau, on peut utiliser la méthode .sort()
mesNombresA.sort();

console.log(mesNombresA);
