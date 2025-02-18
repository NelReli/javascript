//  Manipulation de Tableaux (Arrays)
const arrayFunctions = {
    // Ajoute un élément à la fin du tableau
    pushExample: function () { let arr = [1, 2]; arr.push(3); return arr; },
    // Supprime et retourne le dernier élément du tableau
    popExample: function () { let arr = [1, 2, 3]; arr.pop(); return arr; },
    // Supprime et retourne le premier élément du tableau
    shiftExample: function () { let arr = [1, 2, 3]; arr.shift(); return arr; },
    // Ajoute un élément au début du tableau
    unshiftExample: function () { let arr = [1, 2, 3]; arr.unshift(0); return arr; },
    // Modifie un tableau en ajoutant ou supprimant des éléments
    spliceExample: function () { let arr = [1, 2, 3]; arr.splice(1, 1); return arr; },
    // Extrait une partie du tableau sans le modifier
    sliceExample: function () { return [1, 2, 3, 4].slice(1, 3); },
    // Retourne l'index de la première occurrence d'un élément
    indexOfExample: function () { return ["a", "b", "c"].indexOf("b"); },
};

//  Manipulation de Chaînes (Strings)
const stringFunctions = {
    // Retourne le caractère à l'index donné
    charAtExample: function () { return "hello".charAt(1); },
    // Vérifie si la chaîne contient une sous-chaîne
    includesExample: function () { return "hello world".includes("world"); },
    // Convertit une chaîne en minuscules
    toLowerCaseExample: function () { return "HELLO".toLowerCase(); },
    // Convertit une chaîne en majuscules
    toUpperCaseExample: function () { return "hello".toUpperCase(); },
    // Supprime les espaces en début et fin de chaîne
    trimExample: function () { return " hello ".trim(); },
};

//  Manipulation des Nombres
const numberFunctions = {
    // Arrondit un nombre à l'entier le plus proche
    roundExample: function () { return Math.round(4.7); },
    // Arrondit un nombre à l'entier inférieur
    floorExample: function () { return Math.floor(4.7); },
    // Arrondit un nombre à l'entier supérieur
    ceilExample: function () { return Math.ceil(4.3); },
    // Génère un nombre aléatoire entre 0 et 1
    randomExample: function () { return Math.random(); },
};

//  Conversion de Types
const conversionFunctions = {
    // Convertit une chaîne en nombre
    numberExample: function () { return Number("42"); },
    // Convertit une chaîne en entier
    parseIntExample: function () { return parseInt("42"); },
    // Convertit une chaîne en nombre flottant
    parseFloatExample: function () { return parseFloat("42.5"); },
    // Convertit un nombre en chaîne
    toStringExample: function () { return (42).toString(); },
};

//  Gestion du Temps
const timeFunctions = {
    // Exécute une fonction après un délai
    setTimeoutExample: function () { return setTimeout(function () { console.log("Delayed"); }, 1000); },
    // Exécute une fonction de manière répétée à intervalle régulier
    setIntervalExample: function () { return setInterval(function () { console.log("Interval"); }, 1000); },
    // Retourne le timestamp actuel
    dateNowExample: function () { return Date.now(); },
};

//  Manipulation du DOM
const domFunctions = {
    // Sélectionne un élément par son ID
    getElementByIdExample: function () { return document.getElementById("example"); },
    // Sélectionne le premier élément correspondant à un sélecteur
    querySelectorExample: function () { return document.querySelector(".example"); },
    // Ajoute un écouteur d'événement à un élément
    addEventListenerExample: function () { return document.addEventListener("click", function () { console.log("Clicked"); }); },
};

//  Programmation Asynchrone
const asyncFunctions = {
    // Effectue une requête HTTP asynchrone et retourne le JSON
    fetchExample: async function () {
        let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        return response.json();
    },
};


