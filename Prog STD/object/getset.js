function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    
    let estoquePriv = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: false, // mostra a chave 
        configurable: true, // configurável 

        get: function(){
            return estoquePriv;
        },

        set: function(valor){
            if (typeof valor !== 'number'){
                console.log('Bad Value');
                return;
            }

            estoquePriv = valor;
        }
    });
}

function criaProduto (nome){
    return {
        get nome(){
            return nome;
        },
        set nome(valor){
            nome = valor;
        }
    };
}

const p2 = criaProduto('Camiseta');
console.log(p2);
