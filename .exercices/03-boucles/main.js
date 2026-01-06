let finJeu = false; // Variable servant à mettre fin à l'ensemble des parties
let scores = []; // Variable permettant le stockage des scores de chaque partie (nbre d'échecs)

// Boucle du "On veut continuer de jouer"
while (finJeu == false) {
  let random = Math.random(); // 0 - 1
  let random100 = random * 100; // 0 - 100
  let nbAleatoire = Math.ceil(random100); // 1 - 100

  // On génère un nombre d'échecs à 0
  let nbEchecs = 0;

  // Pour tester, le plus simple est de connaître le nombre généré
  // window.alert(`Le nombre aléatoire est: ${nbAleatoire}`);

  // On créé une variable permettant de récupérer l'entrée utilisateur au cours d'une partie
  let userInput = "";

  while(userInput != nbAleatoire) {
    userInput = window.prompt("Veuillez entrer un nombre:");

    // On vérifie en comparant l'entrée utilisateur avec le nombre généré aléatoirement au début d'une partie
    if (userInput < nbAleatoire) {
      window.alert("TROP BAS !");
      nbEchecs++; // Si pas bon, on augmente le nombre d'échecs
    } else if (userInput > nbAleatoire) {
      window.alert("TROP HAUT !");
      nbEchecs++; // Si pas bon, on augmente le nombre d'échecs
    } else {
      window.alert("GAGNE !");
    }
  }

  scores.push(nbEchecs); // On ajoute le nombre d'échecs au tableau des scores final

  // On demande à l'utilisateur s'il veut en finir avec le jeu
  finJeu = window.confirm("Voulez-vous arrêter de jouer ?")
}

// Afficher le tableau des scores
window.alert(`=== PANNEAU DES SCORES ===
${scores.join(' échecs\n') + " échecs"}`);