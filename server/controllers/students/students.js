import Student from '../../models/student/student.js';
import fs from "fs";
import path from 'path'

export const createStudent = async(req,res) => {
    try{
        if(!req.body)return res.json({message :"Пустые данные"});

        const {firstName,lastName,userName,email} = req.body;

        const fileName = `${req.file?.originalname}`;

        //Find current student by email
        const candidate = await Student.findOne({email});
        if(candidate) return res.json({message : "Пользователь с таким email уже существует"});

        //Create student
        const student = new Student({firstName,lastName,userName,email,
            image:fileName === "undefined" ? "person.png" : fileName});
        await student.save();

        return res.json({student,message:"Студент успешно создан"})

    }catch(e){
        console.log(e);
        return res.json({message:"Не удалось создать"})
    }
}

export const updateStudent = async(req,res) => {
    try{
        if(!req.body)return res.json({message :"Пустые данные"});

        const {firstName,lastName,userName,email} = req.body;

        //Find by ID and update
        const student = await Student.findByIdAndUpdate(
            {_id:req.params.id},
            {firstName,lastName,userName,email},
            {returnDocument:"after"})

        return res.json({student,message:"Успешно обновлен"})

    }catch(e){
        console.log(e);
        return res.json({message:"Пустой список"})
    }
}

export const deleteStudent = async(req,res) => {
    try{
        //FIND CURRENT STUDENT
        const currentStudent = await Student.findById({_id:req.params.id});
        const currentImage = currentStudent.image;

        //DELETE A PHOTO FROM A UPLOADS FOLDER
        const pathName = path.join("uploads","student");
        if(currentImage !== "person.png"){
            fs.unlinkSync(`${pathName}/${currentImage}`);
        }
        
        //Find by ID and delete
       await Student.findByIdAndRemove(
        {_id:req.params.id},
        {returnDocument:"after"});

        //GET STUDENTS
        const students = await Student.find();
        return res.json({students,message:"Успешно удалено"})

    }catch(e){
        console.log(e);
        return res.json({message:"Пустой список"})
    }
}

export const getAllStudents = async(req,res) => {
    try{
        const students = await Student.find();
        
        if(!students)return res.json({message :"Пустой список"});

        return res.json({students})

    }catch(e){
        console.log(e);
        return res.json({message:"Пустой список"})
    }
}

export const getOneStudent = async(req,res) => {
    try{
        const student = await Student.findById({_id:req.params.id});
        
        if(!student)return res.json({message :"Таково студента не существует"});

        return res.json({student})

    }catch(e){
        console.log(e);
        return res.json({message:"Таково студента не существует"})
    }
}