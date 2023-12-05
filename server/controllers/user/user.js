import bcrypt from 'bcrypt';
import User from '../../models/user/user.js';
import jwt from 'jsonwebtoken'

const generateToken = async(id) => {
    return jwt.sign({id},process.env.JWT_SECRET_KEY,{expiresIn:"24h"})
}

export const register = async(req,res) => {
    try{
        if(!req.body)return res.json({message :"Пустые данные"});

        const {firstName,lastName,userName,email,country,gender} = req.body;

        //FIND USER BY EMAIL
        const candidate = await User.findOne({email});
        if(candidate) return res.json({message : "Пользователь с таким email уже существует"});

        //HASH PASSWORD
        const hashPassword = await bcrypt.hash(req.body.password,10);

        //CREATE USER
        const user = new User({firstName,lastName,userName,email,password:hashPassword,country,gender});
        await user.save();

        //CREATE TOKEN
        const token = await generateToken(user._id);

        const {password,...userData} = user._doc;

        return res.status(201).json({message :"Регистрация прошла успешно",user:userData,token})

    }catch(e){
        console.log(e);
        return res.json({message : "Пользователь не зарегистрирован"})
    }
}

export const login = async(req,res) => {
    try{
        if(!req.body)return res.json({message :"Пустые данные"});

        const {email} = req.body;

         //CREATE USER
         const user = await User.findOne({email});
         if (!user){
             return res.json({message : "Пользователь не найден"})
         }

          //COMPARE PASSWORD
        const comparePassword = await bcrypt.compare(req.body.password,user.password);
        if (!comparePassword){
            return res.json({message : "Доступ запрещен"})
        }

        //CREATE TOKEN
        const token = await generateToken(user._id);

        const {password,...userData} = user._doc;

        return res.json({token,userData,message:"Авторизация прошла успешно"})

    }catch(e){
        console.log(e);
        return res.json({message:"Ошибка авторизации"})
    }
}

export const checkAuth = async(req,res) => {
    try{
        const user = await User.findById({_id : req.userId});

        if (!user) return res.json({message: 'Такого пользователя не существует'});

        //CREATE TOKEN
        const token = await generateToken(user.id);

        const {password,...userData} = user._doc;
        
        res.json({user:userData,token})
    }catch(e){
        console.log(e);
        return res.json({message: "Нет доступа"})
    }
}