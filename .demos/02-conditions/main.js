// OPERATEURS 

/* OPERATEURS DE COMPARAISON
  - Supérieur à => 'valA > valB'
  - Inférieur à => 'valA < valB'
  - Supérieur ou égal à => 'valA >= valB'
  - Inférieur ou égal à => 'valA <= valB'
  - Egal à => 'valA == valB'
  - Différent de => 'valA != valB'
*/

/* OPERATEURS LOGIQUES
  - ET => 'conditionA && conditionB'
  - OU => 'conditionA || conditionB'
*/

let nombreAge = 23;
let accompagnementParAdulte = true;

// Exemples

// On veut vérifier que l'âge de l'utilisateur est compris entre 12 et 18 ans: 
let verificationClasseSportive = nombreAge >= 12 && nombreAge < 18;

// On veut vérifier que l'âge de l'utilisateur est soit correspondant à la majorité, soit qu'il est accompagné par un adulte: 
let verificationEntree = nombreAge >= 18 || accompagnementParAdulte;

let age = window.prompt("Veuillez entrer votre âge: ");
console.log(age);

let verificationAge = age >= 18;
console.log(verificationAge);

// if (age >= 18)
// if (verificationAge == true)
if (verificationAge) {
  console.log("Bienvenue sur le site internet, vous êtes majeur, vous avez donc accès à son contenu !");
} else {
  console.log("ATTENTION ! Ce site est interdit aux mineurs !!!");
}

let nbEnfants = window.prompt("Combien avez-vous d'enfants ? ");

if (nbEnfants >= 5) {
  console.log("Oulala ! Vous avez une famille très nombreuse !");
} else if (nbEnfants >= 2) {
  console.log("Vous avez une famille nombreuse, bravo !");
} else if (nbEnfants > 0) {
  console.log("Vous avez des enfants !");
} else {
  console.log("Pas encore d'enfant, c'est pas grave !");
}

let choixUtilisateur = window.prompt("Choissez une valeur entre 1 et 5 compris: ");

switch(choixUtilisateur) {
  case "1":
    console.log("Vous avez choisi le Rouge");
    break;

  case "2":
    console.log("Vous avez choisi le Bleu");
    break;

  case "3":
    console.log("Vous avez choisi le Vert");
    break;

  case "4":
    console.log("Vous avez choisi le Orange");
    break;

  case "5":
    console.log("Vous avez choisi le Violet");
    break;

  default:
    console.log("Je n'ai pas compris, la valeur doit être entre 1 et 5 compris !");
    break;
}