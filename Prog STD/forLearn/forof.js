const nome = 'Sung Jin Woo';

//for (let i = 0; i < nome.length; i++) {
//    console.log(nome[i]);
//}

//for (let i in nome) {
//    console.log(nome[i]);
//}

for (let index of nome) {
    console.log(index);
}

console.log('######')

const names = ['Raph','Lopes','Motta'];

names.forEach(function (el, index) {
    console.log(el, index);
});

// For clássico - Geralmente com iteráveis (arrays ou strings)
// For in - Retorna o índice ou chave (String, array ou objetos)
// For of - Retorna o valor em si (iteráveis, arrays ou strings)