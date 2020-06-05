// var bcrypt = require('bcrypt');
var saltRounds = 10;

/**
 * checks if the user is logged in and if not redirects to login page.
 * @type {{is_login: Auth.is_login}}
 */
var Auth = {
    is_login: function (req, res, next) {
        if (!req.session.userId || req.session.userId == null) {
            return res.redirect('/');
        }

        next();
    },
    is_not_loggedin: function (req, res, next) {
        if (req.session.userId || req.session.userId != null) {
            return res.redirect('/index')
        }
        next();
    }
    // createSaltedPassword: function (password) {
    //     bcrypt.genSalt(saltRounds, function (err, salt) {
    //     if (err) {
    //       throw err
    //     } else {
    //       bcrypt.hash(password, salt, function(err, hash) {
    //         if (err) {
    //           throw err
    //         } else {
    //           return hash;
    //           //$2a$10$FEBywZh8u9M0Cec/0mWep.1kXrwKeiWDba6tdKvDfEBjyePJnDT7K
    //         }
    //       })
    //     }
    //   })
    // },

    // compareSaltedPassword: function (passwordEnteredByUser, hash) {
    //     bcrypt.compare(passwordEnteredByUser, hash, function(err, isMatch) {
    //         if (err) {
    //           throw err
    //         } else if (!isMatch) {
    //           console.log("Password doesn't match!")
    //         } else {
    //           console.log("Password matches!")
    //         }
    //       })
    // }
};


module.exports = Auth;