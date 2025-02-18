
 let utilisateurs = [
    ["Alice Dupont", "alice@example.com", "admin"],
    ["Bob Martin", "bob@example.com", "utilisateur"],
    ["Charlie Durand", "charlie@example.com", "moderateur"]
];



console.log(utilisateurs)



function ajouterUnUser(nom,mail,role){

    utilisateurs.push([nom,mail,role]) 

}

ajouterUnUser("john doe","g@mail.com","admin")
 console.log( "user" ,utilisateurs)
 

 function afficherUser(){
    
    for (let i=0;i< utilisateurs.length;i++){

        

        console.log( ` nom  ${utilisateurs[i][0]} , mail ${utilisateurs[i][1]}, ${utilisateurs[i][2]} `)
        console.log (  " concaténation : nom :" +utilisateurs[i][0] + " mail :" + utilisateurs[i][1] + "role :" + utilisateurs[i][2] )
    }

 }

 afficherUser()


 let bb=2 // variable global


 function test(){
 
    let bb =3 // variable local elle reste dans la fonction et ne sort pas 
    console.log("variable local",bb)
 }

 test()// bb=3

 console.log("variable global",bb)// bb= 2


 function supprimerUser(nom){
   let index="" // variable vide 
    
    for(let i=0;i <utilisateurs.length;i++){

        if (utilisateurs[i][0] === nom) {
            index = i;// si utilisateurs[i][0] === nom i est l'index devient l'index du user pour charlie sont index est 2 
           
        }
    }
    if(index !== -1){

        utilisateurs.splice(index,1) // ici index est celui du utilisateur trouvé 

    }else{
        console.log( "aucun utilisateur trouvé avec ce nom")
    }
 }

supprimerUser("Bob Matin")
console.log("suppression de : ",utilisateurs)







let b1="phrase"

let html=""
html = "<h1>" 
if(b1 === "tonton"){

    html += `${b1} est parti`
}else{
    html += `${b1} `
}
html += "</h1>"

console.log("html",html)

let html2 =`
<h1> ${b1 === "tonton" ? `${b1} "est parti"` : b1}  </h1>
`

console.log("html2",html2)






function trouverUtilisateur(nom) {
    for (let i = 0; i < utilisateurs.length; i++) {
        if (utilisateurs[i][0].includes(nom)) {
            return ` Nom : ${utilisateurs[i][0]}, Mail : ${utilisateurs[i][1]},  Rôle : ${utilisateurs[i][2]}`;
        }
    }
    return "⚠️ Utilisateur non trouvé dans la base de données."
}

function majFirst(chaine) {
    return chaine.charAt(0).toUpperCase() + chaine.slice(1)
}

console.log(trouverUtilisateur(majFirst("charlie")))


