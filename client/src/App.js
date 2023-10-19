import { useEffect } from "react";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";
import Home from "./components/Home/Home";
import {Routes,Route, useParams, useLocation} from 'react-router-dom'
import { useDispatch } from "react-redux";
import { checkAuthUser } from "./redux/slice/authSlice";
import SingleStudent from "./components/Student/SingleStudent";
import { getAllStudents } from "./redux/slice/studentSlice";
import PrivetRoute from "./utils/PrivetRoute";
import CreateStudent from "./components/Student/CreateStudent";

function App() {
  const dispatch = useDispatch();
  const {pathname} = useLocation();

  useEffect(()=> {
    dispatch(checkAuthUser());
    dispatch(getAllStudents())
  },[]);

  useEffect(()=> {
    if(pathname === "/")
    dispatch(getAllStudents())
  },[pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route element={<PrivetRoute/>}>
          <Route path="/students/:id" element={<SingleStudent/>}/>
          <Route path="/students/create" element={<CreateStudent/>}/>
        </Route>
        <Route path="*" element={<Home/>}/>
      </Routes>
      
    </>
  );
}

export default App;
