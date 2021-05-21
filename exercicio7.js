//7 - Elabore um algoritmo que receba dois números e 
//determine qual é o maior entre eles, se os números forem iguais,
// mostre uma mensagem no console "Os números são iguais".

let num1 = 11
let num2 = 11


if (num1 > num2){
    console.log(`${num1} È maior`)
}
else if (num2 > num1){
    console.log(`${num2} È maior`)
}
else if (num1 === num2){
    console.log(`São extamente iguais `)
}
else {
    console.log(`Consulte outra entrada! `)
}