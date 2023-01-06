/*
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
... (spread)

// Ja vimos

Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

/*const produto = {nome: 'Caneca', preco: 1.8}
const caneca = Object.assign({}, produto, {material: 'porcelana'})

Object.assign = Para copiar objetos.
console.log(caneca);*/

/* const produto = {nome: 'Produto', preco: 1.8};
Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false,
})
console.log(Object.getOwnPropertyDescriptor(produto, 'nome')); */

const produto = {nome: 'Produto', preco: 1.8, material: 'porcelana'};

for(let [chave, valor] of Object.entries(produto)){
    console.log(chave, valor);
}
