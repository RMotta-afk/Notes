fetch('people.json')
    .then(response => response.json())
    .then(json => addEl(json));

function addEl(json){
    const table = document.createElement('table');
    for(let person of json){
        const tr = document.createElement('tr');
        
        let td = document.createElement('td');
        td.innerHTML = person.nome;
        tr.appendChild(td);

        let td2 = document.createElement('td');
        td2.innerHTML = person.idade;
        tr.appendChild(td2);

        td3 = document.createElement('td');
        td3.innerHTML = person.salario;
        tr.appendChild(td3);

        table.appendChild(tr);
    }

    const result = document.querySelector('.result');
    result.appendChild(table);
}