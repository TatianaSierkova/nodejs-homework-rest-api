const signup = require('./signup');
const login = require('./login');
const getCurrent = require('./getCurrent');
const logout = require('./logout');
const updateAvatar = require('./updateAvatar');
const resentVerificationMail = require('./resentVerificationMail');
const verifyEmail = require('./verifyEmail');

module.exports = {
    signup,
    login,
    getCurrent,
    logout,
    updateAvatar,
    verifyEmail,
    resentVerificationMail,
}