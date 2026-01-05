// Déclarer une variable pour contenir le prénom
let prenom = window.prompt("Veuillez entrer votre prénom: ");
// Déclarer une variable pour contenir le nom
let nom = window.prompt("Veuillez entrer votre nom de famille: ");
// Déclarer une variable pour contenir l'âge
let age = window.prompt("Veuillez entrer votre âge: ");
// Déclarer une variable pour contenir l'animal de compagnie
let animalDeCompagnie = window.prompt("Quel est votre animal de compagnie ? ");

// Affichage personnalisé. Le retour à la ligne est pris en compte automatiquement par la syntaxe avec "backticks"
window.alert(`Bonjour ${prenom} ${nom} !
  * Vous avez ${age} ans
  * Votre animal de compagnie est un ${animalDeCompagnie}`);

// window.alert("Bonjour ${prenom} ${nom} !\n" +
//   "* Vous avez ${age} ans\n" +
//   "* Votre animal de compagnie est un ${animalDeCompagnie}");