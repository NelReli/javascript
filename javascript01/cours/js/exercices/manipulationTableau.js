
// exo 1 operation de base sur un tableau

// créer un tablaeu contenant "pomme" "banane" "cerise" "orange"

// ajouter "kiwi" à la fin []
// const fruits=["pomme","banane","cerise","orange"]
// et "ananas " au début

// suprimer dernier élémént

// afficher la longueur du tableau

// utiliser les consoles log




















fruits.push("kiwi")
fruits.unshift("ananas")
fruits.pop()
console.log(fruits.length)





// exo 2 recherche dans un tableau
// creer un tableau let nombres =[10,25,45,38,50]
// verifier si le nombre 30  est présent dans le tableau 
//trouvez l'index de 45


const nombres=[10,25,45,38,50]

const contient30=nombres.includes(30)
if(contient30){
    console.log("le tab contient 30")
}else{
    console.log("not 30")
}

let index=nombres.indexOf(45)


if(index >=0){
    console.log("index de 45 est :",index)
}
console.log(index)


// exo3 3 filtrer un tableau
//creer un tableau contenant 2 5 8 11 14 17 
// creer un nouveau tableau contenant des nombre supérieur à 10

const tab=[1,5,8.11,14,17]
const newTab=tab.filter(
    function sup(parametre){

        return parametre >=10

    }
)
console.log(newTab)


// EXERCICE 

// creer un tableau utilisateur contenant des sous tableaux [nom, role,email] comme ceci 
let utilisateurs = [
    ["Alice Dupont", "alice@example.com", "admin"],
    ["Bob Martin", "bob@example.com", "utilisateur"],
    ["Charlie Durand", "charlie@example.com", "moderateur"]
];

// creer une fonction pour ajouter un utlisateur

// créer une pour supprimer un utilisateur

// créer une fonction pourafficher liste des utilisateurs





















