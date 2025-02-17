/*-----------
Manipulation du DOM
-------------------*/


// 1. Selectionne des elements 

const titre=document.getElementById('titre')// selectionner un ID
const paragraphe=document.getElementsByTagName('p') // selectionner une balise
const elementClass= document.getElementsByClassName ("ma-classe") // selectionne la premiere class qu'il trouve avec ce nom
const premierParagraphe=document.querySelector("p")// selectionne le 1er paragraphe
const unId=document.querySelector("#monId")// selctionne id
const uneClass=document.querySelector(".uneClass")
const allParagraphe=document.querySelectorAll("p") //selectione tous les paragraphes
const toutesLesClass=document.querySelectorAll(".ma-classe") // selectionne tous les class ma-classe

const text=document.querySelector("#text")


// 2 Modification du contenu

if(titre){
    titre.textContent="nouveau texte"// change le texte de titre
    titre.innerHTML="<span> titre</span>"// modifier le HTML on peut ajouter des balises
}

//3 Modification de style

if(titre){
    titre.style.color="red"
    titre.style.fontSize="50px"
    titre.style.padding="10px"
}

// 4 gestion de class en CSS

titre.classList.add("ajout-de-class")// ajouter une class à un element du DOM
titre.classList.remove("supprimer-ma-class") // supprimer une class
titre.classList.toggle("ma-class2")// ajoute une class si absente , ou supprime la class si présente

//  5 creation et insertion
const newParagraphe=document.createElement("p")// creation d'une balise p
newParagraphe.textContent="ceci est un paragraphe ajouté par js" //ajout de text a newParagraphe
text.appendChild(newParagraphe) // newParagraphe devient l'enfant de text
newParagraphe.style.color="red" // modification style
newParagraphe.classList.add("ajout-class-js")// ajout de class

// selectionner  id text2 dans le fichier html et le mettre dans une variable
const text2=document.querySelector("#text2")

// creer une h1 en ajoutant un titre :"titre2" qui sera l'enfant de text2 
const enfantTitre2=document.createElement("h1")
enfantTitre2.textContent="titre2"
text2.appendChild(enfantTitre2)
// ajouter une class à text2 et modifier son css via la balise style dans fichier css
text2.classList.add("ajout-class")

//*******6 EVENEMENTS JAVASCRIPT********

// les evenements en js permettent d'interagir avec les actions ( clic, saisie, defillement )

// click : quand un élement est cliqué

//mouseover : quand la souris passe sur un elements

// scroll : quand on defile sur la page

// keydown : quand on touche un touche du clavier 
const button=document.querySelector(".button")

 function alertClick(){
    alert("bouton cliqué")
 
  
 }

 

 function colorChange(){
button.style.color="red"
 }
 
    function leaveMouse(){
        button.style.fontSize='10px'
        button.innerHTML="mais tu ne m'a pas cliqué!!!" // la fonction commence par agrandir le fontsize
     // puis avec setTimeout (fonction native) qui donne un delait le style change
       setTimeout(function(){
           button.style.fontSize='2px'
         
         }, "2000");// delait quand la fonction commencera 2seconde 
       setTimeout(function(){
           button.style.fontSize='15px'
           button.style.color="black"
           button.innerHTML="cliqez moi please !!"
           
         
         }, "4000");// delait quand la fonction commencera 2seconde 
       
   
       }

// autre façon de faire un evenement js 

const text3=document.querySelector("#text3")
const parent =document.querySelector("#parent")

text3.addEventListener("click",function(){
 
    text3.textContent="bonjour"
    text3.style.color="red"

})

text3.addEventListener("mouseenter",function(){

    text3.classList.add("text3")
})

const text4=document.createElement("div")
text4.classList.add("text4")
text4.innerText="bonjour"
parent.appendChild(text4)

const buttonModal=document.querySelector("#buttonModal")




















text3.addEventListener("mouseleave",function(){

    text3.style.width="50%"

})



