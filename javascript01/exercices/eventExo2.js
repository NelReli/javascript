"use strict";

/**
 * Exercice 1 : Changer le texte de plusieurs boutons au clic
 */
const boutons = document.querySelectorAll(".btn");
for (let i = 0; i < boutons.length; i++) {
    boutons[i].addEventListener("click", function() {
        boutons[i].textContent = "Bouton cliqué !";
    });
}

/**
 * Exercice 2 : Modifier la couleur de plusieurs inputs au focus et reset au blur
 */
const inputs = document.querySelectorAll(".input-focus");
for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("focus", function() {
        inputs[i].style.backgroundColor = "lightblue";
    });
    inputs[i].addEventListener("blur", function() {
        inputs[i].style.backgroundColor = "";
    });
}

/**
 * Exercice 3 : Supprimer un élément d'une liste au clic
 */
const items = document.querySelectorAll(".item");
for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function() {
        items[i].remove();
    });
}

/**
 * Exercice 4 : Ajouter un élément à une liste au clic sur un bouton
 */
const boutonAjoutListe = document.getElementById("ajouterListe");
const listeElements = document.getElementById("maListe");

boutonAjoutListe.addEventListener("click", function() {
    const nouvelItem = document.createElement("li");
    nouvelItem.textContent = "Nouvel élément";
    listeElements.appendChild(nouvelItem);
});

/**
 * Exercice 5 : Afficher un message lorsqu'une touche du clavier est enfoncée
 */
const clavierAffichage = document.getElementById("clavierMessage");
document.addEventListener("keydown", function(event) {
    clavierAffichage.textContent = "Touche pressée : " + event.key;
});

/**
 * Exercice 6 : Modifier le style de plusieurs paragraphes au survol
 */
const paragraphes = document.querySelectorAll(".paragraphe");
for (let i = 0; i < paragraphes.length; i++) {
    paragraphes[i].addEventListener("mouseover", function() {
        paragraphes[i].style.color = "green";
    });
    paragraphes[i].addEventListener("mouseout", function() {
        paragraphes[i].style.color = "black";
    });
}

/**
 * Exercice 7 : Déplacer un élément avec les flèches du clavier
 */
const deplacementElement = document.getElementById("carre");
let positionX = 0;
let positionY = 0;

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowRight") {
        positionX += 10;
    } else if (event.key === "ArrowLeft") {
        positionX -= 10;
    } else if (event.key === "ArrowDown") {
        positionY += 10;
    } else if (event.key === "ArrowUp") {
        positionY -= 10;
    }
    deplacementElement.style.transform = `translate(${positionX}px, ${positionY}px)`;
});

/**
 * Exercice 8 : Afficher une liste d'éléments depuis un tableau et ajouter un événement au clic
 */
const utilisateurs = ["Alice", "Bob", "Charlie", "David"];
const listeUtilisateurs = document.getElementById("listeUtilisateurs");

for (let i = 0; i < utilisateurs.length; i++) {
    const li = document.createElement("li");
    li.textContent = utilisateurs[i];
    li.addEventListener("click", function() {
        alert("Utilisateur sélectionné : " + utilisateurs[i]);
    });
    listeUtilisateurs.appendChild(li);
}
