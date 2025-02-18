// Tableau principal contenant les utilisateurs
let utilisateurs = [
    ["Alice Dupont", "alice@example.com", "admin"],
    ["Bob Martin", "bob@example.com", "utilisateur"],
    ["Charlie Durand", "charlie@example.com", "moderateur"]
];

// Fonction pour ajouter un utilisateur
function ajouterUtilisateur(nom, email, role) {
    utilisateurs.push([nom, email, role]);
    console.log(`✅ ${nom} a été ajouté.`);
}

// Fonction pour supprimer un utilisateur par email
function supprimerUtilisateur(email) {
    let index = utilisateurs[1].indexOf(email)
    console.log(index)
    if (index !== -1) {
        console.log(` ${utilisateurs[index][0]} a été supprimé.`);
        utilisateurs.splice(index, 1);
    } else {
        console.log(` Aucun utilisateur trouvé avec l'email "${email}".`);
    }
}


function afficherUtilisateurs() {

    console.log(" Liste des utilisateurs :");
    for (let i = 0; i < utilisateurs.length; i++) {
        console.log(` ${utilisateurs[i][0]} |  ${utilisateurs[i][1]} |  ${utilisateurs[i][2]}`);
    }
}


// Tests des fonctions
ajouterUtilisateur("David Lemoine", "david@example.com", "utilisateur");
afficherUtilisateurs();

supprimerUtilisateur("bob@example.com");
afficherUtilisateurs();
