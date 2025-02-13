//Syntaxe de base

// commentaire sur une ligne avec 2 "//"


/* 

commentaire sur plusieurs ligne
je suis la deuxiemme ligne.

*/

// -- 1 : Declarer une variable en JS

// En js il y a DEUX variables let et const 

// pour déclarer une variable : 

let nom;

//--2 affecter une valeur à une variable
 nom="Mohamed";

 let maVariable=50

 maVariable=60
 


let ville;
 ville="Paris";// on déclare une variable et on lui affecte une valeur en même temps.

console.log(ville);

ville="Londre";

console.log(ville);

// avec une variable const on doit la déclarer et lui affecter une valeur sinon une erreur
//const prenom; une erreur s'affiche

const prenom="Moussa";

console.log(prenom);

//on ne peut pas donner une autre valeur à une variable const une erreur s'affichera dans la console
//prenom="Ousmane" ---> erreur 


//--03 afficher une boite de dialogue

// alert("je suis une boite de dialogue")

//--04 afficher dans la console avec console.log()

console.log("const prenom", prenom);


/*----------------------------
-----------LES TYPES DE VARIABLES------
---------------------------*/

// --1 les chaines de caractères (string)
// un string est entourer de guillemet obligatoirement
let vacances="2017";
let destination="Pantin";

//--2 les nombres entier (integer === int (number))
//pas de guillemets
let annee = 2017;

//--3 les nombres décimaux avec "." (float)
// sans guillemet
let nombre_a_virgule=5.32;

//--4 les booléens true et false
 let boolean_false=false;
 let boolean_true=true;

 // -- 5 typeof permet de connaitre le type de la variable 
 
 console.log("année :",annee);
 console.log("type de année :", typeof annee);

 console.log("boolean :" , typeof boolean_false);
 console.log("type de vacances :", typeof vacances);

 console.log( "vacances en int (number) : " , parseInt(vacances))

// string to number
 let vacances_number=parseInt(vacances)

 // number ou boolean to string

console.log(" vaccances_number to string", vacances_number.toString())

console.log("boolean to string : ", boolean_false.toString()) 


// string to float

let unChiffre= "3.45"
console.log ( "string to number", parseInt(unChiffre))//3 ne prend pas la decimal
console.log("string to float", parseFloat(unChiffre))//3.45







