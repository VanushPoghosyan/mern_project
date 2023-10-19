import {configureStore} from '@reduxjs/toolkit';
import authSlice from './slice/authSlice.js';
import studentSlice from './slice/studentSlice.js';

const store = configureStore({
    reducer:{
        auth:authSlice,
        student:studentSlice
    }
});

export default store