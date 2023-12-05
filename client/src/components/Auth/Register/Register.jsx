import React, { useEffect, useState } from 'react';
import {TextField,FormControl,InputLabel,MenuItem,Box,Checkbox,FormGroup,FormControlLabel} from '@mui/material';
import { RootBox,  StyledAuthTypography,  StyledBox, StyledLink, StyledLoadingButton, StyledTitle } from './styles.js';
import { useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {  registerSchema } from '../../../utils/yup.js';
import {useDispatch, useSelector} from 'react-redux'
import { isCheckAuth, registerUser } from '../../../redux/slice/authSlice.js';
import Select, { SelectChangeEvent } from '@mui/material/Select';
// import { countries } from '../../../data/data.js';

import {toast} from 'react-toastify'
import axios from '../../../utils/axios.js';

const Register =  () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const isAuth = useSelector(isCheckAuth);
    const{status,token,isLoading} = useSelector(state => state.auth);

    const[gender,setGender] = useState("");

    const[countries,setCountries] = useState([]);
    useEffect(() => {
      async function getCountries(){
        const {data} = await axios.get("/country");
        setCountries(data.countries)
        
      };
      getCountries()
    },[]);

    //Navigate home page when isAuth true and localStorage set token
    useEffect(() =>{
      if(isAuth){
        window.localStorage.setItem("token",token);
        navigate("/");
      }
    },[isAuth]);

    //TOAST status
    useEffect(()=> {
      if(status === "Регистрация прошла успешно")toast(status)
    },[status])

    //useForm
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        mode: "onBlur",
        defaultValues: {
          firstName:"",
          lastName:"",
          userName:"",
          email: "",
          password: "",
        },resolver:yupResolver(registerSchema)
      });

      const onHandleSubmit = (data)=> {
        data.country = country;
        data.gender = gender;
        dispatch(registerUser(data))
      }

      const [country, setCountry] = React.useState('');
      const handleChange = (event) => {
        setCountry(event.target.value);
      };

  return (
    <RootBox>
    <StyledBox component="div">
        <form onSubmit={handleSubmit(onHandleSubmit)} style={{
            display:"flex",
            flexDirection:"column",
            width:"100%"
        }}>
        <StyledTitle variant="h4" margin="normal" align='center'>
        Регистрация
      </StyledTitle>
      <TextField
        {...register("firstName")}
        error={!!errors.firstName}
        helperText={errors?.firstName?.message}
        margin="normal"
        fullWidth
        variant="outlined"
        label="FirstName"
      />
      <TextField
        {...register("lastName")}
        error={!!errors.lastName}
        helperText={errors?.lastName?.message}
        margin="normal"
        fullWidth
        variant="outlined"
        label="LastName"
      />
      <TextField
        {...register("userName")}
        error={!!errors.userName}
        helperText={errors?.userName?.message}
        margin="normal"
        fullWidth
        variant="outlined"
        label="UserName"
      />
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

    <Box sx={{ minWidth: 120,mt:2,mb:2 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Country</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={country}
          label="Country"
          onChange={handleChange}
        >
          {countries.map(({id,countryName}) => (
              <MenuItem  key={id} value={countryName}>{countryName}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>

    <Box>
        <FormControlLabel control={<Checkbox onChange={() => setGender("men")}/>} label="Men"/>
        <FormControlLabel control={<Checkbox onChange={() => setGender("women")}/>} label="Women" />            
    </Box>
     
      <StyledLoadingButton
        loading={!!isLoading}
        type="submit"
        variant="contained"
      >
        Зарегистрироваться
      </StyledLoadingButton>
      <StyledAuthTypography variant="h4" align='center'>
      у вас есть аккаунт?
        <StyledLink component="span" onClick={()=> navigate("/login")}>Войти</StyledLink>
      </StyledAuthTypography>
        </form>
      
    </StyledBox>
    </RootBox>
  )
}

export default Register