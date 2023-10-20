import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from '../../utils/axios.js';

export const registerUser = createAsyncThunk("auth/registerUser",
    async(payload,ThunkAPI)=> {
        try{
            const {data} = await axios.post("/auth/register",payload);
            return data

        }catch(e){
            console.log(e);
            throw ThunkAPI.rejectWithValue(e)
        }
})

export const loginUser = createAsyncThunk("auth/loginUser",
    async(payload,ThunkAPI)=> {
        try{
            const {data} = await axios.post("/auth/login",payload);
            return data

        }catch(e){
            console.log(e);
            throw ThunkAPI.rejectWithValue(e)
        }
})

export const checkAuthUser = createAsyncThunk("auth/checkAuthUser",
    async(_,ThunkAPI)=> {
        try{
            const {data} = await axios.get("/auth/check");
            return data

        }catch(e){
            console.log(e);
            throw ThunkAPI.rejectWithValue(e)
        }
})

const initialState = {
    isLoading:false,
    user:null,
    token:null,
    status:null
};
const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        logOut: (state) => {
            state.isLoading = false;
            state.user = null;
            state.token=null;
            state.status = "Вы вышли из аккаунта"
        }
    },
    extraReducers:(builder)=>{
        //REGISTER USER
        builder.addCase(registerUser.pending,(state) => {
            state.isLoading = true;
            state.user = null;
            state.token = null
        });
        builder.addCase(registerUser.fulfilled,(state,{payload}) => {
            state.isLoading = false;
            state.user = payload?.user;
            state.token = payload?.token;
            state.status = payload?.message
        });
        builder.addCase(registerUser.rejected,(state,{payload}) => {
            state.isLoading = false;
            state.user = null;
            state.token = null;
            state.status = payload?.message
        });

         //LOGIN USER
         builder.addCase(loginUser.pending,(state) => {
            state.isLoading = true;
            state.user = null;
            state.token = null
        });
        builder.addCase(loginUser.fulfilled,(state,{payload}) => {
            state.isLoading = false;
            state.user = payload?.userData;
            state.token = payload?.token;
            state.status = payload?.message
        });
        builder.addCase(loginUser.rejected,(state,{payload}) => {
            state.isLoading = false;
            state.user = null;
            state.token = null;
            state.status = payload?.message
        });

        //CHECK AUTH USER
        builder.addCase(checkAuthUser.pending,(state) => {
            state.isLoading = true;
            state.user = null;
            state.token = null;
            state.status = null
        });
        builder.addCase(checkAuthUser.fulfilled,(state,{payload}) => {
            state.isLoading = false;
            state.user = payload?.user || null;
            state.token = payload?.token || null;
            state.status = payload?.message
        });
        builder.addCase(checkAuthUser.rejected,(state,{payload}) => {
            state.isLoading = false;
            state.user = null;
            state.token = null;
            state.status = payload.message
        })
    }
});
export const isCheckAuth = state => Boolean(state.auth.token);

export const {logOut} = authSlice.actions;
export default authSlice.reducer;