// ==========================
// Manipulation de Tableaux
// ==========================

// Ajoute un élément à la fin du tableau
function pushExample() {
    let arr = [1, 2];
    arr.push(3);
    return arr;
}

// Supprime et retourne le dernier élément du tableau
function popExample() {
    let arr = [1, 2, 3];
    arr.pop();
    return arr;
}

// Supprime et retourne le premier élément du tableau
function shiftExample() {
    let arr = [1, 2, 3];
    arr.shift();
    return arr;
}

// Ajoute un élément au début du tableau
function unshiftExample() {
    let arr = [1, 2, 3];
    arr.unshift(0);
    return arr;
}

// Modifie un tableau en ajoutant ou supprimant des éléments
function spliceExample() {
    let arr = [1, 2, 3];
    arr.splice(1, 1);  // Supprime 1 élément à partir de l'index 1
    return arr;
}

// Extrait une partie du tableau sans le modifier
function sliceExample() {
    return [1, 2, 3, 4].slice(1, 3);
}

// Retourne l'index de la première occurrence d'un élément
function indexOfExample() {
    return ["a", "b", "c"].indexOf("b");
}

// ==========================
// Manipulation de Chaînes
// ==========================

// Retourne le caractère à l'index donné
function charAtExample() {
    return "hello".charAt(1);
}

// Vérifie si la chaîne contient une sous-chaîne
function includesExample() {
    return "hello world".includes("world");
}

// Convertit une chaîne en minuscules
function toLowerCaseExample() {
    return "HELLO".toLowerCase();
}

// Convertit une chaîne en majuscules
function toUpperCaseExample() {
    return "hello".toUpperCase();
}

// Supprime les espaces en début et fin de chaîne
function trimExample() {
    return " hello ".trim();
}

// ==========================
// Manipulation des Nombres
// ==========================

// Arrondit un nombre à l'entier le plus proche
function roundExample() {
    return Math.round(4.7);
}

// Arrondit un nombre à l'entier inférieur
function floorExample() {
    return Math.floor(4.7);
}

// Arrondit un nombre à l'entier supérieur
function ceilExample() {
    return Math.ceil(4.3);
}

// Génère un nombre aléatoire entre 0 et 1
function randomExample() {
    return Math.random();
}

// ==========================
// Conversion de Types
// ==========================

// Convertit une chaîne en nombre
function numberExample() {
    return Number("42");
}

// Convertit une chaîne en entier
function parseIntExample() {
    return parseInt("42");
}

// Convertit une chaîne en nombre flottant
function parseFloatExample() {
    return parseFloat("42.5");
}

// Convertit un nombre en chaîne
function toStringExample() {
    return (42).toString();
}

// ==========================
// Gestion du Temps
// ==========================

// Exécute une fonction après un délai
function setTimeoutExample() {
    return setTimeout(function () {
        console.log("Delayed");
    }, 1000);
}

// Exécute une fonction de manière répétée à intervalle régulier
function setIntervalExample() {
    return setInterval(function () {
        console.log("Interval");
    }, 1000);
}

// Retourne le timestamp actuel
function dateNowExample() {
    return Date.now();
}

// ==========================
// Manipulation du DOM
// ==========================

// Sélectionne un élément par son ID
function getElementByIdExample() {
    return document.getElementById("example");
}

// Sélectionne le premier élément correspondant à un sélecteur
function querySelectorExample() {
    return document.querySelector(".example");
}

// Ajoute un écouteur d'événement à un élément
function addEventListenerExample() {
    return document.addEventListener("click", function () {
        console.log("Clicked");
    });
}

// ==========================
// Programmation Asynchrone
// ==========================

// Effectue une requête HTTP asynchrone et retourne le JSON
async function fetchExample() {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    return response.json();
}
