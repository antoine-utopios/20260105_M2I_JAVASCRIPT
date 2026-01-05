// On stocke le contenu des cartes de boissons sous la forme de constantes, afin de les référencer par la suite dans notre code. De la sorte, si jamais on a une modification à faire, il suffit de modifier les cartes à cet endroit précis:
const CARTE_BASE = 
`1. Ice Tea - 2.40e
2. Coca Cola - 2.20e
3. Chocolat chaud - 1.70e
4. Diabolo fraise - 1.50e
5. Schweppes - 2.20e`;

const CARTE_ADULTE = 
`10. Bière - 2.30e
11. Vin rouge - 1.70e
12. Mojito - 3.70e`;


// On récupère l'âge de l'utilisateur, dans le but de lui proposer une carte adaptée à son âge
let ageUtilisateur = window.prompt("Quel est votre âge ? ");

// Vu qu'on va utiliser la même variable au sein des deux blocs conditionnels, on privilégie de la déclater en amont de son affectation au sein d'un des deux blocs de condition
let choixUtilisateur;

if (ageUtilisateur < 18) {
  // MINEUR
  choixUtilisateur = window.prompt(`=== CARTE DES BOISSONS ===
  ${CARTE_BASE}
  
  Quel est votre choix ? `);
  
  switch(choixUtilisateur) {
    case "1":
      window.alert("Vous avez choisi Ice Tea, cela fera 2.40e");
      break;
    case "2":
      window.alert("Vous avez choisi Coca Cola, cela fera 2.20e");
      break;
    case "3":
      window.alert("Vous avez choisi Chocolat Chaud, cela fera 1.10e");
      break;
    case "4":
      window.alert("Vous avez choisi Diabolo Fraise, cela fera 1.40e");
      break;
    case "5":
      window.alert("Vous avez choisi Schweppes, cela fera 2.20e");
      break;
    default:
      window.alert("Je n'ai pas compris votre choix, veuillez choisir une option entre 1 et 5 compris !");
      break;
  }
  
} else {
  // MAJEUR

  choixUtilisateur = window.prompt(`=== CARTE DES BOISSONS ===
  ${CARTE_BASE}
  ${CARTE_ADULTE}
  
  Quel est votre choix ? `);

    switch(choixUtilisateur) {
    case "1":
      window.alert("Vous avez choisi Ice Tea, cela fera 2.40e");
      break;
    case "2":
      window.alert("Vous avez choisi Coca Cola, cela fera 2.20e");
      break;
    case "3":
      window.alert("Vous avez choisi Chocolat Chaud, cela fera 1.10e");
      break;
    case "4":
      window.alert("Vous avez choisi Diabolo Fraise, cela fera 1.40e");
      break;
    case "5":
      window.alert("Vous avez choisi Schweppes, cela fera 2.20e");
      break;
    case "10":
      window.alert("Vous avez choisi Bière, cela fera 2.30e");
      break;
    case "11":
      window.alert("Vous avez choisi Vin Rouge, cela fera 1.70e");
      break;
    case "12":
      window.alert("Vous avez choisi Mojito, cela fera 3.70e");
      break;
    default:
      window.alert("Je n'ai pas compris votre choix, veuillez choisir une option entre 1 et 5 ou entre 10 et 12 compris !");
      break;
  }
}
