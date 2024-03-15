const jwt= require('jsonwebtoken')

function authToken(req,res,next){
    const authHeader =req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token==null) return res.sendStatus(401).json({message:'Authorixation Error: Check Token'}); 

    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
        if (err) return res.sendStatus(401).json({message:'Access Not Allowed'})
        next()
    })
}
module.exports=authToken