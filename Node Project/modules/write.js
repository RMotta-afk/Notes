const fs = require('fs').promises;

module.exports = (pathFor, data) => {
    fs.writeFile(pathFor, data, { flag: 'w'});
};
