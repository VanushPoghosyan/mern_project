import React from 'react'
import { RootBox} from './style';
import {Grid} from '@mui/material';
import Student from './Student';

const Students = ({students = []}) => {
  
  return (
    <RootBox>
        <Grid container >
            {students.map((student) => (
              <Student key={student._id} student = {student}/>
            ))}
        </Grid>
    </RootBox>
  )
}

export default Students