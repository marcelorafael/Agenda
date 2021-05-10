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
<<<<<<< HEAD
}

exports.loginRequired = (req, res, next) => {
    if (!req.session.user) {
        req.flash('errors', 'Você precisa fazer login');
        req.session.save(() => res.redirect('/'))
        return;
    }

    next();
=======
>>>>>>> afe11a4c37f81d16f4be2c8747720e3f1ea55770
}