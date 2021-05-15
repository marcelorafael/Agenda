exports.index = (req, res) => {
    console.log(req.flash('info'));
    res.render('index');
}