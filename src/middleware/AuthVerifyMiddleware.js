const jwt = require('jsonwebtoken')

module.exports = (req, res, next)=>{
    let Token = req.headers['token'];
    jwt.verify(Token,"Azad123", function (err,decoded){
        if(err){
            console.log(Token);
            res.status(401).json({status:"Unauthorized"})
        }
        else
        {
            let email = decoded['data'];
            console.log(email);
            req.headers.email= email;
            next();
        }
    });
}


