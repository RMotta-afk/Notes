function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: false, // mostra a chave
        value: estoque, // valor
        writable: false, // pode alterar 
        configurable: true // configurável 
    });
}

const p1 = new Produto('Camiseta', 20,3);

console.log(Object.keys(p1));