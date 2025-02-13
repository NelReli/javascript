/*-----------------
 * LES BOUCLES
 *-----------------
 */

// une boucle permet d'exécuter un bloc de code plusieurs fois, tant que la condition est vrai

// les boucles sont utilisé pour parcourir des tableaux,repéter des actions et automatiser des tâches

//  boucle WHILE (tant que )
//  cette boucle est très utilisé quand on ne connait pas le nombre de tours de boucles à l'avance

//  let j=1;
//  while(j<10){ 
//     // tant que j est inférieur ou égale à 10

//     document.write("<h1 style='color:red'> je passe par ici " +j+ "</h1>");
//     j++;
//     document.write("<h2 style='color:blue'> je passe par ici " +j+ "</h2>");
//  }

//  let maxAge=25
//  let age=NaN// initialisation avec une valeur invalide "not a number"
//  console.log( typeof age)
// // comme age est NaN alors la boucle commence automatiquement 
//  while(isNaN(age)){ 
// // la boucle continue tant que age n'est pas un nombre
//     age=Number(prompt("indiquez votre age"))//convertit la valeur string en number

//     if(isNaN(age)){

//         alert("erreur : veuillez ecrire un nombre ")
//     }
//  }

//  console.log(age)

//  if(age <maxAge){
//     alert("bonne nuit")
//  }else{
//     alert("bienvenue ")
//  }



 // la BOUCLE FOR
 // for a besoin de 3 arguements 

//  for( let i=1;i<=10;i++){
//     document.write("<h3 style='color:red'> ja passe par là :"+ i + "</h3>")
//  }

// parcourir un tableau

 let fruits=["pomme","banane","cerise"];
 console.log(fruits)
console.log(fruits[2])

 for(let i=0; i<fruits.length;i++){
   console.log("fruits :", fruits[i])
 }

 const products=[
    {name:"smartphone" , price: 500},
    {name:"ordinateur", price : 800},
    {name:"casque",price:100},
    {name:"casque audio",price:1000}
 ]

 let html="";// on initialise une variable vide

 for(let i=0 ;i < products.length;i++ ){

// a chaque itération on ajoute ( +=)une nouvelle div avec  le produit correspondant

    html += `<div class="product">
    
    <h3> ${products[i].name} </h3>
    <p> prix : ${products[i].price} € </p>
    
    
    </div>`
 }

 // apres la boucle html contient maintenant TOUT LE CODE HTML GÉNÉRÉ

  let productList=document.getElementById("product-list")
  productList.innerHTML=html

  // "${}" pour insérer des variables directement dans des chaines de caractère



