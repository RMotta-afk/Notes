// Filter, Map, Reduce, são as funções mais importantes de Array.

// Map -> Altera os valores do Array, portanto, sempre irá retornar um array de mesmo tamanho.

// Dobre os números

const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];
const numerosDobro = numeros.map(valor => valor * 2
);


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

const nomePessoa = pessoas.map(obj => obj.nome);
const ages = pessoas.map(obj => ({idade: obj.idade}));

const comIds = pessoas.map(function(obj, index) {
    const newObj = { ...obj};
    newObj.id = (index + 1); 
    return newObj;
});

console.log(comIds);