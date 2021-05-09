exports.middlewareGlobal = (req, res, next) => {
    res.locals.errors = req.flash('errors'); // captura as mensagens do flash na tela
    res.locals.success = req.flash('success');
    res.locals.user = req.session.user;
    next();
};

exports.checkError = (err, req, res, next) => {
    if(err) {
        return res.render('404')
    }

    next();
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}