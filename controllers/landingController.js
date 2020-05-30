exports.landing = function(req, res) {
    // todo pass current user's data through parameters
    // todo get user's role from coockie
    console.log("Palfuhjeih")
    console.log(req.session.userId)
    res.render('index', { title: 'SEMP-Sistemi Elektronik për Menaxhimin e Pagave' });
}

exports.login = function(req, res) {
    res.render('login', { title: 'SEMP-Sistemi Elektronik për Menaxhimin e Pagave', message: '' });
}