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

function plusOuMoin(parametre){
// isNaN si not a number
    if(!isNaN(parametre)){
        console.error("il doit y avoir un nombre")
        return
    }else if(parametre< 0){
       return "nombre negatif"
    }else if(parametre === 0){
        return "nombre null"
    }else{
        return "nombre positif"
    

}
}

plusOuMoin("chaton")
plusOuMoin(-5)
plusOuMoin(10)
plusOuMoin(0)
plusOuMoin(-4)
plusOuMoin("chiot")


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

function compterVoyelles(chaine){
    let voyelles="aeiouyAEIOUY"
    let compteur=0

    for(let i=0;i<chaine.length;i++){
console.log(chaine[i])
        if( voyelles.includes(chaine[i])){
            compteur++
        }
    }

    return compteur

}
console.log("compteur :",compterVoyelles("bonjour les gens"))



function criAnimals(animal){


    switch(animal){  

        case "chien":
            return "ouaf"
        case "chat":
            return "miaou"    
        default :
        return " je ne vais pas faire tous les animaux de la planète !!!"    
   

    }
}
console.log( "cris animaux : ", criAnimals("chat"))
console.log( "cris animaux : ", criAnimals("cheval"))



function plusOuMoin(chiffre){

    if(isNaN(chiffre)){
        console.error("il doit y avoir un nombre")
   
    }else if(chiffre< 0){
       return "nombre negatif"
    }else if(chiffre === 0){
        return "nombre null"
    }else{
        return "nombre positif"
    

}
}

console.log( "plus ou moins 1",plusOuMoin(-1))
console.log( "plus ou moins 2",plusOuMoin(3))
console.log( "plus ou moins 3",plusOuMoin(0))
console.log( "plus ou moins 4",plusOuMoin("chaine"))
console.log( "plus ou moins 5",plusOuMoin(-3))
console.log( "plus ou moins 6",plusOuMoin(10))
console.log( "plus ou moins 7",plusOuMoin(-50))
console.log( "plus ou moins 10",plusOuMoin(0))
console.log( "plus ou moins 11",plusOuMoin("chaine"))




// let stock= Number(prompt("ecris un chiffre"))

// console.log(" reponse prompt avec variable", plusOuMoin(stock)
// )

function pairOuImpair(n){
    

    if(  n % 2  === 0){

        return "pair"
    }else{

        return "impaire"
    }
  
    

}
console.log(pairOuImpair(2))
console.log(pairOuImpair(3))
console.log(pairOuImpair(43))


// exercice calculatrice 

function calculer (a,b,operateur){


    switch(operateur){
        case "+":
            return a+b
        case "-":
            return a-b    
        case "*":
            return a*b

        case "/":
            if(b !== 0){
              return a / b
            }else{
                return "erreur : division par zero impossible"
            }
        case "/" :

            //operateur conditionnel (ternaire) pour simplifier le if et le else 
            // condition ? si vrai : si faux
            // si b !==0 alors( ? ) division sinon( : ) 'erreur...
            return b!==0 ? a / b :"erreur : division par zero impossible"
        
        default: 
        return "operateur invalide"
    }
}

console.log(calculer(10,5,"+"))
console.log(calculer(10,5,"-"))
console.log(calculer(10,5,"*"))
console.log(calculer(10,5,"/"))
console.log(calculer(10,0,"/"))


// Exercice 6 : Calculatrice simple
// Écrire une fonction calculer(a, b, operateur) qui prend deux nombres et un opérateur (+, -, *, /) et retourne le résultat.




// Exercice 7 : Deviner un animal
// Écrire une fonction animalCri(animal) qui prend un nom d'animal ("chien", "chat", "vache", "oiseau") et retourne le son qu'il fait.