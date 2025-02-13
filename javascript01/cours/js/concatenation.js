/*----------------
----LA CONCATÉNATION ------
---------------------*/

// le terme concaténation désigne l'action de mettre bout à bout au moins deux chaines de caractères.
 


const number=2055,mois=12,semaine=7;

let year,month,week;
year=2025;// number 
month=" 02";// string
week="lundi" ;// string

console.log ( "const number : ",number)
console.log ( "type de const number : ",typeof number)


// addition de deux number
const resultat= number + mois;


// mais si il y a un number puis un string les deux variable sont côte à côte.
const resultat02= year + month
console.log( "resultat de year et month :", resultat02)

console.log(resultat);
console.log(typeof resultat02)// resultat02 est un string

const lundi="lundi";
const suiteDePhrase="est une journée"
const magnifique="magnifique"
 
const resultat_phrase= lundi +" " + suiteDePhrase +" "+ magnifique

document.write("<h1>" + resultat_phrase + "</h1>")

console.log(" le resultat de la phrase : ",resultat_phrase)
//contaténez ces 4 variables dans un nouvelle variable et affichez cette nouvelle variable dans un console log
const partie1="Nous sommes le"// string
const partie2=10 // number
const partie3="du mois de"//string
const partie4="fevrier"//string

let resultat_des_parties
resultat_des_parties= partie1 + " "+partie2+ " " + partie3 + " "+ partie4

console.log("resultat : ",resultat_des_parties)


