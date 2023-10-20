import React, { useEffect, useState } from 'react';
import {AppBar,Avatar,Box,IconButton} from '@mui/material'
import { AuthTypography, LogoTypography, SearchBox, SearchListBox, SearchItemName, StyledAccount, StyledAccountName, StyledBox, StyledInputBase, StyledToolbar, SearchItemBox } from './styles';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { isCheckAuth, logOut } from '../../redux/slice/authSlice';
import {toast} from 'react-toastify';
import {BASE_URL} from '../../utils/constants.js'

const NavBar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isAuth = useSelector(isCheckAuth);
    const {user,status} = useSelector(state => state?.auth);
    const {students} = useSelector(state => state.student)

    //search firstName; LIVE SEARCH
    const [name,setName] = useState("");
    const [searchedList,setSearchedList] = useState([]);
    useEffect(() => {
      const searchItem = students?.filter(({firstName,lastName}) => (firstName + " " + lastName)
      .includes(name.toLowerCase())).filter((_,i) => i < 10);
      setSearchedList(searchItem);
      if(name === "")setSearchedList([])
    },[name]);
    
    
    //USER NAME
    const [avatar,setAvatar] = useState("");
    useEffect(()=> {
      if(user !== null)
        setAvatar(user?.firstName)
    },[user])

    //TOAST ststus
    useEffect(() => {
      if(status === "Вы вышли из аккаунта")toast(status)
    },[status]);

  return (
    <AppBar position='static' sx={{background:"#6B7280"}}>
        <StyledToolbar>
          <IconButton onClick={() => {navigate("/")}} sx={{color:"white"}}>
            <LogoTypography >Logo</LogoTypography>
          </IconButton>
            
            {isAuth && (
              <StyledAccount>
                  <Avatar alt={user?.firstName} src= {avatar} sx={{cursor:"pointer"}}/>
                  <StyledAccountName>{avatar}</StyledAccountName>
                </StyledAccount>
            ) }
            <SearchBox>
              <form
                onSubmit={e => {
                  e.preventDefault();
                }}
               style={{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",height:"100%"}}>
                <IconButton>
                  <SearchIcon/>
                </IconButton>
                <StyledInputBase onChange={e => setName(e.target.value)} placeholder='Search'>{name}</StyledInputBase>
              </form>
              
              {searchedList.length > 0 ? (
              <SearchListBox>
                {searchedList.map(({_id,firstName,lastName,image}) => (
                  <SearchItemBox key={firstName} onClick={() => {navigate(`/students/${_id}`)}} mt={1}>
                    <Avatar src={`${BASE_URL}/uploads/student/${image}`} alt={firstName}/>
                    <SearchItemName>{firstName + " " + lastName}</SearchItemName>
                  </SearchItemBox>
                ))}
              </SearchListBox>
              ):""}
            </SearchBox>
            {isAuth ? (
                 <StyledBox>
                 <AuthTypography onClick={() => {navigate("/students/create")}}>Create Student</AuthTypography>
                 <AuthTypography onClick={() => {
                dispatch(logOut());
                window.localStorage.removeItem("token")
                navigate("/")}}>Log Out</AuthTypography>
                 
             </StyledBox>
            ):(
              <AuthTypography onClick={() => navigate("/login")}>Sign In</AuthTypography>
            )}
           
               
            
        </StyledToolbar>
    </AppBar>
  )
}

export default NavBar