const input=document.getElementById("input")
const button=document.getElementById("button")
const ul=document.getElementById("ul")

 // faire un event au click sur le bouton et afficher valeur de l'input dans la console

input.value=""


let tableau=[]



button.addEventListener("click",function(){
    
    const valeur=input.value

    if(valeur===""){
        alert("rempli l'exo")
    }else{

        console.log("valeur input : " + valeur)
        tableau.push(valeur)
        console.log("tableau : ",tableau )
// ul.innerHTML=""
afficher()

}

function afficher(){
    const nouvelElement=document.createElement("li")
    for(let i=0;i<tableau.length;i++){
        console.log("console",tableau[i])
        nouvelElement.textContent=tableau[i]
        ul.appendChild(nouvelElement)

}



// Créer un tableau contenant plusieurs noms de fruits (par exemple : "Pomme", "Banane", "Cerise", "Mangue", "Orange").
// Afficher les éléments du tableau dans le DOM sous forme de liste (<ul> avec des <li>).
// créer un ul dans le HTML
//faire console log de fruit et de fruit[i] quel est la différence
// faire une boucle for sur le tableau ajouté dans cette boucle li avec createelement et li textcontent=fruit[i]

// dans la boucle faire un click event quand on clique sur fruit[i] le fruit cliqué disparait de la liste





























        // ul.innerHTML=""
        // for(let i=0; i<tableau.length;i++){
        //     const li=document.createElement("li")
        //     li.textContent=tableau[i]
        //     ul.appendChild(li)


        // }




        input.value=""
    }
      
      

// if(valeur !==""){
//     console.log(valeur)
//     input.value=""

// }
// else{
//     alert("écris !!!")
// }

})

