//Questao_1

// //Análise os pedaços de código a seguir e tente prever qual será o console.log resultante, A ou B.
// //Você pode rodar os código para verificar suas respostas.

// let a = 10
// let b = true
// let c = []
// let d = [1,2,3,4]
// let e = "Nome"

//1
// if (a == 10) {
//     console.log("A");
// } else {
//     console.log("B");
// }

//     //R > Imprime = "A"

//2
// if (a > 10) {
//     console.log("A");
// } else {
//     console.log("B");
// }

//     //R > Imprime = "B"

//3
// if (a >= 10) {
//     console.log("A");
// } else {
//     console.log("B");
// }

//     //R > Imprime = "A"

//4
// if (b == true) {
//     console.log("A");
// } else {
//     console.log("B");
// }

//      //R > Imprime = "A"

//5
// if (b) {
//     console.log("A");
// } else {
//     console.log("B");
// }

//      //R > Imprime = "A"

//6
// if (c) {
//     console.log("A");
// } else {
//     console.log("B");
// }

//      //R > Imprime = "A"

//7
// if (d) {
//     console.log("A");
// } else {
//     console.log("B");
// }

//      //R > Imprime = "A"

//8
// if (d[0] == 1) {
//     console.log("A");
// } else {
//     console.log("B");
// }

//      //R Imprime = "A"

//9
// if (d[1] == 1) {
//     console.log("A");
// } else {
//     console.log("B");
// }

//      //R = Imprime = "B"

//10
// if (typeof(e) == 'string') {
//     console.log("A");
// } else {
//     console.log("B");
// }

     //R = Imprime = "A"


console.log("------------------------------------------------------------------------");
console.log("//Questao 2\n");

/*Base de dados que o cliente passou para você:
Dica 5: para aplicar 20% de impostos, você deve multiplicar por 1.2. Para aplicar 12%, você deve multiplicar por 1.12.

Dica 6: você vai precisar criar comandos condicionais que verificam se o produto é internacional ou não. Se for internacional, 
deve exibir o nome do produto e o valor com os impostos de 20%. Se for nacional, deve exibir o nome do produto e o valor com os impostos de 12%.

Dica 7: lembre-se que para acessar ou alterar as informações das variáveis do tipo mapa você utiliza nomedavariavel["nome"], nomedavariavel["valor"],
nomedavariavel["internacional"].
*/

 let impostoInternacional = 1.2
 let impostoNacional = 1.12

let produtoA = {
    "nome": "camiseta",
    "valor": 100.00,
    "internacional": true
};
let produtoB = {
    "nome": "perfume",
    "valor": 200.00,
    "internacional": true
};
let produtoC = {
    "nome": "sandália",
    "valor": 120.00,
    "internacional": false
};

//Produto A
if ( produtoA.internacional == true ){

    console.log("Produto:", produtoA.nome);
    valorFinal = produtoA.valor * impostoInternacional;
    console.log("Grupo Internacional");
    console.log("Valor final:", valorFinal);

} else {

    console.log("Produto:", produtoA.nome);
    valorFinal = produtoA.valor * impostoNacional;
    console.log("Grupo Nacional");
    console.log("Valor final:", valorFinal);

}
    console.log("\n");

//Produto B
if ( produtoB.internacional == true ){

    console.log("Produto:", produtoB.nome);
    valorFinal = produtoB.valor * impostoInternacional;
    console.log("Grupo Internacional");
    console.log("Valor final:", valorFinal);

} else {

    console.log("Produto:", produtoB.nome);
    valorFinal = produtoB.valor * impostoNacional;
    console.log("Grupo Nacional");
    console.log("Valor final:", valorFinal);
}

    console.log("\n");

//Produto C
if ( produtoC.internacional == true ){

    console.log("Produto:", produtoC.nome);
    valorFinal = produtoC.valor * impostoInternacional;
    console.log("Grupo Internacional");
    console.log("Valor final:", valorFinal);

} else {

    console.log("Produto:", produtoC.nome);
    valorFinal = produtoC.valor * impostoNacional;
    console.log("Grupo Nacional");
    console.log("Valor final:", valorFinal);

}