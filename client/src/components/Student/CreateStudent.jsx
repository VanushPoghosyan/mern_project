import React, { useEffect, useState } from 'react';
import NavBar from '../NavBar/NavBar'
import { StyledContainer } from '../Home/style';
import {Box, Stack,TextField} from '@mui/material'
import person from '../../images/person.png';
import {SingleStudentImage, SingleStudentImageBox, StyledBox, StyledLoadingButton} from './style.js'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createStudent} from '../../redux/slice/studentSlice';
import {useForm} from 'react-hook-form';
import {toast} from 'react-toastify';
import {yupResolver} from '@hookform/resolvers/yup';
import { studentSchema} from '../../utils/yup.js';

const CreateStudent = () => {
  const {student,status} = useSelector(state => state.student);

  const {id} = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //NAVIGATE HOME PAGE AND TOAST STATUS
  useEffect(() => {
      if(status === "Студент успешно создан") {navigate("/");toast(status)}
      else{
        toast(status)
      }
    
  },[status]);

  //REACT-HOOK-FORM
  const {register,formState:{errors},handleSubmit} = useForm({
    mode:"onBlur",
    defaultValues:{
      firstName:"",
      lastName:"",
      userName:"",
      email:""
  },resolver:yupResolver(studentSchema)})

  const [image,setImage] = useState("");

  const onHandleSubmit = data => {
    const formData = new FormData();
    formData.append("firstName",data?.firstName);
    formData.append("lastName",data?.lastName);
    formData.append("userName",data?.userName);
    formData.append("email",data?.email);
    formData.append("image",image)

    dispatch(createStudent(formData));
  }

  return (
    <>
    <NavBar/>
      <StyledContainer>
      <Stack direction={{xs:"column",sm:"row"}} spacing={2}>
       <SingleStudentImageBox flex={2}>
           <SingleStudentImage component={"img"} src={person} />
       </SingleStudentImageBox>

       <Box flex={4}>      
           <StyledBox component="div">
             <form 
                 onSubmit={handleSubmit(onHandleSubmit)}
                 style={{
                 display:"flex",
                 flexDirection:"column",
                 width:"100%"
             }}>
               <TextField
                 {...register("firstName")}
                 error={!!errors?.firstName}
                 helperText = {errors?.firstName?.message}
                 margin="normal"
                 fullWidth
                 variant="outlined"
                 defaultValue={student?.firstName}
                 size='small'
                 label="FirstName"
               />
               <TextField
                 {...register("lastName")}
                 error={!!errors?.lastName}
                 helperText={errors?.lastName?.message}
                 size='small'
                 margin="normal"
                 fullWidth
                 variant="outlined"
                 defaultValue={student?.lastName}
                 label="LastName"
               />
               <TextField
                 {...register("userName")}
                 error={!!errors?.userName}
                 helperText={errors?.userName?.message}
                 size='small'
                 margin="normal"
                 fullWidth
                 variant="outlined"
                 defaultValue={student?.userName}
                 label="UserName"
               />
               <TextField
                 {...register("email")}
                 error={!!errors?.email}
                 helperText={errors?.email?.message}
                 size='small'
                 margin="normal"
                 fullWidth
                 variant="outlined"
                 defaultValue={student?.email}
                 label="Email"
               />
               <input
                  style={{padding:"5px"}}
                  onChange={e => setImage(e.target.files[0])}
                  type="file"
                  autoComplete= "off"
                  id= "image"
                  name= "image"
                  accept="image/png, .jpeg, .jpg, image/gif"
                />
               <StyledLoadingButton
                 loading = {false}
                 type="submit"
                 variant="contained"
                 >
                     Создать
                 </StyledLoadingButton>
           </form>
         </StyledBox>
           </Box>
      </Stack>
   </StyledContainer>
 
    </>
    
   
  )
}

export default CreateStudent