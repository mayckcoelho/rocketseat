const File = require('../models/File');

class FileController {
    async store(req, res) {
        console.log(res.file);
        // Criar um arquivo
        return res.send('OK')
    }
}

module.exports = new FileController();