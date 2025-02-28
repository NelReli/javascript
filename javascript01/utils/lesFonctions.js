// =============================
// Cours Complet - Les Fonctions en JavaScript
// =============================

// 1. Declaration d'une fonction simple
function direBonjour() {
    console.log("Bonjour !");
}

// 2. Fonction avec paramètres
function addition(a, b) {
    return a + b;
}

// 3. Appel de fonction
console.log(addition(5, 10)); // 15

direBonjour(); // Bonjour !

// 4. Paramètres et arguments
function multiplier(x, y) {
    return x * y;
}

console.log(multiplier(3, 4)); // 12

// 5. Fonction avec retour de valeur
function carre(n) {
    return n * n;
}

console.log(carre(5)); // 25

// 6. Différents types de fonctions

// a) Fonction classique
function saluer(nom) {
    return "Bonjour " + nom;
}

// b) Fonction anonyme
const saluerAnonyme = function(nom) {
    return "Bonjour " + nom;
};

// c) Fonction fléchée
const saluerFlechee = (nom) => "Bonjour " + nom;

console.log(saluer("Alice"));
console.log(saluerAnonyme("Bob"));
console.log(saluerFlechee("Charlie"));

// 7. Paramètres avec valeur par défaut
function bienvenue(nom = "visiteur") {
    return "Bienvenue " + nom;
}

console.log(bienvenue()); // Bienvenue visiteur

// 8. Fonction sans paramètres
function afficherDate() {
    console.log(new Date());
}

afficherDate();

// 9. Fonction anonyme auto-exécutée
(function() {
    console.log("Je m’exécute immédiatement !");
})();

// 10. Fonctions callback
function operation(a, b, callback) {
    return callback(a, b);
}

function additionCallback(x, y) {
    return x + y;
}

function multiplicationCallback(x, y) {
    return x * y;
}

console.log(operation(3, 5, additionCallback)); // 8
console.log(operation(3, 5, multiplicationCallback)); // 15

// Exemple complet - Calcul de prix TTC
function calculerPrixTTC(prixHT, tauxTVA = 20) {
    return prixHT + (prixHT * tauxTVA / 100);
}

console.log(calculerPrixTTC(100)); // 120
console.log(calculerPrixTTC(100, 5.5)); // 105.5
