"use strict";

/**
 * Exercice 1 : Modifier le texte d'un bouton au clic
 */
const bouton1 = document.getElementById("bouton1");
bouton1.addEventListener("click", function() {
    bouton1.textContent = "Clic détecté !";
});

/**
 * Exercice 2 : Changer la couleur de fond d'un champ au focus et la réinitialiser au blur
 */
const input1 = document.getElementById("input1");
input1.addEventListener("focus", function() {
    input1.style.backgroundColor = "yellow";
});
input1.addEventListener("blur", function() {
    input1.style.backgroundColor = "";
});

/**
 * Exercice 3 : Afficher le texte tapé en temps réel
 */
const input2 = document.getElementById("input2");
const affichage = document.getElementById("affichage");
input2.addEventListener("input", function() {
    affichage.textContent = "Vous avez tapé : " + input2.value;
});

/**
 * Exercice 4 : Afficher une boîte de dialogue au double-clic sur un paragraphe
 */
const paragraphe = document.getElementById("paragraphe");
paragraphe.addEventListener("dblclick", function() {
    alert("Paragraphe double-cliqué !");
});

/**
 * Exercice 5 : Détecter le survol d'un élément et modifier son style
 */
const zoneSurvol = document.getElementById("zoneSurvol");
zoneSurvol.addEventListener("mouseover", function() {
    zoneSurvol.style.color = "red";
});
zoneSurvol.addEventListener("mouseout", function() {
    zoneSurvol.style.color = "black";
});

/**
 * Exercice 6 : Ajouter un nouvel élément à une liste au clic sur un bouton
 */
const boutonAjout = document.getElementById("boutonAjout");
const liste = document.getElementById("liste");
boutonAjout.addEventListener("click", function() {
    const nouvelElement = document.createElement("li");
    nouvelElement.textContent = "Nouvel élément ajouté";
    liste.appendChild(nouvelElement);
});

/**
 * Exercice 7 : Afficher les coordonnées de la souris au déplacement
 */
const coordonnees = document.getElementById("coordonnees");
document.addEventListener("mousemove", function(event) {
    coordonnees.textContent = `X: ${event.clientX}, Y: ${event.clientY}`;
});
