exports.homePage = (req, res) => {
    req.session.user = { name: 'Raphael', log: 'true'}
    res.render('index');
    return;
}


exports.postPage = (req, res) => {
    res.send(req.body);
    return;
}