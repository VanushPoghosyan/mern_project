import React, { useEffect } from 'react'
import { RootGrid, StyledCard, StyledCardMedia, StyledTypography } from './style';
import {CardMedia,CardContent, IconButton} from '@mui/material'
import person from '../../images/person.png';
import {useNavigate} from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import {useDispatch, useSelector} from 'react-redux'
import { deleteStudent } from '../../redux/slice/studentSlice';
import {isCheckAuth} from '../../redux/slice/authSlice';
import { toast} from 'react-toastify';
import {BASE_URL} from '../../utils/constants.js'

const Student = ({student:{_id,firstName,lastName,userName,image}}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isAuth = useSelector(isCheckAuth);
  const {status} = useSelector(state => state.student);

  //TOAST
  useEffect(() => {
    if(status === "Успешно удалено") toast(status);
  },[status]);


  const imageUrl = `${BASE_URL}/uploads/student/${image}`;
  
  return (
    <RootGrid item xs={4} sm={3} md={2} lg={2}>
        <StyledCard >
            <StyledCardMedia
                onClick={(() => {navigate(`/students/${_id}`)})}
                component="img"
                image={imageUrl}
                title="Student image"       
                />
            <CardContent>
                <StyledTypography variant='body2'>{firstName + " " + lastName} </StyledTypography>
                <StyledTypography variant='body2'>{userName}</StyledTypography>
            </CardContent>
            {isAuth && (
                <IconButton onClick={() => {dispatch(deleteStudent({id:_id}))}}>
                    <DeleteIcon/>
                </IconButton> 
            )}  
        </StyledCard>
        
        
    </RootGrid>
  )
}

export default Student