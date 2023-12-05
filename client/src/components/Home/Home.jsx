import React from 'react'
import NavBar from '../NavBar/NavBar'
import Students from '../Student/Students'
import { StyledContainer } from './style'
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Home = () => {
  const {students} = useSelector(state => state?.student);

  return (
    <>
    <NavBar/>
    <StyledContainer maxWidth={"lg"}>
      {students?.length > 0 && (<Students students = {students}/>)}
    </StyledContainer>
    <ToastContainer position= "bottom-right"/>
    </>
    
  )
}

export default Home