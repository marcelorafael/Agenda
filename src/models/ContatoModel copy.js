const mongoose = require('mongoose');

const ContatoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    sobrenome: { type: String, required: true },
    email: { type: String, required: true },
    telefone: { type: String, required: true },
});

const ContatoModel = mongoose.model('Contato', ContatoSchema);

class Contato {

}

module.exports = Contato;