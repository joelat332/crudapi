const jwt= require('jsonwebtoken')

class authorization{

write = (req,res,next) =>{
    const authHeader =req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token==null) return res.sendStatus(401).json({message:'Authorization Error: Check Token'}); 
    try {
        const decode=jwt.decode(token,process.env.ACCESS_TOKEN_SECRET)
        if ((decode.Permission).includes("write")){
            console.log("Access Allowed")
            next()
        }
        else{
            res.status(403).send('Unauthorized');
        }
    } catch (error) {
        res.status(401).send('Unauthorized');        
    }
}

read = (req,res,next) =>{
    const authHeader =req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token==null) return res.sendStatus(401).json({message:'Authorization Error: Check Token'}); 
    try {
        const decode=jwt.decode(token,process.env.ACCESS_TOKEN_SECRET)
        if ((decode.Permission).includes("read")){
            console.log("Access Allowed")
            next()
        }
        else{
            res.status(403).send('Unauthorized');
        }
    } catch (error) {
        res.status(401).send('Unauthorized');        
    }
}

}
module.exports = new authorization