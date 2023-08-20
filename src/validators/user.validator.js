const { users } = require('../database/mok.data');

const abstractValidator = {
    username(field) {
        const checkLength = field.length > 0;
        const checkFirstChar = field.charAt(0) === '@';
        if(checkFirstChar && checkLength) return true; else return false;
    },

    password(field) {
        const checkLength = field.length > 4;
        const checkFirstChar = field.charAt(0) === '!';
        if(checkFirstChar && checkLength) return true; else return false;
    }
};

const signInValidator = Object.assign(abstractValidator, {
    findUser(data) {
        if(signInValidator.username(data.username) && signInValidator.password(data.password))
        {
            return users[0].username === data.username && users[0].password === data.password ? true : false;
        } else return false;
    },
});

const logInValidator = Object.assign(abstractValidator, {
    findUser(data) {
        if(logInValidator.username(data.username) && logInValidator.password(data.password))
        {
            return users[0].username === data.username && users[0].password === data.password ? true : false;
        } else return false;
    },
});

module.exports.signInValidator = signInValidator;
module.exports.logInValidator = logInValidator;
