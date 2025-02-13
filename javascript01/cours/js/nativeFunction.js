// 📂 Manipulation des chaînes de caractères (String)
// indexOf(substr) - Trouve l'index de la première occurrence d'une sous-chaîne.
console.log("Bonjour".indexOf("o")); // 1

// lastIndexOf(substr) - Trouve la dernière occurrence d'une sous-chaîne.
console.log("Bonjour".lastIndexOf("o")); // 4

// includes(substr) - Vérifie si une chaîne contient une sous-chaîne.
console.log("Bonjour".includes("jour")); // true

// startsWith(substr) - Vérifie si une chaîne commence par une sous-chaîne.
console.log("Bonjour".startsWith("Bon")); // true

// endsWith(substr) - Vérifie si une chaîne se termine par une sous-chaîne.
console.log("Bonjour".endsWith("our")); // true

// slice(start, end) - Extrait une partie d’une chaîne.
console.log("Bonjour".slice(1, 4)); // "onj"

// substring(start, end) - Similaire à slice, mais ne prend pas d’index négatif.
console.log("Bonjour".substring(1, 4)); // "onj"

// replace(old, new) - Remplace une sous-chaîne par une autre.
console.log("Bonjour".replace("jour", "soir")); // "Bonsoir"

// toUpperCase() - Convertit une chaîne en majuscules.
console.log("bonjour".toUpperCase()); // "BONJOUR"

// toLowerCase() - Convertit une chaîne en minuscules.
console.log("BONJOUR".toLowerCase()); // "bonjour"

// trim() - Supprime les espaces autour d’une chaîne.
console.log("  Bonjour  ".trim()); // "Bonjour"

// split(separator) - Sépare une chaîne en tableau selon un séparateur.
console.log("Bonjour le monde".split(" ")); // ["Bonjour", "le", "monde"]

// 📌 Manipulation des tableaux (Array)
// indexOf(value) - Trouve l'index d’un élément dans un tableau.
console.log([10, 20, 30].indexOf(20)); // 1

// includes(value) - Vérifie si un tableau contient un élément.
console.log([10, 20, 30].includes(20)); // true

// push(value) - Ajoute un élément à la fin du tableau.
let arr = [1, 2];
arr.push(3);
console.log(arr); // [1, 2, 3]

// pop() - Supprime le dernier élément.
arr.pop();
console.log(arr); // [1, 2]

// shift() - Supprime le premier élément.
arr.shift();
console.log(arr); // [2]

// unshift(value) - Ajoute un élément au début.
arr.unshift(1);
console.log(arr); // [1, 2]

// slice(start, end) - Extrait une partie d'un tableau.
console.log([10, 20, 30, 40].slice(1, 3)); // [20, 30]

// splice(index, deleteCount, newItems...) - Modifie un tableau (ajout/suppression).
arr = [10, 20, 30];
arr.splice(1, 1, 25);
console.log(arr); // [10, 25, 30]

// join(separator) - Transforme un tableau en chaîne.
console.log(["Bonjour", "le", "monde"].join(" ")); // "Bonjour le monde"

// map(callback) - Transforme chaque élément d'un tableau.
console.log([1, 2, 3].map(x => x * 2)); // [2, 4, 6]

// filter(callback) - Filtre les éléments selon une condition.
console.log([10, 20, 30].filter(x => x > 15)); // [20, 30]

// reduce(callback, initialValue) - Réduit un tableau en une seule valeur.
console.log([1, 2, 3].reduce((acc, x) => acc + x, 0)); // 6

// sort() - Trie un tableau.
console.log([30, 10, 20].sort((a, b) => a - b)); // [10, 20, 30]

// reverse() - Inverse l'ordre des éléments.
console.log([1, 2, 3].reverse()); // [3, 2, 1]

// 🛠 Manipulation des objets (Object)
// Object.keys(obj) - Récupère les clés d’un objet.
let obj = { a: 1, b: 2 };
console.log(Object.keys(obj)); // ["a", "b"]

// Object.values(obj) - Récupère les valeurs d’un objet.
console.log(Object.values(obj)); // [1, 2]

// Object.entries(obj) - Renvoie un tableau de paires [clé, valeur].
console.log(Object.entries(obj)); // [["a", 1], ["b", 2]]

// Object.assign(target, source) - Copie les propriétés d’un objet dans un autre.
let obj1 = { a: 1 }, obj2 = { b: 2 };
Object.assign(obj1, obj2);
console.log(obj1); // { a: 1, b: 2 }

// JSON.stringify(obj) - Convertit un objet en chaîne JSON.
console.log(JSON.stringify({ a: 1 })); // '{"a":1}'

// JSON.parse(jsonString) - Convertit une chaîne JSON en objet.
console.log(JSON.parse('{"a":1}')); // { a: 1 }
