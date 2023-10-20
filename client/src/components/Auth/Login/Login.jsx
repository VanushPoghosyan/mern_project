import React, { useEffect } from 'react';
import {TextField} from '@mui/material';
import { RootBox,  StyledAuthTypography,  StyledBox, StyledLink, StyledLoadingButton, StyledTitle } from './styles.js';
import { useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../../../utils/yup.js';
import {useDispatch, useSelector} from 'react-redux'
import { isCheckAuth, loginUser } from '../../../redux/slice/authSlice.js';
import {toast} from 'react-toastify'

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isAuth = useSelector(isCheckAuth);
    const {token,isLoading,status} = useSelector(state => state.auth);

    //Navigate home page when isAuth true and localStorage set token
    useEffect(() =>{
      if(isAuth){
        window.localStorage.setItem("token",token)
        navigate("/");
      }
    },[isAuth]);

    //TOAST status
    useEffect(()=> {
      if(status === "Авторизация прошла успешно")toast(status)
    },[status])

    //useForm
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        mode: "onBlur",
        defaultValues: {
          email: "",
          password: "",
        },resolver:yupResolver(loginSchema)
      });

      const onHandleSubmit = (data)=> {
        dispatch(loginUser(data))
      }

  return (
    <RootBox>
    <StyledBox component="div">
        <form onSubmit={handleSubmit(onHandleSubmit)} style={{
            display:"flex",
            flexDirection:"column",
            width:"100%"
        }}>
        <StyledTitle variant="h4" margin="normal" align='center'>
        Авторизация
      </StyledTitle>

      <TextField
        {...register("email")}
        error={!!errors.email}
        helperText={errors?.email?.message}
        margin="normal"
        fullWidth
        variant="outlined"
        label="Email"
      />
      <TextField
      {...register("password")}
      error={!!errors.password}
      helperText={errors?.password?.message}
        type="password"
        margin="normal"
        fullWidth
        variant="outlined"
        label="Password"
      />
     
      <StyledLoadingButton
        loading = {!!isLoading}
        type="submit"
        variant="contained"
      >
        Войти
      </StyledLoadingButton>
      <StyledAuthTypography variant="h4" align='center'>
        у вас нет аккаунта?
        <StyledLink component="span" onClick={()=> {navigate("/register")}}>Зарегистрироваться</StyledLink>
      </StyledAuthTypography>
        </form>
      
    </StyledBox>
    </RootBox>
  )
}

export default Login