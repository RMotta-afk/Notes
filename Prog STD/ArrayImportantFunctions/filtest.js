const list = [1,2,'a','c',4,5,6,'Raph'];

function filterList(lista){
    return lista.filter(function(value) {
        return typeof value === 'number';
    });
}

console.log(filterList(list));