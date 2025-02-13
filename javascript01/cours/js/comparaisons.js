

// COMPARAISONS

// assignation (=)

// '=' est utilisé pour assigner une valeur 



let nb1=123// number valeur === 123
let nb2="123"// string  valeur === 123 


 // l'operateur de comparaisons == signifie "egal à " mais permet d'utiliser que les valeurs de deux variables

 console.log(nb1==nb2)// true

 // l'opérateur de comparaison === signifie "strictement égale à" 
 // il permet de verifier la valeur et le type

 console.log(nb1===nb2)// false nb1 et nb2 ne sont pas egal car de différent type ( number et string)



 // l'operateur "!= " signifie different de... en valeur 

 console.log(nb1 != nb2)// false on demande ici si nb1 et nb2 sont de differente valeur 


 // l'operateur "!== " signifie strictement different de .... valeur et de type

 console.log( nb1 !== nb2) // true ici les variables sont effectivement diffirente


 //exercice 

 let prenom="Nassuf"

 // si mon prenom indiqué dans le prompt est egale a let prenom alors alert disant bonjour sinon alert disant au revoir 

 let loginPrenom=prompt("quel est tom prenom ?")

 let resultPrompt=loginPrenom.charAt(0).toUpperCase()+loginPrenom.slice(1)

 console.log('result',resultPrompt)

 if(resultPrompt===prenom){
    alert("bienvenue")
 }else{
    alert('au revoir')
 }

 









