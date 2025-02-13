import { consol ,textDom,majFirst } from "./utils.js"

/************************* *
LES FONCTIONS
*************************
*/


// Une fonction en Javascript est un bloc de code réutilisable qui éxécute une tâche spécifique.

// Elle peut recevoir des paramètres, effectuer des opérations et retourner un resultat


// on peut declarer une fonction en utilisant les mot clé " function "


function direBonjour() {

    console.log("bonjour")

}

// Ici direBonjour est une fonction qui affiche bonjour dans la console
// Pour exécuté cette fonction on doit l'appeler, ne pas oublier les parenthèses

direBonjour() // affiche "bonjour dans la console"





consol("j'écris mon message")

let b=12

consol(typeof b)

// creer un fonction réutilisable avec paramètre qui multiplie par deux une variable

let c= 3
let d=4

function fois2(n){


    return n*2

}

console.log( fois2(c) )
console.log( fois2(d) )
consol( fois2(d) )




// ecrire une fonction réutilisable avec paramètre, qui ecris un  texte dans le dom avec write()

let text = " je suis le texte"
let text2="je suis le 2eme texte"

let text3="autre phrase dans un autre id"

//appelle de la fonction texdom depuis le fichier utils.js
    textDom(text,"div","autre","border:1px solid black")
    textDom(text2,"h1","result","color:red")
    textDom(text3,"h3","result2")




// function avec return 
// une fonction peut retourner une valeur avec return, après return la fonction s'arrète et tout le code en dessous ne sera pas lu

function addition( a,b){

  
    return a + b

    

}
consol( addition(5,2))


 const text4="je suis fatigué"

 majFirst(text4)



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
consol(criAnimals("rat"))


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
