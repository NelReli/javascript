/*--------------
 incrémention
--------------*/

//l'incrémentation est l'action d'augmenter la valeur d'une variable, généralement de 1 
let nb1=1
console.log("nb1 : ", nb1)//1
console.log( "incrémention de nb1", nb1+=1)//nb1=nb1+1 //2
// incrémente puis retourne la nouvelle valeur 
console.log(++nb1) // 3
//retourne l'ancienne valeur puis incrémente
console.log(nb1++) // 3
console.log(nb1) // 4
console.log(nb1+=2) // 6 j'ai augmenté de 2


// décremention 
console.log(nb1 = nb1 -1 ) // 5
console.log(--nb1)// 4
console.log(nb1--) //4
console.log(nb1) // 3
console.log(nb1-=2)// 1 // nb1=nb1-2