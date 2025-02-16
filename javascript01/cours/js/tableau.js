/*---------------------

LES TABLEAUX
-------------------------*/


// CRÉER un tableau 

let tab1=new Array("element0","element1")

let tab2 =Array("element0","element1")

let tab3=["element0" ,"element1"]// à prioriser plus clair

// ********Déclaration d'une liste (tableau)

//tableau simple de nombre
let nombres=[1,2,3,4,5]

//tableau de chaine de caractère
const fruits=["banane","pomme","orange"]
// index       0        1       3

//tableau mixte (différent type de données)
let mixte=[42,"hello",true,{nom:"alice"},[1,2,"trouvez moi"]]
// index    0    1     2       3             4

// affichage de tableau
console.log("nombres ;", nombres)
console.log("fruits ;", fruits)


console.log("mixte ;", mixte)


//***** Acceder aux elements d'un tableau

console.log( "premier fruit :", fruits[0])
console.log( "2eme fruit :", fruits[1])
console.log("dernuit fruit :", fruits[fruits.length-1])
console.log("mixte", mixte[0])
console.log("mixte", mixte[3])
console.log("mixte", mixte[4][2])
console.log("mixte", mixte[3].nom)
console.log("mixte", mixte[3]["nom"])


// vider un tableau
let tab7=[1,2,3,4,5]
tab7.length=0
console.log("tableau vider",tab7)// [] le tableau est vide



// trouver l'index d'un element du tableau

fruits.indexOf("pomme")
console.log("trouvez l'index",fruits.indexOf("pomme"))


//*******
// MODIFICATION DE L'ORIGINAL D'UN TABLEAU
//  

//********* Modifier un element du tableau 

fruits[0]="fraise"
console.log("fruits modifier", fruits)

//************** Ajouter un elements dans un tableau 

fruits.push("mangue")//ajoute à la fin
console.log("fruit avec mangue",fruits)

fruits.unshift("cerise")//ajoute en premier
console.log( fruits)

fruits.splice(1,0,"clémentine")// ajoute en deuxiemnt
console.log( fruits)

let index=fruits.indexOf("pomme")
let result=fruits.splice(index , 1)// supprime pomme
console.log("pomme supprimer",result)

fruits.shift()// supprime 1er élement du tableau
console.log("supprime 1er elements",fruits)

// **************** supprimer des elements
fruits.pop()// supprime dernier éléménts 
console.log( fruits)


// MODIFICATION EN CRÉANT UN NOUVEAU TABLEAU

// extraire une partie du tableau SANS modifier l'original
let nouveauFruits= fruits.slice(1.1)
console.log( "new",nouveauFruits)

const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]
// a partir de l'index 2 tu prends tout

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]
// prend de index 2 à  avant index 4

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]
// prends de index 1 à avant 5

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]
// prens deux element a la fin

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
// prend tout ici la fonction slice est inutile


//fonction pour filtrer des element du tableau ici tout ce qui est en dessous de 18 n'est pas prix
const ages = [32, 33, 16,5,17,20, 40];
const resultat = ages.filter(

    function checkAdult(parametre) {
      return parametre >= 18;
    }  
);
console.log("nouveau tableau de age",resultat)
console.log("tableau age n'est pas modifié",ages)


// reponse exo de la page manipulationTableau.js

const fruit=["pomme","banane","cerise","orange"]

fruit.push("kiwi")
console.log("fruit",fruit)
fruit.unshift("ananas")
console.log("fruit",fruit)//voir si ananas ajouté
fruit.pop()
console.log("fruit",fruit)// voir si dernier élement à été effacé
console.log("longueur tableau",fruit.length)


let nombre=[10,25,45,38,50]

let contient30=nombre.includes(30)// includes() retourne comme reponse un boolean ( true ou false)
// la variable contient30 stock la reponse de nombre.includes(30)
console.log(contient30) // dans cette exemple la reponse est false

if(contient30===true){
    console.log("tableau contient bien 30")
}else{
    console.log("not 30")
}

let index2=nombre.indexOf(45)
console.log("index de 45 :",index2)



const tab5=[2,5,8,11,14,17]

const newTab=tab5.filter(
    function maFonction(choucroute){

        return choucroute > 10
    }
)
console.log("filter",newTab)
console.log("filter2",tab5)




 const b=["pomme","cerise"]
console.log(b)
// b=["poire","coco"] je ne peux pas modifier tout le tableau concidérer comme une nouvelle assignation de variable const interdit
console.log(b)
b[1]="poire"
b[0]="coco"
console.log(b)
console.log(b)


let tab6=["pomme","cerise"]
console.log(tab6)
 tab6=2
 console.log(tab6)
