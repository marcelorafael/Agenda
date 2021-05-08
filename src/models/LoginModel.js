const mongoose = require('mongoose');
const { default: validator } = require('validator');

const LoginSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true }
});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.user = null;
    }

    async register() {
        this.valida();
        if(this.errors.length > 0) return;
        try {
            this.user = await LoginModel.create(this.body);
        } catch (error) {
            console.log(error);
        }
        

    }

    valida() {
        this.cleanUp();
        // e-mail válido
        if (!validator.isEmail(this.body.email)) {
            this.errors.push('E-mail invákido');
        }

        // Senha < 3 e > 50
        if(this.body.password.length < 3 || this.body.length > 50) {
            this.errors.push('Senha deve ter entre 3 e 50 caractérs')
        }
    }

    // Roda nas chaves do body e garante que tudo vai ser string
    cleanUp() {
        for (const key in this.body) {
            if (typeof this.body[key] !== 'string') {
                this.body[key] = '';
            }
        }

        this.body = {
            email: this.body.email,
            password: this.body.password
        }
    }
}

module.exports = Login;