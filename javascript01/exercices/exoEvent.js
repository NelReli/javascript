/**
 * Exercice 1 : Modifier le texte d'une div quand on click sur un bouton 
 */

const modiftextPara=document.querySelector("#modifText")
const button=document.querySelector("#button")

function modifText(){
    modiftextPara.textContent="je suis modifié tout partout"
    modiftextPara.style.color="red"
}


//********************* */

const button3=document.querySelector("#button3")
const paraChange=document.getElementById("paraChange")

function modificationText(){
    paraChange.textContent='mon texte à changé l\'apres' 
    paraChange.style.fontSize="20px"
}

/*
 * Exercice 2 : Détecter le survol d'un élément et modifier son style
 */
const changeColor=document.querySelector("#changeColor")

changeColor.addEventListener("mouseover",function(){

    changeColor.style.backgroundColor="red"

})
// *******************************

const changeColor2=document.getElementById("changeColor2")

changeColor2.addEventListener("mouseover",function(){

    changeColor2.style.backgroundColor="green"
})






/**
 * Exercice 3 : Ajouter un nouvel élément à une liste <ul>  <li></li> </ul> au clic sur un bouton
 * utiliser creatElement "li" et appenChild
 */

const list=document.getElementsByClassName("liste")[0]
console.log(list)
const button2=document.getElementsByClassName("button")[0]


let b=5
button2.addEventListener("click",function(){

    const ajoutList=document.createElement("li")
    ajoutList.style.color="green"
    ajoutList.textContent="je suis " + b 
    b+=1

    list.appendChild(ajoutList);
})
// *******************

const liste2=document.getElementsByClassName("liste")[1]
console.log(liste2)
const button4=document.getElementsByClassName("button")[1]

let c=5
button4.addEventListener("click",function(){
    const ajoutDeLaListe=document.createElement("li")
    ajoutDeLaListe.textContent=`je suis ajouté ${c} `
    c=c+1
    liste2.appendChild(ajoutDeLaListe)

})


/**
 * Exercice 4 : creer une liste de noms depuis une variable utilisateur contenant un tableau et la mettre dans une div du dom
 * 
 * pour cela creer une bloucle for qui boucle sur le tableau
 * ajouter createElement "li" et 
 * ajouter un textContent a "li" qui sera le i (index) de utilisateur
 * 
 * creer une fonction au click affichant une alert quand un nom de la liste du tableau est cliqué.
 * dans l'arte il est ecris " vous avez cliqué sur + "nom de l'utlisateur cliqué" "
 * 
 */



const utilisateurs = ["Alice", "Bob", "Charlie", "David"];


for(i=0;i<utilisateurs.length;i++){

    
}







const user=document.querySelectorAll(".user")
console.log("user",user)
const userClass=document.getElementsByClassName("user")
console.log("userClass",userClass)

for(let i=0;i<userClass.length;i++){

    userClass[i].addEventListener("click",function(){

        userClass[i].style.backgroundColor="black"
    })

}

// for (let i = 0; i < userClass.length; i++) {


//     userClass[i].addEventListener("click", function () {
  
//       for (let j = 0; j < userClass.length; j++) {
//         userClass[j].style.backgroundColor = "black";
  
//       }
      
//     });
//   }
  


const listeUtilisateurs = document.getElementById("listeUtilisateurs");

for (let i = 0; i < utilisateurs.length; i++) {
    const li = document.createElement("li");
    li.textContent = utilisateurs[i];
    li.addEventListener("click", function() {
        alert("Utilisateur sélectionné : " + utilisateurs[i]);
    });
    listeUtilisateurs.appendChild(li);
}
