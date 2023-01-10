const path = require('path');
const filePath = path.resolve(__dirname, 'test.json');
const write = require('./modules/write');
const read = require('./modules/read');

/* const people = [
    {name: 'Raphael'},
    {name: 'Marie'},
    {name: 'Elander'},
    {name: 'Arthur'},
    
]

const json = JSON.stringify(people, '', 2);

write(filePath, json); */

async function readFile(pathFinder){
   const data = await read(pathFinder);
   showData(data);
}

function showData(data){
    data = JSON.parse(data);
    data.forEach(val => console.log(val.name))
}

readFile(filePath);