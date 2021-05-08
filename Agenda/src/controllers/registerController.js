const { LoaderTargetPlugin } = require('webpack');
const Register = require('../models/RegisterModel');

exports.index = (req, res) => {
    res.render('register');
}

exports.register = async (req, res) => {
    try {
        const registerUser = new Register(req.body);
        await registerUser.register();

        if (registerUser.errors.length > 0) {
            req.flash('errors', registerUser.errors);
            req.session.save(function () {
                return res.redirect('/register');
            });
            return;
        }

        req.flash('success', 'Usuário criado com sucesso');
        req.session.save(function () {
            return res.redirect('/register');
        });
    } catch (error) {
        console.log(error);
        return res.render('404');
    }
}