function imc(altura, peso){
    let result = peso /(altura * altura)
    console.log(result.toFixed(2)) //toFixed faz arredondamento
}

imc(1.90, 90)

function getNote(){
    if(nota ≥ 8){
        console.log('Aprovado')
    } else if (nota < 8 && nota ≥ 5){
        console.log ('Aprovado, com recuperação')
    } else {
        console.log ('Reprovado')
    }
}
getNote(6)