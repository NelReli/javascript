// concaténer ces veriables et afficher dans le dom le resultat

// afficher un prompt qui demande l'age si l'age est inferieur à 18 creer une alert de refus si l'age est superieur 18 alert d'acceptation


//créer une boucle pour afficher 3 fois une phrase dans le dom

//avec prompt demander au user deux chiffres vous allez stocker les valeurs du prompt puis additionner ces valeur et les afficher dans le dom avec cette phrase : "le resultat est : " 


// demander age de l'utilisateur avec prompt et verifier s'il peut entrer dans une salle de cinema selon les regles suivantes (utiliser console log pour les resultats des conditions)
//-- moins de 13 ans === accès refuser
//-- entre 13 et 17 ans === acces autorisé avec accompagnateur 
//-- 18 et plus === accès libre


let n1="nous"
let n2="sommes"
let n3="mercredi"
let n4=12

const phrase3= n1 +" "+ n2 +" " + n3 +" " + n4
console.log( phrase3)

const phrase= n1 + " "+  n2 + " "+ n3 +" " +n4
// nommé template string ou template litterals ou gabarit de chaine
// entouré de backtiks, ppour inserer une valeur dynamique
const phrase2=`${n1} ${n2} ${n3} ${n4}`
 
document.write(`<h1> ${phrase}</h1>`)
document.write(`<h3 style="color=red" > ${phrase2}</h3>`)


let maxAge=18
let stockagPrompt = Number(prompt("quel est ton age ?????"))
if(isNaN(stockagPrompt)){

    alert("entrer un nombre correct")
}else if(stockagPrompt < maxAge){
    alert("refus d'entrée")
}else{
    alert("bienvenue")
}


//-----------------------autre exo


for( let i =0 ; i<3;i++){
 

    document.write(" <p>je suis la phrase répéter 3 fois et mon index est : " + i +"</p> " )

}


// creation de fonction réutilisable qui prend comme paramètre "message". cette fonction crée une boucle while pour verifier si la valeur du  prompt est un nombre 
function demanderNombre(message){
    let valeur

    while(isNaN(valeur)){
        valeur=Number(prompt(message))

        if(isNaN(valeur)){

            alert("erreur : veuillez entrer un nombre valide")

        }


    }


// si cette valeur n'est pas un nombre la boucle while continue jusqu'à ce qu'un nombre valide soit saisi
    return valeur // une fois un nombre valide return valeur renvoie cette valeur à l'endroit ou la fonction est appeler
    // Sans return, la fonction ne renverrait rien (undefined).
}


// ----------------------autre exo

// j'appelle la fonction ici en y ajoutant une chaine de caractère qui remplassera le paramètre de la fonction

let p3 = demanderNombre("Entrez un nombre");

let p4 = demanderNombre("Entrez votre deuxième nombre");

let resultat = p3 + p4;

document.write("<p>Le résultat des deux prompts est : " + resultat + " </p>");





//-------------- autre exo

let moin13ans=13
let moin17ans=17
let plus18ans=18
// let agePourCine=demanderNombre("quel est votre age pour entrer dans notre cinéma?")/

let agePourCine=Number(prompt("donnez votre age pour savoir si vous entrez dans le cinema"))

if(agePourCine<moin13ans){
    console.log("acces refuser")
}else if(agePourCine > moin13ans && agePourCine <= moin17ans){
    console.log("accès autoriser avec accompagnant")
}
else{
    console.log("accès autoriser")
}






