// Exercice 1 : Somme de deux nombres
// Écrire une fonction somme(a, b) qui prend deux nombres en paramètres et retourne leur somme.

function somme(a,b){
    return a+b
}

console.log(somme(2,3))

// 

// Écrire une fonction max(a, b) qui retourne le plus grand des deux nombres donnés.

function max(a,b){


    if(a > b){
        return a
    }
    if(b > a){
        return b
}
}


// Exercice 2 : Vérifier si un nombre est positif, négatif ou nul

function plusOuMoin(){

    if(!isNaN(2)){
        console.error("il doit y avoir un nombre")
        return
    }else if(2< 0){
       return "nombre negatif"
    }else if(2 === 0){
        return "nombre null"
    }else{
        return "nombre positif"
    

}
}

plusOuMoin()
plusOuMoin()
plusOuMoin()
plusOuMoin()
plusOuMoin()
plusOuMoin()


// Écrire une fonction verifierNombre(n) qui prend un nombre en paramètre et affiche s'il est positif, négatif ou nul.



// Exercice 3 : Vérifier si un nombre est pair ou impair
// Écrire une fonction pairOuImpair(n) qui retourne "Pair" si n est un nombre pair, sinon "Impair".

function pairOuImpair(n){
    

    if(  n %2 === 0){

        return "pair"
    }else{

        return "impaire"
    }
  
    

}
console.log(pairOuImpair(2))
console.log(pairOuImpair(3))
console.log(pairOuImpair(43))


// Exercice 4 : Comparer deux nombres
// Écrire une fonction comparer(a, b) qui prend deux nombres et affiche :

// "a est plus grand" si a > b
// "b est plus grand" si b > a
// "Les deux sont égaux" si a === b


// Exercice 5 : Compter le nombre de voyelles dans une chaîne
// Écrire une fonction compterVoyelles(chaine) qui compte le nombre de voyelles (a, e, i, o, u, y) dans une chaîne de caractère
function compterVoyelles(chaine){
    let voyelles="aeiouyAEIOUY"
    let compteur=0

    for(let i=0;i<chaine.length;i++){

        if( voyelles.includes(chaine[i])){
            compteur++
        }
    }

    return compteur

}
console.log(compterVoyelles("bonjour les gens"))



// Exercice 6 : Calculatrice simple
// Écrire une fonction calculer(a, b, operateur) qui prend deux nombres et un opérateur (+, -, *, /) et retourne le résultat.




// Exercice 7 : Deviner un animal
// Écrire une fonction animalCri(animal) qui prend un nom d'animal ("chien", "chat", "vache", "oiseau") et retourne le son qu'il fait.