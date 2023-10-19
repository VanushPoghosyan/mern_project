import jwt from 'jsonwebtoken';

export const checkAuth = async(req,res,next) => {
    try{
        const token = (req.headers.authorization || "").replace(/^Bearer\s/,"") ;

        if(!token)return res.json({message: "Нет доступа"});
        const decoded = await jwt.verify(token,process.env.JWT_SECRET_KEY);
        req.userId = decoded.id;
        next()
    }catch(e){
        console.log(e);
        return res.json({message: "Нет доступа"})
    }
}