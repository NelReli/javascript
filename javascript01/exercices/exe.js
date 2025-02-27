// exercices_javascript.js

// 1. Déclarer une variable et l'afficher
let nom = "Alice";
console.log(nom); // Alice

// 2. Additionner deux nombres
let a = 5;
let b = 10;
console.log(a + b); // 15

// 3. Vérifier si un nombre est pair ou impair
let nombre = 7;
console.log(nombre % 2 === 0 ? "Pair" : "Impair"); // Impair

// 4. Trouver le plus grand entre deux nombres
let x = 15;
let y = 20;
console.log(Math.max(x, y)); // 20

// 5. Échanger les valeurs de deux variables
let c = 3, d = 8;
[c, d] = [d, c];
console.log(c, d); // 8, 3

// 6. Vérifier si un nombre est positif, négatif ou nul
let nombre2 = -3;
console.log(nombre2 > 0 ? "Positif" : nombre2 < 0 ? "Négatif" : "Nul"); // Négatif

// 7. Parcourir un tableau avec une boucle for
let tableau = [1, 2, 3, 4, 5];
for (let i = 0; i < tableau.length; i++) {
    console.log(tableau[i]);
}

// 8. Parcourir un tableau avec une boucle while
let index = 0;
while (index < tableau.length) {
    console.log(tableau[index]);
    index++;
}

// 9. Trouver la somme d’un tableau avec une boucle for
let somme = 0;
for (let i = 0; i < tableau.length; i++) {
    somme += tableau[i];
}
console.log(somme); // 15

// 10. Trouver la somme d’un tableau avec une boucle while
let sommeWhile = 0;
let i = 0;
while (i < tableau.length) {
    sommeWhile += tableau[i];
    i++;
}

// 11. Trouver l'index d'un élément dans un tableau avec une boucle for
let elementCherche = 3;
let indexTrouve = -1;
for (let i = 0; i < tableau.length; i++) {
    if (tableau[i] === elementCherche) {
        indexTrouve = i;
        break;
    }
}
console.log(indexTrouve); // 2



// 12. Vérifier si un utilisateur a l'âge requis
let age = 18;
console.log(age >= 18 ? "Autorisé" : "Non autorisé"); // Autorisé

// 13. Vérifier si une variable est définie
let variable;
console.log(typeof variable !== "undefined" ? "Définie" : "Non définie"); // Non définie

// 14. Vérifier si une valeur est un nombre
let valeurTest = "42";
console.log(!isNaN(valeurTest) ? "C'est un nombre" : "Ce n'est pas un nombre"); // C'est un nombre

//****************************************** */


// exercices_javascript.js

// 1. Modifier le contenu HTML d'un élément
function changeText() {
    document.getElementById("demo").innerHTML = "Texte modifié !";
}

// 2. Ajouter un élément à un tableau et l'afficher
let tableau = ["Pomme", "Banane", "Orange"];
function addElement() {
    let newElement = prompt("Entrez un nouvel élément :");
    if (newElement) {
        tableau.push(newElement);
        document.getElementById("list").innerHTML = tableau.join(", ");
    }
}

// 3. Parcourir un tableau avec une boucle for et afficher son contenu
function showArray() {
    let result = "";
    for (let i = 0; i < tableau.length; i++) {
        result += tableau[i] + "<br>";
    }
    document.getElementById("arrayOutput").innerHTML = result;
}

// 4. Vérifier si un nombre est pair ou impair et l'afficher
function checkNumber() {
    let number = parseInt(document.getElementById("numberInput").value);
    document.getElementById("numberResult").innerHTML = number % 2 === 0 ? "Pair" : "Impair";
}

// 5. Concaténer deux chaînes saisies par l'utilisateur
function concatenateStrings() {
    let str1 = document.getElementById("string1").value;
    let str2 = document.getElementById("string2").value;
    document.getElementById("concatResult").innerHTML = str1 + " " + str2;
}

// 6. Ajouter des éléments à une liste HTML en boucle
function addItems() {
    let ul = document.getElementById("itemList");
    ul.innerHTML = "";
    for (let i = 1; i <= 5; i++) {
        let li = document.createElement("li");
        li.innerText = "Élément " + i;
        ul.appendChild(li);
    }
}

// 7. Changer la couleur d'un texte en fonction d'une condition
function changeColor() {
    let text = document.getElementById("colorText");
    text.style.color = text.innerHTML.length > 10 ? "red" : "green";
}

// 8. Inverser une chaîne de caractères saisie par l'utilisateur
function reverseString() {
    let input = document.getElementById("reverseInput").value;
    document.getElementById("reverseOutput").innerHTML = input.split("").reverse().join("");
}

// 9. Ajouter des nombres dans un tableau et les afficher triés
let numbers = [];
function addNumber() {
    let num = parseInt(prompt("Entrez un nombre :"));
    if (!isNaN(num)) {
        numbers.push(num);
        numbers.sort((a, b) => a - b);
        document.getElementById("sortedNumbers").innerHTML = numbers.join(", ");
    }
}

// 10. Vérifier si un élément est présent dans un tableau
function checkElement() {
    let search = document.getElementById("searchElement").value;
    document.getElementById("searchResult").innerHTML = tableau.includes(search) ? "Présent" : "Absent";
}

// 11. Modifier dynamiquement le style d'un élément
function toggleStyle() {
    let element = document.getElementById("styledText");
    element.style.fontSize = element.style.fontSize === "20px" ? "30px" : "20px";
}

// 12. Afficher les nombres de 1 à 10 avec une boucle for
function displayNumbers() {
    let result = "";
    for (let i = 1; i <= 10; i++) {
        result += i + " ";
    }
    document.getElementById("numberDisplay").innerHTML = result;
}

// 13. Ajouter un paragraphe au clic d'un bouton
function addParagraph() {
    let para = document.createElement("p");
    para.innerText = "Nouveau paragraphe ajouté.";
    document.getElementById("paragraphContainer").appendChild(para);
}

// 14. Basculer la visibilité d'un élément
function toggleVisibility() {
    let element = document.getElementById("toggleElement");
    element.style.display = element.style.display === "none" ? "block" : "none";
}

// 15. Vérifier si une entrée contient uniquement des chiffres
function isNumeric() {
    let input = document.getElementById("numericInput").value;
    document.getElementById("numericResult").innerHTML = /^[0-9]+$/.test(input) ? "Valide" : "Invalide";
}

// 16. Ajouter un événement de clic à chaque élément d'une liste
function addClickEvent() {
    let items = document.querySelectorAll(".clickable");
    items.forEach(item => {
        item.addEventListener("click", () => alert("Vous avez cliqué sur : " + item.innerText));
    });
}

// 17. Générer un tableau de nombres aléatoires
function generateRandomArray() {
    let array = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
    document.getElementById("randomArray").innerHTML = array.join(", ");
}

// 18. Afficher une alerte au survol d'un élément
function addHoverAlert() {
    document.getElementById("hoverBox").addEventListener("mouseover", () => alert("Vous avez survolé la boîte!"));
}

// 19. Récupérer la valeur d'un champ et l'afficher
function showInputValue() {
    let inputValue = document.getElementById("inputValue").value;
    document.getElementById("displayValue").innerHTML = inputValue;
}

// 20. Désactiver un bouton après un clic
function disableButton() {
    document.getElementById("disableBtn").disabled = true;
}
