<<<<<<< HEAD
const Contato = require('../models/ContatoModel')

exports.index = async (req, res) => {
    const contatos = await Contato.buscaContatos()
    res.render('index', { contatos });
=======
exports.index = (req, res) => {
    console.log(req.flash('info'));
    res.render('index');
>>>>>>> 431bcaf13129cd0812a8a8d74dd4385ed7fb0f00
}