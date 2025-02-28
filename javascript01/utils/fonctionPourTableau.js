// ==========================
// Fonctions Utiles pour les Tableaux (Arrays)
// ==========================

// find() - Retourne le premier élément correspondant à la condition
function findExample() {
    let arr = [10, 20, 30, 40];
    return arr.find(function (element) {
        return element > 25;
    });
    // Retourne 30 (le premier élément supérieur à 25)
}

// findIndex() - Retourne l’index du premier élément correspondant à la condition
function findIndexExample() {
    let arr = [10, 20, 30, 40];
    return arr.findIndex(function (element) {
        return element > 25;
    });
    // Retourne 2 (index de 30)
}

// filter() - Retourne un tableau contenant uniquement les éléments correspondant à la condition
function filterExample() {
    let arr = [10, 20, 30, 40];
    return arr.filter(function (element) {
        return element > 20;
    });
    // Retourne [30, 40]
}

// map() - Retourne un nouveau tableau avec une transformation appliquée à chaque élément
function mapExample() {
    let arr = [1, 2, 3];
    return arr.map(function (element) {
        return element * 2;
    });
    // Retourne [2, 4, 6]
}

// forEach() - Applique une fonction à chaque élément (ne retourne rien)
function forEachExample() {
    let arr = [1, 2, 3];
    arr.forEach(function (element) {
        console.log(element);
    });
    // Affiche 1, 2, 3
}

// reduce() - Réduit le tableau à une seule valeur
function reduceExample() {
    let arr = [1, 2, 3, 4];
    return arr.reduce(function (accumulateur, element) {
        return accumulateur + element;
    }, 0);
    // Retourne 10 (somme des éléments)
}

// every() - Vérifie si tous les éléments respectent une condition
function everyExample() {
    let arr = [10, 20, 30];
    return arr.every(function (element) {
        return element > 5;
    });
    // Retourne true (tous > 5)
}

// some() - Vérifie si au moins un élément respecte une condition
function someExample() {
    let arr = [10, 20, 30];
    return arr.some(function (element) {
        return element > 25;
    });
    // Retourne true (au moins 30 > 25)
}

// sort() - Trie le tableau (modifie l’original)
function sortExample() {
    let arr = [3, 1, 4, 1, 5, 9];
    return arr.sort(function (a, b) {
        return a - b; // Tri croissant
    });
    // Retourne [1, 1, 3, 4, 5, 9]
}

// reverse() - Inverse l’ordre des éléments (modifie l’original)
function reverseExample() {
    let arr = [1, 2, 3];
    return arr.reverse();
    // Retourne [3, 2, 1]
}

// join() - Crée une chaîne de caractères à partir des éléments d’un tableau
function joinExample() {
    let arr = ["a", "b", "c"];
    return arr.join("-");
    // Retourne "a-b-c"
}

// concat() - Concatène plusieurs tableaux et retourne un nouveau tableau
function concatExample() {
    let arr1 = [1, 2];
    let arr2 = [3, 4];
    return arr1.concat(arr2);
    // Retourne [1, 2, 3, 4]
}

// includes() - Vérifie si un élément est présent dans le tableau
function includesExample() {
    let arr = [1, 2, 3];
    return arr.includes(2);
    // Retourne true
}
