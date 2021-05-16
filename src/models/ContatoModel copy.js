const mongoose = require('mongoose');
const validator = require('validator');


const ContatoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    sobrenome: { type: String, required: false, default: '' },
    email: { type: String, required: false, default: '' },
    telefone: { type: String, required: false, default: '' },
    criadoEm: { type: Date, default: Date.now },
});

const ContatoModel = mongoose.model('Contato', ContatoSchema);

function Contato(body) {
    this.body = body;
    this.errors = [];
    this.Contato = null;
}

Contato.prototype.register = function () {
    this.valida();
}

Contato.prototype.valida = function() {
    this.cleanUp(); // criamos um método

    // Validação
    // O e-mail precisa ser válido
    if (this.body.email && !validator.isEmail(this.body.email)) this.errors.push('E-mail inválido');

    // Campo nome não pode ser vazio
    if(!this.body.nome) this.errors.push('Nome é um campo obrigatório');
    if(!this.body.email && this.body.telefone) {
        this.errors.push('PElo menos um contato precisa ser cadastrado: Nome ou E-mail');
    }
}

Contato.prototype.cleanUp = function() {
    for (const key in this.body) {
        if (typeof this.body[key] !== 'string') {
            this.body[key] = '';
        }

    }


    this.body = {
        nome: this.body.nome    ,
        sobrenome: this.body.sobrenome,
        email: this.body.email,
        telefone: this.body.telefone
    }
}

class Contato {

}

module.exports = Contato;