/*----------------
LES CONDITIONS
-------------*/

// En javascript une condtion permet d'exécuter un bloc de code seulement si certaines conditions sont vrai( true)

// structure avec "if"
// nb1=51
// if(nb1 < 50){
//    // si la condition dans les parenthèses est vrai alors le code à l'intérieur des accolades s'éxécute
//    alert("je suis inferieur à 50")

// }

// if(true){
//     //si condition est vrai
//     // le code s'éxécute
// }else{
//     // si la condtion est fausse
//     // c'est ce code qui s'éxécute
// }

// // exemple 

// let nb2=49
// if( nb2 <= 50 ){ // si la condition est vrai ici si nb2 est inférieur ou égal à 50 alors le code s'éxécute
//     alert( "nb2 est inférieur ou egal à 50")
// }else{ // sinon, si la condtion est "fausse", c'est ce code qui s'éxecute
//     alert("nb2 est superieur à 50 ")
// }


//EXERCICE

// On va utiliser les conditions pour verifier l'age d'un user

// si il a 25 ans ou plus alors on lui souhaite bienvenue dans la console

// sinon vous lui dit au revoir dans la console



// let maxAge=25

// let age =NaN // initalisation avec une valeur invalide
// console.log(typeof age)
// while(isNaN(age)){//la boucle continue tant que age n'est pas un nombre

//     age=Number(prompt('indiquez votre age'))

//     if(isNaN(age)){// si age n'est pas un nombre
//           alert("erreur : veuillez entrer un nombre")
//     }

// }
// console.log(age)
// if( age<maxAge){
//     alert("bonne nuit")
// }else{
//     alert("bienvenue")
// }

// SWITCH 
// l'nstruction switch est utilisé pour remplacer une serie de conditions "if else else if " lorsque l'on doit comparer une valeur à plusieurs cas possible


const jour="samedi"



switch(jour){
    case "lundi":
        console.log("debut de semaine")
        break

    case "mardi":
    case "mercredi":
        console.log("milieu de semaine")
        break
    case "jeudi":
    case "vendredi":
        console.log("fin de semaine")
        break
    case "samedi":
    case "dimanche":
        console.log("c'est le week-end") 
        break
    default:
        console.log("jour inconnu")    
        
}