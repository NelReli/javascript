let utilisateurs = [
    ["Alice Dupont", "alice@example.com", "admin"],
    ["Bob Martin", "bob@example.com", "utilisateur"],
    ["Charlie Durand", "charlie@example.com", "moderateur"]
];
console.log(utilisateurs)


function ajouterUnUser(){


    utilisateurs.pop()
  

}
ajouterUnUser()
 console.log( "user" ,utilisateurs)




let b1="phrase"

let html=""
html = "<h1>" 
html += `${b1}`
html += "</h1>"

console.log("html",html)

let html2 =`
<h1>${b1}</h1>
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