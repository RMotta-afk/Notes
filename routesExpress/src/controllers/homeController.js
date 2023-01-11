exports.homePage = (req, res, next) => {  
        res.render('index');
        next();
}

exports.secondPage = (req, res) => {
    res.send('New one for posting');
}