let semaine = [ 'lun', 'mra', 'mer', 'jeu', 'ven', 'sam', 'ddi' ];


let index=semaine.indexOf("mra")

semaine.splice(index,1,"mar")

console.log(semaine)

semaine.pop()
semaine.push("dim")
console.log(semaine)

console.log(semaine[2])
console.log(semaine.length)

// fruitsTab=["cerise","fraise"]
// let valeurPrompt=prompt("choisir un fruits")

// for(i=0;i<fruitsTab.length;i++){

//     if(valeurPrompt===fruitsTab[i]){

       
//         fruitsTab.splice(i,1)
//         console.log(fruitsTab)
//         break

//     }else{
//         console.log("nopds")
//     }
// }

// fonction de salutation 

function salutation(nom){

    console.log ( "bonjour" + nom )
}


const in1=document.querySelector('#in1')
const in2=document.querySelector('#in2')
const button=document.querySelector('#butt')



button.addEventListener("click",function(){
  const valeur1=in1.value
  const valeur2=in2.value
    if(valeur1===valeur2){
            console.log("ok")
    }else{
        alert('default')
    }
    in1.value=""
    in2.value=""
})







