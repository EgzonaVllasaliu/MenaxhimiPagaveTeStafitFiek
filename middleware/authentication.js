/**
 * checks if the user is logged in and if not redirects to login page.
 * @type {{is_login: Auth.is_login}}
 */
var Auth = {
    is_login: function(req, res, next) {
        if (!req.session.userId || req.session.userId == null) {
            return res.redirect('/');
        }

        next();
    },
    is_not_loggedin: function(req, res, next) {
        if (req.session.userId || req.session.userId != null) {
            return res.redirect('/index')
        }
        next();
    }
};


module.exports = Auth;