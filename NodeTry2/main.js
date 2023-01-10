const fs = require('fs').promises;
const { dirname } = require('path');
const path = require('path');

async function readdir(rootDir){
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walk(files);
}

function walk(files){
    for (let archive of files){
        console.log(archive);
    }
}