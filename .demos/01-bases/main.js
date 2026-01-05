// Simple Hello world
console.log("Hello world");


/*
  CREATION DE VARIABLES

  La syntaxe est d'utiliser les mots-clés: 
  - var: Création de variables initialement présente dans Javascript
  - const: Création de constantes depuis l'arrivée de l'ES6
  - let: Création de variables depuis l'arrivée de l'ES6

  var <nom de la variable>; 
  => Crée une variable 'non définie'
  
  var <nom de la variable> = <valeur>; 
  => Crée une variable initialisée avec une valeur
  
  <nom variable> = <valeur>; 
  => Affecte à la variable une nouvelle valeur
*/

var nomVariableTexte = "Blabla, d'avant"; // 0xDd23563
nomVariableTexte = 'Simple guillemets';
nomVariableTexte = `Backticks`;
var nomVariableNombre = 12_345;
var laSomme = 1 + 5;
var nomVariableNombreVirgule = 1345.342342;
var nomVariableBooleen = false;

let nomVariableModerne = undefined;

const NOM_CONSTANTE = "Valeur";

// Affichage des variables 

console.log(nomVariableTexte);

let prenom = "John"; 
let nom = "DUPONT";

// 'Bonjour John DUPONT, bienvenue sur notre site !'

console.log("Bonjour " + prenom + " " + nom + ", bienvenue sur notre site !");
console.log("Bonjour", prenom, nom + ", bienvenue sur notre site !");
console.log(`Bonjour ${prenom} ${nom}, bienvenue sur notre site !`);
console.log(`La somme de 1 et de 4 est de: ${1 + 4}`);
// console.log(`Le numéro gagnant du loto de la semaine passée était: ${numeroGagnantSemainePassee()}`);


/* les méthodes de l'objet 'window'
    - alert() => Permet l'affichage (affichage uniquement) d'un message, personnalisé ou non
    - prompt() => Permet l'affichage d'un message, personnalisé ou non et la récupération d'une donnée de type textuel entrée par l'utilisateur
    - confirm() => Permet l'affichage d'un message, personnalisé ou non et la récupération d'un booléen basé sur le clic d'un bouton (OK ou Cancel)
 */

window.alert("Texte de l'alert!");
let valeurUtilisateur = window.prompt("Quel est votre fruit préféré ?");
window.alert(`Ah d'accord, j'ai bien compris ! Votre fruit préféré est: ${valeurUtilisateur}`);
let reponseUtilisateur = window.confirm("Etes-vous sûr ?");

console.log(reponseUtilisateur);