


// fonction pour faire un console log perso
export function consol(message){

    console.log(message)
}

//fonction pour créer des élements dans le dom
 export function textDom(text,element,id,styleCss) {
    
    let container = document.getElementById(id); // Sélectionne un élément existant
    if (!container) {  // Si l'élément id n'existe pas
        console.error("L'élément avec ID  n'existe pas !");
      return
    }

    let elementHtml = document.createElement(element); // Crée un élément 
    elementHtml.textContent = text; // Ajoute le texte 
    elementHtml.style=styleCss
    container.appendChild(elementHtml); // Ajoute le <h1> dans la div #result
}





























































// Convertit la première lettre d'une chaîne en majuscule
export function majFirst(chaine) {
    const maj=chaine.charAt(0).toUpperCase() + chaine.slice(1);
    console.log("majuscule first",maj)
    return maj
}