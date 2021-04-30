exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Variável local';
    next();
};

exports.checkError = (err, req, res, next) => {
    if(err && err.code === 'EBADCSRFTOKEN') {
        return res.render('404')
    }
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}