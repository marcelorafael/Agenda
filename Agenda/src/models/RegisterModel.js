const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs');

const RegisterSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true }
});

const RegisterModel = mongoose.model('Register', RegisterSchema);

class Register {
    constructor(body) {
        this.body = body;
        this.errors = []; //if length > 0 and do not register user in database.
        this.user = null;
    }

    async register() {
        this.valida();
        if (this.errors.length > 0) return;

        await this.userExists();

        if (this.errors.length > 0) return;

        const salt = bcryptjs.genSaltSync();
        this.body.password = bcryptjs.hashSync(this.body.password, salt);

        try {
            this.user = await RegisterModel.create(this.body) //Registrando na base de dados do MongoDB
        } catch (error) {
            console.log(error);
        }
    }

    async userExists() {
        const user = await RegisterModel.findOne({ email: this.body.email });

        if(user) this.errors.push('Usuário já existe')
    }

    valida() {
        this.cleanUp() // 
        // Email valido
        if (!validator.isEmail(this.body.email)) {
            this.errors.push('E-mail inválido!!!')
        }
        // senha entre 3 e 50
        if (this.body.password.length < 3 || this.body.password.length > 50) {
            this.errors.push('Senha deve estar entre 3 e 50 caracters!!!')
        }
    }

    // Vamos garantir que tudo que vier dentro do body seja uma string, não queremos nada além de string
    cleanUp() {
        for (const key in this.body) {
            if (typeof this.body[key] !== 'string') {
                this.body = '';
            }
        }

        this.body = {
            email: this.body.email,
            password: this.body.password
        }
    }
}

module.exports = Register;