import React, { useEffect} from 'react';
import NavBar from '../NavBar/NavBar'
import { StyledContainer } from '../Home/style';
import {Box, Stack,TextField} from '@mui/material'
import person from '../../images/person.png';
import {SingleStudentImage, SingleStudentImageBox, StyledBox, StyledLoadingButton} from './style.js'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {getOneStudent, updateStudent} from '../../redux/slice/studentSlice';
import {useForm} from 'react-hook-form';
import {toast} from 'react-toastify'
import { yupResolver } from '@hookform/resolvers/yup';
import { studentSchema } from '../../utils/yup';
import { BASE_URL } from '../../utils/constants';

const SingleStudent = () => {
  const {student,status} = useSelector(state => state.student);

  const {id} = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //GET ONE STUDENT BY ID
  useEffect(() => {
    if(id){
      dispatch(getOneStudent(id))
    }
  },[id]);

  //NAVIGATE HOME PAGE AND TOAST STATUS
  useEffect(() => {
    if(status === "Успешно обновлен") {navigate("/");
    toast(status)}
  },[status]);

  //REACT-HOOK-FORM
  const {register,formState:{errors},handleSubmit} = useForm({
    mode:"onBlur",
    defaultValues:{
      firstName:student?.firstName,
      lastName:student?.lastName,
      userName:student?.userName,
      email:student?.email,
  },resolver:yupResolver(studentSchema)})

  const onHandleSubmit = updateData => {
    dispatch(updateStudent({updateData,id}));
  }

  return (
    <>
    <NavBar/>
    {student !== null && (
      <StyledContainer>
      <Stack direction={{xs:"column",sm:"row"}} spacing={2}>
      
        <SingleStudentImageBox  flex={2}>
          <SingleStudentImage component={"img"} src={`${BASE_URL}/uploads/student/${student?.image}`} >
          </SingleStudentImage>
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
               />
               
               <StyledLoadingButton
                 loading = {false}
                 type="submit"
                 variant="contained"
                 >
                    Обновить
                 </StyledLoadingButton>
           </form>
         </StyledBox>
           </Box>
      </Stack>
   </StyledContainer>
    )}
    </>
    
   
  )
}

export default SingleStudent