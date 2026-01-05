let monPrenom = "Antoine";
let mesPrenoms = ["Antoine", "Chloée", "Laura", "Mike", "Arthur"];
let monTableau = ["Antoine", "Phrase plus ou moins longue", 2_223, false, ["Test", "Tableau", "Interne"]];


console.log(monPrenom[2]);
console.log(mesPrenoms[2]);

console.log(monTableau);


const CARTE_BOISSON = ["Ice Tea", "Coca cola", "Schweppes", "Diabolo menthe", "Café"];

console.log(`=== CARTE DES BOISSONS ===`);
// On créé une boucle avec la syntaxe suivante: 
for (let i = 0; i < CARTE_BOISSON.length; i++) {
  // I commence à 0, on continue jusqu'à ce que la valeur de I dépasse la longueur de la carte des boissons. A chaque fin de boucle, on augmente la valeur de I de 1 puis on recommence les instructions
  console.log(`${i + 1}. ${CARTE_BOISSON[i]}`);
}
console.log(`Quel est votre choix ? `);

let choixUtilisateur = 3;

let elementATelIndex = CARTE_BOISSON[choixUtilisateur - 1];
console.log(`L'utilisateur à choisi: ${elementATelIndex}`);


/*
  Pour créer un bouclage non défini, dépendant de l'entrée utilisateur ou d'instruction de codes, on privilégie la boucle de type WHILE, qui se comporte via une simple condition. Du temps que cette condition est évaluée à VRAI, alors le bouclage continue
*/

let messageUtilisateur;

while(messageUtilisateur != "STOP") {
  messageUtilisateur = window.prompt("Veuillez écrire STOP pour arrêter les messages");
}

// Pour générer un nombre aléatoire compris entre X et Y, on va déjà devoir:

// Générer un nombre entre 0 et 1
let nombreAleatoireComprisEntre0Et1 = Math.random();

// Le multiplier par 200 (0 => 200)
let nombreAleatoireEntre0Et200 = nombreAleatoireComprisEntre0Et1 * 200;
// L'arrondir au supérieur (1 => 200)
let nombreAleatoireEntre1Et200 = Math.ceil(nombreAleatoireEntre0Et200);

console.log(nombreAleatoireEntre1Et200);

