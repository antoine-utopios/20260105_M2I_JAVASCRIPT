function journeeTravail() {
  console.log("Bonjour");
  console.log("Bien dormi ?");
  console.log("Prends ton petit dej !");
  console.log("Bon appetit");
  console.log("Comment s'est passé ta journée ?");
  console.log("Bonne nuit");
}

function journeeTravailRepetee(nbRepetition) {
  for (let i = 0; i < nbRepetition; i++) {
    journeeTravail();
  }
}

function randomNumber(nbMax) {
  let nbAlea = Math.random(); // 0 - 1
  let nb0EtnbMax = nbAlea * nbMax; // 0 - nbMax
  let nbFinal = Math.ceil(nb0EtnbMax); // 1 - nbMax
  return nbFinal;
}

let nbGagnant = randomNumber(50);
let autreNgGagnant = randomNumber(200);


journeeTravail();

// Reste du code...

journeeTravailRepetee(5);

// Reste du code...

journeeTravailRepetee(10);