//8 - Crie um algoritmo que receba três notas de um aluno,
//calcule sua média e mostre as seguintes mensagens de acordo com cada situação:

//- Se a media for igual ou maior que 7 - Aprovado
//- Se a media for maior e igual a cinco e menor que 7 - Recuperação
//- Se a media for menor que 5 - Reprovado

let portugues = 7
let matematica = 4
let fisica = 5

const acerto= (portugues + matematica +fisica) / 3

if (acerto >= 5 && acerto <=7) {
    console.log('Recuperação!')
} else if ( acerto > 7){
    console.log(`Aprovado: ${acerto}`)
} else if (acerto < 5){
    console.log(` Reprovado: ${acerto}`)
}

