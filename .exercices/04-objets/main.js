class Student {
  nom; // string
  prenom; // string
  classeEcole; // string

  notesFr; // number[]
  notesMaths; // number[]
  notesSciences; // number[]
  notesSport; // number[]

  constructor(nom, prenom, classeEcole) {
    // On va initialiser via le constructeurs les champs de nom, prénom et classe en se basant sur les paramètres d'entrées
    this.nom = nom;
    this.prenom = prenom;
    this.classeEcole = classeEcole;

    // Les tableaux de notes sont quant à eux initialisés vides
    this.notesFr = [];
    this.notesMaths = [];
    this.notesSciences = [];
    this.notesSport = [];
  }
}

let listeEleves = []; // Future liste de nos élèves
let stopProgramme = "";  // Récupération permettant de stopper au besoin la saisie des élèves

while (stopProgramme != "STOP") {
  let nomNouvelEleve = window.prompt("Veuilliez donner le nom de l'élève :");
  let prenomNouvelEleve = window.prompt("Veuilliez donner le prénom de l'élève :");
  let classeEcoleNouvelEleve = window.prompt("Veuilliez donner la classe de l'élève :");

  // On crée un objet de type student de sorte à avoir un objet permettant l'ajout futur des notes
  let nouvelEleve = new Student(nomNouvelEleve, prenomNouvelEleve, classeEcoleNouvelEleve);

  // On crée une variable servant à la saisie de la note de sorte à pouvoir ensuite contrôler l'arrêt de la saisie via '-1'
  let noteEnCoursDAjout = "";
  while (noteEnCoursDAjout != "-1") {
    noteEnCoursDAjout = window.prompt("Veuillez donner une note de Français :");

    if (noteEnCoursDAjout != "-1") {
      nouvelEleve.notesFr.push(+noteEnCoursDAjout); // On ajoute la version numérique de la note au tableau de sorte à ne traiter au sein de cette variable que des nombres (évite de fausser les futurs additions et de les traiter comme des concaténations)
    }
  }

    noteEnCoursDAjout = "";
    while (noteEnCoursDAjout != "-1") {
    noteEnCoursDAjout = window.prompt("Veuillez donner une note de Mathématiques :");

    if (noteEnCoursDAjout != "-1") {
      nouvelEleve.notesMaths.push(+noteEnCoursDAjout);
    }
  }

    noteEnCoursDAjout = "";
    while (noteEnCoursDAjout != "-1") {
    noteEnCoursDAjout = window.prompt("Veuillez donner une note de Sciences Naturelles :");

    if (noteEnCoursDAjout != "-1") {
      nouvelEleve.notesSciences.push(+noteEnCoursDAjout);
    }
  }

    noteEnCoursDAjout = "";
    while (noteEnCoursDAjout != "-1") {
    noteEnCoursDAjout = window.prompt("Veuillez donner une note de Sport :");

    if (noteEnCoursDAjout != "-1") {
      nouvelEleve.notesSport.push(+noteEnCoursDAjout);
    }
  }

  listeEleves.push(nouvelEleve);

  stopProgramme = window.prompt("Ecrire STOP pour mettre fin à la saisie des élèves");
}

for(let i = 0; i < listeEleves.length; i++) {

  // Par matière, on va calculer la moyenne en faisant la somme de l'ensemble de ses notes puis les diviser par le nombre de notes présentes dans le tableau
  let sommeFr = 0;
  for(let j = 0; j < listeEleves[i].notesFr.length; j++) {
    sommeFr = sommeFr + listeEleves[i].notesFr[j];
  }
  let moyenneFr = sommeFr / listeEleves[i].notesFr.length;

  let sommeMaths = 0;
  for(let j = 0; j < listeEleves[i].notesMaths.length; j++) {
    sommeMaths = sommeMaths + listeEleves[i].notesMaths[j];
  }
  let moyenneMaths = sommeMaths / listeEleves[i].notesMaths.length;

  let sommeSciences = 0;
  for(let j = 0; j < listeEleves[i].notesSciences.length; j++) {
    sommeSciences = sommeSciences + listeEleves[i].notesSciences[j];
  }
  let moyenneSciences = sommeSciences / listeEleves[i].notesSciences.length;

  let sommeSport = 0;
  for(let j = 0; j < listeEleves[i].notesSport.length; j++) {
    sommeSport = sommeSport + listeEleves[i].notesSport[j];
  }
  let moyenneSport = sommeSport / listeEleves[i].notesSport.length;

  // On termine par un affichage plus sympathique pour l'utilisateur
  window.alert(`=== MOYENNES DE L'ELEVE ===
    Nom: ${listeEleves[i].nom}
    Prénom: ${listeEleves[i].prenom}
    Classe: ${listeEleves[i].classeEcole}

    Moyenne de Français: ${moyenneFr}
    Moyenne de Mathématiques: ${moyenneMaths}
    Moyenne de Sciences Naturelles: ${moyenneSciences}
    Moyenne de Sport:  ${moyenneSport}`);
}

