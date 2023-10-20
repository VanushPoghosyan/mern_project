import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from '../../utils/axios.js'

export const createStudent = createAsyncThunk("student/createStudent",
    async(payload,thunkAPI) => {
        try{
            const {data} = await axios.post("/students",payload);
            return data
        }catch(e){
            console.log(e);
            thunkAPI.rejectWithValue(e)
        }
    });

export const updateStudent = createAsyncThunk("student/updateStudent",
    async({updateData,id},thunkAPI) => {
        try{
            const {data} = await axios.put(`/students/${id}`,updateData);
            
            return data
        }catch(e){
            console.log(e);
            thunkAPI.rejectWithValue(e)
        }
    });
export const getAllStudents = createAsyncThunk("student/getAllStudents",
    async(_,thunkAPI) => {
        try{
            const {data} = await axios.get("/students");
            return data
        }catch(e){
            console.log(e);
            thunkAPI.rejectWithValue(e)
        }
    });

export const getOneStudent = createAsyncThunk("student/getOneStudent",
    async(id,thunkAPI) => {
        try{
            const {data} = await axios.get(`/students/${id}`);
            return data
        }catch(e){
            console.log(e);
            thunkAPI.rejectWithValue(e)
        }
    });


export const deleteStudent = createAsyncThunk("student/deleteStudent",
    async({id},thunkAPI) => {
        try{
            const {data} = await axios.delete(`/students/${id}`);
            return data
        }catch(e){
            console.log(e);
            thunkAPI.rejectWithValue(e)
        }
    })



const initialState = {
    isLoading:false,
    students:[],
    student:{},
    status:null
}
const studentSlice = createSlice({
    name :"student",
    initialState,
    reducers:{},
    extraReducers:builder => {
        //CREATE STUDENT
        builder.addCase(createStudent.pending,(state) => {
            state.isLoading = true;
            state.student=null;
            state.students = null;
            state.status = null
        });
        builder.addCase(createStudent.fulfilled,(state,{payload}) => {
            state.isLoading = false;
            state.student=payload?.student;
            state.students = null;
            state.status = payload?.message

        });
        builder.addCase(createStudent.rejected,(state,{payload}) => {
            state.isLoading = true;
            state.student=null;
            state.students = null;
            state.status = payload?.message
        });

        //UPDATE STUDENT
        builder.addCase(updateStudent.pending,(state) => {
            state.isLoading = true;
            state.student=null;
            state.students = null;
            state.status = null
        });
        builder.addCase(updateStudent.fulfilled,(state,{payload}) => {
            state.isLoading = false;
            state.student=payload?.student;
            state.students = null;
            state.status = payload?.message

        });
        builder.addCase(updateStudent.rejected,(state,{payload}) => {
            state.isLoading = true;
            state.student=null;
            state.students = null;
            state.status = payload?.message
        });

        //GET ALL STUDENTS
        builder.addCase(getAllStudents.pending,(state) => {
            state.isLoading = true;
            state.student=null;
            state.students = null;
            state.status = null
        });
        builder.addCase(getAllStudents.fulfilled,(state,{payload}) => {
            state.isLoading = false;
            state.student=null;
            state.students = payload?.students;
            state.status = null

        });
        builder.addCase(getAllStudents.rejected,(state,{payload}) => {
            state.isLoading = true;
            state.student=null;
            state.students = null;
            state.status = payload?.message
        });

         //GET ONE STUDENT
         builder.addCase(getOneStudent.pending,(state) => {
            state.isLoading = true;
            state.student=null;
            state.students = null;
            state.status = null
        });
        builder.addCase(getOneStudent.fulfilled,(state,{payload}) => {
            state.isLoading = false;
            state.student=payload?.student;
            state.students = null;
            state.status = null

        });
        builder.addCase(getOneStudent.rejected,(state,{payload}) => {
            state.isLoading = true;
            state.student=null;
            state.students = null;
            state.status = payload?.message
        });

         //DELETE STUDENT
         builder.addCase(deleteStudent.pending,(state) => {
            state.isLoading = true;
            state.student=null;
            state.students = null;
            state.status = null
        });
        builder.addCase(deleteStudent.fulfilled,(state,{payload}) => {
            state.isLoading = false;
            state.student=null;
            console.log(payload);
            state.students = payload?.students;
            state.status = payload?.message

        });
        builder.addCase(deleteStudent.rejected,(state,{payload}) => {
            state.isLoading = true;
            state.student=null;
            state.students = null;
            state.status = payload?.message
        });
    }
});

export default studentSlice.reducer;