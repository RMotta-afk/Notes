const fs = require('fs').promises;

module.exports = (pathFor) => fs.readFile(pathFor, 'utf-8');