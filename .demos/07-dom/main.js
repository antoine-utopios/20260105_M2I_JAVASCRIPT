class AppUser {
  firstName;
  lastName;
  age;

  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

// function direBonjour() {
//   window.alert("Hello world");
// }

// document.getElementById("helloWorldBtn").addEventListener('click', direBonjour)

document.getElementById("helloWorldBtn").addEventListener('click', () => {
  window.alert("Hello world")
});

document.getElementById("addUserBtn").addEventListener("click", () => {
  let prenom = document.getElementById("firstName").value;
  let nom = document.getElementById("lastName").value;
  let age = +document.getElementById("age").value;

  let nouvelLI = document.createElement('li')
  nouvelLI.textContent = `Nom: ${nom} | Prenom: ${prenom} | Age: ${age}`;

  document.getElementById("userListUL").appendChild(nouvelLI)
 
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("age").value = 0;
});

function recuperationDonnes() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(response => response.json())  
  .then(json => {
      console.log(json);
    })  
}

async function recuperationDonnesModerne() {
  let response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
  let data = await response.json();
  console.log(data);
  
}

document.getElementById("testFetchBtn").addEventListener("click", recuperationDonnesModerne)