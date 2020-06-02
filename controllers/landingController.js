exports.landing = function(req, res) {
    // todo pass current user's data through parameters
    // todo get user's role from coockie
    var result = 2 + 2;
    console.log(result)
    res.render('index', { title: 'SEMP-Sistemi Elektronik për Menaxhimin e Pagave', result: result });
}

exports.login = function(req, res) {
    res.render('login', { title: 'SEMP-Sistemi Elektronik për Menaxhimin e Pagave', message: '' });
}