
let toto = document.getElementById("clickMeBtn");
const emptyULElement = document.querySelector('#emptyUL');

toto.addEventListener("click", () => {
  console.log("Le bouton a été cliqué !");
});

const nombres = [1, 4, 7];

for (let i = 0; i < nombres.length; i++) {
  const nouveauLIElement = document.createElement('li');
  nouveauLIElement.textContent = nombres[i];
  emptyULElement.appendChild(nouveauLIElement);
}


