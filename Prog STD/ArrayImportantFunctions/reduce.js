// Filter, Map, Reduce, são as funções mais importantes de Array.
// Reduce é utilizada para reduzir tudo à um único elemento.

// Reduce -> Reduz arrays em um único elemento.

// Some todos os números (reduce)
// Retorne um arra com os pares (Filter)
// Retorne um array com o dobro dos valores (Map)

const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];


const total = numeros.reduce(function (acumulador, valor, indice, array){
    if (valor % 2 === 0) {
        acumulador += valor;
    }

    return acumulador;
}, 0);



const doubleNumber = numeros.map(valor => valor*2);
const parNumber = numeros.filter(function(valor){
    return valor % 2 === 0;
})


// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pesoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

const older = pessoas.reduce(function(acumulador, valor){
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});