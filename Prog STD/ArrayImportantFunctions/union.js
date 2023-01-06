// Retorne a soma do dobro de todos os pares
// Filtrar pares 
// Dobrar valores
// Reduzir 

const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27]; 

const numerosFiltrados = numeros.filter(value => value % 2 === 0)
    .map(value => value * 2)
    .reduce((stack, value) => stack + value);




console.log(numerosFiltrados);