const { logInValidator, signInValidator } = require('../validators/user.validator');
const { useRedis } = require('../services/useRedis');

module.exports.signin = async (req, res, next) => {
    const { username, password } = req.body;

    // The beggin we are find this data in the redis server (redis server data check - is very fast)
    if(true)
    // is valid username and password
    {

        const result = await useRedis.find(username);
        if(result)
        {
            res.send(result);
        }
        else
        {

            if(signInValidator.findUser({username: username, password: password})) 
            {
                await useRedis.insert(`${username}-id`, username);
                res.send(result);
            } else {
                res.send('so user is not signed in redis and mongodb')
            }

        }
    }

};


module.exports.signup = async (req, res, next) => {

}

module.exports.logout = async ( req, res, next ) => {
    
}