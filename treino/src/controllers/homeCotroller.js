exports.paginaInicial = (req, res) => {
    console.log(req.flash('info'));
    res.render('index', {
        // titulo:'Título',
        numeros:[0,102,30,4]
    });
}

exports.trataPost = (req, res) => {
    res.send('Olá meu amigo');
}