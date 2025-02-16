"use strict";

/**
 * Cours : Manipulation du DOM en JavaScript
 * Objectifs : Comprendre comment sélectionner, modifier, ajouter et supprimer des éléments dans le DOM.
 */

// 1. Sélection des éléments
const titre = document.getElementById("titre"); // Sélection par ID
const paragraphes = document.getElementsByTagName("p"); // Sélection par balise
const elementsClasse = document.getElementsByClassName("ma-classe"); // Sélection par classe
const premierParagraphe = document.querySelector("p"); // Sélection du premier élément correspondant
const tousParagraphes = document.querySelectorAll("p"); // Sélection de tous les éléments correspondants

// 2. Modification du contenu
if (titre) {
    titre.textContent = "Nouveau titre"; // Change le texte du titre
    titre.innerHTML = "<span style='color:red'>Titre coloré</span>"; // Modifie le HTML interne
}

// 3. Modification des styles
if (titre) {
    titre.style.color = "blue";
    titre.style.fontSize = "24px";
    titre.style.fontWeight = "bold";
    titre.style.backgroundColor = "lightgray";
    titre.style.padding = "10px";
    titre.style.borderRadius = "5px";
}

// Modifier plusieurs éléments
if (tousParagraphes.length > 0) {
    tousParagraphes.forEach(p => {
        p.style.color = "green";
        p.style.fontSize = "18px";
        p.style.margin = "10px 0";
    });
}

// 4. Gestion des classes CSS
if (titre) {
    titre.classList.add("nouvelle-classe"); // Ajouter une classe
    titre.classList.remove("ancienne-classe"); // Supprimer une classe
    titre.classList.toggle("toggle-classe"); // Ajouter si absente, supprimer si présente
}

// 5. Création et insertion d'éléments
const nouveauParagraphe = document.createElement("p"); // Création d'un élément
nouveauParagraphe.textContent = "Ceci est un paragraphe ajouté dynamiquement.";
document.body.appendChild(nouveauParagraphe); // Ajout à la fin du <body>

// 6. Suppression d'éléments
document.body.removeChild(nouveauParagraphe); // Supprime l'élément ajouté

// 7. Gestion des événements
// Ajouter un gestionnaire d'événements avec addEventListener
titre.addEventListener("click", function() {
    alert("Titre cliqué !");
});

// Modifier le style au survol avec mouseover et mouseout
titre.addEventListener("mouseover", function() {
    titre.style.color = "red";
});

titre.addEventListener("mouseout", function() {
    titre.style.color = "blue";
});

// Gestion des événements sur un bouton
const bouton = document.querySelector("#monBouton");
const input = document.querySelector("#monInput");

if (bouton && input) {
    bouton.addEventListener("click", function() {
        alert("Vous avez tapé : " + input.value);
        return input.value
    });
}

// Ajout d'un événement au chargement de la page
document.addEventListener("DOMContentLoaded", function() {
    console.log("La page est chargée et prête à l'utilisation.");
});
